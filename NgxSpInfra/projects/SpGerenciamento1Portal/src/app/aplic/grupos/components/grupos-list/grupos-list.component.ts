import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';

import { MessageService } from 'ngx-sp-infra';
import { ProjectUtilservice } from 'src/app/project/utils/project-utils.service';

import { GruposService } from '../../services/grupos.service';

import { RetGrupos } from '../../models/2Ws/ret-grupos';
import { Grupo } from '../../models/7Db/grupo';

@Component( {
	selector: 'app-grupos-list',
	templateUrl: './grupos-list.component.html',
	styleUrls: [ './grupos-list.component.scss' ]
} )
export class GruposHomeComponent implements OnInit {
	constructor(
		public bsModalService: BsModalService,
		private messageService: MessageService,
		private projectUtilservice: ProjectUtilservice,
    	private grupoService: GruposService
	) { }

	ngOnInit(): void {
		this.getGrupos();
	}

	// #region READONLY
	public readonly MODAL_DELETE: number = 1;
	// #endregion READONLY	

	// #region VARIABLES
	public $retGrupoList: RetGrupos = new RetGrupos();
	public $grupoList: Grupo[] = [];
	private grupoId: number;
	public counter: number = 0;
	public page: number = 1;
	public itemsPerPage: number = 10;
	  // #endregion VARIABLES

	// #region HTTP METHODS

	// #region getGrupos
	public getGrupos(search: string = ""): void {

		this.grupoService.getGruposList(search).subscribe({
			next: response => {
				this.$retGrupoList = response;
				this.$grupoList = response.Grupos;

				this.counter = this.$grupoList.length
				this.resetPagination(this.$grupoList);
			},
			error: error => {
				this.projectUtilservice.showHttpError(error);

				this.$retGrupoList = new RetGrupos();
			}
		})

	}
	// #endregion getGrupos

	// #region deleteGrupo
	public deleteGrupo(grupoID: number): void {

		this.grupoService.deleteGrupo(grupoID).subscribe({
			next: response => {
				this.getGrupos();
				
				this.messageService.showAlertSuccess('Grupo excluído com sucesso.');
			},
			error: error => {
				this.projectUtilservice.showHttpError(error);
			}
		})

	}
	// #endregion deleteGrupo

	// #endregion HTTP METHODS
	
	// #region UTILITIES
	/** Modifica a quantidade de itens a ser mostrada na lista.
	 * @param event parâmetro de evento que irá selecionar a nova quantidade.
	 */
	public onSelectChange(event: any) {
		this.itemsPerPage = parseInt(event.target.value, 10);
		this.page = 1;
	}

	/** Reseta a paginação da listagem. */
	public resetPagination(list: any[]): void {
		// Cálculo para encontrar o valor inicial do index da página atual
		const startIndex = (this.page - 1) * this.itemsPerPage;

		// Condição para resetar o valor da paginação
		if (list.length <= startIndex) {
			this.page = 1;
		}

	}

	//#region Ordering, Sorting ou apenas Ordenação
	/**
	 * Método que faz a ordenação dos contratos na tela de listagem, em cada uma das células do cabeçalho da tabela, onde cada um  
	 *  dos elementos <th> representa uma coluna, de acordo com a lista de contratos que retorna do backend.
	 */
	// Objeto para armazenar a direção de ordenação de cada coluna
	public sortDirection: { [key: string]: string } = {};

	// Coluna atualmente selecionada para ordenação
	public currentSortColumn: string = '';

	// Função chamada quando ocorre uma mudança na ordenação
	onSortChange(event: { direction: string, column: string }) {
		const { direction, column } = event;

		// Verifica se a coluna atualmente selecionada é a mesma da nova seleção
		if (this.currentSortColumn === column) {
			// Alterna entre 'asc' e 'desc' para a direção de ordenação da coluna
			this.sortDirection[column] = this.sortDirection[column] === 'asc' ? 'asc' : 'desc';
		} else {
			// Define a nova coluna e a direção de ordenação como 'asc'
			this.currentSortColumn = column;
			this.sortDirection = { [column]: 'asc' };
		}

		// Realiza a ordenação dos dados da tabela
		this.sortData();
	}

	// Função de ordenação dos dados da tabela
	private sortData() {

		if (this.$grupoList) {
			const gruposList = this.$grupoList;

			gruposList.sort((a, b) => {
				const attribute = this.currentSortColumn;
				const direction = this.sortDirection[attribute];

				return this.compareProperties(a, b, attribute, direction);
			});

		}

	}

	// Compara os valores das propriedades entre dois objetos
	private compareProperties(a: any, b: any, attribute: string, direction: string): number {
		const propertyA = this.getProperty(a, attribute);
		const propertyB = this.getProperty(b, attribute);

		if (propertyA < propertyB) {
			return direction === 'asc' ? -1 : 1;
		}

		if (propertyA > propertyB) {
			return direction === 'asc' ? 1 : -1;
		}

		return 0;
	}

	// Obtém o valor de uma propriedade específica de um objeto
	private getProperty(obj: any, path: string | string[]): string {
		
		if (typeof path === 'string') {
			path = path.split('.');
		}

		return path.reduce((value, property) => value ? value[property] : '', obj);
	}

	//#endregion Ordering, Sorting ou apenas Ordenação

	// #endregion UTILITIES

	// #region MODAIS
	/**
	 * Função simples com o objetivo de abrir os modais no centro da tela.
	 * @param template Template HTML do modal que será aberto.
	 * @param modalID ID do modal que será aberto, para que possa ser referenciado depois.
	 * @param id id do regsitro que será excluído.
	*/
	public openModal(template: TemplateRef<any>, modalID: number, id: number): void {
		this.grupoId = id;

		this.bsModalService.show(template, {
			id: modalID,
			class: 'modal-dialog-centered',
			ignoreBackdropClick: false,
			keyboard: false
		});
	}

	/**
	 * Método que além de fechar o modal, verifica se o usuário quer excluir o registro
	 * ou não, excluido caso ele queira.
	 * @param modalID ID do modal que será fechado.
	 * @param isDeleteRecord Variável que define se o usuário quer excluir o registro ou não.
	 */
  	public closeModalDelete(modalID: number, isDeleteRecord: boolean = false): void {
    	this.bsModalService.hide(modalID);

   		 if (isDeleteRecord) {
			this.deleteGrupo(this.grupoId);
		 }
		 
  	}
	// #endregion MODAIS

}

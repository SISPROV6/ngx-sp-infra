import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MessageService, ModalUtilsService } from 'ngx-sp-infra';
import { AuthStorageService } from 'src/app/auth/storage/auth-storage.service';
import { PessoasService } from '../../services/pessoas.service';
import { ProjectUtilservice } from 'src/app/project/utils/project-utils.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoasListModel } from '../../models/3Rn/pessoas-list.model';
import { PessoasFilters } from '../../models/3Rn/pessoasFilters.model';
import { ToastrService } from 'ngx-toastr';
import { ContagemPessoasCards } from '../../models/3Rn/contagemCardsPessoas.model';

@Component({
  selector: 'painel-pessoas-list',
  templateUrl: './painel-pessoas-list.component.html',
  styleUrl: './painel-pessoas-list.component.scss'
})
export class PainelPessoasListComponent implements OnInit {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
	public $pessoasList: PessoasListModel[];
  public pessoasFilters: PessoasFilters = new PessoasFilters();

	public counter: number = 0;
	public page: number = 1;
	public itemsPerPage: number = 10;
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    private _authStorageService: AuthStorageService,
    private _bsModalService: BsModalService,
    private _formBuilder: FormBuilder,
    private _messageService: MessageService,
    private _pessoasService: PessoasService,
    private _projectUtilService: ProjectUtilservice,
    private _activatedRoute: ActivatedRoute,
    private _toastrService: ToastrService,
    private _router: Router,

    public modalUtils: ModalUtilsService
  ) { }

  ngOnInit(): void {
    this.getPessoasList(this.pessoasFilters);
  }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> SERVICE METHODS <==========

  // #region PREPARATION
  public getPessoasList(basicFilters: PessoasFilters): void {
    this.pessoasFilters = {
      ...this.pessoasFilters,
      ...basicFilters
    }
    
		this._pessoasService.getPessoasList(this.pessoasFilters).subscribe({
			next: response => {
				this.$pessoasList = response.PessoasList;

				this.counter = this.$pessoasList.length;
				this.resetPagination(this.$pessoasList);
			},
			error: error => {
				this._projectUtilService.showHttpError(error);
				this.$pessoasList = [];
			}
		})
	}
  // #endregion PREPARATION

  // #region GET
  // [...]
  // #endregion GET

  // #region POST
  public updatePessoaStatus(pessoaID: string, newStatus: boolean): void {
    // this._pessoasService.updatePessoaStatus(pessoaID, newStatus).subscribe({
    //   next: () => {
    //     this._toastrService.success(`Pessoa ${newStatus ? 'reativada' : 'inativada'} com sucesso`);
    //     this.getPessoasList();

    //     this.closeModal(this.MODAL_STATUS);
    //   },
    //   error: error => { this._projectUtilService.showHttpError(error); }
    // });
  }
  // #endregion POST

  // #region DELETE
  // [...]
  // #endregion DELETE

  // #endregion ==========> SERVICE METHODS <==========


  // #region ==========> UTILS <==========
  
  /** Modifica a quantidade de itens a ser mostrada na lista.
	 * @param event parâmetro de evento que irá selecionar a nova quantidade. */
	public onSelectChange(event: any) {
		this.itemsPerPage = parseInt(event.target.value, 10);
		this.page = 1;
	}

	/** Reseta a paginação da listagem. */
	public resetPagination(list: any[]): void {
		// Cálculo para encontrar o valor inicial do index da página atual
		const startIndex = (this.page - 1) * this.itemsPerPage;

		// Condição para resetar o valor da paginação
		if (list.length <= startIndex) { this.page = 1; }
	}

	//#region Ordering, Sorting ou apenas Ordenação

  /** Método que faz a ordenação dos contratos na tela de listagem, em cada uma das células do cabeçalho da tabela, onde cada um dos elementos <th> representa uma coluna, de acordo com a lista de contratos que retorna do backend.
  */

  // Objeto para armazenar a direção de ordenação de cada coluna
  sortDirection: { [key: string]: string } = {};

  // Coluna atualmente selecionada para ordenação
  currentSortColumn: string = "";

  // Função chamada quando ocorre uma mudança na ordenação
  onSortChange(event: { direction: string, column: string }) {
    const { direction, column } = event;

    // Verifica se a coluna atualmente selecionada é a mesma da nova seleção
    if (this.currentSortColumn === column) {
      // Alterna entre "asc" e "desc" para a direção de ordenação da coluna
      this.sortDirection[column] = this.sortDirection[column] === "asc" ? "desc" : "asc";
    } else {
      // Define a nova coluna e a direção de ordenação como "asc"
      this.currentSortColumn = column;
      this.sortDirection = { [column]: "desc" };
    }

    // Realiza a ordenação dos dados da tabela
    this.sortData();
  }

  // Função de ordenação dos dados da tabela
  private sortData() {

    if (this.$pessoasList) {
      const contratosList = this.$pessoasList;

      contratosList.sort((a: any, b: any) => {
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

    if (typeof propertyA === "string" && typeof propertyB === "string") {
      return direction === "asc" ? propertyA.localeCompare(propertyB) : propertyB.localeCompare(propertyA);
    }

    if (propertyA < propertyB) {
      return direction === "asc" ? -1 : 1;
    }
    if (propertyA > propertyB) {
      return direction === "asc" ? 1 : -1;
    }

    return 0;
  }

  // Obtém o valor de uma propriedade específica de um objeto
  private getProperty(obj: any, path: string | string[]): string {
    if (typeof path === "string") {
      path = path.split(".");
    }

    return path.reduce((value, property) => value ? value[property] : "", obj);
  }

  //#endregion Ordering, Sorting ou apenas Ordenação

  // #endregion ==========> UTILS <==========

}

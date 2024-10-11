import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

/**
 * Componente de Tabela Customizável
 *
 * O `TableComponent` é um componente Angular projetado para exibir uma tabela customizável
 * com suporte a paginação. Ele permite a configuração de cabeçalhos de colunas, posicionamento
 * da paginação e opções de itens por página. O componente é flexível, utilizando classes Bootstrap
 * para ajustar o layout das colunas e emitindo eventos para que o componente pai possa reagir a
 * mudanças na página ou no número de itens exibidos.
 *
 * @selector lib-table
 * @templateUrl ./table.component.html
 * @styleUrl ./table.component.scss
*/
@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit, OnChanges {

  // #region ==========> PROPRIEDADES <==========

  // #region PRIVATE
  private _paginationID: string;
  private _recordsList: any[] | undefined;

  private _currentPage: number = 1;
  private _currentItemsPerPage: number = 0;
  // #endregion PRIVATE

  // #region PUBLIC

  /** Determina se a tabela deve usar paginação.
   * @default true */
  @Input() public usePagination: boolean = true;

  
  /** Lista de registros a serem exibidos na tabela.
   * @required */
  @Input({ alias: 'list', required: true })
  public get recordsList(): any[] | undefined { return this._recordsList; }
  public set recordsList(value: any[] | undefined) { this._recordsList = value; }


  /** Opções de contagem de itens por página disponíveis para o usuário.
   * @required */
  @Input('counts') public countOptions: number[];


  /** Posicionamento dos controles de paginação.
   * @default 'end' */
  @Input('placement') public paginationPlacement: 'start' | 'center' | 'end' | 'between' = 'end';


  /** Lista de cabeçalhos para as colunas da tabela, incluindo o nome, a largura da coluna e classes customizadas.
   * @required */
  @Input({ alias: 'headers', required: true }) public headersList: {
    name: string,
    col?: number,
    widthClass?: string,
    customClasses?: string,
    orderColumn?: string
  }[];


  /** Mensagem customizada para lista vazia */
  @Input('emptyListMessage') public emptyListMessage?: string;


  /** Informa se o counter de registros deve aparecer ou não.
   * @default true
  */
  @Input('showCounter') public showCounter: boolean = true;


  /** Informa um ID para a paginação da tabela específica. Deve ser utilizada em caso de múltiplas tabelas na mesma tela. */
  @Input()
  public get paginationID(): string { return this._paginationID; }
  public set paginationID(value: string) {
    this._paginationID = value || 'libTablePagination';
  }


  /** Evento emitido quando o número de itens por página é alterado. */
  @Output() public itemsPerPageChange: EventEmitter<number> = new EventEmitter<number>();

  /** Evento emitido quando a página é alterada. */
  @Output() public pageChange: EventEmitter<number> = new EventEmitter<number>();

  /** Página atual da tabela. */
	public get page(): number { return this._currentPage; }
	public set page(value: number) { this._currentPage = value; }

  /** Número de itens a serem exibidos por página. */
  public get itemsPerPage(): number { return this._currentItemsPerPage; }
	public set itemsPerPage(value: number) { this._currentItemsPerPage = value; }


  public get firstItemOfPage(): number {
    return (this.page - 1) * this.itemsPerPage + 1;
  }
  public get lastItemOfPage(): number {
    return Math.min(this.page * this.itemsPerPage, this.recordsList?.length ?? 0);
  }

  // Exemplo de string com a contagem:
  public get itemsDisplayText(): string {
    if (this.recordsList && this.recordsList.length === 0) { return `Exibindo ${this.recordsList?.length ?? 0} registros`; }
    return `Exibindo ${ this.countOptions ? this.firstItemOfPage+"-"+this.lastItemOfPage + " de" : "" } ${this.recordsList?.length ?? 0} registros`;
  }


  public headersUseOldWidth?: boolean;
  // #endregion PUBLIC

  // #endregion ==========> PROPRIEDADES <==========


  // #region ==========> INICIALIZAÇÃO <==========
  constructor(private cdr: ChangeDetectorRef) { }

  /** Inicializa o componente e define o número inicial de itens por página. */
  ngOnInit(): void {
    if (this.recordsList) { this.itemsPerPage = this.countOptions ? this.countOptions[0] : this.recordsList.length }
    else { this.itemsPerPage = this.countOptions[0] ?? 10 }

    this.validateHeaders();
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();  // Forçar uma nova detecção após a renderização
  }

  /** Monitora as mudanças nas entradas do componente e realiza ajustes, como resetar a paginação ou validar o layout das colunas.
   * @param changes Objeto que contém as mudanças nas entradas do componente. */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recordsList'].currentValue) {
      this.resetPagination(this.recordsList ?? []);
    }

    if (changes['headersList']) { this.validateHeaders(); }
  }
  // #endregion ==========> INICIALIZAÇÃO <==========


  // #region ==========> UTILITÁRIOS <==========
  private validateHeaders(): void {
    let headersUseOldWidth: boolean = this.headersList.every(header => header.col != undefined);
    console.log("headersUseOldWidth", headersUseOldWidth);
    
    let headersUseCol: boolean = this.headersList.every(header => header.widthClass && header.widthClass.includes('col-'));
    console.log("headersUseCol", headersUseCol);
    
    let headersUsePercent: boolean = this.headersList.every(header => header.widthClass && header.widthClass.includes('w-'));
    console.log("headersUsePercent", headersUsePercent);


    if (headersUseOldWidth) { this.headersUseOldWidth = true; }
    else {
      this.headersUseOldWidth = false;

      if (!headersUseCol && !headersUsePercent) {
        console.error("A largura das colunas está em um formato inválido. Certifique-se que todas elas utilizam apenas 'col-' ou 'w-'");
      }
    }

    console.log("headersUseOldWidth", headersUseOldWidth);
    
  }


  /** Modifica a quantidade de itens a ser mostrada na lista.
   * @param event parâmetro de evento que irá selecionar a nova quantidade. */
  public onSelectChange(event: any) {
    this.itemsPerPage = parseInt(event.target.value, 10);
    this.page = 1;
    this.itemsPerPageChange.emit(this.itemsPerPage);
  }

  /** Reseta a paginação da listagem com base no número atual de registros.
   * @param list Lista de registros para resetar a paginação. */
  public resetPagination(list: any[]): void {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    if (list.length <= startIndex) this.page = 1;
  }



	//#region Ordering, Sorting ou apenas Ordenação

	/** Método que faz a ordenação dos contratos na tela de listagem, em cada uma das células do cabeçalho da tabela, onde cada um  
	 *  dos elementos <th> representa uma coluna, de acordo com a lista de contratos que retorna do backend. */
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
		}
    else {
			// Define a nova coluna e a direção de ordenação como 'asc'
			this.currentSortColumn = column;
			this.sortDirection = { [column]: 'asc' };
		}

		// Realiza a ordenação dos dados da tabela
		this.sortData();
	}

	// Função de ordenação dos dados da tabela
	private sortData() {
		if (this.recordsList) {
			const gruposList = this.recordsList;

			gruposList.sort((a, b) => {
				const attribute = this.currentSortColumn;
				const direction = this.sortDirection[attribute];

				return this.compareProperties(a, b, attribute, direction);
			});
		}
	}

	// Compara os valores das propriedades entre dois objetos
	private compareProperties(a: any, b: any, attribute: string, direction: string): number {
		const propertyA = this.getProperty(a, attribute).toUpperCase();
		const propertyB = this.getProperty(b, attribute).toUpperCase();

		if (propertyA < propertyB) return direction === 'asc' ? -1 : 1;
		if (propertyA > propertyB) return direction === 'asc' ? 1 : -1;

		return 0;
	}

	// Obtém o valor de uma propriedade específica de um objeto
	private getProperty(obj: any, path: string | string[]): string {
		if (typeof path === 'string') path = path.split('.');
		return path.reduce((value, property) => value ? value[property] : '', obj);
	}
	//#endregion Ordering, Sorting ou apenas Ordenação

  // #endregion ==========> UTILITÁRIOS <==========

}

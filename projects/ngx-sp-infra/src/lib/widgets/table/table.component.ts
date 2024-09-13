import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

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
export class TableComponent implements OnInit, OnChanges {

  // #region ==========> PROPRIEDADES <==========

  // #region PRIVATE
  private _paginationID: string;
  // #endregion PRIVATE

  // #region PUBLIC

  /** Determina se a tabela deve usar paginação.
   * @default true */
  @Input() public usePagination: boolean = true;

  /** Lista de registros a serem exibidos na tabela.
   * @required */
  @Input({ alias: 'list', required: true }) public recordsList: any[] | undefined;

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
    col: number,
    customClasses?: string
  }[];

  /** Mensagem customizada para lista vazia */
  @Input('emptyListMessage') public emptyListMessage?: string;

  /** Evento emitido quando o número de itens por página é alterado. */
  @Output() public itemsPerPageChange: EventEmitter<number> = new EventEmitter<number>();

  /** Evento emitido quando a página é alterada. */
  @Output() public pageChange: EventEmitter<number> = new EventEmitter<number>();


  /** Contador de registros (pode ser usado para futuras implementações de lógica interna). */
  public counter: number = 0;

  /** Página atual da tabela. */
	public page: number = 1;

  /** Número de itens a serem exibidos por página. */
	public itemsPerPage: number;


  @Input()
  public get paginationID(): string { return this._paginationID; }
  public set paginationID(value: string) {
    this._paginationID = value || 'libTablePagination';
  }
  // #endregion PUBLIC

  // #endregion ==========> PROPRIEDADES <==========


  // #region ==========> INICIALIZAÇÃO <==========
  constructor() { }

  /** Inicializa o componente e define o número inicial de itens por página. */
  ngOnInit(): void {
    if (this.recordsList) { this.itemsPerPage = this.countOptions ? this.countOptions[0] : this.recordsList.length }
    else { this.itemsPerPage = this.countOptions[0] ?? 10 }

    console.log("paginationID: ", this.paginationID);
    console.log("this.paginationID ? this.paginationID : null: ", this.paginationID ? this.paginationID : null);
  }

  /** Monitora as mudanças nas entradas do componente e realiza ajustes, como resetar a paginação ou validar o layout das colunas.
   * @param changes Objeto que contém as mudanças nas entradas do componente. */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recordsList'].currentValue) {
      this.resetPagination(this.recordsList ?? []);

      let maxColumns = this.headersList.reduce((n, {col}) => n + col, 0);
      if (maxColumns >= 13) {
        throw new Error("A soma de largura (classe com prefixo 'col-') de todas as colunas não pode ser maior que 12.");
      }
    }

    if (changes["paginationID"]) {
      console.log('Pagination ID changed:', this.paginationID);
    }
  }
  // #endregion ==========> INICIALIZAÇÃO <==========


  // #region ==========> UTILITÁRIOS <==========

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
    if (list.length <= startIndex) {
      this.page = 1;
    }
  }

  // #endregion ==========> UTILITÁRIOS <==========

}

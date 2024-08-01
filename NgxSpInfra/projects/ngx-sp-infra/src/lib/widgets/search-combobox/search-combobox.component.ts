import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { FormUtils } from "../../utils/form-utils";

import { RecordCombobox } from "../../models/combobox/record-combobox";


/**
 * @file search-combobox.component.ts
 * @description Este arquivo contém a implementação do componente SearchComboboxComponent, que é um componente de interface do usuário
 * para realizar pesquisas e seleções em uma lista de opções apresentada em um combobox.
 * 
 * @component SearchComboboxComponent
 * @selector lib-search-combobox
 * @templateUrl ./search-combobox.component.html
 * @styleUrl ./search-combobox.component.scss
 * 
 * @description
 * O componente SearchComboboxComponent é projetado para fornecer aos usuários uma interface para pesquisar e selecionar itens de uma lista.
 * Ele suporta a filtragem de itens com base na entrada do usuário, permitindo uma seleção mais fácil em listas extensas.
 * 
 * ## Funcionalidades:
 * - Pesquisa e filtragem de itens na lista do combobox.
 * - Seleção de itens com feedback visual.
 * - Emissão de eventos personalizados para interações do usuário, como recarregar a lista ou selecionar um item.
 * - Ajuste dinâmico da largura do dropdown para corresponder ao input principal.
 * - Inicialização de um valor selecionado, se fornecido.
 * 
 * ## Inputs:
 * - `comboboxList` (RecordCombobox[]): Array de objetos representando os itens disponíveis para seleção.
 * - `labelText` (string): Texto de etiqueta associado ao combobox.
 * - `initializedValueID` (string | number): ID de um item inicialmente selecionado no combobox.
 * - `colorTheme` ("primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"): Tema de cores para o componente.
 * - `mainInputPlaceholder` (string): Texto de espaço reservado para o input principal.
 * - `searchInputPlaceholder` (string): Texto de espaço reservado para o input de pesquisa.
 * 
 * ## Outputs:
 * - `onReloadList` (EventEmitter<string>): Evento emitido quando a lista precisa ser recarregada.
 * - `onSelectItem` (EventEmitter<any>): Evento emitido quando um item é selecionado.
 * 
 * ## Propriedades:
 * - `selectedItem` (RecordCombobox): Getter e Setter para o item selecionado atualmente.
 * - `FormUtils` (typeof FormUtils): Getter para utilitários de formulário.
 * - `_searchInput` (string): Getter para o valor do input de pesquisa.
 * - `filterForm` (FormGroup): Grupo de formulário para o filtro de pesquisa.
 * 
 * ## Métodos Públicos:
 * - `reloadList(search: string)`: Método para recarregar a lista de itens com base na pesquisa fornecida.
 * - `setFilterValue(item?: RecordCombobox)`: Método para definir o valor do filtro com base no item selecionado.
 * 
 * ## Eventos:
 * - `ngOnInit()`: Inicializa o componente.
 * - `ngAfterViewInit()`: Ajusta a largura do dropdown após a visualização do componente.
 * - `ngOnChanges(changes: SimpleChanges)`: Responde a mudanças nas propriedades de entrada.
 * 
 * ## Utilitários:
 * - `createFilterForm()`: Cria o formulário de filtro para a pesquisa.
 * - `initializeSelectedValue()`: Inicializa o valor selecionado no combobox, se fornecido.
 * - `adjustDropdownWidth()`: Ajusta a largura do dropdown para corresponder à largura do input principal.
 */
@Component({
  selector: 'lib-search-combobox',
  templateUrl: './search-combobox.component.html',
  styleUrl: './search-combobox.component.scss'
})
export class SearchComboboxComponent implements OnInit, OnChanges, AfterViewInit {
  constructor(
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createFilterForm();
    if (this.initializedValueID) { this.initializeSelectedValue() }
  }

  ngAfterViewInit(): void {
    this.adjustDropdownWidth();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["initializedValueID"] != undefined && changes["initializedValueID"].currentValue != undefined) {
      this.initializeSelectedValue();
    }
    if (changes["comboboxList"] != undefined && changes["comboboxList"].currentValue != undefined) {
      this.initializeSelectedValue();
    }
  }

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private _selectedItem: RecordCombobox;
  // #endregion PRIVATE

  // #region PUBLIC

  /** Lista de itens disponíveis para seleção no combobox. */
  @Input({ required: true }) public comboboxList: RecordCombobox[];

  /** Texto de label associado ao combobox. */
  @Input({ required: true }) public labelText: string;

  /** ID de um item inicialmente selecionado no combobox. */
  @Input() public initializedValueID: string | number;
  
  /** Tema de cores para o componente (baseado nas cores do Bootstrap). */
  @Input() public colorTheme: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" = "primary";
  
  /** Placeholder para o input principal. */
  @Input() public mainInputPlaceholder: string = "Selecione uma opção...";
  
  /** Placeholder para o input de pesquisa. */
  @Input() public searchInputPlaceholder: string = "Pesquisa...";

  /** Informa se o input será exibido como desabilitado. */
  @Input() public disabled: boolean = false;

  
  /**
   * Evento emitido quando a lista precisa ser recarregada.
   * Leva uma string que é usada para pesquisa.
   */
  @Output() public onReloadList: EventEmitter<string> = new EventEmitter<string>();

  /** Evento emitido quando um item é selecionado. */
  @Output() public onSelectItem: EventEmitter<any> = new EventEmitter<any>();


  @ViewChild('mainInput') private _mainInput!: ElementRef;
  @ViewChild('dropdownMenu') private _dropdownMenu!: ElementRef;


  public selectedText?: string;

  public get selectedItem(): RecordCombobox { return this._selectedItem; }
  public set selectedItem(value: RecordCombobox) {
    this._selectedItem = value;
    this.onSelectItem.emit(value);
  }
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> FORM BUILDER <==========
  public filterForm: FormGroup;
  public get FormUtils(): typeof FormUtils { return FormUtils; }

  // #region FORM DATA
  public get _searchInput(): string { return this.filterForm.get("_searchInput")?.value; }
  // #endregion FORM DATA

  // #region FORM VALIDATORS
  private createFilterForm(): void {
    this.filterForm = this._formBuilder.group({
      _searchInput: [ "" ]
    });
  }
  // #endregion FORM VALIDATORS

  // #endregion ==========> FORM BUILDER <==========


  // #region ==========> UTILITIES <==========

  /**
   * Atualiza o valor do filtro com base no item selecionado.
   * @param item Objeto de item selecionado.
   */
  public setFilterValue(item?: RecordCombobox): void {
    if (item) {
      this.filterForm.controls["_searchInput"].setValue(`${item.ID as string} - ${item.LABEL}`);
      this.selectedText = item.LABEL;

      this.selectedItem = { ID: item.ID, LABEL: item.LABEL, AdditionalStringProperty1: item.AdditionalStringProperty1, IS_SELECTED: item.IS_SELECTED };
    }
    else {
      this.filterForm.controls["_searchInput"].setValue("");
      delete this.selectedText;

      this.selectedItem = { ID: "", LABEL: "", AdditionalStringProperty1: "", IS_SELECTED: false };
    }
  }

  /** Chamado caso um valor inicial seja fornecido para o combobox. */
  private initializeSelectedValue(): void {
    let initializedValue;

    if (this.comboboxList && this.comboboxList.length > 0) {
      initializedValue = this.comboboxList.find(item => item.ID == this.initializedValueID);
    }

    if (this.comboboxList && initializedValue) {
      this.selectedText = initializedValue.LABEL;
      this.selectedItem = { ID: initializedValue.ID, LABEL: initializedValue.LABEL, AdditionalStringProperty1: "", IS_SELECTED: true };
    }
  }

  /** Ajusta a largura do dropdown para corresponder à largura do input principal. */
  private adjustDropdownWidth() {
    const inputWidth = this._mainInput.nativeElement.offsetWidth;
    this._dropdownMenu.nativeElement.style.width = `${inputWidth}px`;
  }


  /**
   * Emite um evento para recarregar a lista de itens com base na pesquisa fornecida.
   * @param search Texto de pesquisa para recarregar a lista.
   */
  public reloadList(search: string): void {
    this.onReloadList.emit(search);
  }
  // #endregion ==========> UTILITIES <==========


  // #region ==========> MODALS <==========
  // [...]
  // #endregion ==========> MODALS <==========

}

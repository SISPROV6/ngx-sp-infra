import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { FormUtils } from "../../utils/form-utils";

import { RecordCombobox } from "../../models/combobox/record-combobox";


/**
 * @file search-combobox.component.ts
 * @description Este arquivo contém a implementação do componente SearchComboboxComponent, que é um componente de interface do usuário
 * para realizar pesquisas e seleções em uma lista de opções apresentada em um combobox.
 * 
 * @component SearchComboboxComponent
 * @selector search-combobox
 * @standalone true
 * @imports CommonModule, ProjectModule
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
 * 
 * ## Inputs:
 * - `comboboxList`: Array de objetos representando os itens disponíveis para seleção.
 * - `labelText`: Texto de etiqueta associado ao combobox.
 * - `colorTheme`: Tema de cores para o componente.
 * - `inputGroupIconName`: Nome do ícone a ser exibido no grupo de entrada.
 * - `inputGroupIconTooltip`: Texto de dica de ferramenta para o ícone do grupo de entrada.
 * - `mainInputPlaceholder`: Texto de espaço reservado para o input principal.
 * - `searchInputPlaceholder`: Texto de espaço reservado para o input de pesquisa.
 * 
 * ## Outputs:
 * - `onReloadList`: Evento emitido quando a lista precisa ser recarregada.
 * - `onSelectItem`: Evento emitido quando um item é selecionado.
 * 
 * ## Métodos Públicos:
 * - `reloadList(search: string)`: Método para recarregar a lista de itens com base na pesquisa fornecida.
 * - `setFilterValue(id: string | number, label: string)`: Método para definir o valor do filtro.
 * 
 * ## Propriedades:
 * - `selectedItem`: Getter e Setter para o item selecionado atualmente.
 * - `FormUtils`: Getter para utilitários de formulário.
 * - `_searchInput`: Getter para o valor do input de pesquisa.
 * 
 * ## Eventos:
 * - `ngOnInit()`: Inicializa o componente.
 * - `ngOnChanges(changes: SimpleChanges)`: Responde a mudanças nas propriedades de entrada.
 * 
 * ## Utilitários:
 * - `createFilterForm()`: Cria o formulário de filtro para a pesquisa.
 * - `mapComboboxList()`: Mapeia a lista de combobox para o formato necessário.
 * 
 * @note Este componente é marcado como `standalone`, permitindo seu uso sem a necessidade de importá-lo em um módulo.
 */
@Component({
  selector: 'lib-search-combobox',
  templateUrl: './search-combobox.component.html',
  styleUrl: './search-combobox.component.scss'
})
export class SearchComboboxComponent implements OnInit, OnChanges {
  constructor(
    private _formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.createFilterForm();

    if (this.initializedValueID) { this.initializeSelectedValue() }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["currentSelectedOption"] != undefined && changes["currentSelectedOption"].currentValue != undefined) {
      this.initializeSelectedValue();
    }
  }

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private _selectedItem: RecordCombobox;
  // #endregion PRIVATE

  // #region PUBLIC
  @Input({ required: true }) public comboboxList: RecordCombobox[];
  @Input({ required: true }) public labelText: string;

  @Input() public initializedValueID: string | number;
  
  @Input() public colorTheme: string = "primary";
  @Input() public inputGroupIconName: string;
  @Input() public inputGroupIconTooltip: string = "";
  @Input() public mainInputPlaceholder: string = "Selecione uma opção...";
  @Input() public searchInputPlaceholder: string = "Pesquisa...";

  @Output() public onReloadList: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onSelectItem: EventEmitter<any> = new EventEmitter<any>();

  public selectedText: string;

  public get selectedItem(): RecordCombobox { return this._selectedItem; }
  public set selectedItem(value: RecordCombobox) {
    this._selectedItem = value;

    console.log("public set selectedItem");
    if (!this.initializedValueID) { this.onSelectItem.emit(value); }
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
  public setFilterValue(id: string | number, label: string): void {
    this.filterForm.controls["_searchInput"].setValue(`${id as string} - ${label}`);
    this.selectedText = label;

    this.selectedItem = { ID: id, LABEL: label, AdditionalStringProperty1: "", IS_SELECTED: true };
  }

  private initializeSelectedValue(): void {
    let initializedValue = this.comboboxList.find(item => item.ID == this.initializedValueID);

    if (this.comboboxList && initializedValue) {
      this.selectedText = initializedValue.LABEL;
      this.selectedItem = { ID: initializedValue.ID, LABEL: initializedValue.LABEL, AdditionalStringProperty1: "", IS_SELECTED: true };
    }
  }


  public reloadList(search: string): void {
    this.onReloadList.emit(search);
  }
  // #endregion ==========> UTILITIES <==========


  // #region ==========> MODALS <==========
  // [...]
  // #endregion ==========> MODALS <==========

}

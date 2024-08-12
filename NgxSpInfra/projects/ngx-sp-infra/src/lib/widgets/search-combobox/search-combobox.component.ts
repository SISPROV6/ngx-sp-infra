import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

import { FormUtils } from "../../utils/form-utils";

import { RecordCombobox } from "../../models/combobox/record-combobox";
import { Subscription } from "rxjs/internal/Subscription";


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
export class SearchComboboxComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (this.initializedValueID) { this.initializeSelectedValue() }
    this._subscription = this.formControl.valueChanges.subscribe(value => {
      this.controlValueChange.emit(this.idControl)
    });
  }

  ngAfterViewInit(): void {
    this.adjustDropdownWidth();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["initializedValueID"]?.currentValue || changes["comboboxList"]?.currentValue) { this.initializeSelectedValue() }
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  
  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private _selectedItem: RecordCombobox;
  private _ariaExpanded: boolean = false;
  private _subscription: Subscription;
  // #endregion PRIVATE

  // #region PUBLIC
  @Input('control') formControl: FormControl = new FormControl();

  @Input({ required: true }) public comboboxList: RecordCombobox[];
  @Input({ required: true }) public labelText: string;

  @Input() public controlType: "ngModel" | "formControl" = "ngModel";
  @Input() public libRequired: boolean = false;
  @Input() public disabled: boolean = false;
  @Input() public initializedValueID: string | number;
  @Input() public mainInputPlaceholder: string = "Selecione uma opção...";
  @Input() public searchInputPlaceholder: string = "Pesquisa...";
  @Input() public colorTheme: string = "primary";
  
  @Output() public onReloadList: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onSelectItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() public controlValueChange = new EventEmitter<FormControl>();

  @ViewChild('mainInput') private _mainInput!: ElementRef;
  @ViewChild('dropdownMenu') private _dropdownMenu!: ElementRef;

  public selectedText?: string;
  public textoPesquisa: string = "";

  public get ariaExpanded(): boolean { return this._ariaExpanded; }
  public set ariaExpanded(value: boolean) { this._ariaExpanded = value; }

  public get selectedItem(): RecordCombobox { return this._selectedItem; }
  public set selectedItem(value: RecordCombobox) {
    this._selectedItem = value;
    this.onSelectItem.emit(value);
  }
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> FORM BUILDER <==========
  private idControl: FormControl = new FormControl<string | number>("")
  public filterForm: FormGroup = new FormGroup({
    _searchInput: new FormControl<string>("")
  });
  // #endregion ==========> FORM BUILDER <==========


  // #region ==========> UTILITIES <==========
  public setFilterValue(item?: RecordCombobox): void {
    const itemValue = item ? `${item.ID as string} - ${item.LABEL}` : "";
    this.filterForm.controls["_searchInput"].setValue(itemValue);

    this.textoPesquisa = "";
    this.formControl.markAsDirty();

    if (item) {
      this.selectedText = item.LABEL;
      this.selectedItem = { ...item, IS_SELECTED: true };
      if (this.controlType === "formControl") {
        this.idControl.setValue(item.ID);
        this.formControl.setValue(item.LABEL);
      }
    } else {
      this.selectedText = undefined;
      this.selectedItem = { ID: "", LABEL: "", AdditionalStringProperty1: "", IS_SELECTED: false };
      if (this.controlType === "formControl") {
        this.idControl.setValue("");
        this.formControl.setValue("");
      }
    }

    this.ariaExpanded = false;
  }

  private initializeSelectedValue(): void {
    if (!this.comboboxList || !this.comboboxList.length) return;

    const initializedValue = this.controlType === "ngModel"
      ? this.comboboxList.find(item => item.ID == this.initializedValueID)
      : this.comboboxList.find(item => item.ID == this.formControl.value);

    if (initializedValue) {
      this.selectedText = initializedValue.LABEL;
      this.selectedItem = { ...initializedValue, IS_SELECTED: true };
    }
  }

  private adjustDropdownWidth(): void {
    if (this._mainInput && this._dropdownMenu) {
      const inputWidth = this._mainInput.nativeElement.offsetWidth;
      this._dropdownMenu.nativeElement.style.width = `${inputWidth}px`;
    }
  }

  public reloadList(search: string): void { this.onReloadList.emit(search) }
  // #endregion ==========> UTILITIES <==========

}

import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { RecordCombobox } from '../../models/combobox/record-combobox';

/**
 * @component LibComboboxComponent
 * @selector lib-combobox
 * 
 * @description
 * O componente LibComboboxComponent é projetado para fornecer aos usuários uma interface para pesquisar e selecionar itens de uma lista.
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
 * - `outerControl` (FormControl | AbstractControl): Control para seleção dos valores, atualizará automaticamente o control do componente pai também
 * - `comboboxList` (RecordCombobox[]): Lista de registros que serão exibidos no combo, enquanto eles estiverem carregando será exibido um spinner
 * - `labelText` (string): Texto do rótulo que será exibido acima do combo. Caso não informado nada será exibido
 * - `disabled` (boolean): Define se o campo está desabilitado. Deve ser usado para validações de habilitação dinâmica do campo
 * - `libRequired` (boolean): Define se o campo é obrigatório, vai exibir o '*' vermelho ao lado do label (se ele estiver presente)
 * - `mainInputPlaceholder` (string): Placeholder do campo principal do combo
 * - `searchInputPlaceholder` (string): Placeholder do campo de pesquisa dentro do combo
 * - `colorTheme` ("primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"): Define o tema de cor do componente, como "primary", "success", ou "danger"
 * 
 * ## Outputs:
 * - `onReloadList` (EventEmitter<string>): Evento emitido quando a lista precisa ser recarregada.
 */
@Component({
  selector: 'lib-combobox',
  templateUrl: './lib-combobox.component.html',
  styleUrl: './lib-combobox.component.scss'
})
export class LibComboboxComponent {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private _ariaExpanded: boolean = false;
  private _subscription: Subscription = new Subscription();

  private _outerControl: FormControl = new FormControl<string | number | null>(null);
  // #endregion PRIVATE

  // #region PUBLIC

  /** (obrigatório) Control para seleção dos valores, atualizará automaticamente o control do componente pai também
   * @alias 'control'
   * @type {FormControl<any> | AbstractControl<any>} */
  @Input({ alias: 'control', required: true })
  public set outerControl(value: FormControl<any> | AbstractControl<any>) { this._outerControl = value as FormControl }
  public get outerControl(): FormControl<any> { return this._outerControl }

  /** (obrigatório) Lista de registros que serão exibidos no combo, enquanto eles estiverem carregando será exibido um spinner
   * @alias 'list'
   * @type {RecordCombobox[]} */
  @Input({ alias: 'list', required: true }) public comboboxList?: RecordCombobox[];

  /** (opcional) Texto do rótulo que será exibido acima do combo. Caso não informado nada será exibido
   * @type {string} */
  @Input() public labelText?: string;

  /** (opcional) Define se o campo é obrigatório, vai exibir o '*' vermelho ao lado do label (se ele estiver presente)
   * @type {boolean}
   * @default false */
  @Input() public libRequired?: boolean = false;

  /** (opcional) Define se o campo está desabilitado. Deve ser usado para validações de habilitação dinâmica do campo
   * @type {boolean}
   * @default false */
  @Input() public disabled?: boolean = false;

  /** (opcional) Placeholder do campo principal do combo
   * @alias 'mainPlaceholder'
   * @type {string}
   * @default "Selecione uma opção..." */
  @Input('mainPlaceholder') public mainInputPlaceholder?: string = "Selecione uma opção...";

  /** (opcional) Placeholder do campo de pesquisa dentro do combo
   * @alias 'searchPlaceholder'
   * @type {string}
   * @default "Pesquisa..." */
  @Input('searchPlaceholder') public searchInputPlaceholder?: string = "Pesquisa...";

  /** (opcional) Define o tema de cor do componente, como "primary", "success", ou "danger"
   * @alias 'theme'
   * @type {string}
   * @default "primary"
  */
  @Input('theme') public colorTheme?: string = "primary";

  /** Evento emitido ao recarregar a lista de registros
   * @example Ao ser emitido, o componente pai pode refazer o GET da lista, por exemplo.
   * @emits EventEmitter<string> que leva o valor string da pesquisa feita para ser enviada para o GET
   * @type {EventEmitter<string>} */
  @Output() public onReloadList: EventEmitter<string> = new EventEmitter<string>();
  

  @ViewChild('mainInput') private _mainInput!: ElementRef;
  @ViewChild('dropdownMenu') private _dropdownMenu!: ElementRef;

  public selectedText?: string;
  public textoPesquisa: string = "";

  public get ariaExpanded(): boolean { return this._ariaExpanded; }
  public set ariaExpanded(value: boolean) { this._ariaExpanded = value; }

  public innerControl: FormControl = new FormControl<string | number | null>(null);
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor() {}

  ngOnInit(): void {
    this.setValidator();
    this.initializeSelectedValue();
  }

  ngAfterViewInit(): void {
    this.adjustDropdownWidth();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["comboboxList"]?.currentValue) { this.initializeSelectedValue() }
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========
  public setValue(item: RecordCombobox): void {
    this.textoPesquisa = "";
    this.outerControl.markAsDirty();

    this.selectedText = item.LABEL;
    
    this.outerControl.setValue(item.ID);
    this.innerControl.setValue(item.LABEL);

    this.ariaExpanded = false;
  }

  public clearValue(): void {
    this.textoPesquisa = "";
    this.outerControl.markAsDirty();

    this.selectedText = undefined;

    this.outerControl.setValue(null);
    this.innerControl.setValue(null);

    this.ariaExpanded = false;
  }

  private initializeSelectedValue(): void {
    if (!this.comboboxList || (this.outerControl.value == null && this.outerControl.value == '')) return;

    const initializedValue = this.comboboxList.find(item => item.ID == this.outerControl.value)
    
    if (initializedValue) {
      this.outerControl.setValue(initializedValue.ID);
      this.innerControl.setValue(initializedValue.LABEL);
      
      this.selectedText = initializedValue.LABEL;
    }
  }

  private adjustDropdownWidth(): void {
    if (this._mainInput && this._dropdownMenu) {
      const inputWidth = this._mainInput.nativeElement.offsetWidth;
      this._dropdownMenu.nativeElement.style.width = `${inputWidth}px`;
    }
  }

  private setValidator(): void {
    if (this.outerControl.hasValidator(Validators.required)) { this.innerControl.addValidators(Validators.required); }
  }

  public reloadList(): void { this.onReloadList.emit(this.textoPesquisa) }
  // #endregion ==========> UTILS <==========

}

import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

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
export class LibComboboxComponent implements OnInit, AfterViewInit, OnDestroy, DoCheck {

  // #region ==========> PROPERTIES <==========

  // #region PROTECTED
  protected textoPesquisa: string = "";

  protected get ariaExpanded(): boolean { return this._ariaExpanded; }
  protected set ariaExpanded(value: boolean) { this._ariaExpanded = value; }

  protected innerControl: FormControl = new FormControl<string | number | null>(null);
  protected invalidControl: boolean = false;

  protected invalid: boolean = false;
  protected dirty: boolean = false;
  protected touched: boolean = false;
  // #endregion PROTECTED

  // #region PRIVATE
  private _disabled?: boolean = false;
  private _ariaExpanded: boolean = false;
  private _subscription: Subscription = new Subscription();

  private _outerControl: FormControl = new FormControl<string | number | null>(null);
  // #endregion PRIVATE

  // #region PUBLIC

  /** (obrigatório) Control para seleção dos valores, atualizará automaticamente o control do componente pai também
   * @alias 'control'
   * @type {FormControl<any> | AbstractControl<any>} */
  @Input({ alias: 'control', required: true })
  public set outerControl(value: FormControl<any> | AbstractControl<any>) {
    this._outerControl = value as FormControl;

    // Cancela a subscrição anterior (se houver) para evitar múltiplas subscrições
    if (this._subscription) this._subscription.unsubscribe();

    // Subscrição ao observável valueChanges para reagir a mudanças no valor
    this._subscription = this._outerControl.valueChanges.subscribe(() => { this.initializeSelectedValue() });
    this._subscription = this._outerControl.statusChanges.subscribe(() => { this.subscribeControlChanges() });
  }

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
  @Input()
  public get disabled(): boolean { return this._disabled ?? false; }
  public set disabled(value: boolean | undefined) {
    if (value && value === true) this.innerControl.disable();
    else this.innerControl.enable();

    this.setIsInvalid();
  }

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

  /** (opcional) Define um nome para o controle, utilizado internamente em alguns recursos
   * @alias 'controlName'
   * @type {string}
  */
  @Input('controlName') public controlName?: string;

  /** Evento emitido ao recarregar a lista de registros
   * @example Ao ser emitido, o componente pai pode refazer o GET da lista, por exemplo.
   * @emits EventEmitter<string> que leva o valor string da pesquisa feita para ser enviada para o GET
   * @type {EventEmitter<string>} */
  @Output() public onReloadList: EventEmitter<string> = new EventEmitter<string>();


  @Output() public onChange: EventEmitter<string | number | null> = new EventEmitter<string | number | null>();
  

  @ViewChild('mainInput') private _mainInput!: ElementRef;
  @ViewChild('dropdownMenu') private _dropdownMenu!: ElementRef;
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor() { }

  ngOnInit(): void {
    this.setValidator();
    this.initializeSelectedValue();
  }

  ngAfterViewInit(): void {
    this.adjustDropdownWidth();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes["comboboxList"]?.currentValue) this.initializeSelectedValue();
  //   if (changes["outerControl"]?.currentValue) {
  //     this.subscribeControlChanges();
  //   }
  // }

  ngDoCheck(): void {
    const parentGroup = this._outerControl.parent as FormGroup;
    console.log("controlName:", this.controlName);

    if (!this.controlName) {
      // Iterando sobre os controles no FormGroup
      const controlExists = Object.values(parentGroup.controls).some(control => control === this._outerControl);

      if (parentGroup) {
        if (!controlExists) throw new Error("Erro no <lib-combobox> - O FormControl informado não foi encontrado dentro do FormGroup...");
        const tempControl = Object.values(parentGroup.controls).find(control => control === this._outerControl);

        this.disabled = tempControl!.disabled;
        this.invalid = tempControl!.invalid;
        this.dirty = tempControl!.dirty;
        this.touched = tempControl!.touched;
    
        this.setIsInvalid();
      }
      else {
        this.disabled = this._outerControl.disabled;
        this.invalid = this._outerControl.invalid;
        this.dirty = this._outerControl.dirty;
        this.touched = this._outerControl.touched;

        this.setIsInvalid();
      }
    }
    else {
      const control = parentGroup.get(this.controlName);
      console.log("parentGroup:", parentGroup);
      console.log("controlExists:", control);

      if (parentGroup) {
        if (control === null) console.error(`Erro no <lib-combobox> - O FormControl de nome "${this.controlName}" informado não foi encontrado dentro do FormGroup.`);

        const tempControl = parentGroup.controls[this.controlName as string];
        console.log("tempControl:", tempControl);

        this.disabled = tempControl!.disabled;
        this.invalid = tempControl!.invalid;
        this.dirty = tempControl!.dirty;
        this.touched = tempControl!.touched;
    
        this.setIsInvalid();
      }
      else {
        this.disabled = this._outerControl.disabled;
        this.invalid = this._outerControl.invalid;
        this.dirty = this._outerControl.dirty;
        this.touched = this._outerControl.touched;

        this.setIsInvalid();
      }
    }
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  // O que fazer quando o evento de redimensionamento ocorrer
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void { this.adjustDropdownWidth() }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========
  public setValue(item: RecordCombobox): void {
    this.textoPesquisa = "";
    this.innerControl.markAsDirty();
    this._outerControl.markAsDirty();
    
    this._outerControl.setValue(item.ID);
    this.innerControl.setValue(item.LABEL);

    this.ariaExpanded = false;
    this.setIsInvalid();

    this.onChange.emit(item.ID);
  }

  public clearValue(): void {
    this.textoPesquisa = "";
    this.innerControl.markAsDirty();
    this._outerControl.markAsDirty();

    this._outerControl.setValue(null);
    this.innerControl.setValue(null);

    this.ariaExpanded = false;
    this.setIsInvalid();

    this.onChange.emit(null);
  }

  private initializeSelectedValue(): void {
    this.innerControl.setValue(null); // Limpa o campo antes de qualquer coisa

    if (!this.comboboxList || (this._outerControl.value == null && this._outerControl.value == '')) return;

    const initializedValue = this.comboboxList.find(item => item.ID == this._outerControl.value)
    if (initializedValue) this.innerControl.setValue(initializedValue.LABEL);
  }

  private adjustDropdownWidth(): void {
    if (this._mainInput && this._dropdownMenu) {
      const inputWidth = this._mainInput.nativeElement.offsetWidth;
      this._dropdownMenu.nativeElement.style.width = `${inputWidth}px`;
    }
  }

  /** Serve para atualizar o status do control e o desabilitar caso seja feito no componente pai,
   * sem a necessidade de uma outra propriedade específica para isto. */
  private subscribeControlChanges(): void {
    this._outerControl.statusChanges.subscribe(status => {
      if (status === "DISABLED") this.innerControl.disable();
      else this.innerControl.enable();

      this.setIsInvalid();
    });
  }


  private setValidator(): void {
    if (this._outerControl.hasValidator(Validators.required)) { this.innerControl.addValidators(Validators.required); }
  }

  private setIsInvalid(): void {
    console.log("invalid:", this.invalid);
    console.log("dirty:", this.dirty);
    console.log("touched:", this.touched);

    this.invalidControl = this.invalid && (this.touched && this.dirty);
    console.log("invalidControl:", this.invalidControl);
  }

  public reloadList(): void { this.onReloadList.emit(this.textoPesquisa) }
  // #endregion ==========> UTILS <==========

}

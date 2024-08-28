import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { RecordCombobox } from '../../models/combobox/record-combobox';
import { Subscription } from 'rxjs';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

/**
 * @file lib-combobox.component.ts
 * @description Este arquivo contém a implementação do componente LibComboboxComponent, que é um componente de interface do usuário
 * para realizar pesquisas e seleções em uma lista de opções apresentada em um combobox.
 * 
 * @component ComboboxComponent
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
 * - `valueControl` (FormControl | AbstractControl): Control para seleção dos valores.
 * - `comboboxList` (RecordCombobox[]): Array de objetos representando os itens disponíveis para seleção.
 * - `labelText` (string): Texto de etiqueta associado ao combobox.
 * - `libRequired` (boolean): Indica se o label será exibido como obrigatório ou não
 * - `colorTheme` ("primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"): Tema de cores para o componente.
 * - `mainInputPlaceholder` (string): Texto de espaço reservado para o input principal.
 * - `searchInputPlaceholder` (string): Texto de espaço reservado para o input de pesquisa.
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

  private _valueControl: FormControl = new FormControl<string | number | null>(null);
  // #endregion PRIVATE

  // #region PUBLIC
  @Input({ alias: 'control', required: true })
  public set valueControl(value: FormControl<any> | AbstractControl<any>) { this._valueControl = value as FormControl }
  public get valueControl(): FormControl<any> { return this._valueControl }

  @Input({ alias: 'list', required: true }) public comboboxList?: RecordCombobox[];

  @Input() public labelText?: string;
  @Input() public libRequired?: boolean = false;
  @Input() public disabled?: boolean = false;
  @Input() public mainInputPlaceholder?: string = "Selecione uma opção...";
  @Input() public searchInputPlaceholder?: string = "Pesquisa...";
  @Input() public colorTheme?: string = "primary";
  
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
    this.valueControl.markAsDirty();

    this.selectedText = item.LABEL;
    
    this.valueControl.setValue(item.ID);
    this.innerControl.setValue(item.LABEL);

    this.ariaExpanded = false;
  }

  public clearValue(): void {
    this.textoPesquisa = "";
    this.valueControl.markAsDirty();

    this.selectedText = undefined;

    this.valueControl.setValue(null);
    this.innerControl.setValue(null);

    this.ariaExpanded = false;
  }

  private initializeSelectedValue(): void {
    if (!this.comboboxList || (this.valueControl.value == null && this.valueControl.value == '')) return;

    const initializedValue = this.comboboxList.find(item => item.ID == this.valueControl.value)
    
    if (initializedValue) {
      this.valueControl.setValue(initializedValue.ID);
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

  public reloadList(): void { this.onReloadList.emit(this.textoPesquisa) }
  // #endregion ==========> UTILS <==========

}

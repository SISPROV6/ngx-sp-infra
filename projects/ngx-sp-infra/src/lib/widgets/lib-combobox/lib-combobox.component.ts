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
 * - `formControl` (FormControl | AbstractControl): Control para seleção dos valores.
 * - `comboboxList` (RecordCombobox[]): Array de objetos representando os itens disponíveis para seleção.
 * - `labelText` (string): Texto de etiqueta associado ao combobox.
 * - `colorTheme` ("primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"): Tema de cores para o componente.
 * - `mainInputPlaceholder` (string): Texto de espaço reservado para o input principal.
 * - `searchInputPlaceholder` (string): Texto de espaço reservado para o input de pesquisa.
 * 
 * ## Outputs:
 * - `onReloadList` (EventEmitter<string>): Evento emitido quando a lista precisa ser recarregada.
 * - `controlValueChange` (EventEmitter<FormControl>): Evento emitido quando um item é selecionado.
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
  private _subscription: Subscription;
  // #endregion PRIVATE

  // #region PUBLIC
  @Input({ alias: 'control', required: true })
  public set formControl(value: FormControl<any> | AbstractControl<any>) {
    console.log(value);
    this.idControl = value as FormControl;
  }
  public get formControl(): FormControl<any> { return this.idControl }

  @Input({ alias: 'list', required: true }) public comboboxList: RecordCombobox[];

  @Input() public labelText?: string;
  @Input() public libRequired?: boolean = false;
  @Input() public disabled?: boolean = false;
  @Input() public mainInputPlaceholder?: string = "Selecione uma opção...";
  @Input() public searchInputPlaceholder?: string = "Pesquisa...";
  @Input() public colorTheme?: string = "primary";
  
  @Output() public onReloadList: EventEmitter<string> = new EventEmitter<string>();
  @Output() public controlValueChange = new EventEmitter<FormControl>();

  @ViewChild('mainInput') private _mainInput!: ElementRef;
  @ViewChild('dropdownMenu') private _dropdownMenu!: ElementRef;

  public selectedText?: string;
  public textoPesquisa: string = "";

  public get ariaExpanded(): boolean { return this._ariaExpanded; }
  public set ariaExpanded(value: boolean) { this._ariaExpanded = value; }
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> FORM BUILDER <==========
  private idControl: FormControl = new FormControl<string | number>("")
  public filterForm: FormGroup = new FormGroup({
    _searchInput: new FormControl<string>("")
  });
  // #endregion ==========> FORM BUILDER <==========


  // #region ==========> INITIALIZATION <==========
  constructor() {}

  ngOnInit(): void {
    this.initializeSelectedValue();
    
    this._subscription = this.formControl.valueChanges.subscribe(value => {
      this.controlValueChange.emit(this.idControl)
    });
  }

  ngAfterViewInit(): void {
    this.adjustDropdownWidth();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["list"]?.currentValue) { this.initializeSelectedValue() }

    if (changes["control"]?.currentValue) {
      if (!this.formControl) { throw new Error("Nenhum [control] (FormControl) informado") }
    }
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> SERVICE METHODS <==========

  // #region PREPARATION
  // [...]
  // #endregion PREPARATION

  // #region GET
  // [...]
  // #endregion GET

  // #region POST
  // [...]
  // #endregion POST

  // #region DELETE
  // [...]
  // #endregion DELETE

  // #endregion ==========> SERVICE METHODS <==========


  // #region ==========> UTILS <==========
  public setFilterValue(item?: RecordCombobox): void {
    const itemValue = item ? `${item.ID as string} - ${item.LABEL}` : "";
    this.filterForm.controls["_searchInput"].setValue(itemValue);

    this.textoPesquisa = "";
    this.formControl.markAsDirty();

    if (item) {
      this.selectedText = item.LABEL;
      
      this.idControl.setValue(item.ID);
      this.formControl.setValue(item.LABEL);
    } else {
      this.selectedText = undefined;

      this.idControl.setValue("");
      this.formControl.setValue("");
    }

    this.ariaExpanded = false;
  }

  private initializeSelectedValue(): void {
    if (!this.comboboxList || !this.comboboxList.length) return;

    const initializedValue = this.comboboxList.find(item => item.ID == this.formControl.value)

    if (initializedValue) {
      this.idControl.setValue(initializedValue.ID ?? "");
      this.formControl.setValue(initializedValue.LABEL ?? "");
      
      this.selectedText = initializedValue.LABEL;
    }
  }

  private adjustDropdownWidth(): void {
    if (this._mainInput && this._dropdownMenu) {
      const inputWidth = this._mainInput.nativeElement.offsetWidth;
      this._dropdownMenu.nativeElement.style.width = `${inputWidth}px`;
    }
  }

  public reloadList(search: string): void { this.onReloadList.emit(search) }
  // #endregion ==========> UTILS <==========

}

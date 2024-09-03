import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../field-error-message/field-error-message.component";
import * as i4 from "../svg-storage/svg-storage.component";
import * as i5 from "../../directives/required.directive";
import * as i6 from "../../pipes/text-filter.pipe";
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
 * - `controlName` (string): Define um nome para o controle, utilizado internamente em alguns recursos. Recomendado para evitar alguns bugs de detecção.
 * - `disabled` (boolean): Define se o campo está desabilitado. Deve ser usado para validações de habilitação dinâmica do campo
 * - `libRequired` (boolean): Define se o campo é obrigatório, vai exibir o '*' vermelho ao lado do label (se ele estiver presente)
 * - `mainInputPlaceholder` (string): Placeholder do campo principal do combo
 * - `searchInputPlaceholder` (string): Placeholder do campo de pesquisa dentro do combo
 * - `colorTheme` ("primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"): Define o tema de cor do componente, como "primary", "success", ou "danger"
 *
 * ## Outputs:
 * - `onReloadList` (EventEmitter<string>): Evento emitido quando a lista precisa ser recarregada.
 */
export class LibComboboxComponent {
    get ariaExpanded() { return this._ariaExpanded; }
    set ariaExpanded(value) { this._ariaExpanded = value; }
    // #endregion PRIVATE
    // #region PUBLIC
    /** (obrigatório) Control para seleção dos valores, atualizará automaticamente o control do componente pai também
     * @alias 'control'
     * @type {FormControl<any> | AbstractControl<any>} */
    get outerControl() { return this._outerControl; }
    set outerControl(value) {
        this._outerControl = value;
        // Cancela a subscrição anterior (se houver) para evitar múltiplas subscrições
        if (this._subscription)
            this._subscription.unsubscribe();
        // Subscrição ao observável valueChanges para reagir a mudanças no valor
        this._subscription = this._outerControl.valueChanges.subscribe(() => { this.initializeSelectedValue(); });
        this._subscription = this._outerControl.statusChanges.subscribe(() => { this.subscribeControlChanges(); });
    }
    /** (opcional) Define se o campo está desabilitado. Deve ser usado para validações de habilitação dinâmica do campo
     * @type {boolean}
     * @default false */
    get disabled() { return this._disabled ?? false; }
    set disabled(value) {
        if (value && value === true)
            this.innerControl.disable();
        else
            this.innerControl.enable();
        this.setIsInvalid();
    }
    // #endregion PUBLIC
    // #endregion ==========> PROPERTIES <==========
    // #region ==========> INITIALIZATION <==========
    constructor() {
        // #region ==========> PROPERTIES <==========
        // #region PROTECTED
        this.textoPesquisa = "";
        this.innerControl = new FormControl(null);
        this.invalidControl = false;
        this.isRequired = false;
        this.invalid = false;
        this.dirty = false;
        this.touched = false;
        // #endregion PROTECTED
        // #region PRIVATE
        this._disabled = false;
        this._ariaExpanded = false;
        this._subscription = new Subscription();
        this._outerControl = new FormControl(null);
        /** (opcional) Define se o campo é obrigatório, vai exibir o '*' vermelho ao lado do label (se ele estiver presente)
         * ! SERÁ DEPRECIADO EM BREVE
         * @type {boolean}
         * @default false */
        this.libRequired = false;
        /** (opcional) Placeholder do campo principal do combo
         * @alias 'mainPlaceholder'
         * @type {string}
         * @default "Selecione uma opção..." */
        this.mainInputPlaceholder = "Selecione uma opção...";
        /** (opcional) Placeholder do campo de pesquisa dentro do combo
         * @alias 'searchPlaceholder'
         * @type {string}
         * @default "Pesquisa..." */
        this.searchInputPlaceholder = "Pesquisa...";
        /** (opcional) Define o tema de cor do componente, como "primary", "success", ou "danger"
         * @alias 'theme'
         * @type {string}
         * @default "primary"
        */
        this.colorTheme = "primary";
        /** Evento emitido ao recarregar a lista de registros
         * @example Ao ser emitido, o componente pai pode refazer o GET da lista, por exemplo.
         * @emits EventEmitter<string> que leva o valor string da pesquisa feita para ser enviada para o GET
         * @type {EventEmitter<string>} */
        this.onReloadList = new EventEmitter();
        /** Evento emitido ao selecionar um registro da lista do combobox
         * @example Ao ser emitido, o componente pai pode realizar uma validação com o valor selecionado.
         * @emits EventEmitter<string|number|null> que leva o valor string da pesquisa feita para ser enviada para o GET
         * @type {EventEmitter<string | number | null>} */
        this.onChange = new EventEmitter();
    }
    ngOnInit() {
        this.setValidator();
        this.initializeSelectedValue();
    }
    ngAfterViewInit() {
        this.adjustDropdownWidth();
    }
    // ngOnChanges(changes: SimpleChanges): void {
    //   if (changes["comboboxList"]?.currentValue) this.initializeSelectedValue();
    //   if (changes["outerControl"]?.currentValue) {
    //     this.subscribeControlChanges();
    //   }
    // }
    ngDoCheck() {
        const parentGroup = this._outerControl.parent;
        if (!this.controlName) {
            // Iterando sobre os controles no FormGroup
            const controlExists = Object.values(parentGroup.controls).some(control => control === this._outerControl);
            if (parentGroup) {
                if (!controlExists)
                    console.error("Erro no <lib-combobox> - O FormControl informado não foi encontrado dentro do FormGroup...");
                const tempControl = Object.values(parentGroup.controls).find(control => control === this._outerControl);
                this.disabled = tempControl.disabled;
                this.invalid = tempControl.invalid;
                this.dirty = tempControl.dirty;
                this.touched = tempControl.touched;
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
            if (parentGroup) {
                if (control === null)
                    console.error(`Erro no <lib-combobox> - O FormControl de nome "${this.controlName}" informado não foi encontrado dentro do FormGroup.`);
                const tempControl = parentGroup.controls[this.controlName];
                this.disabled = tempControl.disabled;
                this.invalid = tempControl.invalid;
                this.dirty = tempControl.dirty;
                this.touched = tempControl.touched;
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
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    // O que fazer quando o evento de redimensionamento ocorrer
    onResize(event) { this.adjustDropdownWidth(); }
    // #endregion ==========> INITIALIZATION <==========
    // #region ==========> UTILS <==========
    setValue(item) {
        this.textoPesquisa = "";
        this.innerControl.markAsDirty();
        this._outerControl.markAsDirty();
        this._outerControl.setValue(item.ID);
        this.innerControl.setValue(item.LABEL);
        this.ariaExpanded = false;
        this.setIsInvalid();
        this.onChange.emit(item.ID);
    }
    clearValue() {
        this.textoPesquisa = "";
        this.innerControl.markAsDirty();
        this._outerControl.markAsDirty();
        this._outerControl.setValue(null);
        this.innerControl.setValue(null);
        this.ariaExpanded = false;
        this.setIsInvalid();
        this.onChange.emit(null);
    }
    initializeSelectedValue() {
        this.innerControl.setValue(null); // Limpa o campo antes de qualquer coisa
        if (!this.comboboxList || (this._outerControl.value == null && this._outerControl.value == ''))
            return;
        const initializedValue = this.comboboxList.find(item => item.ID == this._outerControl.value);
        if (initializedValue)
            this.innerControl.setValue(initializedValue.LABEL);
    }
    adjustDropdownWidth() {
        if (this._mainInput && this._dropdownMenu) {
            const inputWidth = this._mainInput.nativeElement.offsetWidth;
            this._dropdownMenu.nativeElement.style.width = `${inputWidth}px`;
        }
    }
    /** Serve para atualizar o status do control e o desabilitar caso seja feito no componente pai,
     * sem a necessidade de uma outra propriedade específica para isto. */
    subscribeControlChanges() {
        this._outerControl.statusChanges.subscribe(status => {
            if (status === "DISABLED")
                this.innerControl.disable();
            else
                this.innerControl.enable();
            this.setIsInvalid();
        });
    }
    setValidator() {
        if (this._outerControl.hasValidator(Validators.required)) {
            this.innerControl.addValidators(Validators.required);
            this.isRequired = true;
        }
        else {
            this.innerControl.removeValidators(Validators.required);
            this.isRequired = false;
        }
    }
    setIsInvalid() {
        this.invalidControl = this.invalid && (this.touched && this.dirty);
    }
    reloadList() { this.onReloadList.emit(this.textoPesquisa); }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LibComboboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: LibComboboxComponent, selector: "lib-combobox", inputs: { outerControl: ["control", "outerControl"], comboboxList: ["list", "comboboxList"], labelText: "labelText", libRequired: "libRequired", disabled: "disabled", mainInputPlaceholder: ["mainPlaceholder", "mainInputPlaceholder"], searchInputPlaceholder: ["searchPlaceholder", "searchInputPlaceholder"], colorTheme: ["theme", "colorTheme"], controlName: "controlName" }, outputs: { onReloadList: "onReloadList", onChange: "onChange" }, host: { listeners: { "window:resize": "onResize($event)" } }, viewQueries: [{ propertyName: "_mainInput", first: true, predicate: ["mainInput"], descendants: true }, { propertyName: "_dropdownMenu", first: true, predicate: ["dropdownMenu"], descendants: true }], ngImport: i0, template: "<label *ngIf=\"labelText && labelText != ''\" [libRequired]=\"isRequired\" class=\"form-label fw-bold\">{{ labelText }}</label>\r\n<div class=\"input-group dropdown flex-fill glb-max-height-350px\">\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnLeft] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado esquerdo do combobox de pesquisa.\r\n   Ao usar o atributo [btnLeft], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnLeft]\"></ng-content>\r\n\r\n   <input  #mainInput class=\"form-select text-start rounded-end\" type=\"text\" data-bs-toggle=\"dropdown\" [placeholder]=\"mainInputPlaceholder\"\r\n            [formControl]=\"innerControl\" data-bs-auto-close=\"outside\" aria-expanded=\"false\" readonly [class.is-invalid]=\"invalidControl\"\r\n            (click)=\"ariaExpanded = !ariaExpanded; searchInput.focus()\" (focus)=\"searchInput.focus()\">\r\n\r\n   <ul  #dropdownMenu  class=\"dropdown-menu p-2 glb-max-height-350px overflow-y-scroll z-index-1020\" [class.show]=\"ariaExpanded\">\r\n      <div class=\"input-group mb-2\">\r\n         <input #searchInput (input)=\"textoPesquisa = searchInput.value\" type=\"text\" id=\"searchInput\" class=\"form-control glb-input-no-glow\" [placeholder]=\"searchInputPlaceholder\" (keyup.enter)=\"reloadList()\">\r\n         <button class=\"btn btn-{{colorTheme}}\" (click)=\"reloadList()\"> <app-svg-storage svgName=\"lupa\" svgSize=\"medium-small\" /> </button>\r\n      </div>\r\n\r\n      @if (comboboxList) {\r\n         <li *ngIf=\"innerControl.value != '' && innerControl.value != null\" class=\"dropdown-item\" (click)=\"clearValue()\"> <span class=\"fw-bold\">Limpar op\u00E7\u00E3o selecionada</span> </li>\r\n         @for (item of comboboxList | textFilter:textoPesquisa; track $index) {\r\n            <li class=\"dropdown-item\" (click)=\"setValue(item)\">\r\n               <span *ngIf=\"item.AdditionalStringProperty1 || item.AdditionalStringProperty1 != ''\" class=\"glb-fs-12 fw-bold d-inline-block w-125\">{{ item.AdditionalStringProperty1 }}</span> {{ item.LABEL }}\r\n            </li>\r\n         }\r\n         @empty { <li class=\"dropdown-item fst-italic\">Nenhum registro encontrado com esta pesquisa...</li> }\r\n      }\r\n      @else { <li class=\"dropdown-item text-center\"> <div class=\"spinner-border\" role=\"status\"><span class=\"visually-hidden\">Carregando dados...</span></div> </li> }\r\n   </ul>\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnRight] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado direito do combobox de pesquisa.\r\n   Ao usar o atributo [btnRight], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnRight]\"></ng-content>\r\n\r\n</div>\r\n\r\n<!-- #region MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n<app-field-error-message *ngIf=\"invalidControl\" [control]=\"innerControl\" />\r\n<!-- #endregion MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n", styles: [".glb-max-height-350px{max-height:350px!important}.form-label{font-size:16px!important}.z-index-1020{z-index:1020!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.FieldErrorMessageComponent, selector: "app-field-error-message", inputs: ["customMessage", "control", "label"] }, { kind: "component", type: i4.SvgStorageComponent, selector: "app-svg-storage", inputs: ["svgName", "svgColor", "svgFill", "svgSize", "svgStrokeWidth"] }, { kind: "directive", type: i5.RequiredDirective, selector: "label[libRequired], span[libRequired], p[libRequired]", inputs: ["libRequired", "sisID"] }, { kind: "pipe", type: i6.TextFilterPipe, name: "textFilter" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LibComboboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-combobox', template: "<label *ngIf=\"labelText && labelText != ''\" [libRequired]=\"isRequired\" class=\"form-label fw-bold\">{{ labelText }}</label>\r\n<div class=\"input-group dropdown flex-fill glb-max-height-350px\">\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnLeft] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado esquerdo do combobox de pesquisa.\r\n   Ao usar o atributo [btnLeft], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnLeft]\"></ng-content>\r\n\r\n   <input  #mainInput class=\"form-select text-start rounded-end\" type=\"text\" data-bs-toggle=\"dropdown\" [placeholder]=\"mainInputPlaceholder\"\r\n            [formControl]=\"innerControl\" data-bs-auto-close=\"outside\" aria-expanded=\"false\" readonly [class.is-invalid]=\"invalidControl\"\r\n            (click)=\"ariaExpanded = !ariaExpanded; searchInput.focus()\" (focus)=\"searchInput.focus()\">\r\n\r\n   <ul  #dropdownMenu  class=\"dropdown-menu p-2 glb-max-height-350px overflow-y-scroll z-index-1020\" [class.show]=\"ariaExpanded\">\r\n      <div class=\"input-group mb-2\">\r\n         <input #searchInput (input)=\"textoPesquisa = searchInput.value\" type=\"text\" id=\"searchInput\" class=\"form-control glb-input-no-glow\" [placeholder]=\"searchInputPlaceholder\" (keyup.enter)=\"reloadList()\">\r\n         <button class=\"btn btn-{{colorTheme}}\" (click)=\"reloadList()\"> <app-svg-storage svgName=\"lupa\" svgSize=\"medium-small\" /> </button>\r\n      </div>\r\n\r\n      @if (comboboxList) {\r\n         <li *ngIf=\"innerControl.value != '' && innerControl.value != null\" class=\"dropdown-item\" (click)=\"clearValue()\"> <span class=\"fw-bold\">Limpar op\u00E7\u00E3o selecionada</span> </li>\r\n         @for (item of comboboxList | textFilter:textoPesquisa; track $index) {\r\n            <li class=\"dropdown-item\" (click)=\"setValue(item)\">\r\n               <span *ngIf=\"item.AdditionalStringProperty1 || item.AdditionalStringProperty1 != ''\" class=\"glb-fs-12 fw-bold d-inline-block w-125\">{{ item.AdditionalStringProperty1 }}</span> {{ item.LABEL }}\r\n            </li>\r\n         }\r\n         @empty { <li class=\"dropdown-item fst-italic\">Nenhum registro encontrado com esta pesquisa...</li> }\r\n      }\r\n      @else { <li class=\"dropdown-item text-center\"> <div class=\"spinner-border\" role=\"status\"><span class=\"visually-hidden\">Carregando dados...</span></div> </li> }\r\n   </ul>\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnRight] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado direito do combobox de pesquisa.\r\n   Ao usar o atributo [btnRight], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnRight]\"></ng-content>\r\n\r\n</div>\r\n\r\n<!-- #region MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n<app-field-error-message *ngIf=\"invalidControl\" [control]=\"innerControl\" />\r\n<!-- #endregion MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n", styles: [".glb-max-height-350px{max-height:350px!important}.form-label{font-size:16px!important}.z-index-1020{z-index:1020!important}\n"] }]
        }], ctorParameters: () => [], propDecorators: { outerControl: [{
                type: Input,
                args: [{ alias: 'control', required: true }]
            }], comboboxList: [{
                type: Input,
                args: [{ alias: 'list', required: true }]
            }], labelText: [{
                type: Input
            }], libRequired: [{
                type: Input
            }], disabled: [{
                type: Input
            }], mainInputPlaceholder: [{
                type: Input,
                args: ['mainPlaceholder']
            }], searchInputPlaceholder: [{
                type: Input,
                args: ['searchPlaceholder']
            }], colorTheme: [{
                type: Input,
                args: ['theme']
            }], controlName: [{
                type: Input,
                args: ['controlName']
            }], onReloadList: [{
                type: Output
            }], onChange: [{
                type: Output
            }], _mainInput: [{
                type: ViewChild,
                args: ['mainInput']
            }], _dropdownMenu: [{
                type: ViewChild,
                args: ['dropdownMenu']
            }], onResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWNvbWJvYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvbGliLWNvbWJvYm94L2xpYi1jb21ib2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2xpYi1jb21ib2JveC9saWItY29tYm9ib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQyxTQUFTLEVBQXVCLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFnQyxNQUFNLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwTSxPQUFPLEVBQXlDLFdBQVcsRUFBZ0MsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7QUFJcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Qkc7QUFNSCxNQUFNLE9BQU8sb0JBQW9CO0lBTy9CLElBQWMsWUFBWSxLQUFjLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDcEUsSUFBYyxZQUFZLENBQUMsS0FBYyxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQWlCMUUscUJBQXFCO0lBRXJCLGlCQUFpQjtJQUVqQjs7eURBRXFEO0lBQ3JELElBQ1csWUFBWSxLQUF1QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUEsQ0FBQyxDQUFDO0lBQ3pFLElBQVcsWUFBWSxDQUFDLEtBQThDO1FBQ3BFLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBb0IsQ0FBQztRQUUxQyw4RUFBOEU7UUFDOUUsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUFFLElBQUksQ0FBQyxhQUFh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Z2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBEb0NoZWNrLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIE5HX1ZBTFVFX0FDQ0VTU09SLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBSZWNvcmRDb21ib2JveCB9IGZyb20gJy4uLy4uL21vZGVscy9jb21ib2JveC9yZWNvcmQtY29tYm9ib3gnO1xyXG5cclxuLyoqXHJcbiAqIEBjb21wb25lbnQgTGliQ29tYm9ib3hDb21wb25lbnRcclxuICogQHNlbGVjdG9yIGxpYi1jb21ib2JveFxyXG4gKiBcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIE8gY29tcG9uZW50ZSBMaWJDb21ib2JveENvbXBvbmVudCDDqSBwcm9qZXRhZG8gcGFyYSBmb3JuZWNlciBhb3MgdXN1w6FyaW9zIHVtYSBpbnRlcmZhY2UgcGFyYSBwZXNxdWlzYXIgZSBzZWxlY2lvbmFyIGl0ZW5zIGRlIHVtYSBsaXN0YS5cclxuICogRWxlIHN1cG9ydGEgYSBmaWx0cmFnZW0gZGUgaXRlbnMgY29tIGJhc2UgbmEgZW50cmFkYSBkbyB1c3XDoXJpbywgcGVybWl0aW5kbyB1bWEgc2VsZcOnw6NvIG1haXMgZsOhY2lsIGVtIGxpc3RhcyBleHRlbnNhcy5cclxuICogXHJcbiAqICMjIEZ1bmNpb25hbGlkYWRlczpcclxuICogLSBQZXNxdWlzYSBlIGZpbHRyYWdlbSBkZSBpdGVucyBuYSBsaXN0YSBkbyBjb21ib2JveC5cclxuICogLSBTZWxlw6fDo28gZGUgaXRlbnMgY29tIGZlZWRiYWNrIHZpc3VhbC5cclxuICogLSBFbWlzc8OjbyBkZSBldmVudG9zIHBlcnNvbmFsaXphZG9zIHBhcmEgaW50ZXJhw6fDtWVzIGRvIHVzdcOhcmlvLCBjb21vIHJlY2FycmVnYXIgYSBsaXN0YSBvdSBzZWxlY2lvbmFyIHVtIGl0ZW0uXHJcbiAqIC0gQWp1c3RlIGRpbsOibWljbyBkYSBsYXJndXJhIGRvIGRyb3Bkb3duIHBhcmEgY29ycmVzcG9uZGVyIGFvIGlucHV0IHByaW5jaXBhbC5cclxuICogLSBJbmljaWFsaXphw6fDo28gZGUgdW0gdmFsb3Igc2VsZWNpb25hZG8sIHNlIGZvcm5lY2lkby5cclxuICogXHJcbiAqICMjIElucHV0czpcclxuICogLSBgb3V0ZXJDb250cm9sYCAoRm9ybUNvbnRyb2wgfCBBYnN0cmFjdENvbnRyb2wpOiBDb250cm9sIHBhcmEgc2VsZcOnw6NvIGRvcyB2YWxvcmVzLCBhdHVhbGl6YXLDoSBhdXRvbWF0aWNhbWVudGUgbyBjb250cm9sIGRvIGNvbXBvbmVudGUgcGFpIHRhbWLDqW1cclxuICogLSBgY29tYm9ib3hMaXN0YCAoUmVjb3JkQ29tYm9ib3hbXSk6IExpc3RhIGRlIHJlZ2lzdHJvcyBxdWUgc2Vyw6NvIGV4aWJpZG9zIG5vIGNvbWJvLCBlbnF1YW50byBlbGVzIGVzdGl2ZXJlbSBjYXJyZWdhbmRvIHNlcsOhIGV4aWJpZG8gdW0gc3Bpbm5lclxyXG4gKiAtIGBsYWJlbFRleHRgIChzdHJpbmcpOiBUZXh0byBkbyByw7N0dWxvIHF1ZSBzZXLDoSBleGliaWRvIGFjaW1hIGRvIGNvbWJvLiBDYXNvIG7Do28gaW5mb3JtYWRvIG5hZGEgc2Vyw6EgZXhpYmlkb1xyXG4gKiAtIGBjb250cm9sTmFtZWAgKHN0cmluZyk6IERlZmluZSB1bSBub21lIHBhcmEgbyBjb250cm9sZSwgdXRpbGl6YWRvIGludGVybmFtZW50ZSBlbSBhbGd1bnMgcmVjdXJzb3MuIFJlY29tZW5kYWRvIHBhcmEgZXZpdGFyIGFsZ3VucyBidWdzIGRlIGRldGVjw6fDo28uXHJcbiAqIC0gYGRpc2FibGVkYCAoYm9vbGVhbik6IERlZmluZSBzZSBvIGNhbXBvIGVzdMOhIGRlc2FiaWxpdGFkby4gRGV2ZSBzZXIgdXNhZG8gcGFyYSB2YWxpZGHDp8O1ZXMgZGUgaGFiaWxpdGHDp8OjbyBkaW7Dom1pY2EgZG8gY2FtcG9cclxuICogLSBgbGliUmVxdWlyZWRgIChib29sZWFuKTogRGVmaW5lIHNlIG8gY2FtcG8gw6kgb2JyaWdhdMOzcmlvLCB2YWkgZXhpYmlyIG8gJyonIHZlcm1lbGhvIGFvIGxhZG8gZG8gbGFiZWwgKHNlIGVsZSBlc3RpdmVyIHByZXNlbnRlKVxyXG4gKiAtIGBtYWluSW5wdXRQbGFjZWhvbGRlcmAgKHN0cmluZyk6IFBsYWNlaG9sZGVyIGRvIGNhbXBvIHByaW5jaXBhbCBkbyBjb21ib1xyXG4gKiAtIGBzZWFyY2hJbnB1dFBsYWNlaG9sZGVyYCAoc3RyaW5nKTogUGxhY2Vob2xkZXIgZG8gY2FtcG8gZGUgcGVzcXVpc2EgZGVudHJvIGRvIGNvbWJvXHJcbiAqIC0gYGNvbG9yVGhlbWVgIChcInByaW1hcnlcIiB8IFwic2Vjb25kYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwiZGFuZ2VyXCIgfCBcIndhcm5pbmdcIiB8IFwiaW5mb1wiIHwgXCJsaWdodFwiIHwgXCJkYXJrXCIpOiBEZWZpbmUgbyB0ZW1hIGRlIGNvciBkbyBjb21wb25lbnRlLCBjb21vIFwicHJpbWFyeVwiLCBcInN1Y2Nlc3NcIiwgb3UgXCJkYW5nZXJcIlxyXG4gKiBcclxuICogIyMgT3V0cHV0czpcclxuICogLSBgb25SZWxvYWRMaXN0YCAoRXZlbnRFbWl0dGVyPHN0cmluZz4pOiBFdmVudG8gZW1pdGlkbyBxdWFuZG8gYSBsaXN0YSBwcmVjaXNhIHNlciByZWNhcnJlZ2FkYS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWNvbWJvYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGliLWNvbWJvYm94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vbGliLWNvbWJvYm94LmNvbXBvbmVudC5zY3NzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliQ29tYm9ib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XHJcblxyXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gUFJPUEVSVElFUyA8PT09PT09PT09PVxyXG5cclxuICAvLyAjcmVnaW9uIFBST1RFQ1RFRFxyXG4gIHByb3RlY3RlZCB0ZXh0b1Blc3F1aXNhOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IGFyaWFFeHBhbmRlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2FyaWFFeHBhbmRlZDsgfVxyXG4gIHByb3RlY3RlZCBzZXQgYXJpYUV4cGFuZGVkKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2FyaWFFeHBhbmRlZCA9IHZhbHVlOyB9XHJcblxyXG4gIHByb3RlY3RlZCBpbm5lckNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sPHN0cmluZyB8IG51bWJlciB8IG51bGw+KG51bGwpO1xyXG4gIHByb3RlY3RlZCBpbnZhbGlkQ29udHJvbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBpc1JlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCBpbnZhbGlkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIGRpcnR5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIHRvdWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvLyAjZW5kcmVnaW9uIFBST1RFQ1RFRFxyXG5cclxuICAvLyAjcmVnaW9uIFBSSVZBVEVcclxuICBwcml2YXRlIF9kaXNhYmxlZD86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9hcmlhRXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgcHJpdmF0ZSBfb3V0ZXJDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbDxzdHJpbmcgfCBudW1iZXIgfCBudWxsPihudWxsKTtcclxuICAvLyAjZW5kcmVnaW9uIFBSSVZBVEVcclxuXHJcbiAgLy8gI3JlZ2lvbiBQVUJMSUNcclxuXHJcbiAgLyoqIChvYnJpZ2F0w7NyaW8pIENvbnRyb2wgcGFyYSBzZWxlw6fDo28gZG9zIHZhbG9yZXMsIGF0dWFsaXphcsOhIGF1dG9tYXRpY2FtZW50ZSBvIGNvbnRyb2wgZG8gY29tcG9uZW50ZSBwYWkgdGFtYsOpbVxyXG4gICAqIEBhbGlhcyAnY29udHJvbCdcclxuICAgKiBAdHlwZSB7Rm9ybUNvbnRyb2w8YW55PiB8IEFic3RyYWN0Q29udHJvbDxhbnk+fSAqL1xyXG4gIEBJbnB1dCh7IGFsaWFzOiAnY29udHJvbCcsIHJlcXVpcmVkOiB0cnVlIH0pXHJcbiAgcHVibGljIGdldCBvdXRlckNvbnRyb2woKTogRm9ybUNvbnRyb2w8YW55PiB7IHJldHVybiB0aGlzLl9vdXRlckNvbnRyb2wgfVxyXG4gIHB1YmxpYyBzZXQgb3V0ZXJDb250cm9sKHZhbHVlOiBGb3JtQ29udHJvbDxhbnk+IHwgQWJzdHJhY3RDb250cm9sPGFueT4pIHtcclxuICAgIHRoaXMuX291dGVyQ29udHJvbCA9IHZhbHVlIGFzIEZvcm1Db250cm9sO1xyXG5cclxuICAgIC8vIENhbmNlbGEgYSBzdWJzY3Jpw6fDo28gYW50ZXJpb3IgKHNlIGhvdXZlcikgcGFyYSBldml0YXIgbcO6bHRpcGxhcyBzdWJzY3Jpw6fDtWVzXHJcbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9uKSB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICAvLyBTdWJzY3Jpw6fDo28gYW8gb2JzZXJ2w6F2ZWwgdmFsdWVDaGFuZ2VzIHBhcmEgcmVhZ2lyIGEgbXVkYW7Dp2FzIG5vIHZhbG9yXHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9vdXRlckNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7IHRoaXMuaW5pdGlhbGl6ZVNlbGVjdGVkVmFsdWUoKSB9KTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX291dGVyQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7IHRoaXMuc3Vic2NyaWJlQ29udHJvbENoYW5nZXMoKSB9KTtcclxuICB9XHJcblxyXG4gIC8qKiAob2JyaWdhdMOzcmlvKSBMaXN0YSBkZSByZWdpc3Ryb3MgcXVlIHNlcsOjbyBleGliaWRvcyBubyBjb21ibywgZW5xdWFudG8gZWxlcyBlc3RpdmVyZW0gY2FycmVnYW5kbyBzZXLDoSBleGliaWRvIHVtIHNwaW5uZXJcclxuICAgKiBAYWxpYXMgJ2xpc3QnXHJcbiAgICogQHR5cGUge1JlY29yZENvbWJvYm94W119ICovXHJcbiAgQElucHV0KHsgYWxpYXM6ICdsaXN0JywgcmVxdWlyZWQ6IHRydWUgfSkgcHVibGljIGNvbWJvYm94TGlzdD86IFJlY29yZENvbWJvYm94W107XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIFRleHRvIGRvIHLDs3R1bG8gcXVlIHNlcsOhIGV4aWJpZG8gYWNpbWEgZG8gY29tYm8uIENhc28gbsOjbyBpbmZvcm1hZG8gbmFkYSBzZXLDoSBleGliaWRvXHJcbiAgICogQHR5cGUge3N0cmluZ30gKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbGFiZWxUZXh0Pzogc3RyaW5nO1xyXG5cclxuICAvKiogKG9wY2lvbmFsKSBEZWZpbmUgc2UgbyBjYW1wbyDDqSBvYnJpZ2F0w7NyaW8sIHZhaSBleGliaXIgbyAnKicgdmVybWVsaG8gYW8gbGFkbyBkbyBsYWJlbCAoc2UgZWxlIGVzdGl2ZXIgcHJlc2VudGUpXHJcbiAgICogISBTRVLDgSBERVBSRUNJQURPIEVNIEJSRVZFXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQGRlZmF1bHQgZmFsc2UgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbGliUmVxdWlyZWQ/OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIERlZmluZSBzZSBvIGNhbXBvIGVzdMOhIGRlc2FiaWxpdGFkby4gRGV2ZSBzZXIgdXNhZG8gcGFyYSB2YWxpZGHDp8O1ZXMgZGUgaGFiaWxpdGHDp8OjbyBkaW7Dom1pY2EgZG8gY2FtcG9cclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAZGVmYXVsdCBmYWxzZSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkID8/IGZhbHNlOyB9XHJcbiAgcHVibGljIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlID09PSB0cnVlKSB0aGlzLmlubmVyQ29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICBlbHNlIHRoaXMuaW5uZXJDb250cm9sLmVuYWJsZSgpO1xyXG5cclxuICAgIHRoaXMuc2V0SXNJbnZhbGlkKCk7XHJcbiAgfVxyXG5cclxuICAvKiogKG9wY2lvbmFsKSBQbGFjZWhvbGRlciBkbyBjYW1wbyBwcmluY2lwYWwgZG8gY29tYm9cclxuICAgKiBAYWxpYXMgJ21haW5QbGFjZWhvbGRlcidcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBkZWZhdWx0IFwiU2VsZWNpb25lIHVtYSBvcMOnw6NvLi4uXCIgKi9cclxuICBASW5wdXQoJ21haW5QbGFjZWhvbGRlcicpIHB1YmxpYyBtYWluSW5wdXRQbGFjZWhvbGRlcj86IHN0cmluZyA9IFwiU2VsZWNpb25lIHVtYSBvcMOnw6NvLi4uXCI7XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIFBsYWNlaG9sZGVyIGRvIGNhbXBvIGRlIHBlc3F1aXNhIGRlbnRybyBkbyBjb21ib1xyXG4gICAqIEBhbGlhcyAnc2VhcmNoUGxhY2Vob2xkZXInXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAZGVmYXVsdCBcIlBlc3F1aXNhLi4uXCIgKi9cclxuICBASW5wdXQoJ3NlYXJjaFBsYWNlaG9sZGVyJykgcHVibGljIHNlYXJjaElucHV0UGxhY2Vob2xkZXI/OiBzdHJpbmcgPSBcIlBlc3F1aXNhLi4uXCI7XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIERlZmluZSBvIHRlbWEgZGUgY29yIGRvIGNvbXBvbmVudGUsIGNvbW8gXCJwcmltYXJ5XCIsIFwic3VjY2Vzc1wiLCBvdSBcImRhbmdlclwiXHJcbiAgICogQGFsaWFzICd0aGVtZSdcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBkZWZhdWx0IFwicHJpbWFyeVwiXHJcbiAgKi9cclxuICBASW5wdXQoJ3RoZW1lJykgcHVibGljIGNvbG9yVGhlbWU/OiBzdHJpbmcgPSBcInByaW1hcnlcIjtcclxuXHJcbiAgLyoqIChSZWNvbWVuZGFkbykgRGVmaW5lIHVtIG5vbWUgcGFyYSBvIGNvbnRyb2xlLCB1dGlsaXphZG8gaW50ZXJuYW1lbnRlIGVtIGFsZ3VucyByZWN1cnNvcy5cclxuICAgKiBFdml0YSBhbGd1bnMgYnVncyBkZSBkZXRlY8Onw6NvLlxyXG4gICAqIEBhbGlhcyAnY29udHJvbE5hbWUnXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAqL1xyXG4gIEBJbnB1dCgnY29udHJvbE5hbWUnKSBwdWJsaWMgY29udHJvbE5hbWU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBFdmVudG8gZW1pdGlkbyBhbyByZWNhcnJlZ2FyIGEgbGlzdGEgZGUgcmVnaXN0cm9zXHJcbiAgICogQGV4YW1wbGUgQW8gc2VyIGVtaXRpZG8sIG8gY29tcG9uZW50ZSBwYWkgcG9kZSByZWZhemVyIG8gR0VUIGRhIGxpc3RhLCBwb3IgZXhlbXBsby5cclxuICAgKiBAZW1pdHMgRXZlbnRFbWl0dGVyPHN0cmluZz4gcXVlIGxldmEgbyB2YWxvciBzdHJpbmcgZGEgcGVzcXVpc2EgZmVpdGEgcGFyYSBzZXIgZW52aWFkYSBwYXJhIG8gR0VUXHJcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxzdHJpbmc+fSAqL1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25SZWxvYWRMaXN0OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuXHJcbiAgLyoqIEV2ZW50byBlbWl0aWRvIGFvIHNlbGVjaW9uYXIgdW0gcmVnaXN0cm8gZGEgbGlzdGEgZG8gY29tYm9ib3hcclxuICAgKiBAZXhhbXBsZSBBbyBzZXIgZW1pdGlkbywgbyBjb21wb25lbnRlIHBhaSBwb2RlIHJlYWxpemFyIHVtYSB2YWxpZGHDp8OjbyBjb20gbyB2YWxvciBzZWxlY2lvbmFkby5cclxuICAgKiBAZW1pdHMgRXZlbnRFbWl0dGVyPHN0cmluZ3xudW1iZXJ8bnVsbD4gcXVlIGxldmEgbyB2YWxvciBzdHJpbmcgZGEgcGVzcXVpc2EgZmVpdGEgcGFyYSBzZXIgZW52aWFkYSBwYXJhIG8gR0VUXHJcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXIgfCBudWxsPn0gKi9cclxuICBAT3V0cHV0KCkgcHVibGljIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlciB8IG51bGw+KCk7XHJcbiAgXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ21haW5JbnB1dCcpIHByaXZhdGUgX21haW5JbnB1dCE6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25NZW51JykgcHJpdmF0ZSBfZHJvcGRvd25NZW51ITogRWxlbWVudFJlZjtcclxuICAvLyAjZW5kcmVnaW9uIFBVQkxJQ1xyXG5cclxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IFBST1BFUlRJRVMgPD09PT09PT09PT1cclxuXHJcblxyXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gSU5JVElBTElaQVRJT04gPD09PT09PT09PT1cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VmFsaWRhdG9yKCk7XHJcbiAgICB0aGlzLmluaXRpYWxpemVTZWxlY3RlZFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFkanVzdERyb3Bkb3duV2lkdGgoKTtcclxuICB9XHJcblxyXG4gIC8vIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAvLyAgIGlmIChjaGFuZ2VzW1wiY29tYm9ib3hMaXN0XCJdPy5jdXJyZW50VmFsdWUpIHRoaXMuaW5pdGlhbGl6ZVNlbGVjdGVkVmFsdWUoKTtcclxuICAvLyAgIGlmIChjaGFuZ2VzW1wib3V0ZXJDb250cm9sXCJdPy5jdXJyZW50VmFsdWUpIHtcclxuICAvLyAgICAgdGhpcy5zdWJzY3JpYmVDb250cm9sQ2hhbmdlcygpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGFyZW50R3JvdXAgPSB0aGlzLl9vdXRlckNvbnRyb2wucGFyZW50IGFzIEZvcm1Hcm91cDtcclxuXHJcbiAgICBpZiAoIXRoaXMuY29udHJvbE5hbWUpIHtcclxuICAgICAgLy8gSXRlcmFuZG8gc29icmUgb3MgY29udHJvbGVzIG5vIEZvcm1Hcm91cFxyXG4gICAgICBjb25zdCBjb250cm9sRXhpc3RzID0gT2JqZWN0LnZhbHVlcyhwYXJlbnRHcm91cC5jb250cm9scykuc29tZShjb250cm9sID0+IGNvbnRyb2wgPT09IHRoaXMuX291dGVyQ29udHJvbCk7XHJcblxyXG4gICAgICBpZiAocGFyZW50R3JvdXApIHtcclxuICAgICAgICBpZiAoIWNvbnRyb2xFeGlzdHMpIGNvbnNvbGUuZXJyb3IoXCJFcnJvIG5vIDxsaWItY29tYm9ib3g+IC0gTyBGb3JtQ29udHJvbCBpbmZvcm1hZG8gbsOjbyBmb2kgZW5jb250cmFkbyBkZW50cm8gZG8gRm9ybUdyb3VwLi4uXCIpO1xyXG4gICAgICAgIGNvbnN0IHRlbXBDb250cm9sID0gT2JqZWN0LnZhbHVlcyhwYXJlbnRHcm91cC5jb250cm9scykuZmluZChjb250cm9sID0+IGNvbnRyb2wgPT09IHRoaXMuX291dGVyQ29udHJvbCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0ZW1wQ29udHJvbCEuZGlzYWJsZWQ7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkID0gdGVtcENvbnRyb2whLmludmFsaWQ7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRlbXBDb250cm9sIS5kaXJ0eTtcclxuICAgICAgICB0aGlzLnRvdWNoZWQgPSB0ZW1wQ29udHJvbCEudG91Y2hlZDtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuc2V0SXNJbnZhbGlkKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuX291dGVyQ29udHJvbC5kaXNhYmxlZDtcclxuICAgICAgICB0aGlzLmludmFsaWQgPSB0aGlzLl9vdXRlckNvbnRyb2wuaW52YWxpZDtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gdGhpcy5fb3V0ZXJDb250cm9sLmRpcnR5O1xyXG4gICAgICAgIHRoaXMudG91Y2hlZCA9IHRoaXMuX291dGVyQ29udHJvbC50b3VjaGVkO1xyXG5cclxuICAgICAgICB0aGlzLnNldElzSW52YWxpZCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgY29udHJvbCA9IHBhcmVudEdyb3VwLmdldCh0aGlzLmNvbnRyb2xOYW1lKTtcclxuXHJcbiAgICAgIGlmIChwYXJlbnRHcm91cCkge1xyXG4gICAgICAgIGlmIChjb250cm9sID09PSBudWxsKSBjb25zb2xlLmVycm9yKGBFcnJvIG5vIDxsaWItY29tYm9ib3g+IC0gTyBGb3JtQ29udHJvbCBkZSBub21lIFwiJHt0aGlzLmNvbnRyb2xOYW1lfVwiIGluZm9ybWFkbyBuw6NvIGZvaSBlbmNvbnRyYWRvIGRlbnRybyBkbyBGb3JtR3JvdXAuYCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRlbXBDb250cm9sID0gcGFyZW50R3JvdXAuY29udHJvbHNbdGhpcy5jb250cm9sTmFtZSBhcyBzdHJpbmddO1xyXG5cclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gdGVtcENvbnRyb2whLmRpc2FibGVkO1xyXG4gICAgICAgIHRoaXMuaW52YWxpZCA9IHRlbXBDb250cm9sIS5pbnZhbGlkO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSB0ZW1wQ29udHJvbCEuZGlydHk7XHJcbiAgICAgICAgdGhpcy50b3VjaGVkID0gdGVtcENvbnRyb2whLnRvdWNoZWQ7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnNldElzSW52YWxpZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLl9vdXRlckNvbnRyb2wuZGlzYWJsZWQ7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkID0gdGhpcy5fb3V0ZXJDb250cm9sLmludmFsaWQ7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRoaXMuX291dGVyQ29udHJvbC5kaXJ0eTtcclxuICAgICAgICB0aGlzLnRvdWNoZWQgPSB0aGlzLl9vdXRlckNvbnRyb2wudG91Y2hlZDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRJc0ludmFsaWQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIC8vIE8gcXVlIGZhemVyIHF1YW5kbyBvIGV2ZW50byBkZSByZWRpbWVuc2lvbmFtZW50byBvY29ycmVyXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXHJcbiAgb25SZXNpemUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7IHRoaXMuYWRqdXN0RHJvcGRvd25XaWR0aCgpIH1cclxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IElOSVRJQUxJWkFUSU9OIDw9PT09PT09PT09XHJcblxyXG5cclxuICAvLyAjcmVnaW9uID09PT09PT09PT0+IFVUSUxTIDw9PT09PT09PT09XHJcbiAgcHVibGljIHNldFZhbHVlKGl0ZW06IFJlY29yZENvbWJvYm94KTogdm9pZCB7XHJcbiAgICB0aGlzLnRleHRvUGVzcXVpc2EgPSBcIlwiO1xyXG4gICAgdGhpcy5pbm5lckNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgIHRoaXMuX291dGVyQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgXHJcbiAgICB0aGlzLl9vdXRlckNvbnRyb2wuc2V0VmFsdWUoaXRlbS5JRCk7XHJcbiAgICB0aGlzLmlubmVyQ29udHJvbC5zZXRWYWx1ZShpdGVtLkxBQkVMKTtcclxuXHJcbiAgICB0aGlzLmFyaWFFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXRJc0ludmFsaWQoKTtcclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoaXRlbS5JRCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXJWYWx1ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudGV4dG9QZXNxdWlzYSA9IFwiXCI7XHJcbiAgICB0aGlzLmlubmVyQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgdGhpcy5fb3V0ZXJDb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcblxyXG4gICAgdGhpcy5fb3V0ZXJDb250cm9sLnNldFZhbHVlKG51bGwpO1xyXG4gICAgdGhpcy5pbm5lckNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcblxyXG4gICAgdGhpcy5hcmlhRXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuc2V0SXNJbnZhbGlkKCk7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplU2VsZWN0ZWRWYWx1ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5uZXJDb250cm9sLnNldFZhbHVlKG51bGwpOyAvLyBMaW1wYSBvIGNhbXBvIGFudGVzIGRlIHF1YWxxdWVyIGNvaXNhXHJcblxyXG4gICAgaWYgKCF0aGlzLmNvbWJvYm94TGlzdCB8fCAodGhpcy5fb3V0ZXJDb250cm9sLnZhbHVlID09IG51bGwgJiYgdGhpcy5fb3V0ZXJDb250cm9sLnZhbHVlID09ICcnKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemVkVmFsdWUgPSB0aGlzLmNvbWJvYm94TGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5JRCA9PSB0aGlzLl9vdXRlckNvbnRyb2wudmFsdWUpXHJcbiAgICBpZiAoaW5pdGlhbGl6ZWRWYWx1ZSkgdGhpcy5pbm5lckNvbnRyb2wuc2V0VmFsdWUoaW5pdGlhbGl6ZWRWYWx1ZS5MQUJFTCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkanVzdERyb3Bkb3duV2lkdGgoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbWFpbklucHV0ICYmIHRoaXMuX2Ryb3Bkb3duTWVudSkge1xyXG4gICAgICBjb25zdCBpbnB1dFdpZHRoID0gdGhpcy5fbWFpbklucHV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgIHRoaXMuX2Ryb3Bkb3duTWVudS5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7aW5wdXRXaWR0aH1weGA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogU2VydmUgcGFyYSBhdHVhbGl6YXIgbyBzdGF0dXMgZG8gY29udHJvbCBlIG8gZGVzYWJpbGl0YXIgY2FzbyBzZWphIGZlaXRvIG5vIGNvbXBvbmVudGUgcGFpLFxyXG4gICAqIHNlbSBhIG5lY2Vzc2lkYWRlIGRlIHVtYSBvdXRyYSBwcm9wcmllZGFkZSBlc3BlY8OtZmljYSBwYXJhIGlzdG8uICovXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVDb250cm9sQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuX291dGVyQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShzdGF0dXMgPT4ge1xyXG4gICAgICBpZiAoc3RhdHVzID09PSBcIkRJU0FCTEVEXCIpIHRoaXMuaW5uZXJDb250cm9sLmRpc2FibGUoKTtcclxuICAgICAgZWxzZSB0aGlzLmlubmVyQ29udHJvbC5lbmFibGUoKTtcclxuXHJcbiAgICAgIHRoaXMuc2V0SXNJbnZhbGlkKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNldFZhbGlkYXRvcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9vdXRlckNvbnRyb2wuaGFzVmFsaWRhdG9yKFZhbGlkYXRvcnMucmVxdWlyZWQpKSB7XHJcbiAgICAgIHRoaXMuaW5uZXJDb250cm9sLmFkZFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgIHRoaXMuaXNSZXF1aXJlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5pbm5lckNvbnRyb2wucmVtb3ZlVmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgICAgdGhpcy5pc1JlcXVpcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldElzSW52YWxpZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW52YWxpZENvbnRyb2wgPSB0aGlzLmludmFsaWQgJiYgKHRoaXMudG91Y2hlZCAmJiB0aGlzLmRpcnR5KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWxvYWRMaXN0KCk6IHZvaWQgeyB0aGlzLm9uUmVsb2FkTGlzdC5lbWl0KHRoaXMudGV4dG9QZXNxdWlzYSkgfVxyXG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gVVRJTFMgPD09PT09PT09PT1cclxuXHJcbn1cclxuIiwiPGxhYmVsICpuZ0lmPVwibGFiZWxUZXh0ICYmIGxhYmVsVGV4dCAhPSAnJ1wiIFtsaWJSZXF1aXJlZF09XCJpc1JlcXVpcmVkXCIgY2xhc3M9XCJmb3JtLWxhYmVsIGZ3LWJvbGRcIj57eyBsYWJlbFRleHQgfX08L2xhYmVsPlxyXG48ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgZHJvcGRvd24gZmxleC1maWxsIGdsYi1tYXgtaGVpZ2h0LTM1MHB4XCI+XHJcblxyXG4gICA8IS0tIEVzdGUgZWxlbWVudG8gbmctY29udGVudCBjb20gbyBhdHJpYnV0byBbYnRuTGVmdF0gcGVybWl0ZSBxdWUgbyB1c3XDoXJpbyBmaW5hbCBmb3JuZcOnYSBjb250ZcO6ZG8gcGVyc29uYWxpemFkbyBwYXJhIHNlciBleGliaWRvIG5vIGxhZG8gZXNxdWVyZG8gZG8gY29tYm9ib3ggZGUgcGVzcXVpc2EuXHJcbiAgIEFvIHVzYXIgbyBhdHJpYnV0byBbYnRuTGVmdF0sIG8gdXN1w6FyaW8gcG9kZSBmYWNpbG1lbnRlIGFkaWNpb25hciBib3TDtWVzIG91IG91dHJvcyBlbGVtZW50b3MgcGFyYSBtZWxob3JhciBhIGZ1bmNpb25hbGlkYWRlIG91IGFwYXLDqm5jaWEgZG8gY29tYm9ib3ggZGUgcGVzcXVpc2EuIC0tPlxyXG4gICA8bmctY29udGVudCBzZWxlY3Q9XCJbYnRuTGVmdF1cIj48L25nLWNvbnRlbnQ+XHJcblxyXG4gICA8aW5wdXQgICNtYWluSW5wdXQgY2xhc3M9XCJmb3JtLXNlbGVjdCB0ZXh0LXN0YXJ0IHJvdW5kZWQtZW5kXCIgdHlwZT1cInRleHRcIiBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCIgW3BsYWNlaG9sZGVyXT1cIm1haW5JbnB1dFBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImlubmVyQ29udHJvbFwiIGRhdGEtYnMtYXV0by1jbG9zZT1cIm91dHNpZGVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiByZWFkb25seSBbY2xhc3MuaXMtaW52YWxpZF09XCJpbnZhbGlkQ29udHJvbFwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJhcmlhRXhwYW5kZWQgPSAhYXJpYUV4cGFuZGVkOyBzZWFyY2hJbnB1dC5mb2N1cygpXCIgKGZvY3VzKT1cInNlYXJjaElucHV0LmZvY3VzKClcIj5cclxuXHJcbiAgIDx1bCAgI2Ryb3Bkb3duTWVudSAgY2xhc3M9XCJkcm9wZG93bi1tZW51IHAtMiBnbGItbWF4LWhlaWdodC0zNTBweCBvdmVyZmxvdy15LXNjcm9sbCB6LWluZGV4LTEwMjBcIiBbY2xhc3Muc2hvd109XCJhcmlhRXhwYW5kZWRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTJcIj5cclxuICAgICAgICAgPGlucHV0ICNzZWFyY2hJbnB1dCAoaW5wdXQpPVwidGV4dG9QZXNxdWlzYSA9IHNlYXJjaElucHV0LnZhbHVlXCIgdHlwZT1cInRleHRcIiBpZD1cInNlYXJjaElucHV0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZ2xiLWlucHV0LW5vLWdsb3dcIiBbcGxhY2Vob2xkZXJdPVwic2VhcmNoSW5wdXRQbGFjZWhvbGRlclwiIChrZXl1cC5lbnRlcik9XCJyZWxvYWRMaXN0KClcIj5cclxuICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4te3tjb2xvclRoZW1lfX1cIiAoY2xpY2spPVwicmVsb2FkTGlzdCgpXCI+IDxhcHAtc3ZnLXN0b3JhZ2Ugc3ZnTmFtZT1cImx1cGFcIiBzdmdTaXplPVwibWVkaXVtLXNtYWxsXCIgLz4gPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgQGlmIChjb21ib2JveExpc3QpIHtcclxuICAgICAgICAgPGxpICpuZ0lmPVwiaW5uZXJDb250cm9sLnZhbHVlICE9ICcnICYmIGlubmVyQ29udHJvbC52YWx1ZSAhPSBudWxsXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgKGNsaWNrKT1cImNsZWFyVmFsdWUoKVwiPiA8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5MaW1wYXIgb3DDp8OjbyBzZWxlY2lvbmFkYTwvc3Bhbj4gPC9saT5cclxuICAgICAgICAgQGZvciAoaXRlbSBvZiBjb21ib2JveExpc3QgfCB0ZXh0RmlsdGVyOnRleHRvUGVzcXVpc2E7IHRyYWNrICRpbmRleCkge1xyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgKGNsaWNrKT1cInNldFZhbHVlKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXRlbS5BZGRpdGlvbmFsU3RyaW5nUHJvcGVydHkxIHx8IGl0ZW0uQWRkaXRpb25hbFN0cmluZ1Byb3BlcnR5MSAhPSAnJ1wiIGNsYXNzPVwiZ2xiLWZzLTEyIGZ3LWJvbGQgZC1pbmxpbmUtYmxvY2sgdy0xMjVcIj57eyBpdGVtLkFkZGl0aW9uYWxTdHJpbmdQcm9wZXJ0eTEgfX08L3NwYW4+IHt7IGl0ZW0uTEFCRUwgfX1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgfVxyXG4gICAgICAgICBAZW1wdHkgeyA8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGZzdC1pdGFsaWNcIj5OZW5odW0gcmVnaXN0cm8gZW5jb250cmFkbyBjb20gZXN0YSBwZXNxdWlzYS4uLjwvbGk+IH1cclxuICAgICAgfVxyXG4gICAgICBAZWxzZSB7IDxsaSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gdGV4dC1jZW50ZXJcIj4gPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPjxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+Q2FycmVnYW5kbyBkYWRvcy4uLjwvc3Bhbj48L2Rpdj4gPC9saT4gfVxyXG4gICA8L3VsPlxyXG5cclxuICAgPCEtLSBFc3RlIGVsZW1lbnRvIG5nLWNvbnRlbnQgY29tIG8gYXRyaWJ1dG8gW2J0blJpZ2h0XSBwZXJtaXRlIHF1ZSBvIHVzdcOhcmlvIGZpbmFsIGZvcm5lw6dhIGNvbnRlw7pkbyBwZXJzb25hbGl6YWRvIHBhcmEgc2VyIGV4aWJpZG8gbm8gbGFkbyBkaXJlaXRvIGRvIGNvbWJvYm94IGRlIHBlc3F1aXNhLlxyXG4gICBBbyB1c2FyIG8gYXRyaWJ1dG8gW2J0blJpZ2h0XSwgbyB1c3XDoXJpbyBwb2RlIGZhY2lsbWVudGUgYWRpY2lvbmFyIGJvdMO1ZXMgb3Ugb3V0cm9zIGVsZW1lbnRvcyBwYXJhIG1lbGhvcmFyIGEgZnVuY2lvbmFsaWRhZGUgb3UgYXBhcsOqbmNpYSBkbyBjb21ib2JveCBkZSBwZXNxdWlzYS4gLS0+XHJcbiAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltidG5SaWdodF1cIj48L25nLWNvbnRlbnQ+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwhLS0gI3JlZ2lvbiBNRU5TQUdFTSBERSBFUlJPIERFIFZBTElEQcOHw4NPIC0tPlxyXG48YXBwLWZpZWxkLWVycm9yLW1lc3NhZ2UgKm5nSWY9XCJpbnZhbGlkQ29udHJvbFwiIFtjb250cm9sXT1cImlubmVyQ29udHJvbFwiIC8+XHJcbjwhLS0gI2VuZHJlZ2lvbiBNRU5TQUdFTSBERSBFUlJPIERFIFZBTElEQcOHw4NPIC0tPlxyXG4iXX0=
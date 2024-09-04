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
        this._subscription = this._outerControl.valueChanges.subscribe(value => { this.updateSelectedValue(value); });
        this._subscription = this._outerControl.statusChanges.subscribe(status => { this.setControlStatus(status); });
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
        //this.setControlStatus();
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
        this.adjustDropdownWidth();
        this.setValidator();
        this.updateSelectedValue();
    }
    ngAfterViewInit() {
        this.adjustDropdownWidth();
    }
    ngOnChanges(changes) {
        if (changes["comboboxList"]?.currentValue)
            this.updateSelectedValue();
        if (changes["outerControl"]?.currentValue)
            this.updateSelectedValue(changes["outerControl"].currentValue.value);
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
        this.setControlStatus(this.innerControl.status);
        this.onChange.emit(item.ID);
    }
    clearValue() {
        this.textoPesquisa = "";
        this.innerControl.markAsDirty();
        this._outerControl.markAsDirty();
        this._outerControl.setValue(null);
        this.innerControl.setValue(null);
        this.ariaExpanded = false;
        this.setControlStatus(this.innerControl.status);
        this.onChange.emit(null);
    }
    updateSelectedValue(value) {
        this.innerControl.setValue(null); // Limpa o campo antes de qualquer coisa
        const selectedValue = value ?? this._outerControl.value;
        if (!this.comboboxList || (selectedValue === null && selectedValue === ''))
            return;
        const initializedValue = this.comboboxList.find(item => item.ID === selectedValue);
        if (initializedValue)
            this.innerControl.setValue(initializedValue.LABEL);
        // this.setControlStatus(this._outerControl.status);
    }
    adjustDropdownWidth() {
        if (this._mainInput && this._dropdownMenu) {
            const inputWidth = this._mainInput.nativeElement.offsetWidth;
            this._dropdownMenu.nativeElement.style.width = `${inputWidth}px`;
        }
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
    setControlStatus(formStatus) {
        switch (formStatus) {
            case 'VALID':
                this.invalidControl = false;
                this.innerControl.enable();
                break;
            case 'INVALID':
                this.invalidControl = true;
                this.innerControl.enable();
                break;
            case 'PENDING':
                this.invalidControl = false;
                this.innerControl.enable();
                break;
            case 'DISABLED':
                this.invalidControl = false;
                this.innerControl.disable();
                break;
        }
    }
    reloadList() { this.onReloadList.emit(this.textoPesquisa); }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LibComboboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: LibComboboxComponent, selector: "lib-combobox", inputs: { outerControl: ["control", "outerControl"], comboboxList: ["list", "comboboxList"], labelText: "labelText", libRequired: "libRequired", disabled: "disabled", mainInputPlaceholder: ["mainPlaceholder", "mainInputPlaceholder"], searchInputPlaceholder: ["searchPlaceholder", "searchInputPlaceholder"], colorTheme: ["theme", "colorTheme"] }, outputs: { onReloadList: "onReloadList", onChange: "onChange" }, host: { listeners: { "window:resize": "onResize($event)" } }, viewQueries: [{ propertyName: "_mainInput", first: true, predicate: ["mainInput"], descendants: true }, { propertyName: "_dropdownMenu", first: true, predicate: ["dropdownMenu"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<label *ngIf=\"labelText && labelText != ''\" [libRequired]=\"isRequired\" class=\"form-label fw-bold\">{{ labelText }}</label>\r\n<div class=\"input-group dropdown flex-fill glb-max-height-350px\">\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnLeft] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado esquerdo do combobox de pesquisa.\r\n   Ao usar o atributo [btnLeft], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnLeft]\"></ng-content>\r\n\r\n   <input  #mainInput class=\"form-select text-start rounded-end\" type=\"text\" data-bs-toggle=\"dropdown\" [placeholder]=\"mainInputPlaceholder\"\r\n            [formControl]=\"innerControl\" data-bs-auto-close=\"outside\" aria-expanded=\"false\" readonly [class.is-invalid]=\"invalidControl\"\r\n            (click)=\"ariaExpanded = !ariaExpanded; searchInput.focus()\" (focus)=\"searchInput.focus()\">\r\n\r\n   <ul  #dropdownMenu  class=\"dropdown-menu p-2 glb-max-height-350px overflow-y-scroll z-index-1020\" [class.show]=\"ariaExpanded\">\r\n      <div class=\"input-group mb-2\">\r\n         <input #searchInput (input)=\"textoPesquisa = searchInput.value\" type=\"text\" id=\"searchInput\" class=\"form-control glb-input-no-glow\" [placeholder]=\"searchInputPlaceholder\" (keyup.enter)=\"reloadList()\">\r\n         <button class=\"btn btn-{{colorTheme}}\" (click)=\"reloadList()\"> <app-svg-storage svgName=\"lupa\" svgSize=\"medium-small\" /> </button>\r\n      </div>\r\n\r\n      @if (comboboxList) {\r\n         <li *ngIf=\"innerControl.value != '' && innerControl.value != null\" class=\"dropdown-item\" (click)=\"clearValue()\"> <span class=\"fw-bold\">Limpar op\u00E7\u00E3o selecionada</span> </li>\r\n         @for (item of comboboxList | textFilter:textoPesquisa; track $index) {\r\n            <li class=\"dropdown-item\" (click)=\"setValue(item)\">\r\n               <span *ngIf=\"item.AdditionalStringProperty1 || item.AdditionalStringProperty1 != ''\" class=\"glb-fs-12 fw-bold d-inline-block w-125\">{{ item.AdditionalStringProperty1 }}</span> {{ item.LABEL }}\r\n            </li>\r\n         }\r\n         @empty { <li class=\"dropdown-item fst-italic\">Nenhum registro encontrado com esta pesquisa...</li> }\r\n      }\r\n      @else { <li class=\"dropdown-item text-center\"> <div class=\"spinner-border\" role=\"status\"><span class=\"visually-hidden\">Carregando dados...</span></div> </li> }\r\n   </ul>\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnRight] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado direito do combobox de pesquisa.\r\n   Ao usar o atributo [btnRight], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnRight]\"></ng-content>\r\n\r\n</div>\r\n\r\n<!-- #region MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n<app-field-error-message *ngIf=\"invalidControl\" customMessage=\"Este campo \u00E9 obrigat\u00F3rio.\" />\r\n<!-- #endregion MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n", styles: [".glb-max-height-350px{max-height:350px!important}.form-label{font-size:16px!important}.z-index-1020{z-index:1020!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.FieldErrorMessageComponent, selector: "app-field-error-message", inputs: ["customMessage", "control", "label"] }, { kind: "component", type: i4.SvgStorageComponent, selector: "app-svg-storage", inputs: ["svgName", "svgColor", "svgFill", "svgSize", "svgStrokeWidth"] }, { kind: "directive", type: i5.RequiredDirective, selector: "label[libRequired], span[libRequired], p[libRequired]", inputs: ["libRequired", "sisID"] }, { kind: "pipe", type: i6.TextFilterPipe, name: "textFilter" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LibComboboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-combobox', template: "<label *ngIf=\"labelText && labelText != ''\" [libRequired]=\"isRequired\" class=\"form-label fw-bold\">{{ labelText }}</label>\r\n<div class=\"input-group dropdown flex-fill glb-max-height-350px\">\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnLeft] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado esquerdo do combobox de pesquisa.\r\n   Ao usar o atributo [btnLeft], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnLeft]\"></ng-content>\r\n\r\n   <input  #mainInput class=\"form-select text-start rounded-end\" type=\"text\" data-bs-toggle=\"dropdown\" [placeholder]=\"mainInputPlaceholder\"\r\n            [formControl]=\"innerControl\" data-bs-auto-close=\"outside\" aria-expanded=\"false\" readonly [class.is-invalid]=\"invalidControl\"\r\n            (click)=\"ariaExpanded = !ariaExpanded; searchInput.focus()\" (focus)=\"searchInput.focus()\">\r\n\r\n   <ul  #dropdownMenu  class=\"dropdown-menu p-2 glb-max-height-350px overflow-y-scroll z-index-1020\" [class.show]=\"ariaExpanded\">\r\n      <div class=\"input-group mb-2\">\r\n         <input #searchInput (input)=\"textoPesquisa = searchInput.value\" type=\"text\" id=\"searchInput\" class=\"form-control glb-input-no-glow\" [placeholder]=\"searchInputPlaceholder\" (keyup.enter)=\"reloadList()\">\r\n         <button class=\"btn btn-{{colorTheme}}\" (click)=\"reloadList()\"> <app-svg-storage svgName=\"lupa\" svgSize=\"medium-small\" /> </button>\r\n      </div>\r\n\r\n      @if (comboboxList) {\r\n         <li *ngIf=\"innerControl.value != '' && innerControl.value != null\" class=\"dropdown-item\" (click)=\"clearValue()\"> <span class=\"fw-bold\">Limpar op\u00E7\u00E3o selecionada</span> </li>\r\n         @for (item of comboboxList | textFilter:textoPesquisa; track $index) {\r\n            <li class=\"dropdown-item\" (click)=\"setValue(item)\">\r\n               <span *ngIf=\"item.AdditionalStringProperty1 || item.AdditionalStringProperty1 != ''\" class=\"glb-fs-12 fw-bold d-inline-block w-125\">{{ item.AdditionalStringProperty1 }}</span> {{ item.LABEL }}\r\n            </li>\r\n         }\r\n         @empty { <li class=\"dropdown-item fst-italic\">Nenhum registro encontrado com esta pesquisa...</li> }\r\n      }\r\n      @else { <li class=\"dropdown-item text-center\"> <div class=\"spinner-border\" role=\"status\"><span class=\"visually-hidden\">Carregando dados...</span></div> </li> }\r\n   </ul>\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnRight] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado direito do combobox de pesquisa.\r\n   Ao usar o atributo [btnRight], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnRight]\"></ng-content>\r\n\r\n</div>\r\n\r\n<!-- #region MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n<app-field-error-message *ngIf=\"invalidControl\" customMessage=\"Este campo \u00E9 obrigat\u00F3rio.\" />\r\n<!-- #endregion MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n", styles: [".glb-max-height-350px{max-height:350px!important}.form-label{font-size:16px!important}.z-index-1020{z-index:1020!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWNvbWJvYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvbGliLWNvbWJvYm94L2xpYi1jb21ib2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2xpYi1jb21ib2JveC9saWItY29tYm9ib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdKLE9BQU8sRUFBbUIsV0FBVyxFQUFxQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7OztBQUlwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJHO0FBTUgsTUFBTSxPQUFPLG9CQUFvQjtJQU8vQixJQUFjLFlBQVksS0FBYyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLElBQWMsWUFBWSxDQUFDLEtBQWMsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFpQjFFLHFCQUFxQjtJQUVyQixpQkFBaUI7SUFFakI7O3lEQUVxRDtJQUNyRCxJQUNXLFlBQVksS0FBdUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBLENBQUMsQ0FBQztJQUN6RSxJQUFXLFlBQVksQ0FBQyxLQUE4QztRQUNwRSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQW9CLENBQUM7UUFFMUMsOEVBQThFO1FBQzlFLElBQUksSUFBSSxDQUFDLGFBQWE7WUFBRSxJQUFJLENBQUMsYUFBYSxD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QixLQUFLO2dCQU1VLFdBQVc7c0JBQTFCLEtBQUs7Z0JBTUssUUFBUTtzQkFEbEIsS0FBSztnQkFhMkIsb0JBQW9CO3NCQUFwRCxLQUFLO3VCQUFDLGlCQUFpQjtnQkFNVyxzQkFBc0I7c0JBQXhELEtBQUs7dUJBQUMsbUJBQW1CO2dCQU9ILFVBQVU7c0JBQWhDLEtBQUs7dUJBQUMsT0FBTztnQkFNRyxZQUFZO3NCQUE1QixNQUFNO2dCQU9VLFFBQVE7c0JBQXhCLE1BQU07Z0JBR3lCLFVBQVU7c0JBQXpDLFNBQVM7dUJBQUMsV0FBVztnQkFDYSxhQUFhO3NCQUEvQyxTQUFTO3VCQUFDLGNBQWM7Z0JBK0J6QixRQUFRO3NCQURQLFlBQVk7dUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sLCBGb3JtQ29udHJvbFN0YXR1cywgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUmVjb3JkQ29tYm9ib3ggfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tYm9ib3gvcmVjb3JkLWNvbWJvYm94JztcclxuXHJcbi8qKlxyXG4gKiBAY29tcG9uZW50IExpYkNvbWJvYm94Q29tcG9uZW50XHJcbiAqIEBzZWxlY3RvciBsaWItY29tYm9ib3hcclxuICogXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBPIGNvbXBvbmVudGUgTGliQ29tYm9ib3hDb21wb25lbnQgw6kgcHJvamV0YWRvIHBhcmEgZm9ybmVjZXIgYW9zIHVzdcOhcmlvcyB1bWEgaW50ZXJmYWNlIHBhcmEgcGVzcXVpc2FyIGUgc2VsZWNpb25hciBpdGVucyBkZSB1bWEgbGlzdGEuXHJcbiAqIEVsZSBzdXBvcnRhIGEgZmlsdHJhZ2VtIGRlIGl0ZW5zIGNvbSBiYXNlIG5hIGVudHJhZGEgZG8gdXN1w6FyaW8sIHBlcm1pdGluZG8gdW1hIHNlbGXDp8OjbyBtYWlzIGbDoWNpbCBlbSBsaXN0YXMgZXh0ZW5zYXMuXHJcbiAqIFxyXG4gKiAjIyBGdW5jaW9uYWxpZGFkZXM6XHJcbiAqIC0gUGVzcXVpc2EgZSBmaWx0cmFnZW0gZGUgaXRlbnMgbmEgbGlzdGEgZG8gY29tYm9ib3guXHJcbiAqIC0gU2VsZcOnw6NvIGRlIGl0ZW5zIGNvbSBmZWVkYmFjayB2aXN1YWwuXHJcbiAqIC0gRW1pc3PDo28gZGUgZXZlbnRvcyBwZXJzb25hbGl6YWRvcyBwYXJhIGludGVyYcOnw7VlcyBkbyB1c3XDoXJpbywgY29tbyByZWNhcnJlZ2FyIGEgbGlzdGEgb3Ugc2VsZWNpb25hciB1bSBpdGVtLlxyXG4gKiAtIEFqdXN0ZSBkaW7Dom1pY28gZGEgbGFyZ3VyYSBkbyBkcm9wZG93biBwYXJhIGNvcnJlc3BvbmRlciBhbyBpbnB1dCBwcmluY2lwYWwuXHJcbiAqIC0gSW5pY2lhbGl6YcOnw6NvIGRlIHVtIHZhbG9yIHNlbGVjaW9uYWRvLCBzZSBmb3JuZWNpZG8uXHJcbiAqIFxyXG4gKiAjIyBJbnB1dHM6XHJcbiAqIC0gYG91dGVyQ29udHJvbGAgKEZvcm1Db250cm9sIHwgQWJzdHJhY3RDb250cm9sKTogQ29udHJvbCBwYXJhIHNlbGXDp8OjbyBkb3MgdmFsb3JlcywgYXR1YWxpemFyw6EgYXV0b21hdGljYW1lbnRlIG8gY29udHJvbCBkbyBjb21wb25lbnRlIHBhaSB0YW1iw6ltXHJcbiAqIC0gYGNvbWJvYm94TGlzdGAgKFJlY29yZENvbWJvYm94W10pOiBMaXN0YSBkZSByZWdpc3Ryb3MgcXVlIHNlcsOjbyBleGliaWRvcyBubyBjb21ibywgZW5xdWFudG8gZWxlcyBlc3RpdmVyZW0gY2FycmVnYW5kbyBzZXLDoSBleGliaWRvIHVtIHNwaW5uZXJcclxuICogLSBgbGFiZWxUZXh0YCAoc3RyaW5nKTogVGV4dG8gZG8gcsOzdHVsbyBxdWUgc2Vyw6EgZXhpYmlkbyBhY2ltYSBkbyBjb21iby4gQ2FzbyBuw6NvIGluZm9ybWFkbyBuYWRhIHNlcsOhIGV4aWJpZG9cclxuICogLSBgZGlzYWJsZWRgIChib29sZWFuKTogRGVmaW5lIHNlIG8gY2FtcG8gZXN0w6EgZGVzYWJpbGl0YWRvLiBEZXZlIHNlciB1c2FkbyBwYXJhIHZhbGlkYcOnw7VlcyBkZSBoYWJpbGl0YcOnw6NvIGRpbsOibWljYSBkbyBjYW1wb1xyXG4gKiAtIGBsaWJSZXF1aXJlZGAgKGJvb2xlYW4pOiBEZWZpbmUgc2UgbyBjYW1wbyDDqSBvYnJpZ2F0w7NyaW8sIHZhaSBleGliaXIgbyAnKicgdmVybWVsaG8gYW8gbGFkbyBkbyBsYWJlbCAoc2UgZWxlIGVzdGl2ZXIgcHJlc2VudGUpXHJcbiAqIC0gYG1haW5JbnB1dFBsYWNlaG9sZGVyYCAoc3RyaW5nKTogUGxhY2Vob2xkZXIgZG8gY2FtcG8gcHJpbmNpcGFsIGRvIGNvbWJvXHJcbiAqIC0gYHNlYXJjaElucHV0UGxhY2Vob2xkZXJgIChzdHJpbmcpOiBQbGFjZWhvbGRlciBkbyBjYW1wbyBkZSBwZXNxdWlzYSBkZW50cm8gZG8gY29tYm9cclxuICogLSBgY29sb3JUaGVtZWAgKFwicHJpbWFyeVwiIHwgXCJzZWNvbmRhcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJkYW5nZXJcIiB8IFwid2FybmluZ1wiIHwgXCJpbmZvXCIgfCBcImxpZ2h0XCIgfCBcImRhcmtcIik6IERlZmluZSBvIHRlbWEgZGUgY29yIGRvIGNvbXBvbmVudGUsIGNvbW8gXCJwcmltYXJ5XCIsIFwic3VjY2Vzc1wiLCBvdSBcImRhbmdlclwiXHJcbiAqIFxyXG4gKiAjIyBPdXRwdXRzOlxyXG4gKiAtIGBvblJlbG9hZExpc3RgIChFdmVudEVtaXR0ZXI8c3RyaW5nPik6IEV2ZW50byBlbWl0aWRvIHF1YW5kbyBhIGxpc3RhIHByZWNpc2Egc2VyIHJlY2FycmVnYWRhLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItY29tYm9ib3gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9saWItY29tYm9ib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9saWItY29tYm9ib3guY29tcG9uZW50LnNjc3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJDb21ib2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgLy8gI3JlZ2lvbiA9PT09PT09PT09PiBQUk9QRVJUSUVTIDw9PT09PT09PT09XHJcblxyXG4gIC8vICNyZWdpb24gUFJPVEVDVEVEXHJcbiAgcHJvdGVjdGVkIHRleHRvUGVzcXVpc2E6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgYXJpYUV4cGFuZGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fYXJpYUV4cGFuZGVkOyB9XHJcbiAgcHJvdGVjdGVkIHNldCBhcmlhRXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fYXJpYUV4cGFuZGVkID0gdmFsdWU7IH1cclxuXHJcbiAgcHJvdGVjdGVkIGlubmVyQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2w8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4obnVsbCk7XHJcbiAgcHJvdGVjdGVkIGludmFsaWRDb250cm9sOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIGlzUmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIGludmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQgZGlydHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQgdG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vICNlbmRyZWdpb24gUFJPVEVDVEVEXHJcblxyXG4gIC8vICNyZWdpb24gUFJJVkFURVxyXG4gIHByaXZhdGUgX2Rpc2FibGVkPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2FyaWFFeHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBwcml2YXRlIF9vdXRlckNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sPHN0cmluZyB8IG51bWJlciB8IG51bGw+KG51bGwpO1xyXG4gIC8vICNlbmRyZWdpb24gUFJJVkFURVxyXG5cclxuICAvLyAjcmVnaW9uIFBVQkxJQ1xyXG5cclxuICAvKiogKG9icmlnYXTDs3JpbykgQ29udHJvbCBwYXJhIHNlbGXDp8OjbyBkb3MgdmFsb3JlcywgYXR1YWxpemFyw6EgYXV0b21hdGljYW1lbnRlIG8gY29udHJvbCBkbyBjb21wb25lbnRlIHBhaSB0YW1iw6ltXHJcbiAgICogQGFsaWFzICdjb250cm9sJ1xyXG4gICAqIEB0eXBlIHtGb3JtQ29udHJvbDxhbnk+IHwgQWJzdHJhY3RDb250cm9sPGFueT59ICovXHJcbiAgQElucHV0KHsgYWxpYXM6ICdjb250cm9sJywgcmVxdWlyZWQ6IHRydWUgfSlcclxuICBwdWJsaWMgZ2V0IG91dGVyQ29udHJvbCgpOiBGb3JtQ29udHJvbDxhbnk+IHsgcmV0dXJuIHRoaXMuX291dGVyQ29udHJvbCB9XHJcbiAgcHVibGljIHNldCBvdXRlckNvbnRyb2wodmFsdWU6IEZvcm1Db250cm9sPGFueT4gfCBBYnN0cmFjdENvbnRyb2w8YW55Pikge1xyXG4gICAgdGhpcy5fb3V0ZXJDb250cm9sID0gdmFsdWUgYXMgRm9ybUNvbnRyb2w7XHJcblxyXG4gICAgLy8gQ2FuY2VsYSBhIHN1YnNjcmnDp8OjbyBhbnRlcmlvciAoc2UgaG91dmVyKSBwYXJhIGV2aXRhciBtw7psdGlwbGFzIHN1YnNjcmnDp8O1ZXNcclxuICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb24pIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cclxuICAgIC8vIFN1YnNjcmnDp8OjbyBhbyBvYnNlcnbDoXZlbCB2YWx1ZUNoYW5nZXMgcGFyYSByZWFnaXIgYSBtdWRhbsOnYXMgbm8gdmFsb3JcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX291dGVyQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHsgdGhpcy51cGRhdGVTZWxlY3RlZFZhbHVlKHZhbHVlKSB9KTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX291dGVyQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShzdGF0dXMgPT4geyB0aGlzLnNldENvbnRyb2xTdGF0dXMoc3RhdHVzKSB9KTtcclxuICB9XHJcblxyXG4gIC8qKiAob2JyaWdhdMOzcmlvKSBMaXN0YSBkZSByZWdpc3Ryb3MgcXVlIHNlcsOjbyBleGliaWRvcyBubyBjb21ibywgZW5xdWFudG8gZWxlcyBlc3RpdmVyZW0gY2FycmVnYW5kbyBzZXLDoSBleGliaWRvIHVtIHNwaW5uZXJcclxuICAgKiBAYWxpYXMgJ2xpc3QnXHJcbiAgICogQHR5cGUge1JlY29yZENvbWJvYm94W119ICovXHJcbiAgQElucHV0KHsgYWxpYXM6ICdsaXN0JywgcmVxdWlyZWQ6IHRydWUgfSkgcHVibGljIGNvbWJvYm94TGlzdD86IFJlY29yZENvbWJvYm94W107XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIFRleHRvIGRvIHLDs3R1bG8gcXVlIHNlcsOhIGV4aWJpZG8gYWNpbWEgZG8gY29tYm8uIENhc28gbsOjbyBpbmZvcm1hZG8gbmFkYSBzZXLDoSBleGliaWRvXHJcbiAgICogQHR5cGUge3N0cmluZ30gKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbGFiZWxUZXh0Pzogc3RyaW5nO1xyXG5cclxuICAvKiogKG9wY2lvbmFsKSBEZWZpbmUgc2UgbyBjYW1wbyDDqSBvYnJpZ2F0w7NyaW8sIHZhaSBleGliaXIgbyAnKicgdmVybWVsaG8gYW8gbGFkbyBkbyBsYWJlbCAoc2UgZWxlIGVzdGl2ZXIgcHJlc2VudGUpXHJcbiAgICogISBTRVLDgSBERVBSRUNJQURPIEVNIEJSRVZFXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQGRlZmF1bHQgZmFsc2UgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbGliUmVxdWlyZWQ/OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIERlZmluZSBzZSBvIGNhbXBvIGVzdMOhIGRlc2FiaWxpdGFkby4gRGV2ZSBzZXIgdXNhZG8gcGFyYSB2YWxpZGHDp8O1ZXMgZGUgaGFiaWxpdGHDp8OjbyBkaW7Dom1pY2EgZG8gY2FtcG9cclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAZGVmYXVsdCBmYWxzZSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkID8/IGZhbHNlOyB9XHJcbiAgcHVibGljIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlID09PSB0cnVlKSB0aGlzLmlubmVyQ29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICBlbHNlIHRoaXMuaW5uZXJDb250cm9sLmVuYWJsZSgpO1xyXG5cclxuICAgIC8vdGhpcy5zZXRDb250cm9sU3RhdHVzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogKG9wY2lvbmFsKSBQbGFjZWhvbGRlciBkbyBjYW1wbyBwcmluY2lwYWwgZG8gY29tYm9cclxuICAgKiBAYWxpYXMgJ21haW5QbGFjZWhvbGRlcidcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBkZWZhdWx0IFwiU2VsZWNpb25lIHVtYSBvcMOnw6NvLi4uXCIgKi9cclxuICBASW5wdXQoJ21haW5QbGFjZWhvbGRlcicpIHB1YmxpYyBtYWluSW5wdXRQbGFjZWhvbGRlcj86IHN0cmluZyA9IFwiU2VsZWNpb25lIHVtYSBvcMOnw6NvLi4uXCI7XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIFBsYWNlaG9sZGVyIGRvIGNhbXBvIGRlIHBlc3F1aXNhIGRlbnRybyBkbyBjb21ib1xyXG4gICAqIEBhbGlhcyAnc2VhcmNoUGxhY2Vob2xkZXInXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAZGVmYXVsdCBcIlBlc3F1aXNhLi4uXCIgKi9cclxuICBASW5wdXQoJ3NlYXJjaFBsYWNlaG9sZGVyJykgcHVibGljIHNlYXJjaElucHV0UGxhY2Vob2xkZXI/OiBzdHJpbmcgPSBcIlBlc3F1aXNhLi4uXCI7XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIERlZmluZSBvIHRlbWEgZGUgY29yIGRvIGNvbXBvbmVudGUsIGNvbW8gXCJwcmltYXJ5XCIsIFwic3VjY2Vzc1wiLCBvdSBcImRhbmdlclwiXHJcbiAgICogQGFsaWFzICd0aGVtZSdcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBkZWZhdWx0IFwicHJpbWFyeVwiXHJcbiAgKi9cclxuICBASW5wdXQoJ3RoZW1lJykgcHVibGljIGNvbG9yVGhlbWU/OiBzdHJpbmcgPSBcInByaW1hcnlcIjtcclxuXHJcbiAgLyoqIEV2ZW50byBlbWl0aWRvIGFvIHJlY2FycmVnYXIgYSBsaXN0YSBkZSByZWdpc3Ryb3NcclxuICAgKiBAZXhhbXBsZSBBbyBzZXIgZW1pdGlkbywgbyBjb21wb25lbnRlIHBhaSBwb2RlIHJlZmF6ZXIgbyBHRVQgZGEgbGlzdGEsIHBvciBleGVtcGxvLlxyXG4gICAqIEBlbWl0cyBFdmVudEVtaXR0ZXI8c3RyaW5nPiBxdWUgbGV2YSBvIHZhbG9yIHN0cmluZyBkYSBwZXNxdWlzYSBmZWl0YSBwYXJhIHNlciBlbnZpYWRhIHBhcmEgbyBHRVRcclxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPHN0cmluZz59ICovXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvblJlbG9hZExpc3Q6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG5cclxuICAvKiogRXZlbnRvIGVtaXRpZG8gYW8gc2VsZWNpb25hciB1bSByZWdpc3RybyBkYSBsaXN0YSBkbyBjb21ib2JveFxyXG4gICAqIEBleGFtcGxlIEFvIHNlciBlbWl0aWRvLCBvIGNvbXBvbmVudGUgcGFpIHBvZGUgcmVhbGl6YXIgdW1hIHZhbGlkYcOnw6NvIGNvbSBvIHZhbG9yIHNlbGVjaW9uYWRvLlxyXG4gICAqIEBlbWl0cyBFdmVudEVtaXR0ZXI8c3RyaW5nfG51bWJlcnxudWxsPiBxdWUgbGV2YSBvIHZhbG9yIHN0cmluZyBkYSBwZXNxdWlzYSBmZWl0YSBwYXJhIHNlciBlbnZpYWRhIHBhcmEgbyBHRVRcclxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlciB8IG51bGw+fSAqL1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXIgfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oKTtcclxuICBcclxuXHJcbiAgQFZpZXdDaGlsZCgnbWFpbklucHV0JykgcHJpdmF0ZSBfbWFpbklucHV0ITogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdkcm9wZG93bk1lbnUnKSBwcml2YXRlIF9kcm9wZG93bk1lbnUhOiBFbGVtZW50UmVmO1xyXG4gIC8vICNlbmRyZWdpb24gUFVCTElDXHJcblxyXG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gUFJPUEVSVElFUyA8PT09PT09PT09PVxyXG5cclxuXHJcbiAgLy8gI3JlZ2lvbiA9PT09PT09PT09PiBJTklUSUFMSVpBVElPTiA8PT09PT09PT09PVxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hZGp1c3REcm9wZG93bldpZHRoKCk7XHJcblxyXG4gICAgdGhpcy5zZXRWYWxpZGF0b3IoKTtcclxuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hZGp1c3REcm9wZG93bldpZHRoKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlc1tcImNvbWJvYm94TGlzdFwiXT8uY3VycmVudFZhbHVlKSB0aGlzLnVwZGF0ZVNlbGVjdGVkVmFsdWUoKTtcclxuICAgIGlmIChjaGFuZ2VzW1wib3V0ZXJDb250cm9sXCJdPy5jdXJyZW50VmFsdWUpIHRoaXMudXBkYXRlU2VsZWN0ZWRWYWx1ZSgoY2hhbmdlc1tcIm91dGVyQ29udHJvbFwiXS5jdXJyZW50VmFsdWUgYXMgRm9ybUNvbnRyb2wpLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBPIHF1ZSBmYXplciBxdWFuZG8gbyBldmVudG8gZGUgcmVkaW1lbnNpb25hbWVudG8gb2NvcnJlclxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxyXG4gIG9uUmVzaXplKGV2ZW50OiBFdmVudCk6IHZvaWQgeyB0aGlzLmFkanVzdERyb3Bkb3duV2lkdGgoKSB9XHJcbiAgLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PiBJTklUSUFMSVpBVElPTiA8PT09PT09PT09PVxyXG5cclxuXHJcbiAgLy8gI3JlZ2lvbiA9PT09PT09PT09PiBVVElMUyA8PT09PT09PT09PVxyXG4gIHB1YmxpYyBzZXRWYWx1ZShpdGVtOiBSZWNvcmRDb21ib2JveCk6IHZvaWQge1xyXG4gICAgdGhpcy50ZXh0b1Blc3F1aXNhID0gXCJcIjtcclxuICAgIHRoaXMuaW5uZXJDb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcbiAgICB0aGlzLl9vdXRlckNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgIFxyXG4gICAgdGhpcy5fb3V0ZXJDb250cm9sLnNldFZhbHVlKGl0ZW0uSUQpO1xyXG4gICAgdGhpcy5pbm5lckNvbnRyb2wuc2V0VmFsdWUoaXRlbS5MQUJFTCk7XHJcblxyXG4gICAgdGhpcy5hcmlhRXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuc2V0Q29udHJvbFN0YXR1cyh0aGlzLmlubmVyQ29udHJvbC5zdGF0dXMpO1xyXG5cclxuICAgIHRoaXMub25DaGFuZ2UuZW1pdChpdGVtLklEKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhclZhbHVlKCk6IHZvaWQge1xyXG4gICAgdGhpcy50ZXh0b1Blc3F1aXNhID0gXCJcIjtcclxuICAgIHRoaXMuaW5uZXJDb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcbiAgICB0aGlzLl9vdXRlckNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuXHJcbiAgICB0aGlzLl9vdXRlckNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgICB0aGlzLmlubmVyQ29udHJvbC5zZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgICB0aGlzLmFyaWFFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXRDb250cm9sU3RhdHVzKHRoaXMuaW5uZXJDb250cm9sLnN0YXR1cyk7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3RlZFZhbHVlKHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbm5lckNvbnRyb2wuc2V0VmFsdWUobnVsbCk7IC8vIExpbXBhIG8gY2FtcG8gYW50ZXMgZGUgcXVhbHF1ZXIgY29pc2FcclxuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWU6IHN0cmluZyB8IG51bWJlciB8IG51bGwgPSB2YWx1ZSA/PyB0aGlzLl9vdXRlckNvbnRyb2wudmFsdWU7XHJcblxyXG4gICAgaWYgKCF0aGlzLmNvbWJvYm94TGlzdCB8fCAoc2VsZWN0ZWRWYWx1ZSA9PT0gbnVsbCAmJiBzZWxlY3RlZFZhbHVlID09PSAnJykpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplZFZhbHVlID0gdGhpcy5jb21ib2JveExpc3QuZmluZChpdGVtID0+IGl0ZW0uSUQgPT09IHNlbGVjdGVkVmFsdWUpXHJcbiAgICBpZiAoaW5pdGlhbGl6ZWRWYWx1ZSkgdGhpcy5pbm5lckNvbnRyb2wuc2V0VmFsdWUoaW5pdGlhbGl6ZWRWYWx1ZS5MQUJFTCk7XHJcblxyXG4gICAgLy8gdGhpcy5zZXRDb250cm9sU3RhdHVzKHRoaXMuX291dGVyQ29udHJvbC5zdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGp1c3REcm9wZG93bldpZHRoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX21haW5JbnB1dCAmJiB0aGlzLl9kcm9wZG93bk1lbnUpIHtcclxuICAgICAgY29uc3QgaW5wdXRXaWR0aCA9IHRoaXMuX21haW5JbnB1dC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICB0aGlzLl9kcm9wZG93bk1lbnUubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke2lucHV0V2lkdGh9cHhgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRWYWxpZGF0b3IoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb3V0ZXJDb250cm9sLmhhc1ZhbGlkYXRvcihWYWxpZGF0b3JzLnJlcXVpcmVkKSkge1xyXG4gICAgICB0aGlzLmlubmVyQ29udHJvbC5hZGRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgICB0aGlzLmlzUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5uZXJDb250cm9sLnJlbW92ZVZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgIHRoaXMuaXNSZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb250cm9sU3RhdHVzKGZvcm1TdGF0dXM6IEZvcm1Db250cm9sU3RhdHVzKTogdm9pZCB7XHJcbiAgICBzd2l0Y2goZm9ybVN0YXR1cykge1xyXG4gICAgICBjYXNlICdWQUxJRCc6XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkQ29udHJvbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5uZXJDb250cm9sLmVuYWJsZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnSU5WQUxJRCc6XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkQ29udHJvbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pbm5lckNvbnRyb2wuZW5hYmxlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdQRU5ESU5HJzpcclxuICAgICAgICB0aGlzLmludmFsaWRDb250cm9sID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbm5lckNvbnRyb2wuZW5hYmxlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdESVNBQkxFRCc6XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkQ29udHJvbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5uZXJDb250cm9sLmRpc2FibGUoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVsb2FkTGlzdCgpOiB2b2lkIHsgdGhpcy5vblJlbG9hZExpc3QuZW1pdCh0aGlzLnRleHRvUGVzcXVpc2EpIH1cclxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IFVUSUxTIDw9PT09PT09PT09XHJcblxyXG59XHJcbiIsIjxsYWJlbCAqbmdJZj1cImxhYmVsVGV4dCAmJiBsYWJlbFRleHQgIT0gJydcIiBbbGliUmVxdWlyZWRdPVwiaXNSZXF1aXJlZFwiIGNsYXNzPVwiZm9ybS1sYWJlbCBmdy1ib2xkXCI+e3sgbGFiZWxUZXh0IH19PC9sYWJlbD5cclxuPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGRyb3Bkb3duIGZsZXgtZmlsbCBnbGItbWF4LWhlaWdodC0zNTBweFwiPlxyXG5cclxuICAgPCEtLSBFc3RlIGVsZW1lbnRvIG5nLWNvbnRlbnQgY29tIG8gYXRyaWJ1dG8gW2J0bkxlZnRdIHBlcm1pdGUgcXVlIG8gdXN1w6FyaW8gZmluYWwgZm9ybmXDp2EgY29udGXDumRvIHBlcnNvbmFsaXphZG8gcGFyYSBzZXIgZXhpYmlkbyBubyBsYWRvIGVzcXVlcmRvIGRvIGNvbWJvYm94IGRlIHBlc3F1aXNhLlxyXG4gICBBbyB1c2FyIG8gYXRyaWJ1dG8gW2J0bkxlZnRdLCBvIHVzdcOhcmlvIHBvZGUgZmFjaWxtZW50ZSBhZGljaW9uYXIgYm90w7VlcyBvdSBvdXRyb3MgZWxlbWVudG9zIHBhcmEgbWVsaG9yYXIgYSBmdW5jaW9uYWxpZGFkZSBvdSBhcGFyw6puY2lhIGRvIGNvbWJvYm94IGRlIHBlc3F1aXNhLiAtLT5cclxuICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2J0bkxlZnRdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuICAgPGlucHV0ICAjbWFpbklucHV0IGNsYXNzPVwiZm9ybS1zZWxlY3QgdGV4dC1zdGFydCByb3VuZGVkLWVuZFwiIHR5cGU9XCJ0ZXh0XCIgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiIFtwbGFjZWhvbGRlcl09XCJtYWluSW5wdXRQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJpbm5lckNvbnRyb2xcIiBkYXRhLWJzLWF1dG8tY2xvc2U9XCJvdXRzaWRlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgcmVhZG9ubHkgW2NsYXNzLmlzLWludmFsaWRdPVwiaW52YWxpZENvbnRyb2xcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiYXJpYUV4cGFuZGVkID0gIWFyaWFFeHBhbmRlZDsgc2VhcmNoSW5wdXQuZm9jdXMoKVwiIChmb2N1cyk9XCJzZWFyY2hJbnB1dC5mb2N1cygpXCI+XHJcblxyXG4gICA8dWwgICNkcm9wZG93bk1lbnUgIGNsYXNzPVwiZHJvcGRvd24tbWVudSBwLTIgZ2xiLW1heC1oZWlnaHQtMzUwcHggb3ZlcmZsb3cteS1zY3JvbGwgei1pbmRleC0xMDIwXCIgW2NsYXNzLnNob3ddPVwiYXJpYUV4cGFuZGVkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0yXCI+XHJcbiAgICAgICAgIDxpbnB1dCAjc2VhcmNoSW5wdXQgKGlucHV0KT1cInRleHRvUGVzcXVpc2EgPSBzZWFyY2hJbnB1dC52YWx1ZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hJbnB1dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGdsYi1pbnB1dC1uby1nbG93XCIgW3BsYWNlaG9sZGVyXT1cInNlYXJjaElucHV0UGxhY2Vob2xkZXJcIiAoa2V5dXAuZW50ZXIpPVwicmVsb2FkTGlzdCgpXCI+XHJcbiAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXt7Y29sb3JUaGVtZX19XCIgKGNsaWNrKT1cInJlbG9hZExpc3QoKVwiPiA8YXBwLXN2Zy1zdG9yYWdlIHN2Z05hbWU9XCJsdXBhXCIgc3ZnU2l6ZT1cIm1lZGl1bS1zbWFsbFwiIC8+IDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIEBpZiAoY29tYm9ib3hMaXN0KSB7XHJcbiAgICAgICAgIDxsaSAqbmdJZj1cImlubmVyQ29udHJvbC52YWx1ZSAhPSAnJyAmJiBpbm5lckNvbnRyb2wudmFsdWUgIT0gbnVsbFwiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIChjbGljayk9XCJjbGVhclZhbHVlKClcIj4gPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+TGltcGFyIG9ww6fDo28gc2VsZWNpb25hZGE8L3NwYW4+IDwvbGk+XHJcbiAgICAgICAgIEBmb3IgKGl0ZW0gb2YgY29tYm9ib3hMaXN0IHwgdGV4dEZpbHRlcjp0ZXh0b1Blc3F1aXNhOyB0cmFjayAkaW5kZXgpIHtcclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIChjbGljayk9XCJzZXRWYWx1ZShpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIml0ZW0uQWRkaXRpb25hbFN0cmluZ1Byb3BlcnR5MSB8fCBpdGVtLkFkZGl0aW9uYWxTdHJpbmdQcm9wZXJ0eTEgIT0gJydcIiBjbGFzcz1cImdsYi1mcy0xMiBmdy1ib2xkIGQtaW5saW5lLWJsb2NrIHctMTI1XCI+e3sgaXRlbS5BZGRpdGlvbmFsU3RyaW5nUHJvcGVydHkxIH19PC9zcGFuPiB7eyBpdGVtLkxBQkVMIH19XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgQGVtcHR5IHsgPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbSBmc3QtaXRhbGljXCI+TmVuaHVtIHJlZ2lzdHJvIGVuY29udHJhZG8gY29tIGVzdGEgcGVzcXVpc2EuLi48L2xpPiB9XHJcbiAgICAgIH1cclxuICAgICAgQGVsc2UgeyA8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtIHRleHQtY2VudGVyXCI+IDxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj48c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkNhcnJlZ2FuZG8gZGFkb3MuLi48L3NwYW4+PC9kaXY+IDwvbGk+IH1cclxuICAgPC91bD5cclxuXHJcbiAgIDwhLS0gRXN0ZSBlbGVtZW50byBuZy1jb250ZW50IGNvbSBvIGF0cmlidXRvIFtidG5SaWdodF0gcGVybWl0ZSBxdWUgbyB1c3XDoXJpbyBmaW5hbCBmb3JuZcOnYSBjb250ZcO6ZG8gcGVyc29uYWxpemFkbyBwYXJhIHNlciBleGliaWRvIG5vIGxhZG8gZGlyZWl0byBkbyBjb21ib2JveCBkZSBwZXNxdWlzYS5cclxuICAgQW8gdXNhciBvIGF0cmlidXRvIFtidG5SaWdodF0sIG8gdXN1w6FyaW8gcG9kZSBmYWNpbG1lbnRlIGFkaWNpb25hciBib3TDtWVzIG91IG91dHJvcyBlbGVtZW50b3MgcGFyYSBtZWxob3JhciBhIGZ1bmNpb25hbGlkYWRlIG91IGFwYXLDqm5jaWEgZG8gY29tYm9ib3ggZGUgcGVzcXVpc2EuIC0tPlxyXG4gICA8bmctY29udGVudCBzZWxlY3Q9XCJbYnRuUmlnaHRdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuPC9kaXY+XHJcblxyXG48IS0tICNyZWdpb24gTUVOU0FHRU0gREUgRVJSTyBERSBWQUxJREHDh8ODTyAtLT5cclxuPGFwcC1maWVsZC1lcnJvci1tZXNzYWdlICpuZ0lmPVwiaW52YWxpZENvbnRyb2xcIiBjdXN0b21NZXNzYWdlPVwiRXN0ZSBjYW1wbyDDqSBvYnJpZ2F0w7NyaW8uXCIgLz5cclxuPCEtLSAjZW5kcmVnaW9uIE1FTlNBR0VNIERFIEVSUk8gREUgVkFMSURBw4fDg08gLS0+XHJcbiJdfQ==
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
 * - `returnRecord` (boolean): Define se o tipo de retorno ao selecionar uma opção será o Record inteiro ou apenas o ID
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
        /** (opcional) Define se o tipo de retorno ao selecionar uma opção será o Record inteiro ou apenas o ID.
         * @type {boolean}
         * @default false
        */
        this.returnRecord = false;
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
        this.onChange.emit(this.returnRecord ? item : item.ID);
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: LibComboboxComponent, selector: "lib-combobox", inputs: { outerControl: ["control", "outerControl"], comboboxList: ["list", "comboboxList"], labelText: "labelText", libRequired: "libRequired", disabled: "disabled", mainInputPlaceholder: ["mainPlaceholder", "mainInputPlaceholder"], searchInputPlaceholder: ["searchPlaceholder", "searchInputPlaceholder"], colorTheme: ["theme", "colorTheme"], returnRecord: "returnRecord" }, outputs: { onReloadList: "onReloadList", onChange: "onChange" }, host: { listeners: { "window:resize": "onResize($event)" } }, viewQueries: [{ propertyName: "_mainInput", first: true, predicate: ["mainInput"], descendants: true }, { propertyName: "_dropdownMenu", first: true, predicate: ["dropdownMenu"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<label *ngIf=\"labelText && labelText != ''\" [libRequired]=\"isRequired\" class=\"form-label fw-bold\">{{ labelText }}</label>\r\n<div class=\"input-group dropdown flex-fill glb-max-height-350px\">\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnLeft] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado esquerdo do combobox de pesquisa.\r\n   Ao usar o atributo [btnLeft], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnLeft]\"></ng-content>\r\n\r\n   <input  #mainInput class=\"form-select text-start rounded-end\" type=\"text\" data-bs-toggle=\"dropdown\" [placeholder]=\"mainInputPlaceholder\"\r\n            [formControl]=\"innerControl\" data-bs-auto-close=\"outside\" aria-expanded=\"false\" readonly [class.is-invalid]=\"invalidControl\"\r\n            (click)=\"ariaExpanded = !ariaExpanded; searchInput.focus()\" (focus)=\"searchInput.focus()\">\r\n\r\n   <ul  #dropdownMenu  class=\"dropdown-menu p-2 glb-max-height-350px overflow-y-scroll z-index-1020\" [class.show]=\"ariaExpanded\">\r\n      <div class=\"input-group mb-2\">\r\n         <input #searchInput (input)=\"textoPesquisa = searchInput.value\" type=\"text\" id=\"searchInput\" class=\"form-control glb-input-no-glow\" [placeholder]=\"searchInputPlaceholder\" (keyup.enter)=\"reloadList()\">\r\n         <button class=\"btn btn-{{colorTheme}}\" (click)=\"reloadList()\"> <app-svg-storage svgName=\"lupa\" svgSize=\"medium-small\" /> </button>\r\n      </div>\r\n\r\n      @if (comboboxList) {\r\n         <li *ngIf=\"innerControl.value != '' && innerControl.value != null\" class=\"dropdown-item\" (click)=\"clearValue()\"> <span class=\"fw-bold\">Limpar op\u00E7\u00E3o selecionada</span> </li>\r\n         @for (item of comboboxList | textFilter:textoPesquisa; track $index) {\r\n            <li class=\"dropdown-item\" (click)=\"setValue(item)\">\r\n               <span *ngIf=\"item.AdditionalStringProperty1 || item.AdditionalStringProperty1 != ''\" class=\"glb-fs-12 fw-bold d-inline-block w-125\">{{ item.AdditionalStringProperty1 }}</span> {{ item.LABEL }}\r\n            </li>\r\n         }\r\n         @empty { <li class=\"dropdown-item fst-italic\">Nenhum registro encontrado com esta pesquisa...</li> }\r\n      }\r\n      @else { <li class=\"dropdown-item text-center\"> <div class=\"spinner-border\" role=\"status\"><span class=\"visually-hidden\">Carregando dados...</span></div> </li> }\r\n   </ul>\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnRight] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado direito do combobox de pesquisa.\r\n   Ao usar o atributo [btnRight], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnRight]\"></ng-content>\r\n\r\n</div>\r\n\r\n<!-- #region MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n<app-field-error-message *ngIf=\"invalidControl\" customMessage=\"Este campo \u00E9 obrigat\u00F3rio.\" />\r\n<!-- #endregion MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n", styles: [".glb-max-height-350px{max-height:350px!important}.form-label{font-size:16px!important}.z-index-1020{z-index:1020!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.FieldErrorMessageComponent, selector: "app-field-error-message", inputs: ["customMessage", "control", "label"] }, { kind: "component", type: i4.SvgStorageComponent, selector: "app-svg-storage", inputs: ["svgName", "svgColor", "svgFill", "svgSize", "svgStrokeWidth"] }, { kind: "directive", type: i5.RequiredDirective, selector: "label[libRequired], span[libRequired], p[libRequired]", inputs: ["libRequired", "sisID"] }, { kind: "pipe", type: i6.TextFilterPipe, name: "textFilter" }] }); }
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
            }], returnRecord: [{
                type: Input
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWNvbWJvYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvbGliLWNvbWJvYm94L2xpYi1jb21ib2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2xpYi1jb21ib2JveC9saWItY29tYm9ib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdKLE9BQU8sRUFBbUIsV0FBVyxFQUFxQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7OztBQUlwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQU1ILE1BQU0sT0FBTyxvQkFBb0I7SUFPL0IsSUFBYyxZQUFZLEtBQWMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNwRSxJQUFjLFlBQVksQ0FBQyxLQUFjLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBaUIxRSxxQkFBcUI7SUFFckIsaUJBQWlCO0lBRWpCOzt5REFFcUQ7SUFDckQsSUFDVyxZQUFZLEtBQXVCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQSxDQUFDLENBQUM7SUFDekUsSUFBVyxZQUFZLENBQUMsS0FBOEM7UUFDcEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFvQixDQUFDO1FBRTFDLDhFQUE4RTtRQUM5RSxJQUFJLElBQUksQ0FBQyxhQUFhO1lBQUUsSUFBSSxDQUFDLGFBQWEs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QkFnQk0sWUFBWTtzQkFBNUQsS0FBSzt1QkFBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtnQkFJeEIsU0FBUztzQkFBeEIsS0FBSztnQkFNVSxXQUFXO3NCQUExQixLQUFLO2dCQU1LLFFBQVE7c0JBRGxCLEtBQUs7Z0JBYTJCLG9CQUFvQjtzQkFBcEQsS0FBSzt1QkFBQyxpQkFBaUI7Z0JBTVcsc0JBQXNCO3NCQUF4RCxLQUFLO3VCQUFDLG1CQUFtQjtnQkFPSCxVQUFVO3NCQUFoQyxLQUFLO3VCQUFDLE9BQU87Z0JBTUUsWUFBWTtzQkFBM0IsS0FBSztnQkFNVyxZQUFZO3NCQUE1QixNQUFNO2dCQU9VLFFBQVE7c0JBQXhCLE1BQU07Z0JBR3lCLFVBQVU7c0JBQXpDLFNBQVM7dUJBQUMsV0FBVztnQkFDYSxhQUFhO3NCQUEvQyxTQUFTO3VCQUFDLGNBQWM7Z0JBK0J6QixRQUFRO3NCQURQLFlBQVk7dUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sLCBGb3JtQ29udHJvbFN0YXR1cywgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUmVjb3JkQ29tYm9ib3ggfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tYm9ib3gvcmVjb3JkLWNvbWJvYm94JztcclxuXHJcbi8qKlxyXG4gKiBAY29tcG9uZW50IExpYkNvbWJvYm94Q29tcG9uZW50XHJcbiAqIEBzZWxlY3RvciBsaWItY29tYm9ib3hcclxuICogXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBPIGNvbXBvbmVudGUgTGliQ29tYm9ib3hDb21wb25lbnQgw6kgcHJvamV0YWRvIHBhcmEgZm9ybmVjZXIgYW9zIHVzdcOhcmlvcyB1bWEgaW50ZXJmYWNlIHBhcmEgcGVzcXVpc2FyIGUgc2VsZWNpb25hciBpdGVucyBkZSB1bWEgbGlzdGEuXHJcbiAqIEVsZSBzdXBvcnRhIGEgZmlsdHJhZ2VtIGRlIGl0ZW5zIGNvbSBiYXNlIG5hIGVudHJhZGEgZG8gdXN1w6FyaW8sIHBlcm1pdGluZG8gdW1hIHNlbGXDp8OjbyBtYWlzIGbDoWNpbCBlbSBsaXN0YXMgZXh0ZW5zYXMuXHJcbiAqIFxyXG4gKiAjIyBGdW5jaW9uYWxpZGFkZXM6XHJcbiAqIC0gUGVzcXVpc2EgZSBmaWx0cmFnZW0gZGUgaXRlbnMgbmEgbGlzdGEgZG8gY29tYm9ib3guXHJcbiAqIC0gU2VsZcOnw6NvIGRlIGl0ZW5zIGNvbSBmZWVkYmFjayB2aXN1YWwuXHJcbiAqIC0gRW1pc3PDo28gZGUgZXZlbnRvcyBwZXJzb25hbGl6YWRvcyBwYXJhIGludGVyYcOnw7VlcyBkbyB1c3XDoXJpbywgY29tbyByZWNhcnJlZ2FyIGEgbGlzdGEgb3Ugc2VsZWNpb25hciB1bSBpdGVtLlxyXG4gKiAtIEFqdXN0ZSBkaW7Dom1pY28gZGEgbGFyZ3VyYSBkbyBkcm9wZG93biBwYXJhIGNvcnJlc3BvbmRlciBhbyBpbnB1dCBwcmluY2lwYWwuXHJcbiAqIC0gSW5pY2lhbGl6YcOnw6NvIGRlIHVtIHZhbG9yIHNlbGVjaW9uYWRvLCBzZSBmb3JuZWNpZG8uXHJcbiAqIFxyXG4gKiAjIyBJbnB1dHM6XHJcbiAqIC0gYG91dGVyQ29udHJvbGAgKEZvcm1Db250cm9sIHwgQWJzdHJhY3RDb250cm9sKTogQ29udHJvbCBwYXJhIHNlbGXDp8OjbyBkb3MgdmFsb3JlcywgYXR1YWxpemFyw6EgYXV0b21hdGljYW1lbnRlIG8gY29udHJvbCBkbyBjb21wb25lbnRlIHBhaSB0YW1iw6ltXHJcbiAqIC0gYGNvbWJvYm94TGlzdGAgKFJlY29yZENvbWJvYm94W10pOiBMaXN0YSBkZSByZWdpc3Ryb3MgcXVlIHNlcsOjbyBleGliaWRvcyBubyBjb21ibywgZW5xdWFudG8gZWxlcyBlc3RpdmVyZW0gY2FycmVnYW5kbyBzZXLDoSBleGliaWRvIHVtIHNwaW5uZXJcclxuICogLSBgbGFiZWxUZXh0YCAoc3RyaW5nKTogVGV4dG8gZG8gcsOzdHVsbyBxdWUgc2Vyw6EgZXhpYmlkbyBhY2ltYSBkbyBjb21iby4gQ2FzbyBuw6NvIGluZm9ybWFkbyBuYWRhIHNlcsOhIGV4aWJpZG9cclxuICogLSBgZGlzYWJsZWRgIChib29sZWFuKTogRGVmaW5lIHNlIG8gY2FtcG8gZXN0w6EgZGVzYWJpbGl0YWRvLiBEZXZlIHNlciB1c2FkbyBwYXJhIHZhbGlkYcOnw7VlcyBkZSBoYWJpbGl0YcOnw6NvIGRpbsOibWljYSBkbyBjYW1wb1xyXG4gKiAtIGBsaWJSZXF1aXJlZGAgKGJvb2xlYW4pOiBEZWZpbmUgc2UgbyBjYW1wbyDDqSBvYnJpZ2F0w7NyaW8sIHZhaSBleGliaXIgbyAnKicgdmVybWVsaG8gYW8gbGFkbyBkbyBsYWJlbCAoc2UgZWxlIGVzdGl2ZXIgcHJlc2VudGUpXHJcbiAqIC0gYG1haW5JbnB1dFBsYWNlaG9sZGVyYCAoc3RyaW5nKTogUGxhY2Vob2xkZXIgZG8gY2FtcG8gcHJpbmNpcGFsIGRvIGNvbWJvXHJcbiAqIC0gYHNlYXJjaElucHV0UGxhY2Vob2xkZXJgIChzdHJpbmcpOiBQbGFjZWhvbGRlciBkbyBjYW1wbyBkZSBwZXNxdWlzYSBkZW50cm8gZG8gY29tYm9cclxuICogLSBgY29sb3JUaGVtZWAgKFwicHJpbWFyeVwiIHwgXCJzZWNvbmRhcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJkYW5nZXJcIiB8IFwid2FybmluZ1wiIHwgXCJpbmZvXCIgfCBcImxpZ2h0XCIgfCBcImRhcmtcIik6IERlZmluZSBvIHRlbWEgZGUgY29yIGRvIGNvbXBvbmVudGUsIGNvbW8gXCJwcmltYXJ5XCIsIFwic3VjY2Vzc1wiLCBvdSBcImRhbmdlclwiXHJcbiAqIC0gYHJldHVyblJlY29yZGAgKGJvb2xlYW4pOiBEZWZpbmUgc2UgbyB0aXBvIGRlIHJldG9ybm8gYW8gc2VsZWNpb25hciB1bWEgb3DDp8OjbyBzZXLDoSBvIFJlY29yZCBpbnRlaXJvIG91IGFwZW5hcyBvIElEXHJcbiAqIFxyXG4gKiAjIyBPdXRwdXRzOlxyXG4gKiAtIGBvblJlbG9hZExpc3RgIChFdmVudEVtaXR0ZXI8c3RyaW5nPik6IEV2ZW50byBlbWl0aWRvIHF1YW5kbyBhIGxpc3RhIHByZWNpc2Egc2VyIHJlY2FycmVnYWRhLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItY29tYm9ib3gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9saWItY29tYm9ib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9saWItY29tYm9ib3guY29tcG9uZW50LnNjc3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJDb21ib2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgLy8gI3JlZ2lvbiA9PT09PT09PT09PiBQUk9QRVJUSUVTIDw9PT09PT09PT09XHJcblxyXG4gIC8vICNyZWdpb24gUFJPVEVDVEVEXHJcbiAgcHJvdGVjdGVkIHRleHRvUGVzcXVpc2E6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgYXJpYUV4cGFuZGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fYXJpYUV4cGFuZGVkOyB9XHJcbiAgcHJvdGVjdGVkIHNldCBhcmlhRXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fYXJpYUV4cGFuZGVkID0gdmFsdWU7IH1cclxuXHJcbiAgcHJvdGVjdGVkIGlubmVyQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2w8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4obnVsbCk7XHJcbiAgcHJvdGVjdGVkIGludmFsaWRDb250cm9sOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIGlzUmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIGludmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQgZGlydHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQgdG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vICNlbmRyZWdpb24gUFJPVEVDVEVEXHJcblxyXG4gIC8vICNyZWdpb24gUFJJVkFURVxyXG4gIHByaXZhdGUgX2Rpc2FibGVkPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2FyaWFFeHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBwcml2YXRlIF9vdXRlckNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sPHN0cmluZyB8IG51bWJlciB8IG51bGw+KG51bGwpO1xyXG4gIC8vICNlbmRyZWdpb24gUFJJVkFURVxyXG5cclxuICAvLyAjcmVnaW9uIFBVQkxJQ1xyXG5cclxuICAvKiogKG9icmlnYXTDs3JpbykgQ29udHJvbCBwYXJhIHNlbGXDp8OjbyBkb3MgdmFsb3JlcywgYXR1YWxpemFyw6EgYXV0b21hdGljYW1lbnRlIG8gY29udHJvbCBkbyBjb21wb25lbnRlIHBhaSB0YW1iw6ltXHJcbiAgICogQGFsaWFzICdjb250cm9sJ1xyXG4gICAqIEB0eXBlIHtGb3JtQ29udHJvbDxhbnk+IHwgQWJzdHJhY3RDb250cm9sPGFueT59ICovXHJcbiAgQElucHV0KHsgYWxpYXM6ICdjb250cm9sJywgcmVxdWlyZWQ6IHRydWUgfSlcclxuICBwdWJsaWMgZ2V0IG91dGVyQ29udHJvbCgpOiBGb3JtQ29udHJvbDxhbnk+IHsgcmV0dXJuIHRoaXMuX291dGVyQ29udHJvbCB9XHJcbiAgcHVibGljIHNldCBvdXRlckNvbnRyb2wodmFsdWU6IEZvcm1Db250cm9sPGFueT4gfCBBYnN0cmFjdENvbnRyb2w8YW55Pikge1xyXG4gICAgdGhpcy5fb3V0ZXJDb250cm9sID0gdmFsdWUgYXMgRm9ybUNvbnRyb2w7XHJcblxyXG4gICAgLy8gQ2FuY2VsYSBhIHN1YnNjcmnDp8OjbyBhbnRlcmlvciAoc2UgaG91dmVyKSBwYXJhIGV2aXRhciBtw7psdGlwbGFzIHN1YnNjcmnDp8O1ZXNcclxuICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb24pIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cclxuICAgIC8vIFN1YnNjcmnDp8OjbyBhbyBvYnNlcnbDoXZlbCB2YWx1ZUNoYW5nZXMgcGFyYSByZWFnaXIgYSBtdWRhbsOnYXMgbm8gdmFsb3JcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX291dGVyQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHsgdGhpcy51cGRhdGVTZWxlY3RlZFZhbHVlKHZhbHVlKSB9KTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX291dGVyQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShzdGF0dXMgPT4geyB0aGlzLnNldENvbnRyb2xTdGF0dXMoc3RhdHVzKSB9KTtcclxuICB9XHJcblxyXG4gIC8qKiAob2JyaWdhdMOzcmlvKSBMaXN0YSBkZSByZWdpc3Ryb3MgcXVlIHNlcsOjbyBleGliaWRvcyBubyBjb21ibywgZW5xdWFudG8gZWxlcyBlc3RpdmVyZW0gY2FycmVnYW5kbyBzZXLDoSBleGliaWRvIHVtIHNwaW5uZXJcclxuICAgKiBAYWxpYXMgJ2xpc3QnXHJcbiAgICogQHR5cGUge1JlY29yZENvbWJvYm94W119ICovXHJcbiAgQElucHV0KHsgYWxpYXM6ICdsaXN0JywgcmVxdWlyZWQ6IHRydWUgfSkgcHVibGljIGNvbWJvYm94TGlzdD86IFJlY29yZENvbWJvYm94W107XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIFRleHRvIGRvIHLDs3R1bG8gcXVlIHNlcsOhIGV4aWJpZG8gYWNpbWEgZG8gY29tYm8uIENhc28gbsOjbyBpbmZvcm1hZG8gbmFkYSBzZXLDoSBleGliaWRvXHJcbiAgICogQHR5cGUge3N0cmluZ30gKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbGFiZWxUZXh0Pzogc3RyaW5nO1xyXG5cclxuICAvKiogKG9wY2lvbmFsKSBEZWZpbmUgc2UgbyBjYW1wbyDDqSBvYnJpZ2F0w7NyaW8sIHZhaSBleGliaXIgbyAnKicgdmVybWVsaG8gYW8gbGFkbyBkbyBsYWJlbCAoc2UgZWxlIGVzdGl2ZXIgcHJlc2VudGUpXHJcbiAgICogISBTRVLDgSBERVBSRUNJQURPIEVNIEJSRVZFXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQGRlZmF1bHQgZmFsc2UgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbGliUmVxdWlyZWQ/OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIERlZmluZSBzZSBvIGNhbXBvIGVzdMOhIGRlc2FiaWxpdGFkby4gRGV2ZSBzZXIgdXNhZG8gcGFyYSB2YWxpZGHDp8O1ZXMgZGUgaGFiaWxpdGHDp8OjbyBkaW7Dom1pY2EgZG8gY2FtcG9cclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAZGVmYXVsdCBmYWxzZSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkID8/IGZhbHNlOyB9XHJcbiAgcHVibGljIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlID09PSB0cnVlKSB0aGlzLmlubmVyQ29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICBlbHNlIHRoaXMuaW5uZXJDb250cm9sLmVuYWJsZSgpO1xyXG5cclxuICAgIC8vdGhpcy5zZXRDb250cm9sU3RhdHVzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogKG9wY2lvbmFsKSBQbGFjZWhvbGRlciBkbyBjYW1wbyBwcmluY2lwYWwgZG8gY29tYm9cclxuICAgKiBAYWxpYXMgJ21haW5QbGFjZWhvbGRlcidcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBkZWZhdWx0IFwiU2VsZWNpb25lIHVtYSBvcMOnw6NvLi4uXCIgKi9cclxuICBASW5wdXQoJ21haW5QbGFjZWhvbGRlcicpIHB1YmxpYyBtYWluSW5wdXRQbGFjZWhvbGRlcj86IHN0cmluZyA9IFwiU2VsZWNpb25lIHVtYSBvcMOnw6NvLi4uXCI7XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIFBsYWNlaG9sZGVyIGRvIGNhbXBvIGRlIHBlc3F1aXNhIGRlbnRybyBkbyBjb21ib1xyXG4gICAqIEBhbGlhcyAnc2VhcmNoUGxhY2Vob2xkZXInXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAZGVmYXVsdCBcIlBlc3F1aXNhLi4uXCIgKi9cclxuICBASW5wdXQoJ3NlYXJjaFBsYWNlaG9sZGVyJykgcHVibGljIHNlYXJjaElucHV0UGxhY2Vob2xkZXI/OiBzdHJpbmcgPSBcIlBlc3F1aXNhLi4uXCI7XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIERlZmluZSBvIHRlbWEgZGUgY29yIGRvIGNvbXBvbmVudGUsIGNvbW8gXCJwcmltYXJ5XCIsIFwic3VjY2Vzc1wiLCBvdSBcImRhbmdlclwiXHJcbiAgICogQGFsaWFzICd0aGVtZSdcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBkZWZhdWx0IFwicHJpbWFyeVwiXHJcbiAgKi9cclxuICBASW5wdXQoJ3RoZW1lJykgcHVibGljIGNvbG9yVGhlbWU/OiBzdHJpbmcgPSBcInByaW1hcnlcIjtcclxuXHJcbiAgLyoqIChvcGNpb25hbCkgRGVmaW5lIHNlIG8gdGlwbyBkZSByZXRvcm5vIGFvIHNlbGVjaW9uYXIgdW1hIG9ww6fDo28gc2Vyw6EgbyBSZWNvcmQgaW50ZWlybyBvdSBhcGVuYXMgbyBJRC5cclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICovXHJcbiAgQElucHV0KCkgcHVibGljIHJldHVyblJlY29yZD86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIEV2ZW50byBlbWl0aWRvIGFvIHJlY2FycmVnYXIgYSBsaXN0YSBkZSByZWdpc3Ryb3NcclxuICAgKiBAZXhhbXBsZSBBbyBzZXIgZW1pdGlkbywgbyBjb21wb25lbnRlIHBhaSBwb2RlIHJlZmF6ZXIgbyBHRVQgZGEgbGlzdGEsIHBvciBleGVtcGxvLlxyXG4gICAqIEBlbWl0cyBFdmVudEVtaXR0ZXI8c3RyaW5nPiBxdWUgbGV2YSBvIHZhbG9yIHN0cmluZyBkYSBwZXNxdWlzYSBmZWl0YSBwYXJhIHNlciBlbnZpYWRhIHBhcmEgbyBHRVRcclxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPHN0cmluZz59ICovXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvblJlbG9hZExpc3Q6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG5cclxuICAvKiogRXZlbnRvIGVtaXRpZG8gYW8gc2VsZWNpb25hciB1bSByZWdpc3RybyBkYSBsaXN0YSBkbyBjb21ib2JveFxyXG4gICAqIEBleGFtcGxlIEFvIHNlciBlbWl0aWRvLCBvIGNvbXBvbmVudGUgcGFpIHBvZGUgcmVhbGl6YXIgdW1hIHZhbGlkYcOnw6NvIGNvbSBvIHZhbG9yIHNlbGVjaW9uYWRvLlxyXG4gICAqIEBlbWl0cyBFdmVudEVtaXR0ZXI8c3RyaW5nfG51bWJlcnxudWxsPiBxdWUgbGV2YSBvIHZhbG9yIHN0cmluZyBkYSBwZXNxdWlzYSBmZWl0YSBwYXJhIHNlciBlbnZpYWRhIHBhcmEgbyBHRVRcclxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlciB8IG51bGw+fSAqL1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxSZWNvcmRDb21ib2JveCB8IHN0cmluZyB8IG51bWJlciB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZWNvcmRDb21ib2JveCB8IHN0cmluZyB8IG51bWJlciB8IG51bGw+KCk7XHJcbiAgXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ21haW5JbnB1dCcpIHByaXZhdGUgX21haW5JbnB1dCE6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25NZW51JykgcHJpdmF0ZSBfZHJvcGRvd25NZW51ITogRWxlbWVudFJlZjtcclxuICAvLyAjZW5kcmVnaW9uIFBVQkxJQ1xyXG5cclxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IFBST1BFUlRJRVMgPD09PT09PT09PT1cclxuXHJcblxyXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gSU5JVElBTElaQVRJT04gPD09PT09PT09PT1cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWRqdXN0RHJvcGRvd25XaWR0aCgpO1xyXG5cclxuICAgIHRoaXMuc2V0VmFsaWRhdG9yKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkVmFsdWUoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWRqdXN0RHJvcGRvd25XaWR0aCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXNbXCJjb21ib2JveExpc3RcIl0/LmN1cnJlbnRWYWx1ZSkgdGhpcy51cGRhdGVTZWxlY3RlZFZhbHVlKCk7XHJcbiAgICBpZiAoY2hhbmdlc1tcIm91dGVyQ29udHJvbFwiXT8uY3VycmVudFZhbHVlKSB0aGlzLnVwZGF0ZVNlbGVjdGVkVmFsdWUoKGNoYW5nZXNbXCJvdXRlckNvbnRyb2xcIl0uY3VycmVudFZhbHVlIGFzIEZvcm1Db250cm9sKS52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gTyBxdWUgZmF6ZXIgcXVhbmRvIG8gZXZlbnRvIGRlIHJlZGltZW5zaW9uYW1lbnRvIG9jb3JyZXJcclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcclxuICBvblJlc2l6ZShldmVudDogRXZlbnQpOiB2b2lkIHsgdGhpcy5hZGp1c3REcm9wZG93bldpZHRoKCkgfVxyXG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gSU5JVElBTElaQVRJT04gPD09PT09PT09PT1cclxuXHJcblxyXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gVVRJTFMgPD09PT09PT09PT1cclxuICBwdWJsaWMgc2V0VmFsdWUoaXRlbTogUmVjb3JkQ29tYm9ib3gpOiB2b2lkIHtcclxuICAgIHRoaXMudGV4dG9QZXNxdWlzYSA9IFwiXCI7XHJcbiAgICB0aGlzLmlubmVyQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgdGhpcy5fb3V0ZXJDb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcbiAgICBcclxuICAgIHRoaXMuX291dGVyQ29udHJvbC5zZXRWYWx1ZShpdGVtLklEKTtcclxuICAgIHRoaXMuaW5uZXJDb250cm9sLnNldFZhbHVlKGl0ZW0uTEFCRUwpO1xyXG5cclxuICAgIHRoaXMuYXJpYUV4cGFuZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNldENvbnRyb2xTdGF0dXModGhpcy5pbm5lckNvbnRyb2wuc3RhdHVzKTtcclxuICAgIFxyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHRoaXMucmV0dXJuUmVjb3JkID8gaXRlbSBhcyBSZWNvcmRDb21ib2JveCA6IGl0ZW0uSUQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyVmFsdWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRleHRvUGVzcXVpc2EgPSBcIlwiO1xyXG4gICAgdGhpcy5pbm5lckNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgIHRoaXMuX291dGVyQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG5cclxuICAgIHRoaXMuX291dGVyQ29udHJvbC5zZXRWYWx1ZShudWxsKTtcclxuICAgIHRoaXMuaW5uZXJDb250cm9sLnNldFZhbHVlKG51bGwpO1xyXG5cclxuICAgIHRoaXMuYXJpYUV4cGFuZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNldENvbnRyb2xTdGF0dXModGhpcy5pbm5lckNvbnRyb2wuc3RhdHVzKTtcclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQobnVsbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVNlbGVjdGVkVmFsdWUodmFsdWU/OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLmlubmVyQ29udHJvbC5zZXRWYWx1ZShudWxsKTsgLy8gTGltcGEgbyBjYW1wbyBhbnRlcyBkZSBxdWFscXVlciBjb2lzYVxyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCA9IHZhbHVlID8/IHRoaXMuX291dGVyQ29udHJvbC52YWx1ZTtcclxuXHJcbiAgICBpZiAoIXRoaXMuY29tYm9ib3hMaXN0IHx8IChzZWxlY3RlZFZhbHVlID09PSBudWxsICYmIHNlbGVjdGVkVmFsdWUgPT09ICcnKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemVkVmFsdWUgPSB0aGlzLmNvbWJvYm94TGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5JRCA9PT0gc2VsZWN0ZWRWYWx1ZSlcclxuICAgIGlmIChpbml0aWFsaXplZFZhbHVlKSB0aGlzLmlubmVyQ29udHJvbC5zZXRWYWx1ZShpbml0aWFsaXplZFZhbHVlLkxBQkVMKTtcclxuXHJcbiAgICAvLyB0aGlzLnNldENvbnRyb2xTdGF0dXModGhpcy5fb3V0ZXJDb250cm9sLnN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkanVzdERyb3Bkb3duV2lkdGgoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbWFpbklucHV0ICYmIHRoaXMuX2Ryb3Bkb3duTWVudSkge1xyXG4gICAgICBjb25zdCBpbnB1dFdpZHRoID0gdGhpcy5fbWFpbklucHV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgIHRoaXMuX2Ryb3Bkb3duTWVudS5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7aW5wdXRXaWR0aH1weGA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFZhbGlkYXRvcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9vdXRlckNvbnRyb2wuaGFzVmFsaWRhdG9yKFZhbGlkYXRvcnMucmVxdWlyZWQpKSB7XHJcbiAgICAgIHRoaXMuaW5uZXJDb250cm9sLmFkZFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgIHRoaXMuaXNSZXF1aXJlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5pbm5lckNvbnRyb2wucmVtb3ZlVmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgICAgdGhpcy5pc1JlcXVpcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENvbnRyb2xTdGF0dXMoZm9ybVN0YXR1czogRm9ybUNvbnRyb2xTdGF0dXMpOiB2b2lkIHtcclxuICAgIHN3aXRjaChmb3JtU3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgJ1ZBTElEJzpcclxuICAgICAgICB0aGlzLmludmFsaWRDb250cm9sID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbm5lckNvbnRyb2wuZW5hYmxlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdJTlZBTElEJzpcclxuICAgICAgICB0aGlzLmludmFsaWRDb250cm9sID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlubmVyQ29udHJvbC5lbmFibGUoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ1BFTkRJTkcnOlxyXG4gICAgICAgIHRoaXMuaW52YWxpZENvbnRyb2wgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlubmVyQ29udHJvbC5lbmFibGUoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ0RJU0FCTEVEJzpcclxuICAgICAgICB0aGlzLmludmFsaWRDb250cm9sID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbm5lckNvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWxvYWRMaXN0KCk6IHZvaWQgeyB0aGlzLm9uUmVsb2FkTGlzdC5lbWl0KHRoaXMudGV4dG9QZXNxdWlzYSkgfVxyXG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gVVRJTFMgPD09PT09PT09PT1cclxuXHJcbn1cclxuIiwiPGxhYmVsICpuZ0lmPVwibGFiZWxUZXh0ICYmIGxhYmVsVGV4dCAhPSAnJ1wiIFtsaWJSZXF1aXJlZF09XCJpc1JlcXVpcmVkXCIgY2xhc3M9XCJmb3JtLWxhYmVsIGZ3LWJvbGRcIj57eyBsYWJlbFRleHQgfX08L2xhYmVsPlxyXG48ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgZHJvcGRvd24gZmxleC1maWxsIGdsYi1tYXgtaGVpZ2h0LTM1MHB4XCI+XHJcblxyXG4gICA8IS0tIEVzdGUgZWxlbWVudG8gbmctY29udGVudCBjb20gbyBhdHJpYnV0byBbYnRuTGVmdF0gcGVybWl0ZSBxdWUgbyB1c3XDoXJpbyBmaW5hbCBmb3JuZcOnYSBjb250ZcO6ZG8gcGVyc29uYWxpemFkbyBwYXJhIHNlciBleGliaWRvIG5vIGxhZG8gZXNxdWVyZG8gZG8gY29tYm9ib3ggZGUgcGVzcXVpc2EuXHJcbiAgIEFvIHVzYXIgbyBhdHJpYnV0byBbYnRuTGVmdF0sIG8gdXN1w6FyaW8gcG9kZSBmYWNpbG1lbnRlIGFkaWNpb25hciBib3TDtWVzIG91IG91dHJvcyBlbGVtZW50b3MgcGFyYSBtZWxob3JhciBhIGZ1bmNpb25hbGlkYWRlIG91IGFwYXLDqm5jaWEgZG8gY29tYm9ib3ggZGUgcGVzcXVpc2EuIC0tPlxyXG4gICA8bmctY29udGVudCBzZWxlY3Q9XCJbYnRuTGVmdF1cIj48L25nLWNvbnRlbnQ+XHJcblxyXG4gICA8aW5wdXQgICNtYWluSW5wdXQgY2xhc3M9XCJmb3JtLXNlbGVjdCB0ZXh0LXN0YXJ0IHJvdW5kZWQtZW5kXCIgdHlwZT1cInRleHRcIiBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCIgW3BsYWNlaG9sZGVyXT1cIm1haW5JbnB1dFBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImlubmVyQ29udHJvbFwiIGRhdGEtYnMtYXV0by1jbG9zZT1cIm91dHNpZGVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiByZWFkb25seSBbY2xhc3MuaXMtaW52YWxpZF09XCJpbnZhbGlkQ29udHJvbFwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJhcmlhRXhwYW5kZWQgPSAhYXJpYUV4cGFuZGVkOyBzZWFyY2hJbnB1dC5mb2N1cygpXCIgKGZvY3VzKT1cInNlYXJjaElucHV0LmZvY3VzKClcIj5cclxuXHJcbiAgIDx1bCAgI2Ryb3Bkb3duTWVudSAgY2xhc3M9XCJkcm9wZG93bi1tZW51IHAtMiBnbGItbWF4LWhlaWdodC0zNTBweCBvdmVyZmxvdy15LXNjcm9sbCB6LWluZGV4LTEwMjBcIiBbY2xhc3Muc2hvd109XCJhcmlhRXhwYW5kZWRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTJcIj5cclxuICAgICAgICAgPGlucHV0ICNzZWFyY2hJbnB1dCAoaW5wdXQpPVwidGV4dG9QZXNxdWlzYSA9IHNlYXJjaElucHV0LnZhbHVlXCIgdHlwZT1cInRleHRcIiBpZD1cInNlYXJjaElucHV0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZ2xiLWlucHV0LW5vLWdsb3dcIiBbcGxhY2Vob2xkZXJdPVwic2VhcmNoSW5wdXRQbGFjZWhvbGRlclwiIChrZXl1cC5lbnRlcik9XCJyZWxvYWRMaXN0KClcIj5cclxuICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4te3tjb2xvclRoZW1lfX1cIiAoY2xpY2spPVwicmVsb2FkTGlzdCgpXCI+IDxhcHAtc3ZnLXN0b3JhZ2Ugc3ZnTmFtZT1cImx1cGFcIiBzdmdTaXplPVwibWVkaXVtLXNtYWxsXCIgLz4gPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgQGlmIChjb21ib2JveExpc3QpIHtcclxuICAgICAgICAgPGxpICpuZ0lmPVwiaW5uZXJDb250cm9sLnZhbHVlICE9ICcnICYmIGlubmVyQ29udHJvbC52YWx1ZSAhPSBudWxsXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgKGNsaWNrKT1cImNsZWFyVmFsdWUoKVwiPiA8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5MaW1wYXIgb3DDp8OjbyBzZWxlY2lvbmFkYTwvc3Bhbj4gPC9saT5cclxuICAgICAgICAgQGZvciAoaXRlbSBvZiBjb21ib2JveExpc3QgfCB0ZXh0RmlsdGVyOnRleHRvUGVzcXVpc2E7IHRyYWNrICRpbmRleCkge1xyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgKGNsaWNrKT1cInNldFZhbHVlKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXRlbS5BZGRpdGlvbmFsU3RyaW5nUHJvcGVydHkxIHx8IGl0ZW0uQWRkaXRpb25hbFN0cmluZ1Byb3BlcnR5MSAhPSAnJ1wiIGNsYXNzPVwiZ2xiLWZzLTEyIGZ3LWJvbGQgZC1pbmxpbmUtYmxvY2sgdy0xMjVcIj57eyBpdGVtLkFkZGl0aW9uYWxTdHJpbmdQcm9wZXJ0eTEgfX08L3NwYW4+IHt7IGl0ZW0uTEFCRUwgfX1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgfVxyXG4gICAgICAgICBAZW1wdHkgeyA8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGZzdC1pdGFsaWNcIj5OZW5odW0gcmVnaXN0cm8gZW5jb250cmFkbyBjb20gZXN0YSBwZXNxdWlzYS4uLjwvbGk+IH1cclxuICAgICAgfVxyXG4gICAgICBAZWxzZSB7IDxsaSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gdGV4dC1jZW50ZXJcIj4gPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPjxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+Q2FycmVnYW5kbyBkYWRvcy4uLjwvc3Bhbj48L2Rpdj4gPC9saT4gfVxyXG4gICA8L3VsPlxyXG5cclxuICAgPCEtLSBFc3RlIGVsZW1lbnRvIG5nLWNvbnRlbnQgY29tIG8gYXRyaWJ1dG8gW2J0blJpZ2h0XSBwZXJtaXRlIHF1ZSBvIHVzdcOhcmlvIGZpbmFsIGZvcm5lw6dhIGNvbnRlw7pkbyBwZXJzb25hbGl6YWRvIHBhcmEgc2VyIGV4aWJpZG8gbm8gbGFkbyBkaXJlaXRvIGRvIGNvbWJvYm94IGRlIHBlc3F1aXNhLlxyXG4gICBBbyB1c2FyIG8gYXRyaWJ1dG8gW2J0blJpZ2h0XSwgbyB1c3XDoXJpbyBwb2RlIGZhY2lsbWVudGUgYWRpY2lvbmFyIGJvdMO1ZXMgb3Ugb3V0cm9zIGVsZW1lbnRvcyBwYXJhIG1lbGhvcmFyIGEgZnVuY2lvbmFsaWRhZGUgb3UgYXBhcsOqbmNpYSBkbyBjb21ib2JveCBkZSBwZXNxdWlzYS4gLS0+XHJcbiAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltidG5SaWdodF1cIj48L25nLWNvbnRlbnQ+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwhLS0gI3JlZ2lvbiBNRU5TQUdFTSBERSBFUlJPIERFIFZBTElEQcOHw4NPIC0tPlxyXG48YXBwLWZpZWxkLWVycm9yLW1lc3NhZ2UgKm5nSWY9XCJpbnZhbGlkQ29udHJvbFwiIGN1c3RvbU1lc3NhZ2U9XCJFc3RlIGNhbXBvIMOpIG9icmlnYXTDs3Jpby5cIiAvPlxyXG48IS0tICNlbmRyZWdpb24gTUVOU0FHRU0gREUgRVJSTyBERSBWQUxJREHDh8ODTyAtLT5cclxuIl19
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: LibComboboxComponent, selector: "lib-combobox", inputs: { outerControl: ["control", "outerControl"], comboboxList: ["list", "comboboxList"], labelText: "labelText", libRequired: "libRequired", disabled: "disabled", mainInputPlaceholder: ["mainPlaceholder", "mainInputPlaceholder"], searchInputPlaceholder: ["searchPlaceholder", "searchInputPlaceholder"], colorTheme: ["theme", "colorTheme"], returnRecord: "returnRecord" }, outputs: { onReloadList: "onReloadList", onChange: "onChange" }, host: { listeners: { "window:resize": "onResize($event)" } }, viewQueries: [{ propertyName: "_mainInput", first: true, predicate: ["mainInput"], descendants: true }, { propertyName: "_dropdownMenu", first: true, predicate: ["dropdownMenu"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<label *ngIf=\"labelText && labelText != ''\" [libRequired]=\"isRequired\" class=\"form-label fw-bold\">{{ labelText }}</label>\n<div class=\"input-group dropdown flex-fill glb-max-height-350px\">\n\n   <!-- Este elemento ng-content com o atributo [btnLeft] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado esquerdo do combobox de pesquisa.\n   Ao usar o atributo [btnLeft], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\n   <ng-content select=\"[btnLeft]\"></ng-content>\n\n   <input  #mainInput class=\"form-select text-start rounded-end\" type=\"text\" data-bs-toggle=\"dropdown\" [placeholder]=\"mainInputPlaceholder\"\n            [formControl]=\"innerControl\" data-bs-auto-close=\"outside\" aria-expanded=\"false\" readonly [class.is-invalid]=\"invalidControl\"\n            (click)=\"ariaExpanded = !ariaExpanded; searchInput.focus()\" (focus)=\"searchInput.focus()\">\n\n   <ul  #dropdownMenu  class=\"dropdown-menu p-2 glb-max-height-350px overflow-y-scroll z-index-1020\" [class.show]=\"ariaExpanded\">\n      <div class=\"input-group mb-2\">\n         <input #searchInput (input)=\"textoPesquisa = searchInput.value\" type=\"text\" id=\"searchInput\" class=\"form-control glb-input-no-glow\" [placeholder]=\"searchInputPlaceholder\" (keyup.enter)=\"reloadList()\">\n         <button class=\"btn btn-{{colorTheme}}\" (click)=\"reloadList()\"> <app-svg-storage svgName=\"lupa\" svgSize=\"medium-small\" /> </button>\n      </div>\n\n      @if (comboboxList) {\n         <li *ngIf=\"innerControl.value != '' && innerControl.value != null\" class=\"dropdown-item\" (click)=\"clearValue()\"> <span class=\"fw-bold\">Limpar op\u00E7\u00E3o selecionada</span> </li>\n         @for (item of comboboxList | textFilter:textoPesquisa; track $index) {\n            <li class=\"dropdown-item\" (click)=\"setValue(item)\">\n               <span *ngIf=\"item.AdditionalStringProperty1 || item.AdditionalStringProperty1 != ''\" class=\"glb-fs-12 fw-bold d-inline-block w-125\">{{ item.AdditionalStringProperty1 }}</span> {{ item.LABEL }}\n            </li>\n         }\n         @empty { <li class=\"dropdown-item fst-italic\">Nenhum registro encontrado com esta pesquisa...</li> }\n      }\n      @else { <li class=\"dropdown-item text-center\"> <div class=\"spinner-border\" role=\"status\"><span class=\"visually-hidden\">Carregando dados...</span></div> </li> }\n   </ul>\n\n   <!-- Este elemento ng-content com o atributo [btnRight] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado direito do combobox de pesquisa.\n   Ao usar o atributo [btnRight], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\n   <ng-content select=\"[btnRight]\"></ng-content>\n\n</div>\n\n<!-- #region MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\n<app-field-error-message *ngIf=\"invalidControl\" customMessage=\"Este campo \u00E9 obrigat\u00F3rio.\" />\n<!-- #endregion MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\n", styles: [".glb-max-height-350px{max-height:350px!important}.form-label{font-size:16px!important}.z-index-1020{z-index:1020!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.FieldErrorMessageComponent, selector: "app-field-error-message", inputs: ["customMessage", "control", "label"] }, { kind: "component", type: i4.SvgStorageComponent, selector: "app-svg-storage", inputs: ["svgName", "svgColor", "svgFill", "svgSize", "svgStrokeWidth"] }, { kind: "directive", type: i5.RequiredDirective, selector: "label[libRequired], span[libRequired], p[libRequired]", inputs: ["libRequired", "sisID"] }, { kind: "pipe", type: i6.TextFilterPipe, name: "textFilter" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LibComboboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-combobox', template: "<label *ngIf=\"labelText && labelText != ''\" [libRequired]=\"isRequired\" class=\"form-label fw-bold\">{{ labelText }}</label>\n<div class=\"input-group dropdown flex-fill glb-max-height-350px\">\n\n   <!-- Este elemento ng-content com o atributo [btnLeft] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado esquerdo do combobox de pesquisa.\n   Ao usar o atributo [btnLeft], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\n   <ng-content select=\"[btnLeft]\"></ng-content>\n\n   <input  #mainInput class=\"form-select text-start rounded-end\" type=\"text\" data-bs-toggle=\"dropdown\" [placeholder]=\"mainInputPlaceholder\"\n            [formControl]=\"innerControl\" data-bs-auto-close=\"outside\" aria-expanded=\"false\" readonly [class.is-invalid]=\"invalidControl\"\n            (click)=\"ariaExpanded = !ariaExpanded; searchInput.focus()\" (focus)=\"searchInput.focus()\">\n\n   <ul  #dropdownMenu  class=\"dropdown-menu p-2 glb-max-height-350px overflow-y-scroll z-index-1020\" [class.show]=\"ariaExpanded\">\n      <div class=\"input-group mb-2\">\n         <input #searchInput (input)=\"textoPesquisa = searchInput.value\" type=\"text\" id=\"searchInput\" class=\"form-control glb-input-no-glow\" [placeholder]=\"searchInputPlaceholder\" (keyup.enter)=\"reloadList()\">\n         <button class=\"btn btn-{{colorTheme}}\" (click)=\"reloadList()\"> <app-svg-storage svgName=\"lupa\" svgSize=\"medium-small\" /> </button>\n      </div>\n\n      @if (comboboxList) {\n         <li *ngIf=\"innerControl.value != '' && innerControl.value != null\" class=\"dropdown-item\" (click)=\"clearValue()\"> <span class=\"fw-bold\">Limpar op\u00E7\u00E3o selecionada</span> </li>\n         @for (item of comboboxList | textFilter:textoPesquisa; track $index) {\n            <li class=\"dropdown-item\" (click)=\"setValue(item)\">\n               <span *ngIf=\"item.AdditionalStringProperty1 || item.AdditionalStringProperty1 != ''\" class=\"glb-fs-12 fw-bold d-inline-block w-125\">{{ item.AdditionalStringProperty1 }}</span> {{ item.LABEL }}\n            </li>\n         }\n         @empty { <li class=\"dropdown-item fst-italic\">Nenhum registro encontrado com esta pesquisa...</li> }\n      }\n      @else { <li class=\"dropdown-item text-center\"> <div class=\"spinner-border\" role=\"status\"><span class=\"visually-hidden\">Carregando dados...</span></div> </li> }\n   </ul>\n\n   <!-- Este elemento ng-content com o atributo [btnRight] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado direito do combobox de pesquisa.\n   Ao usar o atributo [btnRight], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\n   <ng-content select=\"[btnRight]\"></ng-content>\n\n</div>\n\n<!-- #region MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\n<app-field-error-message *ngIf=\"invalidControl\" customMessage=\"Este campo \u00E9 obrigat\u00F3rio.\" />\n<!-- #endregion MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\n", styles: [".glb-max-height-350px{max-height:350px!important}.form-label{font-size:16px!important}.z-index-1020{z-index:1020!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWNvbWJvYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvbGliLWNvbWJvYm94L2xpYi1jb21ib2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2xpYi1jb21ib2JveC9saWItY29tYm9ib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdKLE9BQU8sRUFBbUIsV0FBVyxFQUFxQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7OztBQUlwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQU1ILE1BQU0sT0FBTyxvQkFBb0I7SUFPL0IsSUFBYyxZQUFZLEtBQWMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNwRSxJQUFjLFlBQVksQ0FBQyxLQUFjLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBaUIxRSxxQkFBcUI7SUFFckIsaUJBQWlCO0lBRWpCOzt5REFFcUQ7SUFDckQsSUFDVyxZQUFZLEtBQXVCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQSxDQUFDLENBQUM7SUFDekUsSUFBVyxZQUFZLENBQUMsS0FBOEM7UUFDcEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFvQixDQUFDO1FBRTFDLDhFQUE4RTtRQUM5RSxJQUFJLElBQUksQ0FBQyxhQUFhO1lBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV6RCx3RUFBd0U7UUFDeEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9HLENBQUM7SUFpQkQ7O3dCQUVvQjtJQUNwQixJQUNXLFFBQVEsS0FBYyxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsRSxJQUFXLFFBQVEsQ0FBQyxLQUEwQjtRQUM1QyxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSTtZQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7O1lBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFaEMsMEJBQTBCO0lBQzVCLENBQUM7SUEyQ0Qsb0JBQW9CO0lBRXBCLGdEQUFnRDtJQUdoRCxpREFBaUQ7SUFDakQ7UUFySEEsNkNBQTZDO1FBRTdDLG9CQUFvQjtRQUNWLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBSzNCLGlCQUFZLEdBQWdCLElBQUksV0FBVyxDQUF5QixJQUFJLENBQUMsQ0FBQztRQUMxRSxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ25DLHVCQUF1QjtRQUV2QixrQkFBa0I7UUFDVixjQUFTLEdBQWEsS0FBSyxDQUFDO1FBQzVCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGtCQUFhLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakQsa0JBQWEsR0FBZ0IsSUFBSSxXQUFXLENBQXlCLElBQUksQ0FBQyxDQUFDO1FBOEJuRjs7OzRCQUdvQjtRQUNKLGdCQUFXLEdBQWEsS0FBSyxDQUFDO1FBYzlDOzs7K0NBR3VDO1FBQ04seUJBQW9CLEdBQVksd0JBQXdCLENBQUM7UUFFMUY7OztvQ0FHNEI7UUFDTywyQkFBc0IsR0FBWSxhQUFhLENBQUM7UUFFbkY7Ozs7VUFJRTtRQUNxQixlQUFVLEdBQVksU0FBUyxDQUFDO1FBRXZEOzs7VUFHRTtRQUNjLGlCQUFZLEdBQWEsS0FBSyxDQUFDO1FBRS9DOzs7MENBR2tDO1FBQ2pCLGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHakY7OzswREFHa0Q7UUFDakMsYUFBUSxHQUEwRCxJQUFJLFlBQVksRUFBMkMsQ0FBQztJQVcvSCxDQUFDO0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLFlBQVk7WUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN0RSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxZQUFZO1lBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUE0QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25JLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsMkRBQTJEO0lBRTNELFFBQVEsQ0FBQyxLQUFZLElBQVUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUEsQ0FBQyxDQUFDO0lBQzNELG9EQUFvRDtJQUdwRCx3Q0FBd0M7SUFDakMsUUFBUSxDQUFDLElBQW9CO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVqQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQXNCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRU0sVUFBVTtRQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVqQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU8sbUJBQW1CLENBQUMsS0FBOEI7UUFDeEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx3Q0FBd0M7UUFDMUUsTUFBTSxhQUFhLEdBQTJCLEtBQUssSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUVoRixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLElBQUksYUFBYSxLQUFLLEVBQUUsQ0FBQztZQUFFLE9BQU87UUFFbkYsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssYUFBYSxDQUFDLENBQUE7UUFDbEYsSUFBSSxnQkFBZ0I7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6RSxvREFBb0Q7SUFDdEQsQ0FBQztJQUVPLG1CQUFtQjtRQUN6QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzFDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztZQUM3RCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsVUFBVSxJQUFJLENBQUM7UUFDbkUsQ0FBQztJQUNILENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUM7YUFDSSxDQUFDO1lBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxVQUE2QjtRQUNwRCxRQUFPLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDM0IsTUFBTTtZQUVSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDM0IsTUFBTTtZQUVSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDM0IsTUFBTTtZQUVSLEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDNUIsTUFBTTtRQUVWLENBQUM7SUFDSCxDQUFDO0lBRU0sVUFBVSxLQUFXLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQSxDQUFDLENBQUM7K0dBdk83RCxvQkFBb0I7bUdBQXBCLG9CQUFvQix5d0JDekNqQyxpb0dBc0NBOzs0RkRHYSxvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0UsY0FBYzt3REFxQ2IsWUFBWTtzQkFEdEIsS0FBSzt1QkFBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtnQkFnQk0sWUFBWTtzQkFBNUQsS0FBSzt1QkFBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtnQkFJeEIsU0FBUztzQkFBeEIsS0FBSztnQkFNVSxXQUFXO3NCQUExQixLQUFLO2dCQU1LLFFBQVE7c0JBRGxCLEtBQUs7Z0JBYTJCLG9CQUFvQjtzQkFBcEQsS0FBSzt1QkFBQyxpQkFBaUI7Z0JBTVcsc0JBQXNCO3NCQUF4RCxLQUFLO3VCQUFDLG1CQUFtQjtnQkFPSCxVQUFVO3NCQUFoQyxLQUFLO3VCQUFDLE9BQU87Z0JBTUUsWUFBWTtzQkFBM0IsS0FBSztnQkFNVyxZQUFZO3NCQUE1QixNQUFNO2dCQU9VLFFBQVE7c0JBQXhCLE1BQU07Z0JBR3lCLFVBQVU7c0JBQXpDLFNBQVM7dUJBQUMsV0FBVztnQkFDYSxhQUFhO3NCQUEvQyxTQUFTO3VCQUFDLGNBQWM7Z0JBK0J6QixRQUFRO3NCQURQLFlBQVk7dUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbCwgRm9ybUNvbnRyb2xTdGF0dXMsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBSZWNvcmRDb21ib2JveCB9IGZyb20gJy4uLy4uL21vZGVscy9jb21ib2JveC9yZWNvcmQtY29tYm9ib3gnO1xuXG4vKipcbiAqIEBjb21wb25lbnQgTGliQ29tYm9ib3hDb21wb25lbnRcbiAqIEBzZWxlY3RvciBsaWItY29tYm9ib3hcbiAqIFxuICogQGRlc2NyaXB0aW9uXG4gKiBPIGNvbXBvbmVudGUgTGliQ29tYm9ib3hDb21wb25lbnQgw6kgcHJvamV0YWRvIHBhcmEgZm9ybmVjZXIgYW9zIHVzdcOhcmlvcyB1bWEgaW50ZXJmYWNlIHBhcmEgcGVzcXVpc2FyIGUgc2VsZWNpb25hciBpdGVucyBkZSB1bWEgbGlzdGEuXG4gKiBFbGUgc3Vwb3J0YSBhIGZpbHRyYWdlbSBkZSBpdGVucyBjb20gYmFzZSBuYSBlbnRyYWRhIGRvIHVzdcOhcmlvLCBwZXJtaXRpbmRvIHVtYSBzZWxlw6fDo28gbWFpcyBmw6FjaWwgZW0gbGlzdGFzIGV4dGVuc2FzLlxuICogXG4gKiAjIyBGdW5jaW9uYWxpZGFkZXM6XG4gKiAtIFBlc3F1aXNhIGUgZmlsdHJhZ2VtIGRlIGl0ZW5zIG5hIGxpc3RhIGRvIGNvbWJvYm94LlxuICogLSBTZWxlw6fDo28gZGUgaXRlbnMgY29tIGZlZWRiYWNrIHZpc3VhbC5cbiAqIC0gRW1pc3PDo28gZGUgZXZlbnRvcyBwZXJzb25hbGl6YWRvcyBwYXJhIGludGVyYcOnw7VlcyBkbyB1c3XDoXJpbywgY29tbyByZWNhcnJlZ2FyIGEgbGlzdGEgb3Ugc2VsZWNpb25hciB1bSBpdGVtLlxuICogLSBBanVzdGUgZGluw6JtaWNvIGRhIGxhcmd1cmEgZG8gZHJvcGRvd24gcGFyYSBjb3JyZXNwb25kZXIgYW8gaW5wdXQgcHJpbmNpcGFsLlxuICogLSBJbmljaWFsaXphw6fDo28gZGUgdW0gdmFsb3Igc2VsZWNpb25hZG8sIHNlIGZvcm5lY2lkby5cbiAqIFxuICogIyMgSW5wdXRzOlxuICogLSBgb3V0ZXJDb250cm9sYCAoRm9ybUNvbnRyb2wgfCBBYnN0cmFjdENvbnRyb2wpOiBDb250cm9sIHBhcmEgc2VsZcOnw6NvIGRvcyB2YWxvcmVzLCBhdHVhbGl6YXLDoSBhdXRvbWF0aWNhbWVudGUgbyBjb250cm9sIGRvIGNvbXBvbmVudGUgcGFpIHRhbWLDqW1cbiAqIC0gYGNvbWJvYm94TGlzdGAgKFJlY29yZENvbWJvYm94W10pOiBMaXN0YSBkZSByZWdpc3Ryb3MgcXVlIHNlcsOjbyBleGliaWRvcyBubyBjb21ibywgZW5xdWFudG8gZWxlcyBlc3RpdmVyZW0gY2FycmVnYW5kbyBzZXLDoSBleGliaWRvIHVtIHNwaW5uZXJcbiAqIC0gYGxhYmVsVGV4dGAgKHN0cmluZyk6IFRleHRvIGRvIHLDs3R1bG8gcXVlIHNlcsOhIGV4aWJpZG8gYWNpbWEgZG8gY29tYm8uIENhc28gbsOjbyBpbmZvcm1hZG8gbmFkYSBzZXLDoSBleGliaWRvXG4gKiAtIGBkaXNhYmxlZGAgKGJvb2xlYW4pOiBEZWZpbmUgc2UgbyBjYW1wbyBlc3TDoSBkZXNhYmlsaXRhZG8uIERldmUgc2VyIHVzYWRvIHBhcmEgdmFsaWRhw6fDtWVzIGRlIGhhYmlsaXRhw6fDo28gZGluw6JtaWNhIGRvIGNhbXBvXG4gKiAtIGBsaWJSZXF1aXJlZGAgKGJvb2xlYW4pOiBEZWZpbmUgc2UgbyBjYW1wbyDDqSBvYnJpZ2F0w7NyaW8sIHZhaSBleGliaXIgbyAnKicgdmVybWVsaG8gYW8gbGFkbyBkbyBsYWJlbCAoc2UgZWxlIGVzdGl2ZXIgcHJlc2VudGUpXG4gKiAtIGBtYWluSW5wdXRQbGFjZWhvbGRlcmAgKHN0cmluZyk6IFBsYWNlaG9sZGVyIGRvIGNhbXBvIHByaW5jaXBhbCBkbyBjb21ib1xuICogLSBgc2VhcmNoSW5wdXRQbGFjZWhvbGRlcmAgKHN0cmluZyk6IFBsYWNlaG9sZGVyIGRvIGNhbXBvIGRlIHBlc3F1aXNhIGRlbnRybyBkbyBjb21ib1xuICogLSBgY29sb3JUaGVtZWAgKFwicHJpbWFyeVwiIHwgXCJzZWNvbmRhcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJkYW5nZXJcIiB8IFwid2FybmluZ1wiIHwgXCJpbmZvXCIgfCBcImxpZ2h0XCIgfCBcImRhcmtcIik6IERlZmluZSBvIHRlbWEgZGUgY29yIGRvIGNvbXBvbmVudGUsIGNvbW8gXCJwcmltYXJ5XCIsIFwic3VjY2Vzc1wiLCBvdSBcImRhbmdlclwiXG4gKiAtIGByZXR1cm5SZWNvcmRgIChib29sZWFuKTogRGVmaW5lIHNlIG8gdGlwbyBkZSByZXRvcm5vIGFvIHNlbGVjaW9uYXIgdW1hIG9ww6fDo28gc2Vyw6EgbyBSZWNvcmQgaW50ZWlybyBvdSBhcGVuYXMgbyBJRFxuICogXG4gKiAjIyBPdXRwdXRzOlxuICogLSBgb25SZWxvYWRMaXN0YCAoRXZlbnRFbWl0dGVyPHN0cmluZz4pOiBFdmVudG8gZW1pdGlkbyBxdWFuZG8gYSBsaXN0YSBwcmVjaXNhIHNlciByZWNhcnJlZ2FkYS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvbWJvYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpYi1jb21ib2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9saWItY29tYm9ib3guY29tcG9uZW50LnNjc3MnXG59KVxuZXhwb3J0IGNsYXNzIExpYkNvbWJvYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gUFJPUEVSVElFUyA8PT09PT09PT09PVxuXG4gIC8vICNyZWdpb24gUFJPVEVDVEVEXG4gIHByb3RlY3RlZCB0ZXh0b1Blc3F1aXNhOiBzdHJpbmcgPSBcIlwiO1xuXG4gIHByb3RlY3RlZCBnZXQgYXJpYUV4cGFuZGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fYXJpYUV4cGFuZGVkOyB9XG4gIHByb3RlY3RlZCBzZXQgYXJpYUV4cGFuZGVkKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2FyaWFFeHBhbmRlZCA9IHZhbHVlOyB9XG5cbiAgcHJvdGVjdGVkIGlubmVyQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2w8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gIHByb3RlY3RlZCBpbnZhbGlkQ29udHJvbDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgaXNSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBpbnZhbGlkOiBib29sZWFuID0gZmFsc2U7XG4gIHByb3RlY3RlZCBkaXJ0eTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgdG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyAjZW5kcmVnaW9uIFBST1RFQ1RFRFxuXG4gIC8vICNyZWdpb24gUFJJVkFURVxuICBwcml2YXRlIF9kaXNhYmxlZD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYXJpYUV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHByaXZhdGUgX291dGVyQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2w8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gIC8vICNlbmRyZWdpb24gUFJJVkFURVxuXG4gIC8vICNyZWdpb24gUFVCTElDXG5cbiAgLyoqIChvYnJpZ2F0w7NyaW8pIENvbnRyb2wgcGFyYSBzZWxlw6fDo28gZG9zIHZhbG9yZXMsIGF0dWFsaXphcsOhIGF1dG9tYXRpY2FtZW50ZSBvIGNvbnRyb2wgZG8gY29tcG9uZW50ZSBwYWkgdGFtYsOpbVxuICAgKiBAYWxpYXMgJ2NvbnRyb2wnXG4gICAqIEB0eXBlIHtGb3JtQ29udHJvbDxhbnk+IHwgQWJzdHJhY3RDb250cm9sPGFueT59ICovXG4gIEBJbnB1dCh7IGFsaWFzOiAnY29udHJvbCcsIHJlcXVpcmVkOiB0cnVlIH0pXG4gIHB1YmxpYyBnZXQgb3V0ZXJDb250cm9sKCk6IEZvcm1Db250cm9sPGFueT4geyByZXR1cm4gdGhpcy5fb3V0ZXJDb250cm9sIH1cbiAgcHVibGljIHNldCBvdXRlckNvbnRyb2wodmFsdWU6IEZvcm1Db250cm9sPGFueT4gfCBBYnN0cmFjdENvbnRyb2w8YW55Pikge1xuICAgIHRoaXMuX291dGVyQ29udHJvbCA9IHZhbHVlIGFzIEZvcm1Db250cm9sO1xuXG4gICAgLy8gQ2FuY2VsYSBhIHN1YnNjcmnDp8OjbyBhbnRlcmlvciAoc2UgaG91dmVyKSBwYXJhIGV2aXRhciBtw7psdGlwbGFzIHN1YnNjcmnDp8O1ZXNcbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9uKSB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuICAgIC8vIFN1YnNjcmnDp8OjbyBhbyBvYnNlcnbDoXZlbCB2YWx1ZUNoYW5nZXMgcGFyYSByZWFnaXIgYSBtdWRhbsOnYXMgbm8gdmFsb3JcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9vdXRlckNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7IHRoaXMudXBkYXRlU2VsZWN0ZWRWYWx1ZSh2YWx1ZSkgfSk7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5fb3V0ZXJDb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHN0YXR1cyA9PiB7IHRoaXMuc2V0Q29udHJvbFN0YXR1cyhzdGF0dXMpIH0pO1xuICB9XG5cbiAgLyoqIChvYnJpZ2F0w7NyaW8pIExpc3RhIGRlIHJlZ2lzdHJvcyBxdWUgc2Vyw6NvIGV4aWJpZG9zIG5vIGNvbWJvLCBlbnF1YW50byBlbGVzIGVzdGl2ZXJlbSBjYXJyZWdhbmRvIHNlcsOhIGV4aWJpZG8gdW0gc3Bpbm5lclxuICAgKiBAYWxpYXMgJ2xpc3QnXG4gICAqIEB0eXBlIHtSZWNvcmRDb21ib2JveFtdfSAqL1xuICBASW5wdXQoeyBhbGlhczogJ2xpc3QnLCByZXF1aXJlZDogdHJ1ZSB9KSBwdWJsaWMgY29tYm9ib3hMaXN0PzogUmVjb3JkQ29tYm9ib3hbXTtcblxuICAvKiogKG9wY2lvbmFsKSBUZXh0byBkbyByw7N0dWxvIHF1ZSBzZXLDoSBleGliaWRvIGFjaW1hIGRvIGNvbWJvLiBDYXNvIG7Do28gaW5mb3JtYWRvIG5hZGEgc2Vyw6EgZXhpYmlkb1xuICAgKiBAdHlwZSB7c3RyaW5nfSAqL1xuICBASW5wdXQoKSBwdWJsaWMgbGFiZWxUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKiAob3BjaW9uYWwpIERlZmluZSBzZSBvIGNhbXBvIMOpIG9icmlnYXTDs3JpbywgdmFpIGV4aWJpciBvICcqJyB2ZXJtZWxobyBhbyBsYWRvIGRvIGxhYmVsIChzZSBlbGUgZXN0aXZlciBwcmVzZW50ZSlcbiAgICogISBTRVLDgSBERVBSRUNJQURPIEVNIEJSRVZFXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZSAqL1xuICBASW5wdXQoKSBwdWJsaWMgbGliUmVxdWlyZWQ/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIChvcGNpb25hbCkgRGVmaW5lIHNlIG8gY2FtcG8gZXN0w6EgZGVzYWJpbGl0YWRvLiBEZXZlIHNlciB1c2FkbyBwYXJhIHZhbGlkYcOnw7VlcyBkZSBoYWJpbGl0YcOnw6NvIGRpbsOibWljYSBkbyBjYW1wb1xuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2UgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkID8/IGZhbHNlOyB9XG4gIHB1YmxpYyBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUgPT09IHRydWUpIHRoaXMuaW5uZXJDb250cm9sLmRpc2FibGUoKTtcbiAgICBlbHNlIHRoaXMuaW5uZXJDb250cm9sLmVuYWJsZSgpO1xuXG4gICAgLy90aGlzLnNldENvbnRyb2xTdGF0dXMoKTtcbiAgfVxuXG4gIC8qKiAob3BjaW9uYWwpIFBsYWNlaG9sZGVyIGRvIGNhbXBvIHByaW5jaXBhbCBkbyBjb21ib1xuICAgKiBAYWxpYXMgJ21haW5QbGFjZWhvbGRlcidcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgXCJTZWxlY2lvbmUgdW1hIG9ww6fDo28uLi5cIiAqL1xuICBASW5wdXQoJ21haW5QbGFjZWhvbGRlcicpIHB1YmxpYyBtYWluSW5wdXRQbGFjZWhvbGRlcj86IHN0cmluZyA9IFwiU2VsZWNpb25lIHVtYSBvcMOnw6NvLi4uXCI7XG5cbiAgLyoqIChvcGNpb25hbCkgUGxhY2Vob2xkZXIgZG8gY2FtcG8gZGUgcGVzcXVpc2EgZGVudHJvIGRvIGNvbWJvXG4gICAqIEBhbGlhcyAnc2VhcmNoUGxhY2Vob2xkZXInXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0IFwiUGVzcXVpc2EuLi5cIiAqL1xuICBASW5wdXQoJ3NlYXJjaFBsYWNlaG9sZGVyJykgcHVibGljIHNlYXJjaElucHV0UGxhY2Vob2xkZXI/OiBzdHJpbmcgPSBcIlBlc3F1aXNhLi4uXCI7XG5cbiAgLyoqIChvcGNpb25hbCkgRGVmaW5lIG8gdGVtYSBkZSBjb3IgZG8gY29tcG9uZW50ZSwgY29tbyBcInByaW1hcnlcIiwgXCJzdWNjZXNzXCIsIG91IFwiZGFuZ2VyXCJcbiAgICogQGFsaWFzICd0aGVtZSdcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgXCJwcmltYXJ5XCJcbiAgKi9cbiAgQElucHV0KCd0aGVtZScpIHB1YmxpYyBjb2xvclRoZW1lPzogc3RyaW5nID0gXCJwcmltYXJ5XCI7XG5cbiAgLyoqIChvcGNpb25hbCkgRGVmaW5lIHNlIG8gdGlwbyBkZSByZXRvcm5vIGFvIHNlbGVjaW9uYXIgdW1hIG9ww6fDo28gc2Vyw6EgbyBSZWNvcmQgaW50ZWlybyBvdSBhcGVuYXMgbyBJRC5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICovXG4gIEBJbnB1dCgpIHB1YmxpYyByZXR1cm5SZWNvcmQ/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIEV2ZW50byBlbWl0aWRvIGFvIHJlY2FycmVnYXIgYSBsaXN0YSBkZSByZWdpc3Ryb3NcbiAgICogQGV4YW1wbGUgQW8gc2VyIGVtaXRpZG8sIG8gY29tcG9uZW50ZSBwYWkgcG9kZSByZWZhemVyIG8gR0VUIGRhIGxpc3RhLCBwb3IgZXhlbXBsby5cbiAgICogQGVtaXRzIEV2ZW50RW1pdHRlcjxzdHJpbmc+IHF1ZSBsZXZhIG8gdmFsb3Igc3RyaW5nIGRhIHBlc3F1aXNhIGZlaXRhIHBhcmEgc2VyIGVudmlhZGEgcGFyYSBvIEdFVFxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPHN0cmluZz59ICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25SZWxvYWRMaXN0OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cbiAgLyoqIEV2ZW50byBlbWl0aWRvIGFvIHNlbGVjaW9uYXIgdW0gcmVnaXN0cm8gZGEgbGlzdGEgZG8gY29tYm9ib3hcbiAgICogQGV4YW1wbGUgQW8gc2VyIGVtaXRpZG8sIG8gY29tcG9uZW50ZSBwYWkgcG9kZSByZWFsaXphciB1bWEgdmFsaWRhw6fDo28gY29tIG8gdmFsb3Igc2VsZWNpb25hZG8uXG4gICAqIEBlbWl0cyBFdmVudEVtaXR0ZXI8c3RyaW5nfG51bWJlcnxudWxsPiBxdWUgbGV2YSBvIHZhbG9yIHN0cmluZyBkYSBwZXNxdWlzYSBmZWl0YSBwYXJhIHNlciBlbnZpYWRhIHBhcmEgbyBHRVRcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXIgfCBudWxsPn0gKi9cbiAgQE91dHB1dCgpIHB1YmxpYyBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPFJlY29yZENvbWJvYm94IHwgc3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPFJlY29yZENvbWJvYm94IHwgc3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oKTtcbiAgXG5cbiAgQFZpZXdDaGlsZCgnbWFpbklucHV0JykgcHJpdmF0ZSBfbWFpbklucHV0ITogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25NZW51JykgcHJpdmF0ZSBfZHJvcGRvd25NZW51ITogRWxlbWVudFJlZjtcbiAgLy8gI2VuZHJlZ2lvbiBQVUJMSUNcblxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IFBST1BFUlRJRVMgPD09PT09PT09PT1cblxuXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gSU5JVElBTElaQVRJT04gPD09PT09PT09PT1cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkanVzdERyb3Bkb3duV2lkdGgoKTtcblxuICAgIHRoaXMuc2V0VmFsaWRhdG9yKCk7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZFZhbHVlKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGp1c3REcm9wZG93bldpZHRoKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbXCJjb21ib2JveExpc3RcIl0/LmN1cnJlbnRWYWx1ZSkgdGhpcy51cGRhdGVTZWxlY3RlZFZhbHVlKCk7XG4gICAgaWYgKGNoYW5nZXNbXCJvdXRlckNvbnRyb2xcIl0/LmN1cnJlbnRWYWx1ZSkgdGhpcy51cGRhdGVTZWxlY3RlZFZhbHVlKChjaGFuZ2VzW1wib3V0ZXJDb250cm9sXCJdLmN1cnJlbnRWYWx1ZSBhcyBGb3JtQ29udHJvbCkudmFsdWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvLyBPIHF1ZSBmYXplciBxdWFuZG8gbyBldmVudG8gZGUgcmVkaW1lbnNpb25hbWVudG8gb2NvcnJlclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7IHRoaXMuYWRqdXN0RHJvcGRvd25XaWR0aCgpIH1cbiAgLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PiBJTklUSUFMSVpBVElPTiA8PT09PT09PT09PVxuXG5cbiAgLy8gI3JlZ2lvbiA9PT09PT09PT09PiBVVElMUyA8PT09PT09PT09PVxuICBwdWJsaWMgc2V0VmFsdWUoaXRlbTogUmVjb3JkQ29tYm9ib3gpOiB2b2lkIHtcbiAgICB0aGlzLnRleHRvUGVzcXVpc2EgPSBcIlwiO1xuICAgIHRoaXMuaW5uZXJDb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgdGhpcy5fb3V0ZXJDb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgXG4gICAgdGhpcy5fb3V0ZXJDb250cm9sLnNldFZhbHVlKGl0ZW0uSUQpO1xuICAgIHRoaXMuaW5uZXJDb250cm9sLnNldFZhbHVlKGl0ZW0uTEFCRUwpO1xuXG4gICAgdGhpcy5hcmlhRXhwYW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNldENvbnRyb2xTdGF0dXModGhpcy5pbm5lckNvbnRyb2wuc3RhdHVzKTtcbiAgICBcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodGhpcy5yZXR1cm5SZWNvcmQgPyBpdGVtIGFzIFJlY29yZENvbWJvYm94IDogaXRlbS5JRCk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRleHRvUGVzcXVpc2EgPSBcIlwiO1xuICAgIHRoaXMuaW5uZXJDb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgdGhpcy5fb3V0ZXJDb250cm9sLm1hcmtBc0RpcnR5KCk7XG5cbiAgICB0aGlzLl9vdXRlckNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XG4gICAgdGhpcy5pbm5lckNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XG5cbiAgICB0aGlzLmFyaWFFeHBhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2V0Q29udHJvbFN0YXR1cyh0aGlzLmlubmVyQ29udHJvbC5zdGF0dXMpO1xuXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3RlZFZhbHVlKHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuaW5uZXJDb250cm9sLnNldFZhbHVlKG51bGwpOyAvLyBMaW1wYSBvIGNhbXBvIGFudGVzIGRlIHF1YWxxdWVyIGNvaXNhXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCA9IHZhbHVlID8/IHRoaXMuX291dGVyQ29udHJvbC52YWx1ZTtcblxuICAgIGlmICghdGhpcy5jb21ib2JveExpc3QgfHwgKHNlbGVjdGVkVmFsdWUgPT09IG51bGwgJiYgc2VsZWN0ZWRWYWx1ZSA9PT0gJycpKSByZXR1cm47XG5cbiAgICBjb25zdCBpbml0aWFsaXplZFZhbHVlID0gdGhpcy5jb21ib2JveExpc3QuZmluZChpdGVtID0+IGl0ZW0uSUQgPT09IHNlbGVjdGVkVmFsdWUpXG4gICAgaWYgKGluaXRpYWxpemVkVmFsdWUpIHRoaXMuaW5uZXJDb250cm9sLnNldFZhbHVlKGluaXRpYWxpemVkVmFsdWUuTEFCRUwpO1xuXG4gICAgLy8gdGhpcy5zZXRDb250cm9sU3RhdHVzKHRoaXMuX291dGVyQ29udHJvbC5zdGF0dXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGp1c3REcm9wZG93bldpZHRoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9tYWluSW5wdXQgJiYgdGhpcy5fZHJvcGRvd25NZW51KSB7XG4gICAgICBjb25zdCBpbnB1dFdpZHRoID0gdGhpcy5fbWFpbklucHV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICB0aGlzLl9kcm9wZG93bk1lbnUubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke2lucHV0V2lkdGh9cHhgO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VmFsaWRhdG9yKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vdXRlckNvbnRyb2wuaGFzVmFsaWRhdG9yKFZhbGlkYXRvcnMucmVxdWlyZWQpKSB7XG4gICAgICB0aGlzLmlubmVyQ29udHJvbC5hZGRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5pc1JlcXVpcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlubmVyQ29udHJvbC5yZW1vdmVWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5pc1JlcXVpcmVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb250cm9sU3RhdHVzKGZvcm1TdGF0dXM6IEZvcm1Db250cm9sU3RhdHVzKTogdm9pZCB7XG4gICAgc3dpdGNoKGZvcm1TdGF0dXMpIHtcbiAgICAgIGNhc2UgJ1ZBTElEJzpcbiAgICAgICAgdGhpcy5pbnZhbGlkQ29udHJvbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlubmVyQ29udHJvbC5lbmFibGUoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0lOVkFMSUQnOlxuICAgICAgICB0aGlzLmludmFsaWRDb250cm9sID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbm5lckNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdQRU5ESU5HJzpcbiAgICAgICAgdGhpcy5pbnZhbGlkQ29udHJvbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlubmVyQ29udHJvbC5lbmFibGUoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0RJU0FCTEVEJzpcbiAgICAgICAgdGhpcy5pbnZhbGlkQ29udHJvbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlubmVyQ29udHJvbC5kaXNhYmxlKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbG9hZExpc3QoKTogdm9pZCB7IHRoaXMub25SZWxvYWRMaXN0LmVtaXQodGhpcy50ZXh0b1Blc3F1aXNhKSB9XG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gVVRJTFMgPD09PT09PT09PT1cblxufVxuIiwiPGxhYmVsICpuZ0lmPVwibGFiZWxUZXh0ICYmIGxhYmVsVGV4dCAhPSAnJ1wiIFtsaWJSZXF1aXJlZF09XCJpc1JlcXVpcmVkXCIgY2xhc3M9XCJmb3JtLWxhYmVsIGZ3LWJvbGRcIj57eyBsYWJlbFRleHQgfX08L2xhYmVsPlxuPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGRyb3Bkb3duIGZsZXgtZmlsbCBnbGItbWF4LWhlaWdodC0zNTBweFwiPlxuXG4gICA8IS0tIEVzdGUgZWxlbWVudG8gbmctY29udGVudCBjb20gbyBhdHJpYnV0byBbYnRuTGVmdF0gcGVybWl0ZSBxdWUgbyB1c3XDoXJpbyBmaW5hbCBmb3JuZcOnYSBjb250ZcO6ZG8gcGVyc29uYWxpemFkbyBwYXJhIHNlciBleGliaWRvIG5vIGxhZG8gZXNxdWVyZG8gZG8gY29tYm9ib3ggZGUgcGVzcXVpc2EuXG4gICBBbyB1c2FyIG8gYXRyaWJ1dG8gW2J0bkxlZnRdLCBvIHVzdcOhcmlvIHBvZGUgZmFjaWxtZW50ZSBhZGljaW9uYXIgYm90w7VlcyBvdSBvdXRyb3MgZWxlbWVudG9zIHBhcmEgbWVsaG9yYXIgYSBmdW5jaW9uYWxpZGFkZSBvdSBhcGFyw6puY2lhIGRvIGNvbWJvYm94IGRlIHBlc3F1aXNhLiAtLT5cbiAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltidG5MZWZ0XVwiPjwvbmctY29udGVudD5cblxuICAgPGlucHV0ICAjbWFpbklucHV0IGNsYXNzPVwiZm9ybS1zZWxlY3QgdGV4dC1zdGFydCByb3VuZGVkLWVuZFwiIHR5cGU9XCJ0ZXh0XCIgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiIFtwbGFjZWhvbGRlcl09XCJtYWluSW5wdXRQbGFjZWhvbGRlclwiXG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiaW5uZXJDb250cm9sXCIgZGF0YS1icy1hdXRvLWNsb3NlPVwib3V0c2lkZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIHJlYWRvbmx5IFtjbGFzcy5pcy1pbnZhbGlkXT1cImludmFsaWRDb250cm9sXCJcbiAgICAgICAgICAgIChjbGljayk9XCJhcmlhRXhwYW5kZWQgPSAhYXJpYUV4cGFuZGVkOyBzZWFyY2hJbnB1dC5mb2N1cygpXCIgKGZvY3VzKT1cInNlYXJjaElucHV0LmZvY3VzKClcIj5cblxuICAgPHVsICAjZHJvcGRvd25NZW51ICBjbGFzcz1cImRyb3Bkb3duLW1lbnUgcC0yIGdsYi1tYXgtaGVpZ2h0LTM1MHB4IG92ZXJmbG93LXktc2Nyb2xsIHotaW5kZXgtMTAyMFwiIFtjbGFzcy5zaG93XT1cImFyaWFFeHBhbmRlZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTJcIj5cbiAgICAgICAgIDxpbnB1dCAjc2VhcmNoSW5wdXQgKGlucHV0KT1cInRleHRvUGVzcXVpc2EgPSBzZWFyY2hJbnB1dC52YWx1ZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hJbnB1dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGdsYi1pbnB1dC1uby1nbG93XCIgW3BsYWNlaG9sZGVyXT1cInNlYXJjaElucHV0UGxhY2Vob2xkZXJcIiAoa2V5dXAuZW50ZXIpPVwicmVsb2FkTGlzdCgpXCI+XG4gICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi17e2NvbG9yVGhlbWV9fVwiIChjbGljayk9XCJyZWxvYWRMaXN0KClcIj4gPGFwcC1zdmctc3RvcmFnZSBzdmdOYW1lPVwibHVwYVwiIHN2Z1NpemU9XCJtZWRpdW0tc21hbGxcIiAvPiA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICBAaWYgKGNvbWJvYm94TGlzdCkge1xuICAgICAgICAgPGxpICpuZ0lmPVwiaW5uZXJDb250cm9sLnZhbHVlICE9ICcnICYmIGlubmVyQ29udHJvbC52YWx1ZSAhPSBudWxsXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgKGNsaWNrKT1cImNsZWFyVmFsdWUoKVwiPiA8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5MaW1wYXIgb3DDp8OjbyBzZWxlY2lvbmFkYTwvc3Bhbj4gPC9saT5cbiAgICAgICAgIEBmb3IgKGl0ZW0gb2YgY29tYm9ib3hMaXN0IHwgdGV4dEZpbHRlcjp0ZXh0b1Blc3F1aXNhOyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiAoY2xpY2spPVwic2V0VmFsdWUoaXRlbSlcIj5cbiAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXRlbS5BZGRpdGlvbmFsU3RyaW5nUHJvcGVydHkxIHx8IGl0ZW0uQWRkaXRpb25hbFN0cmluZ1Byb3BlcnR5MSAhPSAnJ1wiIGNsYXNzPVwiZ2xiLWZzLTEyIGZ3LWJvbGQgZC1pbmxpbmUtYmxvY2sgdy0xMjVcIj57eyBpdGVtLkFkZGl0aW9uYWxTdHJpbmdQcm9wZXJ0eTEgfX08L3NwYW4+IHt7IGl0ZW0uTEFCRUwgfX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICB9XG4gICAgICAgICBAZW1wdHkgeyA8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGZzdC1pdGFsaWNcIj5OZW5odW0gcmVnaXN0cm8gZW5jb250cmFkbyBjb20gZXN0YSBwZXNxdWlzYS4uLjwvbGk+IH1cbiAgICAgIH1cbiAgICAgIEBlbHNlIHsgPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbSB0ZXh0LWNlbnRlclwiPiA8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+PHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5DYXJyZWdhbmRvIGRhZG9zLi4uPC9zcGFuPjwvZGl2PiA8L2xpPiB9XG4gICA8L3VsPlxuXG4gICA8IS0tIEVzdGUgZWxlbWVudG8gbmctY29udGVudCBjb20gbyBhdHJpYnV0byBbYnRuUmlnaHRdIHBlcm1pdGUgcXVlIG8gdXN1w6FyaW8gZmluYWwgZm9ybmXDp2EgY29udGXDumRvIHBlcnNvbmFsaXphZG8gcGFyYSBzZXIgZXhpYmlkbyBubyBsYWRvIGRpcmVpdG8gZG8gY29tYm9ib3ggZGUgcGVzcXVpc2EuXG4gICBBbyB1c2FyIG8gYXRyaWJ1dG8gW2J0blJpZ2h0XSwgbyB1c3XDoXJpbyBwb2RlIGZhY2lsbWVudGUgYWRpY2lvbmFyIGJvdMO1ZXMgb3Ugb3V0cm9zIGVsZW1lbnRvcyBwYXJhIG1lbGhvcmFyIGEgZnVuY2lvbmFsaWRhZGUgb3UgYXBhcsOqbmNpYSBkbyBjb21ib2JveCBkZSBwZXNxdWlzYS4gLS0+XG4gICA8bmctY29udGVudCBzZWxlY3Q9XCJbYnRuUmlnaHRdXCI+PC9uZy1jb250ZW50PlxuXG48L2Rpdj5cblxuPCEtLSAjcmVnaW9uIE1FTlNBR0VNIERFIEVSUk8gREUgVkFMSURBw4fDg08gLS0+XG48YXBwLWZpZWxkLWVycm9yLW1lc3NhZ2UgKm5nSWY9XCJpbnZhbGlkQ29udHJvbFwiIGN1c3RvbU1lc3NhZ2U9XCJFc3RlIGNhbXBvIMOpIG9icmlnYXTDs3Jpby5cIiAvPlxuPCEtLSAjZW5kcmVnaW9uIE1FTlNBR0VNIERFIEVSUk8gREUgVkFMSURBw4fDg08gLS0+XG4iXX0=
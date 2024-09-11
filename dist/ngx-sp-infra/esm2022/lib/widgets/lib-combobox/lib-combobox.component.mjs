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
const _c0 = ["mainInput"];
const _c1 = ["dropdownMenu"];
const _c2 = [[["", "btnLeft", ""]], [["", "btnRight", ""]]];
const _c3 = ["[btnLeft]", "[btnRight]"];
function LibComboboxComponent_label_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("libRequired", ctx_r1.isRequired);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.labelText);
} }
function LibComboboxComponent_Conditional_12_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 16);
    i0.ɵɵlistener("click", function LibComboboxComponent_Conditional_12_li_0_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.clearValue()); });
    i0.ɵɵelementStart(1, "span", 17);
    i0.ɵɵtext(2, "Limpar op\u00E7\u00E3o selecionada");
    i0.ɵɵelementEnd()();
} }
function LibComboboxComponent_Conditional_12_For_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r6.AdditionalStringProperty1);
} }
function LibComboboxComponent_Conditional_12_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 16);
    i0.ɵɵlistener("click", function LibComboboxComponent_Conditional_12_For_2_Template_li_click_0_listener() { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setValue(item_r6)); });
    i0.ɵɵtemplate(1, LibComboboxComponent_Conditional_12_For_2_span_1_Template, 2, 1, "span", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r6.AdditionalStringProperty1 || item_r6.AdditionalStringProperty1 != "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r6.LABEL, " ");
} }
function LibComboboxComponent_Conditional_12_ForEmpty_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵtext(1, "Nenhum registro encontrado com esta pesquisa...");
    i0.ɵɵelementEnd();
} }
function LibComboboxComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, LibComboboxComponent_Conditional_12_li_0_Template, 3, 0, "li", 13);
    i0.ɵɵrepeaterCreate(1, LibComboboxComponent_Conditional_12_For_2_Template, 3, 2, "li", 14, i0.ɵɵrepeaterTrackByIndex, false, LibComboboxComponent_Conditional_12_ForEmpty_3_Template, 2, 0, "li", 15);
    i0.ɵɵpipe(4, "textFilter");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.innerControl.value != "" && ctx_r1.innerControl.value != null);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpipeBind2(4, 2, ctx_r1.comboboxList, ctx_r1.textoPesquisa));
} }
function LibComboboxComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 20)(1, "div", 21)(2, "span", 22);
    i0.ɵɵtext(3, "Carregando dados...");
    i0.ɵɵelementEnd()()();
} }
function LibComboboxComponent_app_field_error_message_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-field-error-message", 23);
} }
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
        console.log("returnRecord:", this.returnRecord);
        console.log("return ", this.returnRecord ? item : item.ID);
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
    static { this.ɵfac = function LibComboboxComponent_Factory(t) { return new (t || LibComboboxComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LibComboboxComponent, selectors: [["lib-combobox"]], viewQuery: function LibComboboxComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._mainInput = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._dropdownMenu = _t.first);
        } }, hostBindings: function LibComboboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function LibComboboxComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { outerControl: [i0.ɵɵInputFlags.None, "control", "outerControl"], comboboxList: [i0.ɵɵInputFlags.None, "list", "comboboxList"], labelText: "labelText", libRequired: "libRequired", disabled: "disabled", mainInputPlaceholder: [i0.ɵɵInputFlags.None, "mainPlaceholder", "mainInputPlaceholder"], searchInputPlaceholder: [i0.ɵɵInputFlags.None, "searchPlaceholder", "searchInputPlaceholder"], colorTheme: [i0.ɵɵInputFlags.None, "theme", "colorTheme"], returnRecord: "returnRecord" }, outputs: { onReloadList: "onReloadList", onChange: "onChange" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 16, vars: 13, consts: [["mainInput", ""], ["dropdownMenu", ""], ["searchInput", ""], ["class", "form-label fw-bold", 3, "libRequired", 4, "ngIf"], [1, "input-group", "dropdown", "flex-fill", "glb-max-height-350px"], ["type", "text", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "false", "readonly", "", 1, "form-select", "text-start", "rounded-end", 3, "click", "focus", "placeholder", "formControl"], [1, "dropdown-menu", "p-2", "glb-max-height-350px", "overflow-y-scroll", "z-index-1020"], [1, "input-group", "mb-2"], ["type", "text", "id", "searchInput", 1, "form-control", "glb-input-no-glow", 3, "input", "keyup.enter", "placeholder"], [3, "click"], ["svgName", "lupa", "svgSize", "medium-small"], ["customMessage", "Este campo \u00E9 obrigat\u00F3rio.", 4, "ngIf"], [1, "form-label", "fw-bold", 3, "libRequired"], ["class", "dropdown-item", 3, "click", 4, "ngIf"], [1, "dropdown-item"], [1, "dropdown-item", "fst-italic"], [1, "dropdown-item", 3, "click"], [1, "fw-bold"], ["class", "glb-fs-12 fw-bold d-inline-block w-125", 4, "ngIf"], [1, "glb-fs-12", "fw-bold", "d-inline-block", "w-125"], [1, "dropdown-item", "text-center"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["customMessage", "Este campo \u00E9 obrigat\u00F3rio."]], template: function LibComboboxComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵprojectionDef(_c2);
            i0.ɵɵtemplate(0, LibComboboxComponent_label_0_Template, 2, 2, "label", 3);
            i0.ɵɵelementStart(1, "div", 4);
            i0.ɵɵprojection(2);
            i0.ɵɵelementStart(3, "input", 5, 0);
            i0.ɵɵlistener("click", function LibComboboxComponent_Template_input_click_3_listener() { i0.ɵɵrestoreView(_r1); const searchInput_r3 = i0.ɵɵreference(9); ctx.ariaExpanded = !ctx.ariaExpanded; return i0.ɵɵresetView(searchInput_r3.focus()); })("focus", function LibComboboxComponent_Template_input_focus_3_listener() { i0.ɵɵrestoreView(_r1); const searchInput_r3 = i0.ɵɵreference(9); return i0.ɵɵresetView(searchInput_r3.focus()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "ul", 6, 1)(7, "div", 7)(8, "input", 8, 2);
            i0.ɵɵlistener("input", function LibComboboxComponent_Template_input_input_8_listener() { i0.ɵɵrestoreView(_r1); const searchInput_r3 = i0.ɵɵreference(9); return i0.ɵɵresetView(ctx.textoPesquisa = searchInput_r3.value); })("keyup.enter", function LibComboboxComponent_Template_input_keyup_enter_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.reloadList()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 9);
            i0.ɵɵlistener("click", function LibComboboxComponent_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.reloadList()); });
            i0.ɵɵelement(11, "app-svg-storage", 10);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(12, LibComboboxComponent_Conditional_12_Template, 5, 5)(13, LibComboboxComponent_Conditional_13_Template, 4, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(14, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(15, LibComboboxComponent_app_field_error_message_15_Template, 1, 0, "app-field-error-message", 11);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.labelText && ctx.labelText != "");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("is-invalid", ctx.invalidControl);
            i0.ɵɵproperty("placeholder", ctx.mainInputPlaceholder)("formControl", ctx.innerControl);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("show", ctx.ariaExpanded);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("placeholder", ctx.searchInputPlaceholder);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("btn btn-", ctx.colorTheme, "");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(12, ctx.comboboxList ? 12 : 13);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.invalidControl);
        } }, dependencies: [i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlDirective, i3.FieldErrorMessageComponent, i4.SvgStorageComponent, i5.RequiredDirective, i6.TextFilterPipe], styles: [".glb-max-height-350px[_ngcontent-%COMP%]{max-height:350px!important}.form-label[_ngcontent-%COMP%]{font-size:16px!important}.z-index-1020[_ngcontent-%COMP%]{z-index:1020!important}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LibComboboxComponent, [{
        type: Component,
        args: [{ selector: 'lib-combobox', template: "<label *ngIf=\"labelText && labelText != ''\" [libRequired]=\"isRequired\" class=\"form-label fw-bold\">{{ labelText }}</label>\n<div class=\"input-group dropdown flex-fill glb-max-height-350px\">\n\n   <!-- Este elemento ng-content com o atributo [btnLeft] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado esquerdo do combobox de pesquisa.\n   Ao usar o atributo [btnLeft], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\n   <ng-content select=\"[btnLeft]\"></ng-content>\n\n   <input  #mainInput class=\"form-select text-start rounded-end\" type=\"text\" data-bs-toggle=\"dropdown\" [placeholder]=\"mainInputPlaceholder\"\n            [formControl]=\"innerControl\" data-bs-auto-close=\"outside\" aria-expanded=\"false\" readonly [class.is-invalid]=\"invalidControl\"\n            (click)=\"ariaExpanded = !ariaExpanded; searchInput.focus()\" (focus)=\"searchInput.focus()\">\n\n   <ul  #dropdownMenu  class=\"dropdown-menu p-2 glb-max-height-350px overflow-y-scroll z-index-1020\" [class.show]=\"ariaExpanded\">\n      <div class=\"input-group mb-2\">\n         <input #searchInput (input)=\"textoPesquisa = searchInput.value\" type=\"text\" id=\"searchInput\" class=\"form-control glb-input-no-glow\" [placeholder]=\"searchInputPlaceholder\" (keyup.enter)=\"reloadList()\">\n         <button class=\"btn btn-{{colorTheme}}\" (click)=\"reloadList()\"> <app-svg-storage svgName=\"lupa\" svgSize=\"medium-small\" /> </button>\n      </div>\n\n      @if (comboboxList) {\n         <li *ngIf=\"innerControl.value != '' && innerControl.value != null\" class=\"dropdown-item\" (click)=\"clearValue()\"> <span class=\"fw-bold\">Limpar op\u00E7\u00E3o selecionada</span> </li>\n         @for (item of comboboxList | textFilter:textoPesquisa; track $index) {\n            <li class=\"dropdown-item\" (click)=\"setValue(item)\">\n               <span *ngIf=\"item.AdditionalStringProperty1 || item.AdditionalStringProperty1 != ''\" class=\"glb-fs-12 fw-bold d-inline-block w-125\">{{ item.AdditionalStringProperty1 }}</span> {{ item.LABEL }}\n            </li>\n         }\n         @empty { <li class=\"dropdown-item fst-italic\">Nenhum registro encontrado com esta pesquisa...</li> }\n      }\n      @else { <li class=\"dropdown-item text-center\"> <div class=\"spinner-border\" role=\"status\"><span class=\"visually-hidden\">Carregando dados...</span></div> </li> }\n   </ul>\n\n   <!-- Este elemento ng-content com o atributo [btnRight] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado direito do combobox de pesquisa.\n   Ao usar o atributo [btnRight], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\n   <ng-content select=\"[btnRight]\"></ng-content>\n\n</div>\n\n<!-- #region MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\n<app-field-error-message *ngIf=\"invalidControl\" customMessage=\"Este campo \u00E9 obrigat\u00F3rio.\" />\n<!-- #endregion MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\n", styles: [".glb-max-height-350px{max-height:350px!important}.form-label{font-size:16px!important}.z-index-1020{z-index:1020!important}\n"] }]
    }], () => [], { outerControl: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LibComboboxComponent, { className: "LibComboboxComponent", filePath: "lib\\widgets\\lib-combobox\\lib-combobox.component.ts", lineNumber: 42 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWNvbWJvYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvbGliLWNvbWJvYm94L2xpYi1jb21ib2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2xpYi1jb21ib2JveC9saWItY29tYm9ib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdKLE9BQU8sRUFBbUIsV0FBVyxFQUFxQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7O0lDSHBDLGlDQUFrRztJQUFBLFlBQWU7SUFBQSxpQkFBUTs7O0lBQTdFLCtDQUEwQjtJQUE0QixjQUFlO0lBQWYsc0NBQWU7Ozs7SUFrQnhHLDhCQUFnSDtJQUF2QiwyTEFBUyxtQkFBWSxLQUFDO0lBQUUsZ0NBQXNCO0lBQUEsa0RBQXdCO0lBQVEsQUFBUixpQkFBTyxFQUFNOzs7SUFHdEssZ0NBQW9JO0lBQUEsWUFBb0M7SUFBQSxpQkFBTzs7O0lBQTNDLGNBQW9DO0lBQXBDLHVEQUFvQzs7OztJQUQzSyw4QkFBbUQ7SUFBekIsc05BQVMsd0JBQWMsS0FBQztJQUMvQyw2RkFBb0k7SUFBNEMsWUFDbkw7SUFBQSxpQkFBSzs7O0lBREssY0FBNEU7SUFBNUUsbUdBQTRFO0lBQTZGLGNBQ25MO0lBRG1MLDhDQUNuTDs7O0lBRU0sOEJBQXFDO0lBQUEsK0RBQStDO0lBQUEsaUJBQUs7OztJQU5sRyxtRkFBZ0g7SUFDaEgs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QUMvSDtZQVdOLEFBVEEscUVBQW9CLHdEQVNiO1lBQ1YsaUJBQUs7WUFJTCxzQkFBNkM7WUFFaEQsaUJBQU07WUFHTixnSEFBNEY7O1lBcENwRiwyREFBa0M7WUFRMkQsZUFBbUM7WUFBbkMsZ0RBQW1DO1lBQTVILEFBRDJGLHNEQUFvQyxpQ0FDbkc7WUFHNkQsZUFBMkI7WUFBM0Isd0NBQTJCO1lBRWEsZUFBc0M7WUFBdEMsd0RBQXNDO1lBQ2xLLGVBQThCO1lBQTlCLHlEQUE4QjtZQUd6QyxlQVMrSjtZQVQvSixnREFTK0o7WUFVM0ksZUFBb0I7WUFBcEIseUNBQW9COzs7aUZES2pDLG9CQUFvQjtjQUxoQyxTQUFTOzJCQUNFLGNBQWM7b0JBcUNiLFlBQVk7a0JBRHRCLEtBQUs7bUJBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7WUFnQk0sWUFBWTtrQkFBNUQsS0FBSzttQkFBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtZQUl4QixTQUFTO2tCQUF4QixLQUFLO1lBTVUsV0FBVztrQkFBMUIsS0FBSztZQU1LLFFBQVE7a0JBRGxCLEtBQUs7WUFhMkIsb0JBQW9CO2tCQUFwRCxLQUFLO21CQUFDLGlCQUFpQjtZQU1XLHNCQUFzQjtrQkFBeEQsS0FBSzttQkFBQyxtQkFBbUI7WUFPSCxVQUFVO2tCQUFoQyxLQUFLO21CQUFDLE9BQU87WUFNRSxZQUFZO2tCQUEzQixLQUFLO1lBTVcsWUFBWTtrQkFBNUIsTUFBTTtZQU9VLFFBQVE7a0JBQXhCLE1BQU07WUFHeUIsVUFBVTtrQkFBekMsU0FBUzttQkFBQyxXQUFXO1lBQ2EsYUFBYTtrQkFBL0MsU0FBUzttQkFBQyxjQUFjO1lBK0J6QixRQUFRO2tCQURQLFlBQVk7bUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOztrRkE5STlCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wsIEZvcm1Db250cm9sU3RhdHVzLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUmVjb3JkQ29tYm9ib3ggfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tYm9ib3gvcmVjb3JkLWNvbWJvYm94JztcblxuLyoqXG4gKiBAY29tcG9uZW50IExpYkNvbWJvYm94Q29tcG9uZW50XG4gKiBAc2VsZWN0b3IgbGliLWNvbWJvYm94XG4gKiBcbiAqIEBkZXNjcmlwdGlvblxuICogTyBjb21wb25lbnRlIExpYkNvbWJvYm94Q29tcG9uZW50IMOpIHByb2pldGFkbyBwYXJhIGZvcm5lY2VyIGFvcyB1c3XDoXJpb3MgdW1hIGludGVyZmFjZSBwYXJhIHBlc3F1aXNhciBlIHNlbGVjaW9uYXIgaXRlbnMgZGUgdW1hIGxpc3RhLlxuICogRWxlIHN1cG9ydGEgYSBmaWx0cmFnZW0gZGUgaXRlbnMgY29tIGJhc2UgbmEgZW50cmFkYSBkbyB1c3XDoXJpbywgcGVybWl0aW5kbyB1bWEgc2VsZcOnw6NvIG1haXMgZsOhY2lsIGVtIGxpc3RhcyBleHRlbnNhcy5cbiAqIFxuICogIyMgRnVuY2lvbmFsaWRhZGVzOlxuICogLSBQZXNxdWlzYSBlIGZpbHRyYWdlbSBkZSBpdGVucyBuYSBsaXN0YSBkbyBjb21ib2JveC5cbiAqIC0gU2VsZcOnw6NvIGRlIGl0ZW5zIGNvbSBmZWVkYmFjayB2aXN1YWwuXG4gKiAtIEVtaXNzw6NvIGRlIGV2ZW50b3MgcGVyc29uYWxpemFkb3MgcGFyYSBpbnRlcmHDp8O1ZXMgZG8gdXN1w6FyaW8sIGNvbW8gcmVjYXJyZWdhciBhIGxpc3RhIG91IHNlbGVjaW9uYXIgdW0gaXRlbS5cbiAqIC0gQWp1c3RlIGRpbsOibWljbyBkYSBsYXJndXJhIGRvIGRyb3Bkb3duIHBhcmEgY29ycmVzcG9uZGVyIGFvIGlucHV0IHByaW5jaXBhbC5cbiAqIC0gSW5pY2lhbGl6YcOnw6NvIGRlIHVtIHZhbG9yIHNlbGVjaW9uYWRvLCBzZSBmb3JuZWNpZG8uXG4gKiBcbiAqICMjIElucHV0czpcbiAqIC0gYG91dGVyQ29udHJvbGAgKEZvcm1Db250cm9sIHwgQWJzdHJhY3RDb250cm9sKTogQ29udHJvbCBwYXJhIHNlbGXDp8OjbyBkb3MgdmFsb3JlcywgYXR1YWxpemFyw6EgYXV0b21hdGljYW1lbnRlIG8gY29udHJvbCBkbyBjb21wb25lbnRlIHBhaSB0YW1iw6ltXG4gKiAtIGBjb21ib2JveExpc3RgIChSZWNvcmRDb21ib2JveFtdKTogTGlzdGEgZGUgcmVnaXN0cm9zIHF1ZSBzZXLDo28gZXhpYmlkb3Mgbm8gY29tYm8sIGVucXVhbnRvIGVsZXMgZXN0aXZlcmVtIGNhcnJlZ2FuZG8gc2Vyw6EgZXhpYmlkbyB1bSBzcGlubmVyXG4gKiAtIGBsYWJlbFRleHRgIChzdHJpbmcpOiBUZXh0byBkbyByw7N0dWxvIHF1ZSBzZXLDoSBleGliaWRvIGFjaW1hIGRvIGNvbWJvLiBDYXNvIG7Do28gaW5mb3JtYWRvIG5hZGEgc2Vyw6EgZXhpYmlkb1xuICogLSBgZGlzYWJsZWRgIChib29sZWFuKTogRGVmaW5lIHNlIG8gY2FtcG8gZXN0w6EgZGVzYWJpbGl0YWRvLiBEZXZlIHNlciB1c2FkbyBwYXJhIHZhbGlkYcOnw7VlcyBkZSBoYWJpbGl0YcOnw6NvIGRpbsOibWljYSBkbyBjYW1wb1xuICogLSBgbGliUmVxdWlyZWRgIChib29sZWFuKTogRGVmaW5lIHNlIG8gY2FtcG8gw6kgb2JyaWdhdMOzcmlvLCB2YWkgZXhpYmlyIG8gJyonIHZlcm1lbGhvIGFvIGxhZG8gZG8gbGFiZWwgKHNlIGVsZSBlc3RpdmVyIHByZXNlbnRlKVxuICogLSBgbWFpbklucHV0UGxhY2Vob2xkZXJgIChzdHJpbmcpOiBQbGFjZWhvbGRlciBkbyBjYW1wbyBwcmluY2lwYWwgZG8gY29tYm9cbiAqIC0gYHNlYXJjaElucHV0UGxhY2Vob2xkZXJgIChzdHJpbmcpOiBQbGFjZWhvbGRlciBkbyBjYW1wbyBkZSBwZXNxdWlzYSBkZW50cm8gZG8gY29tYm9cbiAqIC0gYGNvbG9yVGhlbWVgIChcInByaW1hcnlcIiB8IFwic2Vjb25kYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwiZGFuZ2VyXCIgfCBcIndhcm5pbmdcIiB8IFwiaW5mb1wiIHwgXCJsaWdodFwiIHwgXCJkYXJrXCIpOiBEZWZpbmUgbyB0ZW1hIGRlIGNvciBkbyBjb21wb25lbnRlLCBjb21vIFwicHJpbWFyeVwiLCBcInN1Y2Nlc3NcIiwgb3UgXCJkYW5nZXJcIlxuICogLSBgcmV0dXJuUmVjb3JkYCAoYm9vbGVhbik6IERlZmluZSBzZSBvIHRpcG8gZGUgcmV0b3JubyBhbyBzZWxlY2lvbmFyIHVtYSBvcMOnw6NvIHNlcsOhIG8gUmVjb3JkIGludGVpcm8gb3UgYXBlbmFzIG8gSURcbiAqIFxuICogIyMgT3V0cHV0czpcbiAqIC0gYG9uUmVsb2FkTGlzdGAgKEV2ZW50RW1pdHRlcjxzdHJpbmc+KTogRXZlbnRvIGVtaXRpZG8gcXVhbmRvIGEgbGlzdGEgcHJlY2lzYSBzZXIgcmVjYXJyZWdhZGEuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jb21ib2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saWItY29tYm9ib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vbGliLWNvbWJvYm94LmNvbXBvbmVudC5zY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBMaWJDb21ib2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuICAvLyAjcmVnaW9uID09PT09PT09PT0+IFBST1BFUlRJRVMgPD09PT09PT09PT1cblxuICAvLyAjcmVnaW9uIFBST1RFQ1RFRFxuICBwcm90ZWN0ZWQgdGV4dG9QZXNxdWlzYTogc3RyaW5nID0gXCJcIjtcblxuICBwcm90ZWN0ZWQgZ2V0IGFyaWFFeHBhbmRlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2FyaWFFeHBhbmRlZDsgfVxuICBwcm90ZWN0ZWQgc2V0IGFyaWFFeHBhbmRlZCh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9hcmlhRXhwYW5kZWQgPSB2YWx1ZTsgfVxuXG4gIHByb3RlY3RlZCBpbm5lckNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sPHN0cmluZyB8IG51bWJlciB8IG51bGw+KG51bGwpO1xuICBwcm90ZWN0ZWQgaW52YWxpZENvbnRyb2w6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJvdGVjdGVkIGlzUmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgaW52YWxpZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgZGlydHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJvdGVjdGVkIHRvdWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gI2VuZHJlZ2lvbiBQUk9URUNURURcblxuICAvLyAjcmVnaW9uIFBSSVZBVEVcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ/OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2FyaWFFeHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBwcml2YXRlIF9vdXRlckNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sPHN0cmluZyB8IG51bWJlciB8IG51bGw+KG51bGwpO1xuICAvLyAjZW5kcmVnaW9uIFBSSVZBVEVcblxuICAvLyAjcmVnaW9uIFBVQkxJQ1xuXG4gIC8qKiAob2JyaWdhdMOzcmlvKSBDb250cm9sIHBhcmEgc2VsZcOnw6NvIGRvcyB2YWxvcmVzLCBhdHVhbGl6YXLDoSBhdXRvbWF0aWNhbWVudGUgbyBjb250cm9sIGRvIGNvbXBvbmVudGUgcGFpIHRhbWLDqW1cbiAgICogQGFsaWFzICdjb250cm9sJ1xuICAgKiBAdHlwZSB7Rm9ybUNvbnRyb2w8YW55PiB8IEFic3RyYWN0Q29udHJvbDxhbnk+fSAqL1xuICBASW5wdXQoeyBhbGlhczogJ2NvbnRyb2wnLCByZXF1aXJlZDogdHJ1ZSB9KVxuICBwdWJsaWMgZ2V0IG91dGVyQ29udHJvbCgpOiBGb3JtQ29udHJvbDxhbnk+IHsgcmV0dXJuIHRoaXMuX291dGVyQ29udHJvbCB9XG4gIHB1YmxpYyBzZXQgb3V0ZXJDb250cm9sKHZhbHVlOiBGb3JtQ29udHJvbDxhbnk+IHwgQWJzdHJhY3RDb250cm9sPGFueT4pIHtcbiAgICB0aGlzLl9vdXRlckNvbnRyb2wgPSB2YWx1ZSBhcyBGb3JtQ29udHJvbDtcblxuICAgIC8vIENhbmNlbGEgYSBzdWJzY3Jpw6fDo28gYW50ZXJpb3IgKHNlIGhvdXZlcikgcGFyYSBldml0YXIgbcO6bHRpcGxhcyBzdWJzY3Jpw6fDtWVzXG4gICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbikgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAvLyBTdWJzY3Jpw6fDo28gYW8gb2JzZXJ2w6F2ZWwgdmFsdWVDaGFuZ2VzIHBhcmEgcmVhZ2lyIGEgbXVkYW7Dp2FzIG5vIHZhbG9yXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5fb3V0ZXJDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4geyB0aGlzLnVwZGF0ZVNlbGVjdGVkVmFsdWUodmFsdWUpIH0pO1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX291dGVyQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShzdGF0dXMgPT4geyB0aGlzLnNldENvbnRyb2xTdGF0dXMoc3RhdHVzKSB9KTtcbiAgfVxuXG4gIC8qKiAob2JyaWdhdMOzcmlvKSBMaXN0YSBkZSByZWdpc3Ryb3MgcXVlIHNlcsOjbyBleGliaWRvcyBubyBjb21ibywgZW5xdWFudG8gZWxlcyBlc3RpdmVyZW0gY2FycmVnYW5kbyBzZXLDoSBleGliaWRvIHVtIHNwaW5uZXJcbiAgICogQGFsaWFzICdsaXN0J1xuICAgKiBAdHlwZSB7UmVjb3JkQ29tYm9ib3hbXX0gKi9cbiAgQElucHV0KHsgYWxpYXM6ICdsaXN0JywgcmVxdWlyZWQ6IHRydWUgfSkgcHVibGljIGNvbWJvYm94TGlzdD86IFJlY29yZENvbWJvYm94W107XG5cbiAgLyoqIChvcGNpb25hbCkgVGV4dG8gZG8gcsOzdHVsbyBxdWUgc2Vyw6EgZXhpYmlkbyBhY2ltYSBkbyBjb21iby4gQ2FzbyBuw6NvIGluZm9ybWFkbyBuYWRhIHNlcsOhIGV4aWJpZG9cbiAgICogQHR5cGUge3N0cmluZ30gKi9cbiAgQElucHV0KCkgcHVibGljIGxhYmVsVGV4dD86IHN0cmluZztcblxuICAvKiogKG9wY2lvbmFsKSBEZWZpbmUgc2UgbyBjYW1wbyDDqSBvYnJpZ2F0w7NyaW8sIHZhaSBleGliaXIgbyAnKicgdmVybWVsaG8gYW8gbGFkbyBkbyBsYWJlbCAoc2UgZWxlIGVzdGl2ZXIgcHJlc2VudGUpXG4gICAqICEgU0VSw4EgREVQUkVDSUFETyBFTSBCUkVWRVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2UgKi9cbiAgQElucHV0KCkgcHVibGljIGxpYlJlcXVpcmVkPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiAob3BjaW9uYWwpIERlZmluZSBzZSBvIGNhbXBvIGVzdMOhIGRlc2FiaWxpdGFkby4gRGV2ZSBzZXIgdXNhZG8gcGFyYSB2YWxpZGHDp8O1ZXMgZGUgaGFiaWxpdGHDp8OjbyBkaW7Dom1pY2EgZG8gY2FtcG9cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlZCA/PyBmYWxzZTsgfVxuICBwdWJsaWMgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlID09PSB0cnVlKSB0aGlzLmlubmVyQ29udHJvbC5kaXNhYmxlKCk7XG4gICAgZWxzZSB0aGlzLmlubmVyQ29udHJvbC5lbmFibGUoKTtcblxuICAgIC8vdGhpcy5zZXRDb250cm9sU3RhdHVzKCk7XG4gIH1cblxuICAvKiogKG9wY2lvbmFsKSBQbGFjZWhvbGRlciBkbyBjYW1wbyBwcmluY2lwYWwgZG8gY29tYm9cbiAgICogQGFsaWFzICdtYWluUGxhY2Vob2xkZXInXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0IFwiU2VsZWNpb25lIHVtYSBvcMOnw6NvLi4uXCIgKi9cbiAgQElucHV0KCdtYWluUGxhY2Vob2xkZXInKSBwdWJsaWMgbWFpbklucHV0UGxhY2Vob2xkZXI/OiBzdHJpbmcgPSBcIlNlbGVjaW9uZSB1bWEgb3DDp8Ojby4uLlwiO1xuXG4gIC8qKiAob3BjaW9uYWwpIFBsYWNlaG9sZGVyIGRvIGNhbXBvIGRlIHBlc3F1aXNhIGRlbnRybyBkbyBjb21ib1xuICAgKiBAYWxpYXMgJ3NlYXJjaFBsYWNlaG9sZGVyJ1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCBcIlBlc3F1aXNhLi4uXCIgKi9cbiAgQElucHV0KCdzZWFyY2hQbGFjZWhvbGRlcicpIHB1YmxpYyBzZWFyY2hJbnB1dFBsYWNlaG9sZGVyPzogc3RyaW5nID0gXCJQZXNxdWlzYS4uLlwiO1xuXG4gIC8qKiAob3BjaW9uYWwpIERlZmluZSBvIHRlbWEgZGUgY29yIGRvIGNvbXBvbmVudGUsIGNvbW8gXCJwcmltYXJ5XCIsIFwic3VjY2Vzc1wiLCBvdSBcImRhbmdlclwiXG4gICAqIEBhbGlhcyAndGhlbWUnXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0IFwicHJpbWFyeVwiXG4gICovXG4gIEBJbnB1dCgndGhlbWUnKSBwdWJsaWMgY29sb3JUaGVtZT86IHN0cmluZyA9IFwicHJpbWFyeVwiO1xuXG4gIC8qKiAob3BjaW9uYWwpIERlZmluZSBzZSBvIHRpcG8gZGUgcmV0b3JubyBhbyBzZWxlY2lvbmFyIHVtYSBvcMOnw6NvIHNlcsOhIG8gUmVjb3JkIGludGVpcm8gb3UgYXBlbmFzIG8gSUQuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAqL1xuICBASW5wdXQoKSBwdWJsaWMgcmV0dXJuUmVjb3JkPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBFdmVudG8gZW1pdGlkbyBhbyByZWNhcnJlZ2FyIGEgbGlzdGEgZGUgcmVnaXN0cm9zXG4gICAqIEBleGFtcGxlIEFvIHNlciBlbWl0aWRvLCBvIGNvbXBvbmVudGUgcGFpIHBvZGUgcmVmYXplciBvIEdFVCBkYSBsaXN0YSwgcG9yIGV4ZW1wbG8uXG4gICAqIEBlbWl0cyBFdmVudEVtaXR0ZXI8c3RyaW5nPiBxdWUgbGV2YSBvIHZhbG9yIHN0cmluZyBkYSBwZXNxdWlzYSBmZWl0YSBwYXJhIHNlciBlbnZpYWRhIHBhcmEgbyBHRVRcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxzdHJpbmc+fSAqL1xuICBAT3V0cHV0KCkgcHVibGljIG9uUmVsb2FkTGlzdDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXG4gIC8qKiBFdmVudG8gZW1pdGlkbyBhbyBzZWxlY2lvbmFyIHVtIHJlZ2lzdHJvIGRhIGxpc3RhIGRvIGNvbWJvYm94XG4gICAqIEBleGFtcGxlIEFvIHNlciBlbWl0aWRvLCBvIGNvbXBvbmVudGUgcGFpIHBvZGUgcmVhbGl6YXIgdW1hIHZhbGlkYcOnw6NvIGNvbSBvIHZhbG9yIHNlbGVjaW9uYWRvLlxuICAgKiBAZW1pdHMgRXZlbnRFbWl0dGVyPHN0cmluZ3xudW1iZXJ8bnVsbD4gcXVlIGxldmEgbyB2YWxvciBzdHJpbmcgZGEgcGVzcXVpc2EgZmVpdGEgcGFyYSBzZXIgZW52aWFkYSBwYXJhIG8gR0VUXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD59ICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxSZWNvcmRDb21ib2JveCB8IHN0cmluZyB8IG51bWJlciB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZWNvcmRDb21ib2JveCB8IHN0cmluZyB8IG51bWJlciB8IG51bGw+KCk7XG4gIFxuXG4gIEBWaWV3Q2hpbGQoJ21haW5JbnB1dCcpIHByaXZhdGUgX21haW5JbnB1dCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duTWVudScpIHByaXZhdGUgX2Ryb3Bkb3duTWVudSE6IEVsZW1lbnRSZWY7XG4gIC8vICNlbmRyZWdpb24gUFVCTElDXG5cbiAgLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PiBQUk9QRVJUSUVTIDw9PT09PT09PT09XG5cblxuICAvLyAjcmVnaW9uID09PT09PT09PT0+IElOSVRJQUxJWkFUSU9OIDw9PT09PT09PT09XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGp1c3REcm9wZG93bldpZHRoKCk7XG5cbiAgICB0aGlzLnNldFZhbGlkYXRvcigpO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRWYWx1ZSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRqdXN0RHJvcGRvd25XaWR0aCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzW1wiY29tYm9ib3hMaXN0XCJdPy5jdXJyZW50VmFsdWUpIHRoaXMudXBkYXRlU2VsZWN0ZWRWYWx1ZSgpO1xuICAgIGlmIChjaGFuZ2VzW1wib3V0ZXJDb250cm9sXCJdPy5jdXJyZW50VmFsdWUpIHRoaXMudXBkYXRlU2VsZWN0ZWRWYWx1ZSgoY2hhbmdlc1tcIm91dGVyQ29udHJvbFwiXS5jdXJyZW50VmFsdWUgYXMgRm9ybUNvbnRyb2wpLnZhbHVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLy8gTyBxdWUgZmF6ZXIgcXVhbmRvIG8gZXZlbnRvIGRlIHJlZGltZW5zaW9uYW1lbnRvIG9jb3JyZXJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKGV2ZW50OiBFdmVudCk6IHZvaWQgeyB0aGlzLmFkanVzdERyb3Bkb3duV2lkdGgoKSB9XG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gSU5JVElBTElaQVRJT04gPD09PT09PT09PT1cblxuXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gVVRJTFMgPD09PT09PT09PT1cbiAgcHVibGljIHNldFZhbHVlKGl0ZW06IFJlY29yZENvbWJvYm94KTogdm9pZCB7XG4gICAgdGhpcy50ZXh0b1Blc3F1aXNhID0gXCJcIjtcbiAgICB0aGlzLmlubmVyQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMuX291dGVyQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIFxuICAgIHRoaXMuX291dGVyQ29udHJvbC5zZXRWYWx1ZShpdGVtLklEKTtcbiAgICB0aGlzLmlubmVyQ29udHJvbC5zZXRWYWx1ZShpdGVtLkxBQkVMKTtcblxuICAgIHRoaXMuYXJpYUV4cGFuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5zZXRDb250cm9sU3RhdHVzKHRoaXMuaW5uZXJDb250cm9sLnN0YXR1cyk7XG5cbiAgICBjb25zb2xlLmxvZyhcInJldHVyblJlY29yZDpcIiwgdGhpcy5yZXR1cm5SZWNvcmQpO1xuICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIFwiLCB0aGlzLnJldHVyblJlY29yZCA/IGl0ZW0gOiBpdGVtLklEKTtcbiAgICBcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodGhpcy5yZXR1cm5SZWNvcmQgPyBpdGVtIGFzIFJlY29yZENvbWJvYm94IDogaXRlbS5JRCk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRleHRvUGVzcXVpc2EgPSBcIlwiO1xuICAgIHRoaXMuaW5uZXJDb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgdGhpcy5fb3V0ZXJDb250cm9sLm1hcmtBc0RpcnR5KCk7XG5cbiAgICB0aGlzLl9vdXRlckNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XG4gICAgdGhpcy5pbm5lckNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XG5cbiAgICB0aGlzLmFyaWFFeHBhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2V0Q29udHJvbFN0YXR1cyh0aGlzLmlubmVyQ29udHJvbC5zdGF0dXMpO1xuXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3RlZFZhbHVlKHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuaW5uZXJDb250cm9sLnNldFZhbHVlKG51bGwpOyAvLyBMaW1wYSBvIGNhbXBvIGFudGVzIGRlIHF1YWxxdWVyIGNvaXNhXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCA9IHZhbHVlID8/IHRoaXMuX291dGVyQ29udHJvbC52YWx1ZTtcblxuICAgIGlmICghdGhpcy5jb21ib2JveExpc3QgfHwgKHNlbGVjdGVkVmFsdWUgPT09IG51bGwgJiYgc2VsZWN0ZWRWYWx1ZSA9PT0gJycpKSByZXR1cm47XG5cbiAgICBjb25zdCBpbml0aWFsaXplZFZhbHVlID0gdGhpcy5jb21ib2JveExpc3QuZmluZChpdGVtID0+IGl0ZW0uSUQgPT09IHNlbGVjdGVkVmFsdWUpXG4gICAgaWYgKGluaXRpYWxpemVkVmFsdWUpIHRoaXMuaW5uZXJDb250cm9sLnNldFZhbHVlKGluaXRpYWxpemVkVmFsdWUuTEFCRUwpO1xuXG4gICAgLy8gdGhpcy5zZXRDb250cm9sU3RhdHVzKHRoaXMuX291dGVyQ29udHJvbC5zdGF0dXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGp1c3REcm9wZG93bldpZHRoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9tYWluSW5wdXQgJiYgdGhpcy5fZHJvcGRvd25NZW51KSB7XG4gICAgICBjb25zdCBpbnB1dFdpZHRoID0gdGhpcy5fbWFpbklucHV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICB0aGlzLl9kcm9wZG93bk1lbnUubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke2lucHV0V2lkdGh9cHhgO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VmFsaWRhdG9yKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vdXRlckNvbnRyb2wuaGFzVmFsaWRhdG9yKFZhbGlkYXRvcnMucmVxdWlyZWQpKSB7XG4gICAgICB0aGlzLmlubmVyQ29udHJvbC5hZGRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5pc1JlcXVpcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlubmVyQ29udHJvbC5yZW1vdmVWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5pc1JlcXVpcmVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb250cm9sU3RhdHVzKGZvcm1TdGF0dXM6IEZvcm1Db250cm9sU3RhdHVzKTogdm9pZCB7XG4gICAgc3dpdGNoKGZvcm1TdGF0dXMpIHtcbiAgICAgIGNhc2UgJ1ZBTElEJzpcbiAgICAgICAgdGhpcy5pbnZhbGlkQ29udHJvbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlubmVyQ29udHJvbC5lbmFibGUoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0lOVkFMSUQnOlxuICAgICAgICB0aGlzLmludmFsaWRDb250cm9sID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbm5lckNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdQRU5ESU5HJzpcbiAgICAgICAgdGhpcy5pbnZhbGlkQ29udHJvbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlubmVyQ29udHJvbC5lbmFibGUoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0RJU0FCTEVEJzpcbiAgICAgICAgdGhpcy5pbnZhbGlkQ29udHJvbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlubmVyQ29udHJvbC5kaXNhYmxlKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbG9hZExpc3QoKTogdm9pZCB7IHRoaXMub25SZWxvYWRMaXN0LmVtaXQodGhpcy50ZXh0b1Blc3F1aXNhKSB9XG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gVVRJTFMgPD09PT09PT09PT1cblxufVxuIiwiPGxhYmVsICpuZ0lmPVwibGFiZWxUZXh0ICYmIGxhYmVsVGV4dCAhPSAnJ1wiIFtsaWJSZXF1aXJlZF09XCJpc1JlcXVpcmVkXCIgY2xhc3M9XCJmb3JtLWxhYmVsIGZ3LWJvbGRcIj57eyBsYWJlbFRleHQgfX08L2xhYmVsPlxuPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGRyb3Bkb3duIGZsZXgtZmlsbCBnbGItbWF4LWhlaWdodC0zNTBweFwiPlxuXG4gICA8IS0tIEVzdGUgZWxlbWVudG8gbmctY29udGVudCBjb20gbyBhdHJpYnV0byBbYnRuTGVmdF0gcGVybWl0ZSBxdWUgbyB1c3XDoXJpbyBmaW5hbCBmb3JuZcOnYSBjb250ZcO6ZG8gcGVyc29uYWxpemFkbyBwYXJhIHNlciBleGliaWRvIG5vIGxhZG8gZXNxdWVyZG8gZG8gY29tYm9ib3ggZGUgcGVzcXVpc2EuXG4gICBBbyB1c2FyIG8gYXRyaWJ1dG8gW2J0bkxlZnRdLCBvIHVzdcOhcmlvIHBvZGUgZmFjaWxtZW50ZSBhZGljaW9uYXIgYm90w7VlcyBvdSBvdXRyb3MgZWxlbWVudG9zIHBhcmEgbWVsaG9yYXIgYSBmdW5jaW9uYWxpZGFkZSBvdSBhcGFyw6puY2lhIGRvIGNvbWJvYm94IGRlIHBlc3F1aXNhLiAtLT5cbiAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltidG5MZWZ0XVwiPjwvbmctY29udGVudD5cblxuICAgPGlucHV0ICAjbWFpbklucHV0IGNsYXNzPVwiZm9ybS1zZWxlY3QgdGV4dC1zdGFydCByb3VuZGVkLWVuZFwiIHR5cGU9XCJ0ZXh0XCIgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiIFtwbGFjZWhvbGRlcl09XCJtYWluSW5wdXRQbGFjZWhvbGRlclwiXG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiaW5uZXJDb250cm9sXCIgZGF0YS1icy1hdXRvLWNsb3NlPVwib3V0c2lkZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIHJlYWRvbmx5IFtjbGFzcy5pcy1pbnZhbGlkXT1cImludmFsaWRDb250cm9sXCJcbiAgICAgICAgICAgIChjbGljayk9XCJhcmlhRXhwYW5kZWQgPSAhYXJpYUV4cGFuZGVkOyBzZWFyY2hJbnB1dC5mb2N1cygpXCIgKGZvY3VzKT1cInNlYXJjaElucHV0LmZvY3VzKClcIj5cblxuICAgPHVsICAjZHJvcGRvd25NZW51ICBjbGFzcz1cImRyb3Bkb3duLW1lbnUgcC0yIGdsYi1tYXgtaGVpZ2h0LTM1MHB4IG92ZXJmbG93LXktc2Nyb2xsIHotaW5kZXgtMTAyMFwiIFtjbGFzcy5zaG93XT1cImFyaWFFeHBhbmRlZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTJcIj5cbiAgICAgICAgIDxpbnB1dCAjc2VhcmNoSW5wdXQgKGlucHV0KT1cInRleHRvUGVzcXVpc2EgPSBzZWFyY2hJbnB1dC52YWx1ZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hJbnB1dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGdsYi1pbnB1dC1uby1nbG93XCIgW3BsYWNlaG9sZGVyXT1cInNlYXJjaElucHV0UGxhY2Vob2xkZXJcIiAoa2V5dXAuZW50ZXIpPVwicmVsb2FkTGlzdCgpXCI+XG4gICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi17e2NvbG9yVGhlbWV9fVwiIChjbGljayk9XCJyZWxvYWRMaXN0KClcIj4gPGFwcC1zdmctc3RvcmFnZSBzdmdOYW1lPVwibHVwYVwiIHN2Z1NpemU9XCJtZWRpdW0tc21hbGxcIiAvPiA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICBAaWYgKGNvbWJvYm94TGlzdCkge1xuICAgICAgICAgPGxpICpuZ0lmPVwiaW5uZXJDb250cm9sLnZhbHVlICE9ICcnICYmIGlubmVyQ29udHJvbC52YWx1ZSAhPSBudWxsXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgKGNsaWNrKT1cImNsZWFyVmFsdWUoKVwiPiA8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5MaW1wYXIgb3DDp8OjbyBzZWxlY2lvbmFkYTwvc3Bhbj4gPC9saT5cbiAgICAgICAgIEBmb3IgKGl0ZW0gb2YgY29tYm9ib3hMaXN0IHwgdGV4dEZpbHRlcjp0ZXh0b1Blc3F1aXNhOyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiAoY2xpY2spPVwic2V0VmFsdWUoaXRlbSlcIj5cbiAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXRlbS5BZGRpdGlvbmFsU3RyaW5nUHJvcGVydHkxIHx8IGl0ZW0uQWRkaXRpb25hbFN0cmluZ1Byb3BlcnR5MSAhPSAnJ1wiIGNsYXNzPVwiZ2xiLWZzLTEyIGZ3LWJvbGQgZC1pbmxpbmUtYmxvY2sgdy0xMjVcIj57eyBpdGVtLkFkZGl0aW9uYWxTdHJpbmdQcm9wZXJ0eTEgfX08L3NwYW4+IHt7IGl0ZW0uTEFCRUwgfX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICB9XG4gICAgICAgICBAZW1wdHkgeyA8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGZzdC1pdGFsaWNcIj5OZW5odW0gcmVnaXN0cm8gZW5jb250cmFkbyBjb20gZXN0YSBwZXNxdWlzYS4uLjwvbGk+IH1cbiAgICAgIH1cbiAgICAgIEBlbHNlIHsgPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbSB0ZXh0LWNlbnRlclwiPiA8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+PHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5DYXJyZWdhbmRvIGRhZG9zLi4uPC9zcGFuPjwvZGl2PiA8L2xpPiB9XG4gICA8L3VsPlxuXG4gICA8IS0tIEVzdGUgZWxlbWVudG8gbmctY29udGVudCBjb20gbyBhdHJpYnV0byBbYnRuUmlnaHRdIHBlcm1pdGUgcXVlIG8gdXN1w6FyaW8gZmluYWwgZm9ybmXDp2EgY29udGXDumRvIHBlcnNvbmFsaXphZG8gcGFyYSBzZXIgZXhpYmlkbyBubyBsYWRvIGRpcmVpdG8gZG8gY29tYm9ib3ggZGUgcGVzcXVpc2EuXG4gICBBbyB1c2FyIG8gYXRyaWJ1dG8gW2J0blJpZ2h0XSwgbyB1c3XDoXJpbyBwb2RlIGZhY2lsbWVudGUgYWRpY2lvbmFyIGJvdMO1ZXMgb3Ugb3V0cm9zIGVsZW1lbnRvcyBwYXJhIG1lbGhvcmFyIGEgZnVuY2lvbmFsaWRhZGUgb3UgYXBhcsOqbmNpYSBkbyBjb21ib2JveCBkZSBwZXNxdWlzYS4gLS0+XG4gICA8bmctY29udGVudCBzZWxlY3Q9XCJbYnRuUmlnaHRdXCI+PC9uZy1jb250ZW50PlxuXG48L2Rpdj5cblxuPCEtLSAjcmVnaW9uIE1FTlNBR0VNIERFIEVSUk8gREUgVkFMSURBw4fDg08gLS0+XG48YXBwLWZpZWxkLWVycm9yLW1lc3NhZ2UgKm5nSWY9XCJpbnZhbGlkQ29udHJvbFwiIGN1c3RvbU1lc3NhZ2U9XCJFc3RlIGNhbXBvIMOpIG9icmlnYXTDs3Jpby5cIiAvPlxuPCEtLSAjZW5kcmVnaW9uIE1FTlNBR0VNIERFIEVSUk8gREUgVkFMSURBw4fDg08gLS0+XG4iXX0=
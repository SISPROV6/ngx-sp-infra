import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "../field-error-message/field-error-message.component";
import * as i4 from "../svg-storage/svg-storage.component";
import * as i5 from "../../directives/required.directive";
import * as i6 from "../../pipes/text-filter.pipe";
const _c0 = ["mainInput"];
const _c1 = ["dropdownMenu"];
const _c2 = [[["", "btnLeft", ""]], [["", "btnRight", ""]]];
const _c3 = ["[btnLeft]", "[btnRight]"];
function SearchComboboxComponent_label_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("libRequired", ctx_r1.libRequired);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.labelText);
} }
function SearchComboboxComponent_Case_3_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 14, 3);
    i0.ɵɵtwoWayListener("ngModelChange", function SearchComboboxComponent_Case_3_input_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedText, $event) || (ctx_r1.selectedText = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("click", function SearchComboboxComponent_Case_3_input_0_Template_input_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); const searchInput_r4 = i0.ɵɵreference(9); ctx_r1.ariaExpanded = !ctx_r1.ariaExpanded; return i0.ɵɵresetView(searchInput_r4.focus()); })("focus", function SearchComboboxComponent_Case_3_input_0_Template_input_focus_0_listener() { i0.ɵɵrestoreView(_r3); i0.ɵɵnextContext(2); const searchInput_r4 = i0.ɵɵreference(9); return i0.ɵɵresetView(searchInput_r4.focus()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("placeholder", ctx_r1.mainInputPlaceholder);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedText);
} }
function SearchComboboxComponent_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SearchComboboxComponent_Case_3_input_0_Template, 2, 2, "input", 13);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const disabledInput_r5 = i0.ɵɵreference(15);
    i0.ɵɵproperty("ngIf", !ctx_r1.disabled)("ngIfElse", disabledInput_r5);
} }
function SearchComboboxComponent_Case_4_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 16, 3);
    i0.ɵɵlistener("click", function SearchComboboxComponent_Case_4_input_0_Template_input_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); const searchInput_r4 = i0.ɵɵreference(9); ctx_r1.ariaExpanded = !ctx_r1.ariaExpanded; return i0.ɵɵresetView(searchInput_r4.focus()); })("focus", function SearchComboboxComponent_Case_4_input_0_Template_input_focus_0_listener() { i0.ɵɵrestoreView(_r6); i0.ɵɵnextContext(2); const searchInput_r4 = i0.ɵɵreference(9); return i0.ɵɵresetView(searchInput_r4.focus()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("is-invalid", ctx_r1.formControl && (!ctx_r1.formControl.valid && (ctx_r1.formControl.touched && ctx_r1.formControl.dirty)));
    i0.ɵɵproperty("placeholder", ctx_r1.mainInputPlaceholder)("formControl", ctx_r1.formControl);
} }
function SearchComboboxComponent_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SearchComboboxComponent_Case_4_input_0_Template, 2, 4, "input", 15);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const disabledInput_r5 = i0.ɵɵreference(15);
    i0.ɵɵproperty("ngIf", !ctx_r1.disabled)("ngIfElse", disabledInput_r5);
} }
function SearchComboboxComponent_Conditional_12_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 20);
    i0.ɵɵlistener("click", function SearchComboboxComponent_Conditional_12_li_0_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setFilterValue()); });
    i0.ɵɵelementStart(1, "span", 21);
    i0.ɵɵtext(2, "Limpar op\u00E7\u00E3o selecionada");
    i0.ɵɵelementEnd()();
} }
function SearchComboboxComponent_Conditional_12_For_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r9.AdditionalStringProperty1);
} }
function SearchComboboxComponent_Conditional_12_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 20);
    i0.ɵɵlistener("click", function SearchComboboxComponent_Conditional_12_For_2_Template_li_click_0_listener() { const item_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setFilterValue(item_r9)); });
    i0.ɵɵtemplate(1, SearchComboboxComponent_Conditional_12_For_2_span_1_Template, 2, 1, "span", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r9.AdditionalStringProperty1 || item_r9.AdditionalStringProperty1 != "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r9.LABEL, " ");
} }
function SearchComboboxComponent_Conditional_12_ForEmpty_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 19);
    i0.ɵɵtext(1, "Nenhum registro encontrado com esta pesquisa...");
    i0.ɵɵelementEnd();
} }
function SearchComboboxComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SearchComboboxComponent_Conditional_12_li_0_Template, 3, 0, "li", 17);
    i0.ɵɵrepeaterCreate(1, SearchComboboxComponent_Conditional_12_For_2_Template, 3, 2, "li", 18, i0.ɵɵrepeaterTrackByIndex, false, SearchComboboxComponent_Conditional_12_ForEmpty_3_Template, 2, 0, "li", 19);
    i0.ɵɵpipe(4, "textFilter");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedItem && ctx_r1.selectedItem.ID != "");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpipeBind2(4, 2, ctx_r1.comboboxList, ctx_r1.textoPesquisa));
} }
function SearchComboboxComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 24)(1, "div", 25)(2, "span", 26);
    i0.ɵɵtext(3, "Carregando dados...");
    i0.ɵɵelementEnd()()();
} }
function SearchComboboxComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 27, 3);
    i0.ɵɵtwoWayListener("ngModelChange", function SearchComboboxComponent_ng_template_14_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedText, $event) || (ctx_r1.selectedText = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("placeholder", ctx_r1.mainInputPlaceholder);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedText);
} }
function SearchComboboxComponent_app_field_error_message_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-field-error-message", 28);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("control", ctx_r1.formControl);
} }
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
export class SearchComboboxComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this._ariaExpanded = false;
        // #endregion PRIVATE
        // #region PUBLIC
        this.formControl = new FormControl();
        this.controlType = "ngModel";
        this.libRequired = false;
        this.disabled = false;
        this.mainInputPlaceholder = "Selecione uma opção...";
        this.searchInputPlaceholder = "Pesquisa...";
        this.colorTheme = "primary";
        this.onReloadList = new EventEmitter();
        this.onSelectItem = new EventEmitter();
        this.controlValueChange = new EventEmitter();
        this.textoPesquisa = "";
        // #endregion PUBLIC
        // #endregion ==========> PROPERTIES <==========
        // #region ==========> FORM BUILDER <==========
        this.idControl = new FormControl("");
        this.filterForm = new FormGroup({
            _searchInput: new FormControl("")
        });
    }
    ngOnInit() {
        this.initializeSelectedValue();
        this._subscription = this.formControl.valueChanges.subscribe(value => {
            this.controlValueChange.emit(this.idControl);
        });
    }
    ngAfterViewInit() {
        this.adjustDropdownWidth();
    }
    ngOnChanges(changes) {
        if (changes["initializedValueID"]?.currentValue || changes["comboboxList"]?.currentValue) {
            this.initializeSelectedValue();
        }
        if (changes["controlType"]?.currentValue || changes["controlType"]?.currentValue) {
            if (this.controlType === "formControl" && !this.formControl) {
                throw new Error("O [controlType] foi declarado como 'formControl' mas nenhum FormControl foi informado.");
            }
        }
    }
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    get ariaExpanded() { return this._ariaExpanded; }
    set ariaExpanded(value) { this._ariaExpanded = value; }
    get selectedItem() { return this._selectedItem; }
    set selectedItem(value) {
        this._selectedItem = value;
        this.onSelectItem.emit(value);
    }
    // O que fazer quando o evento de redimensionamento ocorrer
    onResize(event) { this.adjustDropdownWidth(); }
    // #endregion ==========> FORM BUILDER <==========
    // #region ==========> UTILITIES <==========
    setFilterValue(item) {
        const itemValue = item ? `${item.ID} - ${item.LABEL}` : "";
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
        }
        else {
            this.selectedText = undefined;
            this.selectedItem = { ID: "", LABEL: "", AdditionalStringProperty1: "", IS_SELECTED: false };
            if (this.controlType === "formControl") {
                this.idControl.setValue("");
                this.formControl.setValue("");
            }
        }
        this.ariaExpanded = false;
    }
    initializeSelectedValue() {
        if (!this.comboboxList || !this.comboboxList.length)
            return;
        const initializedValue = this.controlType === "ngModel"
            ? this.comboboxList.find(item => item.ID == this.initializedValueID)
            : this.comboboxList.find(item => item.ID == this.formControl.value);
        if (initializedValue) {
            this.idControl.setValue(initializedValue.ID ?? "");
            this.formControl.setValue(initializedValue.LABEL ?? "");
            this.selectedText = initializedValue.LABEL;
            this.selectedItem = { ...initializedValue, IS_SELECTED: true };
        }
    }
    adjustDropdownWidth() {
        if (this._mainInput && this._dropdownMenu) {
            const inputWidth = this._mainInput.nativeElement.offsetWidth;
            this._dropdownMenu.nativeElement.style.width = `${inputWidth}px`;
        }
    }
    reloadList(search) { this.onReloadList.emit(search); }
    static { this.ɵfac = function SearchComboboxComponent_Factory(t) { return new (t || SearchComboboxComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchComboboxComponent, selectors: [["lib-search-combobox"]], viewQuery: function SearchComboboxComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._mainInput = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._dropdownMenu = _t.first);
        } }, hostBindings: function SearchComboboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function SearchComboboxComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { formControl: [i0.ɵɵInputFlags.None, "control", "formControl"], controlType: "controlType", comboboxList: "comboboxList", labelText: "labelText", libRequired: "libRequired", disabled: "disabled", initializedValueID: "initializedValueID", mainInputPlaceholder: "mainInputPlaceholder", searchInputPlaceholder: "searchInputPlaceholder", colorTheme: "colorTheme" }, outputs: { onReloadList: "onReloadList", onSelectItem: "onSelectItem", controlValueChange: "controlValueChange" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 18, vars: 10, consts: [["dropdownMenu", ""], ["searchInput", ""], ["disabledInput", ""], ["mainInput", ""], ["class", "form-label fw-bold", 3, "libRequired", 4, "ngIf"], [1, "input-group", "dropdown", "flex-fill", "glb-max-height-350px"], [1, "dropdown-menu", "p-2", "glb-max-height-350px", "overflow-y-scroll"], [1, "input-group", "mb-2"], ["type", "text", "id", "searchInput", 1, "form-control", "glb-input-no-glow", 3, "input", "keyup.enter", "placeholder"], [3, "click"], ["svgName", "lupa", "svgSize", "medium-small"], [3, "control", 4, "ngIf"], [1, "form-label", "fw-bold", 3, "libRequired"], ["class", "form-select text-start rounded-end", "type", "text", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "false", "readonly", "", 3, "placeholder", "ngModel", "ngModelChange", "click", "focus", 4, "ngIf", "ngIfElse"], ["type", "text", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "false", "readonly", "", 1, "form-select", "text-start", "rounded-end", 3, "ngModelChange", "click", "focus", "placeholder", "ngModel"], ["class", "form-select text-start rounded-end", "type", "text", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "false", "readonly", "", 3, "placeholder", "formControl", "is-invalid", "click", "focus", 4, "ngIf", "ngIfElse"], ["type", "text", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "false", "readonly", "", 1, "form-select", "text-start", "rounded-end", 3, "click", "focus", "placeholder", "formControl"], ["class", "dropdown-item", 3, "click", 4, "ngIf"], [1, "dropdown-item"], [1, "dropdown-item", "fst-italic"], [1, "dropdown-item", 3, "click"], [1, "fw-bold"], ["class", "glb-fs-12 fw-bold d-inline-block w-125", 4, "ngIf"], [1, "glb-fs-12", "fw-bold", "d-inline-block", "w-125"], [1, "dropdown-item", "text-center"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["type", "text", "readonly", "", "disabled", "", 1, "form-select", "text-start", "rounded-end", 3, "ngModelChange", "placeholder", "ngModel"], [3, "control"]], template: function SearchComboboxComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵprojectionDef(_c2);
            i0.ɵɵtemplate(0, SearchComboboxComponent_label_0_Template, 2, 2, "label", 4);
            i0.ɵɵelementStart(1, "div", 5);
            i0.ɵɵprojection(2);
            i0.ɵɵtemplate(3, SearchComboboxComponent_Case_3_Template, 1, 2)(4, SearchComboboxComponent_Case_4_Template, 1, 2);
            i0.ɵɵelementStart(5, "ul", 6, 0)(7, "div", 7)(8, "input", 8, 1);
            i0.ɵɵlistener("input", function SearchComboboxComponent_Template_input_input_8_listener() { i0.ɵɵrestoreView(_r1); const searchInput_r4 = i0.ɵɵreference(9); return i0.ɵɵresetView(ctx.textoPesquisa = searchInput_r4.value); })("keyup.enter", function SearchComboboxComponent_Template_input_keyup_enter_8_listener() { i0.ɵɵrestoreView(_r1); const searchInput_r4 = i0.ɵɵreference(9); return i0.ɵɵresetView(ctx.reloadList(searchInput_r4.value)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 9);
            i0.ɵɵlistener("click", function SearchComboboxComponent_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); const searchInput_r4 = i0.ɵɵreference(9); return i0.ɵɵresetView(ctx.reloadList(searchInput_r4.value)); });
            i0.ɵɵelement(11, "app-svg-storage", 10);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(12, SearchComboboxComponent_Conditional_12_Template, 5, 5)(13, SearchComboboxComponent_Conditional_13_Template, 4, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(14, SearchComboboxComponent_ng_template_14_Template, 2, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵprojection(16, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(17, SearchComboboxComponent_app_field_error_message_17_Template, 1, 1, "app-field-error-message", 11);
        } if (rf & 2) {
            let tmp_4_0;
            i0.ɵɵproperty("ngIf", ctx.labelText && ctx.labelText != "");
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(3, (tmp_4_0 = ctx.controlType) === "ngModel" ? 3 : tmp_4_0 === "formControl" ? 4 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("show", ctx.ariaExpanded);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("placeholder", ctx.searchInputPlaceholder);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("btn btn-", ctx.colorTheme, "");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(12, ctx.comboboxList ? 12 : 13);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.formControl && (!ctx.formControl.valid && (ctx.formControl.touched && ctx.formControl.dirty)));
        } }, dependencies: [i2.NgIf, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i1.FormControlDirective, i3.FieldErrorMessageComponent, i4.SvgStorageComponent, i5.RequiredDirective, i6.TextFilterPipe], styles: [".glb-max-height-350px[_ngcontent-%COMP%]{max-height:350px!important}.form-label[_ngcontent-%COMP%]{font-size:16px!important}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchComboboxComponent, [{
        type: Component,
        args: [{ selector: 'lib-search-combobox', template: "<label *ngIf=\"labelText && labelText != ''\" [libRequired]=\"libRequired\" class=\"form-label fw-bold\">{{ labelText }}</label>\n<div class=\"input-group dropdown flex-fill glb-max-height-350px\">\n\n   <!-- Este elemento ng-content com o atributo [btnLeft] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado esquerdo do combobox de pesquisa.\n   Ao usar o atributo [btnLeft], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\n   <ng-content select=\"[btnLeft]\"></ng-content>\n\n   @switch (controlType) {\n      @case (\"ngModel\") {\n         <input  #mainInput   *ngIf=\"!disabled; else disabledInput\" class=\"form-select text-start rounded-end\" type=\"text\" data-bs-toggle=\"dropdown\" [placeholder]=\"mainInputPlaceholder\"\n            [(ngModel)]=\"selectedText\" data-bs-auto-close=\"outside\" aria-expanded=\"false\" readonly (click)=\"ariaExpanded = !ariaExpanded; searchInput.focus()\" (focus)=\"searchInput.focus()\">\n      }\n      @case (\"formControl\") {\n         <input  #mainInput   *ngIf=\"!disabled; else disabledInput\" class=\"form-select text-start rounded-end\" type=\"text\" data-bs-toggle=\"dropdown\" [placeholder]=\"mainInputPlaceholder\"\n            [formControl]=\"formControl\" data-bs-auto-close=\"outside\" aria-expanded=\"false\" readonly\n            [class.is-invalid]=\"formControl && (!formControl.valid && (formControl.touched && formControl.dirty))\"\n            (click)=\"ariaExpanded = !ariaExpanded; searchInput.focus()\" (focus)=\"searchInput.focus()\">\n      }\n   }\n   <ul  #dropdownMenu  class=\"dropdown-menu p-2 glb-max-height-350px overflow-y-scroll\" [class.show]=\"ariaExpanded\">\n      <div class=\"input-group mb-2\">\n         <input #searchInput (input)=\"textoPesquisa = searchInput.value\" type=\"text\" id=\"searchInput\" class=\"form-control glb-input-no-glow\" [placeholder]=\"searchInputPlaceholder\" (keyup.enter)=\"reloadList(searchInput.value)\">\n         <button class=\"btn btn-{{colorTheme}}\" (click)=\"reloadList(searchInput.value)\"> <app-svg-storage svgName=\"lupa\" svgSize=\"medium-small\" /> </button>\n      </div>\n\n      @if (comboboxList) {\n         <li *ngIf=\"selectedItem && selectedItem.ID != ''\" class=\"dropdown-item\" (click)=\"setFilterValue()\"> <span class=\"fw-bold\">Limpar op\u00E7\u00E3o selecionada</span> </li>\n         @for (item of comboboxList | textFilter:textoPesquisa; track $index) {\n            <li class=\"dropdown-item\" (click)=\"setFilterValue(item)\">\n               <span *ngIf=\"item.AdditionalStringProperty1 || item.AdditionalStringProperty1 != ''\" class=\"glb-fs-12 fw-bold d-inline-block w-125\">{{ item.AdditionalStringProperty1 }}</span> {{ item.LABEL }}\n            </li>\n         }\n         @empty { <li class=\"dropdown-item fst-italic\">Nenhum registro encontrado com esta pesquisa...</li> }\n      }\n      @else { <li class=\"dropdown-item text-center\"> <div class=\"spinner-border\" role=\"status\"><span class=\"visually-hidden\">Carregando dados...</span></div> </li> }\n   </ul>\n\n   <ng-template #disabledInput>\n      <input  #mainInput  class=\"form-select text-start rounded-end\" type=\"text\" [placeholder]=\"mainInputPlaceholder\" [(ngModel)]=\"selectedText\" readonly disabled>\n   </ng-template>\n\n   <!-- Este elemento ng-content com o atributo [btnRight] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado direito do combobox de pesquisa.\n   Ao usar o atributo [btnRight], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\n   <ng-content select=\"[btnRight]\"></ng-content>\n\n</div>\n\n<!-- #region MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\n<app-field-error-message *ngIf=\"formControl && (!formControl.valid && (formControl.touched && formControl.dirty))\" [control]=\"formControl\" />\n<!-- #endregion MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\n", styles: [".glb-max-height-350px{max-height:350px!important}.form-label{font-size:16px!important}\n"] }]
    }], () => [{ type: i1.FormBuilder }], { formControl: [{
            type: Input,
            args: ['control']
        }], controlType: [{
            type: Input,
            args: [{ required: true }]
        }], comboboxList: [{
            type: Input,
            args: [{ required: true }]
        }], labelText: [{
            type: Input
        }], libRequired: [{
            type: Input
        }], disabled: [{
            type: Input
        }], initializedValueID: [{
            type: Input
        }], mainInputPlaceholder: [{
            type: Input
        }], searchInputPlaceholder: [{
            type: Input
        }], colorTheme: [{
            type: Input
        }], onReloadList: [{
            type: Output
        }], onSelectItem: [{
            type: Output
        }], controlValueChange: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SearchComboboxComponent, { className: "SearchComboboxComponent", filePath: "lib\\widgets\\search-combobox\\search-combobox.component.ts", lineNumber: 68 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWNvbWJvYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvc2VhcmNoLWNvbWJvYm94L3NlYXJjaC1jb21ib2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL3NlYXJjaC1jb21ib2JveC9zZWFyY2gtY29tYm9ib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hLLE9BQU8sRUFBZSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNEckUsaUNBQW1HO0lBQUEsWUFBZTtJQUFBLGlCQUFROzs7SUFBOUUsZ0RBQTJCO0lBQTRCLGNBQWU7SUFBZixzQ0FBZTs7OztJQVN6RyxvQ0FDb0w7SUFBakwseVRBQTBCO0lBQXlILEFBQTVELGtSQUF1QyxzQkFBbUIsS0FBQywwTUFBVSxzQkFBbUIsS0FBQztJQURuTCxpQkFDb0w7OztJQUR4Qyx5REFBb0M7SUFDN0ssbURBQTBCOzs7SUFEN0Isb0ZBQ29MOzs7O0lBRDdJLEFBQWpCLHVDQUFpQiw4QkFBa0I7Ozs7SUFJekQsb0NBRzZGO0lBQTlCLEFBQTVELGtSQUF1QyxzQkFBbUIsS0FBQywwTUFBVSxzQkFBbUIsS0FBQztJQUg1RixpQkFHNkY7OztJQUQxRiwySUFBc0c7SUFEdEcsQUFEeUkseURBQW9DLG1DQUNsSjs7O0lBRDlCLG9GQUc2Rjs7OztJQUh0RCxBQUFqQix1Q0FBaUIsOEJBQWtCOzs7O0lBYXpELDhCQUFtRztJQUEzQiw4TEFBUyx1QkFBZ0Is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QkFEUCxZQUFZO21CQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0ZBekU5Qix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm0tdXRpbHNcIjtcblxuaW1wb3J0IHsgUmVjb3JkQ29tYm9ib3ggfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2NvbWJvYm94L3JlY29yZC1jb21ib2JveFwiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvaW50ZXJuYWwvU3Vic2NyaXB0aW9uXCI7XG5cblxuLyoqXG4gKiBAZmlsZSBzZWFyY2gtY29tYm9ib3guY29tcG9uZW50LnRzXG4gKiBAZGVzY3JpcHRpb24gRXN0ZSBhcnF1aXZvIGNvbnTDqW0gYSBpbXBsZW1lbnRhw6fDo28gZG8gY29tcG9uZW50ZSBTZWFyY2hDb21ib2JveENvbXBvbmVudCwgcXVlIMOpIHVtIGNvbXBvbmVudGUgZGUgaW50ZXJmYWNlIGRvIHVzdcOhcmlvXG4gKiBwYXJhIHJlYWxpemFyIHBlc3F1aXNhcyBlIHNlbGXDp8O1ZXMgZW0gdW1hIGxpc3RhIGRlIG9ww6fDtWVzIGFwcmVzZW50YWRhIGVtIHVtIGNvbWJvYm94LlxuICogXG4gKiBAY29tcG9uZW50IFNlYXJjaENvbWJvYm94Q29tcG9uZW50XG4gKiBAc2VsZWN0b3IgbGliLXNlYXJjaC1jb21ib2JveFxuICogQHRlbXBsYXRlVXJsIC4vc2VhcmNoLWNvbWJvYm94LmNvbXBvbmVudC5odG1sXG4gKiBAc3R5bGVVcmwgLi9zZWFyY2gtY29tYm9ib3guY29tcG9uZW50LnNjc3NcbiAqIFxuICogQGRlc2NyaXB0aW9uXG4gKiBPIGNvbXBvbmVudGUgU2VhcmNoQ29tYm9ib3hDb21wb25lbnQgw6kgcHJvamV0YWRvIHBhcmEgZm9ybmVjZXIgYW9zIHVzdcOhcmlvcyB1bWEgaW50ZXJmYWNlIHBhcmEgcGVzcXVpc2FyIGUgc2VsZWNpb25hciBpdGVucyBkZSB1bWEgbGlzdGEuXG4gKiBFbGUgc3Vwb3J0YSBhIGZpbHRyYWdlbSBkZSBpdGVucyBjb20gYmFzZSBuYSBlbnRyYWRhIGRvIHVzdcOhcmlvLCBwZXJtaXRpbmRvIHVtYSBzZWxlw6fDo28gbWFpcyBmw6FjaWwgZW0gbGlzdGFzIGV4dGVuc2FzLlxuICogXG4gKiAjIyBGdW5jaW9uYWxpZGFkZXM6XG4gKiAtIFBlc3F1aXNhIGUgZmlsdHJhZ2VtIGRlIGl0ZW5zIG5hIGxpc3RhIGRvIGNvbWJvYm94LlxuICogLSBTZWxlw6fDo28gZGUgaXRlbnMgY29tIGZlZWRiYWNrIHZpc3VhbC5cbiAqIC0gRW1pc3PDo28gZGUgZXZlbnRvcyBwZXJzb25hbGl6YWRvcyBwYXJhIGludGVyYcOnw7VlcyBkbyB1c3XDoXJpbywgY29tbyByZWNhcnJlZ2FyIGEgbGlzdGEgb3Ugc2VsZWNpb25hciB1bSBpdGVtLlxuICogLSBBanVzdGUgZGluw6JtaWNvIGRhIGxhcmd1cmEgZG8gZHJvcGRvd24gcGFyYSBjb3JyZXNwb25kZXIgYW8gaW5wdXQgcHJpbmNpcGFsLlxuICogLSBJbmljaWFsaXphw6fDo28gZGUgdW0gdmFsb3Igc2VsZWNpb25hZG8sIHNlIGZvcm5lY2lkby5cbiAqIFxuICogIyMgSW5wdXRzOlxuICogLSBgY29tYm9ib3hMaXN0YCAoUmVjb3JkQ29tYm9ib3hbXSk6IEFycmF5IGRlIG9iamV0b3MgcmVwcmVzZW50YW5kbyBvcyBpdGVucyBkaXNwb27DrXZlaXMgcGFyYSBzZWxlw6fDo28uXG4gKiAtIGBsYWJlbFRleHRgIChzdHJpbmcpOiBUZXh0byBkZSBldGlxdWV0YSBhc3NvY2lhZG8gYW8gY29tYm9ib3guXG4gKiAtIGBpbml0aWFsaXplZFZhbHVlSURgIChzdHJpbmcgfCBudW1iZXIpOiBJRCBkZSB1bSBpdGVtIGluaWNpYWxtZW50ZSBzZWxlY2lvbmFkbyBubyBjb21ib2JveC5cbiAqIC0gYGNvbG9yVGhlbWVgIChcInByaW1hcnlcIiB8IFwic2Vjb25kYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwiZGFuZ2VyXCIgfCBcIndhcm5pbmdcIiB8IFwiaW5mb1wiIHwgXCJsaWdodFwiIHwgXCJkYXJrXCIpOiBUZW1hIGRlIGNvcmVzIHBhcmEgbyBjb21wb25lbnRlLlxuICogLSBgbWFpbklucHV0UGxhY2Vob2xkZXJgIChzdHJpbmcpOiBUZXh0byBkZSBlc3Bhw6dvIHJlc2VydmFkbyBwYXJhIG8gaW5wdXQgcHJpbmNpcGFsLlxuICogLSBgc2VhcmNoSW5wdXRQbGFjZWhvbGRlcmAgKHN0cmluZyk6IFRleHRvIGRlIGVzcGHDp28gcmVzZXJ2YWRvIHBhcmEgbyBpbnB1dCBkZSBwZXNxdWlzYS5cbiAqIFxuICogIyMgT3V0cHV0czpcbiAqIC0gYG9uUmVsb2FkTGlzdGAgKEV2ZW50RW1pdHRlcjxzdHJpbmc+KTogRXZlbnRvIGVtaXRpZG8gcXVhbmRvIGEgbGlzdGEgcHJlY2lzYSBzZXIgcmVjYXJyZWdhZGEuXG4gKiAtIGBvblNlbGVjdEl0ZW1gIChFdmVudEVtaXR0ZXI8YW55Pik6IEV2ZW50byBlbWl0aWRvIHF1YW5kbyB1bSBpdGVtIMOpIHNlbGVjaW9uYWRvLlxuICogXG4gKiAjIyBQcm9wcmllZGFkZXM6XG4gKiAtIGBzZWxlY3RlZEl0ZW1gIChSZWNvcmRDb21ib2JveCk6IEdldHRlciBlIFNldHRlciBwYXJhIG8gaXRlbSBzZWxlY2lvbmFkbyBhdHVhbG1lbnRlLlxuICogLSBgRm9ybVV0aWxzYCAodHlwZW9mIEZvcm1VdGlscyk6IEdldHRlciBwYXJhIHV0aWxpdMOhcmlvcyBkZSBmb3JtdWzDoXJpby5cbiAqIC0gYF9zZWFyY2hJbnB1dGAgKHN0cmluZyk6IEdldHRlciBwYXJhIG8gdmFsb3IgZG8gaW5wdXQgZGUgcGVzcXVpc2EuXG4gKiAtIGBmaWx0ZXJGb3JtYCAoRm9ybUdyb3VwKTogR3J1cG8gZGUgZm9ybXVsw6FyaW8gcGFyYSBvIGZpbHRybyBkZSBwZXNxdWlzYS5cbiAqIFxuICogIyMgTcOpdG9kb3MgUMO6YmxpY29zOlxuICogLSBgcmVsb2FkTGlzdChzZWFyY2g6IHN0cmluZylgOiBNw6l0b2RvIHBhcmEgcmVjYXJyZWdhciBhIGxpc3RhIGRlIGl0ZW5zIGNvbSBiYXNlIG5hIHBlc3F1aXNhIGZvcm5lY2lkYS5cbiAqIC0gYHNldEZpbHRlclZhbHVlKGl0ZW0/OiBSZWNvcmRDb21ib2JveClgOiBNw6l0b2RvIHBhcmEgZGVmaW5pciBvIHZhbG9yIGRvIGZpbHRybyBjb20gYmFzZSBubyBpdGVtIHNlbGVjaW9uYWRvLlxuICogXG4gKiAjIyBFdmVudG9zOlxuICogLSBgbmdPbkluaXQoKWA6IEluaWNpYWxpemEgbyBjb21wb25lbnRlLlxuICogLSBgbmdBZnRlclZpZXdJbml0KClgOiBBanVzdGEgYSBsYXJndXJhIGRvIGRyb3Bkb3duIGFww7NzIGEgdmlzdWFsaXphw6fDo28gZG8gY29tcG9uZW50ZS5cbiAqIC0gYG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpYDogUmVzcG9uZGUgYSBtdWRhbsOnYXMgbmFzIHByb3ByaWVkYWRlcyBkZSBlbnRyYWRhLlxuICogXG4gKiAjIyBVdGlsaXTDoXJpb3M6XG4gKiAtIGBjcmVhdGVGaWx0ZXJGb3JtKClgOiBDcmlhIG8gZm9ybXVsw6FyaW8gZGUgZmlsdHJvIHBhcmEgYSBwZXNxdWlzYS5cbiAqIC0gYGluaXRpYWxpemVTZWxlY3RlZFZhbHVlKClgOiBJbmljaWFsaXphIG8gdmFsb3Igc2VsZWNpb25hZG8gbm8gY29tYm9ib3gsIHNlIGZvcm5lY2lkby5cbiAqIC0gYGFkanVzdERyb3Bkb3duV2lkdGgoKWA6IEFqdXN0YSBhIGxhcmd1cmEgZG8gZHJvcGRvd24gcGFyYSBjb3JyZXNwb25kZXIgw6AgbGFyZ3VyYSBkbyBpbnB1dCBwcmluY2lwYWwuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zZWFyY2gtY29tYm9ib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWNvbWJvYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3NlYXJjaC1jb21ib2JveC5jb21wb25lbnQuc2Nzcydcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tYm9ib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGlhbGl6ZVNlbGVjdGVkVmFsdWUoKTtcbiAgICBcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy5jb250cm9sVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmlkQ29udHJvbClcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkanVzdERyb3Bkb3duV2lkdGgoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1tcImluaXRpYWxpemVkVmFsdWVJRFwiXT8uY3VycmVudFZhbHVlIHx8IGNoYW5nZXNbXCJjb21ib2JveExpc3RcIl0/LmN1cnJlbnRWYWx1ZSkgeyB0aGlzLmluaXRpYWxpemVTZWxlY3RlZFZhbHVlKCkgfVxuXG4gICAgaWYgKGNoYW5nZXNbXCJjb250cm9sVHlwZVwiXT8uY3VycmVudFZhbHVlIHx8IGNoYW5nZXNbXCJjb250cm9sVHlwZVwiXT8uY3VycmVudFZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5jb250cm9sVHlwZSA9PT0gXCJmb3JtQ29udHJvbFwiICYmICF0aGlzLmZvcm1Db250cm9sKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gW2NvbnRyb2xUeXBlXSBmb2kgZGVjbGFyYWRvIGNvbW8gJ2Zvcm1Db250cm9sJyBtYXMgbmVuaHVtIEZvcm1Db250cm9sIGZvaSBpbmZvcm1hZG8uXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gUFJPUEVSVElFUyA8PT09PT09PT09PVxuXG4gIC8vICNyZWdpb24gUFJJVkFURVxuICBwcml2YXRlIF9zZWxlY3RlZEl0ZW06IFJlY29yZENvbWJvYm94O1xuICBwcml2YXRlIF9hcmlhRXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIC8vICNlbmRyZWdpb24gUFJJVkFURVxuXG4gIC8vICNyZWdpb24gUFVCTElDXG4gIEBJbnB1dCgnY29udHJvbCcpIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBASW5wdXQoeyByZXF1aXJlZDogdHJ1ZSB9KSBwdWJsaWMgY29udHJvbFR5cGU6IFwibmdNb2RlbFwiIHwgXCJmb3JtQ29udHJvbFwiID0gXCJuZ01vZGVsXCI7XG5cbiAgQElucHV0KHsgcmVxdWlyZWQ6IHRydWUgfSkgcHVibGljIGNvbWJvYm94TGlzdDogUmVjb3JkQ29tYm9ib3hbXTtcbiAgQElucHV0KCkgcHVibGljIGxhYmVsVGV4dDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBsaWJSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGluaXRpYWxpemVkVmFsdWVJRDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBwdWJsaWMgbWFpbklucHV0UGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiU2VsZWNpb25lIHVtYSBvcMOnw6NvLi4uXCI7XG4gIEBJbnB1dCgpIHB1YmxpYyBzZWFyY2hJbnB1dFBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIlBlc3F1aXNhLi4uXCI7XG4gIEBJbnB1dCgpIHB1YmxpYyBjb2xvclRoZW1lOiBzdHJpbmcgPSBcInByaW1hcnlcIjtcbiAgXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25SZWxvYWRMaXN0OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uU2VsZWN0SXRlbTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBjb250cm9sVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1Db250cm9sPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ21haW5JbnB1dCcpIHByaXZhdGUgX21haW5JbnB1dCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duTWVudScpIHByaXZhdGUgX2Ryb3Bkb3duTWVudSE6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIHNlbGVjdGVkVGV4dD86IHN0cmluZztcbiAgcHVibGljIHRleHRvUGVzcXVpc2E6IHN0cmluZyA9IFwiXCI7XG5cbiAgcHVibGljIGdldCBhcmlhRXhwYW5kZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9hcmlhRXhwYW5kZWQ7IH1cbiAgcHVibGljIHNldCBhcmlhRXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fYXJpYUV4cGFuZGVkID0gdmFsdWU7IH1cblxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkSXRlbSgpOiBSZWNvcmRDb21ib2JveCB7IHJldHVybiB0aGlzLl9zZWxlY3RlZEl0ZW07IH1cbiAgcHVibGljIHNldCBzZWxlY3RlZEl0ZW0odmFsdWU6IFJlY29yZENvbWJvYm94KSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gdmFsdWU7XG4gICAgdGhpcy5vblNlbGVjdEl0ZW0uZW1pdCh2YWx1ZSk7XG4gIH1cblxuXG4gIC8vIE8gcXVlIGZhemVyIHF1YW5kbyBvIGV2ZW50byBkZSByZWRpbWVuc2lvbmFtZW50byBvY29ycmVyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudDogRXZlbnQpOiB2b2lkIHsgdGhpcy5hZGp1c3REcm9wZG93bldpZHRoKCkgfVxuICAvLyAjZW5kcmVnaW9uIFBVQkxJQ1xuXG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gUFJPUEVSVElFUyA8PT09PT09PT09PVxuXG5cbiAgLy8gI3JlZ2lvbiA9PT09PT09PT09PiBGT1JNIEJVSUxERVIgPD09PT09PT09PT1cbiAgcHJpdmF0ZSBpZENvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sPHN0cmluZyB8IG51bWJlcj4oXCJcIilcbiAgcHVibGljIGZpbHRlckZvcm06IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xuICAgIF9zZWFyY2hJbnB1dDogbmV3IEZvcm1Db250cm9sPHN0cmluZz4oXCJcIilcbiAgfSk7XG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gRk9STSBCVUlMREVSIDw9PT09PT09PT09XG5cblxuICAvLyAjcmVnaW9uID09PT09PT09PT0+IFVUSUxJVElFUyA8PT09PT09PT09PVxuICBwdWJsaWMgc2V0RmlsdGVyVmFsdWUoaXRlbT86IFJlY29yZENvbWJvYm94KTogdm9pZCB7XG4gICAgY29uc3QgaXRlbVZhbHVlID0gaXRlbSA/IGAke2l0ZW0uSUQgYXMgc3RyaW5nfSAtICR7aXRlbS5MQUJFTH1gIDogXCJcIjtcbiAgICB0aGlzLmZpbHRlckZvcm0uY29udHJvbHNbXCJfc2VhcmNoSW5wdXRcIl0uc2V0VmFsdWUoaXRlbVZhbHVlKTtcblxuICAgIHRoaXMudGV4dG9QZXNxdWlzYSA9IFwiXCI7XG4gICAgdGhpcy5mb3JtQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuXG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0ID0gaXRlbS5MQUJFTDtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0geyAuLi5pdGVtLCBJU19TRUxFQ1RFRDogdHJ1ZSB9O1xuICAgICAgaWYgKHRoaXMuY29udHJvbFR5cGUgPT09IFwiZm9ybUNvbnRyb2xcIikge1xuICAgICAgICB0aGlzLmlkQ29udHJvbC5zZXRWYWx1ZShpdGVtLklEKTtcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShpdGVtLkxBQkVMKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZFRleHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHsgSUQ6IFwiXCIsIExBQkVMOiBcIlwiLCBBZGRpdGlvbmFsU3RyaW5nUHJvcGVydHkxOiBcIlwiLCBJU19TRUxFQ1RFRDogZmFsc2UgfTtcbiAgICAgIGlmICh0aGlzLmNvbnRyb2xUeXBlID09PSBcImZvcm1Db250cm9sXCIpIHtcbiAgICAgICAgdGhpcy5pZENvbnRyb2wuc2V0VmFsdWUoXCJcIik7XG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoXCJcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hcmlhRXhwYW5kZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVNlbGVjdGVkVmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNvbWJvYm94TGlzdCB8fCAhdGhpcy5jb21ib2JveExpc3QubGVuZ3RoKSByZXR1cm47XG5cbiAgICBjb25zdCBpbml0aWFsaXplZFZhbHVlID0gdGhpcy5jb250cm9sVHlwZSA9PT0gXCJuZ01vZGVsXCJcbiAgICAgID8gdGhpcy5jb21ib2JveExpc3QuZmluZChpdGVtID0+IGl0ZW0uSUQgPT0gdGhpcy5pbml0aWFsaXplZFZhbHVlSUQpXG4gICAgICA6IHRoaXMuY29tYm9ib3hMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLklEID09IHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpO1xuXG4gICAgaWYgKGluaXRpYWxpemVkVmFsdWUpIHtcbiAgICAgIHRoaXMuaWRDb250cm9sLnNldFZhbHVlKGluaXRpYWxpemVkVmFsdWUuSUQgPz8gXCJcIik7XG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKGluaXRpYWxpemVkVmFsdWUuTEFCRUwgPz8gXCJcIik7XG4gICAgICBcbiAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0ID0gaW5pdGlhbGl6ZWRWYWx1ZS5MQUJFTDtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0geyAuLi5pbml0aWFsaXplZFZhbHVlLCBJU19TRUxFQ1RFRDogdHJ1ZSB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRqdXN0RHJvcGRvd25XaWR0aCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbWFpbklucHV0ICYmIHRoaXMuX2Ryb3Bkb3duTWVudSkge1xuICAgICAgY29uc3QgaW5wdXRXaWR0aCA9IHRoaXMuX21haW5JbnB1dC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgdGhpcy5fZHJvcGRvd25NZW51Lm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtpbnB1dFdpZHRofXB4YDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVsb2FkTGlzdChzZWFyY2g6IHN0cmluZyk6IHZvaWQgeyB0aGlzLm9uUmVsb2FkTGlzdC5lbWl0KHNlYXJjaCkgfVxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IFVUSUxJVElFUyA8PT09PT09PT09PVxuXG59XG4iLCI8bGFiZWwgKm5nSWY9XCJsYWJlbFRleHQgJiYgbGFiZWxUZXh0ICE9ICcnXCIgW2xpYlJlcXVpcmVkXT1cImxpYlJlcXVpcmVkXCIgY2xhc3M9XCJmb3JtLWxhYmVsIGZ3LWJvbGRcIj57eyBsYWJlbFRleHQgfX08L2xhYmVsPlxuPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGRyb3Bkb3duIGZsZXgtZmlsbCBnbGItbWF4LWhlaWdodC0zNTBweFwiPlxuXG4gICA8IS0tIEVzdGUgZWxlbWVudG8gbmctY29udGVudCBjb20gbyBhdHJpYnV0byBbYnRuTGVmdF0gcGVybWl0ZSBxdWUgbyB1c3XDoXJpbyBmaW5hbCBmb3JuZcOnYSBjb250ZcO6ZG8gcGVyc29uYWxpemFkbyBwYXJhIHNlciBleGliaWRvIG5vIGxhZG8gZXNxdWVyZG8gZG8gY29tYm9ib3ggZGUgcGVzcXVpc2EuXG4gICBBbyB1c2FyIG8gYXRyaWJ1dG8gW2J0bkxlZnRdLCBvIHVzdcOhcmlvIHBvZGUgZmFjaWxtZW50ZSBhZGljaW9uYXIgYm90w7VlcyBvdSBvdXRyb3MgZWxlbWVudG9zIHBhcmEgbWVsaG9yYXIgYSBmdW5jaW9uYWxpZGFkZSBvdSBhcGFyw6puY2lhIGRvIGNvbWJvYm94IGRlIHBlc3F1aXNhLiAtLT5cbiAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltidG5MZWZ0XVwiPjwvbmctY29udGVudD5cblxuICAgQHN3aXRjaCAoY29udHJvbFR5cGUpIHtcbiAgICAgIEBjYXNlIChcIm5nTW9kZWxcIikge1xuICAgICAgICAgPGlucHV0ICAjbWFpbklucHV0ICAgKm5nSWY9XCIhZGlzYWJsZWQ7IGVsc2UgZGlzYWJsZWRJbnB1dFwiIGNsYXNzPVwiZm9ybS1zZWxlY3QgdGV4dC1zdGFydCByb3VuZGVkLWVuZFwiIHR5cGU9XCJ0ZXh0XCIgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiIFtwbGFjZWhvbGRlcl09XCJtYWluSW5wdXRQbGFjZWhvbGRlclwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVGV4dFwiIGRhdGEtYnMtYXV0by1jbG9zZT1cIm91dHNpZGVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiByZWFkb25seSAoY2xpY2spPVwiYXJpYUV4cGFuZGVkID0gIWFyaWFFeHBhbmRlZDsgc2VhcmNoSW5wdXQuZm9jdXMoKVwiIChmb2N1cyk9XCJzZWFyY2hJbnB1dC5mb2N1cygpXCI+XG4gICAgICB9XG4gICAgICBAY2FzZSAoXCJmb3JtQ29udHJvbFwiKSB7XG4gICAgICAgICA8aW5wdXQgICNtYWluSW5wdXQgICAqbmdJZj1cIiFkaXNhYmxlZDsgZWxzZSBkaXNhYmxlZElucHV0XCIgY2xhc3M9XCJmb3JtLXNlbGVjdCB0ZXh0LXN0YXJ0IHJvdW5kZWQtZW5kXCIgdHlwZT1cInRleHRcIiBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCIgW3BsYWNlaG9sZGVyXT1cIm1haW5JbnB1dFBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiIGRhdGEtYnMtYXV0by1jbG9zZT1cIm91dHNpZGVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiByZWFkb25seVxuICAgICAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwiZm9ybUNvbnRyb2wgJiYgKCFmb3JtQ29udHJvbC52YWxpZCAmJiAoZm9ybUNvbnRyb2wudG91Y2hlZCAmJiBmb3JtQ29udHJvbC5kaXJ0eSkpXCJcbiAgICAgICAgICAgIChjbGljayk9XCJhcmlhRXhwYW5kZWQgPSAhYXJpYUV4cGFuZGVkOyBzZWFyY2hJbnB1dC5mb2N1cygpXCIgKGZvY3VzKT1cInNlYXJjaElucHV0LmZvY3VzKClcIj5cbiAgICAgIH1cbiAgIH1cbiAgIDx1bCAgI2Ryb3Bkb3duTWVudSAgY2xhc3M9XCJkcm9wZG93bi1tZW51IHAtMiBnbGItbWF4LWhlaWdodC0zNTBweCBvdmVyZmxvdy15LXNjcm9sbFwiIFtjbGFzcy5zaG93XT1cImFyaWFFeHBhbmRlZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTJcIj5cbiAgICAgICAgIDxpbnB1dCAjc2VhcmNoSW5wdXQgKGlucHV0KT1cInRleHRvUGVzcXVpc2EgPSBzZWFyY2hJbnB1dC52YWx1ZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hJbnB1dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGdsYi1pbnB1dC1uby1nbG93XCIgW3BsYWNlaG9sZGVyXT1cInNlYXJjaElucHV0UGxhY2Vob2xkZXJcIiAoa2V5dXAuZW50ZXIpPVwicmVsb2FkTGlzdChzZWFyY2hJbnB1dC52YWx1ZSlcIj5cbiAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXt7Y29sb3JUaGVtZX19XCIgKGNsaWNrKT1cInJlbG9hZExpc3Qoc2VhcmNoSW5wdXQudmFsdWUpXCI+IDxhcHAtc3ZnLXN0b3JhZ2Ugc3ZnTmFtZT1cImx1cGFcIiBzdmdTaXplPVwibWVkaXVtLXNtYWxsXCIgLz4gPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgQGlmIChjb21ib2JveExpc3QpIHtcbiAgICAgICAgIDxsaSAqbmdJZj1cInNlbGVjdGVkSXRlbSAmJiBzZWxlY3RlZEl0ZW0uSUQgIT0gJydcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiAoY2xpY2spPVwic2V0RmlsdGVyVmFsdWUoKVwiPiA8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5MaW1wYXIgb3DDp8OjbyBzZWxlY2lvbmFkYTwvc3Bhbj4gPC9saT5cbiAgICAgICAgIEBmb3IgKGl0ZW0gb2YgY29tYm9ib3hMaXN0IHwgdGV4dEZpbHRlcjp0ZXh0b1Blc3F1aXNhOyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiAoY2xpY2spPVwic2V0RmlsdGVyVmFsdWUoaXRlbSlcIj5cbiAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXRlbS5BZGRpdGlvbmFsU3RyaW5nUHJvcGVydHkxIHx8IGl0ZW0uQWRkaXRpb25hbFN0cmluZ1Byb3BlcnR5MSAhPSAnJ1wiIGNsYXNzPVwiZ2xiLWZzLTEyIGZ3LWJvbGQgZC1pbmxpbmUtYmxvY2sgdy0xMjVcIj57eyBpdGVtLkFkZGl0aW9uYWxTdHJpbmdQcm9wZXJ0eTEgfX08L3NwYW4+IHt7IGl0ZW0uTEFCRUwgfX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICB9XG4gICAgICAgICBAZW1wdHkgeyA8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGZzdC1pdGFsaWNcIj5OZW5odW0gcmVnaXN0cm8gZW5jb250cmFkbyBjb20gZXN0YSBwZXNxdWlzYS4uLjwvbGk+IH1cbiAgICAgIH1cbiAgICAgIEBlbHNlIHsgPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbSB0ZXh0LWNlbnRlclwiPiA8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+PHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5DYXJyZWdhbmRvIGRhZG9zLi4uPC9zcGFuPjwvZGl2PiA8L2xpPiB9XG4gICA8L3VsPlxuXG4gICA8bmctdGVtcGxhdGUgI2Rpc2FibGVkSW5wdXQ+XG4gICAgICA8aW5wdXQgICNtYWluSW5wdXQgIGNsYXNzPVwiZm9ybS1zZWxlY3QgdGV4dC1zdGFydCByb3VuZGVkLWVuZFwiIHR5cGU9XCJ0ZXh0XCIgW3BsYWNlaG9sZGVyXT1cIm1haW5JbnB1dFBsYWNlaG9sZGVyXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFRleHRcIiByZWFkb25seSBkaXNhYmxlZD5cbiAgIDwvbmctdGVtcGxhdGU+XG5cbiAgIDwhLS0gRXN0ZSBlbGVtZW50byBuZy1jb250ZW50IGNvbSBvIGF0cmlidXRvIFtidG5SaWdodF0gcGVybWl0ZSBxdWUgbyB1c3XDoXJpbyBmaW5hbCBmb3JuZcOnYSBjb250ZcO6ZG8gcGVyc29uYWxpemFkbyBwYXJhIHNlciBleGliaWRvIG5vIGxhZG8gZGlyZWl0byBkbyBjb21ib2JveCBkZSBwZXNxdWlzYS5cbiAgIEFvIHVzYXIgbyBhdHJpYnV0byBbYnRuUmlnaHRdLCBvIHVzdcOhcmlvIHBvZGUgZmFjaWxtZW50ZSBhZGljaW9uYXIgYm90w7VlcyBvdSBvdXRyb3MgZWxlbWVudG9zIHBhcmEgbWVsaG9yYXIgYSBmdW5jaW9uYWxpZGFkZSBvdSBhcGFyw6puY2lhIGRvIGNvbWJvYm94IGRlIHBlc3F1aXNhLiAtLT5cbiAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltidG5SaWdodF1cIj48L25nLWNvbnRlbnQ+XG5cbjwvZGl2PlxuXG48IS0tICNyZWdpb24gTUVOU0FHRU0gREUgRVJSTyBERSBWQUxJREHDh8ODTyAtLT5cbjxhcHAtZmllbGQtZXJyb3ItbWVzc2FnZSAqbmdJZj1cImZvcm1Db250cm9sICYmICghZm9ybUNvbnRyb2wudmFsaWQgJiYgKGZvcm1Db250cm9sLnRvdWNoZWQgJiYgZm9ybUNvbnRyb2wuZGlydHkpKVwiIFtjb250cm9sXT1cImZvcm1Db250cm9sXCIgLz5cbjwhLS0gI2VuZHJlZ2lvbiBNRU5TQUdFTSBERSBFUlJPIERFIFZBTElEQcOHw4NPIC0tPlxuIl19
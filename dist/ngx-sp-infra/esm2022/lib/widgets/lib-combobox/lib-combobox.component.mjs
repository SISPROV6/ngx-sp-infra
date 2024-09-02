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
    // #endregion PRIVATE
    // #region PUBLIC
    /** (obrigatório) Control para seleção dos valores, atualizará automaticamente o control do componente pai também
     * @alias 'control'
     * @type {FormControl<any> | AbstractControl<any>} */
    set outerControl(value) {
        this._outerControl = value;
        // Cancela a subscrição anterior (se houver) para evitar múltiplas subscrições
        if (this._subscription)
            this._subscription.unsubscribe();
        // Subscrição ao observável valueChanges para reagir a mudanças no valor
        this._subscription = this._outerControl.valueChanges.subscribe(() => { this.initializeSelectedValue(); });
    }
    get outerControl() { return this._outerControl; }
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
    get ariaExpanded() { return this._ariaExpanded; }
    set ariaExpanded(value) { this._ariaExpanded = value; }
    // #endregion PUBLIC
    // #endregion ==========> PROPERTIES <==========
    // #region ==========> INITIALIZATION <==========
    constructor() {
        // #region ==========> PROPERTIES <==========
        // #region PRIVATE
        this._disabled = false;
        this._ariaExpanded = false;
        this._subscription = new Subscription();
        this._outerControl = new FormControl(null);
        /** (opcional) Define se o campo é obrigatório, vai exibir o '*' vermelho ao lado do label (se ele estiver presente)
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
        this.onChange = new EventEmitter();
        this.textoPesquisa = "";
        this.innerControl = new FormControl(null);
        this.isInvalid = false;
    }
    ngOnInit() {
        this.setValidator();
        this.initializeSelectedValue();
    }
    ngAfterViewInit() {
        this.adjustDropdownWidth();
    }
    ngOnChanges(changes) {
        if (changes["comboboxList"]?.currentValue)
            this.initializeSelectedValue();
        if (changes["outerControl"]?.currentValue)
            this.initializeSelectedValue();
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
        this.outerControl.markAsDirty();
        this.outerControl.setValue(item.ID);
        this.innerControl.setValue(item.LABEL);
        this.ariaExpanded = false;
        this.setIsInvalid();
        this.onChange.emit(item.ID);
    }
    clearValue() {
        this.textoPesquisa = "";
        this.innerControl.markAsDirty();
        this.outerControl.markAsDirty();
        this.outerControl.setValue(null);
        this.innerControl.setValue(null);
        this.ariaExpanded = false;
        this.setIsInvalid();
        this.onChange.emit(null);
    }
    initializeSelectedValue() {
        this.innerControl.setValue(null); // Limpa o campo antes de qualquer coisa
        if (!this.comboboxList || (this.outerControl.value == null && this.outerControl.value == ''))
            return;
        const initializedValue = this.comboboxList.find(item => item.ID == this.outerControl.value);
        if (initializedValue)
            this.innerControl.setValue(initializedValue.LABEL);
    }
    adjustDropdownWidth() {
        if (this._mainInput && this._dropdownMenu) {
            const inputWidth = this._mainInput.nativeElement.offsetWidth;
            this._dropdownMenu.nativeElement.style.width = `${inputWidth}px`;
        }
    }
    setValidator() {
        if (this.outerControl.hasValidator(Validators.required)) {
            this.innerControl.addValidators(Validators.required);
        }
    }
    setIsInvalid() {
        this.isInvalid = this.innerControl.invalid && (this.innerControl.touched || this.innerControl.dirty);
    }
    reloadList() { this.onReloadList.emit(this.textoPesquisa); }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LibComboboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: LibComboboxComponent, selector: "lib-combobox", inputs: { outerControl: ["control", "outerControl"], comboboxList: ["list", "comboboxList"], labelText: "labelText", libRequired: "libRequired", disabled: "disabled", mainInputPlaceholder: ["mainPlaceholder", "mainInputPlaceholder"], searchInputPlaceholder: ["searchPlaceholder", "searchInputPlaceholder"], colorTheme: ["theme", "colorTheme"] }, outputs: { onReloadList: "onReloadList", onChange: "onChange" }, host: { listeners: { "window:resize": "onResize($event)" } }, viewQueries: [{ propertyName: "_mainInput", first: true, predicate: ["mainInput"], descendants: true }, { propertyName: "_dropdownMenu", first: true, predicate: ["dropdownMenu"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<label *ngIf=\"labelText && labelText != ''\" [libRequired]=\"libRequired ?? false\" class=\"form-label fw-bold\">{{ labelText }}</label>\r\n<div class=\"input-group dropdown flex-fill glb-max-height-350px\">\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnLeft] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado esquerdo do combobox de pesquisa.\r\n   Ao usar o atributo [btnLeft], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnLeft]\"></ng-content>\r\n\r\n   <input  #mainInput class=\"form-select text-start rounded-end\" type=\"text\" data-bs-toggle=\"dropdown\" [placeholder]=\"mainInputPlaceholder\"\r\n            [formControl]=\"innerControl\" data-bs-auto-close=\"outside\" aria-expanded=\"false\" readonly [class.is-invalid]=\"isInvalid\"\r\n            (click)=\"ariaExpanded = !ariaExpanded; searchInput.focus()\" (focus)=\"searchInput.focus()\">\r\n\r\n   <ul  #dropdownMenu  class=\"dropdown-menu p-2 glb-max-height-350px overflow-y-scroll z-index-1020\" [class.show]=\"ariaExpanded\">\r\n      <div class=\"input-group mb-2\">\r\n         <input #searchInput (input)=\"textoPesquisa = searchInput.value\" type=\"text\" id=\"searchInput\" class=\"form-control glb-input-no-glow\" [placeholder]=\"searchInputPlaceholder\" (keyup.enter)=\"reloadList()\">\r\n         <button class=\"btn btn-{{colorTheme}}\" (click)=\"reloadList()\"> <app-svg-storage svgName=\"lupa\" svgSize=\"medium-small\" /> </button>\r\n      </div>\r\n\r\n      @if (comboboxList) {\r\n         <li *ngIf=\"innerControl.value != '' && innerControl.value != null\" class=\"dropdown-item\" (click)=\"clearValue()\"> <span class=\"fw-bold\">Limpar op\u00E7\u00E3o selecionada</span> </li>\r\n         @for (item of comboboxList | textFilter:textoPesquisa; track $index) {\r\n            <li class=\"dropdown-item\" (click)=\"setValue(item)\">\r\n               <span *ngIf=\"item.AdditionalStringProperty1 || item.AdditionalStringProperty1 != ''\" class=\"glb-fs-12 fw-bold d-inline-block w-125\">{{ item.AdditionalStringProperty1 }}</span> {{ item.LABEL }}\r\n            </li>\r\n         }\r\n         @empty { <li class=\"dropdown-item fst-italic\">Nenhum registro encontrado com esta pesquisa...</li> }\r\n      }\r\n      @else { <li class=\"dropdown-item text-center\"> <div class=\"spinner-border\" role=\"status\"><span class=\"visually-hidden\">Carregando dados...</span></div> </li> }\r\n   </ul>\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnRight] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado direito do combobox de pesquisa.\r\n   Ao usar o atributo [btnRight], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnRight]\"></ng-content>\r\n\r\n</div>\r\n\r\n<!-- #region MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n<app-field-error-message *ngIf=\"isInvalid\" [control]=\"innerControl\" />\r\n<!-- #endregion MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n", styles: [".glb-max-height-350px{max-height:350px!important}.form-label{font-size:16px!important}.z-index-1020{z-index:1020!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.FieldErrorMessageComponent, selector: "app-field-error-message", inputs: ["customMessage", "control", "label"] }, { kind: "component", type: i4.SvgStorageComponent, selector: "app-svg-storage", inputs: ["svgName", "svgColor", "svgFill", "svgSize", "svgStrokeWidth"] }, { kind: "directive", type: i5.RequiredDirective, selector: "label[libRequired], span[libRequired], p[libRequired]", inputs: ["libRequired", "sisID"] }, { kind: "pipe", type: i6.TextFilterPipe, name: "textFilter" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LibComboboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-combobox', template: "<label *ngIf=\"labelText && labelText != ''\" [libRequired]=\"libRequired ?? false\" class=\"form-label fw-bold\">{{ labelText }}</label>\r\n<div class=\"input-group dropdown flex-fill glb-max-height-350px\">\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnLeft] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado esquerdo do combobox de pesquisa.\r\n   Ao usar o atributo [btnLeft], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnLeft]\"></ng-content>\r\n\r\n   <input  #mainInput class=\"form-select text-start rounded-end\" type=\"text\" data-bs-toggle=\"dropdown\" [placeholder]=\"mainInputPlaceholder\"\r\n            [formControl]=\"innerControl\" data-bs-auto-close=\"outside\" aria-expanded=\"false\" readonly [class.is-invalid]=\"isInvalid\"\r\n            (click)=\"ariaExpanded = !ariaExpanded; searchInput.focus()\" (focus)=\"searchInput.focus()\">\r\n\r\n   <ul  #dropdownMenu  class=\"dropdown-menu p-2 glb-max-height-350px overflow-y-scroll z-index-1020\" [class.show]=\"ariaExpanded\">\r\n      <div class=\"input-group mb-2\">\r\n         <input #searchInput (input)=\"textoPesquisa = searchInput.value\" type=\"text\" id=\"searchInput\" class=\"form-control glb-input-no-glow\" [placeholder]=\"searchInputPlaceholder\" (keyup.enter)=\"reloadList()\">\r\n         <button class=\"btn btn-{{colorTheme}}\" (click)=\"reloadList()\"> <app-svg-storage svgName=\"lupa\" svgSize=\"medium-small\" /> </button>\r\n      </div>\r\n\r\n      @if (comboboxList) {\r\n         <li *ngIf=\"innerControl.value != '' && innerControl.value != null\" class=\"dropdown-item\" (click)=\"clearValue()\"> <span class=\"fw-bold\">Limpar op\u00E7\u00E3o selecionada</span> </li>\r\n         @for (item of comboboxList | textFilter:textoPesquisa; track $index) {\r\n            <li class=\"dropdown-item\" (click)=\"setValue(item)\">\r\n               <span *ngIf=\"item.AdditionalStringProperty1 || item.AdditionalStringProperty1 != ''\" class=\"glb-fs-12 fw-bold d-inline-block w-125\">{{ item.AdditionalStringProperty1 }}</span> {{ item.LABEL }}\r\n            </li>\r\n         }\r\n         @empty { <li class=\"dropdown-item fst-italic\">Nenhum registro encontrado com esta pesquisa...</li> }\r\n      }\r\n      @else { <li class=\"dropdown-item text-center\"> <div class=\"spinner-border\" role=\"status\"><span class=\"visually-hidden\">Carregando dados...</span></div> </li> }\r\n   </ul>\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnRight] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado direito do combobox de pesquisa.\r\n   Ao usar o atributo [btnRight], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnRight]\"></ng-content>\r\n\r\n</div>\r\n\r\n<!-- #region MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n<app-field-error-message *ngIf=\"isInvalid\" [control]=\"innerControl\" />\r\n<!-- #endregion MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n", styles: [".glb-max-height-350px{max-height:350px!important}.form-label{font-size:16px!important}.z-index-1020{z-index:1020!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWNvbWJvYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvbGliLWNvbWJvYm94L2xpYi1jb21ib2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2xpYi1jb21ib2JveC9saWItY29tYm9ib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFxQixTQUFTLEVBQWMsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUksT0FBTyxFQUFtQixXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7QUFJcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCRztBQU1ILE1BQU0sT0FBTyxvQkFBb0I7SUFVL0IscUJBQXFCO0lBRXJCLGlCQUFpQjtJQUVqQjs7eURBRXFEO0lBQ3JELElBQ1csWUFBWSxDQUFDLEtBQThDO1FBQ3BFLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBb0IsQ0FBQTtRQUV6Qyw4RUFBOEU7UUFDOUUsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFekQsd0VBQXdFO1FBQ3hFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0csQ0FBQztJQUNELElBQVcsWUFBWSxL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QixvQkFBb0I7c0JBQXBELEtBQUs7dUJBQUMsaUJBQWlCO2dCQU1XLHNCQUFzQjtzQkFBeEQsS0FBSzt1QkFBQyxtQkFBbUI7Z0JBT0gsVUFBVTtzQkFBaEMsS0FBSzt1QkFBQyxPQUFPO2dCQU1HLFlBQVk7c0JBQTVCLE1BQU07Z0JBR1UsUUFBUTtzQkFBeEIsTUFBTTtnQkFHeUIsVUFBVTtzQkFBekMsU0FBUzt1QkFBQyxXQUFXO2dCQUNhLGFBQWE7c0JBQS9DLFNBQVM7dUJBQUMsY0FBYztnQkFxQ3pCLFFBQVE7c0JBRFAsWUFBWTt1QkFBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFJlY29yZENvbWJvYm94IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbWJvYm94L3JlY29yZC1jb21ib2JveCc7XHJcblxyXG4vKipcclxuICogQGNvbXBvbmVudCBMaWJDb21ib2JveENvbXBvbmVudFxyXG4gKiBAc2VsZWN0b3IgbGliLWNvbWJvYm94XHJcbiAqIFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogTyBjb21wb25lbnRlIExpYkNvbWJvYm94Q29tcG9uZW50IMOpIHByb2pldGFkbyBwYXJhIGZvcm5lY2VyIGFvcyB1c3XDoXJpb3MgdW1hIGludGVyZmFjZSBwYXJhIHBlc3F1aXNhciBlIHNlbGVjaW9uYXIgaXRlbnMgZGUgdW1hIGxpc3RhLlxyXG4gKiBFbGUgc3Vwb3J0YSBhIGZpbHRyYWdlbSBkZSBpdGVucyBjb20gYmFzZSBuYSBlbnRyYWRhIGRvIHVzdcOhcmlvLCBwZXJtaXRpbmRvIHVtYSBzZWxlw6fDo28gbWFpcyBmw6FjaWwgZW0gbGlzdGFzIGV4dGVuc2FzLlxyXG4gKiBcclxuICogIyMgRnVuY2lvbmFsaWRhZGVzOlxyXG4gKiAtIFBlc3F1aXNhIGUgZmlsdHJhZ2VtIGRlIGl0ZW5zIG5hIGxpc3RhIGRvIGNvbWJvYm94LlxyXG4gKiAtIFNlbGXDp8OjbyBkZSBpdGVucyBjb20gZmVlZGJhY2sgdmlzdWFsLlxyXG4gKiAtIEVtaXNzw6NvIGRlIGV2ZW50b3MgcGVyc29uYWxpemFkb3MgcGFyYSBpbnRlcmHDp8O1ZXMgZG8gdXN1w6FyaW8sIGNvbW8gcmVjYXJyZWdhciBhIGxpc3RhIG91IHNlbGVjaW9uYXIgdW0gaXRlbS5cclxuICogLSBBanVzdGUgZGluw6JtaWNvIGRhIGxhcmd1cmEgZG8gZHJvcGRvd24gcGFyYSBjb3JyZXNwb25kZXIgYW8gaW5wdXQgcHJpbmNpcGFsLlxyXG4gKiAtIEluaWNpYWxpemHDp8OjbyBkZSB1bSB2YWxvciBzZWxlY2lvbmFkbywgc2UgZm9ybmVjaWRvLlxyXG4gKiBcclxuICogIyMgSW5wdXRzOlxyXG4gKiAtIGBvdXRlckNvbnRyb2xgIChGb3JtQ29udHJvbCB8IEFic3RyYWN0Q29udHJvbCk6IENvbnRyb2wgcGFyYSBzZWxlw6fDo28gZG9zIHZhbG9yZXMsIGF0dWFsaXphcsOhIGF1dG9tYXRpY2FtZW50ZSBvIGNvbnRyb2wgZG8gY29tcG9uZW50ZSBwYWkgdGFtYsOpbVxyXG4gKiAtIGBjb21ib2JveExpc3RgIChSZWNvcmRDb21ib2JveFtdKTogTGlzdGEgZGUgcmVnaXN0cm9zIHF1ZSBzZXLDo28gZXhpYmlkb3Mgbm8gY29tYm8sIGVucXVhbnRvIGVsZXMgZXN0aXZlcmVtIGNhcnJlZ2FuZG8gc2Vyw6EgZXhpYmlkbyB1bSBzcGlubmVyXHJcbiAqIC0gYGxhYmVsVGV4dGAgKHN0cmluZyk6IFRleHRvIGRvIHLDs3R1bG8gcXVlIHNlcsOhIGV4aWJpZG8gYWNpbWEgZG8gY29tYm8uIENhc28gbsOjbyBpbmZvcm1hZG8gbmFkYSBzZXLDoSBleGliaWRvXHJcbiAqIC0gYGRpc2FibGVkYCAoYm9vbGVhbik6IERlZmluZSBzZSBvIGNhbXBvIGVzdMOhIGRlc2FiaWxpdGFkby4gRGV2ZSBzZXIgdXNhZG8gcGFyYSB2YWxpZGHDp8O1ZXMgZGUgaGFiaWxpdGHDp8OjbyBkaW7Dom1pY2EgZG8gY2FtcG9cclxuICogLSBgbGliUmVxdWlyZWRgIChib29sZWFuKTogRGVmaW5lIHNlIG8gY2FtcG8gw6kgb2JyaWdhdMOzcmlvLCB2YWkgZXhpYmlyIG8gJyonIHZlcm1lbGhvIGFvIGxhZG8gZG8gbGFiZWwgKHNlIGVsZSBlc3RpdmVyIHByZXNlbnRlKVxyXG4gKiAtIGBtYWluSW5wdXRQbGFjZWhvbGRlcmAgKHN0cmluZyk6IFBsYWNlaG9sZGVyIGRvIGNhbXBvIHByaW5jaXBhbCBkbyBjb21ib1xyXG4gKiAtIGBzZWFyY2hJbnB1dFBsYWNlaG9sZGVyYCAoc3RyaW5nKTogUGxhY2Vob2xkZXIgZG8gY2FtcG8gZGUgcGVzcXVpc2EgZGVudHJvIGRvIGNvbWJvXHJcbiAqIC0gYGNvbG9yVGhlbWVgIChcInByaW1hcnlcIiB8IFwic2Vjb25kYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwiZGFuZ2VyXCIgfCBcIndhcm5pbmdcIiB8IFwiaW5mb1wiIHwgXCJsaWdodFwiIHwgXCJkYXJrXCIpOiBEZWZpbmUgbyB0ZW1hIGRlIGNvciBkbyBjb21wb25lbnRlLCBjb21vIFwicHJpbWFyeVwiLCBcInN1Y2Nlc3NcIiwgb3UgXCJkYW5nZXJcIlxyXG4gKiBcclxuICogIyMgT3V0cHV0czpcclxuICogLSBgb25SZWxvYWRMaXN0YCAoRXZlbnRFbWl0dGVyPHN0cmluZz4pOiBFdmVudG8gZW1pdGlkbyBxdWFuZG8gYSBsaXN0YSBwcmVjaXNhIHNlciByZWNhcnJlZ2FkYS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWNvbWJvYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGliLWNvbWJvYm94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vbGliLWNvbWJvYm94LmNvbXBvbmVudC5zY3NzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliQ29tYm9ib3hDb21wb25lbnQge1xyXG5cclxuICAvLyAjcmVnaW9uID09PT09PT09PT0+IFBST1BFUlRJRVMgPD09PT09PT09PT1cclxuXHJcbiAgLy8gI3JlZ2lvbiBQUklWQVRFXHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfYXJpYUV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gIHByaXZhdGUgX291dGVyQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2w8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4obnVsbCk7XHJcbiAgLy8gI2VuZHJlZ2lvbiBQUklWQVRFXHJcblxyXG4gIC8vICNyZWdpb24gUFVCTElDXHJcblxyXG4gIC8qKiAob2JyaWdhdMOzcmlvKSBDb250cm9sIHBhcmEgc2VsZcOnw6NvIGRvcyB2YWxvcmVzLCBhdHVhbGl6YXLDoSBhdXRvbWF0aWNhbWVudGUgbyBjb250cm9sIGRvIGNvbXBvbmVudGUgcGFpIHRhbWLDqW1cclxuICAgKiBAYWxpYXMgJ2NvbnRyb2wnXHJcbiAgICogQHR5cGUge0Zvcm1Db250cm9sPGFueT4gfCBBYnN0cmFjdENvbnRyb2w8YW55Pn0gKi9cclxuICBASW5wdXQoeyBhbGlhczogJ2NvbnRyb2wnLCByZXF1aXJlZDogdHJ1ZSB9KVxyXG4gIHB1YmxpYyBzZXQgb3V0ZXJDb250cm9sKHZhbHVlOiBGb3JtQ29udHJvbDxhbnk+IHwgQWJzdHJhY3RDb250cm9sPGFueT4pIHtcclxuICAgIHRoaXMuX291dGVyQ29udHJvbCA9IHZhbHVlIGFzIEZvcm1Db250cm9sXHJcblxyXG4gICAgLy8gQ2FuY2VsYSBhIHN1YnNjcmnDp8OjbyBhbnRlcmlvciAoc2UgaG91dmVyKSBwYXJhIGV2aXRhciBtw7psdGlwbGFzIHN1YnNjcmnDp8O1ZXNcclxuICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb24pIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cclxuICAgIC8vIFN1YnNjcmnDp8OjbyBhbyBvYnNlcnbDoXZlbCB2YWx1ZUNoYW5nZXMgcGFyYSByZWFnaXIgYSBtdWRhbsOnYXMgbm8gdmFsb3JcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX291dGVyQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHsgdGhpcy5pbml0aWFsaXplU2VsZWN0ZWRWYWx1ZSgpIH0pO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IG91dGVyQ29udHJvbCgpOiBGb3JtQ29udHJvbDxhbnk+IHsgcmV0dXJuIHRoaXMuX291dGVyQ29udHJvbCB9XHJcblxyXG4gIC8qKiAob2JyaWdhdMOzcmlvKSBMaXN0YSBkZSByZWdpc3Ryb3MgcXVlIHNlcsOjbyBleGliaWRvcyBubyBjb21ibywgZW5xdWFudG8gZWxlcyBlc3RpdmVyZW0gY2FycmVnYW5kbyBzZXLDoSBleGliaWRvIHVtIHNwaW5uZXJcclxuICAgKiBAYWxpYXMgJ2xpc3QnXHJcbiAgICogQHR5cGUge1JlY29yZENvbWJvYm94W119ICovXHJcbiAgQElucHV0KHsgYWxpYXM6ICdsaXN0JywgcmVxdWlyZWQ6IHRydWUgfSkgcHVibGljIGNvbWJvYm94TGlzdD86IFJlY29yZENvbWJvYm94W107XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIFRleHRvIGRvIHLDs3R1bG8gcXVlIHNlcsOhIGV4aWJpZG8gYWNpbWEgZG8gY29tYm8uIENhc28gbsOjbyBpbmZvcm1hZG8gbmFkYSBzZXLDoSBleGliaWRvXHJcbiAgICogQHR5cGUge3N0cmluZ30gKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbGFiZWxUZXh0Pzogc3RyaW5nO1xyXG5cclxuICAvKiogKG9wY2lvbmFsKSBEZWZpbmUgc2UgbyBjYW1wbyDDqSBvYnJpZ2F0w7NyaW8sIHZhaSBleGliaXIgbyAnKicgdmVybWVsaG8gYW8gbGFkbyBkbyBsYWJlbCAoc2UgZWxlIGVzdGl2ZXIgcHJlc2VudGUpXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQGRlZmF1bHQgZmFsc2UgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbGliUmVxdWlyZWQ/OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIERlZmluZSBzZSBvIGNhbXBvIGVzdMOhIGRlc2FiaWxpdGFkby4gRGV2ZSBzZXIgdXNhZG8gcGFyYSB2YWxpZGHDp8O1ZXMgZGUgaGFiaWxpdGHDp8OjbyBkaW7Dom1pY2EgZG8gY2FtcG9cclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAZGVmYXVsdCBmYWxzZSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkID8/IGZhbHNlOyB9XHJcbiAgcHVibGljIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlID09PSB0cnVlKSB0aGlzLmlubmVyQ29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICBlbHNlIHRoaXMuaW5uZXJDb250cm9sLmVuYWJsZSgpO1xyXG5cclxuICAgIHRoaXMuc2V0SXNJbnZhbGlkKCk7XHJcbiAgfVxyXG5cclxuICAvKiogKG9wY2lvbmFsKSBQbGFjZWhvbGRlciBkbyBjYW1wbyBwcmluY2lwYWwgZG8gY29tYm9cclxuICAgKiBAYWxpYXMgJ21haW5QbGFjZWhvbGRlcidcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBkZWZhdWx0IFwiU2VsZWNpb25lIHVtYSBvcMOnw6NvLi4uXCIgKi9cclxuICBASW5wdXQoJ21haW5QbGFjZWhvbGRlcicpIHB1YmxpYyBtYWluSW5wdXRQbGFjZWhvbGRlcj86IHN0cmluZyA9IFwiU2VsZWNpb25lIHVtYSBvcMOnw6NvLi4uXCI7XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIFBsYWNlaG9sZGVyIGRvIGNhbXBvIGRlIHBlc3F1aXNhIGRlbnRybyBkbyBjb21ib1xyXG4gICAqIEBhbGlhcyAnc2VhcmNoUGxhY2Vob2xkZXInXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAZGVmYXVsdCBcIlBlc3F1aXNhLi4uXCIgKi9cclxuICBASW5wdXQoJ3NlYXJjaFBsYWNlaG9sZGVyJykgcHVibGljIHNlYXJjaElucHV0UGxhY2Vob2xkZXI/OiBzdHJpbmcgPSBcIlBlc3F1aXNhLi4uXCI7XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIERlZmluZSBvIHRlbWEgZGUgY29yIGRvIGNvbXBvbmVudGUsIGNvbW8gXCJwcmltYXJ5XCIsIFwic3VjY2Vzc1wiLCBvdSBcImRhbmdlclwiXHJcbiAgICogQGFsaWFzICd0aGVtZSdcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBkZWZhdWx0IFwicHJpbWFyeVwiXHJcbiAgKi9cclxuICBASW5wdXQoJ3RoZW1lJykgcHVibGljIGNvbG9yVGhlbWU/OiBzdHJpbmcgPSBcInByaW1hcnlcIjtcclxuXHJcbiAgLyoqIEV2ZW50byBlbWl0aWRvIGFvIHJlY2FycmVnYXIgYSBsaXN0YSBkZSByZWdpc3Ryb3NcclxuICAgKiBAZXhhbXBsZSBBbyBzZXIgZW1pdGlkbywgbyBjb21wb25lbnRlIHBhaSBwb2RlIHJlZmF6ZXIgbyBHRVQgZGEgbGlzdGEsIHBvciBleGVtcGxvLlxyXG4gICAqIEBlbWl0cyBFdmVudEVtaXR0ZXI8c3RyaW5nPiBxdWUgbGV2YSBvIHZhbG9yIHN0cmluZyBkYSBwZXNxdWlzYSBmZWl0YSBwYXJhIHNlciBlbnZpYWRhIHBhcmEgbyBHRVRcclxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPHN0cmluZz59ICovXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvblJlbG9hZExpc3Q6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG5cclxuICBAT3V0cHV0KCkgcHVibGljIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlciB8IG51bGw+KCk7XHJcbiAgXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ21haW5JbnB1dCcpIHByaXZhdGUgX21haW5JbnB1dCE6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25NZW51JykgcHJpdmF0ZSBfZHJvcGRvd25NZW51ITogRWxlbWVudFJlZjtcclxuXHJcbiAgcHVibGljIHRleHRvUGVzcXVpc2E6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gIHB1YmxpYyBnZXQgYXJpYUV4cGFuZGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fYXJpYUV4cGFuZGVkOyB9XHJcbiAgcHVibGljIHNldCBhcmlhRXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fYXJpYUV4cGFuZGVkID0gdmFsdWU7IH1cclxuXHJcbiAgcHVibGljIGlubmVyQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2w8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4obnVsbCk7XHJcbiAgcHVibGljIGlzSW52YWxpZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vICNlbmRyZWdpb24gUFVCTElDXHJcblxyXG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gUFJPUEVSVElFUyA8PT09PT09PT09PVxyXG5cclxuXHJcbiAgLy8gI3JlZ2lvbiA9PT09PT09PT09PiBJTklUSUFMSVpBVElPTiA8PT09PT09PT09PVxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWxpZGF0b3IoKTtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZVNlbGVjdGVkVmFsdWUoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWRqdXN0RHJvcGRvd25XaWR0aCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXNbXCJjb21ib2JveExpc3RcIl0/LmN1cnJlbnRWYWx1ZSkgdGhpcy5pbml0aWFsaXplU2VsZWN0ZWRWYWx1ZSgpO1xyXG4gICAgaWYgKGNoYW5nZXNbXCJvdXRlckNvbnRyb2xcIl0/LmN1cnJlbnRWYWx1ZSkgdGhpcy5pbml0aWFsaXplU2VsZWN0ZWRWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIC8vIE8gcXVlIGZhemVyIHF1YW5kbyBvIGV2ZW50byBkZSByZWRpbWVuc2lvbmFtZW50byBvY29ycmVyXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXHJcbiAgb25SZXNpemUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7IHRoaXMuYWRqdXN0RHJvcGRvd25XaWR0aCgpIH1cclxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IElOSVRJQUxJWkFUSU9OIDw9PT09PT09PT09XHJcblxyXG5cclxuICAvLyAjcmVnaW9uID09PT09PT09PT0+IFVUSUxTIDw9PT09PT09PT09XHJcbiAgcHVibGljIHNldFZhbHVlKGl0ZW06IFJlY29yZENvbWJvYm94KTogdm9pZCB7XHJcbiAgICB0aGlzLnRleHRvUGVzcXVpc2EgPSBcIlwiO1xyXG4gICAgdGhpcy5pbm5lckNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgIHRoaXMub3V0ZXJDb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcbiAgICBcclxuICAgIHRoaXMub3V0ZXJDb250cm9sLnNldFZhbHVlKGl0ZW0uSUQpO1xyXG4gICAgdGhpcy5pbm5lckNvbnRyb2wuc2V0VmFsdWUoaXRlbS5MQUJFTCk7XHJcblxyXG4gICAgdGhpcy5hcmlhRXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuc2V0SXNJbnZhbGlkKCk7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KGl0ZW0uSUQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyVmFsdWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRleHRvUGVzcXVpc2EgPSBcIlwiO1xyXG4gICAgdGhpcy5pbm5lckNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgIHRoaXMub3V0ZXJDb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcblxyXG4gICAgdGhpcy5vdXRlckNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgICB0aGlzLmlubmVyQ29udHJvbC5zZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgICB0aGlzLmFyaWFFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXRJc0ludmFsaWQoKTtcclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQobnVsbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVTZWxlY3RlZFZhbHVlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbm5lckNvbnRyb2wuc2V0VmFsdWUobnVsbCk7IC8vIExpbXBhIG8gY2FtcG8gYW50ZXMgZGUgcXVhbHF1ZXIgY29pc2FcclxuXHJcbiAgICBpZiAoIXRoaXMuY29tYm9ib3hMaXN0IHx8ICh0aGlzLm91dGVyQ29udHJvbC52YWx1ZSA9PSBudWxsICYmIHRoaXMub3V0ZXJDb250cm9sLnZhbHVlID09ICcnKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemVkVmFsdWUgPSB0aGlzLmNvbWJvYm94TGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5JRCA9PSB0aGlzLm91dGVyQ29udHJvbC52YWx1ZSlcclxuICAgIGlmIChpbml0aWFsaXplZFZhbHVlKSB0aGlzLmlubmVyQ29udHJvbC5zZXRWYWx1ZShpbml0aWFsaXplZFZhbHVlLkxBQkVMKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRqdXN0RHJvcGRvd25XaWR0aCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9tYWluSW5wdXQgJiYgdGhpcy5fZHJvcGRvd25NZW51KSB7XHJcbiAgICAgIGNvbnN0IGlucHV0V2lkdGggPSB0aGlzLl9tYWluSW5wdXQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgdGhpcy5fZHJvcGRvd25NZW51Lm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtpbnB1dFdpZHRofXB4YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VmFsaWRhdG9yKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3V0ZXJDb250cm9sLmhhc1ZhbGlkYXRvcihWYWxpZGF0b3JzLnJlcXVpcmVkKSkgeyB0aGlzLmlubmVyQ29udHJvbC5hZGRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpOyB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldElzSW52YWxpZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNJbnZhbGlkID0gdGhpcy5pbm5lckNvbnRyb2wuaW52YWxpZCAmJiAodGhpcy5pbm5lckNvbnRyb2wudG91Y2hlZCB8fCB0aGlzLmlubmVyQ29udHJvbC5kaXJ0eSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVsb2FkTGlzdCgpOiB2b2lkIHsgdGhpcy5vblJlbG9hZExpc3QuZW1pdCh0aGlzLnRleHRvUGVzcXVpc2EpIH1cclxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IFVUSUxTIDw9PT09PT09PT09XHJcblxyXG59XHJcbiIsIjxsYWJlbCAqbmdJZj1cImxhYmVsVGV4dCAmJiBsYWJlbFRleHQgIT0gJydcIiBbbGliUmVxdWlyZWRdPVwibGliUmVxdWlyZWQgPz8gZmFsc2VcIiBjbGFzcz1cImZvcm0tbGFiZWwgZnctYm9sZFwiPnt7IGxhYmVsVGV4dCB9fTwvbGFiZWw+XHJcbjxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBkcm9wZG93biBmbGV4LWZpbGwgZ2xiLW1heC1oZWlnaHQtMzUwcHhcIj5cclxuXHJcbiAgIDwhLS0gRXN0ZSBlbGVtZW50byBuZy1jb250ZW50IGNvbSBvIGF0cmlidXRvIFtidG5MZWZ0XSBwZXJtaXRlIHF1ZSBvIHVzdcOhcmlvIGZpbmFsIGZvcm5lw6dhIGNvbnRlw7pkbyBwZXJzb25hbGl6YWRvIHBhcmEgc2VyIGV4aWJpZG8gbm8gbGFkbyBlc3F1ZXJkbyBkbyBjb21ib2JveCBkZSBwZXNxdWlzYS5cclxuICAgQW8gdXNhciBvIGF0cmlidXRvIFtidG5MZWZ0XSwgbyB1c3XDoXJpbyBwb2RlIGZhY2lsbWVudGUgYWRpY2lvbmFyIGJvdMO1ZXMgb3Ugb3V0cm9zIGVsZW1lbnRvcyBwYXJhIG1lbGhvcmFyIGEgZnVuY2lvbmFsaWRhZGUgb3UgYXBhcsOqbmNpYSBkbyBjb21ib2JveCBkZSBwZXNxdWlzYS4gLS0+XHJcbiAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltidG5MZWZ0XVwiPjwvbmctY29udGVudD5cclxuXHJcbiAgIDxpbnB1dCAgI21haW5JbnB1dCBjbGFzcz1cImZvcm0tc2VsZWN0IHRleHQtc3RhcnQgcm91bmRlZC1lbmRcIiB0eXBlPVwidGV4dFwiIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIiBbcGxhY2Vob2xkZXJdPVwibWFpbklucHV0UGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiaW5uZXJDb250cm9sXCIgZGF0YS1icy1hdXRvLWNsb3NlPVwib3V0c2lkZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIHJlYWRvbmx5IFtjbGFzcy5pcy1pbnZhbGlkXT1cImlzSW52YWxpZFwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJhcmlhRXhwYW5kZWQgPSAhYXJpYUV4cGFuZGVkOyBzZWFyY2hJbnB1dC5mb2N1cygpXCIgKGZvY3VzKT1cInNlYXJjaElucHV0LmZvY3VzKClcIj5cclxuXHJcbiAgIDx1bCAgI2Ryb3Bkb3duTWVudSAgY2xhc3M9XCJkcm9wZG93bi1tZW51IHAtMiBnbGItbWF4LWhlaWdodC0zNTBweCBvdmVyZmxvdy15LXNjcm9sbCB6LWluZGV4LTEwMjBcIiBbY2xhc3Muc2hvd109XCJhcmlhRXhwYW5kZWRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTJcIj5cclxuICAgICAgICAgPGlucHV0ICNzZWFyY2hJbnB1dCAoaW5wdXQpPVwidGV4dG9QZXNxdWlzYSA9IHNlYXJjaElucHV0LnZhbHVlXCIgdHlwZT1cInRleHRcIiBpZD1cInNlYXJjaElucHV0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZ2xiLWlucHV0LW5vLWdsb3dcIiBbcGxhY2Vob2xkZXJdPVwic2VhcmNoSW5wdXRQbGFjZWhvbGRlclwiIChrZXl1cC5lbnRlcik9XCJyZWxvYWRMaXN0KClcIj5cclxuICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4te3tjb2xvclRoZW1lfX1cIiAoY2xpY2spPVwicmVsb2FkTGlzdCgpXCI+IDxhcHAtc3ZnLXN0b3JhZ2Ugc3ZnTmFtZT1cImx1cGFcIiBzdmdTaXplPVwibWVkaXVtLXNtYWxsXCIgLz4gPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgQGlmIChjb21ib2JveExpc3QpIHtcclxuICAgICAgICAgPGxpICpuZ0lmPVwiaW5uZXJDb250cm9sLnZhbHVlICE9ICcnICYmIGlubmVyQ29udHJvbC52YWx1ZSAhPSBudWxsXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgKGNsaWNrKT1cImNsZWFyVmFsdWUoKVwiPiA8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5MaW1wYXIgb3DDp8OjbyBzZWxlY2lvbmFkYTwvc3Bhbj4gPC9saT5cclxuICAgICAgICAgQGZvciAoaXRlbSBvZiBjb21ib2JveExpc3QgfCB0ZXh0RmlsdGVyOnRleHRvUGVzcXVpc2E7IHRyYWNrICRpbmRleCkge1xyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgKGNsaWNrKT1cInNldFZhbHVlKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXRlbS5BZGRpdGlvbmFsU3RyaW5nUHJvcGVydHkxIHx8IGl0ZW0uQWRkaXRpb25hbFN0cmluZ1Byb3BlcnR5MSAhPSAnJ1wiIGNsYXNzPVwiZ2xiLWZzLTEyIGZ3LWJvbGQgZC1pbmxpbmUtYmxvY2sgdy0xMjVcIj57eyBpdGVtLkFkZGl0aW9uYWxTdHJpbmdQcm9wZXJ0eTEgfX08L3NwYW4+IHt7IGl0ZW0uTEFCRUwgfX1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgfVxyXG4gICAgICAgICBAZW1wdHkgeyA8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGZzdC1pdGFsaWNcIj5OZW5odW0gcmVnaXN0cm8gZW5jb250cmFkbyBjb20gZXN0YSBwZXNxdWlzYS4uLjwvbGk+IH1cclxuICAgICAgfVxyXG4gICAgICBAZWxzZSB7IDxsaSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gdGV4dC1jZW50ZXJcIj4gPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPjxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+Q2FycmVnYW5kbyBkYWRvcy4uLjwvc3Bhbj48L2Rpdj4gPC9saT4gfVxyXG4gICA8L3VsPlxyXG5cclxuICAgPCEtLSBFc3RlIGVsZW1lbnRvIG5nLWNvbnRlbnQgY29tIG8gYXRyaWJ1dG8gW2J0blJpZ2h0XSBwZXJtaXRlIHF1ZSBvIHVzdcOhcmlvIGZpbmFsIGZvcm5lw6dhIGNvbnRlw7pkbyBwZXJzb25hbGl6YWRvIHBhcmEgc2VyIGV4aWJpZG8gbm8gbGFkbyBkaXJlaXRvIGRvIGNvbWJvYm94IGRlIHBlc3F1aXNhLlxyXG4gICBBbyB1c2FyIG8gYXRyaWJ1dG8gW2J0blJpZ2h0XSwgbyB1c3XDoXJpbyBwb2RlIGZhY2lsbWVudGUgYWRpY2lvbmFyIGJvdMO1ZXMgb3Ugb3V0cm9zIGVsZW1lbnRvcyBwYXJhIG1lbGhvcmFyIGEgZnVuY2lvbmFsaWRhZGUgb3UgYXBhcsOqbmNpYSBkbyBjb21ib2JveCBkZSBwZXNxdWlzYS4gLS0+XHJcbiAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltidG5SaWdodF1cIj48L25nLWNvbnRlbnQ+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwhLS0gI3JlZ2lvbiBNRU5TQUdFTSBERSBFUlJPIERFIFZBTElEQcOHw4NPIC0tPlxyXG48YXBwLWZpZWxkLWVycm9yLW1lc3NhZ2UgKm5nSWY9XCJpc0ludmFsaWRcIiBbY29udHJvbF09XCJpbm5lckNvbnRyb2xcIiAvPlxyXG48IS0tICNlbmRyZWdpb24gTUVOU0FHRU0gREUgRVJSTyBERSBWQUxJREHDh8ODTyAtLT5cclxuIl19
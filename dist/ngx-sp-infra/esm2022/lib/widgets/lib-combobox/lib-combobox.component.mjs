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
        }
    }
    setIsInvalid() {
        this.invalidControl = this.invalid && (this.touched && this.dirty);
    }
    reloadList() { this.onReloadList.emit(this.textoPesquisa); }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LibComboboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: LibComboboxComponent, selector: "lib-combobox", inputs: { outerControl: ["control", "outerControl"], comboboxList: ["list", "comboboxList"], labelText: "labelText", libRequired: "libRequired", disabled: "disabled", mainInputPlaceholder: ["mainPlaceholder", "mainInputPlaceholder"], searchInputPlaceholder: ["searchPlaceholder", "searchInputPlaceholder"], colorTheme: ["theme", "colorTheme"], controlName: "controlName" }, outputs: { onReloadList: "onReloadList", onChange: "onChange" }, host: { listeners: { "window:resize": "onResize($event)" } }, viewQueries: [{ propertyName: "_mainInput", first: true, predicate: ["mainInput"], descendants: true }, { propertyName: "_dropdownMenu", first: true, predicate: ["dropdownMenu"], descendants: true }], ngImport: i0, template: "<label *ngIf=\"labelText && labelText != ''\" [libRequired]=\"libRequired ?? false\" class=\"form-label fw-bold\">{{ labelText }}</label>\r\n<div class=\"input-group dropdown flex-fill glb-max-height-350px\">\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnLeft] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado esquerdo do combobox de pesquisa.\r\n   Ao usar o atributo [btnLeft], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnLeft]\"></ng-content>\r\n\r\n   <input  #mainInput class=\"form-select text-start rounded-end\" type=\"text\" data-bs-toggle=\"dropdown\" [placeholder]=\"mainInputPlaceholder\"\r\n            [formControl]=\"innerControl\" data-bs-auto-close=\"outside\" aria-expanded=\"false\" readonly [class.is-invalid]=\"invalidControl\"\r\n            (click)=\"ariaExpanded = !ariaExpanded; searchInput.focus()\" (focus)=\"searchInput.focus()\">\r\n\r\n   <ul  #dropdownMenu  class=\"dropdown-menu p-2 glb-max-height-350px overflow-y-scroll z-index-1020\" [class.show]=\"ariaExpanded\">\r\n      <div class=\"input-group mb-2\">\r\n         <input #searchInput (input)=\"textoPesquisa = searchInput.value\" type=\"text\" id=\"searchInput\" class=\"form-control glb-input-no-glow\" [placeholder]=\"searchInputPlaceholder\" (keyup.enter)=\"reloadList()\">\r\n         <button class=\"btn btn-{{colorTheme}}\" (click)=\"reloadList()\"> <app-svg-storage svgName=\"lupa\" svgSize=\"medium-small\" /> </button>\r\n      </div>\r\n\r\n      @if (comboboxList) {\r\n         <li *ngIf=\"innerControl.value != '' && innerControl.value != null\" class=\"dropdown-item\" (click)=\"clearValue()\"> <span class=\"fw-bold\">Limpar op\u00E7\u00E3o selecionada</span> </li>\r\n         @for (item of comboboxList | textFilter:textoPesquisa; track $index) {\r\n            <li class=\"dropdown-item\" (click)=\"setValue(item)\">\r\n               <span *ngIf=\"item.AdditionalStringProperty1 || item.AdditionalStringProperty1 != ''\" class=\"glb-fs-12 fw-bold d-inline-block w-125\">{{ item.AdditionalStringProperty1 }}</span> {{ item.LABEL }}\r\n            </li>\r\n         }\r\n         @empty { <li class=\"dropdown-item fst-italic\">Nenhum registro encontrado com esta pesquisa...</li> }\r\n      }\r\n      @else { <li class=\"dropdown-item text-center\"> <div class=\"spinner-border\" role=\"status\"><span class=\"visually-hidden\">Carregando dados...</span></div> </li> }\r\n   </ul>\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnRight] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado direito do combobox de pesquisa.\r\n   Ao usar o atributo [btnRight], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnRight]\"></ng-content>\r\n\r\n</div>\r\n\r\n<!-- #region MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n<app-field-error-message *ngIf=\"invalidControl\" [control]=\"innerControl\" />\r\n<!-- #endregion MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n", styles: [".glb-max-height-350px{max-height:350px!important}.form-label{font-size:16px!important}.z-index-1020{z-index:1020!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.FieldErrorMessageComponent, selector: "app-field-error-message", inputs: ["customMessage", "control", "label"] }, { kind: "component", type: i4.SvgStorageComponent, selector: "app-svg-storage", inputs: ["svgName", "svgColor", "svgFill", "svgSize", "svgStrokeWidth"] }, { kind: "directive", type: i5.RequiredDirective, selector: "label[libRequired], span[libRequired], p[libRequired]", inputs: ["libRequired", "sisID"] }, { kind: "pipe", type: i6.TextFilterPipe, name: "textFilter" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LibComboboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-combobox', template: "<label *ngIf=\"labelText && labelText != ''\" [libRequired]=\"libRequired ?? false\" class=\"form-label fw-bold\">{{ labelText }}</label>\r\n<div class=\"input-group dropdown flex-fill glb-max-height-350px\">\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnLeft] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado esquerdo do combobox de pesquisa.\r\n   Ao usar o atributo [btnLeft], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnLeft]\"></ng-content>\r\n\r\n   <input  #mainInput class=\"form-select text-start rounded-end\" type=\"text\" data-bs-toggle=\"dropdown\" [placeholder]=\"mainInputPlaceholder\"\r\n            [formControl]=\"innerControl\" data-bs-auto-close=\"outside\" aria-expanded=\"false\" readonly [class.is-invalid]=\"invalidControl\"\r\n            (click)=\"ariaExpanded = !ariaExpanded; searchInput.focus()\" (focus)=\"searchInput.focus()\">\r\n\r\n   <ul  #dropdownMenu  class=\"dropdown-menu p-2 glb-max-height-350px overflow-y-scroll z-index-1020\" [class.show]=\"ariaExpanded\">\r\n      <div class=\"input-group mb-2\">\r\n         <input #searchInput (input)=\"textoPesquisa = searchInput.value\" type=\"text\" id=\"searchInput\" class=\"form-control glb-input-no-glow\" [placeholder]=\"searchInputPlaceholder\" (keyup.enter)=\"reloadList()\">\r\n         <button class=\"btn btn-{{colorTheme}}\" (click)=\"reloadList()\"> <app-svg-storage svgName=\"lupa\" svgSize=\"medium-small\" /> </button>\r\n      </div>\r\n\r\n      @if (comboboxList) {\r\n         <li *ngIf=\"innerControl.value != '' && innerControl.value != null\" class=\"dropdown-item\" (click)=\"clearValue()\"> <span class=\"fw-bold\">Limpar op\u00E7\u00E3o selecionada</span> </li>\r\n         @for (item of comboboxList | textFilter:textoPesquisa; track $index) {\r\n            <li class=\"dropdown-item\" (click)=\"setValue(item)\">\r\n               <span *ngIf=\"item.AdditionalStringProperty1 || item.AdditionalStringProperty1 != ''\" class=\"glb-fs-12 fw-bold d-inline-block w-125\">{{ item.AdditionalStringProperty1 }}</span> {{ item.LABEL }}\r\n            </li>\r\n         }\r\n         @empty { <li class=\"dropdown-item fst-italic\">Nenhum registro encontrado com esta pesquisa...</li> }\r\n      }\r\n      @else { <li class=\"dropdown-item text-center\"> <div class=\"spinner-border\" role=\"status\"><span class=\"visually-hidden\">Carregando dados...</span></div> </li> }\r\n   </ul>\r\n\r\n   <!-- Este elemento ng-content com o atributo [btnRight] permite que o usu\u00E1rio final forne\u00E7a conte\u00FAdo personalizado para ser exibido no lado direito do combobox de pesquisa.\r\n   Ao usar o atributo [btnRight], o usu\u00E1rio pode facilmente adicionar bot\u00F5es ou outros elementos para melhorar a funcionalidade ou apar\u00EAncia do combobox de pesquisa. -->\r\n   <ng-content select=\"[btnRight]\"></ng-content>\r\n\r\n</div>\r\n\r\n<!-- #region MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n<app-field-error-message *ngIf=\"invalidControl\" [control]=\"innerControl\" />\r\n<!-- #endregion MENSAGEM DE ERRO DE VALIDA\u00C7\u00C3O -->\r\n", styles: [".glb-max-height-350px{max-height:350px!important}.form-label{font-size:16px!important}.z-index-1020{z-index:1020!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWNvbWJvYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvbGliLWNvbWJvYm94L2xpYi1jb21ib2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2xpYi1jb21ib2JveC9saWItY29tYm9ib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQyxTQUFTLEVBQXVCLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFnQyxNQUFNLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwTSxPQUFPLEVBQXlDLFdBQVcsRUFBZ0MsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7QUFJcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Qkc7QUFNSCxNQUFNLE9BQU8sb0JBQW9CO0lBTy9CLElBQWMsWUFBWSxLQUFjLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDcEUsSUFBYyxZQUFZLENBQUMsS0FBYyxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQWdCMUUscUJBQXFCO0lBRXJCLGlCQUFpQjtJQUVqQjs7eURBRXFEO0lBQ3JELElBQ1csWUFBWSxLQUF1QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUEsQ0FBQyxDQUFDO0lBQ3pFLElBQVcsWUFBWSxDQUFDLEtBQThDO1FBQ3BFLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBb0IsQ0FBQztRQUUxQyw4RUFBOEU7UUFDOUUsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUFFLElBQUksQ0FBQyxhQUFh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LENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQSxDQUFDLENBQUM7K0dBeFE3RCxvQkFBb0I7bUdBQXBCLG9CQUFvQixrdkJDekNqQyw0ckdBc0NBOzs0RkRHYSxvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0UsY0FBYzt3REFvQ2IsWUFBWTtzQkFEdEIsS0FBSzt1QkFBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtnQkFnQk0sWUFBWTtzQkFBNUQsS0FBSzt1QkFBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtnQkFJeEIsU0FBUztzQkFBeEIsS0FBSztnQkFLVSxXQUFXO3NCQUExQixLQUFLO2dCQU1LLFFBQVE7c0JBRGxCLEtBQUs7Z0JBYTJCLG9CQUFvQjtzQkFBcEQsS0FBSzt1QkFBQyxpQkFBaUI7Z0JBTVcsc0JBQXNCO3NCQUF4RCxLQUFLO3VCQUFDLG1CQUFtQjtnQkFPSCxVQUFVO3NCQUFoQyxLQUFLO3VCQUFDLE9BQU87Z0JBT2UsV0FBVztzQkFBdkMsS0FBSzt1QkFBQyxhQUFhO2dCQU1ILFlBQVk7c0JBQTVCLE1BQU07Z0JBT1UsUUFBUTtzQkFBeEIsTUFBTTtnQkFHeUIsVUFBVTtzQkFBekMsU0FBUzt1QkFBQyxXQUFXO2dCQUNhLGFBQWE7c0JBQS9DLFNBQVM7dUJBQUMsY0FBYztnQkFvRnpCLFFBQVE7c0JBRFAsWUFBWTt1QkFBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBEb0NoZWNrLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIE5HX1ZBTFVFX0FDQ0VTU09SLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBSZWNvcmRDb21ib2JveCB9IGZyb20gJy4uLy4uL21vZGVscy9jb21ib2JveC9yZWNvcmQtY29tYm9ib3gnO1xyXG5cclxuLyoqXHJcbiAqIEBjb21wb25lbnQgTGliQ29tYm9ib3hDb21wb25lbnRcclxuICogQHNlbGVjdG9yIGxpYi1jb21ib2JveFxyXG4gKiBcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIE8gY29tcG9uZW50ZSBMaWJDb21ib2JveENvbXBvbmVudCDDqSBwcm9qZXRhZG8gcGFyYSBmb3JuZWNlciBhb3MgdXN1w6FyaW9zIHVtYSBpbnRlcmZhY2UgcGFyYSBwZXNxdWlzYXIgZSBzZWxlY2lvbmFyIGl0ZW5zIGRlIHVtYSBsaXN0YS5cclxuICogRWxlIHN1cG9ydGEgYSBmaWx0cmFnZW0gZGUgaXRlbnMgY29tIGJhc2UgbmEgZW50cmFkYSBkbyB1c3XDoXJpbywgcGVybWl0aW5kbyB1bWEgc2VsZcOnw6NvIG1haXMgZsOhY2lsIGVtIGxpc3RhcyBleHRlbnNhcy5cclxuICogXHJcbiAqICMjIEZ1bmNpb25hbGlkYWRlczpcclxuICogLSBQZXNxdWlzYSBlIGZpbHRyYWdlbSBkZSBpdGVucyBuYSBsaXN0YSBkbyBjb21ib2JveC5cclxuICogLSBTZWxlw6fDo28gZGUgaXRlbnMgY29tIGZlZWRiYWNrIHZpc3VhbC5cclxuICogLSBFbWlzc8OjbyBkZSBldmVudG9zIHBlcnNvbmFsaXphZG9zIHBhcmEgaW50ZXJhw6fDtWVzIGRvIHVzdcOhcmlvLCBjb21vIHJlY2FycmVnYXIgYSBsaXN0YSBvdSBzZWxlY2lvbmFyIHVtIGl0ZW0uXHJcbiAqIC0gQWp1c3RlIGRpbsOibWljbyBkYSBsYXJndXJhIGRvIGRyb3Bkb3duIHBhcmEgY29ycmVzcG9uZGVyIGFvIGlucHV0IHByaW5jaXBhbC5cclxuICogLSBJbmljaWFsaXphw6fDo28gZGUgdW0gdmFsb3Igc2VsZWNpb25hZG8sIHNlIGZvcm5lY2lkby5cclxuICogXHJcbiAqICMjIElucHV0czpcclxuICogLSBgb3V0ZXJDb250cm9sYCAoRm9ybUNvbnRyb2wgfCBBYnN0cmFjdENvbnRyb2wpOiBDb250cm9sIHBhcmEgc2VsZcOnw6NvIGRvcyB2YWxvcmVzLCBhdHVhbGl6YXLDoSBhdXRvbWF0aWNhbWVudGUgbyBjb250cm9sIGRvIGNvbXBvbmVudGUgcGFpIHRhbWLDqW1cclxuICogLSBgY29tYm9ib3hMaXN0YCAoUmVjb3JkQ29tYm9ib3hbXSk6IExpc3RhIGRlIHJlZ2lzdHJvcyBxdWUgc2Vyw6NvIGV4aWJpZG9zIG5vIGNvbWJvLCBlbnF1YW50byBlbGVzIGVzdGl2ZXJlbSBjYXJyZWdhbmRvIHNlcsOhIGV4aWJpZG8gdW0gc3Bpbm5lclxyXG4gKiAtIGBsYWJlbFRleHRgIChzdHJpbmcpOiBUZXh0byBkbyByw7N0dWxvIHF1ZSBzZXLDoSBleGliaWRvIGFjaW1hIGRvIGNvbWJvLiBDYXNvIG7Do28gaW5mb3JtYWRvIG5hZGEgc2Vyw6EgZXhpYmlkb1xyXG4gKiAtIGBjb250cm9sTmFtZWAgKHN0cmluZyk6IERlZmluZSB1bSBub21lIHBhcmEgbyBjb250cm9sZSwgdXRpbGl6YWRvIGludGVybmFtZW50ZSBlbSBhbGd1bnMgcmVjdXJzb3MuIFJlY29tZW5kYWRvIHBhcmEgZXZpdGFyIGFsZ3VucyBidWdzIGRlIGRldGVjw6fDo28uXHJcbiAqIC0gYGRpc2FibGVkYCAoYm9vbGVhbik6IERlZmluZSBzZSBvIGNhbXBvIGVzdMOhIGRlc2FiaWxpdGFkby4gRGV2ZSBzZXIgdXNhZG8gcGFyYSB2YWxpZGHDp8O1ZXMgZGUgaGFiaWxpdGHDp8OjbyBkaW7Dom1pY2EgZG8gY2FtcG9cclxuICogLSBgbGliUmVxdWlyZWRgIChib29sZWFuKTogRGVmaW5lIHNlIG8gY2FtcG8gw6kgb2JyaWdhdMOzcmlvLCB2YWkgZXhpYmlyIG8gJyonIHZlcm1lbGhvIGFvIGxhZG8gZG8gbGFiZWwgKHNlIGVsZSBlc3RpdmVyIHByZXNlbnRlKVxyXG4gKiAtIGBtYWluSW5wdXRQbGFjZWhvbGRlcmAgKHN0cmluZyk6IFBsYWNlaG9sZGVyIGRvIGNhbXBvIHByaW5jaXBhbCBkbyBjb21ib1xyXG4gKiAtIGBzZWFyY2hJbnB1dFBsYWNlaG9sZGVyYCAoc3RyaW5nKTogUGxhY2Vob2xkZXIgZG8gY2FtcG8gZGUgcGVzcXVpc2EgZGVudHJvIGRvIGNvbWJvXHJcbiAqIC0gYGNvbG9yVGhlbWVgIChcInByaW1hcnlcIiB8IFwic2Vjb25kYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwiZGFuZ2VyXCIgfCBcIndhcm5pbmdcIiB8IFwiaW5mb1wiIHwgXCJsaWdodFwiIHwgXCJkYXJrXCIpOiBEZWZpbmUgbyB0ZW1hIGRlIGNvciBkbyBjb21wb25lbnRlLCBjb21vIFwicHJpbWFyeVwiLCBcInN1Y2Nlc3NcIiwgb3UgXCJkYW5nZXJcIlxyXG4gKiBcclxuICogIyMgT3V0cHV0czpcclxuICogLSBgb25SZWxvYWRMaXN0YCAoRXZlbnRFbWl0dGVyPHN0cmluZz4pOiBFdmVudG8gZW1pdGlkbyBxdWFuZG8gYSBsaXN0YSBwcmVjaXNhIHNlciByZWNhcnJlZ2FkYS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWNvbWJvYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGliLWNvbWJvYm94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vbGliLWNvbWJvYm94LmNvbXBvbmVudC5zY3NzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliQ29tYm9ib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XHJcblxyXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gUFJPUEVSVElFUyA8PT09PT09PT09PVxyXG5cclxuICAvLyAjcmVnaW9uIFBST1RFQ1RFRFxyXG4gIHByb3RlY3RlZCB0ZXh0b1Blc3F1aXNhOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IGFyaWFFeHBhbmRlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2FyaWFFeHBhbmRlZDsgfVxyXG4gIHByb3RlY3RlZCBzZXQgYXJpYUV4cGFuZGVkKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2FyaWFFeHBhbmRlZCA9IHZhbHVlOyB9XHJcblxyXG4gIHByb3RlY3RlZCBpbm5lckNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sPHN0cmluZyB8IG51bWJlciB8IG51bGw+KG51bGwpO1xyXG4gIHByb3RlY3RlZCBpbnZhbGlkQ29udHJvbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgaW52YWxpZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBkaXJ0eTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCB0b3VjaGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gI2VuZHJlZ2lvbiBQUk9URUNURURcclxuXHJcbiAgLy8gI3JlZ2lvbiBQUklWQVRFXHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfYXJpYUV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gIHByaXZhdGUgX291dGVyQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2w8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4obnVsbCk7XHJcbiAgLy8gI2VuZHJlZ2lvbiBQUklWQVRFXHJcblxyXG4gIC8vICNyZWdpb24gUFVCTElDXHJcblxyXG4gIC8qKiAob2JyaWdhdMOzcmlvKSBDb250cm9sIHBhcmEgc2VsZcOnw6NvIGRvcyB2YWxvcmVzLCBhdHVhbGl6YXLDoSBhdXRvbWF0aWNhbWVudGUgbyBjb250cm9sIGRvIGNvbXBvbmVudGUgcGFpIHRhbWLDqW1cclxuICAgKiBAYWxpYXMgJ2NvbnRyb2wnXHJcbiAgICogQHR5cGUge0Zvcm1Db250cm9sPGFueT4gfCBBYnN0cmFjdENvbnRyb2w8YW55Pn0gKi9cclxuICBASW5wdXQoeyBhbGlhczogJ2NvbnRyb2wnLCByZXF1aXJlZDogdHJ1ZSB9KVxyXG4gIHB1YmxpYyBnZXQgb3V0ZXJDb250cm9sKCk6IEZvcm1Db250cm9sPGFueT4geyByZXR1cm4gdGhpcy5fb3V0ZXJDb250cm9sIH1cclxuICBwdWJsaWMgc2V0IG91dGVyQ29udHJvbCh2YWx1ZTogRm9ybUNvbnRyb2w8YW55PiB8IEFic3RyYWN0Q29udHJvbDxhbnk+KSB7XHJcbiAgICB0aGlzLl9vdXRlckNvbnRyb2wgPSB2YWx1ZSBhcyBGb3JtQ29udHJvbDtcclxuXHJcbiAgICAvLyBDYW5jZWxhIGEgc3Vic2NyacOnw6NvIGFudGVyaW9yIChzZSBob3V2ZXIpIHBhcmEgZXZpdGFyIG3Dumx0aXBsYXMgc3Vic2NyacOnw7Vlc1xyXG4gICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbikgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgLy8gU3Vic2NyacOnw6NvIGFvIG9ic2VydsOhdmVsIHZhbHVlQ2hhbmdlcyBwYXJhIHJlYWdpciBhIG11ZGFuw6dhcyBubyB2YWxvclxyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5fb3V0ZXJDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4geyB0aGlzLmluaXRpYWxpemVTZWxlY3RlZFZhbHVlKCkgfSk7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9vdXRlckNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4geyB0aGlzLnN1YnNjcmliZUNvbnRyb2xDaGFuZ2VzKCkgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogKG9icmlnYXTDs3JpbykgTGlzdGEgZGUgcmVnaXN0cm9zIHF1ZSBzZXLDo28gZXhpYmlkb3Mgbm8gY29tYm8sIGVucXVhbnRvIGVsZXMgZXN0aXZlcmVtIGNhcnJlZ2FuZG8gc2Vyw6EgZXhpYmlkbyB1bSBzcGlubmVyXHJcbiAgICogQGFsaWFzICdsaXN0J1xyXG4gICAqIEB0eXBlIHtSZWNvcmRDb21ib2JveFtdfSAqL1xyXG4gIEBJbnB1dCh7IGFsaWFzOiAnbGlzdCcsIHJlcXVpcmVkOiB0cnVlIH0pIHB1YmxpYyBjb21ib2JveExpc3Q/OiBSZWNvcmRDb21ib2JveFtdO1xyXG5cclxuICAvKiogKG9wY2lvbmFsKSBUZXh0byBkbyByw7N0dWxvIHF1ZSBzZXLDoSBleGliaWRvIGFjaW1hIGRvIGNvbWJvLiBDYXNvIG7Do28gaW5mb3JtYWRvIG5hZGEgc2Vyw6EgZXhpYmlkb1xyXG4gICAqIEB0eXBlIHtzdHJpbmd9ICovXHJcbiAgQElucHV0KCkgcHVibGljIGxhYmVsVGV4dD86IHN0cmluZztcclxuXHJcbiAgLyoqIChvcGNpb25hbCkgRGVmaW5lIHNlIG8gY2FtcG8gw6kgb2JyaWdhdMOzcmlvLCB2YWkgZXhpYmlyIG8gJyonIHZlcm1lbGhvIGFvIGxhZG8gZG8gbGFiZWwgKHNlIGVsZSBlc3RpdmVyIHByZXNlbnRlKVxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBkZWZhdWx0IGZhbHNlICovXHJcbiAgQElucHV0KCkgcHVibGljIGxpYlJlcXVpcmVkPzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKiogKG9wY2lvbmFsKSBEZWZpbmUgc2UgbyBjYW1wbyBlc3TDoSBkZXNhYmlsaXRhZG8uIERldmUgc2VyIHVzYWRvIHBhcmEgdmFsaWRhw6fDtWVzIGRlIGhhYmlsaXRhw6fDo28gZGluw6JtaWNhIGRvIGNhbXBvXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQGRlZmF1bHQgZmFsc2UgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlZCA/PyBmYWxzZTsgfVxyXG4gIHB1YmxpYyBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcclxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSA9PT0gdHJ1ZSkgdGhpcy5pbm5lckNvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgZWxzZSB0aGlzLmlubmVyQ29udHJvbC5lbmFibGUoKTtcclxuXHJcbiAgICB0aGlzLnNldElzSW52YWxpZCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIChvcGNpb25hbCkgUGxhY2Vob2xkZXIgZG8gY2FtcG8gcHJpbmNpcGFsIGRvIGNvbWJvXHJcbiAgICogQGFsaWFzICdtYWluUGxhY2Vob2xkZXInXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAZGVmYXVsdCBcIlNlbGVjaW9uZSB1bWEgb3DDp8Ojby4uLlwiICovXHJcbiAgQElucHV0KCdtYWluUGxhY2Vob2xkZXInKSBwdWJsaWMgbWFpbklucHV0UGxhY2Vob2xkZXI/OiBzdHJpbmcgPSBcIlNlbGVjaW9uZSB1bWEgb3DDp8Ojby4uLlwiO1xyXG5cclxuICAvKiogKG9wY2lvbmFsKSBQbGFjZWhvbGRlciBkbyBjYW1wbyBkZSBwZXNxdWlzYSBkZW50cm8gZG8gY29tYm9cclxuICAgKiBAYWxpYXMgJ3NlYXJjaFBsYWNlaG9sZGVyJ1xyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQGRlZmF1bHQgXCJQZXNxdWlzYS4uLlwiICovXHJcbiAgQElucHV0KCdzZWFyY2hQbGFjZWhvbGRlcicpIHB1YmxpYyBzZWFyY2hJbnB1dFBsYWNlaG9sZGVyPzogc3RyaW5nID0gXCJQZXNxdWlzYS4uLlwiO1xyXG5cclxuICAvKiogKG9wY2lvbmFsKSBEZWZpbmUgbyB0ZW1hIGRlIGNvciBkbyBjb21wb25lbnRlLCBjb21vIFwicHJpbWFyeVwiLCBcInN1Y2Nlc3NcIiwgb3UgXCJkYW5nZXJcIlxyXG4gICAqIEBhbGlhcyAndGhlbWUnXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAZGVmYXVsdCBcInByaW1hcnlcIlxyXG4gICovXHJcbiAgQElucHV0KCd0aGVtZScpIHB1YmxpYyBjb2xvclRoZW1lPzogc3RyaW5nID0gXCJwcmltYXJ5XCI7XHJcblxyXG4gIC8qKiAoUmVjb21lbmRhZG8pIERlZmluZSB1bSBub21lIHBhcmEgbyBjb250cm9sZSwgdXRpbGl6YWRvIGludGVybmFtZW50ZSBlbSBhbGd1bnMgcmVjdXJzb3MuXHJcbiAgICogRXZpdGEgYWxndW5zIGJ1Z3MgZGUgZGV0ZWPDp8Ojby5cclxuICAgKiBAYWxpYXMgJ2NvbnRyb2xOYW1lJ1xyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgKi9cclxuICBASW5wdXQoJ2NvbnRyb2xOYW1lJykgcHVibGljIGNvbnRyb2xOYW1lPzogc3RyaW5nO1xyXG5cclxuICAvKiogRXZlbnRvIGVtaXRpZG8gYW8gcmVjYXJyZWdhciBhIGxpc3RhIGRlIHJlZ2lzdHJvc1xyXG4gICAqIEBleGFtcGxlIEFvIHNlciBlbWl0aWRvLCBvIGNvbXBvbmVudGUgcGFpIHBvZGUgcmVmYXplciBvIEdFVCBkYSBsaXN0YSwgcG9yIGV4ZW1wbG8uXHJcbiAgICogQGVtaXRzIEV2ZW50RW1pdHRlcjxzdHJpbmc+IHF1ZSBsZXZhIG8gdmFsb3Igc3RyaW5nIGRhIHBlc3F1aXNhIGZlaXRhIHBhcmEgc2VyIGVudmlhZGEgcGFyYSBvIEdFVFxyXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8c3RyaW5nPn0gKi9cclxuICBAT3V0cHV0KCkgcHVibGljIG9uUmVsb2FkTGlzdDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcblxyXG4gIC8qKiBFdmVudG8gZW1pdGlkbyBhbyBzZWxlY2lvbmFyIHVtIHJlZ2lzdHJvIGRhIGxpc3RhIGRvIGNvbWJvYm94XHJcbiAgICogQGV4YW1wbGUgQW8gc2VyIGVtaXRpZG8sIG8gY29tcG9uZW50ZSBwYWkgcG9kZSByZWFsaXphciB1bWEgdmFsaWRhw6fDo28gY29tIG8gdmFsb3Igc2VsZWNpb25hZG8uXHJcbiAgICogQGVtaXRzIEV2ZW50RW1pdHRlcjxzdHJpbmd8bnVtYmVyfG51bGw+IHF1ZSBsZXZhIG8gdmFsb3Igc3RyaW5nIGRhIHBlc3F1aXNhIGZlaXRhIHBhcmEgc2VyIGVudmlhZGEgcGFyYSBvIEdFVFxyXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD59ICovXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlciB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXIgfCBudWxsPigpO1xyXG4gIFxyXG5cclxuICBAVmlld0NoaWxkKCdtYWluSW5wdXQnKSBwcml2YXRlIF9tYWluSW5wdXQhOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duTWVudScpIHByaXZhdGUgX2Ryb3Bkb3duTWVudSE6IEVsZW1lbnRSZWY7XHJcbiAgLy8gI2VuZHJlZ2lvbiBQVUJMSUNcclxuXHJcbiAgLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PiBQUk9QRVJUSUVTIDw9PT09PT09PT09XHJcblxyXG5cclxuICAvLyAjcmVnaW9uID09PT09PT09PT0+IElOSVRJQUxJWkFUSU9OIDw9PT09PT09PT09XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFZhbGlkYXRvcigpO1xyXG4gICAgdGhpcy5pbml0aWFsaXplU2VsZWN0ZWRWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hZGp1c3REcm9wZG93bldpZHRoKCk7XHJcbiAgfVxyXG5cclxuICAvLyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgLy8gICBpZiAoY2hhbmdlc1tcImNvbWJvYm94TGlzdFwiXT8uY3VycmVudFZhbHVlKSB0aGlzLmluaXRpYWxpemVTZWxlY3RlZFZhbHVlKCk7XHJcbiAgLy8gICBpZiAoY2hhbmdlc1tcIm91dGVyQ29udHJvbFwiXT8uY3VycmVudFZhbHVlKSB7XHJcbiAgLy8gICAgIHRoaXMuc3Vic2NyaWJlQ29udHJvbENoYW5nZXMoKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhcmVudEdyb3VwID0gdGhpcy5fb3V0ZXJDb250cm9sLnBhcmVudCBhcyBGb3JtR3JvdXA7XHJcblxyXG4gICAgaWYgKCF0aGlzLmNvbnRyb2xOYW1lKSB7XHJcbiAgICAgIC8vIEl0ZXJhbmRvIHNvYnJlIG9zIGNvbnRyb2xlcyBubyBGb3JtR3JvdXBcclxuICAgICAgY29uc3QgY29udHJvbEV4aXN0cyA9IE9iamVjdC52YWx1ZXMocGFyZW50R3JvdXAuY29udHJvbHMpLnNvbWUoY29udHJvbCA9PiBjb250cm9sID09PSB0aGlzLl9vdXRlckNvbnRyb2wpO1xyXG5cclxuICAgICAgaWYgKHBhcmVudEdyb3VwKSB7XHJcbiAgICAgICAgaWYgKCFjb250cm9sRXhpc3RzKSBjb25zb2xlLmVycm9yKFwiRXJybyBubyA8bGliLWNvbWJvYm94PiAtIE8gRm9ybUNvbnRyb2wgaW5mb3JtYWRvIG7Do28gZm9pIGVuY29udHJhZG8gZGVudHJvIGRvIEZvcm1Hcm91cC4uLlwiKTtcclxuICAgICAgICBjb25zdCB0ZW1wQ29udHJvbCA9IE9iamVjdC52YWx1ZXMocGFyZW50R3JvdXAuY29udHJvbHMpLmZpbmQoY29udHJvbCA9PiBjb250cm9sID09PSB0aGlzLl9vdXRlckNvbnRyb2wpO1xyXG5cclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gdGVtcENvbnRyb2whLmRpc2FibGVkO1xyXG4gICAgICAgIHRoaXMuaW52YWxpZCA9IHRlbXBDb250cm9sIS5pbnZhbGlkO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSB0ZW1wQ29udHJvbCEuZGlydHk7XHJcbiAgICAgICAgdGhpcy50b3VjaGVkID0gdGVtcENvbnRyb2whLnRvdWNoZWQ7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnNldElzSW52YWxpZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLl9vdXRlckNvbnRyb2wuZGlzYWJsZWQ7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkID0gdGhpcy5fb3V0ZXJDb250cm9sLmludmFsaWQ7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRoaXMuX291dGVyQ29udHJvbC5kaXJ0eTtcclxuICAgICAgICB0aGlzLnRvdWNoZWQgPSB0aGlzLl9vdXRlckNvbnRyb2wudG91Y2hlZDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRJc0ludmFsaWQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBwYXJlbnRHcm91cC5nZXQodGhpcy5jb250cm9sTmFtZSk7XHJcblxyXG4gICAgICBpZiAocGFyZW50R3JvdXApIHtcclxuICAgICAgICBpZiAoY29udHJvbCA9PT0gbnVsbCkgY29uc29sZS5lcnJvcihgRXJybyBubyA8bGliLWNvbWJvYm94PiAtIE8gRm9ybUNvbnRyb2wgZGUgbm9tZSBcIiR7dGhpcy5jb250cm9sTmFtZX1cIiBpbmZvcm1hZG8gbsOjbyBmb2kgZW5jb250cmFkbyBkZW50cm8gZG8gRm9ybUdyb3VwLmApO1xyXG5cclxuICAgICAgICBjb25zdCB0ZW1wQ29udHJvbCA9IHBhcmVudEdyb3VwLmNvbnRyb2xzW3RoaXMuY29udHJvbE5hbWUgYXMgc3RyaW5nXTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRlbXBDb250cm9sIS5kaXNhYmxlZDtcclxuICAgICAgICB0aGlzLmludmFsaWQgPSB0ZW1wQ29udHJvbCEuaW52YWxpZDtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gdGVtcENvbnRyb2whLmRpcnR5O1xyXG4gICAgICAgIHRoaXMudG91Y2hlZCA9IHRlbXBDb250cm9sIS50b3VjaGVkO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5zZXRJc0ludmFsaWQoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5fb3V0ZXJDb250cm9sLmRpc2FibGVkO1xyXG4gICAgICAgIHRoaXMuaW52YWxpZCA9IHRoaXMuX291dGVyQ29udHJvbC5pbnZhbGlkO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSB0aGlzLl9vdXRlckNvbnRyb2wuZGlydHk7XHJcbiAgICAgICAgdGhpcy50b3VjaGVkID0gdGhpcy5fb3V0ZXJDb250cm9sLnRvdWNoZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SXNJbnZhbGlkKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBPIHF1ZSBmYXplciBxdWFuZG8gbyBldmVudG8gZGUgcmVkaW1lbnNpb25hbWVudG8gb2NvcnJlclxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxyXG4gIG9uUmVzaXplKGV2ZW50OiBFdmVudCk6IHZvaWQgeyB0aGlzLmFkanVzdERyb3Bkb3duV2lkdGgoKSB9XHJcbiAgLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PiBJTklUSUFMSVpBVElPTiA8PT09PT09PT09PVxyXG5cclxuXHJcbiAgLy8gI3JlZ2lvbiA9PT09PT09PT09PiBVVElMUyA8PT09PT09PT09PVxyXG4gIHB1YmxpYyBzZXRWYWx1ZShpdGVtOiBSZWNvcmRDb21ib2JveCk6IHZvaWQge1xyXG4gICAgdGhpcy50ZXh0b1Blc3F1aXNhID0gXCJcIjtcclxuICAgIHRoaXMuaW5uZXJDb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcbiAgICB0aGlzLl9vdXRlckNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgIFxyXG4gICAgdGhpcy5fb3V0ZXJDb250cm9sLnNldFZhbHVlKGl0ZW0uSUQpO1xyXG4gICAgdGhpcy5pbm5lckNvbnRyb2wuc2V0VmFsdWUoaXRlbS5MQUJFTCk7XHJcblxyXG4gICAgdGhpcy5hcmlhRXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuc2V0SXNJbnZhbGlkKCk7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KGl0ZW0uSUQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyVmFsdWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRleHRvUGVzcXVpc2EgPSBcIlwiO1xyXG4gICAgdGhpcy5pbm5lckNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgIHRoaXMuX291dGVyQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG5cclxuICAgIHRoaXMuX291dGVyQ29udHJvbC5zZXRWYWx1ZShudWxsKTtcclxuICAgIHRoaXMuaW5uZXJDb250cm9sLnNldFZhbHVlKG51bGwpO1xyXG5cclxuICAgIHRoaXMuYXJpYUV4cGFuZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNldElzSW52YWxpZCgpO1xyXG5cclxuICAgIHRoaXMub25DaGFuZ2UuZW1pdChudWxsKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVNlbGVjdGVkVmFsdWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlubmVyQ29udHJvbC5zZXRWYWx1ZShudWxsKTsgLy8gTGltcGEgbyBjYW1wbyBhbnRlcyBkZSBxdWFscXVlciBjb2lzYVxyXG5cclxuICAgIGlmICghdGhpcy5jb21ib2JveExpc3QgfHwgKHRoaXMuX291dGVyQ29udHJvbC52YWx1ZSA9PSBudWxsICYmIHRoaXMuX291dGVyQ29udHJvbC52YWx1ZSA9PSAnJykpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplZFZhbHVlID0gdGhpcy5jb21ib2JveExpc3QuZmluZChpdGVtID0+IGl0ZW0uSUQgPT0gdGhpcy5fb3V0ZXJDb250cm9sLnZhbHVlKVxyXG4gICAgaWYgKGluaXRpYWxpemVkVmFsdWUpIHRoaXMuaW5uZXJDb250cm9sLnNldFZhbHVlKGluaXRpYWxpemVkVmFsdWUuTEFCRUwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGp1c3REcm9wZG93bldpZHRoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX21haW5JbnB1dCAmJiB0aGlzLl9kcm9wZG93bk1lbnUpIHtcclxuICAgICAgY29uc3QgaW5wdXRXaWR0aCA9IHRoaXMuX21haW5JbnB1dC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICB0aGlzLl9kcm9wZG93bk1lbnUubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke2lucHV0V2lkdGh9cHhgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFNlcnZlIHBhcmEgYXR1YWxpemFyIG8gc3RhdHVzIGRvIGNvbnRyb2wgZSBvIGRlc2FiaWxpdGFyIGNhc28gc2VqYSBmZWl0byBubyBjb21wb25lbnRlIHBhaSxcclxuICAgKiBzZW0gYSBuZWNlc3NpZGFkZSBkZSB1bWEgb3V0cmEgcHJvcHJpZWRhZGUgZXNwZWPDrWZpY2EgcGFyYSBpc3RvLiAqL1xyXG4gIHByaXZhdGUgc3Vic2NyaWJlQ29udHJvbENoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vdXRlckNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoc3RhdHVzID0+IHtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gXCJESVNBQkxFRFwiKSB0aGlzLmlubmVyQ29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICAgIGVsc2UgdGhpcy5pbm5lckNvbnRyb2wuZW5hYmxlKCk7XHJcblxyXG4gICAgICB0aGlzLnNldElzSW52YWxpZCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzZXRWYWxpZGF0b3IoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb3V0ZXJDb250cm9sLmhhc1ZhbGlkYXRvcihWYWxpZGF0b3JzLnJlcXVpcmVkKSkgeyB0aGlzLmlubmVyQ29udHJvbC5hZGRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpOyB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldElzSW52YWxpZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW52YWxpZENvbnRyb2wgPSB0aGlzLmludmFsaWQgJiYgKHRoaXMudG91Y2hlZCAmJiB0aGlzLmRpcnR5KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWxvYWRMaXN0KCk6IHZvaWQgeyB0aGlzLm9uUmVsb2FkTGlzdC5lbWl0KHRoaXMudGV4dG9QZXNxdWlzYSkgfVxyXG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gVVRJTFMgPD09PT09PT09PT1cclxuXHJcbn1cclxuIiwiPGxhYmVsICpuZ0lmPVwibGFiZWxUZXh0ICYmIGxhYmVsVGV4dCAhPSAnJ1wiIFtsaWJSZXF1aXJlZF09XCJsaWJSZXF1aXJlZCA/PyBmYWxzZVwiIGNsYXNzPVwiZm9ybS1sYWJlbCBmdy1ib2xkXCI+e3sgbGFiZWxUZXh0IH19PC9sYWJlbD5cclxuPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGRyb3Bkb3duIGZsZXgtZmlsbCBnbGItbWF4LWhlaWdodC0zNTBweFwiPlxyXG5cclxuICAgPCEtLSBFc3RlIGVsZW1lbnRvIG5nLWNvbnRlbnQgY29tIG8gYXRyaWJ1dG8gW2J0bkxlZnRdIHBlcm1pdGUgcXVlIG8gdXN1w6FyaW8gZmluYWwgZm9ybmXDp2EgY29udGXDumRvIHBlcnNvbmFsaXphZG8gcGFyYSBzZXIgZXhpYmlkbyBubyBsYWRvIGVzcXVlcmRvIGRvIGNvbWJvYm94IGRlIHBlc3F1aXNhLlxyXG4gICBBbyB1c2FyIG8gYXRyaWJ1dG8gW2J0bkxlZnRdLCBvIHVzdcOhcmlvIHBvZGUgZmFjaWxtZW50ZSBhZGljaW9uYXIgYm90w7VlcyBvdSBvdXRyb3MgZWxlbWVudG9zIHBhcmEgbWVsaG9yYXIgYSBmdW5jaW9uYWxpZGFkZSBvdSBhcGFyw6puY2lhIGRvIGNvbWJvYm94IGRlIHBlc3F1aXNhLiAtLT5cclxuICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2J0bkxlZnRdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuICAgPGlucHV0ICAjbWFpbklucHV0IGNsYXNzPVwiZm9ybS1zZWxlY3QgdGV4dC1zdGFydCByb3VuZGVkLWVuZFwiIHR5cGU9XCJ0ZXh0XCIgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiIFtwbGFjZWhvbGRlcl09XCJtYWluSW5wdXRQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJpbm5lckNvbnRyb2xcIiBkYXRhLWJzLWF1dG8tY2xvc2U9XCJvdXRzaWRlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgcmVhZG9ubHkgW2NsYXNzLmlzLWludmFsaWRdPVwiaW52YWxpZENvbnRyb2xcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiYXJpYUV4cGFuZGVkID0gIWFyaWFFeHBhbmRlZDsgc2VhcmNoSW5wdXQuZm9jdXMoKVwiIChmb2N1cyk9XCJzZWFyY2hJbnB1dC5mb2N1cygpXCI+XHJcblxyXG4gICA8dWwgICNkcm9wZG93bk1lbnUgIGNsYXNzPVwiZHJvcGRvd24tbWVudSBwLTIgZ2xiLW1heC1oZWlnaHQtMzUwcHggb3ZlcmZsb3cteS1zY3JvbGwgei1pbmRleC0xMDIwXCIgW2NsYXNzLnNob3ddPVwiYXJpYUV4cGFuZGVkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0yXCI+XHJcbiAgICAgICAgIDxpbnB1dCAjc2VhcmNoSW5wdXQgKGlucHV0KT1cInRleHRvUGVzcXVpc2EgPSBzZWFyY2hJbnB1dC52YWx1ZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hJbnB1dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGdsYi1pbnB1dC1uby1nbG93XCIgW3BsYWNlaG9sZGVyXT1cInNlYXJjaElucHV0UGxhY2Vob2xkZXJcIiAoa2V5dXAuZW50ZXIpPVwicmVsb2FkTGlzdCgpXCI+XHJcbiAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXt7Y29sb3JUaGVtZX19XCIgKGNsaWNrKT1cInJlbG9hZExpc3QoKVwiPiA8YXBwLXN2Zy1zdG9yYWdlIHN2Z05hbWU9XCJsdXBhXCIgc3ZnU2l6ZT1cIm1lZGl1bS1zbWFsbFwiIC8+IDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIEBpZiAoY29tYm9ib3hMaXN0KSB7XHJcbiAgICAgICAgIDxsaSAqbmdJZj1cImlubmVyQ29udHJvbC52YWx1ZSAhPSAnJyAmJiBpbm5lckNvbnRyb2wudmFsdWUgIT0gbnVsbFwiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIChjbGljayk9XCJjbGVhclZhbHVlKClcIj4gPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+TGltcGFyIG9ww6fDo28gc2VsZWNpb25hZGE8L3NwYW4+IDwvbGk+XHJcbiAgICAgICAgIEBmb3IgKGl0ZW0gb2YgY29tYm9ib3hMaXN0IHwgdGV4dEZpbHRlcjp0ZXh0b1Blc3F1aXNhOyB0cmFjayAkaW5kZXgpIHtcclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIChjbGljayk9XCJzZXRWYWx1ZShpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIml0ZW0uQWRkaXRpb25hbFN0cmluZ1Byb3BlcnR5MSB8fCBpdGVtLkFkZGl0aW9uYWxTdHJpbmdQcm9wZXJ0eTEgIT0gJydcIiBjbGFzcz1cImdsYi1mcy0xMiBmdy1ib2xkIGQtaW5saW5lLWJsb2NrIHctMTI1XCI+e3sgaXRlbS5BZGRpdGlvbmFsU3RyaW5nUHJvcGVydHkxIH19PC9zcGFuPiB7eyBpdGVtLkxBQkVMIH19XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgQGVtcHR5IHsgPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbSBmc3QtaXRhbGljXCI+TmVuaHVtIHJlZ2lzdHJvIGVuY29udHJhZG8gY29tIGVzdGEgcGVzcXVpc2EuLi48L2xpPiB9XHJcbiAgICAgIH1cclxuICAgICAgQGVsc2UgeyA8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtIHRleHQtY2VudGVyXCI+IDxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj48c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkNhcnJlZ2FuZG8gZGFkb3MuLi48L3NwYW4+PC9kaXY+IDwvbGk+IH1cclxuICAgPC91bD5cclxuXHJcbiAgIDwhLS0gRXN0ZSBlbGVtZW50byBuZy1jb250ZW50IGNvbSBvIGF0cmlidXRvIFtidG5SaWdodF0gcGVybWl0ZSBxdWUgbyB1c3XDoXJpbyBmaW5hbCBmb3JuZcOnYSBjb250ZcO6ZG8gcGVyc29uYWxpemFkbyBwYXJhIHNlciBleGliaWRvIG5vIGxhZG8gZGlyZWl0byBkbyBjb21ib2JveCBkZSBwZXNxdWlzYS5cclxuICAgQW8gdXNhciBvIGF0cmlidXRvIFtidG5SaWdodF0sIG8gdXN1w6FyaW8gcG9kZSBmYWNpbG1lbnRlIGFkaWNpb25hciBib3TDtWVzIG91IG91dHJvcyBlbGVtZW50b3MgcGFyYSBtZWxob3JhciBhIGZ1bmNpb25hbGlkYWRlIG91IGFwYXLDqm5jaWEgZG8gY29tYm9ib3ggZGUgcGVzcXVpc2EuIC0tPlxyXG4gICA8bmctY29udGVudCBzZWxlY3Q9XCJbYnRuUmlnaHRdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuPC9kaXY+XHJcblxyXG48IS0tICNyZWdpb24gTUVOU0FHRU0gREUgRVJSTyBERSBWQUxJREHDh8ODTyAtLT5cclxuPGFwcC1maWVsZC1lcnJvci1tZXNzYWdlICpuZ0lmPVwiaW52YWxpZENvbnRyb2xcIiBbY29udHJvbF09XCJpbm5lckNvbnRyb2xcIiAvPlxyXG48IS0tICNlbmRyZWdpb24gTUVOU0FHRU0gREUgRVJSTyBERSBWQUxJREHDh8ODTyAtLT5cclxuIl19
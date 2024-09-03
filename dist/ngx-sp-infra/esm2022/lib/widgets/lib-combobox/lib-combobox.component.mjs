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
        console.log("controlName:", this.controlName);
        if (!this.controlName) {
            // Iterando sobre os controles no FormGroup
            const controlExists = Object.values(parentGroup.controls).some(control => control === this._outerControl);
            if (parentGroup) {
                if (!controlExists)
                    throw new Error("Erro no <lib-combobox> - O FormControl informado não foi encontrado dentro do FormGroup...");
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
            console.log("parentGroup:", parentGroup);
            console.log("controlExists:", control);
            if (parentGroup) {
                if (control === null)
                    console.error(`Erro no <lib-combobox> - O FormControl de nome "${this.controlName}" informado não foi encontrado dentro do FormGroup.`);
                const tempControl = parentGroup.controls[this.controlName];
                console.log("tempControl:", tempControl);
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
        console.log("invalid:", this.invalid);
        console.log("dirty:", this.dirty);
        console.log("touched:", this.touched);
        this.invalidControl = this.invalid && (this.touched && this.dirty);
        console.log("invalidControl:", this.invalidControl);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWNvbWJvYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvbGliLWNvbWJvYm94L2xpYi1jb21ib2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2xpYi1jb21ib2JveC9saWItY29tYm9ib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQyxTQUFTLEVBQXVCLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFnQyxNQUFNLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwTSxPQUFPLEVBQXlDLFdBQVcsRUFBZ0MsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7QUFJcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCRztBQU1ILE1BQU0sT0FBTyxvQkFBb0I7SUFPL0IsSUFBYyxZQUFZLEtBQWMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNwRSxJQUFjLFlBQVksQ0FBQyxLQUFjLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBZ0IxRSxxQkFBcUI7SUFFckIsaUJBQWlCO0lBRWpCOzt5REFFcUQ7SUFDckQsSUFDVyxZQUFZLENBQUMsS0FBOEM7UUFDcEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFvQixDQUFDO1FBRTFDLDhFQUE4RTtRQUM5RSxJQUFJLElBQUksQ0FBQyxhQUFhO1lBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV6RCx3RUFBd0U7UUFDeEUsSUFBSSxDQUFDLGFBQWEsR0FB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QkFBNUIsTUFBTTtnQkFHVSxRQUFRO3NCQUF4QixNQUFNO2dCQUd5QixVQUFVO3NCQUF6QyxTQUFTO3VCQUFDLFdBQVc7Z0JBQ2EsYUFBYTtzQkFBL0MsU0FBUzt1QkFBQyxjQUFjO2dCQXdGekIsUUFBUTtzQkFEUCxZQUFZO3VCQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIERvQ2hlY2ssIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgTkdfVkFMVUVfQUNDRVNTT1IsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFJlY29yZENvbWJvYm94IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbWJvYm94L3JlY29yZC1jb21ib2JveCc7XHJcblxyXG4vKipcclxuICogQGNvbXBvbmVudCBMaWJDb21ib2JveENvbXBvbmVudFxyXG4gKiBAc2VsZWN0b3IgbGliLWNvbWJvYm94XHJcbiAqIFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogTyBjb21wb25lbnRlIExpYkNvbWJvYm94Q29tcG9uZW50IMOpIHByb2pldGFkbyBwYXJhIGZvcm5lY2VyIGFvcyB1c3XDoXJpb3MgdW1hIGludGVyZmFjZSBwYXJhIHBlc3F1aXNhciBlIHNlbGVjaW9uYXIgaXRlbnMgZGUgdW1hIGxpc3RhLlxyXG4gKiBFbGUgc3Vwb3J0YSBhIGZpbHRyYWdlbSBkZSBpdGVucyBjb20gYmFzZSBuYSBlbnRyYWRhIGRvIHVzdcOhcmlvLCBwZXJtaXRpbmRvIHVtYSBzZWxlw6fDo28gbWFpcyBmw6FjaWwgZW0gbGlzdGFzIGV4dGVuc2FzLlxyXG4gKiBcclxuICogIyMgRnVuY2lvbmFsaWRhZGVzOlxyXG4gKiAtIFBlc3F1aXNhIGUgZmlsdHJhZ2VtIGRlIGl0ZW5zIG5hIGxpc3RhIGRvIGNvbWJvYm94LlxyXG4gKiAtIFNlbGXDp8OjbyBkZSBpdGVucyBjb20gZmVlZGJhY2sgdmlzdWFsLlxyXG4gKiAtIEVtaXNzw6NvIGRlIGV2ZW50b3MgcGVyc29uYWxpemFkb3MgcGFyYSBpbnRlcmHDp8O1ZXMgZG8gdXN1w6FyaW8sIGNvbW8gcmVjYXJyZWdhciBhIGxpc3RhIG91IHNlbGVjaW9uYXIgdW0gaXRlbS5cclxuICogLSBBanVzdGUgZGluw6JtaWNvIGRhIGxhcmd1cmEgZG8gZHJvcGRvd24gcGFyYSBjb3JyZXNwb25kZXIgYW8gaW5wdXQgcHJpbmNpcGFsLlxyXG4gKiAtIEluaWNpYWxpemHDp8OjbyBkZSB1bSB2YWxvciBzZWxlY2lvbmFkbywgc2UgZm9ybmVjaWRvLlxyXG4gKiBcclxuICogIyMgSW5wdXRzOlxyXG4gKiAtIGBvdXRlckNvbnRyb2xgIChGb3JtQ29udHJvbCB8IEFic3RyYWN0Q29udHJvbCk6IENvbnRyb2wgcGFyYSBzZWxlw6fDo28gZG9zIHZhbG9yZXMsIGF0dWFsaXphcsOhIGF1dG9tYXRpY2FtZW50ZSBvIGNvbnRyb2wgZG8gY29tcG9uZW50ZSBwYWkgdGFtYsOpbVxyXG4gKiAtIGBjb21ib2JveExpc3RgIChSZWNvcmRDb21ib2JveFtdKTogTGlzdGEgZGUgcmVnaXN0cm9zIHF1ZSBzZXLDo28gZXhpYmlkb3Mgbm8gY29tYm8sIGVucXVhbnRvIGVsZXMgZXN0aXZlcmVtIGNhcnJlZ2FuZG8gc2Vyw6EgZXhpYmlkbyB1bSBzcGlubmVyXHJcbiAqIC0gYGxhYmVsVGV4dGAgKHN0cmluZyk6IFRleHRvIGRvIHLDs3R1bG8gcXVlIHNlcsOhIGV4aWJpZG8gYWNpbWEgZG8gY29tYm8uIENhc28gbsOjbyBpbmZvcm1hZG8gbmFkYSBzZXLDoSBleGliaWRvXHJcbiAqIC0gYGRpc2FibGVkYCAoYm9vbGVhbik6IERlZmluZSBzZSBvIGNhbXBvIGVzdMOhIGRlc2FiaWxpdGFkby4gRGV2ZSBzZXIgdXNhZG8gcGFyYSB2YWxpZGHDp8O1ZXMgZGUgaGFiaWxpdGHDp8OjbyBkaW7Dom1pY2EgZG8gY2FtcG9cclxuICogLSBgbGliUmVxdWlyZWRgIChib29sZWFuKTogRGVmaW5lIHNlIG8gY2FtcG8gw6kgb2JyaWdhdMOzcmlvLCB2YWkgZXhpYmlyIG8gJyonIHZlcm1lbGhvIGFvIGxhZG8gZG8gbGFiZWwgKHNlIGVsZSBlc3RpdmVyIHByZXNlbnRlKVxyXG4gKiAtIGBtYWluSW5wdXRQbGFjZWhvbGRlcmAgKHN0cmluZyk6IFBsYWNlaG9sZGVyIGRvIGNhbXBvIHByaW5jaXBhbCBkbyBjb21ib1xyXG4gKiAtIGBzZWFyY2hJbnB1dFBsYWNlaG9sZGVyYCAoc3RyaW5nKTogUGxhY2Vob2xkZXIgZG8gY2FtcG8gZGUgcGVzcXVpc2EgZGVudHJvIGRvIGNvbWJvXHJcbiAqIC0gYGNvbG9yVGhlbWVgIChcInByaW1hcnlcIiB8IFwic2Vjb25kYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwiZGFuZ2VyXCIgfCBcIndhcm5pbmdcIiB8IFwiaW5mb1wiIHwgXCJsaWdodFwiIHwgXCJkYXJrXCIpOiBEZWZpbmUgbyB0ZW1hIGRlIGNvciBkbyBjb21wb25lbnRlLCBjb21vIFwicHJpbWFyeVwiLCBcInN1Y2Nlc3NcIiwgb3UgXCJkYW5nZXJcIlxyXG4gKiBcclxuICogIyMgT3V0cHV0czpcclxuICogLSBgb25SZWxvYWRMaXN0YCAoRXZlbnRFbWl0dGVyPHN0cmluZz4pOiBFdmVudG8gZW1pdGlkbyBxdWFuZG8gYSBsaXN0YSBwcmVjaXNhIHNlciByZWNhcnJlZ2FkYS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWNvbWJvYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGliLWNvbWJvYm94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vbGliLWNvbWJvYm94LmNvbXBvbmVudC5zY3NzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliQ29tYm9ib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XHJcblxyXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gUFJPUEVSVElFUyA8PT09PT09PT09PVxyXG5cclxuICAvLyAjcmVnaW9uIFBST1RFQ1RFRFxyXG4gIHByb3RlY3RlZCB0ZXh0b1Blc3F1aXNhOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IGFyaWFFeHBhbmRlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2FyaWFFeHBhbmRlZDsgfVxyXG4gIHByb3RlY3RlZCBzZXQgYXJpYUV4cGFuZGVkKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2FyaWFFeHBhbmRlZCA9IHZhbHVlOyB9XHJcblxyXG4gIHByb3RlY3RlZCBpbm5lckNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sPHN0cmluZyB8IG51bWJlciB8IG51bGw+KG51bGwpO1xyXG4gIHByb3RlY3RlZCBpbnZhbGlkQ29udHJvbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgaW52YWxpZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBkaXJ0eTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCB0b3VjaGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gI2VuZHJlZ2lvbiBQUk9URUNURURcclxuXHJcbiAgLy8gI3JlZ2lvbiBQUklWQVRFXHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfYXJpYUV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gIHByaXZhdGUgX291dGVyQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2w8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4obnVsbCk7XHJcbiAgLy8gI2VuZHJlZ2lvbiBQUklWQVRFXHJcblxyXG4gIC8vICNyZWdpb24gUFVCTElDXHJcblxyXG4gIC8qKiAob2JyaWdhdMOzcmlvKSBDb250cm9sIHBhcmEgc2VsZcOnw6NvIGRvcyB2YWxvcmVzLCBhdHVhbGl6YXLDoSBhdXRvbWF0aWNhbWVudGUgbyBjb250cm9sIGRvIGNvbXBvbmVudGUgcGFpIHRhbWLDqW1cclxuICAgKiBAYWxpYXMgJ2NvbnRyb2wnXHJcbiAgICogQHR5cGUge0Zvcm1Db250cm9sPGFueT4gfCBBYnN0cmFjdENvbnRyb2w8YW55Pn0gKi9cclxuICBASW5wdXQoeyBhbGlhczogJ2NvbnRyb2wnLCByZXF1aXJlZDogdHJ1ZSB9KVxyXG4gIHB1YmxpYyBzZXQgb3V0ZXJDb250cm9sKHZhbHVlOiBGb3JtQ29udHJvbDxhbnk+IHwgQWJzdHJhY3RDb250cm9sPGFueT4pIHtcclxuICAgIHRoaXMuX291dGVyQ29udHJvbCA9IHZhbHVlIGFzIEZvcm1Db250cm9sO1xyXG5cclxuICAgIC8vIENhbmNlbGEgYSBzdWJzY3Jpw6fDo28gYW50ZXJpb3IgKHNlIGhvdXZlcikgcGFyYSBldml0YXIgbcO6bHRpcGxhcyBzdWJzY3Jpw6fDtWVzXHJcbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9uKSB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICAvLyBTdWJzY3Jpw6fDo28gYW8gb2JzZXJ2w6F2ZWwgdmFsdWVDaGFuZ2VzIHBhcmEgcmVhZ2lyIGEgbXVkYW7Dp2FzIG5vIHZhbG9yXHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9vdXRlckNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7IHRoaXMuaW5pdGlhbGl6ZVNlbGVjdGVkVmFsdWUoKSB9KTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX291dGVyQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7IHRoaXMuc3Vic2NyaWJlQ29udHJvbENoYW5nZXMoKSB9KTtcclxuICB9XHJcblxyXG4gIC8qKiAob2JyaWdhdMOzcmlvKSBMaXN0YSBkZSByZWdpc3Ryb3MgcXVlIHNlcsOjbyBleGliaWRvcyBubyBjb21ibywgZW5xdWFudG8gZWxlcyBlc3RpdmVyZW0gY2FycmVnYW5kbyBzZXLDoSBleGliaWRvIHVtIHNwaW5uZXJcclxuICAgKiBAYWxpYXMgJ2xpc3QnXHJcbiAgICogQHR5cGUge1JlY29yZENvbWJvYm94W119ICovXHJcbiAgQElucHV0KHsgYWxpYXM6ICdsaXN0JywgcmVxdWlyZWQ6IHRydWUgfSkgcHVibGljIGNvbWJvYm94TGlzdD86IFJlY29yZENvbWJvYm94W107XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIFRleHRvIGRvIHLDs3R1bG8gcXVlIHNlcsOhIGV4aWJpZG8gYWNpbWEgZG8gY29tYm8uIENhc28gbsOjbyBpbmZvcm1hZG8gbmFkYSBzZXLDoSBleGliaWRvXHJcbiAgICogQHR5cGUge3N0cmluZ30gKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbGFiZWxUZXh0Pzogc3RyaW5nO1xyXG5cclxuICAvKiogKG9wY2lvbmFsKSBEZWZpbmUgc2UgbyBjYW1wbyDDqSBvYnJpZ2F0w7NyaW8sIHZhaSBleGliaXIgbyAnKicgdmVybWVsaG8gYW8gbGFkbyBkbyBsYWJlbCAoc2UgZWxlIGVzdGl2ZXIgcHJlc2VudGUpXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQGRlZmF1bHQgZmFsc2UgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbGliUmVxdWlyZWQ/OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIERlZmluZSBzZSBvIGNhbXBvIGVzdMOhIGRlc2FiaWxpdGFkby4gRGV2ZSBzZXIgdXNhZG8gcGFyYSB2YWxpZGHDp8O1ZXMgZGUgaGFiaWxpdGHDp8OjbyBkaW7Dom1pY2EgZG8gY2FtcG9cclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAZGVmYXVsdCBmYWxzZSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkID8/IGZhbHNlOyB9XHJcbiAgcHVibGljIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlID09PSB0cnVlKSB0aGlzLmlubmVyQ29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICBlbHNlIHRoaXMuaW5uZXJDb250cm9sLmVuYWJsZSgpO1xyXG5cclxuICAgIHRoaXMuc2V0SXNJbnZhbGlkKCk7XHJcbiAgfVxyXG5cclxuICAvKiogKG9wY2lvbmFsKSBQbGFjZWhvbGRlciBkbyBjYW1wbyBwcmluY2lwYWwgZG8gY29tYm9cclxuICAgKiBAYWxpYXMgJ21haW5QbGFjZWhvbGRlcidcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBkZWZhdWx0IFwiU2VsZWNpb25lIHVtYSBvcMOnw6NvLi4uXCIgKi9cclxuICBASW5wdXQoJ21haW5QbGFjZWhvbGRlcicpIHB1YmxpYyBtYWluSW5wdXRQbGFjZWhvbGRlcj86IHN0cmluZyA9IFwiU2VsZWNpb25lIHVtYSBvcMOnw6NvLi4uXCI7XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIFBsYWNlaG9sZGVyIGRvIGNhbXBvIGRlIHBlc3F1aXNhIGRlbnRybyBkbyBjb21ib1xyXG4gICAqIEBhbGlhcyAnc2VhcmNoUGxhY2Vob2xkZXInXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAZGVmYXVsdCBcIlBlc3F1aXNhLi4uXCIgKi9cclxuICBASW5wdXQoJ3NlYXJjaFBsYWNlaG9sZGVyJykgcHVibGljIHNlYXJjaElucHV0UGxhY2Vob2xkZXI/OiBzdHJpbmcgPSBcIlBlc3F1aXNhLi4uXCI7XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIERlZmluZSBvIHRlbWEgZGUgY29yIGRvIGNvbXBvbmVudGUsIGNvbW8gXCJwcmltYXJ5XCIsIFwic3VjY2Vzc1wiLCBvdSBcImRhbmdlclwiXHJcbiAgICogQGFsaWFzICd0aGVtZSdcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBkZWZhdWx0IFwicHJpbWFyeVwiXHJcbiAgKi9cclxuICBASW5wdXQoJ3RoZW1lJykgcHVibGljIGNvbG9yVGhlbWU/OiBzdHJpbmcgPSBcInByaW1hcnlcIjtcclxuXHJcbiAgLyoqIChvcGNpb25hbCkgRGVmaW5lIHVtIG5vbWUgcGFyYSBvIGNvbnRyb2xlLCB1dGlsaXphZG8gaW50ZXJuYW1lbnRlIGVtIGFsZ3VucyByZWN1cnNvc1xyXG4gICAqIEBhbGlhcyAnY29udHJvbE5hbWUnXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAqL1xyXG4gIEBJbnB1dCgnY29udHJvbE5hbWUnKSBwdWJsaWMgY29udHJvbE5hbWU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBFdmVudG8gZW1pdGlkbyBhbyByZWNhcnJlZ2FyIGEgbGlzdGEgZGUgcmVnaXN0cm9zXHJcbiAgICogQGV4YW1wbGUgQW8gc2VyIGVtaXRpZG8sIG8gY29tcG9uZW50ZSBwYWkgcG9kZSByZWZhemVyIG8gR0VUIGRhIGxpc3RhLCBwb3IgZXhlbXBsby5cclxuICAgKiBAZW1pdHMgRXZlbnRFbWl0dGVyPHN0cmluZz4gcXVlIGxldmEgbyB2YWxvciBzdHJpbmcgZGEgcGVzcXVpc2EgZmVpdGEgcGFyYSBzZXIgZW52aWFkYSBwYXJhIG8gR0VUXHJcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxzdHJpbmc+fSAqL1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25SZWxvYWRMaXN0OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlciB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXIgfCBudWxsPigpO1xyXG4gIFxyXG5cclxuICBAVmlld0NoaWxkKCdtYWluSW5wdXQnKSBwcml2YXRlIF9tYWluSW5wdXQhOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duTWVudScpIHByaXZhdGUgX2Ryb3Bkb3duTWVudSE6IEVsZW1lbnRSZWY7XHJcbiAgLy8gI2VuZHJlZ2lvbiBQVUJMSUNcclxuXHJcbiAgLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PiBQUk9QRVJUSUVTIDw9PT09PT09PT09XHJcblxyXG5cclxuICAvLyAjcmVnaW9uID09PT09PT09PT0+IElOSVRJQUxJWkFUSU9OIDw9PT09PT09PT09XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFZhbGlkYXRvcigpO1xyXG4gICAgdGhpcy5pbml0aWFsaXplU2VsZWN0ZWRWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hZGp1c3REcm9wZG93bldpZHRoKCk7XHJcbiAgfVxyXG5cclxuICAvLyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgLy8gICBpZiAoY2hhbmdlc1tcImNvbWJvYm94TGlzdFwiXT8uY3VycmVudFZhbHVlKSB0aGlzLmluaXRpYWxpemVTZWxlY3RlZFZhbHVlKCk7XHJcbiAgLy8gICBpZiAoY2hhbmdlc1tcIm91dGVyQ29udHJvbFwiXT8uY3VycmVudFZhbHVlKSB7XHJcbiAgLy8gICAgIHRoaXMuc3Vic2NyaWJlQ29udHJvbENoYW5nZXMoKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhcmVudEdyb3VwID0gdGhpcy5fb3V0ZXJDb250cm9sLnBhcmVudCBhcyBGb3JtR3JvdXA7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvbnRyb2xOYW1lOlwiLCB0aGlzLmNvbnRyb2xOYW1lKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuY29udHJvbE5hbWUpIHtcclxuICAgICAgLy8gSXRlcmFuZG8gc29icmUgb3MgY29udHJvbGVzIG5vIEZvcm1Hcm91cFxyXG4gICAgICBjb25zdCBjb250cm9sRXhpc3RzID0gT2JqZWN0LnZhbHVlcyhwYXJlbnRHcm91cC5jb250cm9scykuc29tZShjb250cm9sID0+IGNvbnRyb2wgPT09IHRoaXMuX291dGVyQ29udHJvbCk7XHJcblxyXG4gICAgICBpZiAocGFyZW50R3JvdXApIHtcclxuICAgICAgICBpZiAoIWNvbnRyb2xFeGlzdHMpIHRocm93IG5ldyBFcnJvcihcIkVycm8gbm8gPGxpYi1jb21ib2JveD4gLSBPIEZvcm1Db250cm9sIGluZm9ybWFkbyBuw6NvIGZvaSBlbmNvbnRyYWRvIGRlbnRybyBkbyBGb3JtR3JvdXAuLi5cIik7XHJcbiAgICAgICAgY29uc3QgdGVtcENvbnRyb2wgPSBPYmplY3QudmFsdWVzKHBhcmVudEdyb3VwLmNvbnRyb2xzKS5maW5kKGNvbnRyb2wgPT4gY29udHJvbCA9PT0gdGhpcy5fb3V0ZXJDb250cm9sKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRlbXBDb250cm9sIS5kaXNhYmxlZDtcclxuICAgICAgICB0aGlzLmludmFsaWQgPSB0ZW1wQ29udHJvbCEuaW52YWxpZDtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gdGVtcENvbnRyb2whLmRpcnR5O1xyXG4gICAgICAgIHRoaXMudG91Y2hlZCA9IHRlbXBDb250cm9sIS50b3VjaGVkO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5zZXRJc0ludmFsaWQoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5fb3V0ZXJDb250cm9sLmRpc2FibGVkO1xyXG4gICAgICAgIHRoaXMuaW52YWxpZCA9IHRoaXMuX291dGVyQ29udHJvbC5pbnZhbGlkO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSB0aGlzLl9vdXRlckNvbnRyb2wuZGlydHk7XHJcbiAgICAgICAgdGhpcy50b3VjaGVkID0gdGhpcy5fb3V0ZXJDb250cm9sLnRvdWNoZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SXNJbnZhbGlkKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCBjb250cm9sID0gcGFyZW50R3JvdXAuZ2V0KHRoaXMuY29udHJvbE5hbWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInBhcmVudEdyb3VwOlwiLCBwYXJlbnRHcm91cCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY29udHJvbEV4aXN0czpcIiwgY29udHJvbCk7XHJcblxyXG4gICAgICBpZiAocGFyZW50R3JvdXApIHtcclxuICAgICAgICBpZiAoY29udHJvbCA9PT0gbnVsbCkgY29uc29sZS5lcnJvcihgRXJybyBubyA8bGliLWNvbWJvYm94PiAtIE8gRm9ybUNvbnRyb2wgZGUgbm9tZSBcIiR7dGhpcy5jb250cm9sTmFtZX1cIiBpbmZvcm1hZG8gbsOjbyBmb2kgZW5jb250cmFkbyBkZW50cm8gZG8gRm9ybUdyb3VwLmApO1xyXG5cclxuICAgICAgICBjb25zdCB0ZW1wQ29udHJvbCA9IHBhcmVudEdyb3VwLmNvbnRyb2xzW3RoaXMuY29udHJvbE5hbWUgYXMgc3RyaW5nXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRlbXBDb250cm9sOlwiLCB0ZW1wQ29udHJvbCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0ZW1wQ29udHJvbCEuZGlzYWJsZWQ7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkID0gdGVtcENvbnRyb2whLmludmFsaWQ7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRlbXBDb250cm9sIS5kaXJ0eTtcclxuICAgICAgICB0aGlzLnRvdWNoZWQgPSB0ZW1wQ29udHJvbCEudG91Y2hlZDtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuc2V0SXNJbnZhbGlkKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuX291dGVyQ29udHJvbC5kaXNhYmxlZDtcclxuICAgICAgICB0aGlzLmludmFsaWQgPSB0aGlzLl9vdXRlckNvbnRyb2wuaW52YWxpZDtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gdGhpcy5fb3V0ZXJDb250cm9sLmRpcnR5O1xyXG4gICAgICAgIHRoaXMudG91Y2hlZCA9IHRoaXMuX291dGVyQ29udHJvbC50b3VjaGVkO1xyXG5cclxuICAgICAgICB0aGlzLnNldElzSW52YWxpZCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gTyBxdWUgZmF6ZXIgcXVhbmRvIG8gZXZlbnRvIGRlIHJlZGltZW5zaW9uYW1lbnRvIG9jb3JyZXJcclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcclxuICBvblJlc2l6ZShldmVudDogRXZlbnQpOiB2b2lkIHsgdGhpcy5hZGp1c3REcm9wZG93bldpZHRoKCkgfVxyXG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gSU5JVElBTElaQVRJT04gPD09PT09PT09PT1cclxuXHJcblxyXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gVVRJTFMgPD09PT09PT09PT1cclxuICBwdWJsaWMgc2V0VmFsdWUoaXRlbTogUmVjb3JkQ29tYm9ib3gpOiB2b2lkIHtcclxuICAgIHRoaXMudGV4dG9QZXNxdWlzYSA9IFwiXCI7XHJcbiAgICB0aGlzLmlubmVyQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgdGhpcy5fb3V0ZXJDb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcbiAgICBcclxuICAgIHRoaXMuX291dGVyQ29udHJvbC5zZXRWYWx1ZShpdGVtLklEKTtcclxuICAgIHRoaXMuaW5uZXJDb250cm9sLnNldFZhbHVlKGl0ZW0uTEFCRUwpO1xyXG5cclxuICAgIHRoaXMuYXJpYUV4cGFuZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNldElzSW52YWxpZCgpO1xyXG5cclxuICAgIHRoaXMub25DaGFuZ2UuZW1pdChpdGVtLklEKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhclZhbHVlKCk6IHZvaWQge1xyXG4gICAgdGhpcy50ZXh0b1Blc3F1aXNhID0gXCJcIjtcclxuICAgIHRoaXMuaW5uZXJDb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcbiAgICB0aGlzLl9vdXRlckNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuXHJcbiAgICB0aGlzLl9vdXRlckNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgICB0aGlzLmlubmVyQ29udHJvbC5zZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgICB0aGlzLmFyaWFFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXRJc0ludmFsaWQoKTtcclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQobnVsbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVTZWxlY3RlZFZhbHVlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbm5lckNvbnRyb2wuc2V0VmFsdWUobnVsbCk7IC8vIExpbXBhIG8gY2FtcG8gYW50ZXMgZGUgcXVhbHF1ZXIgY29pc2FcclxuXHJcbiAgICBpZiAoIXRoaXMuY29tYm9ib3hMaXN0IHx8ICh0aGlzLl9vdXRlckNvbnRyb2wudmFsdWUgPT0gbnVsbCAmJiB0aGlzLl9vdXRlckNvbnRyb2wudmFsdWUgPT0gJycpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbGl6ZWRWYWx1ZSA9IHRoaXMuY29tYm9ib3hMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLklEID09IHRoaXMuX291dGVyQ29udHJvbC52YWx1ZSlcclxuICAgIGlmIChpbml0aWFsaXplZFZhbHVlKSB0aGlzLmlubmVyQ29udHJvbC5zZXRWYWx1ZShpbml0aWFsaXplZFZhbHVlLkxBQkVMKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRqdXN0RHJvcGRvd25XaWR0aCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9tYWluSW5wdXQgJiYgdGhpcy5fZHJvcGRvd25NZW51KSB7XHJcbiAgICAgIGNvbnN0IGlucHV0V2lkdGggPSB0aGlzLl9tYWluSW5wdXQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgdGhpcy5fZHJvcGRvd25NZW51Lm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtpbnB1dFdpZHRofXB4YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBTZXJ2ZSBwYXJhIGF0dWFsaXphciBvIHN0YXR1cyBkbyBjb250cm9sIGUgbyBkZXNhYmlsaXRhciBjYXNvIHNlamEgZmVpdG8gbm8gY29tcG9uZW50ZSBwYWksXHJcbiAgICogc2VtIGEgbmVjZXNzaWRhZGUgZGUgdW1hIG91dHJhIHByb3ByaWVkYWRlIGVzcGVjw61maWNhIHBhcmEgaXN0by4gKi9cclxuICBwcml2YXRlIHN1YnNjcmliZUNvbnRyb2xDaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb3V0ZXJDb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IFwiRElTQUJMRURcIikgdGhpcy5pbm5lckNvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuaW5uZXJDb250cm9sLmVuYWJsZSgpO1xyXG5cclxuICAgICAgdGhpcy5zZXRJc0ludmFsaWQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2V0VmFsaWRhdG9yKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX291dGVyQ29udHJvbC5oYXNWYWxpZGF0b3IoVmFsaWRhdG9ycy5yZXF1aXJlZCkpIHsgdGhpcy5pbm5lckNvbnRyb2wuYWRkVmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTsgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRJc0ludmFsaWQoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhcImludmFsaWQ6XCIsIHRoaXMuaW52YWxpZCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImRpcnR5OlwiLCB0aGlzLmRpcnR5KTtcclxuICAgIGNvbnNvbGUubG9nKFwidG91Y2hlZDpcIiwgdGhpcy50b3VjaGVkKTtcclxuXHJcbiAgICB0aGlzLmludmFsaWRDb250cm9sID0gdGhpcy5pbnZhbGlkICYmICh0aGlzLnRvdWNoZWQgJiYgdGhpcy5kaXJ0eSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImludmFsaWRDb250cm9sOlwiLCB0aGlzLmludmFsaWRDb250cm9sKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWxvYWRMaXN0KCk6IHZvaWQgeyB0aGlzLm9uUmVsb2FkTGlzdC5lbWl0KHRoaXMudGV4dG9QZXNxdWlzYSkgfVxyXG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gVVRJTFMgPD09PT09PT09PT1cclxuXHJcbn1cclxuIiwiPGxhYmVsICpuZ0lmPVwibGFiZWxUZXh0ICYmIGxhYmVsVGV4dCAhPSAnJ1wiIFtsaWJSZXF1aXJlZF09XCJsaWJSZXF1aXJlZCA/PyBmYWxzZVwiIGNsYXNzPVwiZm9ybS1sYWJlbCBmdy1ib2xkXCI+e3sgbGFiZWxUZXh0IH19PC9sYWJlbD5cclxuPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGRyb3Bkb3duIGZsZXgtZmlsbCBnbGItbWF4LWhlaWdodC0zNTBweFwiPlxyXG5cclxuICAgPCEtLSBFc3RlIGVsZW1lbnRvIG5nLWNvbnRlbnQgY29tIG8gYXRyaWJ1dG8gW2J0bkxlZnRdIHBlcm1pdGUgcXVlIG8gdXN1w6FyaW8gZmluYWwgZm9ybmXDp2EgY29udGXDumRvIHBlcnNvbmFsaXphZG8gcGFyYSBzZXIgZXhpYmlkbyBubyBsYWRvIGVzcXVlcmRvIGRvIGNvbWJvYm94IGRlIHBlc3F1aXNhLlxyXG4gICBBbyB1c2FyIG8gYXRyaWJ1dG8gW2J0bkxlZnRdLCBvIHVzdcOhcmlvIHBvZGUgZmFjaWxtZW50ZSBhZGljaW9uYXIgYm90w7VlcyBvdSBvdXRyb3MgZWxlbWVudG9zIHBhcmEgbWVsaG9yYXIgYSBmdW5jaW9uYWxpZGFkZSBvdSBhcGFyw6puY2lhIGRvIGNvbWJvYm94IGRlIHBlc3F1aXNhLiAtLT5cclxuICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2J0bkxlZnRdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuICAgPGlucHV0ICAjbWFpbklucHV0IGNsYXNzPVwiZm9ybS1zZWxlY3QgdGV4dC1zdGFydCByb3VuZGVkLWVuZFwiIHR5cGU9XCJ0ZXh0XCIgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiIFtwbGFjZWhvbGRlcl09XCJtYWluSW5wdXRQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJpbm5lckNvbnRyb2xcIiBkYXRhLWJzLWF1dG8tY2xvc2U9XCJvdXRzaWRlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgcmVhZG9ubHkgW2NsYXNzLmlzLWludmFsaWRdPVwiaW52YWxpZENvbnRyb2xcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiYXJpYUV4cGFuZGVkID0gIWFyaWFFeHBhbmRlZDsgc2VhcmNoSW5wdXQuZm9jdXMoKVwiIChmb2N1cyk9XCJzZWFyY2hJbnB1dC5mb2N1cygpXCI+XHJcblxyXG4gICA8dWwgICNkcm9wZG93bk1lbnUgIGNsYXNzPVwiZHJvcGRvd24tbWVudSBwLTIgZ2xiLW1heC1oZWlnaHQtMzUwcHggb3ZlcmZsb3cteS1zY3JvbGwgei1pbmRleC0xMDIwXCIgW2NsYXNzLnNob3ddPVwiYXJpYUV4cGFuZGVkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0yXCI+XHJcbiAgICAgICAgIDxpbnB1dCAjc2VhcmNoSW5wdXQgKGlucHV0KT1cInRleHRvUGVzcXVpc2EgPSBzZWFyY2hJbnB1dC52YWx1ZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hJbnB1dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGdsYi1pbnB1dC1uby1nbG93XCIgW3BsYWNlaG9sZGVyXT1cInNlYXJjaElucHV0UGxhY2Vob2xkZXJcIiAoa2V5dXAuZW50ZXIpPVwicmVsb2FkTGlzdCgpXCI+XHJcbiAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXt7Y29sb3JUaGVtZX19XCIgKGNsaWNrKT1cInJlbG9hZExpc3QoKVwiPiA8YXBwLXN2Zy1zdG9yYWdlIHN2Z05hbWU9XCJsdXBhXCIgc3ZnU2l6ZT1cIm1lZGl1bS1zbWFsbFwiIC8+IDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIEBpZiAoY29tYm9ib3hMaXN0KSB7XHJcbiAgICAgICAgIDxsaSAqbmdJZj1cImlubmVyQ29udHJvbC52YWx1ZSAhPSAnJyAmJiBpbm5lckNvbnRyb2wudmFsdWUgIT0gbnVsbFwiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIChjbGljayk9XCJjbGVhclZhbHVlKClcIj4gPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+TGltcGFyIG9ww6fDo28gc2VsZWNpb25hZGE8L3NwYW4+IDwvbGk+XHJcbiAgICAgICAgIEBmb3IgKGl0ZW0gb2YgY29tYm9ib3hMaXN0IHwgdGV4dEZpbHRlcjp0ZXh0b1Blc3F1aXNhOyB0cmFjayAkaW5kZXgpIHtcclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIChjbGljayk9XCJzZXRWYWx1ZShpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIml0ZW0uQWRkaXRpb25hbFN0cmluZ1Byb3BlcnR5MSB8fCBpdGVtLkFkZGl0aW9uYWxTdHJpbmdQcm9wZXJ0eTEgIT0gJydcIiBjbGFzcz1cImdsYi1mcy0xMiBmdy1ib2xkIGQtaW5saW5lLWJsb2NrIHctMTI1XCI+e3sgaXRlbS5BZGRpdGlvbmFsU3RyaW5nUHJvcGVydHkxIH19PC9zcGFuPiB7eyBpdGVtLkxBQkVMIH19XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgQGVtcHR5IHsgPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbSBmc3QtaXRhbGljXCI+TmVuaHVtIHJlZ2lzdHJvIGVuY29udHJhZG8gY29tIGVzdGEgcGVzcXVpc2EuLi48L2xpPiB9XHJcbiAgICAgIH1cclxuICAgICAgQGVsc2UgeyA8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtIHRleHQtY2VudGVyXCI+IDxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj48c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkNhcnJlZ2FuZG8gZGFkb3MuLi48L3NwYW4+PC9kaXY+IDwvbGk+IH1cclxuICAgPC91bD5cclxuXHJcbiAgIDwhLS0gRXN0ZSBlbGVtZW50byBuZy1jb250ZW50IGNvbSBvIGF0cmlidXRvIFtidG5SaWdodF0gcGVybWl0ZSBxdWUgbyB1c3XDoXJpbyBmaW5hbCBmb3JuZcOnYSBjb250ZcO6ZG8gcGVyc29uYWxpemFkbyBwYXJhIHNlciBleGliaWRvIG5vIGxhZG8gZGlyZWl0byBkbyBjb21ib2JveCBkZSBwZXNxdWlzYS5cclxuICAgQW8gdXNhciBvIGF0cmlidXRvIFtidG5SaWdodF0sIG8gdXN1w6FyaW8gcG9kZSBmYWNpbG1lbnRlIGFkaWNpb25hciBib3TDtWVzIG91IG91dHJvcyBlbGVtZW50b3MgcGFyYSBtZWxob3JhciBhIGZ1bmNpb25hbGlkYWRlIG91IGFwYXLDqm5jaWEgZG8gY29tYm9ib3ggZGUgcGVzcXVpc2EuIC0tPlxyXG4gICA8bmctY29udGVudCBzZWxlY3Q9XCJbYnRuUmlnaHRdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuPC9kaXY+XHJcblxyXG48IS0tICNyZWdpb24gTUVOU0FHRU0gREUgRVJSTyBERSBWQUxJREHDh8ODTyAtLT5cclxuPGFwcC1maWVsZC1lcnJvci1tZXNzYWdlICpuZ0lmPVwiaW52YWxpZENvbnRyb2xcIiBbY29udHJvbF09XCJpbm5lckNvbnRyb2xcIiAvPlxyXG48IS0tICNlbmRyZWdpb24gTUVOU0FHRU0gREUgRVJSTyBERSBWQUxJREHDh8ODTyAtLT5cclxuIl19
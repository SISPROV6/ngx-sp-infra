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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWNvbWJvYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvbGliLWNvbWJvYm94L2xpYi1jb21ib2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2xpYi1jb21ib2JveC9saWItY29tYm9ib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQyxTQUFTLEVBQXVCLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFnQyxNQUFNLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwTSxPQUFPLEVBQXlDLFdBQVcsRUFBZ0MsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7QUFJcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCRztBQU1ILE1BQU0sT0FBTyxvQkFBb0I7SUFPL0IsSUFBYyxZQUFZLEtBQWMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNwRSxJQUFjLFlBQVksQ0FBQyxLQUFjLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBZ0IxRSxxQkFBcUI7SUFFckIsaUJBQWlCO0lBRWpCOzt5REFFcUQ7SUFDckQsSUFDVyxZQUFZLENBQUMsS0FBOEM7UUFDcEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFvQixDQUFDO1FBRTFDLDhFQUE4RTtRQUM5RSxJQUFJLElBQUksQ0FBQyxhQUFhO1lBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV6RCx3RUFBd0U7UUFDeEUsSUFBSSxDQUFDLGFBQWEsR0FB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b0JBQW9CLGt2QkN4Q2pDLDRyR0FzQ0E7OzRGREVhLG9CQUFvQjtrQkFMaEMsU0FBUzsrQkFDRSxjQUFjO3dEQW9DYixZQUFZO3NCQUR0QixLQUFLO3VCQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2dCQWVNLFlBQVk7c0JBQTVELEtBQUs7dUJBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Z0JBSXhCLFNBQVM7c0JBQXhCLEtBQUs7Z0JBS1UsV0FBVztzQkFBMUIsS0FBSztnQkFNSyxRQUFRO3NCQURsQixLQUFLO2dCQWEyQixvQkFBb0I7c0JBQXBELEtBQUs7dUJBQUMsaUJBQWlCO2dCQU1XLHNCQUFzQjtzQkFBeEQsS0FBSzt1QkFBQyxtQkFBbUI7Z0JBT0gsVUFBVTtzQkFBaEMsS0FBSzt1QkFBQyxPQUFPO2dCQU1lLFdBQVc7c0JBQXZDLEtBQUs7dUJBQUMsYUFBYTtnQkFNSCxZQUFZO3NCQUE1QixNQUFNO2dCQUdVLFFBQVE7c0JBQXhCLE1BQU07Z0JBR3lCLFVBQVU7c0JBQXpDLFNBQVM7dUJBQUMsV0FBVztnQkFDYSxhQUFhO3NCQUEvQyxTQUFTO3VCQUFDLGNBQWM7Z0JBb0Z6QixRQUFRO3NCQURQLFlBQVk7dUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRG9DaGVjaywgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBOR19WQUxVRV9BQ0NFU1NPUiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUmVjb3JkQ29tYm9ib3ggfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tYm9ib3gvcmVjb3JkLWNvbWJvYm94JztcclxuXHJcbi8qKlxyXG4gKiBAY29tcG9uZW50IExpYkNvbWJvYm94Q29tcG9uZW50XHJcbiAqIEBzZWxlY3RvciBsaWItY29tYm9ib3hcclxuICogXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBPIGNvbXBvbmVudGUgTGliQ29tYm9ib3hDb21wb25lbnQgw6kgcHJvamV0YWRvIHBhcmEgZm9ybmVjZXIgYW9zIHVzdcOhcmlvcyB1bWEgaW50ZXJmYWNlIHBhcmEgcGVzcXVpc2FyIGUgc2VsZWNpb25hciBpdGVucyBkZSB1bWEgbGlzdGEuXHJcbiAqIEVsZSBzdXBvcnRhIGEgZmlsdHJhZ2VtIGRlIGl0ZW5zIGNvbSBiYXNlIG5hIGVudHJhZGEgZG8gdXN1w6FyaW8sIHBlcm1pdGluZG8gdW1hIHNlbGXDp8OjbyBtYWlzIGbDoWNpbCBlbSBsaXN0YXMgZXh0ZW5zYXMuXHJcbiAqIFxyXG4gKiAjIyBGdW5jaW9uYWxpZGFkZXM6XHJcbiAqIC0gUGVzcXVpc2EgZSBmaWx0cmFnZW0gZGUgaXRlbnMgbmEgbGlzdGEgZG8gY29tYm9ib3guXHJcbiAqIC0gU2VsZcOnw6NvIGRlIGl0ZW5zIGNvbSBmZWVkYmFjayB2aXN1YWwuXHJcbiAqIC0gRW1pc3PDo28gZGUgZXZlbnRvcyBwZXJzb25hbGl6YWRvcyBwYXJhIGludGVyYcOnw7VlcyBkbyB1c3XDoXJpbywgY29tbyByZWNhcnJlZ2FyIGEgbGlzdGEgb3Ugc2VsZWNpb25hciB1bSBpdGVtLlxyXG4gKiAtIEFqdXN0ZSBkaW7Dom1pY28gZGEgbGFyZ3VyYSBkbyBkcm9wZG93biBwYXJhIGNvcnJlc3BvbmRlciBhbyBpbnB1dCBwcmluY2lwYWwuXHJcbiAqIC0gSW5pY2lhbGl6YcOnw6NvIGRlIHVtIHZhbG9yIHNlbGVjaW9uYWRvLCBzZSBmb3JuZWNpZG8uXHJcbiAqIFxyXG4gKiAjIyBJbnB1dHM6XHJcbiAqIC0gYG91dGVyQ29udHJvbGAgKEZvcm1Db250cm9sIHwgQWJzdHJhY3RDb250cm9sKTogQ29udHJvbCBwYXJhIHNlbGXDp8OjbyBkb3MgdmFsb3JlcywgYXR1YWxpemFyw6EgYXV0b21hdGljYW1lbnRlIG8gY29udHJvbCBkbyBjb21wb25lbnRlIHBhaSB0YW1iw6ltXHJcbiAqIC0gYGNvbWJvYm94TGlzdGAgKFJlY29yZENvbWJvYm94W10pOiBMaXN0YSBkZSByZWdpc3Ryb3MgcXVlIHNlcsOjbyBleGliaWRvcyBubyBjb21ibywgZW5xdWFudG8gZWxlcyBlc3RpdmVyZW0gY2FycmVnYW5kbyBzZXLDoSBleGliaWRvIHVtIHNwaW5uZXJcclxuICogLSBgbGFiZWxUZXh0YCAoc3RyaW5nKTogVGV4dG8gZG8gcsOzdHVsbyBxdWUgc2Vyw6EgZXhpYmlkbyBhY2ltYSBkbyBjb21iby4gQ2FzbyBuw6NvIGluZm9ybWFkbyBuYWRhIHNlcsOhIGV4aWJpZG9cclxuICogLSBgZGlzYWJsZWRgIChib29sZWFuKTogRGVmaW5lIHNlIG8gY2FtcG8gZXN0w6EgZGVzYWJpbGl0YWRvLiBEZXZlIHNlciB1c2FkbyBwYXJhIHZhbGlkYcOnw7VlcyBkZSBoYWJpbGl0YcOnw6NvIGRpbsOibWljYSBkbyBjYW1wb1xyXG4gKiAtIGBsaWJSZXF1aXJlZGAgKGJvb2xlYW4pOiBEZWZpbmUgc2UgbyBjYW1wbyDDqSBvYnJpZ2F0w7NyaW8sIHZhaSBleGliaXIgbyAnKicgdmVybWVsaG8gYW8gbGFkbyBkbyBsYWJlbCAoc2UgZWxlIGVzdGl2ZXIgcHJlc2VudGUpXHJcbiAqIC0gYG1haW5JbnB1dFBsYWNlaG9sZGVyYCAoc3RyaW5nKTogUGxhY2Vob2xkZXIgZG8gY2FtcG8gcHJpbmNpcGFsIGRvIGNvbWJvXHJcbiAqIC0gYHNlYXJjaElucHV0UGxhY2Vob2xkZXJgIChzdHJpbmcpOiBQbGFjZWhvbGRlciBkbyBjYW1wbyBkZSBwZXNxdWlzYSBkZW50cm8gZG8gY29tYm9cclxuICogLSBgY29sb3JUaGVtZWAgKFwicHJpbWFyeVwiIHwgXCJzZWNvbmRhcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJkYW5nZXJcIiB8IFwid2FybmluZ1wiIHwgXCJpbmZvXCIgfCBcImxpZ2h0XCIgfCBcImRhcmtcIik6IERlZmluZSBvIHRlbWEgZGUgY29yIGRvIGNvbXBvbmVudGUsIGNvbW8gXCJwcmltYXJ5XCIsIFwic3VjY2Vzc1wiLCBvdSBcImRhbmdlclwiXHJcbiAqIFxyXG4gKiAjIyBPdXRwdXRzOlxyXG4gKiAtIGBvblJlbG9hZExpc3RgIChFdmVudEVtaXR0ZXI8c3RyaW5nPik6IEV2ZW50byBlbWl0aWRvIHF1YW5kbyBhIGxpc3RhIHByZWNpc2Egc2VyIHJlY2FycmVnYWRhLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItY29tYm9ib3gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9saWItY29tYm9ib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9saWItY29tYm9ib3guY29tcG9uZW50LnNjc3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJDb21ib2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcclxuXHJcbiAgLy8gI3JlZ2lvbiA9PT09PT09PT09PiBQUk9QRVJUSUVTIDw9PT09PT09PT09XHJcblxyXG4gIC8vICNyZWdpb24gUFJPVEVDVEVEXHJcbiAgcHJvdGVjdGVkIHRleHRvUGVzcXVpc2E6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgYXJpYUV4cGFuZGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fYXJpYUV4cGFuZGVkOyB9XHJcbiAgcHJvdGVjdGVkIHNldCBhcmlhRXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fYXJpYUV4cGFuZGVkID0gdmFsdWU7IH1cclxuXHJcbiAgcHJvdGVjdGVkIGlubmVyQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2w8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4obnVsbCk7XHJcbiAgcHJvdGVjdGVkIGludmFsaWRDb250cm9sOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCBpbnZhbGlkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIGRpcnR5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIHRvdWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvLyAjZW5kcmVnaW9uIFBST1RFQ1RFRFxyXG5cclxuICAvLyAjcmVnaW9uIFBSSVZBVEVcclxuICBwcml2YXRlIF9kaXNhYmxlZD86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9hcmlhRXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgcHJpdmF0ZSBfb3V0ZXJDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbDxzdHJpbmcgfCBudW1iZXIgfCBudWxsPihudWxsKTtcclxuICAvLyAjZW5kcmVnaW9uIFBSSVZBVEVcclxuXHJcbiAgLy8gI3JlZ2lvbiBQVUJMSUNcclxuXHJcbiAgLyoqIChvYnJpZ2F0w7NyaW8pIENvbnRyb2wgcGFyYSBzZWxlw6fDo28gZG9zIHZhbG9yZXMsIGF0dWFsaXphcsOhIGF1dG9tYXRpY2FtZW50ZSBvIGNvbnRyb2wgZG8gY29tcG9uZW50ZSBwYWkgdGFtYsOpbVxyXG4gICAqIEBhbGlhcyAnY29udHJvbCdcclxuICAgKiBAdHlwZSB7Rm9ybUNvbnRyb2w8YW55PiB8IEFic3RyYWN0Q29udHJvbDxhbnk+fSAqL1xyXG4gIEBJbnB1dCh7IGFsaWFzOiAnY29udHJvbCcsIHJlcXVpcmVkOiB0cnVlIH0pXHJcbiAgcHVibGljIHNldCBvdXRlckNvbnRyb2wodmFsdWU6IEZvcm1Db250cm9sPGFueT4gfCBBYnN0cmFjdENvbnRyb2w8YW55Pikge1xyXG4gICAgdGhpcy5fb3V0ZXJDb250cm9sID0gdmFsdWUgYXMgRm9ybUNvbnRyb2w7XHJcblxyXG4gICAgLy8gQ2FuY2VsYSBhIHN1YnNjcmnDp8OjbyBhbnRlcmlvciAoc2UgaG91dmVyKSBwYXJhIGV2aXRhciBtw7psdGlwbGFzIHN1YnNjcmnDp8O1ZXNcclxuICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb24pIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cclxuICAgIC8vIFN1YnNjcmnDp8OjbyBhbyBvYnNlcnbDoXZlbCB2YWx1ZUNoYW5nZXMgcGFyYSByZWFnaXIgYSBtdWRhbsOnYXMgbm8gdmFsb3JcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX291dGVyQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHsgdGhpcy5pbml0aWFsaXplU2VsZWN0ZWRWYWx1ZSgpIH0pO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5fb3V0ZXJDb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHsgdGhpcy5zdWJzY3JpYmVDb250cm9sQ2hhbmdlcygpIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIChvYnJpZ2F0w7NyaW8pIExpc3RhIGRlIHJlZ2lzdHJvcyBxdWUgc2Vyw6NvIGV4aWJpZG9zIG5vIGNvbWJvLCBlbnF1YW50byBlbGVzIGVzdGl2ZXJlbSBjYXJyZWdhbmRvIHNlcsOhIGV4aWJpZG8gdW0gc3Bpbm5lclxyXG4gICAqIEBhbGlhcyAnbGlzdCdcclxuICAgKiBAdHlwZSB7UmVjb3JkQ29tYm9ib3hbXX0gKi9cclxuICBASW5wdXQoeyBhbGlhczogJ2xpc3QnLCByZXF1aXJlZDogdHJ1ZSB9KSBwdWJsaWMgY29tYm9ib3hMaXN0PzogUmVjb3JkQ29tYm9ib3hbXTtcclxuXHJcbiAgLyoqIChvcGNpb25hbCkgVGV4dG8gZG8gcsOzdHVsbyBxdWUgc2Vyw6EgZXhpYmlkbyBhY2ltYSBkbyBjb21iby4gQ2FzbyBuw6NvIGluZm9ybWFkbyBuYWRhIHNlcsOhIGV4aWJpZG9cclxuICAgKiBAdHlwZSB7c3RyaW5nfSAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbFRleHQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIERlZmluZSBzZSBvIGNhbXBvIMOpIG9icmlnYXTDs3JpbywgdmFpIGV4aWJpciBvICcqJyB2ZXJtZWxobyBhbyBsYWRvIGRvIGxhYmVsIChzZSBlbGUgZXN0aXZlciBwcmVzZW50ZSlcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAZGVmYXVsdCBmYWxzZSAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBsaWJSZXF1aXJlZD86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIChvcGNpb25hbCkgRGVmaW5lIHNlIG8gY2FtcG8gZXN0w6EgZGVzYWJpbGl0YWRvLiBEZXZlIHNlciB1c2FkbyBwYXJhIHZhbGlkYcOnw7VlcyBkZSBoYWJpbGl0YcOnw6NvIGRpbsOibWljYSBkbyBjYW1wb1xyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBkZWZhdWx0IGZhbHNlICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGlzYWJsZWQgPz8gZmFsc2U7IH1cclxuICBwdWJsaWMgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUgPT09IHRydWUpIHRoaXMuaW5uZXJDb250cm9sLmRpc2FibGUoKTtcclxuICAgIGVsc2UgdGhpcy5pbm5lckNvbnRyb2wuZW5hYmxlKCk7XHJcblxyXG4gICAgdGhpcy5zZXRJc0ludmFsaWQoKTtcclxuICB9XHJcblxyXG4gIC8qKiAob3BjaW9uYWwpIFBsYWNlaG9sZGVyIGRvIGNhbXBvIHByaW5jaXBhbCBkbyBjb21ib1xyXG4gICAqIEBhbGlhcyAnbWFpblBsYWNlaG9sZGVyJ1xyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQGRlZmF1bHQgXCJTZWxlY2lvbmUgdW1hIG9ww6fDo28uLi5cIiAqL1xyXG4gIEBJbnB1dCgnbWFpblBsYWNlaG9sZGVyJykgcHVibGljIG1haW5JbnB1dFBsYWNlaG9sZGVyPzogc3RyaW5nID0gXCJTZWxlY2lvbmUgdW1hIG9ww6fDo28uLi5cIjtcclxuXHJcbiAgLyoqIChvcGNpb25hbCkgUGxhY2Vob2xkZXIgZG8gY2FtcG8gZGUgcGVzcXVpc2EgZGVudHJvIGRvIGNvbWJvXHJcbiAgICogQGFsaWFzICdzZWFyY2hQbGFjZWhvbGRlcidcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBkZWZhdWx0IFwiUGVzcXVpc2EuLi5cIiAqL1xyXG4gIEBJbnB1dCgnc2VhcmNoUGxhY2Vob2xkZXInKSBwdWJsaWMgc2VhcmNoSW5wdXRQbGFjZWhvbGRlcj86IHN0cmluZyA9IFwiUGVzcXVpc2EuLi5cIjtcclxuXHJcbiAgLyoqIChvcGNpb25hbCkgRGVmaW5lIG8gdGVtYSBkZSBjb3IgZG8gY29tcG9uZW50ZSwgY29tbyBcInByaW1hcnlcIiwgXCJzdWNjZXNzXCIsIG91IFwiZGFuZ2VyXCJcclxuICAgKiBAYWxpYXMgJ3RoZW1lJ1xyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQGRlZmF1bHQgXCJwcmltYXJ5XCJcclxuICAqL1xyXG4gIEBJbnB1dCgndGhlbWUnKSBwdWJsaWMgY29sb3JUaGVtZT86IHN0cmluZyA9IFwicHJpbWFyeVwiO1xyXG5cclxuICAvKiogKG9wY2lvbmFsKSBEZWZpbmUgdW0gbm9tZSBwYXJhIG8gY29udHJvbGUsIHV0aWxpemFkbyBpbnRlcm5hbWVudGUgZW0gYWxndW5zIHJlY3Vyc29zXHJcbiAgICogQGFsaWFzICdjb250cm9sTmFtZSdcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICovXHJcbiAgQElucHV0KCdjb250cm9sTmFtZScpIHB1YmxpYyBjb250cm9sTmFtZT86IHN0cmluZztcclxuXHJcbiAgLyoqIEV2ZW50byBlbWl0aWRvIGFvIHJlY2FycmVnYXIgYSBsaXN0YSBkZSByZWdpc3Ryb3NcclxuICAgKiBAZXhhbXBsZSBBbyBzZXIgZW1pdGlkbywgbyBjb21wb25lbnRlIHBhaSBwb2RlIHJlZmF6ZXIgbyBHRVQgZGEgbGlzdGEsIHBvciBleGVtcGxvLlxyXG4gICAqIEBlbWl0cyBFdmVudEVtaXR0ZXI8c3RyaW5nPiBxdWUgbGV2YSBvIHZhbG9yIHN0cmluZyBkYSBwZXNxdWlzYSBmZWl0YSBwYXJhIHNlciBlbnZpYWRhIHBhcmEgbyBHRVRcclxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPHN0cmluZz59ICovXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvblJlbG9hZExpc3Q6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG5cclxuICBAT3V0cHV0KCkgcHVibGljIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlciB8IG51bGw+KCk7XHJcbiAgXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ21haW5JbnB1dCcpIHByaXZhdGUgX21haW5JbnB1dCE6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25NZW51JykgcHJpdmF0ZSBfZHJvcGRvd25NZW51ITogRWxlbWVudFJlZjtcclxuICAvLyAjZW5kcmVnaW9uIFBVQkxJQ1xyXG5cclxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IFBST1BFUlRJRVMgPD09PT09PT09PT1cclxuXHJcblxyXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gSU5JVElBTElaQVRJT04gPD09PT09PT09PT1cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VmFsaWRhdG9yKCk7XHJcbiAgICB0aGlzLmluaXRpYWxpemVTZWxlY3RlZFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFkanVzdERyb3Bkb3duV2lkdGgoKTtcclxuICB9XHJcblxyXG4gIC8vIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAvLyAgIGlmIChjaGFuZ2VzW1wiY29tYm9ib3hMaXN0XCJdPy5jdXJyZW50VmFsdWUpIHRoaXMuaW5pdGlhbGl6ZVNlbGVjdGVkVmFsdWUoKTtcclxuICAvLyAgIGlmIChjaGFuZ2VzW1wib3V0ZXJDb250cm9sXCJdPy5jdXJyZW50VmFsdWUpIHtcclxuICAvLyAgICAgdGhpcy5zdWJzY3JpYmVDb250cm9sQ2hhbmdlcygpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGFyZW50R3JvdXAgPSB0aGlzLl9vdXRlckNvbnRyb2wucGFyZW50IGFzIEZvcm1Hcm91cDtcclxuXHJcbiAgICBpZiAoIXRoaXMuY29udHJvbE5hbWUpIHtcclxuICAgICAgLy8gSXRlcmFuZG8gc29icmUgb3MgY29udHJvbGVzIG5vIEZvcm1Hcm91cFxyXG4gICAgICBjb25zdCBjb250cm9sRXhpc3RzID0gT2JqZWN0LnZhbHVlcyhwYXJlbnRHcm91cC5jb250cm9scykuc29tZShjb250cm9sID0+IGNvbnRyb2wgPT09IHRoaXMuX291dGVyQ29udHJvbCk7XHJcblxyXG4gICAgICBpZiAocGFyZW50R3JvdXApIHtcclxuICAgICAgICBpZiAoIWNvbnRyb2xFeGlzdHMpIGNvbnNvbGUuZXJyb3IoXCJFcnJvIG5vIDxsaWItY29tYm9ib3g+IC0gTyBGb3JtQ29udHJvbCBpbmZvcm1hZG8gbsOjbyBmb2kgZW5jb250cmFkbyBkZW50cm8gZG8gRm9ybUdyb3VwLi4uXCIpO1xyXG4gICAgICAgIGNvbnN0IHRlbXBDb250cm9sID0gT2JqZWN0LnZhbHVlcyhwYXJlbnRHcm91cC5jb250cm9scykuZmluZChjb250cm9sID0+IGNvbnRyb2wgPT09IHRoaXMuX291dGVyQ29udHJvbCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0ZW1wQ29udHJvbCEuZGlzYWJsZWQ7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkID0gdGVtcENvbnRyb2whLmludmFsaWQ7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRlbXBDb250cm9sIS5kaXJ0eTtcclxuICAgICAgICB0aGlzLnRvdWNoZWQgPSB0ZW1wQ29udHJvbCEudG91Y2hlZDtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuc2V0SXNJbnZhbGlkKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuX291dGVyQ29udHJvbC5kaXNhYmxlZDtcclxuICAgICAgICB0aGlzLmludmFsaWQgPSB0aGlzLl9vdXRlckNvbnRyb2wuaW52YWxpZDtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gdGhpcy5fb3V0ZXJDb250cm9sLmRpcnR5O1xyXG4gICAgICAgIHRoaXMudG91Y2hlZCA9IHRoaXMuX291dGVyQ29udHJvbC50b3VjaGVkO1xyXG5cclxuICAgICAgICB0aGlzLnNldElzSW52YWxpZCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgY29udHJvbCA9IHBhcmVudEdyb3VwLmdldCh0aGlzLmNvbnRyb2xOYW1lKTtcclxuXHJcbiAgICAgIGlmIChwYXJlbnRHcm91cCkge1xyXG4gICAgICAgIGlmIChjb250cm9sID09PSBudWxsKSBjb25zb2xlLmVycm9yKGBFcnJvIG5vIDxsaWItY29tYm9ib3g+IC0gTyBGb3JtQ29udHJvbCBkZSBub21lIFwiJHt0aGlzLmNvbnRyb2xOYW1lfVwiIGluZm9ybWFkbyBuw6NvIGZvaSBlbmNvbnRyYWRvIGRlbnRybyBkbyBGb3JtR3JvdXAuYCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRlbXBDb250cm9sID0gcGFyZW50R3JvdXAuY29udHJvbHNbdGhpcy5jb250cm9sTmFtZSBhcyBzdHJpbmddO1xyXG5cclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gdGVtcENvbnRyb2whLmRpc2FibGVkO1xyXG4gICAgICAgIHRoaXMuaW52YWxpZCA9IHRlbXBDb250cm9sIS5pbnZhbGlkO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSB0ZW1wQ29udHJvbCEuZGlydHk7XHJcbiAgICAgICAgdGhpcy50b3VjaGVkID0gdGVtcENvbnRyb2whLnRvdWNoZWQ7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnNldElzSW52YWxpZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLl9vdXRlckNvbnRyb2wuZGlzYWJsZWQ7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkID0gdGhpcy5fb3V0ZXJDb250cm9sLmludmFsaWQ7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRoaXMuX291dGVyQ29udHJvbC5kaXJ0eTtcclxuICAgICAgICB0aGlzLnRvdWNoZWQgPSB0aGlzLl9vdXRlckNvbnRyb2wudG91Y2hlZDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRJc0ludmFsaWQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIC8vIE8gcXVlIGZhemVyIHF1YW5kbyBvIGV2ZW50byBkZSByZWRpbWVuc2lvbmFtZW50byBvY29ycmVyXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXHJcbiAgb25SZXNpemUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7IHRoaXMuYWRqdXN0RHJvcGRvd25XaWR0aCgpIH1cclxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IElOSVRJQUxJWkFUSU9OIDw9PT09PT09PT09XHJcblxyXG5cclxuICAvLyAjcmVnaW9uID09PT09PT09PT0+IFVUSUxTIDw9PT09PT09PT09XHJcbiAgcHVibGljIHNldFZhbHVlKGl0ZW06IFJlY29yZENvbWJvYm94KTogdm9pZCB7XHJcbiAgICB0aGlzLnRleHRvUGVzcXVpc2EgPSBcIlwiO1xyXG4gICAgdGhpcy5pbm5lckNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgIHRoaXMuX291dGVyQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgXHJcbiAgICB0aGlzLl9vdXRlckNvbnRyb2wuc2V0VmFsdWUoaXRlbS5JRCk7XHJcbiAgICB0aGlzLmlubmVyQ29udHJvbC5zZXRWYWx1ZShpdGVtLkxBQkVMKTtcclxuXHJcbiAgICB0aGlzLmFyaWFFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXRJc0ludmFsaWQoKTtcclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoaXRlbS5JRCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXJWYWx1ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudGV4dG9QZXNxdWlzYSA9IFwiXCI7XHJcbiAgICB0aGlzLmlubmVyQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgdGhpcy5fb3V0ZXJDb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcblxyXG4gICAgdGhpcy5fb3V0ZXJDb250cm9sLnNldFZhbHVlKG51bGwpO1xyXG4gICAgdGhpcy5pbm5lckNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcblxyXG4gICAgdGhpcy5hcmlhRXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuc2V0SXNJbnZhbGlkKCk7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplU2VsZWN0ZWRWYWx1ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5uZXJDb250cm9sLnNldFZhbHVlKG51bGwpOyAvLyBMaW1wYSBvIGNhbXBvIGFudGVzIGRlIHF1YWxxdWVyIGNvaXNhXHJcblxyXG4gICAgaWYgKCF0aGlzLmNvbWJvYm94TGlzdCB8fCAodGhpcy5fb3V0ZXJDb250cm9sLnZhbHVlID09IG51bGwgJiYgdGhpcy5fb3V0ZXJDb250cm9sLnZhbHVlID09ICcnKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemVkVmFsdWUgPSB0aGlzLmNvbWJvYm94TGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5JRCA9PSB0aGlzLl9vdXRlckNvbnRyb2wudmFsdWUpXHJcbiAgICBpZiAoaW5pdGlhbGl6ZWRWYWx1ZSkgdGhpcy5pbm5lckNvbnRyb2wuc2V0VmFsdWUoaW5pdGlhbGl6ZWRWYWx1ZS5MQUJFTCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkanVzdERyb3Bkb3duV2lkdGgoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbWFpbklucHV0ICYmIHRoaXMuX2Ryb3Bkb3duTWVudSkge1xyXG4gICAgICBjb25zdCBpbnB1dFdpZHRoID0gdGhpcy5fbWFpbklucHV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgIHRoaXMuX2Ryb3Bkb3duTWVudS5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7aW5wdXRXaWR0aH1weGA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogU2VydmUgcGFyYSBhdHVhbGl6YXIgbyBzdGF0dXMgZG8gY29udHJvbCBlIG8gZGVzYWJpbGl0YXIgY2FzbyBzZWphIGZlaXRvIG5vIGNvbXBvbmVudGUgcGFpLFxyXG4gICAqIHNlbSBhIG5lY2Vzc2lkYWRlIGRlIHVtYSBvdXRyYSBwcm9wcmllZGFkZSBlc3BlY8OtZmljYSBwYXJhIGlzdG8uICovXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVDb250cm9sQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuX291dGVyQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShzdGF0dXMgPT4ge1xyXG4gICAgICBpZiAoc3RhdHVzID09PSBcIkRJU0FCTEVEXCIpIHRoaXMuaW5uZXJDb250cm9sLmRpc2FibGUoKTtcclxuICAgICAgZWxzZSB0aGlzLmlubmVyQ29udHJvbC5lbmFibGUoKTtcclxuXHJcbiAgICAgIHRoaXMuc2V0SXNJbnZhbGlkKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNldFZhbGlkYXRvcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9vdXRlckNvbnRyb2wuaGFzVmFsaWRhdG9yKFZhbGlkYXRvcnMucmVxdWlyZWQpKSB7IHRoaXMuaW5uZXJDb250cm9sLmFkZFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7IH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SXNJbnZhbGlkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnZhbGlkQ29udHJvbCA9IHRoaXMuaW52YWxpZCAmJiAodGhpcy50b3VjaGVkICYmIHRoaXMuZGlydHkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbG9hZExpc3QoKTogdm9pZCB7IHRoaXMub25SZWxvYWRMaXN0LmVtaXQodGhpcy50ZXh0b1Blc3F1aXNhKSB9XHJcbiAgLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PiBVVElMUyA8PT09PT09PT09PVxyXG5cclxufVxyXG4iLCI8bGFiZWwgKm5nSWY9XCJsYWJlbFRleHQgJiYgbGFiZWxUZXh0ICE9ICcnXCIgW2xpYlJlcXVpcmVkXT1cImxpYlJlcXVpcmVkID8/IGZhbHNlXCIgY2xhc3M9XCJmb3JtLWxhYmVsIGZ3LWJvbGRcIj57eyBsYWJlbFRleHQgfX08L2xhYmVsPlxyXG48ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgZHJvcGRvd24gZmxleC1maWxsIGdsYi1tYXgtaGVpZ2h0LTM1MHB4XCI+XHJcblxyXG4gICA8IS0tIEVzdGUgZWxlbWVudG8gbmctY29udGVudCBjb20gbyBhdHJpYnV0byBbYnRuTGVmdF0gcGVybWl0ZSBxdWUgbyB1c3XDoXJpbyBmaW5hbCBmb3JuZcOnYSBjb250ZcO6ZG8gcGVyc29uYWxpemFkbyBwYXJhIHNlciBleGliaWRvIG5vIGxhZG8gZXNxdWVyZG8gZG8gY29tYm9ib3ggZGUgcGVzcXVpc2EuXHJcbiAgIEFvIHVzYXIgbyBhdHJpYnV0byBbYnRuTGVmdF0sIG8gdXN1w6FyaW8gcG9kZSBmYWNpbG1lbnRlIGFkaWNpb25hciBib3TDtWVzIG91IG91dHJvcyBlbGVtZW50b3MgcGFyYSBtZWxob3JhciBhIGZ1bmNpb25hbGlkYWRlIG91IGFwYXLDqm5jaWEgZG8gY29tYm9ib3ggZGUgcGVzcXVpc2EuIC0tPlxyXG4gICA8bmctY29udGVudCBzZWxlY3Q9XCJbYnRuTGVmdF1cIj48L25nLWNvbnRlbnQ+XHJcblxyXG4gICA8aW5wdXQgICNtYWluSW5wdXQgY2xhc3M9XCJmb3JtLXNlbGVjdCB0ZXh0LXN0YXJ0IHJvdW5kZWQtZW5kXCIgdHlwZT1cInRleHRcIiBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCIgW3BsYWNlaG9sZGVyXT1cIm1haW5JbnB1dFBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImlubmVyQ29udHJvbFwiIGRhdGEtYnMtYXV0by1jbG9zZT1cIm91dHNpZGVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiByZWFkb25seSBbY2xhc3MuaXMtaW52YWxpZF09XCJpbnZhbGlkQ29udHJvbFwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJhcmlhRXhwYW5kZWQgPSAhYXJpYUV4cGFuZGVkOyBzZWFyY2hJbnB1dC5mb2N1cygpXCIgKGZvY3VzKT1cInNlYXJjaElucHV0LmZvY3VzKClcIj5cclxuXHJcbiAgIDx1bCAgI2Ryb3Bkb3duTWVudSAgY2xhc3M9XCJkcm9wZG93bi1tZW51IHAtMiBnbGItbWF4LWhlaWdodC0zNTBweCBvdmVyZmxvdy15LXNjcm9sbCB6LWluZGV4LTEwMjBcIiBbY2xhc3Muc2hvd109XCJhcmlhRXhwYW5kZWRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTJcIj5cclxuICAgICAgICAgPGlucHV0ICNzZWFyY2hJbnB1dCAoaW5wdXQpPVwidGV4dG9QZXNxdWlzYSA9IHNlYXJjaElucHV0LnZhbHVlXCIgdHlwZT1cInRleHRcIiBpZD1cInNlYXJjaElucHV0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZ2xiLWlucHV0LW5vLWdsb3dcIiBbcGxhY2Vob2xkZXJdPVwic2VhcmNoSW5wdXRQbGFjZWhvbGRlclwiIChrZXl1cC5lbnRlcik9XCJyZWxvYWRMaXN0KClcIj5cclxuICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4te3tjb2xvclRoZW1lfX1cIiAoY2xpY2spPVwicmVsb2FkTGlzdCgpXCI+IDxhcHAtc3ZnLXN0b3JhZ2Ugc3ZnTmFtZT1cImx1cGFcIiBzdmdTaXplPVwibWVkaXVtLXNtYWxsXCIgLz4gPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgQGlmIChjb21ib2JveExpc3QpIHtcclxuICAgICAgICAgPGxpICpuZ0lmPVwiaW5uZXJDb250cm9sLnZhbHVlICE9ICcnICYmIGlubmVyQ29udHJvbC52YWx1ZSAhPSBudWxsXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgKGNsaWNrKT1cImNsZWFyVmFsdWUoKVwiPiA8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5MaW1wYXIgb3DDp8OjbyBzZWxlY2lvbmFkYTwvc3Bhbj4gPC9saT5cclxuICAgICAgICAgQGZvciAoaXRlbSBvZiBjb21ib2JveExpc3QgfCB0ZXh0RmlsdGVyOnRleHRvUGVzcXVpc2E7IHRyYWNrICRpbmRleCkge1xyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgKGNsaWNrKT1cInNldFZhbHVlKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXRlbS5BZGRpdGlvbmFsU3RyaW5nUHJvcGVydHkxIHx8IGl0ZW0uQWRkaXRpb25hbFN0cmluZ1Byb3BlcnR5MSAhPSAnJ1wiIGNsYXNzPVwiZ2xiLWZzLTEyIGZ3LWJvbGQgZC1pbmxpbmUtYmxvY2sgdy0xMjVcIj57eyBpdGVtLkFkZGl0aW9uYWxTdHJpbmdQcm9wZXJ0eTEgfX08L3NwYW4+IHt7IGl0ZW0uTEFCRUwgfX1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgfVxyXG4gICAgICAgICBAZW1wdHkgeyA8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGZzdC1pdGFsaWNcIj5OZW5odW0gcmVnaXN0cm8gZW5jb250cmFkbyBjb20gZXN0YSBwZXNxdWlzYS4uLjwvbGk+IH1cclxuICAgICAgfVxyXG4gICAgICBAZWxzZSB7IDxsaSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gdGV4dC1jZW50ZXJcIj4gPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPjxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+Q2FycmVnYW5kbyBkYWRvcy4uLjwvc3Bhbj48L2Rpdj4gPC9saT4gfVxyXG4gICA8L3VsPlxyXG5cclxuICAgPCEtLSBFc3RlIGVsZW1lbnRvIG5nLWNvbnRlbnQgY29tIG8gYXRyaWJ1dG8gW2J0blJpZ2h0XSBwZXJtaXRlIHF1ZSBvIHVzdcOhcmlvIGZpbmFsIGZvcm5lw6dhIGNvbnRlw7pkbyBwZXJzb25hbGl6YWRvIHBhcmEgc2VyIGV4aWJpZG8gbm8gbGFkbyBkaXJlaXRvIGRvIGNvbWJvYm94IGRlIHBlc3F1aXNhLlxyXG4gICBBbyB1c2FyIG8gYXRyaWJ1dG8gW2J0blJpZ2h0XSwgbyB1c3XDoXJpbyBwb2RlIGZhY2lsbWVudGUgYWRpY2lvbmFyIGJvdMO1ZXMgb3Ugb3V0cm9zIGVsZW1lbnRvcyBwYXJhIG1lbGhvcmFyIGEgZnVuY2lvbmFsaWRhZGUgb3UgYXBhcsOqbmNpYSBkbyBjb21ib2JveCBkZSBwZXNxdWlzYS4gLS0+XHJcbiAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltidG5SaWdodF1cIj48L25nLWNvbnRlbnQ+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwhLS0gI3JlZ2lvbiBNRU5TQUdFTSBERSBFUlJPIERFIFZBTElEQcOHw4NPIC0tPlxyXG48YXBwLWZpZWxkLWVycm9yLW1lc3NhZ2UgKm5nSWY9XCJpbnZhbGlkQ29udHJvbFwiIFtjb250cm9sXT1cImlubmVyQ29udHJvbFwiIC8+XHJcbjwhLS0gI2VuZHJlZ2lvbiBNRU5TQUdFTSBERSBFUlJPIERFIFZBTElEQcOHw4NPIC0tPlxyXG4iXX0=
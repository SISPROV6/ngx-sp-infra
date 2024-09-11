import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => [a0];
function ConfirmModalComponent_span_6_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " este ");
    i0.ɵɵelementEnd();
} }
function ConfirmModalComponent_span_6_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " estes ");
    i0.ɵɵelementEnd();
} }
function ConfirmModalComponent_span_6_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " esta ");
    i0.ɵɵelementEnd();
} }
function ConfirmModalComponent_span_6_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " estas ");
    i0.ɵɵelementEnd();
} }
function ConfirmModalComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 12);
    i0.ɵɵtemplate(3, ConfirmModalComponent_span_6_span_3_Template, 2, 0, "span", 13)(4, ConfirmModalComponent_span_6_span_4_Template, 2, 0, "span", 13)(5, ConfirmModalComponent_span_6_span_5_Template, 2, 0, "span", 13)(6, ConfirmModalComponent_span_6_span_6_Template, 2, 0, "span", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Tem certeza que voc\u00EA quer ", ctx_r1.firstLetterIsLowercase(ctx_r1.modalType), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitch", ctx_r1.genreAndPluralitySubject);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "masc singular");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "masc plural");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "fem singular");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "fem plural");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.firstLetterIsLowercase(ctx_r1.modalSubject), "? ");
} }
function ConfirmModalComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.customMessage, " ");
} }
function ConfirmModalComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtext(1, " (esta a\u00E7\u00E3o \u00E9 irrevers\u00EDvel) ");
    i0.ɵɵelementEnd();
} }
function ConfirmModalComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function ConfirmModalComponent_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.showSpinner = true; return i0.ɵɵresetView(ctx_r1.closeModal(true)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.customButton === "" ? ctx_r1.modalType : ctx_r1.customButton, " ");
} }
function ConfirmModalComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵelement(1, "span", 17);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.customButtonLoading === "" ? i0.ɵɵpureFunction1(3, _c0, ctx_r1.modalType == "Excluir" ? "Excluindo..." : i0.ɵɵpureFunction1(1, _c0, ctx_r1.modalType == "Ativar" ? "Ativando..." : "Inativando...")) : ctx_r1.customButtonLoading, " ");
} }
export class ConfirmModalComponent {
    constructor() {
        // #region ==========> PROPERTIES <==========
        // #region PRIVATE
        this._closingModal = new EventEmitter();
        this.genreAndPluralitySubject = 'masc singular';
        // Estas variáveis abaixo servem para deixar o mais genérico possível o modal de confirmalçao
        this.customMessage = '';
        this.customTitle = '';
        this.customButton = '';
        this.customButtonLoading = '';
        this.importantMessage = false;
        this.showSpinner = false;
    }
    // #endregion PUBLIC
    // #endregion ==========> PROPERTIES <==========
    // #region ==========> UTILITIES <==========
    /**
     * Este método recebe uma palavra (podendo ser uma palavra composta), vai
     * separá-la em outras palavras caso ela seja uma palavra composta, irá percorrer
     * as palavras separadas, colocando a inicial de cada palavra em maiúsculo, e
     * depois vai uní-las em uma nova palavra, que terá todas as primeiras letras em
     * maiúsculo para mostrar no título.
     * @param fateWord Palavra (podendo ser ou não palavra composta) que
     * será alterada para ter suas iniciais maiúsculas.
     * @returns Palavra com iniciais maiúscula.
     */
    firstLetterIsLowercase(fateWord) {
        const fateWordSplit = fateWord.split(" ");
        for (let i = 0; i < fateWordSplit.length; i++) {
            fateWordSplit[i] = fateWordSplit[i][0].toLowerCase() + fateWordSplit[i].substring(1);
        }
        return fateWordSplit.join(" ");
    }
    // #endregion ==========> UTILITIES <==========
    // #region ==========> MODALS <==========
    /**
     * Função com o objetivo de mandar um evento para o componente pai para que
     * ele feche o modal.
     */
    closeModal(isExecuteAction = false) {
        this._closingModal.emit(isExecuteAction);
    }
    static { this.ɵfac = function ConfirmModalComponent_Factory(t) { return new (t || ConfirmModalComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConfirmModalComponent, selectors: [["app-confirm-modal"]], inputs: { modalSubject: "modalSubject", modalType: "modalType", genreAndPluralitySubject: "genreAndPluralitySubject", customMessage: "customMessage", customTitle: "customTitle", customButton: "customButton", customButtonLoading: "customButtonLoading", importantMessage: "importantMessage" }, outputs: { _closingModal: "_closingModal" }, decls: 16, vars: 10, consts: [["showCustomMessage", ""], ["loadingButton", ""], [1, "modal-header", "modal-style", "modal-dialog-centered"], [1, "modal-title", "pull-left"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-message"], [4, "ngIf", "ngIfElse"], ["class", "text-danger fw-bold", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", "modal-button", 3, "click"], ["type", "button", "class", "btn btn-primary modal-button", 3, "click", 4, "ngIf", "ngIfElse"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "text-danger", "fw-bold"], ["type", "button", 1, "btn", "btn-primary", "modal-button", 3, "click"], ["type", "button", "disabled", "", 1, "btn", "btn-primary", "modal-button"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function ConfirmModalComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "h4", 3);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 4);
            i0.ɵɵlistener("click", function ConfirmModalComponent_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.closeModal()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 5)(5, "div", 6);
            i0.ɵɵtemplate(6, ConfirmModalComponent_span_6_Template, 8, 7, "span", 7)(7, ConfirmModalComponent_ng_template_7_Template, 2, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(9, ConfirmModalComponent_span_9_Template, 2, 0, "span", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 9)(11, "button", 10);
            i0.ɵɵlistener("click", function ConfirmModalComponent_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.closeModal()); });
            i0.ɵɵtext(12, " Cancelar ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(13, ConfirmModalComponent_button_13_Template, 2, 1, "button", 11)(14, ConfirmModalComponent_ng_template_14_Template, 4, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const showCustomMessage_r4 = i0.ɵɵreference(8);
            const loadingButton_r5 = i0.ɵɵreference(15);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.customTitle === "" ? i0.ɵɵpureFunction1(8, _c0, ctx.modalType + " " + ctx.modalSubject) : ctx.customTitle, " ");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("text-danger", ctx.importantMessage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customMessage === "")("ngIfElse", showCustomMessage_r4);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.modalType == "Excluir");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.showSpinner)("ngIfElse", loadingButton_r5);
        } }, dependencies: [i1.NgIf, i1.NgSwitch, i1.NgSwitchCase] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmModalComponent, [{
        type: Component,
        args: [{ selector: 'app-confirm-modal', template: "<div class=\"modal-header modal-style modal-dialog-centered\">\n  <h4 class=\"modal-title pull-left\"> {{ customTitle === '' ? [modalType + ' ' + modalSubject] : customTitle }} </h4>\n  <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"\n    (click)=\"closeModal()\"></button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"modal-message\" [class.text-danger.fw-bold]=\"importantMessage\">\n    <span *ngIf=\"customMessage === ''; else showCustomMessage\"> Tem certeza que voc\u00EA quer {{ firstLetterIsLowercase(modalType) }}\n      <span [ngSwitch]=\"genreAndPluralitySubject\">\n        <span *ngSwitchCase=\"'masc singular'\"> este </span>\n        <span *ngSwitchCase=\"'masc plural'\"> estes </span>\n        <span *ngSwitchCase=\"'fem singular'\"> esta </span>\n        <span *ngSwitchCase=\"'fem plural'\"> estas </span>\n      </span>\n      {{ firstLetterIsLowercase(modalSubject) }}?\n    </span>\n\n    <ng-template #showCustomMessage>\n      <span> {{ customMessage }} </span>\n    </ng-template>\n\n    <span *ngIf=\"modalType == 'Excluir'\" class=\"text-danger fw-bold\"> (esta a\u00E7\u00E3o \u00E9 irrevers\u00EDvel) </span>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-primary modal-button\"\n    (click)=\"closeModal()\"> Cancelar </button>\n\n  <button *ngIf=\"!showSpinner; else loadingButton\" type=\"button\" class=\"btn btn-primary modal-button\"\n    (click)=\"showSpinner = true; closeModal(true)\"> {{ customButton === '' ? modalType : customButton }} </button>\n\n  <ng-template #loadingButton>\n    <button class=\"btn btn-primary modal-button\" type=\"button\" disabled>\n      <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n      <span> {{ customButtonLoading === '' ? [modalType == 'Excluir' ? 'Excluindo...' : [modalType == 'Ativar' ? 'Ativando...' : 'Inativando...']] : customButtonLoading }} </span>\n    </button>\n  </ng-template>\n\n</div>\n" }]
    }], () => [], { _closingModal: [{
            type: Output
        }], modalSubject: [{
            type: Input
        }], modalType: [{
            type: Input
        }], genreAndPluralitySubject: [{
            type: Input
        }], customMessage: [{
            type: Input
        }], customTitle: [{
            type: Input
        }], customButton: [{
            type: Input
        }], customButtonLoading: [{
            type: Input
        }], importantMessage: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ConfirmModalComponent, { className: "ConfirmModalComponent", filePath: "lib\\message\\confirm-modal\\confirm-modal.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi9tZXNzYWdlL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi9tZXNzYWdlL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztJQ1N2RSw0QkFBc0M7SUFBQyxzQkFBSztJQUFBLGlCQUFPOzs7SUFDbkQsNEJBQW9DO0lBQUMsdUJBQU07SUFBQSxpQkFBTzs7O0lBQ2xELDRCQUFxQztJQUFDLHNCQUFLO0lBQUEsaUJBQU87OztJQUNsRCw0QkFBbUM7SUFBQyx1QkFBTTtJQUFBLGlCQUFPOzs7SUFMckQsNEJBQTJEO0lBQUMsWUFDMUQ7SUFBQSxnQ0FBNEM7SUFJMUMsQUFEQSxBQURBLEFBREEsZ0ZBQXNDLG1FQUNGLG1FQUNDLG1FQUNGO0lBQ3JDLGlCQUFPO0lBQ1AsWUFDRjtJQUFBLGlCQUFPOzs7SUFScUQsY0FDMUQ7SUFEMEQsK0dBQzFEO0lBQU0sY0FBcUM7SUFBckMsMERBQXFDO0lBQ2xDLGNBQTZCO0lBQTdCLDhDQUE2QjtJQUM3QixjQUEyQjtJQUEzQiw0Q0FBMkI7SUFDM0IsY0FBNEI7SUFBNUIsNkNBQTRCO0lBQzVCLGNBQTBCO0lBQTFCLDJDQUEwQjtJQUVuQyxjQUNGO0lBREUsb0ZBQ0Y7OztJQUdFLDRCQUFNO0lBQUMsWUFBb0I7SUFBQSxpQkFBTzs7O0lBQTNCLGNBQW9CO0lBQXBCLHFEQUFvQjs7O0lBRzdCLGdDQUFpRTtJQUFDLGdFQUEyQjtJ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LEtBQUs7O2tGQXZCSyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jb25maXJtLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm0tbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb25maXJtLW1vZGFsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybU1vZGFsQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbiAgLy8gI3JlZ2lvbiA9PT09PT09PT09PiBQUk9QRVJUSUVTIDw9PT09PT09PT09XG5cbiAgLy8gI3JlZ2lvbiBQUklWQVRFXG4gIEBPdXRwdXQoKSBwdWJsaWMgX2Nsb3NpbmdNb2RhbDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAvLyAjZW5kcmVnaW9uIFBSSVZBVEVcblxuICAvLyAjcmVnaW9uIFBVQkxJQ1xuICBASW5wdXQoKSBwdWJsaWMgbW9kYWxTdWJqZWN0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBtb2RhbFR5cGU6ICdFeGNsdWlyJyB8ICdJbmF0aXZhcicgfCAnQXRpdmFyJztcbiAgQElucHV0KCkgcHVibGljIGdlbnJlQW5kUGx1cmFsaXR5U3ViamVjdDogJ21hc2Mgc2luZ3VsYXInIHwgJ21hc2MgcGx1cmFsJyB8XG4gICAgJ2ZlbSBzaW5ndWxhcicgfCAnZmVtIHBsdXJhbCcgPSAnbWFzYyBzaW5ndWxhcic7XG5cbiAgLy8gRXN0YXMgdmFyacOhdmVpcyBhYmFpeG8gc2VydmVtIHBhcmEgZGVpeGFyIG8gbWFpcyBnZW7DqXJpY28gcG9zc8OtdmVsIG8gbW9kYWwgZGUgY29uZmlybWFsw6dhb1xuICBASW5wdXQoKSBwdWJsaWMgY3VzdG9tTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHB1YmxpYyBjdXN0b21UaXRsZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHB1YmxpYyBjdXN0b21CdXR0b246IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBwdWJsaWMgY3VzdG9tQnV0dG9uTG9hZGluZzogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KCkgcHVibGljIGltcG9ydGFudE1lc3NhZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgc2hvd1NwaW5uZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gI2VuZHJlZ2lvbiBQVUJMSUNcblxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IFBST1BFUlRJRVMgPD09PT09PT09PT1cblxuXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gVVRJTElUSUVTIDw9PT09PT09PT09XG4gIC8qKlxuICAgKiBFc3RlIG3DqXRvZG8gcmVjZWJlIHVtYSBwYWxhdnJhIChwb2RlbmRvIHNlciB1bWEgcGFsYXZyYSBjb21wb3N0YSksIHZhaVxuICAgKiBzZXBhcsOhLWxhIGVtIG91dHJhcyBwYWxhdnJhcyBjYXNvIGVsYSBzZWphIHVtYSBwYWxhdnJhIGNvbXBvc3RhLCBpcsOhIHBlcmNvcnJlclxuICAgKiBhcyBwYWxhdnJhcyBzZXBhcmFkYXMsIGNvbG9jYW5kbyBhIGluaWNpYWwgZGUgY2FkYSBwYWxhdnJhIGVtIG1hacO6c2N1bG8sIGVcbiAgICogZGVwb2lzIHZhaSB1bsOtLWxhcyBlbSB1bWEgbm92YSBwYWxhdnJhLCBxdWUgdGVyw6EgdG9kYXMgYXMgcHJpbWVpcmFzIGxldHJhcyBlbVxuICAgKiBtYWnDunNjdWxvIHBhcmEgbW9zdHJhciBubyB0w610dWxvLlxuICAgKiBAcGFyYW0gZmF0ZVdvcmQgUGFsYXZyYSAocG9kZW5kbyBzZXIgb3UgbsOjbyBwYWxhdnJhIGNvbXBvc3RhKSBxdWVcbiAgICogc2Vyw6EgYWx0ZXJhZGEgcGFyYSB0ZXIgc3VhcyBpbmljaWFpcyBtYWnDunNjdWxhcy5cbiAgICogQHJldHVybnMgUGFsYXZyYSBjb20gaW5pY2lhaXMgbWFpw7pzY3VsYS5cbiAgICovXG4gIHB1YmxpYyBmaXJzdExldHRlcklzTG93ZXJjYXNlKGZhdGVXb3JkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGZhdGVXb3JkU3BsaXQ6IHN0cmluZ1tdID0gZmF0ZVdvcmQuc3BsaXQoXCIgXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYXRlV29yZFNwbGl0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBmYXRlV29yZFNwbGl0W2ldID0gZmF0ZVdvcmRTcGxpdFtpXVswXS50b0xvd2VyQ2FzZSgpICsgZmF0ZVdvcmRTcGxpdFtpXS5zdWJzdHJpbmcoMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhdGVXb3JkU3BsaXQuam9pbihcIiBcIik7XG4gIH1cbiAgLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PiBVVElMSVRJRVMgPD09PT09PT09PT1cblxuXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gTU9EQUxTIDw9PT09PT09PT09XG4gIC8qKlxuICAgKiBGdW7Dp8OjbyBjb20gbyBvYmpldGl2byBkZSBtYW5kYXIgdW0gZXZlbnRvIHBhcmEgbyBjb21wb25lbnRlIHBhaSBwYXJhIHF1ZVxuICAgKiBlbGUgZmVjaGUgbyBtb2RhbC5cbiAgICovXG4gIHB1YmxpYyBjbG9zZU1vZGFsKGlzRXhlY3V0ZUFjdGlvbjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5fY2xvc2luZ01vZGFsLmVtaXQoaXNFeGVjdXRlQWN0aW9uKTtcbiAgfVxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IE1PREFMUyA8PT09PT09PT09PVxuXG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXIgbW9kYWwtc3R5bGUgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXCI+XG4gIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlIHB1bGwtbGVmdFwiPiB7eyBjdXN0b21UaXRsZSA9PT0gJycgPyBbbW9kYWxUeXBlICsgJyAnICsgbW9kYWxTdWJqZWN0XSA6IGN1c3RvbVRpdGxlIH19IDwvaDQ+XG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgIChjbGljayk9XCJjbG9zZU1vZGFsKClcIj48L2J1dHRvbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLW1lc3NhZ2VcIiBbY2xhc3MudGV4dC1kYW5nZXIuZnctYm9sZF09XCJpbXBvcnRhbnRNZXNzYWdlXCI+XG4gICAgPHNwYW4gKm5nSWY9XCJjdXN0b21NZXNzYWdlID09PSAnJzsgZWxzZSBzaG93Q3VzdG9tTWVzc2FnZVwiPiBUZW0gY2VydGV6YSBxdWUgdm9jw6ogcXVlciB7eyBmaXJzdExldHRlcklzTG93ZXJjYXNlKG1vZGFsVHlwZSkgfX1cbiAgICAgIDxzcGFuIFtuZ1N3aXRjaF09XCJnZW5yZUFuZFBsdXJhbGl0eVN1YmplY3RcIj5cbiAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidtYXNjIHNpbmd1bGFyJ1wiPiBlc3RlIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidtYXNjIHBsdXJhbCdcIj4gZXN0ZXMgPC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ2ZlbSBzaW5ndWxhcidcIj4gZXN0YSA8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInZmVtIHBsdXJhbCdcIj4gZXN0YXMgPC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgICAge3sgZmlyc3RMZXR0ZXJJc0xvd2VyY2FzZShtb2RhbFN1YmplY3QpIH19P1xuICAgIDwvc3Bhbj5cblxuICAgIDxuZy10ZW1wbGF0ZSAjc2hvd0N1c3RvbU1lc3NhZ2U+XG4gICAgICA8c3Bhbj4ge3sgY3VzdG9tTWVzc2FnZSB9fSA8L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxzcGFuICpuZ0lmPVwibW9kYWxUeXBlID09ICdFeGNsdWlyJ1wiIGNsYXNzPVwidGV4dC1kYW5nZXIgZnctYm9sZFwiPiAoZXN0YSBhw6fDo28gw6kgaXJyZXZlcnPDrXZlbCkgPC9zcGFuPlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG1vZGFsLWJ1dHRvblwiXG4gICAgKGNsaWNrKT1cImNsb3NlTW9kYWwoKVwiPiBDYW5jZWxhciA8L2J1dHRvbj5cblxuICA8YnV0dG9uICpuZ0lmPVwiIXNob3dTcGlubmVyOyBlbHNlIGxvYWRpbmdCdXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbW9kYWwtYnV0dG9uXCJcbiAgICAoY2xpY2spPVwic2hvd1NwaW5uZXIgPSB0cnVlOyBjbG9zZU1vZGFsKHRydWUpXCI+IHt7IGN1c3RvbUJ1dHRvbiA9PT0gJycgPyBtb2RhbFR5cGUgOiBjdXN0b21CdXR0b24gfX0gPC9idXR0b24+XG5cbiAgPG5nLXRlbXBsYXRlICNsb2FkaW5nQnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbW9kYWwtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbVwiIHJvbGU9XCJzdGF0dXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICA8c3Bhbj4ge3sgY3VzdG9tQnV0dG9uTG9hZGluZyA9PT0gJycgPyBbbW9kYWxUeXBlID09ICdFeGNsdWlyJyA/ICdFeGNsdWluZG8uLi4nIDogW21vZGFsVHlwZSA9PSAnQXRpdmFyJyA/ICdBdGl2YW5kby4uLicgOiAnSW5hdGl2YW5kby4uLiddXSA6IGN1c3RvbUJ1dHRvbkxvYWRpbmcgfX0gPC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICA8L25nLXRlbXBsYXRlPlxuXG48L2Rpdj5cbiJdfQ==
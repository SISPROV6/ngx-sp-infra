import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ConfirmModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ConfirmModalComponent, selector: "app-confirm-modal", inputs: { modalSubject: "modalSubject", modalType: "modalType", genreAndPluralitySubject: "genreAndPluralitySubject", customMessage: "customMessage", customTitle: "customTitle", customButton: "customButton", customButtonLoading: "customButtonLoading", importantMessage: "importantMessage" }, outputs: { _closingModal: "_closingModal" }, ngImport: i0, template: "<div class=\"modal-header modal-style modal-dialog-centered\">\r\n  <h4 class=\"modal-title pull-left\"> {{ customTitle === '' ? [modalType + ' ' + modalSubject] : customTitle }} </h4>\r\n  <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"\r\n    (click)=\"closeModal()\"></button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"modal-message\" [class.text-danger.fw-bold]=\"importantMessage\">\r\n    <span *ngIf=\"customMessage === ''; else showCustomMessage\"> Tem certeza que voc\u00EA quer {{ firstLetterIsLowercase(modalType) }}\r\n      <span [ngSwitch]=\"genreAndPluralitySubject\">\r\n        <span *ngSwitchCase=\"'masc singular'\"> este </span>\r\n        <span *ngSwitchCase=\"'masc plural'\"> estes </span>\r\n        <span *ngSwitchCase=\"'fem singular'\"> esta </span>\r\n        <span *ngSwitchCase=\"'fem plural'\"> estas </span>\r\n      </span>\r\n      {{ firstLetterIsLowercase(modalSubject) }}?\r\n    </span>\r\n\r\n    <ng-template #showCustomMessage>\r\n      <span> {{ customMessage }} </span>\r\n    </ng-template>\r\n\r\n    <span *ngIf=\"modalType == 'Excluir'\" class=\"text-danger fw-bold\"> (esta a\u00E7\u00E3o \u00E9 irrevers\u00EDvel) </span>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-primary modal-button\"\r\n    (click)=\"closeModal()\"> Cancelar </button>\r\n\r\n  <button *ngIf=\"!showSpinner; else loadingButton\" type=\"button\" class=\"btn btn-primary modal-button\"\r\n    (click)=\"showSpinner = true; closeModal(true)\"> {{ customButton === '' ? modalType : customButton }} </button>\r\n\r\n  <ng-template #loadingButton>\r\n    <button class=\"btn btn-primary modal-button\" type=\"button\" disabled>\r\n      <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n      <span> {{ customButtonLoading === '' ? [modalType == 'Excluir' ? 'Excluindo...' : [modalType == 'Ativar' ? 'Ativando...' : 'Inativando...']] : customButtonLoading }} </span>\r\n    </button>\r\n  </ng-template>\r\n\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ConfirmModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-confirm-modal', template: "<div class=\"modal-header modal-style modal-dialog-centered\">\r\n  <h4 class=\"modal-title pull-left\"> {{ customTitle === '' ? [modalType + ' ' + modalSubject] : customTitle }} </h4>\r\n  <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"\r\n    (click)=\"closeModal()\"></button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"modal-message\" [class.text-danger.fw-bold]=\"importantMessage\">\r\n    <span *ngIf=\"customMessage === ''; else showCustomMessage\"> Tem certeza que voc\u00EA quer {{ firstLetterIsLowercase(modalType) }}\r\n      <span [ngSwitch]=\"genreAndPluralitySubject\">\r\n        <span *ngSwitchCase=\"'masc singular'\"> este </span>\r\n        <span *ngSwitchCase=\"'masc plural'\"> estes </span>\r\n        <span *ngSwitchCase=\"'fem singular'\"> esta </span>\r\n        <span *ngSwitchCase=\"'fem plural'\"> estas </span>\r\n      </span>\r\n      {{ firstLetterIsLowercase(modalSubject) }}?\r\n    </span>\r\n\r\n    <ng-template #showCustomMessage>\r\n      <span> {{ customMessage }} </span>\r\n    </ng-template>\r\n\r\n    <span *ngIf=\"modalType == 'Excluir'\" class=\"text-danger fw-bold\"> (esta a\u00E7\u00E3o \u00E9 irrevers\u00EDvel) </span>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-primary modal-button\"\r\n    (click)=\"closeModal()\"> Cancelar </button>\r\n\r\n  <button *ngIf=\"!showSpinner; else loadingButton\" type=\"button\" class=\"btn btn-primary modal-button\"\r\n    (click)=\"showSpinner = true; closeModal(true)\"> {{ customButton === '' ? modalType : customButton }} </button>\r\n\r\n  <ng-template #loadingButton>\r\n    <button class=\"btn btn-primary modal-button\" type=\"button\" disabled>\r\n      <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n      <span> {{ customButtonLoading === '' ? [modalType == 'Excluir' ? 'Excluindo...' : [modalType == 'Ativar' ? 'Ativando...' : 'Inativando...']] : customButtonLoading }} </span>\r\n    </button>\r\n  </ng-template>\r\n\r\n</div>\r\n" }]
        }], ctorParameters: () => [], propDecorators: { _closingModal: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi9tZXNzYWdlL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi9tZXNzYWdlL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPL0UsTUFBTSxPQUFPLHFCQUFxQjtJQUVoQztRQUdBLDZDQUE2QztRQUU3QyxrQkFBa0I7UUFDRCxrQkFBYSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBTXBFLDZCQUF3QixHQUNOLGVBQWUsQ0FBQztRQUVsRCw2RkFBNkY7UUFDN0Usa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsd0JBQW1CLEdBQVcsRUFBRSxDQUFDO1FBRWpDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUUzQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztJQXZCcEIsQ0FBQztJQXdCakIsb0JBQW9CO0lBRXBCLGdEQUFnRDtJQUdoRCw0Q0FBNEM7SUFDNUM7Ozs7Ozs7OztPQVNHO0lBQ0ksc0JBQXNCLENBQUMsUUFBZ0I7UUFDNUMsTUFBTSxhQUFhLEdBQWEsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzlDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RixDQUFDO1FBRUQsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCwrQ0FBK0M7SUFHL0MseUNBQXlDO0lBQ3pDOzs7T0FHRztJQUNJLFVBQVUsQ0FBQyxrQkFBMkIsS0FBSztRQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMzQyxDQUFDOytHQTdEVSxxQkFBcUI7bUdBQXJCLHFCQUFxQiwwWUNQbEMsMmpFQXVDQTs7NEZEaENhLHFCQUFxQjtrQkFMakMsU0FBUzsrQkFDRSxtQkFBbUI7d0RBWVosYUFBYTtzQkFBN0IsTUFBTTtnQkFJUyxZQUFZO3NCQUEzQixLQUFLO2dCQUNVLFNBQVM7c0JBQXhCLEtBQUs7Z0JBQ1Usd0JBQXdCO3NCQUF2QyxLQUFLO2dCQUlVLGFBQWE7c0JBQTVCLEtBQUs7Z0JBQ1UsV0FBVztzQkFBMUIsS0FBSztnQkFDVSxZQUFZO3NCQUEzQixLQUFLO2dCQUNVLG1CQUFtQjtzQkFBbEMsS0FBSztnQkFFVSxnQkFBZ0I7c0JBQS9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jb25maXJtLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlybS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybS1tb2RhbC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtTW9kYWxDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHJcbiAgLy8gI3JlZ2lvbiA9PT09PT09PT09PiBQUk9QRVJUSUVTIDw9PT09PT09PT09XHJcblxyXG4gIC8vICNyZWdpb24gUFJJVkFURVxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgX2Nsb3NpbmdNb2RhbDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIC8vICNlbmRyZWdpb24gUFJJVkFURVxyXG5cclxuICAvLyAjcmVnaW9uIFBVQkxJQ1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtb2RhbFN1YmplY3Q6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgbW9kYWxUeXBlOiAnRXhjbHVpcicgfCAnSW5hdGl2YXInIHwgJ0F0aXZhcic7XHJcbiAgQElucHV0KCkgcHVibGljIGdlbnJlQW5kUGx1cmFsaXR5U3ViamVjdDogJ21hc2Mgc2luZ3VsYXInIHwgJ21hc2MgcGx1cmFsJyB8XHJcbiAgICAnZmVtIHNpbmd1bGFyJyB8ICdmZW0gcGx1cmFsJyA9ICdtYXNjIHNpbmd1bGFyJztcclxuXHJcbiAgLy8gRXN0YXMgdmFyacOhdmVpcyBhYmFpeG8gc2VydmVtIHBhcmEgZGVpeGFyIG8gbWFpcyBnZW7DqXJpY28gcG9zc8OtdmVsIG8gbW9kYWwgZGUgY29uZmlybWFsw6dhb1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjdXN0b21NZXNzYWdlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBwdWJsaWMgY3VzdG9tVGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjdXN0b21CdXR0b246IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjdXN0b21CdXR0b25Mb2FkaW5nOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGltcG9ydGFudE1lc3NhZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHNob3dTcGlubmVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gI2VuZHJlZ2lvbiBQVUJMSUNcclxuXHJcbiAgLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PiBQUk9QRVJUSUVTIDw9PT09PT09PT09XHJcblxyXG5cclxuICAvLyAjcmVnaW9uID09PT09PT09PT0+IFVUSUxJVElFUyA8PT09PT09PT09PVxyXG4gIC8qKlxyXG4gICAqIEVzdGUgbcOpdG9kbyByZWNlYmUgdW1hIHBhbGF2cmEgKHBvZGVuZG8gc2VyIHVtYSBwYWxhdnJhIGNvbXBvc3RhKSwgdmFpXHJcbiAgICogc2VwYXLDoS1sYSBlbSBvdXRyYXMgcGFsYXZyYXMgY2FzbyBlbGEgc2VqYSB1bWEgcGFsYXZyYSBjb21wb3N0YSwgaXLDoSBwZXJjb3JyZXJcclxuICAgKiBhcyBwYWxhdnJhcyBzZXBhcmFkYXMsIGNvbG9jYW5kbyBhIGluaWNpYWwgZGUgY2FkYSBwYWxhdnJhIGVtIG1hacO6c2N1bG8sIGVcclxuICAgKiBkZXBvaXMgdmFpIHVuw60tbGFzIGVtIHVtYSBub3ZhIHBhbGF2cmEsIHF1ZSB0ZXLDoSB0b2RhcyBhcyBwcmltZWlyYXMgbGV0cmFzIGVtXHJcbiAgICogbWFpw7pzY3VsbyBwYXJhIG1vc3RyYXIgbm8gdMOtdHVsby5cclxuICAgKiBAcGFyYW0gZmF0ZVdvcmQgUGFsYXZyYSAocG9kZW5kbyBzZXIgb3UgbsOjbyBwYWxhdnJhIGNvbXBvc3RhKSBxdWVcclxuICAgKiBzZXLDoSBhbHRlcmFkYSBwYXJhIHRlciBzdWFzIGluaWNpYWlzIG1hacO6c2N1bGFzLlxyXG4gICAqIEByZXR1cm5zIFBhbGF2cmEgY29tIGluaWNpYWlzIG1hacO6c2N1bGEuXHJcbiAgICovXHJcbiAgcHVibGljIGZpcnN0TGV0dGVySXNMb3dlcmNhc2UoZmF0ZVdvcmQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBmYXRlV29yZFNwbGl0OiBzdHJpbmdbXSA9IGZhdGVXb3JkLnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZhdGVXb3JkU3BsaXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZmF0ZVdvcmRTcGxpdFtpXSA9IGZhdGVXb3JkU3BsaXRbaV1bMF0udG9Mb3dlckNhc2UoKSArIGZhdGVXb3JkU3BsaXRbaV0uc3Vic3RyaW5nKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYXRlV29yZFNwbGl0LmpvaW4oXCIgXCIpO1xyXG4gIH1cclxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IFVUSUxJVElFUyA8PT09PT09PT09PVxyXG5cclxuXHJcbiAgLy8gI3JlZ2lvbiA9PT09PT09PT09PiBNT0RBTFMgPD09PT09PT09PT1cclxuICAvKipcclxuICAgKiBGdW7Dp8OjbyBjb20gbyBvYmpldGl2byBkZSBtYW5kYXIgdW0gZXZlbnRvIHBhcmEgbyBjb21wb25lbnRlIHBhaSBwYXJhIHF1ZVxyXG4gICAqIGVsZSBmZWNoZSBvIG1vZGFsLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjbG9zZU1vZGFsKGlzRXhlY3V0ZUFjdGlvbjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jbG9zaW5nTW9kYWwuZW1pdChpc0V4ZWN1dGVBY3Rpb24pO1xyXG4gIH1cclxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IE1PREFMUyA8PT09PT09PT09PVxyXG5cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlciBtb2RhbC1zdHlsZSBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIj5cclxuICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZSBwdWxsLWxlZnRcIj4ge3sgY3VzdG9tVGl0bGUgPT09ICcnID8gW21vZGFsVHlwZSArICcgJyArIG1vZGFsU3ViamVjdF0gOiBjdXN0b21UaXRsZSB9fSA8L2g0PlxyXG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgKGNsaWNrKT1cImNsb3NlTW9kYWwoKVwiPjwvYnV0dG9uPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICA8ZGl2IGNsYXNzPVwibW9kYWwtbWVzc2FnZVwiIFtjbGFzcy50ZXh0LWRhbmdlci5mdy1ib2xkXT1cImltcG9ydGFudE1lc3NhZ2VcIj5cclxuICAgIDxzcGFuICpuZ0lmPVwiY3VzdG9tTWVzc2FnZSA9PT0gJyc7IGVsc2Ugc2hvd0N1c3RvbU1lc3NhZ2VcIj4gVGVtIGNlcnRlemEgcXVlIHZvY8OqIHF1ZXIge3sgZmlyc3RMZXR0ZXJJc0xvd2VyY2FzZShtb2RhbFR5cGUpIH19XHJcbiAgICAgIDxzcGFuIFtuZ1N3aXRjaF09XCJnZW5yZUFuZFBsdXJhbGl0eVN1YmplY3RcIj5cclxuICAgICAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ21hc2Mgc2luZ3VsYXInXCI+IGVzdGUgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInbWFzYyBwbHVyYWwnXCI+IGVzdGVzIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ2ZlbSBzaW5ndWxhcidcIj4gZXN0YSA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidmZW0gcGx1cmFsJ1wiPiBlc3RhcyA8L3NwYW4+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAge3sgZmlyc3RMZXR0ZXJJc0xvd2VyY2FzZShtb2RhbFN1YmplY3QpIH19P1xyXG4gICAgPC9zcGFuPlxyXG5cclxuICAgIDxuZy10ZW1wbGF0ZSAjc2hvd0N1c3RvbU1lc3NhZ2U+XHJcbiAgICAgIDxzcGFuPiB7eyBjdXN0b21NZXNzYWdlIH19IDwvc3Bhbj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPHNwYW4gKm5nSWY9XCJtb2RhbFR5cGUgPT0gJ0V4Y2x1aXInXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlciBmdy1ib2xkXCI+IChlc3RhIGHDp8OjbyDDqSBpcnJldmVyc8OtdmVsKSA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtb2RhbC1idXR0b25cIlxyXG4gICAgKGNsaWNrKT1cImNsb3NlTW9kYWwoKVwiPiBDYW5jZWxhciA8L2J1dHRvbj5cclxuXHJcbiAgPGJ1dHRvbiAqbmdJZj1cIiFzaG93U3Bpbm5lcjsgZWxzZSBsb2FkaW5nQnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG1vZGFsLWJ1dHRvblwiXHJcbiAgICAoY2xpY2spPVwic2hvd1NwaW5uZXIgPSB0cnVlOyBjbG9zZU1vZGFsKHRydWUpXCI+IHt7IGN1c3RvbUJ1dHRvbiA9PT0gJycgPyBtb2RhbFR5cGUgOiBjdXN0b21CdXR0b24gfX0gPC9idXR0b24+XHJcblxyXG4gIDxuZy10ZW1wbGF0ZSAjbG9hZGluZ0J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbW9kYWwtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtXCIgcm9sZT1cInN0YXR1c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4+IHt7IGN1c3RvbUJ1dHRvbkxvYWRpbmcgPT09ICcnID8gW21vZGFsVHlwZSA9PSAnRXhjbHVpcicgPyAnRXhjbHVpbmRvLi4uJyA6IFttb2RhbFR5cGUgPT0gJ0F0aXZhcicgPyAnQXRpdmFuZG8uLi4nIDogJ0luYXRpdmFuZG8uLi4nXV0gOiBjdXN0b21CdXR0b25Mb2FkaW5nIH19IDwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcblxyXG48L2Rpdj5cclxuIl19
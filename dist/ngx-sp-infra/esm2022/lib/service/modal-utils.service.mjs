import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
export class ModalUtilsService {
    constructor(_bsModalService, _bsModalref) {
        this._bsModalService = _bsModalService;
        this._bsModalref = _bsModalref;
    }
    /**
     * Método simples com o objetivo de abrir os modais no centro da tela.
     * @param template Template HTML do modal que será aberto.
     * @param modalID ID do modal que será aberto, para que possa ser referenciado depois.
     * @param customClass Classes customizadas para o modal, valor default é "modal-dialog-centered"
    */
    openModal(template, modalID, customClass = "modal-dialog-centered") {
        this._bsModalService.show(template, {
            id: modalID,
            class: customClass,
            ignoreBackdropClick: false,
            keyboard: false
        });
    }
    /**
     * Método simples com o objetivo de abrir os modais no centro da tela.
     * @param template Template HTML do modal que será aberto.
     * @param modalID ID do modal que será aberto, para que possa ser referenciado depois.
     * @param {ModalOptions} options - Estrutura de opções informadas para configurar o modal mais aprofundadamente
    */
    openModalCustom(template, modalID, options = { id: modalID, class: "modal-dialog-centered", ignoreBackdropClick: false, keyboard: false }) {
        this._bsModalService.show(template, options);
    }
    openInitialStateModal(component, initialState, classes = "modal-dialog-centered") {
        this._bsModalref = this._bsModalService.show(component, {
            initialState: initialState,
            class: classes
        });
    }
    /**
     * Método para fechar um modal que estiver aberto na tela
     * @param modalID ID do modal que será fechado, é necessário um ID para fechar o modal correto.
    */
    closeModal(modalID) {
        this._bsModalService.hide(modalID);
    }
    static { this.ɵfac = function ModalUtilsService_Factory(t) { return new (t || ModalUtilsService)(i0.ɵɵinject(i1.BsModalService), i0.ɵɵinject(i1.BsModalRef)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModalUtilsService, factory: ModalUtilsService.ɵfac, providedIn: 'any' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalUtilsService, [{
        type: Injectable,
        args: [{
                providedIn: 'any'
            }]
    }], () => [{ type: i1.BsModalService }, { type: i1.BsModalRef }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3NlcnZpY2UvbW9kYWwtdXRpbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDOzs7QUFNbkUsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUFxQixlQUErQixFQUFVLFdBQXVCO1FBQWhFLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0lBQUssQ0FBQztJQUUzRjs7Ozs7TUFLRTtJQUNJLFNBQVMsQ0FBQyxRQUEwQixFQUFFLE9BQWUsRUFBRSxjQUFzQix1QkFBdUI7UUFDekcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xDLEVBQUUsRUFBRSxPQUFPO1lBQ1gsS0FBSyxFQUFFLFdBQVc7WUFDbEIsbUJBQW1CLEVBQUUsS0FBSztZQUMxQixRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUE7Ozs7O01BS0U7SUFDSSxlQUFlLENBQUMsUUFBMEIsRUFBRSxPQUFlLEVBQUUsVUFBd0IsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtRQUN0TCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUdNLHFCQUFxQixDQUFDLFNBQW9DLEVBQUUsWUFBa0IsRUFBRSxVQUFrQix1QkFBdUI7UUFDL0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdEQsWUFBWSxFQUFFLFlBQVk7WUFDMUIsS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDLENBQUM7SUFDSixDQUFDO0lBR0E7OztNQUdFO0lBQ0ssVUFBVSxDQUFDLE9BQWU7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztrRkEzQ1UsaUJBQWlCO3VFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZoQixLQUFLOztpRkFFTixpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxLQUFLO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UsIE1vZGFsT3B0aW9ucyB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdhbnknXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsVXRpbHNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgX2JzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSwgcHJpdmF0ZSBfYnNNb2RhbHJlZjogQnNNb2RhbFJlZiApIHsgfVxuXG4gIC8qKlxuICAgKiBNw6l0b2RvIHNpbXBsZXMgY29tIG8gb2JqZXRpdm8gZGUgYWJyaXIgb3MgbW9kYWlzIG5vIGNlbnRybyBkYSB0ZWxhLlxuICAgKiBAcGFyYW0gdGVtcGxhdGUgVGVtcGxhdGUgSFRNTCBkbyBtb2RhbCBxdWUgc2Vyw6EgYWJlcnRvLlxuICAgKiBAcGFyYW0gbW9kYWxJRCBJRCBkbyBtb2RhbCBxdWUgc2Vyw6EgYWJlcnRvLCBwYXJhIHF1ZSBwb3NzYSBzZXIgcmVmZXJlbmNpYWRvIGRlcG9pcy5cbiAgICogQHBhcmFtIGN1c3RvbUNsYXNzIENsYXNzZXMgY3VzdG9taXphZGFzIHBhcmEgbyBtb2RhbCwgdmFsb3IgZGVmYXVsdCDDqSBcIm1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiXG4gICovXG4gcHVibGljIG9wZW5Nb2RhbCh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgbW9kYWxJRDogbnVtYmVyLCBjdXN0b21DbGFzczogc3RyaW5nID0gXCJtb2RhbC1kaWFsb2ctY2VudGVyZWRcIik6IHZvaWQge1xuICAgdGhpcy5fYnNNb2RhbFNlcnZpY2Uuc2hvdyh0ZW1wbGF0ZSwge1xuICAgICBpZDogbW9kYWxJRCxcbiAgICAgY2xhc3M6IGN1c3RvbUNsYXNzLFxuICAgICBpZ25vcmVCYWNrZHJvcENsaWNrOiBmYWxzZSxcbiAgICAga2V5Ym9hcmQ6IGZhbHNlXG4gICB9KTtcbiB9XG5cbiAgLyoqXG4gICAqIE3DqXRvZG8gc2ltcGxlcyBjb20gbyBvYmpldGl2byBkZSBhYnJpciBvcyBtb2RhaXMgbm8gY2VudHJvIGRhIHRlbGEuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZSBUZW1wbGF0ZSBIVE1MIGRvIG1vZGFsIHF1ZSBzZXLDoSBhYmVydG8uXG4gICAqIEBwYXJhbSBtb2RhbElEIElEIGRvIG1vZGFsIHF1ZSBzZXLDoSBhYmVydG8sIHBhcmEgcXVlIHBvc3NhIHNlciByZWZlcmVuY2lhZG8gZGVwb2lzLlxuICAgKiBAcGFyYW0ge01vZGFsT3B0aW9uc30gb3B0aW9ucyAtIEVzdHJ1dHVyYSBkZSBvcMOnw7VlcyBpbmZvcm1hZGFzIHBhcmEgY29uZmlndXJhciBvIG1vZGFsIG1haXMgYXByb2Z1bmRhZGFtZW50ZVxuICAqL1xuIHB1YmxpYyBvcGVuTW9kYWxDdXN0b20odGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIG1vZGFsSUQ6IG51bWJlciwgb3B0aW9uczogTW9kYWxPcHRpb25zID0geyBpZDogbW9kYWxJRCwgY2xhc3M6IFwibW9kYWwtZGlhbG9nLWNlbnRlcmVkXCIsIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IGZhbHNlLCBrZXlib2FyZDogZmFsc2UgfSk6IHZvaWQge1xuICAgdGhpcy5fYnNNb2RhbFNlcnZpY2Uuc2hvdyh0ZW1wbGF0ZSwgb3B0aW9ucyk7XG4gfVxuXG5cbiBwdWJsaWMgb3BlbkluaXRpYWxTdGF0ZU1vZGFsKGNvbXBvbmVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiwgaW5pdGlhbFN0YXRlPzogYW55LCBjbGFzc2VzOiBzdHJpbmcgPSBcIm1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiKTogdm9pZCB7XG4gIHRoaXMuX2JzTW9kYWxyZWYgPSB0aGlzLl9ic01vZGFsU2VydmljZS5zaG93KGNvbXBvbmVudCwge1xuICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxuICAgIGNsYXNzOiBjbGFzc2VzXG4gIH0pO1xuIH1cblxuXG4gIC8qKlxuICAgKiBNw6l0b2RvIHBhcmEgZmVjaGFyIHVtIG1vZGFsIHF1ZSBlc3RpdmVyIGFiZXJ0byBuYSB0ZWxhXG4gICAqIEBwYXJhbSBtb2RhbElEIElEIGRvIG1vZGFsIHF1ZSBzZXLDoSBmZWNoYWRvLCDDqSBuZWNlc3PDoXJpbyB1bSBJRCBwYXJhIGZlY2hhciBvIG1vZGFsIGNvcnJldG8uXG4gICovXG4gIHB1YmxpYyBjbG9zZU1vZGFsKG1vZGFsSUQ6IG51bWJlcik6IHZvaWQge1xuICAgICB0aGlzLl9ic01vZGFsU2VydmljZS5oaWRlKG1vZGFsSUQpO1xuICB9XG5cbn1cbiJdfQ==
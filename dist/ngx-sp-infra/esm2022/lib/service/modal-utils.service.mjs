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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ModalUtilsService, deps: [{ token: i1.BsModalService }, { token: i1.BsModalRef }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ModalUtilsService, providedIn: 'any' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ModalUtilsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'any'
                }]
        }], ctorParameters: () => [{ type: i1.BsModalService }, { type: i1.BsModalRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3NlcnZpY2UvbW9kYWwtdXRpbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDOzs7QUFNbkUsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUFxQixlQUErQixFQUFVLFdBQXVCO1FBQWhFLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0lBQUssQ0FBQztJQUUzRjs7Ozs7TUFLRTtJQUNJLFNBQVMsQ0FBQyxRQUEwQixFQUFFLE9BQWUsRUFBRSxjQUFzQix1QkFBdUI7UUFDekcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xDLEVBQUUsRUFBRSxPQUFPO1lBQ1gsS0FBSyxFQUFFLFdBQVc7WUFDbEIsbUJBQW1CLEVBQUUsS0FBSztZQUMxQixRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUE7Ozs7O01BS0U7SUFDSSxlQUFlLENBQUMsUUFBMEIsRUFBRSxPQUFlLEVBQUUsVUFBd0IsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtRQUN0TCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUdNLHFCQUFxQixDQUFDLFNBQW9DLEVBQUUsWUFBa0IsRUFBRSxVQUFrQix1QkFBdUI7UUFDL0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdEQsWUFBWSxFQUFFLFlBQVk7WUFDMUIsS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDLENBQUM7SUFDSixDQUFDO0lBR0E7OztNQUdFO0lBQ0ssVUFBVSxDQUFDLE9BQWU7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzsrR0EzQ1UsaUJBQWlCO21IQUFqQixpQkFBaUIsY0FGaEIsS0FBSzs7NEZBRU4saUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxLQUFLO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UsIE1vZGFsT3B0aW9ucyB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdhbnknXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFV0aWxzU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgX2JzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSwgcHJpdmF0ZSBfYnNNb2RhbHJlZjogQnNNb2RhbFJlZiApIHsgfVxyXG5cclxuICAvKipcclxuICAgKiBNw6l0b2RvIHNpbXBsZXMgY29tIG8gb2JqZXRpdm8gZGUgYWJyaXIgb3MgbW9kYWlzIG5vIGNlbnRybyBkYSB0ZWxhLlxyXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZSBUZW1wbGF0ZSBIVE1MIGRvIG1vZGFsIHF1ZSBzZXLDoSBhYmVydG8uXHJcbiAgICogQHBhcmFtIG1vZGFsSUQgSUQgZG8gbW9kYWwgcXVlIHNlcsOhIGFiZXJ0bywgcGFyYSBxdWUgcG9zc2Egc2VyIHJlZmVyZW5jaWFkbyBkZXBvaXMuXHJcbiAgICogQHBhcmFtIGN1c3RvbUNsYXNzIENsYXNzZXMgY3VzdG9taXphZGFzIHBhcmEgbyBtb2RhbCwgdmFsb3IgZGVmYXVsdCDDqSBcIm1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiXHJcbiAgKi9cclxuIHB1YmxpYyBvcGVuTW9kYWwodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIG1vZGFsSUQ6IG51bWJlciwgY3VzdG9tQ2xhc3M6IHN0cmluZyA9IFwibW9kYWwtZGlhbG9nLWNlbnRlcmVkXCIpOiB2b2lkIHtcclxuICAgdGhpcy5fYnNNb2RhbFNlcnZpY2Uuc2hvdyh0ZW1wbGF0ZSwge1xyXG4gICAgIGlkOiBtb2RhbElELFxyXG4gICAgIGNsYXNzOiBjdXN0b21DbGFzcyxcclxuICAgICBpZ25vcmVCYWNrZHJvcENsaWNrOiBmYWxzZSxcclxuICAgICBrZXlib2FyZDogZmFsc2VcclxuICAgfSk7XHJcbiB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3DqXRvZG8gc2ltcGxlcyBjb20gbyBvYmpldGl2byBkZSBhYnJpciBvcyBtb2RhaXMgbm8gY2VudHJvIGRhIHRlbGEuXHJcbiAgICogQHBhcmFtIHRlbXBsYXRlIFRlbXBsYXRlIEhUTUwgZG8gbW9kYWwgcXVlIHNlcsOhIGFiZXJ0by5cclxuICAgKiBAcGFyYW0gbW9kYWxJRCBJRCBkbyBtb2RhbCBxdWUgc2Vyw6EgYWJlcnRvLCBwYXJhIHF1ZSBwb3NzYSBzZXIgcmVmZXJlbmNpYWRvIGRlcG9pcy5cclxuICAgKiBAcGFyYW0ge01vZGFsT3B0aW9uc30gb3B0aW9ucyAtIEVzdHJ1dHVyYSBkZSBvcMOnw7VlcyBpbmZvcm1hZGFzIHBhcmEgY29uZmlndXJhciBvIG1vZGFsIG1haXMgYXByb2Z1bmRhZGFtZW50ZVxyXG4gICovXHJcbiBwdWJsaWMgb3Blbk1vZGFsQ3VzdG9tKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LCBtb2RhbElEOiBudW1iZXIsIG9wdGlvbnM6IE1vZGFsT3B0aW9ucyA9IHsgaWQ6IG1vZGFsSUQsIGNsYXNzOiBcIm1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiLCBpZ25vcmVCYWNrZHJvcENsaWNrOiBmYWxzZSwga2V5Ym9hcmQ6IGZhbHNlIH0pOiB2b2lkIHtcclxuICAgdGhpcy5fYnNNb2RhbFNlcnZpY2Uuc2hvdyh0ZW1wbGF0ZSwgb3B0aW9ucyk7XHJcbiB9XHJcblxyXG5cclxuIHB1YmxpYyBvcGVuSW5pdGlhbFN0YXRlTW9kYWwoY29tcG9uZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+LCBpbml0aWFsU3RhdGU/OiBhbnksIGNsYXNzZXM6IHN0cmluZyA9IFwibW9kYWwtZGlhbG9nLWNlbnRlcmVkXCIpOiB2b2lkIHtcclxuICB0aGlzLl9ic01vZGFscmVmID0gdGhpcy5fYnNNb2RhbFNlcnZpY2Uuc2hvdyhjb21wb25lbnQsIHtcclxuICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxyXG4gICAgY2xhc3M6IGNsYXNzZXNcclxuICB9KTtcclxuIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIE3DqXRvZG8gcGFyYSBmZWNoYXIgdW0gbW9kYWwgcXVlIGVzdGl2ZXIgYWJlcnRvIG5hIHRlbGFcclxuICAgKiBAcGFyYW0gbW9kYWxJRCBJRCBkbyBtb2RhbCBxdWUgc2Vyw6EgZmVjaGFkbywgw6kgbmVjZXNzw6FyaW8gdW0gSUQgcGFyYSBmZWNoYXIgbyBtb2RhbCBjb3JyZXRvLlxyXG4gICovXHJcbiAgcHVibGljIGNsb3NlTW9kYWwobW9kYWxJRDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgdGhpcy5fYnNNb2RhbFNlcnZpY2UuaGlkZShtb2RhbElEKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
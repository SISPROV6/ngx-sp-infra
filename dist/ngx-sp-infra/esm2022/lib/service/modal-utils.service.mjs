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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3NlcnZpY2UvbW9kYWwtdXRpbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDOzs7QUFNbkUsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUFxQixlQUErQixFQUFVLFdBQXVCO1FBQWhFLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0lBQUssQ0FBQztJQUUzRjs7Ozs7TUFLRTtJQUNJLFNBQVMsQ0FBQyxRQUEwQixFQUFFLE9BQWUsRUFBRSxjQUFzQix1QkFBdUI7UUFDekcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xDLEVBQUUsRUFBRSxPQUFPO1lBQ1gsS0FBSyxFQUFFLFdBQVc7WUFDbEIsbUJBQW1CLEVBQUUsS0FBSztZQUMxQixRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUE7Ozs7O01BS0U7SUFDSSxlQUFlLENBQUMsUUFBMEIsRUFBRSxPQUFlLEVBQUUsVUFBd0IsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtRQUN0TCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUdNLHFCQUFxQixDQUFDLFNBQW9DLEVBQUUsWUFBa0IsRUFBRSxVQUFrQix1QkFBdUI7UUFDL0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdEQsWUFBWSxFQUFFLFlBQVk7WUFDMUIsS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDLENBQUM7SUFDSixDQUFDO0lBR0E7OztNQUdFO0lBQ0ssVUFBVSxDQUFDLE9BQWU7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzsrR0EzQ1UsaUJBQWlCO21IQUFqQixpQkFBaUIsY0FGaEIsS0FBSzs7NEZBRU4saUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxLQUFLO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzTW9kYWxSZWYsIEJzTW9kYWxTZXJ2aWNlLCBNb2RhbE9wdGlvbnMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAnYW55J1xufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFV0aWxzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9ic01vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UsIHByaXZhdGUgX2JzTW9kYWxyZWY6IEJzTW9kYWxSZWYgKSB7IH1cblxuICAvKipcbiAgICogTcOpdG9kbyBzaW1wbGVzIGNvbSBvIG9iamV0aXZvIGRlIGFicmlyIG9zIG1vZGFpcyBubyBjZW50cm8gZGEgdGVsYS5cbiAgICogQHBhcmFtIHRlbXBsYXRlIFRlbXBsYXRlIEhUTUwgZG8gbW9kYWwgcXVlIHNlcsOhIGFiZXJ0by5cbiAgICogQHBhcmFtIG1vZGFsSUQgSUQgZG8gbW9kYWwgcXVlIHNlcsOhIGFiZXJ0bywgcGFyYSBxdWUgcG9zc2Egc2VyIHJlZmVyZW5jaWFkbyBkZXBvaXMuXG4gICAqIEBwYXJhbSBjdXN0b21DbGFzcyBDbGFzc2VzIGN1c3RvbWl6YWRhcyBwYXJhIG8gbW9kYWwsIHZhbG9yIGRlZmF1bHQgw6kgXCJtb2RhbC1kaWFsb2ctY2VudGVyZWRcIlxuICAqL1xuIHB1YmxpYyBvcGVuTW9kYWwodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIG1vZGFsSUQ6IG51bWJlciwgY3VzdG9tQ2xhc3M6IHN0cmluZyA9IFwibW9kYWwtZGlhbG9nLWNlbnRlcmVkXCIpOiB2b2lkIHtcbiAgIHRoaXMuX2JzTW9kYWxTZXJ2aWNlLnNob3codGVtcGxhdGUsIHtcbiAgICAgaWQ6IG1vZGFsSUQsXG4gICAgIGNsYXNzOiBjdXN0b21DbGFzcyxcbiAgICAgaWdub3JlQmFja2Ryb3BDbGljazogZmFsc2UsXG4gICAgIGtleWJvYXJkOiBmYWxzZVxuICAgfSk7XG4gfVxuXG4gIC8qKlxuICAgKiBNw6l0b2RvIHNpbXBsZXMgY29tIG8gb2JqZXRpdm8gZGUgYWJyaXIgb3MgbW9kYWlzIG5vIGNlbnRybyBkYSB0ZWxhLlxuICAgKiBAcGFyYW0gdGVtcGxhdGUgVGVtcGxhdGUgSFRNTCBkbyBtb2RhbCBxdWUgc2Vyw6EgYWJlcnRvLlxuICAgKiBAcGFyYW0gbW9kYWxJRCBJRCBkbyBtb2RhbCBxdWUgc2Vyw6EgYWJlcnRvLCBwYXJhIHF1ZSBwb3NzYSBzZXIgcmVmZXJlbmNpYWRvIGRlcG9pcy5cbiAgICogQHBhcmFtIHtNb2RhbE9wdGlvbnN9IG9wdGlvbnMgLSBFc3RydXR1cmEgZGUgb3DDp8O1ZXMgaW5mb3JtYWRhcyBwYXJhIGNvbmZpZ3VyYXIgbyBtb2RhbCBtYWlzIGFwcm9mdW5kYWRhbWVudGVcbiAgKi9cbiBwdWJsaWMgb3Blbk1vZGFsQ3VzdG9tKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LCBtb2RhbElEOiBudW1iZXIsIG9wdGlvbnM6IE1vZGFsT3B0aW9ucyA9IHsgaWQ6IG1vZGFsSUQsIGNsYXNzOiBcIm1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiLCBpZ25vcmVCYWNrZHJvcENsaWNrOiBmYWxzZSwga2V5Ym9hcmQ6IGZhbHNlIH0pOiB2b2lkIHtcbiAgIHRoaXMuX2JzTW9kYWxTZXJ2aWNlLnNob3codGVtcGxhdGUsIG9wdGlvbnMpO1xuIH1cblxuXG4gcHVibGljIG9wZW5Jbml0aWFsU3RhdGVNb2RhbChjb21wb25lbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4sIGluaXRpYWxTdGF0ZT86IGFueSwgY2xhc3Nlczogc3RyaW5nID0gXCJtb2RhbC1kaWFsb2ctY2VudGVyZWRcIik6IHZvaWQge1xuICB0aGlzLl9ic01vZGFscmVmID0gdGhpcy5fYnNNb2RhbFNlcnZpY2Uuc2hvdyhjb21wb25lbnQsIHtcbiAgICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSxcbiAgICBjbGFzczogY2xhc3Nlc1xuICB9KTtcbiB9XG5cblxuICAvKipcbiAgICogTcOpdG9kbyBwYXJhIGZlY2hhciB1bSBtb2RhbCBxdWUgZXN0aXZlciBhYmVydG8gbmEgdGVsYVxuICAgKiBAcGFyYW0gbW9kYWxJRCBJRCBkbyBtb2RhbCBxdWUgc2Vyw6EgZmVjaGFkbywgw6kgbmVjZXNzw6FyaW8gdW0gSUQgcGFyYSBmZWNoYXIgbyBtb2RhbCBjb3JyZXRvLlxuICAqL1xuICBwdWJsaWMgY2xvc2VNb2RhbChtb2RhbElEOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgdGhpcy5fYnNNb2RhbFNlcnZpY2UuaGlkZShtb2RhbElEKTtcbiAgfVxuXG59XG4iXX0=
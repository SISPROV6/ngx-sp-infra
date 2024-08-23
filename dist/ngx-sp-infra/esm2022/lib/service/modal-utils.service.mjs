import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
export class ModalUtilsService {
    constructor(_bsModalService) {
        this._bsModalService = _bsModalService;
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
    /**
     * Método para fechar um modal que estiver aberto na tela
     * @param modalID ID do modal que será fechado, é necessário um ID para fechar o modal correto.
    */
    closeModal(modalID) {
        this._bsModalService.hide(modalID);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: ModalUtilsService, deps: [{ token: i1.BsModalService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: ModalUtilsService, providedIn: 'any' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: ModalUtilsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'any'
                }]
        }], ctorParameters: () => [{ type: i1.BsModalService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3NlcnZpY2UvbW9kYWwtdXRpbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDOzs7QUFNeEQsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUFxQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFBSyxDQUFDO0lBRTFEOzs7OztNQUtFO0lBQ0ksU0FBUyxDQUFDLFFBQTBCLEVBQUUsT0FBZSxFQUFFLGNBQXNCLHVCQUF1QjtRQUN6RyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEMsRUFBRSxFQUFFLE9BQU87WUFDWCxLQUFLLEVBQUUsV0FBVztZQUNsQixtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFQTs7Ozs7TUFLRTtJQUNJLGVBQWUsQ0FBQyxRQUEwQixFQUFFLE9BQWUsRUFBRSxVQUF3QixFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO1FBQ3RMLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUE7OztNQUdFO0lBQ0ssVUFBVSxDQUFDLE9BQWU7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzsrR0FsQ1UsaUJBQWlCO21IQUFqQixpQkFBaUIsY0FGaEIsS0FBSzs7NEZBRU4saUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxLQUFLO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlLCBNb2RhbE9wdGlvbnMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAnYW55J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxVdGlsc1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9ic01vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UgKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOpdG9kbyBzaW1wbGVzIGNvbSBvIG9iamV0aXZvIGRlIGFicmlyIG9zIG1vZGFpcyBubyBjZW50cm8gZGEgdGVsYS5cclxuICAgKiBAcGFyYW0gdGVtcGxhdGUgVGVtcGxhdGUgSFRNTCBkbyBtb2RhbCBxdWUgc2Vyw6EgYWJlcnRvLlxyXG4gICAqIEBwYXJhbSBtb2RhbElEIElEIGRvIG1vZGFsIHF1ZSBzZXLDoSBhYmVydG8sIHBhcmEgcXVlIHBvc3NhIHNlciByZWZlcmVuY2lhZG8gZGVwb2lzLlxyXG4gICAqIEBwYXJhbSBjdXN0b21DbGFzcyBDbGFzc2VzIGN1c3RvbWl6YWRhcyBwYXJhIG8gbW9kYWwsIHZhbG9yIGRlZmF1bHQgw6kgXCJtb2RhbC1kaWFsb2ctY2VudGVyZWRcIlxyXG4gICovXHJcbiBwdWJsaWMgb3Blbk1vZGFsKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LCBtb2RhbElEOiBudW1iZXIsIGN1c3RvbUNsYXNzOiBzdHJpbmcgPSBcIm1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiKTogdm9pZCB7XHJcbiAgIHRoaXMuX2JzTW9kYWxTZXJ2aWNlLnNob3codGVtcGxhdGUsIHtcclxuICAgICBpZDogbW9kYWxJRCxcclxuICAgICBjbGFzczogY3VzdG9tQ2xhc3MsXHJcbiAgICAgaWdub3JlQmFja2Ryb3BDbGljazogZmFsc2UsXHJcbiAgICAga2V5Ym9hcmQ6IGZhbHNlXHJcbiAgIH0pO1xyXG4gfVxyXG5cclxuICAvKipcclxuICAgKiBNw6l0b2RvIHNpbXBsZXMgY29tIG8gb2JqZXRpdm8gZGUgYWJyaXIgb3MgbW9kYWlzIG5vIGNlbnRybyBkYSB0ZWxhLlxyXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZSBUZW1wbGF0ZSBIVE1MIGRvIG1vZGFsIHF1ZSBzZXLDoSBhYmVydG8uXHJcbiAgICogQHBhcmFtIG1vZGFsSUQgSUQgZG8gbW9kYWwgcXVlIHNlcsOhIGFiZXJ0bywgcGFyYSBxdWUgcG9zc2Egc2VyIHJlZmVyZW5jaWFkbyBkZXBvaXMuXHJcbiAgICogQHBhcmFtIHtNb2RhbE9wdGlvbnN9IG9wdGlvbnMgLSBFc3RydXR1cmEgZGUgb3DDp8O1ZXMgaW5mb3JtYWRhcyBwYXJhIGNvbmZpZ3VyYXIgbyBtb2RhbCBtYWlzIGFwcm9mdW5kYWRhbWVudGVcclxuICAqL1xyXG4gcHVibGljIG9wZW5Nb2RhbEN1c3RvbSh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgbW9kYWxJRDogbnVtYmVyLCBvcHRpb25zOiBNb2RhbE9wdGlvbnMgPSB7IGlkOiBtb2RhbElELCBjbGFzczogXCJtb2RhbC1kaWFsb2ctY2VudGVyZWRcIiwgaWdub3JlQmFja2Ryb3BDbGljazogZmFsc2UsIGtleWJvYXJkOiBmYWxzZSB9KTogdm9pZCB7XHJcbiAgIHRoaXMuX2JzTW9kYWxTZXJ2aWNlLnNob3codGVtcGxhdGUsIG9wdGlvbnMpO1xyXG4gfVxyXG5cclxuICAvKipcclxuICAgKiBNw6l0b2RvIHBhcmEgZmVjaGFyIHVtIG1vZGFsIHF1ZSBlc3RpdmVyIGFiZXJ0byBuYSB0ZWxhXHJcbiAgICogQHBhcmFtIG1vZGFsSUQgSUQgZG8gbW9kYWwgcXVlIHNlcsOhIGZlY2hhZG8sIMOpIG5lY2Vzc8OhcmlvIHVtIElEIHBhcmEgZmVjaGFyIG8gbW9kYWwgY29ycmV0by5cclxuICAqL1xyXG4gIHB1YmxpYyBjbG9zZU1vZGFsKG1vZGFsSUQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgIHRoaXMuX2JzTW9kYWxTZXJ2aWNlLmhpZGUobW9kYWxJRCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
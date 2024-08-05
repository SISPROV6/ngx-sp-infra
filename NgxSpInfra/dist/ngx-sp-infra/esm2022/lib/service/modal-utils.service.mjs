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
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: ModalUtilsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: ModalUtilsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.BsModalService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3NlcnZpY2UvbW9kYWwtdXRpbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDOzs7QUFNeEQsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUFxQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFBSyxDQUFDO0lBRTFEOzs7OztNQUtFO0lBQ0ksU0FBUyxDQUFDLFFBQTBCLEVBQUUsT0FBZSxFQUFFLGNBQXNCLHVCQUF1QjtRQUN6RyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEMsRUFBRSxFQUFFLE9BQU87WUFDWCxLQUFLLEVBQUUsV0FBVztZQUNsQixtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFQTs7Ozs7TUFLRTtJQUNJLGVBQWUsQ0FBQyxRQUEwQixFQUFFLE9BQWUsRUFBRSxVQUF3QixFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO1FBQ3RMLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUE7OztNQUdFO0lBQ0ssVUFBVSxDQUFDLE9BQWU7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzsrR0FsQ1UsaUJBQWlCO21IQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs7NEZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlLCBNb2RhbE9wdGlvbnMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsVXRpbHNTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfYnNNb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlICkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3DqXRvZG8gc2ltcGxlcyBjb20gbyBvYmpldGl2byBkZSBhYnJpciBvcyBtb2RhaXMgbm8gY2VudHJvIGRhIHRlbGEuXHJcbiAgICogQHBhcmFtIHRlbXBsYXRlIFRlbXBsYXRlIEhUTUwgZG8gbW9kYWwgcXVlIHNlcsOhIGFiZXJ0by5cclxuICAgKiBAcGFyYW0gbW9kYWxJRCBJRCBkbyBtb2RhbCBxdWUgc2Vyw6EgYWJlcnRvLCBwYXJhIHF1ZSBwb3NzYSBzZXIgcmVmZXJlbmNpYWRvIGRlcG9pcy5cclxuICAgKiBAcGFyYW0gY3VzdG9tQ2xhc3MgQ2xhc3NlcyBjdXN0b21pemFkYXMgcGFyYSBvIG1vZGFsLCB2YWxvciBkZWZhdWx0IMOpIFwibW9kYWwtZGlhbG9nLWNlbnRlcmVkXCJcclxuICAqL1xyXG4gcHVibGljIG9wZW5Nb2RhbCh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgbW9kYWxJRDogbnVtYmVyLCBjdXN0b21DbGFzczogc3RyaW5nID0gXCJtb2RhbC1kaWFsb2ctY2VudGVyZWRcIik6IHZvaWQge1xyXG4gICB0aGlzLl9ic01vZGFsU2VydmljZS5zaG93KHRlbXBsYXRlLCB7XHJcbiAgICAgaWQ6IG1vZGFsSUQsXHJcbiAgICAgY2xhc3M6IGN1c3RvbUNsYXNzLFxyXG4gICAgIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IGZhbHNlLFxyXG4gICAgIGtleWJvYXJkOiBmYWxzZVxyXG4gICB9KTtcclxuIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOpdG9kbyBzaW1wbGVzIGNvbSBvIG9iamV0aXZvIGRlIGFicmlyIG9zIG1vZGFpcyBubyBjZW50cm8gZGEgdGVsYS5cclxuICAgKiBAcGFyYW0gdGVtcGxhdGUgVGVtcGxhdGUgSFRNTCBkbyBtb2RhbCBxdWUgc2Vyw6EgYWJlcnRvLlxyXG4gICAqIEBwYXJhbSBtb2RhbElEIElEIGRvIG1vZGFsIHF1ZSBzZXLDoSBhYmVydG8sIHBhcmEgcXVlIHBvc3NhIHNlciByZWZlcmVuY2lhZG8gZGVwb2lzLlxyXG4gICAqIEBwYXJhbSB7TW9kYWxPcHRpb25zfSBvcHRpb25zIC0gRXN0cnV0dXJhIGRlIG9ww6fDtWVzIGluZm9ybWFkYXMgcGFyYSBjb25maWd1cmFyIG8gbW9kYWwgbWFpcyBhcHJvZnVuZGFkYW1lbnRlXHJcbiAgKi9cclxuIHB1YmxpYyBvcGVuTW9kYWxDdXN0b20odGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIG1vZGFsSUQ6IG51bWJlciwgb3B0aW9uczogTW9kYWxPcHRpb25zID0geyBpZDogbW9kYWxJRCwgY2xhc3M6IFwibW9kYWwtZGlhbG9nLWNlbnRlcmVkXCIsIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IGZhbHNlLCBrZXlib2FyZDogZmFsc2UgfSk6IHZvaWQge1xyXG4gICB0aGlzLl9ic01vZGFsU2VydmljZS5zaG93KHRlbXBsYXRlLCBvcHRpb25zKTtcclxuIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOpdG9kbyBwYXJhIGZlY2hhciB1bSBtb2RhbCBxdWUgZXN0aXZlciBhYmVydG8gbmEgdGVsYVxyXG4gICAqIEBwYXJhbSBtb2RhbElEIElEIGRvIG1vZGFsIHF1ZSBzZXLDoSBmZWNoYWRvLCDDqSBuZWNlc3PDoXJpbyB1bSBJRCBwYXJhIGZlY2hhciBvIG1vZGFsIGNvcnJldG8uXHJcbiAgKi9cclxuICBwdWJsaWMgY2xvc2VNb2RhbChtb2RhbElEOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICB0aGlzLl9ic01vZGFsU2VydmljZS5oaWRlKG1vZGFsSUQpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
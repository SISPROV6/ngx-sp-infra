import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { alertIds, alertTypes } from './message-enum';
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { SaveComponent } from './save/save.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
export class MessageService {
    constructor(bsModalService) {
        this.bsModalService = bsModalService;
    }
    // Exibe uma mesagem conforme o tipo (privado)
    showAlert(message, type, dismissTimeout, id) {
        const initialState = {
            message: message,
            type: type,
        };
        const bsModalRef = this.bsModalService.show(AlertComponent, {
            initialState, class: 'modal-md', id: id
        });
        if (dismissTimeout) {
            setTimeout(() => bsModalRef.hide(), dismissTimeout);
        }
    }
    // Exibe uma mensagem do tipo danger
    showAlertDanger(message) {
        this.showAlert(message, alertTypes.DANGER, 0, alertIds.DANGER);
    }
    // Exibe uma mesagem do tipo success
    showAlertSuccess(message) {
        this.showAlert(message, alertTypes.SUCCESS, 3000, alertIds.SUCCESS);
    }
    // Exibe uma mesagem do tipo info
    showAlertInfo(message) {
        this.showAlert(message, alertTypes.INFO, 3000, alertIds.INFO);
    }
    // Exibe uma mesagem do tipo primary(
    showAlertPrimary(message) {
        this.showAlert(message, alertTypes.PRIMARY, 3000, alertIds.PRIMARY);
    }
    // Exibe uma mesagem do tipo secondary(
    showAlertSecondary(message) {
        this.showAlert(message, alertTypes.SECONDARY, 3000, alertIds.SECONDARY);
    }
    // Exibe uma mesagem do tipo warning
    showAlertWarning(message) {
        this.showAlert(message, alertTypes.WARNING, 0, alertIds.WARNING);
    }
    // Exibe uma mesagem do tipo light
    showAlertLight(message) {
        this.showAlert(message, alertTypes.LIGHT, 0, alertIds.LIGHT);
    }
    // Exibe uma mesagem do tipo dark
    showAlertDark(message) {
        this.showAlert(message, alertTypes.DARK, 0, alertIds.DARK);
    }
    // Exibe um modal de inserção no banco
    showCreate(title, message, okText, cancelText, okButton, fields) {
        if (!okText) {
            okText = 'Criar';
        }
        if (!okButton) {
        }
        const initialState = {
            title: title,
            message: message,
            fields: fields,
            okText: okText,
            cancelText: cancelText,
            okButton: okButton,
        };
        const bsModalRef = this.bsModalService.show(SaveComponent, {
            initialState,
        });
        return bsModalRef.content.confirmResult
            .asObservable()
            .pipe(take(1));
    }
    // Exibe uma mesagem do tipo confirmação
    showConfirm(title, message, okText, cancelText, okButton, paramatroOkButton) {
        if (!okText) {
            okText = 'Sim';
        }
        if (!cancelText) {
            cancelText = 'Cancelar';
        }
        if (!okButton) {
        }
        const initialState = {
            title: title,
            message: message,
            okText: okText,
            cancelText: cancelText,
            okButton: okButton,
            parametroOkButton: paramatroOkButton,
        };
        const bsModalRef = this.bsModalService.show(ConfirmComponent, {
            initialState,
        });
        return bsModalRef.content.confirmResult
            .asObservable()
            .pipe(take(1));
    }
    /**
     * Utilize este método para mostrar na tela um modal que não tem fundo branco, bordas e
     * backdrop (no quesito sair do modal)
     *
     * O modal também vai estar centralizado no meio da tela (verticalmente e horizontalmente).
     * @param elemento Elemento a ser mostrado na tela.
     * @param id Id especifico a este modal. Opcional.
     * @returns Referencia ao modal mostrado na tela.
     */
    showModalLoading(elemento, elemID, initialState) {
        let options = {
            id: elemID,
            class: "modal-dialog-centered justify-content-center modal-hide-background",
            backdrop: true,
            ignoreBackdropClick: true,
            animated: false,
            initialState: initialState
        };
        return this.bsModalService.show(elemento, options);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: MessageService, deps: [{ token: i1.BsModalService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: MessageService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: MessageService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1.BsModalService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNdEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFLdEQsTUFBTSxPQUFPLGNBQWM7SUFDekIsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUksQ0FBQztJQUV2RCw4Q0FBOEM7SUFDdEMsU0FBUyxDQUNmLE9BQWUsRUFDZixJQUFnQixFQUNoQixjQUF1QixFQUN2QixFQUF1QjtRQUV2QixNQUFNLFlBQVksR0FBUTtZQUN4QixPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7UUFFRixNQUFNLFVBQVUsR0FBZSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdEUsWUFBWSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUU7U0FDeEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUNuQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3RELENBQUM7SUFDSCxDQUFDO0lB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dWxhci9jb3JlJztcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEJzTW9kYWxSZWYsIEJzTW9kYWxTZXJ2aWNlLCBNb2RhbE9wdGlvbnMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcclxuXHJcbmltcG9ydCB7IGFsZXJ0SWRzLCBhbGVydFR5cGVzIH0gZnJvbSAnLi9tZXNzYWdlLWVudW0nO1xyXG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQvYWxlcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybS9jb25maXJtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNhdmVDb21wb25lbnQgfSBmcm9tICcuL3NhdmUvc2F2ZS5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoXHJcbiAgeyBwcm92aWRlZEluOiAncm9vdCcgfVxyXG4pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBic01vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UpIHsgfVxyXG5cclxuICAvLyBFeGliZSB1bWEgbWVzYWdlbSBjb25mb3JtZSBvIHRpcG8gKHByaXZhZG8pXHJcbiAgcHJpdmF0ZSBzaG93QWxlcnQoXHJcbiAgICBtZXNzYWdlOiBzdHJpbmcsXHJcbiAgICB0eXBlOiBhbGVydFR5cGVzLFxyXG4gICAgZGlzbWlzc1RpbWVvdXQ/OiBudW1iZXIsXHJcbiAgICBpZD86IG51bWJlciB8IHVuZGVmaW5lZFxyXG4gICkge1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlOiBhbnkgPSB7XHJcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJzTW9kYWxSZWY6IEJzTW9kYWxSZWYgPSB0aGlzLmJzTW9kYWxTZXJ2aWNlLnNob3coQWxlcnRDb21wb25lbnQsIHtcclxuICAgICAgaW5pdGlhbFN0YXRlLCBjbGFzczogJ21vZGFsLW1kJywgaWQ6IGlkXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZGlzbWlzc1RpbWVvdXQpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiBic01vZGFsUmVmLmhpZGUoKSwgZGlzbWlzc1RpbWVvdXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRXhpYmUgdW1hIG1lbnNhZ2VtIGRvIHRpcG8gZGFuZ2VyXHJcbiAgc2hvd0FsZXJ0RGFuZ2VyKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgdGhpcy5zaG93QWxlcnQobWVzc2FnZSwgYWxlcnRUeXBlcy5EQU5HRVIsIDAsIGFsZXJ0SWRzLkRBTkdFUik7XHJcbiAgfVxyXG5cclxuICAvLyBFeGliZSB1bWEgbWVzYWdlbSBkbyB0aXBvIHN1Y2Nlc3NcclxuICBzaG93QWxlcnRTdWNjZXNzKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgdGhpcy5zaG93QWxlcnQobWVzc2FnZSwgYWxlcnRUeXBlcy5TVUNDRVNTLCAzMDAwLCBhbGVydElkcy5TVUNDRVNTKTtcclxuICB9XHJcblxyXG4gIC8vIEV4aWJlIHVtYSBtZXNhZ2VtIGRvIHRpcG8gaW5mb1xyXG4gIHNob3dBbGVydEluZm8obWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNob3dBbGVydChtZXNzYWdlLCBhbGVydFR5cGVzLklORk8sIDMwMDAsIGFsZXJ0SWRzLklORk8pO1xyXG4gIH1cclxuICAvLyBFeGliZSB1bWEgbWVzYWdlbSBkbyB0aXBvIHByaW1hcnkoXHJcbiAgc2hvd0FsZXJ0UHJpbWFyeShtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2hvd0FsZXJ0KG1lc3NhZ2UsIGFsZXJ0VHlwZXMuUFJJTUFSWSwgMzAwMCwgYWxlcnRJZHMuUFJJTUFSWSk7XHJcbiAgfVxyXG5cclxuICAvLyBFeGliZSB1bWEgbWVzYWdlbSBkbyB0aXBvIHNlY29uZGFyeShcclxuICBzaG93QWxlcnRTZWNvbmRhcnkobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNob3dBbGVydChtZXNzYWdlLCBhbGVydFR5cGVzLlNFQ09OREFSWSwgMzAwMCwgYWxlcnRJZHMuU0VDT05EQVJZKTtcclxuICB9XHJcbiAgLy8gRXhpYmUgdW1hIG1lc2FnZW0gZG8gdGlwbyB3YXJuaW5nXHJcbiAgc2hvd0FsZXJ0V2FybmluZyhtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2hvd0FsZXJ0KG1lc3NhZ2UsIGFsZXJ0VHlwZXMuV0FSTklORywgMCwgYWxlcnRJZHMuV0FSTklORyk7XHJcbiAgfVxyXG5cclxuICAvLyBFeGliZSB1bWEgbWVzYWdlbSBkbyB0aXBvIGxpZ2h0XHJcbiAgc2hvd0FsZXJ0TGlnaHQobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNob3dBbGVydChtZXNzYWdlLCBhbGVydFR5cGVzLkxJR0hULCAwLCBhbGVydElkcy5MSUdIVCk7XHJcbiAgfVxyXG5cclxuICAvLyBFeGliZSB1bWEgbWVzYWdlbSBkbyB0aXBvIGRhcmtcclxuICBzaG93QWxlcnREYXJrKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgdGhpcy5zaG93QWxlcnQobWVzc2FnZSwgYWxlcnRUeXBlcy5EQVJLLCAwLCBhbGVydElkcy5EQVJLKTtcclxuICB9XHJcbiAgLy8gRXhpYmUgdW0gbW9kYWwgZGUgaW5zZXLDp8OjbyBubyBiYW5jb1xyXG4gIHNob3dDcmVhdGUoXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgbWVzc2FnZTogc3RyaW5nLFxyXG4gICAgb2tUZXh0OiBzdHJpbmcsXHJcbiAgICBjYW5jZWxUZXh0OiBzdHJpbmcsXHJcbiAgICBva0J1dHRvbjogRnVuY3Rpb24sXHJcbiAgICBmaWVsZHM6IHN0cmluZ1tdLFxyXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgaWYgKCFva1RleHQpIHtcclxuICAgICAgb2tUZXh0ID0gJ0NyaWFyJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIW9rQnV0dG9uKSB7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGU6IGFueSA9IHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICBmaWVsZHM6IGZpZWxkcyxcclxuICAgICAgb2tUZXh0OiBva1RleHQsXHJcbiAgICAgIGNhbmNlbFRleHQ6IGNhbmNlbFRleHQsXHJcbiAgICAgIG9rQnV0dG9uOiBva0J1dHRvbixcclxuICAgIH07XHJcbiAgICBjb25zdCBic01vZGFsUmVmOiBCc01vZGFsUmVmID0gdGhpcy5ic01vZGFsU2VydmljZS5zaG93KFNhdmVDb21wb25lbnQsIHtcclxuICAgICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICg8U2F2ZUNvbXBvbmVudD5ic01vZGFsUmVmLmNvbnRlbnQpLmNvbmZpcm1SZXN1bHRcclxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAgIC5waXBlKHRha2UoMSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gRXhpYmUgdW1hIG1lc2FnZW0gZG8gdGlwbyBjb25maXJtYcOnw6NvXHJcbiAgc2hvd0NvbmZpcm0oXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgbWVzc2FnZTogc3RyaW5nLFxyXG4gICAgb2tUZXh0Pzogc3RyaW5nLFxyXG4gICAgY2FuY2VsVGV4dD86IHN0cmluZyxcclxuICAgIG9rQnV0dG9uPzogRnVuY3Rpb24sXHJcbiAgICBwYXJhbWF0cm9Pa0J1dHRvbj86IGJvb2xlYW5cclxuICApOiBPYnNlcnZhYmxlPCdjb25maXJtYWRvJyB8ICdjYW5jZWxhZG8nPiB7XHJcbiAgICBpZiAoIW9rVGV4dCkge1xyXG4gICAgICBva1RleHQgPSAnU2ltJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNhbmNlbFRleHQpIHtcclxuICAgICAgY2FuY2VsVGV4dCA9ICdDYW5jZWxhcic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFva0J1dHRvbikge1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZTogYW55ID0ge1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgIG9rVGV4dDogb2tUZXh0LFxyXG4gICAgICBjYW5jZWxUZXh0OiBjYW5jZWxUZXh0LFxyXG4gICAgICBva0J1dHRvbjogb2tCdXR0b24sXHJcbiAgICAgIHBhcmFtZXRyb09rQnV0dG9uOiBwYXJhbWF0cm9Pa0J1dHRvbixcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYnNNb2RhbFJlZjogQnNNb2RhbFJlZiA9IHRoaXMuYnNNb2RhbFNlcnZpY2Uuc2hvdyhDb25maXJtQ29tcG9uZW50LCB7XHJcbiAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKDxDb25maXJtQ29tcG9uZW50PmJzTW9kYWxSZWYuY29udGVudCkpLmNvbmZpcm1SZXN1bHRcclxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAgIC5waXBlKHRha2UoMSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXRpbGl6ZSBlc3RlIG3DqXRvZG8gcGFyYSBtb3N0cmFyIG5hIHRlbGEgdW0gbW9kYWwgcXVlIG7Do28gdGVtIGZ1bmRvIGJyYW5jbywgYm9yZGFzIGUgXHJcbiAgICogYmFja2Ryb3AgKG5vIHF1ZXNpdG8gc2FpciBkbyBtb2RhbClcclxuICAgKiBcclxuICAgKiBPIG1vZGFsIHRhbWLDqW0gdmFpIGVzdGFyIGNlbnRyYWxpemFkbyBubyBtZWlvIGRhIHRlbGEgKHZlcnRpY2FsbWVudGUgZSBob3Jpem9udGFsbWVudGUpLlxyXG4gICAqIEBwYXJhbSBlbGVtZW50byBFbGVtZW50byBhIHNlciBtb3N0cmFkbyBuYSB0ZWxhLlxyXG4gICAqIEBwYXJhbSBpZCBJZCBlc3BlY2lmaWNvIGEgZXN0ZSBtb2RhbC4gT3BjaW9uYWwuXHJcbiAgICogQHJldHVybnMgUmVmZXJlbmNpYSBhbyBtb2RhbCBtb3N0cmFkbyBuYSB0ZWxhLlxyXG4gICAqL1xyXG4gIHNob3dNb2RhbExvYWRpbmcoZWxlbWVudG86IFRlbXBsYXRlUmVmPGFueT4gfCAobmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gdW5rbm93biksIGVsZW1JRD86IHN0cmluZyB8IG51bWJlciwgaW5pdGlhbFN0YXRlPzogUGFydGlhbDx1bmtub3duPik6IEJzTW9kYWxSZWYge1xyXG5cclxuICAgIGxldCBvcHRpb25zOiBNb2RhbE9wdGlvbnMgPSB7XHJcbiAgICAgIGlkOiBlbGVtSUQsXHJcbiAgICAgIGNsYXNzOiBcIm1vZGFsLWRpYWxvZy1jZW50ZXJlZCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1vZGFsLWhpZGUtYmFja2dyb3VuZFwiLFxyXG4gICAgICBiYWNrZHJvcDogdHJ1ZSxcclxuICAgICAgaWdub3JlQmFja2Ryb3BDbGljazogdHJ1ZSxcclxuICAgICAgYW5pbWF0ZWQ6IGZhbHNlLFxyXG4gICAgICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZVxyXG4gICAgfSBhcyBNb2RhbE9wdGlvbnM7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYnNNb2RhbFNlcnZpY2Uuc2hvdyhlbGVtZW50bywgb3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
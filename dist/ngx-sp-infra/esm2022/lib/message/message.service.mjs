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
    static { this.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(i0.ɵɵinject(i1.BsModalService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.BsModalService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNdEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFLdEQsTUFBTSxPQUFPLGNBQWM7SUFDekIsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUksQ0FBQztJQUV2RCw4Q0FBOEM7SUFDdEMsU0FBUyxDQUNmLE9BQWUsRUFDZixJQUFnQixFQUNoQixjQUF1QixFQUN2QixFQUF1QjtRQUV2QixNQUFNLFlBQVksR0FBUTtZQUN4QixPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7UUFFRixNQUFNLFVBQVUsR0FBZSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdEUsWUFBWSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUU7U0FDeEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUNuQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3RELENBQUM7SUFDSCxDQUFDO0lB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cm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UsIE1vZGFsT3B0aW9ucyB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuXG5pbXBvcnQgeyBhbGVydElkcywgYWxlcnRUeXBlcyB9IGZyb20gJy4vbWVzc2FnZS1lbnVtJztcbmltcG9ydCB7IEFsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC9hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybS9jb25maXJtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYXZlQ29tcG9uZW50IH0gZnJvbSAnLi9zYXZlL3NhdmUuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoXG4gIHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH1cbilcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYnNNb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlKSB7IH1cblxuICAvLyBFeGliZSB1bWEgbWVzYWdlbSBjb25mb3JtZSBvIHRpcG8gKHByaXZhZG8pXG4gIHByaXZhdGUgc2hvd0FsZXJ0KFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICB0eXBlOiBhbGVydFR5cGVzLFxuICAgIGRpc21pc3NUaW1lb3V0PzogbnVtYmVyLFxuICAgIGlkPzogbnVtYmVyIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZTogYW55ID0ge1xuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgfTtcblxuICAgIGNvbnN0IGJzTW9kYWxSZWY6IEJzTW9kYWxSZWYgPSB0aGlzLmJzTW9kYWxTZXJ2aWNlLnNob3coQWxlcnRDb21wb25lbnQsIHtcbiAgICAgIGluaXRpYWxTdGF0ZSwgY2xhc3M6ICdtb2RhbC1tZCcsIGlkOiBpZFxuICAgIH0pO1xuXG4gICAgaWYgKGRpc21pc3NUaW1lb3V0KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGJzTW9kYWxSZWYuaGlkZSgpLCBkaXNtaXNzVGltZW91dCk7XG4gICAgfVxuICB9XG5cbiAgLy8gRXhpYmUgdW1hIG1lbnNhZ2VtIGRvIHRpcG8gZGFuZ2VyXG4gIHNob3dBbGVydERhbmdlcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNob3dBbGVydChtZXNzYWdlLCBhbGVydFR5cGVzLkRBTkdFUiwgMCwgYWxlcnRJZHMuREFOR0VSKTtcbiAgfVxuXG4gIC8vIEV4aWJlIHVtYSBtZXNhZ2VtIGRvIHRpcG8gc3VjY2Vzc1xuICBzaG93QWxlcnRTdWNjZXNzKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuc2hvd0FsZXJ0KG1lc3NhZ2UsIGFsZXJ0VHlwZXMuU1VDQ0VTUywgMzAwMCwgYWxlcnRJZHMuU1VDQ0VTUyk7XG4gIH1cblxuICAvLyBFeGliZSB1bWEgbWVzYWdlbSBkbyB0aXBvIGluZm9cbiAgc2hvd0FsZXJ0SW5mbyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNob3dBbGVydChtZXNzYWdlLCBhbGVydFR5cGVzLklORk8sIDMwMDAsIGFsZXJ0SWRzLklORk8pO1xuICB9XG4gIC8vIEV4aWJlIHVtYSBtZXNhZ2VtIGRvIHRpcG8gcHJpbWFyeShcbiAgc2hvd0FsZXJ0UHJpbWFyeShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNob3dBbGVydChtZXNzYWdlLCBhbGVydFR5cGVzLlBSSU1BUlksIDMwMDAsIGFsZXJ0SWRzLlBSSU1BUlkpO1xuICB9XG5cbiAgLy8gRXhpYmUgdW1hIG1lc2FnZW0gZG8gdGlwbyBzZWNvbmRhcnkoXG4gIHNob3dBbGVydFNlY29uZGFyeShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNob3dBbGVydChtZXNzYWdlLCBhbGVydFR5cGVzLlNFQ09OREFSWSwgMzAwMCwgYWxlcnRJZHMuU0VDT05EQVJZKTtcbiAgfVxuICAvLyBFeGliZSB1bWEgbWVzYWdlbSBkbyB0aXBvIHdhcm5pbmdcbiAgc2hvd0FsZXJ0V2FybmluZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNob3dBbGVydChtZXNzYWdlLCBhbGVydFR5cGVzLldBUk5JTkcsIDAsIGFsZXJ0SWRzLldBUk5JTkcpO1xuICB9XG5cbiAgLy8gRXhpYmUgdW1hIG1lc2FnZW0gZG8gdGlwbyBsaWdodFxuICBzaG93QWxlcnRMaWdodChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNob3dBbGVydChtZXNzYWdlLCBhbGVydFR5cGVzLkxJR0hULCAwLCBhbGVydElkcy5MSUdIVCk7XG4gIH1cblxuICAvLyBFeGliZSB1bWEgbWVzYWdlbSBkbyB0aXBvIGRhcmtcbiAgc2hvd0FsZXJ0RGFyayhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNob3dBbGVydChtZXNzYWdlLCBhbGVydFR5cGVzLkRBUkssIDAsIGFsZXJ0SWRzLkRBUkspO1xuICB9XG4gIC8vIEV4aWJlIHVtIG1vZGFsIGRlIGluc2Vyw6fDo28gbm8gYmFuY29cbiAgc2hvd0NyZWF0ZShcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBva1RleHQ6IHN0cmluZyxcbiAgICBjYW5jZWxUZXh0OiBzdHJpbmcsXG4gICAgb2tCdXR0b246IEZ1bmN0aW9uLFxuICAgIGZpZWxkczogc3RyaW5nW10sXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGlmICghb2tUZXh0KSB7XG4gICAgICBva1RleHQgPSAnQ3JpYXInO1xuICAgIH1cblxuICAgIGlmICghb2tCdXR0b24pIHtcbiAgICB9XG4gICAgY29uc3QgaW5pdGlhbFN0YXRlOiBhbnkgPSB7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBva1RleHQ6IG9rVGV4dCxcbiAgICAgIGNhbmNlbFRleHQ6IGNhbmNlbFRleHQsXG4gICAgICBva0J1dHRvbjogb2tCdXR0b24sXG4gICAgfTtcbiAgICBjb25zdCBic01vZGFsUmVmOiBCc01vZGFsUmVmID0gdGhpcy5ic01vZGFsU2VydmljZS5zaG93KFNhdmVDb21wb25lbnQsIHtcbiAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiAoPFNhdmVDb21wb25lbnQ+YnNNb2RhbFJlZi5jb250ZW50KS5jb25maXJtUmVzdWx0XG4gICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKHRha2UoMSkpO1xuICB9XG5cbiAgLy8gRXhpYmUgdW1hIG1lc2FnZW0gZG8gdGlwbyBjb25maXJtYcOnw6NvXG4gIHNob3dDb25maXJtKFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIG9rVGV4dD86IHN0cmluZyxcbiAgICBjYW5jZWxUZXh0Pzogc3RyaW5nLFxuICAgIG9rQnV0dG9uPzogRnVuY3Rpb24sXG4gICAgcGFyYW1hdHJvT2tCdXR0b24/OiBib29sZWFuXG4gICk6IE9ic2VydmFibGU8J2NvbmZpcm1hZG8nIHwgJ2NhbmNlbGFkbyc+IHtcbiAgICBpZiAoIW9rVGV4dCkge1xuICAgICAgb2tUZXh0ID0gJ1NpbSc7XG4gICAgfVxuXG4gICAgaWYgKCFjYW5jZWxUZXh0KSB7XG4gICAgICBjYW5jZWxUZXh0ID0gJ0NhbmNlbGFyJztcbiAgICB9XG5cbiAgICBpZiAoIW9rQnV0dG9uKSB7XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlOiBhbnkgPSB7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgb2tUZXh0OiBva1RleHQsXG4gICAgICBjYW5jZWxUZXh0OiBjYW5jZWxUZXh0LFxuICAgICAgb2tCdXR0b246IG9rQnV0dG9uLFxuICAgICAgcGFyYW1ldHJvT2tCdXR0b246IHBhcmFtYXRyb09rQnV0dG9uLFxuICAgIH07XG5cbiAgICBjb25zdCBic01vZGFsUmVmOiBCc01vZGFsUmVmID0gdGhpcy5ic01vZGFsU2VydmljZS5zaG93KENvbmZpcm1Db21wb25lbnQsIHtcbiAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiAoKDxDb25maXJtQ29tcG9uZW50PmJzTW9kYWxSZWYuY29udGVudCkpLmNvbmZpcm1SZXN1bHRcbiAgICAgIC5hc09ic2VydmFibGUoKVxuICAgICAgLnBpcGUodGFrZSgxKSk7XG4gIH1cblxuICAvKipcbiAgICogVXRpbGl6ZSBlc3RlIG3DqXRvZG8gcGFyYSBtb3N0cmFyIG5hIHRlbGEgdW0gbW9kYWwgcXVlIG7Do28gdGVtIGZ1bmRvIGJyYW5jbywgYm9yZGFzIGUgXG4gICAqIGJhY2tkcm9wIChubyBxdWVzaXRvIHNhaXIgZG8gbW9kYWwpXG4gICAqIFxuICAgKiBPIG1vZGFsIHRhbWLDqW0gdmFpIGVzdGFyIGNlbnRyYWxpemFkbyBubyBtZWlvIGRhIHRlbGEgKHZlcnRpY2FsbWVudGUgZSBob3Jpem9udGFsbWVudGUpLlxuICAgKiBAcGFyYW0gZWxlbWVudG8gRWxlbWVudG8gYSBzZXIgbW9zdHJhZG8gbmEgdGVsYS5cbiAgICogQHBhcmFtIGlkIElkIGVzcGVjaWZpY28gYSBlc3RlIG1vZGFsLiBPcGNpb25hbC5cbiAgICogQHJldHVybnMgUmVmZXJlbmNpYSBhbyBtb2RhbCBtb3N0cmFkbyBuYSB0ZWxhLlxuICAgKi9cbiAgc2hvd01vZGFsTG9hZGluZyhlbGVtZW50bzogVGVtcGxhdGVSZWY8YW55PiB8IChuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiB1bmtub3duKSwgZWxlbUlEPzogc3RyaW5nIHwgbnVtYmVyLCBpbml0aWFsU3RhdGU/OiBQYXJ0aWFsPHVua25vd24+KTogQnNNb2RhbFJlZiB7XG5cbiAgICBsZXQgb3B0aW9uczogTW9kYWxPcHRpb25zID0ge1xuICAgICAgaWQ6IGVsZW1JRCxcbiAgICAgIGNsYXNzOiBcIm1vZGFsLWRpYWxvZy1jZW50ZXJlZCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1vZGFsLWhpZGUtYmFja2dyb3VuZFwiLFxuICAgICAgYmFja2Ryb3A6IHRydWUsXG4gICAgICBpZ25vcmVCYWNrZHJvcENsaWNrOiB0cnVlLFxuICAgICAgYW5pbWF0ZWQ6IGZhbHNlLFxuICAgICAgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGVcbiAgICB9IGFzIE1vZGFsT3B0aW9ucztcblxuICAgIHJldHVybiB0aGlzLmJzTW9kYWxTZXJ2aWNlLnNob3coZWxlbWVudG8sIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=
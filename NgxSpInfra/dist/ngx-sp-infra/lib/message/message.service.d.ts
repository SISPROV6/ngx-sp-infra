import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as i0 from "@angular/core";
export declare class MessageService {
    private bsModalService;
    constructor(bsModalService: BsModalService);
    private showAlert;
    showAlertDanger(message: string): void;
    showAlertSuccess(message: string): void;
    showAlertInfo(message: string): void;
    showAlertPrimary(message: string): void;
    showAlertSecondary(message: string): void;
    showAlertWarning(message: string): void;
    showAlertLight(message: string): void;
    showAlertDark(message: string): void;
    showCreate(title: string, message: string, okText: string, cancelText: string, okButton: Function, fields: string[]): Observable<boolean>;
    showConfirm(title: string, message: string, okText?: string, cancelText?: string, okButton?: Function, paramatroOkButton?: boolean): Observable<'confirmado' | 'cancelado'>;
    /**
     * Utilize este método para mostrar na tela um modal que não tem fundo branco, bordas e
     * backdrop (no quesito sair do modal)
     *
     * O modal também vai estar centralizado no meio da tela (verticalmente e horizontalmente).
     * @param elemento Elemento a ser mostrado na tela.
     * @param id Id especifico a este modal. Opcional.
     * @returns Referencia ao modal mostrado na tela.
     */
    showModalLoading(elemento: TemplateRef<any> | (new (...args: any[]) => unknown), elemID?: string | number, initialState?: Partial<unknown>): BsModalRef;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MessageService>;
}

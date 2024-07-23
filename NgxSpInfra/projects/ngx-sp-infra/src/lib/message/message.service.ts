import { Injectable, TemplateRef } from '@angular/core';
import { take } from 'rxjs/operators';

import { Observable } from 'rxjs';

import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { alertIds, alertTypes } from './message-enum';
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { SaveComponent } from './save/save.component';

@Injectable(
  { providedIn: 'root' }
)
export class MessageService {
  constructor(private bsModalService: BsModalService) { }

  // Exibe uma mesagem conforme o tipo (privado)
  private showAlert(
    message: string,
    type: alertTypes,
    dismissTimeout?: number,
    id?: number | undefined
  ) {
    const initialState: any = {
      message: message,
      type: type,
    };

    const bsModalRef: BsModalRef = this.bsModalService.show(AlertComponent, {
      initialState, class: 'modal-md', id: id
    });

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  // Exibe uma mensagem do tipo danger
  showAlertDanger(message: string) {
    this.showAlert(message, alertTypes.DANGER, 0, alertIds.DANGER);
  }

  // Exibe uma mesagem do tipo success
  showAlertSuccess(message: string) {
    this.showAlert(message, alertTypes.SUCCESS, 3000, alertIds.SUCCESS);
  }

  // Exibe uma mesagem do tipo info
  showAlertInfo(message: string) {
    this.showAlert(message, alertTypes.INFO, 3000, alertIds.INFO);
  }
  // Exibe uma mesagem do tipo primary(
  showAlertPrimary(message: string) {
    this.showAlert(message, alertTypes.PRIMARY, 3000, alertIds.PRIMARY);
  }

  // Exibe uma mesagem do tipo secondary(
  showAlertSecondary(message: string) {
    this.showAlert(message, alertTypes.SECONDARY, 3000, alertIds.SECONDARY);
  }
  // Exibe uma mesagem do tipo warning
  showAlertWarning(message: string) {
    this.showAlert(message, alertTypes.WARNING, 0, alertIds.WARNING);
  }

  // Exibe uma mesagem do tipo light
  showAlertLight(message: string) {
    this.showAlert(message, alertTypes.LIGHT, 0, alertIds.LIGHT);
  }

  // Exibe uma mesagem do tipo dark
  showAlertDark(message: string) {
    this.showAlert(message, alertTypes.DARK, 0, alertIds.DARK);
  }
  // Exibe um modal de inserção no banco
  showCreate(
    title: string,
    message: string,
    okText: string,
    cancelText: string,
    okButton: Function,
    fields: string[],
  ): Observable<boolean> {
    if (!okText) {
      okText = 'Criar';
    }

    if (!okButton) {
    }
    const initialState: any = {
      title: title,
      message: message,
      fields: fields,
      okText: okText,
      cancelText: cancelText,
      okButton: okButton,
    };
    const bsModalRef: BsModalRef = this.bsModalService.show(SaveComponent, {
      initialState,
    });

    return (<SaveComponent>bsModalRef.content).confirmResult
      .asObservable()
      .pipe(take(1));
  }

  // Exibe uma mesagem do tipo confirmação
  showConfirm(
    title: string,
    message: string,
    okText?: string,
    cancelText?: string,
    okButton?: Function,
    paramatroOkButton?: boolean
  ): Observable<'confirmado' | 'cancelado'> {
    if (!okText) {
      okText = 'Sim';
    }

    if (!cancelText) {
      cancelText = 'Cancelar';
    }

    if (!okButton) {
    }

    const initialState: any = {
      title: title,
      message: message,
      okText: okText,
      cancelText: cancelText,
      okButton: okButton,
      parametroOkButton: paramatroOkButton,
    };

    const bsModalRef: BsModalRef = this.bsModalService.show(ConfirmComponent, {
      initialState,
    });

    return ((<ConfirmComponent>bsModalRef.content)).confirmResult
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
  showModalLoading(elemento: TemplateRef<any> | (new (...args: any[]) => unknown), elemID?: string | number, initialState?: Partial<unknown>): BsModalRef {

    let options: ModalOptions = {
      id: elemID,
      class: "modal-dialog-centered justify-content-center modal-hide-background",
      backdrop: true,
      ignoreBackdropClick: true,
      animated: false,
      initialState: initialState
    } as ModalOptions;

    return this.bsModalService.show(elemento, options);
  }
}

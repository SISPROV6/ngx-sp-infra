import { Component, Injectable, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'any'
})
export class ModalUtilsService {
  constructor( private _bsModalService: BsModalService, private _bsModalref: BsModalRef ) { }

  /**
   * Método simples com o objetivo de abrir os modais no centro da tela.
   * @param template Template HTML do modal que será aberto.
   * @param modalID ID do modal que será aberto, para que possa ser referenciado depois.
   * @param customClass Classes customizadas para o modal, valor default é "modal-dialog-centered"
  */
 public openModal(template: TemplateRef<any>, modalID: number, customClass: string = "modal-dialog-centered"): void {
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
 public openModalCustom(template: TemplateRef<any>, modalID: number, options: ModalOptions = { id: modalID, class: "modal-dialog-centered", ignoreBackdropClick: false, keyboard: false }): void {
   this._bsModalService.show(template, options);
 }


 public openInitialStateModal(component: any | TemplateRef<any>, id?: any, initialState?: any, classes: string = "modal-dialog-centered"): void | BsModalRef {
  if (component) {
    this._bsModalref = this._bsModalService.show(component, {
      id: id,
      initialState: initialState,
      class: classes
    });
    return this._bsModalref;
  }

  return;
 }


  /**
   * Método para fechar um modal que estiver aberto na tela
   * @param modalID ID do modal que será fechado, é necessário um ID para fechar o modal correto.
  */
  public closeModal(modalID: number): void {
     this._bsModalService.hide(modalID);
  }

}

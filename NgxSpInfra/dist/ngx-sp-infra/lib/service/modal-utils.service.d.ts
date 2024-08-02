import { TemplateRef } from '@angular/core';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import * as i0 from "@angular/core";
export declare class ModalUtilsService {
    private _bsModalService;
    constructor(_bsModalService: BsModalService);
    /**
     * Método simples com o objetivo de abrir os modais no centro da tela.
     * @param template Template HTML do modal que será aberto.
     * @param modalID ID do modal que será aberto, para que possa ser referenciado depois.
     * @param customClass Classes customizadas para o modal, valor default é "modal-dialog-centered"
    */
    openModal(template: TemplateRef<any>, modalID: number, customClass?: string): void;
    /**
     * Método simples com o objetivo de abrir os modais no centro da tela.
     * @param template Template HTML do modal que será aberto.
     * @param modalID ID do modal que será aberto, para que possa ser referenciado depois.
     * @param {ModalOptions} options - Estrutura de opções informadas para configurar o modal mais aprofundadamente
    */
    openModalCustom(template: TemplateRef<any>, modalID: number, options?: ModalOptions): void;
    /**
     * Método para fechar um modal que estiver aberto na tela
     * @param modalID ID do modal que será fechado, é necessário um ID para fechar o modal correto.
    */
    closeModal(modalID: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalUtilsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModalUtilsService>;
}

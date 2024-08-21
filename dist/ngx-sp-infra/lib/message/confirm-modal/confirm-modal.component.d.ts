import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ConfirmModalComponent {
    constructor();
    _closingModal: EventEmitter<boolean>;
    modalSubject: string;
    modalType: 'Excluir' | 'Inativar' | 'Ativar';
    genreAndPluralitySubject: 'masc singular' | 'masc plural' | 'fem singular' | 'fem plural';
    customMessage: string;
    customTitle: string;
    customButton: string;
    customButtonLoading: string;
    importantMessage: boolean;
    showSpinner: boolean;
    /**
     * Este método recebe uma palavra (podendo ser uma palavra composta), vai
     * separá-la em outras palavras caso ela seja uma palavra composta, irá percorrer
     * as palavras separadas, colocando a inicial de cada palavra em maiúsculo, e
     * depois vai uní-las em uma nova palavra, que terá todas as primeiras letras em
     * maiúsculo para mostrar no título.
     * @param fateWord Palavra (podendo ser ou não palavra composta) que
     * será alterada para ter suas iniciais maiúsculas.
     * @returns Palavra com iniciais maiúscula.
     */
    firstLetterIsLowercase(fateWord: string): string;
    /**
     * Função com o objetivo de mandar um evento para o componente pai para que
     * ele feche o modal.
     */
    closeModal(isExecuteAction?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmModalComponent, "app-confirm-modal", never, { "modalSubject": { "alias": "modalSubject"; "required": false; }; "modalType": { "alias": "modalType"; "required": false; }; "genreAndPluralitySubject": { "alias": "genreAndPluralitySubject"; "required": false; }; "customMessage": { "alias": "customMessage"; "required": false; }; "customTitle": { "alias": "customTitle"; "required": false; }; "customButton": { "alias": "customButton"; "required": false; }; "customButtonLoading": { "alias": "customButtonLoading"; "required": false; }; "importantMessage": { "alias": "importantMessage"; "required": false; }; }, { "_closingModal": "_closingModal"; }, never, never, false, never>;
}

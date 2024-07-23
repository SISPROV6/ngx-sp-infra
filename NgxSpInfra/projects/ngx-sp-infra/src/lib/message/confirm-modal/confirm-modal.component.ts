import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

  constructor() { }


  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  @Output() public _closingModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  // #endregion PRIVATE

  // #region PUBLIC
  @Input() public modalSubject: string;
  @Input() public modalType: 'Excluir' | 'Inativar' | 'Ativar';
  @Input() public genreAndPluralitySubject: 'masc singular' | 'masc plural' |
    'fem singular' | 'fem plural' = 'masc singular';

  // Estas variáveis abaixo servem para deixar o mais genérico possível o modal de confirmalçao
  @Input() public customMessage: string = '';
  @Input() public customTitle: string = '';
  @Input() public customButton: string = '';
  @Input() public customButtonLoading: string = '';

  @Input() public importantMessage: boolean = false;

  public showSpinner: boolean = false;
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> UTILITIES <==========
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
  public firstLetterIsLowercase(fateWord: string): string {
    const fateWordSplit: string[] = fateWord.split(" ");

    for (let i = 0; i < fateWordSplit.length; i++) {
      fateWordSplit[i] = fateWordSplit[i][0].toLowerCase() + fateWordSplit[i].substring(1);
    }

    return fateWordSplit.join(" ");
  }
  // #endregion ==========> UTILITIES <==========


  // #region ==========> MODALS <==========
  /**
   * Função com o objetivo de mandar um evento para o componente pai para que
   * ele feche o modal.
   */
  public closeModal(isExecuteAction: boolean = false): void {
    this._closingModal.emit(isExecuteAction);
  }
  // #endregion ==========> MODALS <==========


}

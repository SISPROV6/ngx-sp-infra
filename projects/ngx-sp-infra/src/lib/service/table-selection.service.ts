import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableSelectionService {

  // #region ==========> PROPERTIES <==========
  
  // #region PRIVATE
  private _selecaoGeral: boolean = false;
  // #endregion PRIVATE

  // #region PUBLIC
  public selecaoMap: Map<string | number, boolean> = new Map<string | number, boolean>();

  public get selecaoGeral(): boolean { return this._selecaoGeral; }
  public set selecaoGeral(value: boolean) { this._selecaoGeral = value; }
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor() { }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========
  public initSelecao(list?: any[], idColumnName: string = "id"): Map<string | number, boolean> {
    if (list) {
      list.forEach(item => { this.selecaoMap.set(item[idColumnName], false) });
      return this.selecaoMap;
    }

    return new Map<string | number, boolean>();
  }
  

  public inverterSelecao(id: string | number) {
    const selecionado = this.selecaoMap.get(id) || false;
    this.selecaoMap.set(id, !selecionado);

    const todosSelecionados: boolean = Array.from(this.selecaoMap.values()).every(item => item);

    if (todosSelecionados) { this.selecaoGeral = true; }
    else { this.selecaoGeral = false; }
  }

  public definirSelecaoTotal(list?: any[], selecao?: boolean, idColumnName: string = "id") {
    if (list) {
      list.forEach(item => { this.selecaoMap.set(item[idColumnName], selecao ?? false) });
    }
  }
  // #endregion ==========> UTILS <==========

}

import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';

import { IconsList } from '../../models/icons/icon.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'lib-icon',
  template: `
    <span [style.color]="color" [innerHTML]="safeSVG"></span>
  `,
  styles: ``
})
export class LibIconsComponent implements OnInit, OnChanges {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private iconsList: IconsList;
  // #endregion PRIVATE

  // #region PUBLIC

  /** (obrigatório) Nome do ícone */
  @Input({ required: true }) public iconName: string;

      /** Cor do ícone
       * Paleta de cores:
       * @argument 'white' - #FFFFFF
       * @argument 'blue' - #3767b2
       * @argument 'gray' - #6C757D
       * @argument 'light-gray' - #CED4DA
       * @argument 'green' - #0F5132
       * @argument 'light-blue' - #3767B2
       * @argument 'yellow' - #FFC107
       * @argument 'red' - #B23737
       * @argument 'currentColor' - currentColor
       * @argument string - HEX da cor específica
      */
    @Input()
    public get iconColor(): 'white' | 'blue' | 'gray' | 'light-gray' | 'green' | 'light-blue' | 'yellow' | 'red' | 'currentColor' | string { return this.color; }
    public set iconColor(value: 'white' | 'blue' | 'gray' | 'light-gray' | 'green' | 'light-blue' | 'yellow' | 'red' | 'currentColor' | string) {
      switch (value) {
        case "white": this.color = "#FFFFFF"; break;
        case "blue": this.color = "#3767b2"; break;
        case "gray": this.color = "#6C757D"; break;
        case "light-gray": this.color = "#CED4DA"; break;
        case "green": this.color = "#0F5132"; break;
        case "light-blue": this.color = "#3767B2"; break;
        case "yellow": this.color = "#FFC107"; break;
        case "red": this.color = "#B23737"; break;
        case "currentColor": this.color = "currentColor"; break;
        default: this.color = value; break;
      }
    }

    /** Tamanho do ícone
     * Tamanhos disponíveis:
     * @argument 'default' - 24px
     * @argument 'medium-small' - 20px | Será depreciado em breve!
     * @argument 'small' - 18px
     * @argument number - número em pixels | Preferencialmente não utilizar!
    */
    @Input()
    public get iconSize(): 'default' | 'medium-small' | 'small' | number { return this.size; }
    public set iconSize(value: 'default' | 'medium-small' | 'small' | number) {
      switch (value) {
        case "default": this.size = 24; break;
        case "medium-small": this.size = 20; break;
        case "small": this.size = 18; break;
        default: this.size = value as number; break;
      }
    }

    @Input()
    public get iconFill(): boolean { return this.fill; }
    public set iconFill(value: boolean) { this.fill = value; }


    protected safeSVG: SafeHtml;
    protected size: number = 24;
    protected fill: boolean = false;
    protected color: string = "currentColor";
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor(private _sanitizer: DomSanitizer) {
    this.iconsList = new IconsList(this.size, this.fill);
  }

  ngOnInit(): void {
    this.iconsList = new IconsList(this.size, this.fill);
    this.checkName();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['iconName']) this.checkName();
    else {
      switch (this.iconColor) {
        case "white": this.color = "#212529"; break;
        case "blue": this.color = "#213B70"; break;
        case "gray": this.color = "#212529"; break;
        case "lightgray": this.color = "#CED4DA"; break;
        case "green": this.color = "#D1E7DD"; break;
        case "light-blue": this.color = "#3767B2"; break;
        case "yellow": this.color = "#664D03"; break;
        case "red": this.color = "#842029"; break;
        case "currentColor": this.color = "currentColor"; break;
        default: this.color = this.iconColor; break;
      }
  
      this.iconsList = new IconsList(this.size, this.fill);
      this.getSVG();
    }
  }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========

  /** Valida se o nome informado do ícone existe na lista, caso contrário mostra um erro no console */
  private checkName(): void {
    let hasIcon: boolean = this.iconsList.getIcon(this.iconName) ? true : false;
    if (this.iconsList && !hasIcon) { console.error(`O ícone informado "${this.iconName}" não existe, utilize outro!`); }

    this.getSVG();
  }


  public getSVG(): void {
    let unsanitizedSVG = this.iconsList.getIcon(this.iconName) ? this.iconsList.getIcon(this.iconName)!.svg ?? "" : "";
    this.safeSVG = this._sanitizer.bypassSecurityTrustHtml(unsanitizedSVG);
  }
  // #endregion ==========> UTILS <==========

}

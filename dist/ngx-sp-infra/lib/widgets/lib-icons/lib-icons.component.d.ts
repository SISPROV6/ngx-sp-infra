import { SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class LibIconsComponent implements OnInit, OnChanges {
    private _sanitizer;
    private iconsList;
    /** (obrigatório) Nome do ícone */
    iconName: string;
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
    get iconColor(): 'white' | 'blue' | 'gray' | 'light-gray' | 'green' | 'light-blue' | 'yellow' | 'red' | 'currentColor' | string;
    set iconColor(value: 'white' | 'blue' | 'gray' | 'light-gray' | 'green' | 'light-blue' | 'yellow' | 'red' | 'currentColor' | string);
    /** Tamanho do ícone
     * Tamanhos disponíveis:
     * @argument 'default' - 24px
     * @argument 'medium-small' - 20px | Será depreciado em breve!
     * @argument 'small' - 18px
     * @argument number - número em pixels | Preferencialmente não utilizar!
    */
    get iconSize(): 'default' | 'medium-small' | 'small' | number;
    set iconSize(value: 'default' | 'medium-small' | 'small' | number);
    protected safeSVG: SafeHtml;
    protected size: number;
    protected color: string;
    constructor(_sanitizer: DomSanitizer);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** Valida se o nome informado do ícone existe na lista, caso contrário mostra um erro no console */
    private checkName;
    getSVG(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LibIconsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LibIconsComponent, "lib-icon", never, { "iconName": { "alias": "iconName"; "required": true; }; "iconColor": { "alias": "iconColor"; "required": false; }; "iconSize": { "alias": "iconSize"; "required": false; }; }, {}, never, never, false, never>;
}

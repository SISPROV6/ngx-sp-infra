import { AfterViewInit, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LoadingBtnDirective implements OnInit, AfterViewInit {
    private _elementRef;
    private _renderer;
    private _isLoading;
    private _originalContent;
    /** Texto ao trocar o botão para carregamento
     * @example "Salvando..." */
    loadingText: string;
    /** Tipo de spinner a ser exibido no botão
     * @default "border" */
    loadingType: "border" | "grow";
    get isLoading(): boolean;
    set isLoading(value: boolean | string);
    /**
     * @param _elementRef - Referência ao elemento DOM ao qual a diretiva está associada.
     * @param _renderer - Serviço Angular para manipulação segura do DOM. */
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private setLoadingState;
    private setDefaultState;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingBtnDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LoadingBtnDirective, "button[libLoading], a[libLoading]", never, { "loadingText": { "alias": "loadingText"; "required": false; }; "loadingType": { "alias": "loadingType"; "required": false; }; "isLoading": { "alias": "libLoading"; "required": false; }; }, {}, never, never, false, never>;
}

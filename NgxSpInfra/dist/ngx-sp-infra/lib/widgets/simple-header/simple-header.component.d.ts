import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SimpleHeaderComponent implements OnInit, OnChanges {
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    breadcrumbList: string[];
    pageTitle: string | undefined;
    /** Modo em que o Header será inicializado
     * @default "list" */
    mode: "add" | "edit" | "list";
    /** Deve ser informada caso você deseje que um dos botões seja escondido */
    hideButton?: string[];
    formGroup?: FormGroup;
    showSpinner: boolean;
    /** Emissor de evento ao clicar no "Cancelar" */
    onReturn: EventEmitter<void>;
    /** Emissor de evento ao clicar no "Salvar" em modo de criação */
    onCreate: EventEmitter<void>;
    /** Emissor de evento ao clicar no "Salvar" em modo de edição */
    onUpdate: EventEmitter<void>;
    /** Emite um evento para retornar à página anterior */
    return(): void;
    /** Emite um evento quando o botão de "Salvar" em modo de criação foi clicado */
    create(): void;
    /** Emite um evento quando o botão de "Salvar" em modo de edição foi clicado */
    update(): void;
    setSaveText(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SimpleHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SimpleHeaderComponent, "lib-header", never, { "breadcrumbList": { "alias": "breadcrumbList"; "required": true; }; "pageTitle": { "alias": "pageTitle"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "hideButton": { "alias": "hideButton"; "required": false; }; "formGroup": { "alias": "formGroup"; "required": false; }; "showSpinner": { "alias": "showSpinner"; "required": false; }; }, { "onReturn": "onReturn"; "onCreate": "onCreate"; "onUpdate": "onUpdate"; }, never, ["[customButton1]", "[customButton2]", "[customButton3]", "[customButton4]"], false, never>;
}

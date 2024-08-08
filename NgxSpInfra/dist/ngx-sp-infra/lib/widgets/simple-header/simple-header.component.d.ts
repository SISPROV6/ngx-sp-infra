import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SimpleHeaderComponent implements OnInit, OnChanges {
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    breadcrumbList: string[];
    pageTitle: string | undefined;
    /**
     * Modo em que o Header será inicializado
     * @default "list"
    */
    mode: "add" | "edit" | "list";
    titulo: string;
    /**
     * Define se o botão de Auditoria estará visível
     * @default false
    */
    visibleAuditBtn: boolean;
    /**
     * Informa a opção de Menu selecionada para chegar à tela
     * @default ""
    */
    menuGroup: string;
    /**
     * Opção que deve ser informada caso você deseje que um dos botões seja escondido
     * @default null
     */
    buttonToOmit: "Todos" | "Cancelar" | "Salvar" | null;
    useCustomPageTitle: boolean;
    customPageTitle: string;
    showSpinner: boolean;
    /** Deve ser informada para sobreescrever o título principal em situações de múltiplos títulos com base em condições */
    pageTitleSecondary: string;
    customBreadcrumbEnd: string;
    customBreadcrumbMode: string;
    /** Emissor de evento para Retorno */
    onReturn: EventEmitter<void>;
    /** Emissor de evento para Criação */
    onCreate: EventEmitter<void>;
    /** Emissor de evento para Atualização */
    onUpdate: EventEmitter<void>;
    pageAction: string;
    /** Emite um evento para retornar à página anterior */
    return(): void;
    /** Emite um evento para informar quando o botão de "Criar" foi clicado */
    create(): void;
    /** Emite um evento para informar quando o botão de "Atualizar" foi clicado */
    update(): void;
    redirectTextByMode(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SimpleHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SimpleHeaderComponent, "lib-header", never, { "breadcrumbList": { "alias": "breadcrumbList"; "required": true; }; "pageTitle": { "alias": "pageTitle"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "titulo": { "alias": "titulo"; "required": false; }; "visibleAuditBtn": { "alias": "visibleAuditBtn"; "required": false; }; "menuGroup": { "alias": "menuGroup"; "required": false; }; "buttonToOmit": { "alias": "buttonToOmit"; "required": false; }; "useCustomPageTitle": { "alias": "useCustomPageTitle"; "required": false; }; "customPageTitle": { "alias": "customPageTitle"; "required": false; }; "showSpinner": { "alias": "showSpinner"; "required": false; }; "pageTitleSecondary": { "alias": "pageTitleSecondary"; "required": false; }; "customBreadcrumbEnd": { "alias": "customBreadcrumbEnd"; "required": false; }; "customBreadcrumbMode": { "alias": "customBreadcrumbMode"; "required": false; }; }, { "onReturn": "onReturn"; "onCreate": "onCreate"; "onUpdate": "onUpdate"; }, never, ["*"], false, never>;
}

import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @description Este arquivo contém a implementação do componente SimpleHeaderComponent, um cabeçalho genérico
 * para páginas, com suporte a breadcrumbs, título dinâmico, modos de exibição, e botões de ação.
 *
 * @component SimpleHeaderComponent
 * @selector lib-header
 *
 * @description
 * O componente SimpleHeaderComponent é projetado para fornecer um cabeçalho reutilizável para páginas,
 * suportando breadcrumbs, diferentes modos de exibição (adicionar, editar, listar) e botões de ação.
 * Ele é flexível o suficiente para ser usado em várias páginas, ajustando-se automaticamente às necessidades
 * da página e do formulário.
 *
 * ## Funcionalidades:
 * - Exibição de breadcrumbs para navegação contextual.
 * - Exibição dinâmica de título com base no modo de exibição (adicionar, editar, listar).
 * - Inclusão de botões customizáveis ao lado do título, com suporte para botões customizados via ng-content.
 * - Suporte a validação de formulário, desabilitando o botão de salvar se o formulário for inválido.
 * - Exibição opcional de um spinner de carregamento no botão de salvar.
 *
 * ## Inputs:
 * - `breadcrumbList` (string[]): Lista de strings para preencher o breadcrumb.
 * - `pageTitle` (string): Título principal da página.
 * - `mode` ("add" | "edit" | "list"): Modo em que o Header será inicializado.
 * - `hideButtons` (string[]): Lista de botões a serem ocultados (opcional).
 * - `formGroup` (FormGroup): Formulário associado ao cabeçalho para controle de estado dos botões (opcional).
 * - `showSpinner` (boolean): Booleano para exibir um spinner de carregamento no botão de salvar.
 *
 * ## Outputs:
 * - `onReturn` (EventEmitter<void>): Evento emitido ao clicar no botão "Cancelar".
 * - `onCreate` (EventEmitter<void>): Evento emitido ao clicar no botão "Salvar" em modo de criação.
 * - `onUpdate` (EventEmitter<void>): Evento emitido ao clicar no botão "Salvar" em modo de edição.
 *
 * ## Métodos Públicos:
 * - `return()`: Emite um evento para retornar à página anterior.
 * - `create()`: Emite um evento ao clicar no botão de "Salvar" em modo de criação.
 * - `update()`: Emite um evento ao clicar no botão de "Salvar" em modo de edição.
 *
 * @note Este componente é flexível e pode ser facilmente adaptado para diferentes layouts e necessidades de página.
 */
export declare class SimpleHeaderComponent implements OnInit, OnChanges {
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** Lista de strings a serem informadas para preencher o breadcrumb corretamente */
    breadcrumbList: string[];
    /** Título principal da página
     * @default "Título desconhecido..." */
    pageTitle: string;
    /** Modo em que o Header será inicializado.
     * Impacta em algumas situações como por exemplo a exibição dos botões padrão e o título
     * @default "list" */
    mode: "add" | "edit" | "list";
    /** Deve ser informada caso você deseje que um dos botões seja escondido */
    hideButtons?: string[];
    /** FormGroup deve ser informado caso deseje que o header tenha alguma interação com o formulário da tela (ex.: botão de Salvar desabilitado em caso de form inválido) */
    formGroup?: FormGroup;
    /** Booleano para informar em caso de exibir o spinner no botão de Salvar */
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
    static ɵcmp: i0.ɵɵComponentDeclaration<SimpleHeaderComponent, "lib-header", never, { "breadcrumbList": { "alias": "breadcrumbList"; "required": true; }; "pageTitle": { "alias": "pageTitle"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "hideButtons": { "alias": "hideButtons"; "required": false; }; "formGroup": { "alias": "formGroup"; "required": false; }; "showSpinner": { "alias": "showSpinner"; "required": false; }; }, { "onReturn": "onReturn"; "onCreate": "onCreate"; "onUpdate": "onUpdate"; }, never, ["[customButton1]", "[customButton2]", "[customButton3]", "[customButton4]", "[customButton5]"], false, never>;
}

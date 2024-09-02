import { EventEmitter, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { RecordCombobox } from '../../models/combobox/record-combobox';
import * as i0 from "@angular/core";
/**
 * @component LibComboboxComponent
 * @selector lib-combobox
 *
 * @description
 * O componente LibComboboxComponent é projetado para fornecer aos usuários uma interface para pesquisar e selecionar itens de uma lista.
 * Ele suporta a filtragem de itens com base na entrada do usuário, permitindo uma seleção mais fácil em listas extensas.
 *
 * ## Funcionalidades:
 * - Pesquisa e filtragem de itens na lista do combobox.
 * - Seleção de itens com feedback visual.
 * - Emissão de eventos personalizados para interações do usuário, como recarregar a lista ou selecionar um item.
 * - Ajuste dinâmico da largura do dropdown para corresponder ao input principal.
 * - Inicialização de um valor selecionado, se fornecido.
 *
 * ## Inputs:
 * - `outerControl` (FormControl | AbstractControl): Control para seleção dos valores, atualizará automaticamente o control do componente pai também
 * - `comboboxList` (RecordCombobox[]): Lista de registros que serão exibidos no combo, enquanto eles estiverem carregando será exibido um spinner
 * - `labelText` (string): Texto do rótulo que será exibido acima do combo. Caso não informado nada será exibido
 * - `disabled` (boolean): Define se o campo está desabilitado. Deve ser usado para validações de habilitação dinâmica do campo
 * - `libRequired` (boolean): Define se o campo é obrigatório, vai exibir o '*' vermelho ao lado do label (se ele estiver presente)
 * - `mainInputPlaceholder` (string): Placeholder do campo principal do combo
 * - `searchInputPlaceholder` (string): Placeholder do campo de pesquisa dentro do combo
 * - `colorTheme` ("primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"): Define o tema de cor do componente, como "primary", "success", ou "danger"
 *
 * ## Outputs:
 * - `onReloadList` (EventEmitter<string>): Evento emitido quando a lista precisa ser recarregada.
 */
export declare class LibComboboxComponent {
    private _disabled?;
    private _ariaExpanded;
    private _subscription;
    private _outerControl;
    /** (obrigatório) Control para seleção dos valores, atualizará automaticamente o control do componente pai também
     * @alias 'control'
     * @type {FormControl<any> | AbstractControl<any>} */
    set outerControl(value: FormControl<any> | AbstractControl<any>);
    get outerControl(): FormControl<any>;
    /** (obrigatório) Lista de registros que serão exibidos no combo, enquanto eles estiverem carregando será exibido um spinner
     * @alias 'list'
     * @type {RecordCombobox[]} */
    comboboxList?: RecordCombobox[];
    /** (opcional) Texto do rótulo que será exibido acima do combo. Caso não informado nada será exibido
     * @type {string} */
    labelText?: string;
    /** (opcional) Define se o campo é obrigatório, vai exibir o '*' vermelho ao lado do label (se ele estiver presente)
     * @type {boolean}
     * @default false */
    libRequired?: boolean;
    /** (opcional) Define se o campo está desabilitado. Deve ser usado para validações de habilitação dinâmica do campo
     * @type {boolean}
     * @default false */
    get disabled(): boolean;
    set disabled(value: boolean | undefined);
    /** (opcional) Placeholder do campo principal do combo
     * @alias 'mainPlaceholder'
     * @type {string}
     * @default "Selecione uma opção..." */
    mainInputPlaceholder?: string;
    /** (opcional) Placeholder do campo de pesquisa dentro do combo
     * @alias 'searchPlaceholder'
     * @type {string}
     * @default "Pesquisa..." */
    searchInputPlaceholder?: string;
    /** (opcional) Define o tema de cor do componente, como "primary", "success", ou "danger"
     * @alias 'theme'
     * @type {string}
     * @default "primary"
    */
    colorTheme?: string;
    /** Evento emitido ao recarregar a lista de registros
     * @example Ao ser emitido, o componente pai pode refazer o GET da lista, por exemplo.
     * @emits EventEmitter<string> que leva o valor string da pesquisa feita para ser enviada para o GET
     * @type {EventEmitter<string>} */
    onReloadList: EventEmitter<string>;
    onChange: EventEmitter<string | number | null>;
    private _mainInput;
    private _dropdownMenu;
    textoPesquisa: string;
    get ariaExpanded(): boolean;
    set ariaExpanded(value: boolean);
    innerControl: FormControl;
    isInvalid: boolean;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onResize(event: Event): void;
    setValue(item: RecordCombobox): void;
    clearValue(): void;
    private initializeSelectedValue;
    private adjustDropdownWidth;
    private setValidator;
    private setIsInvalid;
    reloadList(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LibComboboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LibComboboxComponent, "lib-combobox", never, { "outerControl": { "alias": "control"; "required": true; }; "comboboxList": { "alias": "list"; "required": true; }; "labelText": { "alias": "labelText"; "required": false; }; "libRequired": { "alias": "libRequired"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "mainInputPlaceholder": { "alias": "mainPlaceholder"; "required": false; }; "searchInputPlaceholder": { "alias": "searchPlaceholder"; "required": false; }; "colorTheme": { "alias": "theme"; "required": false; }; }, { "onReloadList": "onReloadList"; "onChange": "onChange"; }, never, ["[btnLeft]", "[btnRight]"], false, never>;
}

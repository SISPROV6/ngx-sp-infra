import { EventEmitter, SimpleChanges } from '@angular/core';
import { RecordCombobox } from '../../models/combobox/record-combobox';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * @file lib-combobox.component.ts
 * @description Este arquivo contém a implementação do componente LibComboboxComponent, que é um componente de interface do usuário
 * para realizar pesquisas e seleções em uma lista de opções apresentada em um combobox.
 *
 * @component ComboboxComponent
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
 * - `formControl` (FormControl | AbstractControl): Control para seleção dos valores.
 * - `comboboxList` (RecordCombobox[]): Array de objetos representando os itens disponíveis para seleção.
 * - `labelText` (string): Texto de etiqueta associado ao combobox.
 * - `colorTheme` ("primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"): Tema de cores para o componente.
 * - `mainInputPlaceholder` (string): Texto de espaço reservado para o input principal.
 * - `searchInputPlaceholder` (string): Texto de espaço reservado para o input de pesquisa.
 *
 * ## Outputs:
 * - `onReloadList` (EventEmitter<string>): Evento emitido quando a lista precisa ser recarregada.
 * - `controlValueChange` (EventEmitter<FormControl>): Evento emitido quando um item é selecionado.
 */
export declare class LibComboboxComponent {
    private _ariaExpanded;
    private _subscription;
    set formControl(value: FormControl<any> | AbstractControl<any>);
    get formControl(): FormControl<any>;
    comboboxList: RecordCombobox[];
    labelText?: string;
    libRequired?: boolean;
    disabled?: boolean;
    mainInputPlaceholder?: string;
    searchInputPlaceholder?: string;
    colorTheme?: string;
    onReloadList: EventEmitter<string>;
    controlValueChange: EventEmitter<FormControl<any>>;
    private _mainInput;
    private _dropdownMenu;
    selectedText?: string;
    textoPesquisa: string;
    get ariaExpanded(): boolean;
    set ariaExpanded(value: boolean);
    private idControl;
    filterForm: FormGroup;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    setFilterValue(item?: RecordCombobox): void;
    private initializeSelectedValue;
    private adjustDropdownWidth;
    reloadList(search: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LibComboboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LibComboboxComponent, "lib-combobox", never, { "formControl": { "alias": "control"; "required": true; }; "comboboxList": { "alias": "list"; "required": true; }; "labelText": { "alias": "labelText"; "required": false; }; "libRequired": { "alias": "libRequired"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "mainInputPlaceholder": { "alias": "mainInputPlaceholder"; "required": false; }; "searchInputPlaceholder": { "alias": "searchInputPlaceholder"; "required": false; }; "colorTheme": { "alias": "colorTheme"; "required": false; }; }, { "onReloadList": "onReloadList"; "controlValueChange": "controlValueChange"; }, never, ["[btnLeft]", "[btnRight]"], false, never>;
}

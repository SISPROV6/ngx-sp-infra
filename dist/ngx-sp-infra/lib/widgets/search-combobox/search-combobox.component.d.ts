import { AfterViewInit, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { RecordCombobox } from "../../models/combobox/record-combobox";
import * as i0 from "@angular/core";
/**
 * @file search-combobox.component.ts
 * @description Este arquivo contém a implementação do componente SearchComboboxComponent, que é um componente de interface do usuário
 * para realizar pesquisas e seleções em uma lista de opções apresentada em um combobox.
 *
 * @component SearchComboboxComponent
 * @selector lib-search-combobox
 * @templateUrl ./search-combobox.component.html
 * @styleUrl ./search-combobox.component.scss
 *
 * @description
 * O componente SearchComboboxComponent é projetado para fornecer aos usuários uma interface para pesquisar e selecionar itens de uma lista.
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
 * - `comboboxList` (RecordCombobox[]): Array de objetos representando os itens disponíveis para seleção.
 * - `labelText` (string): Texto de etiqueta associado ao combobox.
 * - `initializedValueID` (string | number): ID de um item inicialmente selecionado no combobox.
 * - `colorTheme` ("primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"): Tema de cores para o componente.
 * - `mainInputPlaceholder` (string): Texto de espaço reservado para o input principal.
 * - `searchInputPlaceholder` (string): Texto de espaço reservado para o input de pesquisa.
 *
 * ## Outputs:
 * - `onReloadList` (EventEmitter<string>): Evento emitido quando a lista precisa ser recarregada.
 * - `onSelectItem` (EventEmitter<any>): Evento emitido quando um item é selecionado.
 *
 * ## Propriedades:
 * - `selectedItem` (RecordCombobox): Getter e Setter para o item selecionado atualmente.
 * - `FormUtils` (typeof FormUtils): Getter para utilitários de formulário.
 * - `_searchInput` (string): Getter para o valor do input de pesquisa.
 * - `filterForm` (FormGroup): Grupo de formulário para o filtro de pesquisa.
 *
 * ## Métodos Públicos:
 * - `reloadList(search: string)`: Método para recarregar a lista de itens com base na pesquisa fornecida.
 * - `setFilterValue(item?: RecordCombobox)`: Método para definir o valor do filtro com base no item selecionado.
 *
 * ## Eventos:
 * - `ngOnInit()`: Inicializa o componente.
 * - `ngAfterViewInit()`: Ajusta a largura do dropdown após a visualização do componente.
 * - `ngOnChanges(changes: SimpleChanges)`: Responde a mudanças nas propriedades de entrada.
 *
 * ## Utilitários:
 * - `createFilterForm()`: Cria o formulário de filtro para a pesquisa.
 * - `initializeSelectedValue()`: Inicializa o valor selecionado no combobox, se fornecido.
 * - `adjustDropdownWidth()`: Ajusta a largura do dropdown para corresponder à largura do input principal.
 */
export declare class SearchComboboxComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private _formBuilder;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private _selectedItem;
    private _ariaExpanded;
    private _subscription;
    formControl: FormControl;
    controlType: "ngModel" | "formControl";
    comboboxList: RecordCombobox[];
    labelText: string;
    libRequired: boolean;
    disabled: boolean;
    initializedValueID: string | number;
    mainInputPlaceholder: string;
    searchInputPlaceholder: string;
    colorTheme: string;
    onReloadList: EventEmitter<string>;
    onSelectItem: EventEmitter<any>;
    controlValueChange: EventEmitter<FormControl<any>>;
    private _mainInput;
    private _dropdownMenu;
    selectedText?: string;
    textoPesquisa: string;
    get ariaExpanded(): boolean;
    set ariaExpanded(value: boolean);
    get selectedItem(): RecordCombobox;
    set selectedItem(value: RecordCombobox);
    private idControl;
    filterForm: FormGroup;
    setFilterValue(item?: RecordCombobox): void;
    private initializeSelectedValue;
    private adjustDropdownWidth;
    reloadList(search: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchComboboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchComboboxComponent, "lib-search-combobox", never, { "formControl": { "alias": "control"; "required": false; }; "controlType": { "alias": "controlType"; "required": true; }; "comboboxList": { "alias": "comboboxList"; "required": true; }; "labelText": { "alias": "labelText"; "required": false; }; "libRequired": { "alias": "libRequired"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "initializedValueID": { "alias": "initializedValueID"; "required": false; }; "mainInputPlaceholder": { "alias": "mainInputPlaceholder"; "required": false; }; "searchInputPlaceholder": { "alias": "searchInputPlaceholder"; "required": false; }; "colorTheme": { "alias": "colorTheme"; "required": false; }; }, { "onReloadList": "onReloadList"; "onSelectItem": "onSelectItem"; "controlValueChange": "controlValueChange"; }, never, ["[btnLeft]", "[btnRight]"], false, never>;
}

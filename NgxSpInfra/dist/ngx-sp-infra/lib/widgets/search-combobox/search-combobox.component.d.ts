import { EventEmitter, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormUtils } from "../../utils/form-utils";
import { RecordCombobox } from "../../models/combobox/record-combobox";
import * as i0 from "@angular/core";
/**
 * @file search-combobox.component.ts
 * @description Este arquivo contém a implementação do componente SearchComboboxComponent, que é um componente de interface do usuário
 * para realizar pesquisas e seleções em uma lista de opções apresentada em um combobox.
 *
 * @component SearchComboboxComponent
 * @selector search-combobox
 * @standalone true
 * @imports CommonModule, ProjectModule
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
 *
 * ## Inputs:
 * - `comboboxList`: Array de objetos representando os itens disponíveis para seleção.
 * - `labelText`: Texto de etiqueta associado ao combobox.
 * - `colorTheme`: Tema de cores para o componente.
 * - `inputGroupIconName`: Nome do ícone a ser exibido no grupo de entrada.
 * - `inputGroupIconTooltip`: Texto de dica de ferramenta para o ícone do grupo de entrada.
 * - `mainInputPlaceholder`: Texto de espaço reservado para o input principal.
 * - `searchInputPlaceholder`: Texto de espaço reservado para o input de pesquisa.
 *
 * ## Outputs:
 * - `onReloadList`: Evento emitido quando a lista precisa ser recarregada.
 * - `onSelectItem`: Evento emitido quando um item é selecionado.
 *
 * ## Métodos Públicos:
 * - `reloadList(search: string)`: Método para recarregar a lista de itens com base na pesquisa fornecida.
 * - `setFilterValue(id: string | number, label: string)`: Método para definir o valor do filtro.
 *
 * ## Propriedades:
 * - `selectedItem`: Getter e Setter para o item selecionado atualmente.
 * - `FormUtils`: Getter para utilitários de formulário.
 * - `_searchInput`: Getter para o valor do input de pesquisa.
 *
 * ## Eventos:
 * - `ngOnInit()`: Inicializa o componente.
 * - `ngOnChanges(changes: SimpleChanges)`: Responde a mudanças nas propriedades de entrada.
 *
 * ## Utilitários:
 * - `createFilterForm()`: Cria o formulário de filtro para a pesquisa.
 * - `mapComboboxList()`: Mapeia a lista de combobox para o formato necessário.
 *
 * @note Este componente é marcado como `standalone`, permitindo seu uso sem a necessidade de importá-lo em um módulo.
 */
export declare class SearchComboboxComponent implements OnInit, OnChanges {
    private _formBuilder;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private _selectedItem;
    comboboxList: RecordCombobox[];
    labelText: string;
    initializedValueID: string | number;
    colorTheme: string;
    inputGroupIconName: string;
    inputGroupIconTooltip: string;
    mainInputPlaceholder: string;
    searchInputPlaceholder: string;
    onReloadList: EventEmitter<string>;
    onSelectItem: EventEmitter<any>;
    selectedText: string;
    get selectedItem(): RecordCombobox;
    set selectedItem(value: RecordCombobox);
    filterForm: FormGroup;
    get FormUtils(): typeof FormUtils;
    get _searchInput(): string;
    private createFilterForm;
    setFilterValue(id: string | number, label: string): void;
    private initializeSelectedValue;
    reloadList(search: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchComboboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchComboboxComponent, "lib-search-combobox", never, { "comboboxList": { "alias": "comboboxList"; "required": true; }; "labelText": { "alias": "labelText"; "required": true; }; "initializedValueID": { "alias": "initializedValueID"; "required": false; }; "colorTheme": { "alias": "colorTheme"; "required": false; }; "inputGroupIconName": { "alias": "inputGroupIconName"; "required": false; }; "inputGroupIconTooltip": { "alias": "inputGroupIconTooltip"; "required": false; }; "mainInputPlaceholder": { "alias": "mainInputPlaceholder"; "required": false; }; "searchInputPlaceholder": { "alias": "searchInputPlaceholder"; "required": false; }; }, { "onReloadList": "onReloadList"; "onSelectItem": "onSelectItem"; }, never, ["[btnLeft]", "[btnRight]"], false, never>;
}

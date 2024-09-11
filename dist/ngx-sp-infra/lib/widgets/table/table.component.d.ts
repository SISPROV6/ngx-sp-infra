import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Componente de Tabela Customizável
 *
 * O `TableComponent` é um componente Angular projetado para exibir uma tabela customizável
 * com suporte a paginação. Ele permite a configuração de cabeçalhos de colunas, posicionamento
 * da paginação e opções de itens por página. O componente é flexível, utilizando classes Bootstrap
 * para ajustar o layout das colunas e emitindo eventos para que o componente pai possa reagir a
 * mudanças na página ou no número de itens exibidos.
 *
 * @selector lib-table
 * @templateUrl ./table.component.html
 * @styleUrl ./table.component.scss
*/
export declare class TableComponent implements OnInit, OnChanges {
    /** Determina se a tabela deve usar paginação.
     * @default true */
    usePagination: boolean;
    /** Lista de registros a serem exibidos na tabela.
     * @required */
    recordsList: any[] | undefined;
    /** Opções de contagem de itens por página disponíveis para o usuário.
     * @required */
    countOptions: number[];
    /** Posicionamento dos controles de paginação.
     * @default 'end' */
    paginationPlacement: 'start' | 'center' | 'end' | 'between';
    /** Lista de cabeçalhos para as colunas da tabela, incluindo o nome, a largura da coluna e classes customizadas.
     * @required */
    headersList: {
        name: string;
        col: number;
        customClasses?: string;
    }[];
    /** Mensagem customizada para lista vazia */
    emptyListMessage?: string;
    /** Evento emitido quando o número de itens por página é alterado. */
    itemsPerPageChange: EventEmitter<number>;
    /** Evento emitido quando a página é alterada. */
    pageChange: EventEmitter<number>;
    /** Contador de registros (pode ser usado para futuras implementações de lógica interna). */
    counter: number;
    /** Página atual da tabela. */
    page: number;
    /** Número de itens a serem exibidos por página. */
    itemsPerPage: number;
    constructor();
    /** Inicializa o componente e define o número inicial de itens por página. */
    ngOnInit(): void;
    /** Monitora as mudanças nas entradas do componente e realiza ajustes, como resetar a paginação ou validar o layout das colunas.
     * @param changes Objeto que contém as mudanças nas entradas do componente. */
    ngOnChanges(changes: SimpleChanges): void;
    /** Modifica a quantidade de itens a ser mostrada na lista.
     * @param event parâmetro de evento que irá selecionar a nova quantidade. */
    onSelectChange(event: any): void;
    /** Reseta a paginação da listagem com base no número atual de registros.
     * @param list Lista de registros para resetar a paginação. */
    resetPagination(list: any[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent, "lib-table", never, { "usePagination": { "alias": "usePagination"; "required": false; }; "recordsList": { "alias": "list"; "required": true; }; "countOptions": { "alias": "counts"; "required": false; }; "paginationPlacement": { "alias": "placement"; "required": false; }; "headersList": { "alias": "headers"; "required": true; }; "emptyListMessage": { "alias": "emptyListMessage"; "required": false; }; }, { "itemsPerPageChange": "itemsPerPageChange"; "pageChange": "pageChange"; }, never, ["[innerRows]"], false, never>;
}
//# sourceMappingURL=table.component.d.ts.map
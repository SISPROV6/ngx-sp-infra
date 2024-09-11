import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ngx-pagination";
const _c0 = [[["", "innerRows", ""]]];
const _c1 = ["[innerRows]"];
const _c2 = (a0, a1, a2, a3) => ({ "justify-content-start": a0, "justify-content-center": a1, "justify-content-end": a2, "justify-content-between": a3 });
function TableComponent_Conditional_0_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r1 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate2("align-middle text-dark-grey ", header_r1.col > 0 ? "col-" + header_r1.col : "col", " ", header_r1.customClasses, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", header_r1.name, " ");
} }
function TableComponent_Conditional_0_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function TableComponent_Conditional_0_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 8)(2, "span", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.emptyListMessage ? ctx_r1.emptyListMessage : "Consulta n\u00E3o retornou registros...", " ");
} }
function TableComponent_Conditional_0_div_11_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const count_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", count_r4)("selected", ctx_r1.countOptions.length > 0 && i_r5 == 0);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(count_r4);
} }
function TableComponent_Conditional_0_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11)(2, "label", 12);
    i0.ɵɵtext(3, " Itens por p\u00E1gina ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 13);
    i0.ɵɵlistener("change", function TableComponent_Conditional_0_div_11_Template_select_change_4_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onSelectChange($event)); });
    i0.ɵɵtemplate(5, TableComponent_Conditional_0_div_11_option_5_Template, 2, 3, "option", 14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "pagination-controls", 15);
    i0.ɵɵlistener("pageChange", function TableComponent_Conditional_0_div_11_Template_pagination_controls_pageChange_6_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.page = $event; return i0.ɵɵresetView(ctx_r1.pageChange.emit($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(3, _c2, ctx_r1.paginationPlacement == "start", ctx_r1.paginationPlacement == "center", ctx_r1.paginationPlacement == "end", ctx_r1.paginationPlacement == "between"));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.countOptions);
    i0.ɵɵadvance();
    i0.ɵɵproperty("maxSize", 5);
} }
function TableComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0)(1, "span", 1);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 2)(4, "table", 3)(5, "thead")(6, "tr");
    i0.ɵɵtemplate(7, TableComponent_Conditional_0_th_7_Template, 2, 5, "th", 4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "tbody", 5);
    i0.ɵɵtemplate(9, TableComponent_Conditional_0_Conditional_9_Template, 1, 0)(10, TableComponent_Conditional_0_Conditional_10_Template, 4, 1);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, TableComponent_Conditional_0_div_11_Template, 7, 8, "div", 6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" Exibindo ", ctx_r1.itemsPerPage <= ctx_r1.recordsList.length ? ctx_r1.itemsPerPage : ctx_r1.recordsList.length, " de ", ctx_r1.recordsList.length, " registros ");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.headersList);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(9, ctx_r1.recordsList.length > 0 ? 9 : 10);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.usePagination && ctx_r1.recordsList.length > 0);
} }
function TableComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "span", 19);
    i0.ɵɵtext(3, "Carregando informa\u00E7\u00F5es...");
    i0.ɵɵelementEnd()()();
} }
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
export class TableComponent {
    // #endregion PUBLIC
    // #endregion ==========> PROPRIEDADES <==========
    // #region ==========> INICIALIZAÇÃO <==========
    constructor() {
        // #region ==========> PROPRIEDADES <==========
        // #region PRIVATE
        // [...]
        // #endregion PRIVATE
        // #region PUBLIC
        /** Determina se a tabela deve usar paginação.
         * @default true */
        this.usePagination = true;
        /** Posicionamento dos controles de paginação.
         * @default 'end' */
        this.paginationPlacement = 'end';
        /** Evento emitido quando o número de itens por página é alterado. */
        this.itemsPerPageChange = new EventEmitter();
        /** Evento emitido quando a página é alterada. */
        this.pageChange = new EventEmitter();
        /** Contador de registros (pode ser usado para futuras implementações de lógica interna). */
        this.counter = 0;
        /** Página atual da tabela. */
        this.page = 1;
    }
    /** Inicializa o componente e define o número inicial de itens por página. */
    ngOnInit() {
        if (this.recordsList) {
            this.itemsPerPage = this.countOptions ? this.countOptions[0] : this.recordsList.length;
        }
        else {
            this.itemsPerPage = this.countOptions[0] ?? 10;
        }
    }
    /** Monitora as mudanças nas entradas do componente e realiza ajustes, como resetar a paginação ou validar o layout das colunas.
     * @param changes Objeto que contém as mudanças nas entradas do componente. */
    ngOnChanges(changes) {
        if (changes['recordsList'].currentValue) {
            this.resetPagination(this.recordsList ?? []);
            let maxColumns = this.headersList.reduce((n, { col }) => n + col, 0);
            if (maxColumns >= 13) {
                throw new Error("A soma de largura (classe com prefixo 'col-') de todas as colunas não pode ser maior que 12.");
            }
        }
    }
    // #endregion ==========> INICIALIZAÇÃO <==========
    // #region ==========> UTILITÁRIOS <==========
    /** Modifica a quantidade de itens a ser mostrada na lista.
     * @param event parâmetro de evento que irá selecionar a nova quantidade. */
    onSelectChange(event) {
        this.itemsPerPage = parseInt(event.target.value, 10);
        this.page = 1;
        this.itemsPerPageChange.emit(this.itemsPerPage);
    }
    /** Reseta a paginação da listagem com base no número atual de registros.
     * @param list Lista de registros para resetar a paginação. */
    resetPagination(list) {
        const startIndex = (this.page - 1) * this.itemsPerPage;
        if (list.length <= startIndex) {
            this.page = 1;
        }
    }
    static { this.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableComponent, selectors: [["lib-table"]], inputs: { usePagination: "usePagination", recordsList: [i0.ɵɵInputFlags.None, "list", "recordsList"], countOptions: [i0.ɵɵInputFlags.None, "counts", "countOptions"], paginationPlacement: [i0.ɵɵInputFlags.None, "placement", "paginationPlacement"], headersList: [i0.ɵɵInputFlags.None, "headers", "headersList"], emptyListMessage: "emptyListMessage" }, outputs: { itemsPerPageChange: "itemsPerPageChange", pageChange: "pageChange" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 2, vars: 1, consts: [[1, "table-list", "w-100", "position-relative"], [1, "ms-1"], [1, "table-list", "overflow-hidden", "border-bottom-0", "rounded-bottom", "rounded"], [1, "table", "table-hover", "border", "mb-0"], ["scope", "col", 3, "class", 4, "ngFor", "ngForOf"], [1, "bg-light", "fade-in-row"], ["class", "d-flex mt-2", 3, "ngClass", 4, "ngIf"], ["scope", "col"], ["colspan", "12", 1, "align-middle"], [1, "fw-light", "fst-italic", "text-center"], [1, "d-flex", "mt-2", 3, "ngClass"], [1, "d-flex", "align-items-center"], [1, "me-2", 2, "white-space", "nowrap"], [1, "form-select", "select-search", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["previousLabel", "\u00AB\u00A0\u00A0\u00A0", "nextLabel", "\u00A0\u00A0\u00A0\u00BB", 1, "sp-pagination", "mt-3", 3, "pageChange", "maxSize"], [3, "value", "selected"], [1, "w-100", "text-center"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵtemplate(0, TableComponent_Conditional_0_Template, 12, 5, "div", 0)(1, TableComponent_Conditional_1_Template, 4, 0);
        } if (rf & 2) {
            i0.ɵɵconditional(0, ctx.recordsList ? 0 : 1);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i3.PaginationControlsComponent], styles: [".sp-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background:#3767b2;border-radius:.375rem}.sp-pagination[_ngcontent-%COMP%]     .ngx-pagination a:hover, .sp-pagination[_ngcontent-%COMP%]     .ngx-pagination button:hover{border-radius:.375rem}.sp-pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous a:before, .sp-pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-previous.disabled:before{content:\"\";display:inline-block;margin-right:.5rem}.sp-pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next a:after, .sp-pagination[_ngcontent-%COMP%]     .ngx-pagination .pagination-next.disabled:after{content:\"\";display:inline-block;margin-left:.5rem}.text-dark-grey[_ngcontent-%COMP%]{color:#63676b!important}table[_ngcontent-%COMP%]{border-color:#c4c4c4}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{height:50px;font-size:1rem;background-color:#f9fafb!important}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]{background-color:#f9fafb!important}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{background-color:#f9fafb!important}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{font-size:.875rem}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]{height:50px}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover{background-color:#cce5ff}table.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%]{border-top:none}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableComponent, [{
        type: Component,
        args: [{ selector: 'lib-table', template: "@if (recordsList) {\n   <div class=\"table-list w-100 position-relative\">\n      <!-- Exibe o n\u00FAmero de itens mostrados e o total de registros -->\n      <span class=\"ms-1\"> Exibindo {{ itemsPerPage <= recordsList.length ? itemsPerPage : recordsList.length }} de {{ recordsList.length }} registros </span>\n      \n      <!-- Container da tabela -->\n      <div class=\"table-list overflow-hidden border-bottom-0 rounded-bottom rounded\">\n         <table class=\"table table-hover border mb-0\">\n            <thead>\n               <tr>\n                  <!-- Itera sobre a lista de cabe\u00E7alhos para criar as colunas -->\n                  <th *ngFor=\"let header of headersList\" scope=\"col\"\n                     class=\"align-middle text-dark-grey {{ header.col > 0 ? 'col-'+header.col : 'col' }} {{ header.customClasses }}\">\n                     {{ header.name }}\n                  </th>\n               </tr>\n            </thead>\n\n            <tbody class=\"bg-light fade-in-row\">\n               @if (recordsList.length > 0) {\n                  <!-- Conte\u00FAdo das linhas da tabela -->\n                  <ng-content select=\"[innerRows]\"></ng-content>\n               }\n               @else {\n                  <!-- Mensagem de aus\u00EAncia de registros -->\n                  <tr>\n                     <td colspan=\"12\" class=\"align-middle\">\n                        <span class=\"fw-light fst-italic text-center\"> {{ emptyListMessage ? emptyListMessage : \"Consulta n\u00E3o retornou registros...\" }} </span>\n                     </td>\n                  </tr>\n               }\n            </tbody>\n         </table>\n\n         <!-- #region PAGINA\u00C7\u00C3O -->\n         <div *ngIf=\"usePagination && recordsList.length > 0\" class=\"d-flex mt-2\"\n            [ngClass]=\"{\n               'justify-content-start': paginationPlacement == 'start',\n               'justify-content-center': paginationPlacement == 'center',\n               'justify-content-end': paginationPlacement == 'end',\n               'justify-content-between': paginationPlacement == 'between'\n            }\">\n            <div class=\"d-flex align-items-center\">\n               <label class=\"me-2\" style=\"white-space: nowrap;\"> Itens por p\u00E1gina </label>\n               <select class=\"form-select select-search\" (change)=\"onSelectChange($event)\">\n                  <option *ngFor=\"let count of countOptions; let i = index\" [value]=\"count\"\n                     [selected]=\"countOptions.length > 0 && i == 0\">{{ count }}</option>\n               </select>\n            </div>\n\n            <!-- Controle de pagina\u00E7\u00E3o -->\n            <pagination-controls class=\"sp-pagination mt-3\"\n               (pageChange)=\"page = $event; pageChange.emit($event)\"\n               previousLabel=\"\u00AB&nbsp;&nbsp;&nbsp;\" nextLabel=\"&nbsp;&nbsp;&nbsp;\u00BB\"\n               [maxSize]=\"5\">\n            </pagination-controls>\n         </div>\n         <!-- #endregion PAGINA\u00C7\u00C3O -->\n      </div>\n   </div>\n} @else {\n   <!-- Loader enquanto os registros s\u00E3o carregados -->\n   <div class=\"w-100 text-center\">\n      <div class=\"spinner-border\" role=\"status\"> <span class=\"visually-hidden\">Carregando informa\u00E7\u00F5es...</span> </div>\n   </div>\n}\n", styles: [".sp-pagination ::ng-deep .ngx-pagination .current{background:#3767b2;border-radius:.375rem}.sp-pagination ::ng-deep .ngx-pagination a:hover,.sp-pagination ::ng-deep .ngx-pagination button:hover{border-radius:.375rem}.sp-pagination ::ng-deep .ngx-pagination .pagination-previous a:before,.sp-pagination ::ng-deep .ngx-pagination .pagination-previous.disabled:before{content:\"\";display:inline-block;margin-right:.5rem}.sp-pagination ::ng-deep .ngx-pagination .pagination-next a:after,.sp-pagination ::ng-deep .ngx-pagination .pagination-next.disabled:after{content:\"\";display:inline-block;margin-left:.5rem}.text-dark-grey{color:#63676b!important}table{border-color:#c4c4c4}table thead{height:50px;font-size:1rem;background-color:#f9fafb!important}table thead>tr{background-color:#f9fafb!important}table thead>tr>th{background-color:#f9fafb!important}table tbody{font-size:.875rem}table tbody>tr{height:50px}table tbody>tr:hover{background-color:#cce5ff}table.table>tbody{border-top:none}\n"] }]
    }], () => [], { usePagination: [{
            type: Input
        }], recordsList: [{
            type: Input,
            args: [{ alias: 'list', required: true }]
        }], countOptions: [{
            type: Input,
            args: ['counts']
        }], paginationPlacement: [{
            type: Input,
            args: ['placement']
        }], headersList: [{
            type: Input,
            args: [{ alias: 'headers', required: true }]
        }], emptyListMessage: [{
            type: Input,
            args: ['emptyListMessage']
        }], itemsPerPageChange: [{
            type: Output
        }], pageChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TableComponent, { className: "TableComponent", filePath: "lib\\widgets\\table\\table.component.ts", lineNumber: 21 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvd2lkZ2V0cy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lDV3ZGLDZCQUNtSDtJQUNoSCxZQUNIO0lBQUEsaUJBQUs7OztJQUZGLCtJQUErRztJQUMvRyxjQUNIO0lBREcsK0NBQ0g7OztJQU9BLGtCQUE4Qzs7O0lBTXhDLEFBREgsQUFESCwwQkFBSSxZQUNxQyxjQUNXO0lBQUMsWUFBaUY7SUFFdEksQUFERyxBQURtSSxpQkFBTyxFQUNySSxFQUNIOzs7SUFGZ0QsZUFBaUY7SUFBakYsOEhBQWlGOzs7SUFrQnRJLGtDQUNrRDtJQUFBLFlBQVc7SUFBQSxpQkFBUzs7Ozs7SUFBbkUsQUFEdUQsZ0NBQWUseURBQ3hCO0lBQUMsY0FBVztJQUFYLDhCQUFXOzs7O0lBSGhFLEFBREgsQUFQSCwrQkFNTSxjQUNvQyxnQkFDYTtJQUFDLHVDQUFpQjtJQUFBLGlCQUFRO0lBQzNFLGtDQUE0RTtJQUFsQyxrTUFBVSw2QkFBc0IsS0FBQztJQUN4RSwyRkFDa0Q7SUFFeEQsQUFERyxpQkFBUyxFQUNOO0lBR04sK0NBR2lCO0lBRmQsNk9BQTZCLDhCQUF1QixLQUFDO0lBSTNELEFBREcsaUJBQXNCLEVBQ25COzs7SUFwQkgsaU5BS0U7SUFJOEIsZUFBaUI7SUFBakIsNkNBQWlCO0lBUzlDLGNBQWE7SUFBYiwyQkFBYTs7O0lBbkR0QixBQUZILDhCQUFnRCxjQUUxQjtJ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QUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQzsrRUFsR1UsY0FBYztvRUFBZCxjQUFjOztZQ3dDekIsQUE1REYsd0VBQW1CLGdEQTREVjs7WUE1RFQsNENBaUVDOzs7aUZEN0NZLGNBQWM7Y0FMMUIsU0FBUzsyQkFDRSxXQUFXO29CQWdCTCxhQUFhO2tCQUE1QixLQUFLO1lBSTJDLFdBQVc7a0JBQTNELEtBQUs7bUJBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7WUFJaEIsWUFBWTtrQkFBbkMsS0FBSzttQkFBQyxRQUFRO1lBSVksbUJBQW1CO2tCQUE3QyxLQUFLO21CQUFDLFdBQVc7WUFJa0MsV0FBVztrQkFBOUQsS0FBSzttQkFBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtZQU9ULGdCQUFnQjtrQkFBakQsS0FBSzttQkFBQyxrQkFBa0I7WUFHUixrQkFBa0I7a0JBQWxDLE1BQU07WUFHVSxVQUFVO2tCQUExQixNQUFNOztrRkF6Q0ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIENvbXBvbmVudGUgZGUgVGFiZWxhIEN1c3RvbWl6w6F2ZWxcbiAqXG4gKiBPIGBUYWJsZUNvbXBvbmVudGAgw6kgdW0gY29tcG9uZW50ZSBBbmd1bGFyIHByb2pldGFkbyBwYXJhIGV4aWJpciB1bWEgdGFiZWxhIGN1c3RvbWl6w6F2ZWwgXG4gKiBjb20gc3Vwb3J0ZSBhIHBhZ2luYcOnw6NvLiBFbGUgcGVybWl0ZSBhIGNvbmZpZ3VyYcOnw6NvIGRlIGNhYmXDp2FsaG9zIGRlIGNvbHVuYXMsIHBvc2ljaW9uYW1lbnRvIFxuICogZGEgcGFnaW5hw6fDo28gZSBvcMOnw7VlcyBkZSBpdGVucyBwb3IgcMOhZ2luYS4gTyBjb21wb25lbnRlIMOpIGZsZXjDrXZlbCwgdXRpbGl6YW5kbyBjbGFzc2VzIEJvb3RzdHJhcCBcbiAqIHBhcmEgYWp1c3RhciBvIGxheW91dCBkYXMgY29sdW5hcyBlIGVtaXRpbmRvIGV2ZW50b3MgcGFyYSBxdWUgbyBjb21wb25lbnRlIHBhaSBwb3NzYSByZWFnaXIgYSBcbiAqIG11ZGFuw6dhcyBuYSBww6FnaW5hIG91IG5vIG7Dum1lcm8gZGUgaXRlbnMgZXhpYmlkb3MuXG4gKlxuICogQHNlbGVjdG9yIGxpYi10YWJsZVxuICogQHRlbXBsYXRlVXJsIC4vdGFibGUuY29tcG9uZW50Lmh0bWxcbiAqIEBzdHlsZVVybCAuL3RhYmxlLmNvbXBvbmVudC5zY3NzXG4qL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5zY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAvLyAjcmVnaW9uID09PT09PT09PT0+IFBST1BSSUVEQURFUyA8PT09PT09PT09PVxuXG4gIC8vICNyZWdpb24gUFJJVkFURVxuICAvLyBbLi4uXVxuICAvLyAjZW5kcmVnaW9uIFBSSVZBVEVcblxuICAvLyAjcmVnaW9uIFBVQkxJQ1xuXG4gIC8qKiBEZXRlcm1pbmEgc2UgYSB0YWJlbGEgZGV2ZSB1c2FyIHBhZ2luYcOnw6NvLlxuICAgKiBAZGVmYXVsdCB0cnVlICovXG4gIEBJbnB1dCgpIHB1YmxpYyB1c2VQYWdpbmF0aW9uOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKiogTGlzdGEgZGUgcmVnaXN0cm9zIGEgc2VyZW0gZXhpYmlkb3MgbmEgdGFiZWxhLlxuICAgKiBAcmVxdWlyZWQgKi9cbiAgQElucHV0KHsgYWxpYXM6ICdsaXN0JywgcmVxdWlyZWQ6IHRydWUgfSkgcHVibGljIHJlY29yZHNMaXN0OiBhbnlbXSB8IHVuZGVmaW5lZDtcblxuICAvKiogT3DDp8O1ZXMgZGUgY29udGFnZW0gZGUgaXRlbnMgcG9yIHDDoWdpbmEgZGlzcG9uw612ZWlzIHBhcmEgbyB1c3XDoXJpby5cbiAgICogQHJlcXVpcmVkICovXG4gIEBJbnB1dCgnY291bnRzJykgcHVibGljIGNvdW50T3B0aW9uczogbnVtYmVyW107XG5cbiAgLyoqIFBvc2ljaW9uYW1lbnRvIGRvcyBjb250cm9sZXMgZGUgcGFnaW5hw6fDo28uXG4gICAqIEBkZWZhdWx0ICdlbmQnICovXG4gIEBJbnB1dCgncGxhY2VtZW50JykgcHVibGljIHBhZ2luYXRpb25QbGFjZW1lbnQ6ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnIHwgJ2JldHdlZW4nID0gJ2VuZCc7XG5cbiAgLyoqIExpc3RhIGRlIGNhYmXDp2FsaG9zIHBhcmEgYXMgY29sdW5hcyBkYSB0YWJlbGEsIGluY2x1aW5kbyBvIG5vbWUsIGEgbGFyZ3VyYSBkYSBjb2x1bmEgZSBjbGFzc2VzIGN1c3RvbWl6YWRhcy5cbiAgICogQHJlcXVpcmVkICovXG4gIEBJbnB1dCh7IGFsaWFzOiAnaGVhZGVycycsIHJlcXVpcmVkOiB0cnVlIH0pIHB1YmxpYyBoZWFkZXJzTGlzdDoge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBjb2w6IG51bWJlcixcbiAgICBjdXN0b21DbGFzc2VzPzogc3RyaW5nXG4gIH1bXTtcblxuICAvKiogTWVuc2FnZW0gY3VzdG9taXphZGEgcGFyYSBsaXN0YSB2YXppYSAqL1xuICBASW5wdXQoJ2VtcHR5TGlzdE1lc3NhZ2UnKSBwdWJsaWMgZW1wdHlMaXN0TWVzc2FnZT86IHN0cmluZztcblxuICAvKiogRXZlbnRvIGVtaXRpZG8gcXVhbmRvIG8gbsO6bWVybyBkZSBpdGVucyBwb3IgcMOhZ2luYSDDqSBhbHRlcmFkby4gKi9cbiAgQE91dHB1dCgpIHB1YmxpYyBpdGVtc1BlclBhZ2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgLyoqIEV2ZW50byBlbWl0aWRvIHF1YW5kbyBhIHDDoWdpbmEgw6kgYWx0ZXJhZGEuICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgcGFnZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvKiogQ29udGFkb3IgZGUgcmVnaXN0cm9zIChwb2RlIHNlciB1c2FkbyBwYXJhIGZ1dHVyYXMgaW1wbGVtZW50YcOnw7VlcyBkZSBsw7NnaWNhIGludGVybmEpLiAqL1xuICBwdWJsaWMgY291bnRlcjogbnVtYmVyID0gMDtcblxuICAvKiogUMOhZ2luYSBhdHVhbCBkYSB0YWJlbGEuICovXG5cdHB1YmxpYyBwYWdlOiBudW1iZXIgPSAxO1xuXG4gIC8qKiBOw7ptZXJvIGRlIGl0ZW5zIGEgc2VyZW0gZXhpYmlkb3MgcG9yIHDDoWdpbmEuICovXG5cdHB1YmxpYyBpdGVtc1BlclBhZ2U6IG51bWJlcjtcblxuICAvLyAjZW5kcmVnaW9uIFBVQkxJQ1xuXG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gUFJPUFJJRURBREVTIDw9PT09PT09PT09XG5cblxuICAvLyAjcmVnaW9uID09PT09PT09PT0+IElOSUNJQUxJWkHDh8ODTyA8PT09PT09PT09PVxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKiBJbmljaWFsaXphIG8gY29tcG9uZW50ZSBlIGRlZmluZSBvIG7Dum1lcm8gaW5pY2lhbCBkZSBpdGVucyBwb3IgcMOhZ2luYS4gKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVjb3Jkc0xpc3QpIHsgdGhpcy5pdGVtc1BlclBhZ2UgPSB0aGlzLmNvdW50T3B0aW9ucyA/IHRoaXMuY291bnRPcHRpb25zWzBdIDogdGhpcy5yZWNvcmRzTGlzdC5sZW5ndGggfVxuICAgIGVsc2UgeyB0aGlzLml0ZW1zUGVyUGFnZSA9IHRoaXMuY291bnRPcHRpb25zWzBdID8/IDEwIH1cbiAgfVxuXG4gIC8qKiBNb25pdG9yYSBhcyBtdWRhbsOnYXMgbmFzIGVudHJhZGFzIGRvIGNvbXBvbmVudGUgZSByZWFsaXphIGFqdXN0ZXMsIGNvbW8gcmVzZXRhciBhIHBhZ2luYcOnw6NvIG91IHZhbGlkYXIgbyBsYXlvdXQgZGFzIGNvbHVuYXMuXG4gICAqIEBwYXJhbSBjaGFuZ2VzIE9iamV0byBxdWUgY29udMOpbSBhcyBtdWRhbsOnYXMgbmFzIGVudHJhZGFzIGRvIGNvbXBvbmVudGUuICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1sncmVjb3Jkc0xpc3QnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMucmVzZXRQYWdpbmF0aW9uKHRoaXMucmVjb3Jkc0xpc3QgPz8gW10pO1xuXG4gICAgICBsZXQgbWF4Q29sdW1ucyA9IHRoaXMuaGVhZGVyc0xpc3QucmVkdWNlKChuLCB7Y29sfSkgPT4gbiArIGNvbCwgMCk7XG4gICAgICBpZiAobWF4Q29sdW1ucyA+PSAxMykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIHNvbWEgZGUgbGFyZ3VyYSAoY2xhc3NlIGNvbSBwcmVmaXhvICdjb2wtJykgZGUgdG9kYXMgYXMgY29sdW5hcyBuw6NvIHBvZGUgc2VyIG1haW9yIHF1ZSAxMi5cIik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gSU5JQ0lBTElaQcOHw4NPIDw9PT09PT09PT09XG5cblxuICAvLyAjcmVnaW9uID09PT09PT09PT0+IFVUSUxJVMOBUklPUyA8PT09PT09PT09PVxuXG4gIC8qKiBNb2RpZmljYSBhIHF1YW50aWRhZGUgZGUgaXRlbnMgYSBzZXIgbW9zdHJhZGEgbmEgbGlzdGEuXG4gICAqIEBwYXJhbSBldmVudCBwYXLDom1ldHJvIGRlIGV2ZW50byBxdWUgaXLDoSBzZWxlY2lvbmFyIGEgbm92YSBxdWFudGlkYWRlLiAqL1xuICBwdWJsaWMgb25TZWxlY3RDaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgdGhpcy5wYWdlID0gMTtcbiAgICB0aGlzLml0ZW1zUGVyUGFnZUNoYW5nZS5lbWl0KHRoaXMuaXRlbXNQZXJQYWdlKTtcbiAgfVxuXG4gIC8qKiBSZXNldGEgYSBwYWdpbmHDp8OjbyBkYSBsaXN0YWdlbSBjb20gYmFzZSBubyBuw7ptZXJvIGF0dWFsIGRlIHJlZ2lzdHJvcy5cbiAgICogQHBhcmFtIGxpc3QgTGlzdGEgZGUgcmVnaXN0cm9zIHBhcmEgcmVzZXRhciBhIHBhZ2luYcOnw6NvLiAqL1xuICBwdWJsaWMgcmVzZXRQYWdpbmF0aW9uKGxpc3Q6IGFueVtdKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9ICh0aGlzLnBhZ2UgLSAxKSAqIHRoaXMuaXRlbXNQZXJQYWdlO1xuICAgIGlmIChsaXN0Lmxlbmd0aCA8PSBzdGFydEluZGV4KSB7XG4gICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgIH1cbiAgfVxuXG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gVVRJTElUw4FSSU9TIDw9PT09PT09PT09XG5cbn1cbiIsIkBpZiAocmVjb3Jkc0xpc3QpIHtcbiAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1saXN0IHctMTAwIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICA8IS0tIEV4aWJlIG8gbsO6bWVybyBkZSBpdGVucyBtb3N0cmFkb3MgZSBvIHRvdGFsIGRlIHJlZ2lzdHJvcyAtLT5cbiAgICAgIDxzcGFuIGNsYXNzPVwibXMtMVwiPiBFeGliaW5kbyB7eyBpdGVtc1BlclBhZ2UgPD0gcmVjb3Jkc0xpc3QubGVuZ3RoID8gaXRlbXNQZXJQYWdlIDogcmVjb3Jkc0xpc3QubGVuZ3RoIH19IGRlIHt7IHJlY29yZHNMaXN0Lmxlbmd0aCB9fSByZWdpc3Ryb3MgPC9zcGFuPlxuICAgICAgXG4gICAgICA8IS0tIENvbnRhaW5lciBkYSB0YWJlbGEgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFibGUtbGlzdCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWJvdHRvbS0wIHJvdW5kZWQtYm90dG9tIHJvdW5kZWRcIj5cbiAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIGJvcmRlciBtYi0wXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8IS0tIEl0ZXJhIHNvYnJlIGEgbGlzdGEgZGUgY2FiZcOnYWxob3MgcGFyYSBjcmlhciBhcyBjb2x1bmFzIC0tPlxuICAgICAgICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBoZWFkZXIgb2YgaGVhZGVyc0xpc3RcIiBzY29wZT1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFsaWduLW1pZGRsZSB0ZXh0LWRhcmstZ3JleSB7eyBoZWFkZXIuY29sID4gMCA/ICdjb2wtJytoZWFkZXIuY29sIDogJ2NvbCcgfX0ge3sgaGVhZGVyLmN1c3RvbUNsYXNzZXMgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgIHt7IGhlYWRlci5uYW1lIH19XG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cImJnLWxpZ2h0IGZhZGUtaW4tcm93XCI+XG4gICAgICAgICAgICAgICBAaWYgKHJlY29yZHNMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIDwhLS0gQ29udGXDumRvIGRhcyBsaW5oYXMgZGEgdGFiZWxhIC0tPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2lubmVyUm93c11cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBAZWxzZSB7XG4gICAgICAgICAgICAgICAgICA8IS0tIE1lbnNhZ2VtIGRlIGF1c8OqbmNpYSBkZSByZWdpc3Ryb3MgLS0+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjEyXCIgY2xhc3M9XCJhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnctbGlnaHQgZnN0LWl0YWxpYyB0ZXh0LWNlbnRlclwiPiB7eyBlbXB0eUxpc3RNZXNzYWdlID8gZW1wdHlMaXN0TWVzc2FnZSA6IFwiQ29uc3VsdGEgbsOjbyByZXRvcm5vdSByZWdpc3Ryb3MuLi5cIiB9fSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICA8IS0tICNyZWdpb24gUEFHSU5Bw4fDg08gLS0+XG4gICAgICAgICA8ZGl2ICpuZ0lmPVwidXNlUGFnaW5hdGlvbiAmJiByZWNvcmRzTGlzdC5sZW5ndGggPiAwXCIgY2xhc3M9XCJkLWZsZXggbXQtMlwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAnanVzdGlmeS1jb250ZW50LXN0YXJ0JzogcGFnaW5hdGlvblBsYWNlbWVudCA9PSAnc3RhcnQnLFxuICAgICAgICAgICAgICAgJ2p1c3RpZnktY29udGVudC1jZW50ZXInOiBwYWdpbmF0aW9uUGxhY2VtZW50ID09ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgJ2p1c3RpZnktY29udGVudC1lbmQnOiBwYWdpbmF0aW9uUGxhY2VtZW50ID09ICdlbmQnLFxuICAgICAgICAgICAgICAgJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJzogcGFnaW5hdGlvblBsYWNlbWVudCA9PSAnYmV0d2VlbidcbiAgICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtZS0yXCIgc3R5bGU9XCJ3aGl0ZS1zcGFjZTogbm93cmFwO1wiPiBJdGVucyBwb3IgcMOhZ2luYSA8L2xhYmVsPlxuICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tc2VsZWN0IHNlbGVjdC1zZWFyY2hcIiAoY2hhbmdlKT1cIm9uU2VsZWN0Q2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGNvdW50IG9mIGNvdW50T3B0aW9uczsgbGV0IGkgPSBpbmRleFwiIFt2YWx1ZV09XCJjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwiY291bnRPcHRpb25zLmxlbmd0aCA+IDAgJiYgaSA9PSAwXCI+e3sgY291bnQgfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwhLS0gQ29udHJvbGUgZGUgcGFnaW5hw6fDo28gLS0+XG4gICAgICAgICAgICA8cGFnaW5hdGlvbi1jb250cm9scyBjbGFzcz1cInNwLXBhZ2luYXRpb24gbXQtM1wiXG4gICAgICAgICAgICAgICAocGFnZUNoYW5nZSk9XCJwYWdlID0gJGV2ZW50OyBwYWdlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICBwcmV2aW91c0xhYmVsPVwiwqsmbmJzcDsmbmJzcDsmbmJzcDtcIiBuZXh0TGFiZWw9XCImbmJzcDsmbmJzcDsmbmJzcDvCu1wiXG4gICAgICAgICAgICAgICBbbWF4U2l6ZV09XCI1XCI+XG4gICAgICAgICAgICA8L3BhZ2luYXRpb24tY29udHJvbHM+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwhLS0gI2VuZHJlZ2lvbiBQQUdJTkHDh8ODTyAtLT5cbiAgICAgIDwvZGl2PlxuICAgPC9kaXY+XG59IEBlbHNlIHtcbiAgIDwhLS0gTG9hZGVyIGVucXVhbnRvIG9zIHJlZ2lzdHJvcyBzw6NvIGNhcnJlZ2Fkb3MgLS0+XG4gICA8ZGl2IGNsYXNzPVwidy0xMDAgdGV4dC1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj4gPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5DYXJyZWdhbmRvIGluZm9ybWHDp8O1ZXMuLi48L3NwYW4+IDwvZGl2PlxuICAgPC9kaXY+XG59XG4iXX0=
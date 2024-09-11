import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
/**
 * Breadcrumbs padrão Sispro.
 *
 * ## Utilização
 *
 * Colocar o componente infra-breadcrumb com elementos li que possuem o seletor infra-breadcrumb-item.
 * Como demonstrado da seguinte forma:
 *
 *  <infra-breadcrumb>
 *    <li infra-breadcrumb-item>
 *      <a routerLinkActive="/home">Home</a>
 *    </li>
 *    <li infra-breadcrumb-item>
 *      Consultar
 *    </li>
 *  </infra-breadcrumb>
 *
 * ## Peculiaridades
 *
 * Não é necessário colocar o item como ativo pois ele verifica se algum dos filhos do elemento li é
 * uma âncora (<a></a>)
 *
 */
export class InfraBreadcrumbComponent {
    constructor() { }
    static { this.ɵfac = function InfraBreadcrumbComponent_Factory(t) { return new (t || InfraBreadcrumbComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InfraBreadcrumbComponent, selectors: [["infra-breadcrumb"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "breadcrumb", "position"]], template: function InfraBreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "ol", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InfraBreadcrumbComponent, [{
        type: Component,
        args: [{ selector: 'infra-breadcrumb', template: "<ol class=\"breadcrumb position\">\n    <ng-content></ng-content>\n</ol>" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InfraBreadcrumbComponent, { className: "InfraBreadcrumbComponent", filePath: "lib\\widgets\\breadcrumb\\infra-breadcrumb\\infra-breadcrumb.component.ts", lineNumber: 30 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mcmEtYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2JyZWFkY3J1bWIvaW5mcmEtYnJlYWRjcnVtYi9pbmZyYS1icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvYnJlYWRjcnVtYi9pbmZyYS1icmVhZGNydW1iL2luZnJhLWJyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBQzFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JHO0FBTUgsTUFBTSxPQUFPLHdCQUF3QjtJQUVuQyxnQkFBZ0IsQ0FBQzt5RkFGTix3QkFBd0I7b0VBQXhCLHdCQUF3Qjs7WUM3QnJDLDZCQUFnQztZQUM1QixrQkFBeUI7WUFDN0IsaUJBQUs7OztpRkQyQlEsd0JBQXdCO2NBTHBDLFNBQVM7MkJBQ0Usa0JBQWtCOztrRkFJakIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKipcbiAqIEJyZWFkY3J1bWJzIHBhZHLDo28gU2lzcHJvLlxuICogXG4gKiAjIyBVdGlsaXphw6fDo29cbiAqIFxuICogQ29sb2NhciBvIGNvbXBvbmVudGUgaW5mcmEtYnJlYWRjcnVtYiBjb20gZWxlbWVudG9zIGxpIHF1ZSBwb3NzdWVtIG8gc2VsZXRvciBpbmZyYS1icmVhZGNydW1iLWl0ZW0uXG4gKiBDb21vIGRlbW9uc3RyYWRvIGRhIHNlZ3VpbnRlIGZvcm1hOlxuICogXG4gKiAgPGluZnJhLWJyZWFkY3J1bWI+XG4gKiAgICA8bGkgaW5mcmEtYnJlYWRjcnVtYi1pdGVtPlxuICogICAgICA8YSByb3V0ZXJMaW5rQWN0aXZlPVwiL2hvbWVcIj5Ib21lPC9hPlxuICogICAgPC9saT5cbiAqICAgIDxsaSBpbmZyYS1icmVhZGNydW1iLWl0ZW0+XG4gKiAgICAgIENvbnN1bHRhclxuICogICAgPC9saT5cbiAqICA8L2luZnJhLWJyZWFkY3J1bWI+XG4gKiBcbiAqICMjIFBlY3VsaWFyaWRhZGVzXG4gKiBcbiAqIE7Do28gw6kgbmVjZXNzw6FyaW8gY29sb2NhciBvIGl0ZW0gY29tbyBhdGl2byBwb2lzIGVsZSB2ZXJpZmljYSBzZSBhbGd1bSBkb3MgZmlsaG9zIGRvIGVsZW1lbnRvIGxpIMOpXG4gKiB1bWEgw6JuY29yYSAoPGE+PC9hPilcbiAqIFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbmZyYS1icmVhZGNydW1iJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2luZnJhLWJyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbmZyYS1icmVhZGNydW1iLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbmZyYUJyZWFkY3J1bWJDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsIjxvbCBjbGFzcz1cImJyZWFkY3J1bWIgcG9zaXRpb25cIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L29sPiJdfQ==
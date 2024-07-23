import { Component } from '@angular/core';
import * as i0 from "@angular/core";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: InfraBreadcrumbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.11", type: InfraBreadcrumbComponent, selector: "infra-breadcrumb", ngImport: i0, template: "<ol class=\"breadcrumb position\">\n    <ng-content></ng-content>\n</ol>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: InfraBreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'infra-breadcrumb', template: "<ol class=\"breadcrumb position\">\n    <ng-content></ng-content>\n</ol>" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mcmEtYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2JyZWFkY3J1bWIvaW5mcmEtYnJlYWRjcnVtYi9pbmZyYS1icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvYnJlYWRjcnVtYi9pbmZyYS1icmVhZGNydW1iL2luZnJhLWJyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFDMUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7QUFNSCxNQUFNLE9BQU8sd0JBQXdCO0lBRW5DLGdCQUFnQixDQUFDOytHQUZOLHdCQUF3QjttR0FBeEIsd0JBQXdCLHdEQzdCckMsMEVBRUs7OzRGRDJCUSx3QkFBd0I7a0JBTHBDLFNBQVM7K0JBQ0Usa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKipcbiAqIEJyZWFkY3J1bWJzIHBhZHLDo28gU2lzcHJvLlxuICogXG4gKiAjIyBVdGlsaXphw6fDo29cbiAqIFxuICogQ29sb2NhciBvIGNvbXBvbmVudGUgaW5mcmEtYnJlYWRjcnVtYiBjb20gZWxlbWVudG9zIGxpIHF1ZSBwb3NzdWVtIG8gc2VsZXRvciBpbmZyYS1icmVhZGNydW1iLWl0ZW0uXG4gKiBDb21vIGRlbW9uc3RyYWRvIGRhIHNlZ3VpbnRlIGZvcm1hOlxuICogXG4gKiAgPGluZnJhLWJyZWFkY3J1bWI+XG4gKiAgICA8bGkgaW5mcmEtYnJlYWRjcnVtYi1pdGVtPlxuICogICAgICA8YSByb3V0ZXJMaW5rQWN0aXZlPVwiL2hvbWVcIj5Ib21lPC9hPlxuICogICAgPC9saT5cbiAqICAgIDxsaSBpbmZyYS1icmVhZGNydW1iLWl0ZW0+XG4gKiAgICAgIENvbnN1bHRhclxuICogICAgPC9saT5cbiAqICA8L2luZnJhLWJyZWFkY3J1bWI+XG4gKiBcbiAqICMjIFBlY3VsaWFyaWRhZGVzXG4gKiBcbiAqIE7Do28gw6kgbmVjZXNzw6FyaW8gY29sb2NhciBvIGl0ZW0gY29tbyBhdGl2byBwb2lzIGVsZSB2ZXJpZmljYSBzZSBhbGd1bSBkb3MgZmlsaG9zIGRvIGVsZW1lbnRvIGxpIMOpXG4gKiB1bWEgw6JuY29yYSAoPGE+PC9hPilcbiAqIFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbmZyYS1icmVhZGNydW1iJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2luZnJhLWJyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbmZyYS1icmVhZGNydW1iLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbmZyYUJyZWFkY3J1bWJDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsIjxvbCBjbGFzcz1cImJyZWFkY3J1bWIgcG9zaXRpb25cIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L29sPiJdfQ==
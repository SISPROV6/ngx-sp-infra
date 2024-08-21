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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.11", type: InfraBreadcrumbComponent, selector: "infra-breadcrumb", ngImport: i0, template: "<ol class=\"breadcrumb position\">\r\n    <ng-content></ng-content>\r\n</ol>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: InfraBreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'infra-breadcrumb', template: "<ol class=\"breadcrumb position\">\r\n    <ng-content></ng-content>\r\n</ol>" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mcmEtYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2JyZWFkY3J1bWIvaW5mcmEtYnJlYWRjcnVtYi9pbmZyYS1icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvYnJlYWRjcnVtYi9pbmZyYS1icmVhZGNydW1iL2luZnJhLWJyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFDMUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7QUFNSCxNQUFNLE9BQU8sd0JBQXdCO0lBRW5DLGdCQUFnQixDQUFDOytHQUZOLHdCQUF3QjttR0FBeEIsd0JBQXdCLHdEQzdCckMsOEVBRUs7OzRGRDJCUSx3QkFBd0I7a0JBTHBDLFNBQVM7K0JBQ0Usa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8qKlxyXG4gKiBCcmVhZGNydW1icyBwYWRyw6NvIFNpc3Byby5cclxuICogXHJcbiAqICMjIFV0aWxpemHDp8Ojb1xyXG4gKiBcclxuICogQ29sb2NhciBvIGNvbXBvbmVudGUgaW5mcmEtYnJlYWRjcnVtYiBjb20gZWxlbWVudG9zIGxpIHF1ZSBwb3NzdWVtIG8gc2VsZXRvciBpbmZyYS1icmVhZGNydW1iLWl0ZW0uXHJcbiAqIENvbW8gZGVtb25zdHJhZG8gZGEgc2VndWludGUgZm9ybWE6XHJcbiAqIFxyXG4gKiAgPGluZnJhLWJyZWFkY3J1bWI+XHJcbiAqICAgIDxsaSBpbmZyYS1icmVhZGNydW1iLWl0ZW0+XHJcbiAqICAgICAgPGEgcm91dGVyTGlua0FjdGl2ZT1cIi9ob21lXCI+SG9tZTwvYT5cclxuICogICAgPC9saT5cclxuICogICAgPGxpIGluZnJhLWJyZWFkY3J1bWItaXRlbT5cclxuICogICAgICBDb25zdWx0YXJcclxuICogICAgPC9saT5cclxuICogIDwvaW5mcmEtYnJlYWRjcnVtYj5cclxuICogXHJcbiAqICMjIFBlY3VsaWFyaWRhZGVzXHJcbiAqIFxyXG4gKiBOw6NvIMOpIG5lY2Vzc8OhcmlvIGNvbG9jYXIgbyBpdGVtIGNvbW8gYXRpdm8gcG9pcyBlbGUgdmVyaWZpY2Egc2UgYWxndW0gZG9zIGZpbGhvcyBkbyBlbGVtZW50byBsaSDDqVxyXG4gKiB1bWEgw6JuY29yYSAoPGE+PC9hPilcclxuICogXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2luZnJhLWJyZWFkY3J1bWInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbmZyYS1icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbmZyYS1icmVhZGNydW1iLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5mcmFCcmVhZGNydW1iQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIiwiPG9sIGNsYXNzPVwiYnJlYWRjcnVtYiBwb3NpdGlvblwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L29sPiJdfQ==
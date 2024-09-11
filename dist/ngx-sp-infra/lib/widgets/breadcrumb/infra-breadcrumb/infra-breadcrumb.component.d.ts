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
export declare class InfraBreadcrumbComponent {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<InfraBreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InfraBreadcrumbComponent, "infra-breadcrumb", never, {}, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=infra-breadcrumb.component.d.ts.map
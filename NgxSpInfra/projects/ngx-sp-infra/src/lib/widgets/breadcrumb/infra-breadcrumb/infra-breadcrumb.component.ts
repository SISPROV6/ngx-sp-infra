import { Component } from '@angular/core';
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
@Component({
  selector: 'infra-breadcrumb',
  templateUrl: './infra-breadcrumb.component.html',
  styleUrls: ['./infra-breadcrumb.component.css']
})
export class InfraBreadcrumbComponent {

  constructor() { }

}

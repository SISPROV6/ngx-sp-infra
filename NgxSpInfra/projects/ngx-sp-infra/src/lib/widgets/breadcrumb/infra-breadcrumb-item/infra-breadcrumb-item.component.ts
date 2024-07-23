import { Component, ElementRef, OnInit } from '@angular/core';

/**
 * Item da lista padrão da Sispro.
 * 
 * Deve ser utilizado em conjunto com o InfraBreadCrumb
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'li[infra-breadcrumb-item]',
  templateUrl: './infra-breadcrumb-item.component.html',
  styleUrls: ['./infra-breadcrumb-item.component.css']
})
export class InfraBreadcrumbItemComponent implements OnInit {

  constructor(private elem: ElementRef<HTMLDataListElement>) { }
  
  ngOnInit(): void {
    this.elem.nativeElement.classList.add("breadcrumb-item")
    
    if (this.elem.nativeElement.children.length > 0) {
      let isAnchor = this.elem.nativeElement.children[0] instanceof HTMLAnchorElement;
      
      if (isAnchor) {
        this.elem.nativeElement.classList.add("active");
      }
    }
  }
}

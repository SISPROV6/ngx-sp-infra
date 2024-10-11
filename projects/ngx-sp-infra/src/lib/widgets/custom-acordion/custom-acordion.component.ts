import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component( {
      selector: 'app-custom-acordion',
      templateUrl: './custom-acordion.component.html',
      styleUrls: [ './custom-acordion.component.scss' ],
} )
export class CustomAcordionComponent implements OnInit {
      constructor () { }
      customClass = 'customClass';

      @Input() public name = 'Filtro avançado';
      @Input() public haveArrow = true;
      @Input() public haveMarginTop = false;
      @Input() public isOpen: boolean;

      public posicaoIcon:boolean; 

	@ViewChild('icon') iconRef: ElementRef;

      ngOnInit (): void {       
            this.posicaoIcon = this.isOpen;

            this.toogleIcon();
      }

      public setIsOpen(){
            
            this.toogleIcon();

            this.posicaoIcon = !this.posicaoIcon;
      }

      public toogleIcon(){
            if(this.iconRef){
                  if(this.posicaoIcon){
                        this.iconRef.nativeElement.classList.add('invertImage');
                  } else {
                        this.iconRef.nativeElement.classList.remove('invertImage');
                  }
            }
      }
}

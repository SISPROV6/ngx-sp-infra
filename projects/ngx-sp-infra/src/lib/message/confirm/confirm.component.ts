import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { Subject } from 'rxjs';

import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() cancelText: string = 'Cancelar';
  @Input() okText: string = 'Sim';
  @Input() okButton: Function;
  @Input() parametroOkButton: boolean;
  @Output() clickButton = new EventEmitter<'confirmado' | 'cancelado'>();

  confirmResult: Subject<'confirmado' | 'cancelado'>;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {
    this.confirmResult = new Subject();
  
    const elSpan = document.createElement('span');

    elSpan.classList.add('xoverflow')

    elSpan.innerHTML = this.message;

    let elDivMessage = document.getElementById( "divMessage" );
    
    elDivMessage?.appendChild(elSpan);
  }

  confirm() {
       this.confirmAndClose('confirmado');
  }

  closeConfirm() {
    this.confirmAndClose('cancelado');
  }

  private confirmAndClose(value: 'confirmado' | 'cancelado') {
    this.bsModalRef.hide();
    this.confirmResult.next( value )
    this.clickButton.emit(value);
  }
}

import { Component, Input, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal'

import { alertTypes } from '../message-enum';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  @Input() type: alertTypes;
  
  constructor(public _bsModalRef: BsModalRef) { }
  
  ngOnInit(): void {
    const elSpan = document.createElement('span');

    elSpan.classList.add('xoverflow')

    elSpan.innerHTML = this.message;

    // Caso a mensagem seja muito grande, é quebrada para a próxima linha
    elSpan.style.wordBreak = "break-word";

    let elDivMessage = document.getElementById( "divMessage" );
    
    elDivMessage?.appendChild(elSpan);
  }

  public closeAlert(): void {
    this.message = '';
    
    this._bsModalRef.hide();
  }

}

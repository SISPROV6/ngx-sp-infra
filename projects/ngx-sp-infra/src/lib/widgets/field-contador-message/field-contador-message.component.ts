import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'lib-field-contador-message',
  standalone: false,
  templateUrl: './field-contador-message.component.html',
  styleUrls: ['./field-contador-message.component.css']
})
export class FieldContadorMessageComponent implements OnInit {

  @Input() control: AbstractControl | null = null;
  @Input() maximo!: number;
  cont: number = 0;
  mensagem: string = '';
  mensagemExcedida: boolean = false;


  ngOnInit(): void {
    if (this.control) {
      this.control.valueChanges.subscribe(value => {
        this.cont = value ? value.length : 0;
        this.updateMessage();
      });
    }
  }

  updateMessage(): void {
    if (this.cont > this.maximo) {
      this.mensagem = `Limite de caracteres excedido. (${this.cont}/${this.maximo})`;
      this.mensagemExcedida = true;
      if (this.control) {
        this.control.setErrors({ maxLengthExceeded: true });
      }
    } else {
      this.mensagem = `Limite de caracteres: ${this.cont}/${this.maximo}`;
      this.mensagemExcedida = false;
      if (this.control) {
        this.control.setErrors(null);
      }
    }
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.scss']
})
export class OrderingComponent implements OnInit {

  @Input() isColumnClicked: boolean = false;
  // Direção atual da ordenação ('asc', 'desc' ou vazio)
  @Input() sortDirection: string = '';

  // Atributos de ordenação
  @Input() sortAttributes: string | string[] = [];

  // Evento emitido quando a direção de ordenação é alterada
  @Output() sortDirectionChange = new EventEmitter<string>();

  // Evento emitido quando ocorre uma mudança na ordenação
  @Output() sortChange = new EventEmitter<{ direction: string, column: string | string[] }>();

  // Função chamada quando o botão de ordenação é clicado
  sort() {
    // Inverte a direção de ordenação atual
    if (this.sortDirection === 'asc') {
      this.sortDirection = 'desc';
    } else {
      this.sortDirection = 'asc';
    }

    // Emite o evento com a nova direção de ordenação
    this.sortDirectionChange.emit(this.sortDirection);

    // Emite o evento de mudança na ordenação com a direção e os atributos de ordenação
    this.sortChange.emit({ direction: this.sortDirection, column: this.sortAttributes });
  }

  // Obtém a cor do ícone com base na direção de ordenação atual
  getSvgColor(): string {
    return this.sortDirection === 'asc' ? 'blue' : 'lightgray';
  }

  constructor() {}

  ngOnInit(): void {
    // Define a direção de ordenação inicial como vazio
    this.sortDirection = '';
  }
}

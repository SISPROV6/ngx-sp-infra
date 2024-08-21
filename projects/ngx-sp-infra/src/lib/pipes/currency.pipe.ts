import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyBRL'
})
export class CurrencyPipe implements PipeTransform {

  public transform(value: number): string {
    
    return `R$ ${value.toFixed(2).toString().replace('.', ',')}`;
  }

}

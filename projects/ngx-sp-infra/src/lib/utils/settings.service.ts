import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getLocaleId() {
    //Aqui implementar busca do LOCALE_ID
    //return 'en-US';
    return 'pt-BR';
  }

  getDefaultCurrencyCode() {
    //Aqui implementar busca do DEFAULT_CURRENCY_CODE
    //return 'USD';
    return 'BRL';
  }

  getCurrencyBR ( numero: number ): string
  {
          const formata = new Intl.NumberFormat( 'pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2
          } );
          return formata.format( numero );
  }

}

import { Validator, AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

//Origem  https://pedrohtbranco.com.br/validacao-cpf-e-cnpj-com-angular-12/

export class CpfCnpjValidator implements Validator {

  static cpfLength = 11;
  static cnpjLength = 14;

  /**
  * Calcula o dígito verificador do CPF ou CNPJ.
  */
  static buildDigit(arr: number[]): number {

    const isCpf = arr.length < CpfCnpjValidator.cpfLength;
    const digit = arr
      .map((val, idx) => val * ((!isCpf ? idx % 8 : idx) + 2))
      .reduce((total, current) => total + current) % CpfCnpjValidator.cpfLength;

    if (digit < 2 && isCpf) {
      return 0;
    } 
    else if (digit < 2) 
    { 
      return 0; 
    }

    return CpfCnpjValidator.cpfLength - digit;
  }


  /**
  * Valida um CPF ou CNPJ de acordo com seu dígito verificador.
  */
  static validate(c: AbstractControl): ValidationErrors | null {

    const cpfCnpj = c.value.replace(/\D/g, '');

    if (cpfCnpj === '') {
      return null;
    }

    // Verifica o tamanho da string.
    if ([CpfCnpjValidator.cpfLength, CpfCnpjValidator.cnpjLength].indexOf(cpfCnpj.length) < 0) {
      return { cpcnpjInvalid: true };
    }

    // Verifica se todos os dígitos são iguais, exceto para CPF com dígitos zerados.
    if (/^([0-9])\1*$/.test(cpfCnpj) && cpfCnpj !== '00000000000') {
      return { cpcnpjInvalid: true };
    }

    // A seguir é realizado o cálculo verificador.
    const cpfCnpjArr: number[] = cpfCnpj.split('').reverse().slice(2);

    cpfCnpjArr.unshift(CpfCnpjValidator.buildDigit(cpfCnpjArr));
    cpfCnpjArr.unshift(CpfCnpjValidator.buildDigit(cpfCnpjArr));

    if (cpfCnpj !== cpfCnpjArr.reverse().join('')) {
      // Dígito verificador não é válido, resultando em falha.
      return { cpcnpjInvalidDigit: true };
    }

    return null;
  }

  /**
  * Implementa a interface de um validator.
  */
  validate(c: AbstractControl): ValidationErrors | null {
    return CpfCnpjValidator.validate(c);
  }
}

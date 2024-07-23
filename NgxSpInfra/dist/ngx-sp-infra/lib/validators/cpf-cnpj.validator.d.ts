import { Validator, AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
export declare class CpfCnpjValidator implements Validator {
    static cpfLength: number;
    static cnpjLength: number;
    /**
    * Calcula o dígito verificador do CPF ou CNPJ.
    */
    static buildDigit(arr: number[]): number;
    /**
    * Valida um CPF ou CNPJ de acordo com seu dígito verificador.
    */
    static validate(c: AbstractControl): ValidationErrors | null;
    /**
    * Implementa a interface de um validator.
    */
    validate(c: AbstractControl): ValidationErrors | null;
}

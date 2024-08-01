import { AbstractControl, NgControl, UntypedFormGroup, UntypedFormArray } from '@angular/forms';
export declare class FormUtils {
    /** Verifica se um campo é inválido (Template Driven) */
    static isInvalidFieldTemplate(control: NgControl): boolean;
    /** Verifica se um campo é inválido (Data Driven) */
    static isInvalidField(control: AbstractControl | null): boolean;
    /** Valida todos os campos do formulário */
    static validateFields(formGroup: UntypedFormGroup | UntypedFormArray): void;
    /** Obtém a mensagem de erro conforme o validador utilizado */
    static getErrorMessage(fieldName: string, validatorName: string, validatorValue?: any): string;
}

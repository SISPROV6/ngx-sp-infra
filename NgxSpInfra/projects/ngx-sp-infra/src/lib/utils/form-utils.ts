import { AbstractControl, NgControl, UntypedFormGroup, UntypedFormArray } from '@angular/forms';

export class FormUtils {

  /** Verifica se um campo é inválido (Template Driven) */
  static isInvalidFieldTemplate(control: NgControl): boolean {
    const ret: any = !control.valid && (control.dirty || control.touched);
  
    return (ret ? ret : false)
  }
  
  /** Verifica se um campo é inválido (Data Driven) */
  static isInvalidField(control: AbstractControl | null): boolean {
    return (control ? !control.valid && (control.dirty || control.touched) : false);
  }

  /** Valida todos os campos do formulário */
  static validateFields(formGroup: UntypedFormGroup | UntypedFormArray): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
  
      control?.markAsDirty();
      control?.markAsTouched();
      
      if (control instanceof UntypedFormGroup || control instanceof UntypedFormArray) {
        this.validateFields(control);
      }
  
    });
  
  }     
      
  /** Obtém a mensagem de erro conforme o validador utilizado */
  static getErrorMessage(fieldName: string, validatorName: string, validatorValue?: any): string {
    const config : any = {
      'required': `Este campo é obrigatório.`,
      'minlength': `Este campo deve possuir no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength': `Este campo deve possuir no máximo ${validatorValue.requiredLength} caracteres.`,
      'min': `Este campo deve ser no mínimo ${validatorValue.min}.`,
      'max': `Este campo deve ser no máximo ${validatorValue.max}.`,
      'cpcnpjInvalid': `Este ${fieldName} está inválido.`,
      'cpcnpjInvalidDigit': `Este ${fieldName} tem um dígito inválido.`,
      'incorrect': `Este campo está inválido.`,
      'email': `Este e-mail está inválido.`
    };

    return (config[validatorName] ? config[validatorName] : `Este validador - ${validatorName} - não implementado`);
  }

}

import { AbstractControl, NgControl, UntypedFormGroup, UntypedFormArray, FormGroup } from '@angular/forms';


/**
 * @summary Contém diversos métodos de utilidade para formulários
 */
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

  /** Verifica se um campo é inválido ou se possui algum erro customizado (Data Driven) */
  static isInvalidFieldError(control: AbstractControl | null): boolean {
    if (control) {
      if (!control.valid && (control.dirty || control.touched)) { return true }
      else { return false }
    }
    else { return false }
  }

  /** Valida todos os campos do formulário */
  static validateFields(formGroup: UntypedFormGroup | UntypedFormArray): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
  
      let currentValue = control?.value;

      control?.reset();

      control?.markAsDirty();
      control?.markAsTouched();

      control?.setValue(currentValue);
      
      if (control instanceof UntypedFormGroup || control instanceof UntypedFormArray) {
        this.validateFields(control);
      }
  
    });
  
  }     
      
  /** Obtém a mensagem de erro conforme o validador utilizado */
  static getErrorMessage(fieldName: string, validatorName: string, validatorValue?: any, customErrorMessage?: string): string {
    const config : any = {
      'required': `Este campo é obrigatório.`,
      'minlength': `Este campo deve possuir no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength': `Este campo deve possuir no máximo ${validatorValue.requiredLength} caracteres.`,
      'min': `Este campo deve ser no mínimo ${validatorValue.min}.`,
      'max': `Este campo deve ser no máximo ${validatorValue.max}.`,
      'cpcnpjInvalid': `Este ${fieldName} está inválido.`,
      'cpcnpjInvalidDigit': `Este ${fieldName} tem um dígito inválido.`,
      'incorrect': `Este campo está inválido.`,
      'email': `Este e-mail está inválido.`,
      'mask': `O valor informado não corresponde ao formato esperado`,
      'minDate': `A data informada deve ser superior à ${validatorValue.minDate}`,
      'maxDate': `A data informada deve ser inferior à ${validatorValue.maxDate}`
    };

    return (customErrorMessage
      ? customErrorMessage
      : config[validatorName]
        ? config[validatorName]
        : `Este validador - ${validatorName} - não foi implementado`);
  }



  /**
   * @summary Mapeia os valores de um formulário reativo para um objeto de modelo.
   *
   * @description
   * O método `mapFormToModel` recebe um objeto de modelo e um `FormGroup` do Angular, 
   * e retorna um novo objeto que combina as propriedades do modelo original com os valores 
   * atuais do formulário. Este método é útil para atualizar dinamicamente as propriedades 
   * de um modelo com base nos valores inseridos pelo usuário em um formulário.
   * 
   * Se o objeto `record` ou o `formGroup` forem nulos ou indefinidos, o método retornará `null`.
   * Caso contrário, o método retorna um novo objeto que inclui todas as propriedades 
   * do objeto original, sobrescrevendo-as com os valores atuais do formulário, se disponíveis.
   *
   * @param {object} record - O objeto de modelo original que será atualizado com os valores do formulário.
   * @param {FormGroup} formGroup - O `FormGroup` contendo os valores inseridos pelo usuário.
   * @returns {object | null} - Um novo objeto combinando o modelo original e os valores do formulário, ou `null` se `record` ou `formGroup` forem nulos ou indefinidos.
   *
   * @example
   * // Suponha que você tenha um objeto de modelo `person` e um `FormGroup` chamado `personForm`.
   * const person = {
   *   name: 'John Doe',
   *   age: 30,
   *   email: 'john.doe@example.com'
   * };
   * 
   * const personForm: FormGroup = this.formBuilder.group({
   *   name: ['Jane Doe'],
   *   age: [25],
   *   email: ['jane.doe@example.com']
   * });
   * 
   * const updatedPerson = this.mapFormToModel(person, personForm);
   * // `updatedPerson` agora contém:
   * // {
   * //   name: 'Jane Doe',
   * //   age: 25,
   * //   email: 'jane.doe@example.com'
   * // }
  */
  static mapFormToModel(record: object, formGroup: FormGroup): object | null {
    if ((record === null || record === undefined) || (formGroup === null || formGroup === undefined)) { return null; }
    
    return {
      ...record,
      ...formGroup.value
    };
  }

}

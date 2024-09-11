import { AbstractControl, NgControl, UntypedFormGroup, UntypedFormArray, FormGroup } from '@angular/forms';
/**
 * @summary Contém diversos métodos de utilidade para formulários
 */
export declare class FormUtils {
    /** Verifica se um campo é inválido (Template Driven) */
    static isInvalidFieldTemplate(control: NgControl): boolean;
    /** Verifica se um campo é inválido (Data Driven) */
    static isInvalidField(control: AbstractControl | null): boolean;
    /** Verifica se um campo é inválido ou se possui algum erro customizado (Data Driven) */
    static isInvalidFieldError(control: AbstractControl | null): boolean;
    /** Valida todos os campos do formulário */
    static validateFields(formGroup: UntypedFormGroup | UntypedFormArray): void;
    /** Obtém a mensagem de erro conforme o validador utilizado */
    static getErrorMessage(fieldName: string, validatorName: string, validatorValue?: any, customErrorMessage?: string): string;
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
    static mapFormToModel(record: object, formGroup: FormGroup): object | null;
}
//# sourceMappingURL=form-utils.d.ts.map
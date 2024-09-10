import { UntypedFormGroup, UntypedFormArray } from '@angular/forms';
/**
 * @summary Contém diversos métodos de utilidade para formulários
 */
export class FormUtils {
    /** Verifica se um campo é inválido (Template Driven) */
    static isInvalidFieldTemplate(control) {
        const ret = !control.valid && (control.dirty || control.touched);
        return (ret ? ret : false);
    }
    /** Verifica se um campo é inválido (Data Driven) */
    static isInvalidField(control) {
        return (control ? !control.valid && (control.dirty || control.touched) : false);
    }
    /** Verifica se um campo é inválido ou se possui algum erro customizado (Data Driven) */
    static isInvalidFieldError(control) {
        if (control) {
            if (!control.valid && (control.dirty || control.touched)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    /** Valida todos os campos do formulário */
    static validateFields(formGroup) {
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
    static getErrorMessage(fieldName, validatorName, validatorValue, customErrorMessage) {
        const config = {
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
    static mapFormToModel(record, formGroup) {
        if ((record === null || record === undefined) || (formGroup === null || formGroup === undefined)) {
            return null;
        }
        return {
            ...record,
            ...formGroup.value
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3V0aWxzL2Zvcm0tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUE4QixnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRzNHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFNBQVM7SUFFcEIsd0RBQXdEO0lBQ3hELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxPQUFrQjtRQUM5QyxNQUFNLEdBQUcsR0FBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV0RSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCxvREFBb0Q7SUFDcEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUErQjtRQUNuRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELHdGQUF3RjtJQUN4RixNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBK0I7UUFDeEQsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFBQyxPQUFPLElBQUksQ0FBQTtZQUFDLENBQUM7aUJBQ3BFLENBQUM7Z0JBQUMsT0FBTyxLQUFLLENBQUE7WUFBQyxDQUFDO1FBQ3ZCLENBQUM7YUFDSSxDQUFDO1lBQUMsT0FBTyxLQUFLLENBQUE7UUFBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwyQ0FBMkM7SUFDM0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUE4QztRQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVyQyxJQUFJLFlBQVksR0FBRyxPQUFPLEVBQUUsS0FBSyxDQUFDO1lBRWxDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUVqQixPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUM7WUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxDQUFDO1lBRXpCLE9BQU8sRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFaEMsSUFBSSxPQUFPLFlBQVksZ0JBQWdCLElBQUksT0FBTyxZQUFZLGdCQUFnQixFQUFFLENBQUM7Z0JBQy9FLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0IsQ0FBQztRQUVILENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxNQUFNLENBQUMsZUFBZSxDQUFDLFNBQWlCLEVBQUUsYUFBcUIsRUFBRSxjQUFvQixFQUFFLGtCQUEyQjtRQUNoSCxNQUFNLE1BQU0sR0FBUztZQUNuQixVQUFVLEVBQUUsMkJBQTJCO1lBQ3ZDLFdBQVcsRUFBRSxxQ0FBcUMsY0FBYyxDQUFDLGNBQWMsY0FBYztZQUM3RixXQUFXLEVBQUUscUNBQXFDLGNBQWMsQ0FBQyxjQUFjLGNBQWM7WUFDN0YsS0FBSyxFQUFFLGlDQUFpQyxjQUFjLENBQUMsR0FBRyxHQUFHO1lBQzdELEtBQUssRUFBRSxpQ0FBaUMsY0FBYyxDQUFDLEdBQUcsR0FBRztZQUM3RCxlQUFlLEVBQUUsUUFBUSxTQUFTLGlCQUFpQjtZQUNuRCxvQkFBb0IsRUFBRSxRQUFRLFNBQVMsMEJBQTBCO1lBQ2pFLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsT0FBTyxFQUFFLDRCQUE0QjtTQUN0QyxDQUFDO1FBRUYsT0FBTyxDQUFDLGtCQUFrQjtZQUN4QixDQUFDLENBQUMsa0JBQWtCO1lBQ3BCLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2dCQUNyQixDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLG9CQUFvQixhQUFhLHlCQUF5QixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXNDRTtJQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBYyxFQUFFLFNBQW9CO1FBQ3hELElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFBQyxPQUFPLElBQUksQ0FBQztRQUFDLENBQUM7UUFFbEgsT0FBTztZQUNMLEdBQUcsTUFBTTtZQUNULEdBQUcsU0FBUyxDQUFDLEtBQUs7U0FDbkIsQ0FBQztJQUNKLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTmdDb250cm9sLCBVbnR5cGVkRm9ybUdyb3VwLCBVbnR5cGVkRm9ybUFycmF5LCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuLyoqXG4gKiBAc3VtbWFyeSBDb250w6ltIGRpdmVyc29zIG3DqXRvZG9zIGRlIHV0aWxpZGFkZSBwYXJhIGZvcm11bMOhcmlvc1xuICovXG5leHBvcnQgY2xhc3MgRm9ybVV0aWxzIHtcblxuICAvKiogVmVyaWZpY2Egc2UgdW0gY2FtcG8gw6kgaW52w6FsaWRvIChUZW1wbGF0ZSBEcml2ZW4pICovXG4gIHN0YXRpYyBpc0ludmFsaWRGaWVsZFRlbXBsYXRlKGNvbnRyb2w6IE5nQ29udHJvbCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJldDogYW55ID0gIWNvbnRyb2wudmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkKTtcbiAgXG4gICAgcmV0dXJuIChyZXQgPyByZXQgOiBmYWxzZSlcbiAgfVxuICBcbiAgLyoqIFZlcmlmaWNhIHNlIHVtIGNhbXBvIMOpIGludsOhbGlkbyAoRGF0YSBEcml2ZW4pICovXG4gIHN0YXRpYyBpc0ludmFsaWRGaWVsZChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wgfCBudWxsKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChjb250cm9sID8gIWNvbnRyb2wudmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkKSA6IGZhbHNlKTtcbiAgfVxuXG4gIC8qKiBWZXJpZmljYSBzZSB1bSBjYW1wbyDDqSBpbnbDoWxpZG8gb3Ugc2UgcG9zc3VpIGFsZ3VtIGVycm8gY3VzdG9taXphZG8gKERhdGEgRHJpdmVuKSAqL1xuICBzdGF0aWMgaXNJbnZhbGlkRmllbGRFcnJvcihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wgfCBudWxsKTogYm9vbGVhbiB7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGlmICghY29udHJvbC52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQpKSB7IHJldHVybiB0cnVlIH1cbiAgICAgIGVsc2UgeyByZXR1cm4gZmFsc2UgfVxuICAgIH1cbiAgICBlbHNlIHsgcmV0dXJuIGZhbHNlIH1cbiAgfVxuXG4gIC8qKiBWYWxpZGEgdG9kb3Mgb3MgY2FtcG9zIGRvIGZvcm11bMOhcmlvICovXG4gIHN0YXRpYyB2YWxpZGF0ZUZpZWxkcyhmb3JtR3JvdXA6IFVudHlwZWRGb3JtR3JvdXAgfCBVbnR5cGVkRm9ybUFycmF5KTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtR3JvdXAuZ2V0KGZpZWxkKTtcbiAgXG4gICAgICBsZXQgY3VycmVudFZhbHVlID0gY29udHJvbD8udmFsdWU7XG5cbiAgICAgIGNvbnRyb2w/LnJlc2V0KCk7XG5cbiAgICAgIGNvbnRyb2w/Lm1hcmtBc0RpcnR5KCk7XG4gICAgICBjb250cm9sPy5tYXJrQXNUb3VjaGVkKCk7XG5cbiAgICAgIGNvbnRyb2w/LnNldFZhbHVlKGN1cnJlbnRWYWx1ZSk7XG4gICAgICBcbiAgICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgVW50eXBlZEZvcm1Hcm91cCB8fCBjb250cm9sIGluc3RhbmNlb2YgVW50eXBlZEZvcm1BcnJheSkge1xuICAgICAgICB0aGlzLnZhbGlkYXRlRmllbGRzKGNvbnRyb2wpO1xuICAgICAgfVxuICBcbiAgICB9KTtcbiAgXG4gIH0gICAgIFxuICAgICAgXG4gIC8qKiBPYnTDqW0gYSBtZW5zYWdlbSBkZSBlcnJvIGNvbmZvcm1lIG8gdmFsaWRhZG9yIHV0aWxpemFkbyAqL1xuICBzdGF0aWMgZ2V0RXJyb3JNZXNzYWdlKGZpZWxkTmFtZTogc3RyaW5nLCB2YWxpZGF0b3JOYW1lOiBzdHJpbmcsIHZhbGlkYXRvclZhbHVlPzogYW55LCBjdXN0b21FcnJvck1lc3NhZ2U/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNvbmZpZyA6IGFueSA9IHtcbiAgICAgICdyZXF1aXJlZCc6IGBFc3RlIGNhbXBvIMOpIG9icmlnYXTDs3Jpby5gLFxuICAgICAgJ21pbmxlbmd0aCc6IGBFc3RlIGNhbXBvIGRldmUgcG9zc3VpciBubyBtw61uaW1vICR7dmFsaWRhdG9yVmFsdWUucmVxdWlyZWRMZW5ndGh9IGNhcmFjdGVyZXMuYCxcbiAgICAgICdtYXhsZW5ndGgnOiBgRXN0ZSBjYW1wbyBkZXZlIHBvc3N1aXIgbm8gbcOheGltbyAke3ZhbGlkYXRvclZhbHVlLnJlcXVpcmVkTGVuZ3RofSBjYXJhY3RlcmVzLmAsXG4gICAgICAnbWluJzogYEVzdGUgY2FtcG8gZGV2ZSBzZXIgbm8gbcOtbmltbyAke3ZhbGlkYXRvclZhbHVlLm1pbn0uYCxcbiAgICAgICdtYXgnOiBgRXN0ZSBjYW1wbyBkZXZlIHNlciBubyBtw6F4aW1vICR7dmFsaWRhdG9yVmFsdWUubWF4fS5gLFxuICAgICAgJ2NwY25wakludmFsaWQnOiBgRXN0ZSAke2ZpZWxkTmFtZX0gZXN0w6EgaW52w6FsaWRvLmAsXG4gICAgICAnY3BjbnBqSW52YWxpZERpZ2l0JzogYEVzdGUgJHtmaWVsZE5hbWV9IHRlbSB1bSBkw61naXRvIGludsOhbGlkby5gLFxuICAgICAgJ2luY29ycmVjdCc6IGBFc3RlIGNhbXBvIGVzdMOhIGludsOhbGlkby5gLFxuICAgICAgJ2VtYWlsJzogYEVzdGUgZS1tYWlsIGVzdMOhIGludsOhbGlkby5gXG4gICAgfTtcblxuICAgIHJldHVybiAoY3VzdG9tRXJyb3JNZXNzYWdlXG4gICAgICA/IGN1c3RvbUVycm9yTWVzc2FnZVxuICAgICAgOiBjb25maWdbdmFsaWRhdG9yTmFtZV1cbiAgICAgICAgPyBjb25maWdbdmFsaWRhdG9yTmFtZV1cbiAgICAgICAgOiBgRXN0ZSB2YWxpZGFkb3IgLSAke3ZhbGlkYXRvck5hbWV9IC0gbsOjbyBmb2kgaW1wbGVtZW50YWRvYCk7XG4gIH1cblxuXG5cbiAgLyoqXG4gICAqIEBzdW1tYXJ5IE1hcGVpYSBvcyB2YWxvcmVzIGRlIHVtIGZvcm11bMOhcmlvIHJlYXRpdm8gcGFyYSB1bSBvYmpldG8gZGUgbW9kZWxvLlxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogTyBtw6l0b2RvIGBtYXBGb3JtVG9Nb2RlbGAgcmVjZWJlIHVtIG9iamV0byBkZSBtb2RlbG8gZSB1bSBgRm9ybUdyb3VwYCBkbyBBbmd1bGFyLCBcbiAgICogZSByZXRvcm5hIHVtIG5vdm8gb2JqZXRvIHF1ZSBjb21iaW5hIGFzIHByb3ByaWVkYWRlcyBkbyBtb2RlbG8gb3JpZ2luYWwgY29tIG9zIHZhbG9yZXMgXG4gICAqIGF0dWFpcyBkbyBmb3JtdWzDoXJpby4gRXN0ZSBtw6l0b2RvIMOpIMO6dGlsIHBhcmEgYXR1YWxpemFyIGRpbmFtaWNhbWVudGUgYXMgcHJvcHJpZWRhZGVzIFxuICAgKiBkZSB1bSBtb2RlbG8gY29tIGJhc2Ugbm9zIHZhbG9yZXMgaW5zZXJpZG9zIHBlbG8gdXN1w6FyaW8gZW0gdW0gZm9ybXVsw6FyaW8uXG4gICAqIFxuICAgKiBTZSBvIG9iamV0byBgcmVjb3JkYCBvdSBvIGBmb3JtR3JvdXBgIGZvcmVtIG51bG9zIG91IGluZGVmaW5pZG9zLCBvIG3DqXRvZG8gcmV0b3JuYXLDoSBgbnVsbGAuXG4gICAqIENhc28gY29udHLDoXJpbywgbyBtw6l0b2RvIHJldG9ybmEgdW0gbm92byBvYmpldG8gcXVlIGluY2x1aSB0b2RhcyBhcyBwcm9wcmllZGFkZXMgXG4gICAqIGRvIG9iamV0byBvcmlnaW5hbCwgc29icmVzY3JldmVuZG8tYXMgY29tIG9zIHZhbG9yZXMgYXR1YWlzIGRvIGZvcm11bMOhcmlvLCBzZSBkaXNwb27DrXZlaXMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgLSBPIG9iamV0byBkZSBtb2RlbG8gb3JpZ2luYWwgcXVlIHNlcsOhIGF0dWFsaXphZG8gY29tIG9zIHZhbG9yZXMgZG8gZm9ybXVsw6FyaW8uXG4gICAqIEBwYXJhbSB7Rm9ybUdyb3VwfSBmb3JtR3JvdXAgLSBPIGBGb3JtR3JvdXBgIGNvbnRlbmRvIG9zIHZhbG9yZXMgaW5zZXJpZG9zIHBlbG8gdXN1w6FyaW8uXG4gICAqIEByZXR1cm5zIHtvYmplY3QgfCBudWxsfSAtIFVtIG5vdm8gb2JqZXRvIGNvbWJpbmFuZG8gbyBtb2RlbG8gb3JpZ2luYWwgZSBvcyB2YWxvcmVzIGRvIGZvcm11bMOhcmlvLCBvdSBgbnVsbGAgc2UgYHJlY29yZGAgb3UgYGZvcm1Hcm91cGAgZm9yZW0gbnVsb3Mgb3UgaW5kZWZpbmlkb3MuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIFN1cG9uaGEgcXVlIHZvY8OqIHRlbmhhIHVtIG9iamV0byBkZSBtb2RlbG8gYHBlcnNvbmAgZSB1bSBgRm9ybUdyb3VwYCBjaGFtYWRvIGBwZXJzb25Gb3JtYC5cbiAgICogY29uc3QgcGVyc29uID0ge1xuICAgKiAgIG5hbWU6ICdKb2huIERvZScsXG4gICAqICAgYWdlOiAzMCxcbiAgICogICBlbWFpbDogJ2pvaG4uZG9lQGV4YW1wbGUuY29tJ1xuICAgKiB9O1xuICAgKiBcbiAgICogY29uc3QgcGVyc29uRm9ybTogRm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAqICAgbmFtZTogWydKYW5lIERvZSddLFxuICAgKiAgIGFnZTogWzI1XSxcbiAgICogICBlbWFpbDogWydqYW5lLmRvZUBleGFtcGxlLmNvbSddXG4gICAqIH0pO1xuICAgKiBcbiAgICogY29uc3QgdXBkYXRlZFBlcnNvbiA9IHRoaXMubWFwRm9ybVRvTW9kZWwocGVyc29uLCBwZXJzb25Gb3JtKTtcbiAgICogLy8gYHVwZGF0ZWRQZXJzb25gIGFnb3JhIGNvbnTDqW06XG4gICAqIC8vIHtcbiAgICogLy8gICBuYW1lOiAnSmFuZSBEb2UnLFxuICAgKiAvLyAgIGFnZTogMjUsXG4gICAqIC8vICAgZW1haWw6ICdqYW5lLmRvZUBleGFtcGxlLmNvbSdcbiAgICogLy8gfVxuICAqL1xuICBzdGF0aWMgbWFwRm9ybVRvTW9kZWwocmVjb3JkOiBvYmplY3QsIGZvcm1Hcm91cDogRm9ybUdyb3VwKTogb2JqZWN0IHwgbnVsbCB7XG4gICAgaWYgKChyZWNvcmQgPT09IG51bGwgfHwgcmVjb3JkID09PSB1bmRlZmluZWQpIHx8IChmb3JtR3JvdXAgPT09IG51bGwgfHwgZm9ybUdyb3VwID09PSB1bmRlZmluZWQpKSB7IHJldHVybiBudWxsOyB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlY29yZCxcbiAgICAgIC4uLmZvcm1Hcm91cC52YWx1ZVxuICAgIH07XG4gIH1cblxufVxuIl19
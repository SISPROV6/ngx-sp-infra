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
            console.log("formUtils.control:", control);
            control?.markAsDirty();
            control?.markAsTouched();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3V0aWxzL2Zvcm0tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUE4QixnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRzNHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFNBQVM7SUFFcEIsd0RBQXdEO0lBQ3hELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxPQUFrQjtRQUM5QyxNQUFNLEdBQUcsR0FBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV0RSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCxvREFBb0Q7SUFDcEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUErQjtRQUNuRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELHdGQUF3RjtJQUN4RixNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBK0I7UUFDeEQsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFBQyxPQUFPLElBQUksQ0FBQTtZQUFDLENBQUM7aUJBQ3BFLENBQUM7Z0JBQUMsT0FBTyxLQUFLLENBQUE7WUFBQyxDQUFDO1FBQ3ZCLENBQUM7YUFDSSxDQUFDO1lBQUMsT0FBTyxLQUFLLENBQUE7UUFBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwyQ0FBMkM7SUFDM0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUE4QztRQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVyQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQztZQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLENBQUM7WUFFekIsSUFBSSxPQUFPLFlBQVksZ0JBQWdCLElBQUksT0FBTyxZQUFZLGdCQUFnQixFQUFFLENBQUM7Z0JBQy9FLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0IsQ0FBQztRQUVILENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxNQUFNLENBQUMsZUFBZSxDQUFDLFNBQWlCLEVBQUUsYUFBcUIsRUFBRSxjQUFvQixFQUFFLGtCQUEyQjtRQUNoSCxNQUFNLE1BQU0sR0FBUztZQUNuQixVQUFVLEVBQUUsMkJBQTJCO1lBQ3ZDLFdBQVcsRUFBRSxxQ0FBcUMsY0FBYyxDQUFDLGNBQWMsY0FBYztZQUM3RixXQUFXLEVBQUUscUNBQXFDLGNBQWMsQ0FBQyxjQUFjLGNBQWM7WUFDN0YsS0FBSyxFQUFFLGlDQUFpQyxjQUFjLENBQUMsR0FBRyxHQUFHO1lBQzdELEtBQUssRUFBRSxpQ0FBaUMsY0FBYyxDQUFDLEdBQUcsR0FBRztZQUM3RCxlQUFlLEVBQUUsUUFBUSxTQUFTLGlCQUFpQjtZQUNuRCxvQkFBb0IsRUFBRSxRQUFRLFNBQVMsMEJBQTBCO1lBQ2pFLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsT0FBTyxFQUFFLDRCQUE0QjtTQUN0QyxDQUFDO1FBRUYsT0FBTyxDQUFDLGtCQUFrQjtZQUN4QixDQUFDLENBQUMsa0JBQWtCO1lBQ3BCLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2dCQUNyQixDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLG9CQUFvQixhQUFhLHlCQUF5QixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXNDRTtJQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBYyxFQUFFLFNBQW9CO1FBQ3hELElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFBQyxPQUFPLElBQUksQ0FBQztRQUFDLENBQUM7UUFFbEgsT0FBTztZQUNMLEdBQUcsTUFBTTtZQUNULEdBQUcsU0FBUyxDQUFDLEtBQUs7U0FDbkIsQ0FBQztJQUNKLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTmdDb250cm9sLCBVbnR5cGVkRm9ybUdyb3VwLCBVbnR5cGVkRm9ybUFycmF5LCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBzdW1tYXJ5IENvbnTDqW0gZGl2ZXJzb3MgbcOpdG9kb3MgZGUgdXRpbGlkYWRlIHBhcmEgZm9ybXVsw6FyaW9zXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9ybVV0aWxzIHtcclxuXHJcbiAgLyoqIFZlcmlmaWNhIHNlIHVtIGNhbXBvIMOpIGludsOhbGlkbyAoVGVtcGxhdGUgRHJpdmVuKSAqL1xyXG4gIHN0YXRpYyBpc0ludmFsaWRGaWVsZFRlbXBsYXRlKGNvbnRyb2w6IE5nQ29udHJvbCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgcmV0OiBhbnkgPSAhY29udHJvbC52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQpO1xyXG4gIFxyXG4gICAgcmV0dXJuIChyZXQgPyByZXQgOiBmYWxzZSlcclxuICB9XHJcbiAgXHJcbiAgLyoqIFZlcmlmaWNhIHNlIHVtIGNhbXBvIMOpIGludsOhbGlkbyAoRGF0YSBEcml2ZW4pICovXHJcbiAgc3RhdGljIGlzSW52YWxpZEZpZWxkKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoY29udHJvbCA/ICFjb250cm9sLnZhbGlkICYmIChjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZCkgOiBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvKiogVmVyaWZpY2Egc2UgdW0gY2FtcG8gw6kgaW52w6FsaWRvIG91IHNlIHBvc3N1aSBhbGd1bSBlcnJvIGN1c3RvbWl6YWRvIChEYXRhIERyaXZlbikgKi9cclxuICBzdGF0aWMgaXNJbnZhbGlkRmllbGRFcnJvcihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wgfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoY29udHJvbCkge1xyXG4gICAgICBpZiAoIWNvbnRyb2wudmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkKSkgeyByZXR1cm4gdHJ1ZSB9XHJcbiAgICAgIGVsc2UgeyByZXR1cm4gZmFsc2UgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7IHJldHVybiBmYWxzZSB9XHJcbiAgfVxyXG5cclxuICAvKiogVmFsaWRhIHRvZG9zIG9zIGNhbXBvcyBkbyBmb3JtdWzDoXJpbyAqL1xyXG4gIHN0YXRpYyB2YWxpZGF0ZUZpZWxkcyhmb3JtR3JvdXA6IFVudHlwZWRGb3JtR3JvdXAgfCBVbnR5cGVkRm9ybUFycmF5KTogdm9pZCB7XHJcbiAgICBPYmplY3Qua2V5cyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb25zdCBjb250cm9sID0gZm9ybUdyb3VwLmdldChmaWVsZCk7XHJcbiAgXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZm9ybVV0aWxzLmNvbnRyb2w6XCIsIGNvbnRyb2wpO1xyXG4gICAgICBjb250cm9sPy5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgICBjb250cm9sPy5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIFVudHlwZWRGb3JtR3JvdXAgfHwgY29udHJvbCBpbnN0YW5jZW9mIFVudHlwZWRGb3JtQXJyYXkpIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRlRmllbGRzKGNvbnRyb2wpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9KTtcclxuICBcclxuICB9ICAgICBcclxuICAgICAgXHJcbiAgLyoqIE9idMOpbSBhIG1lbnNhZ2VtIGRlIGVycm8gY29uZm9ybWUgbyB2YWxpZGFkb3IgdXRpbGl6YWRvICovXHJcbiAgc3RhdGljIGdldEVycm9yTWVzc2FnZShmaWVsZE5hbWU6IHN0cmluZywgdmFsaWRhdG9yTmFtZTogc3RyaW5nLCB2YWxpZGF0b3JWYWx1ZT86IGFueSwgY3VzdG9tRXJyb3JNZXNzYWdlPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGNvbmZpZyA6IGFueSA9IHtcclxuICAgICAgJ3JlcXVpcmVkJzogYEVzdGUgY2FtcG8gw6kgb2JyaWdhdMOzcmlvLmAsXHJcbiAgICAgICdtaW5sZW5ndGgnOiBgRXN0ZSBjYW1wbyBkZXZlIHBvc3N1aXIgbm8gbcOtbmltbyAke3ZhbGlkYXRvclZhbHVlLnJlcXVpcmVkTGVuZ3RofSBjYXJhY3RlcmVzLmAsXHJcbiAgICAgICdtYXhsZW5ndGgnOiBgRXN0ZSBjYW1wbyBkZXZlIHBvc3N1aXIgbm8gbcOheGltbyAke3ZhbGlkYXRvclZhbHVlLnJlcXVpcmVkTGVuZ3RofSBjYXJhY3RlcmVzLmAsXHJcbiAgICAgICdtaW4nOiBgRXN0ZSBjYW1wbyBkZXZlIHNlciBubyBtw61uaW1vICR7dmFsaWRhdG9yVmFsdWUubWlufS5gLFxyXG4gICAgICAnbWF4JzogYEVzdGUgY2FtcG8gZGV2ZSBzZXIgbm8gbcOheGltbyAke3ZhbGlkYXRvclZhbHVlLm1heH0uYCxcclxuICAgICAgJ2NwY25wakludmFsaWQnOiBgRXN0ZSAke2ZpZWxkTmFtZX0gZXN0w6EgaW52w6FsaWRvLmAsXHJcbiAgICAgICdjcGNucGpJbnZhbGlkRGlnaXQnOiBgRXN0ZSAke2ZpZWxkTmFtZX0gdGVtIHVtIGTDrWdpdG8gaW52w6FsaWRvLmAsXHJcbiAgICAgICdpbmNvcnJlY3QnOiBgRXN0ZSBjYW1wbyBlc3TDoSBpbnbDoWxpZG8uYCxcclxuICAgICAgJ2VtYWlsJzogYEVzdGUgZS1tYWlsIGVzdMOhIGludsOhbGlkby5gXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoY3VzdG9tRXJyb3JNZXNzYWdlXHJcbiAgICAgID8gY3VzdG9tRXJyb3JNZXNzYWdlXHJcbiAgICAgIDogY29uZmlnW3ZhbGlkYXRvck5hbWVdXHJcbiAgICAgICAgPyBjb25maWdbdmFsaWRhdG9yTmFtZV1cclxuICAgICAgICA6IGBFc3RlIHZhbGlkYWRvciAtICR7dmFsaWRhdG9yTmFtZX0gLSBuw6NvIGZvaSBpbXBsZW1lbnRhZG9gKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQHN1bW1hcnkgTWFwZWlhIG9zIHZhbG9yZXMgZGUgdW0gZm9ybXVsw6FyaW8gcmVhdGl2byBwYXJhIHVtIG9iamV0byBkZSBtb2RlbG8uXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBPIG3DqXRvZG8gYG1hcEZvcm1Ub01vZGVsYCByZWNlYmUgdW0gb2JqZXRvIGRlIG1vZGVsbyBlIHVtIGBGb3JtR3JvdXBgIGRvIEFuZ3VsYXIsIFxyXG4gICAqIGUgcmV0b3JuYSB1bSBub3ZvIG9iamV0byBxdWUgY29tYmluYSBhcyBwcm9wcmllZGFkZXMgZG8gbW9kZWxvIG9yaWdpbmFsIGNvbSBvcyB2YWxvcmVzIFxyXG4gICAqIGF0dWFpcyBkbyBmb3JtdWzDoXJpby4gRXN0ZSBtw6l0b2RvIMOpIMO6dGlsIHBhcmEgYXR1YWxpemFyIGRpbmFtaWNhbWVudGUgYXMgcHJvcHJpZWRhZGVzIFxyXG4gICAqIGRlIHVtIG1vZGVsbyBjb20gYmFzZSBub3MgdmFsb3JlcyBpbnNlcmlkb3MgcGVsbyB1c3XDoXJpbyBlbSB1bSBmb3JtdWzDoXJpby5cclxuICAgKiBcclxuICAgKiBTZSBvIG9iamV0byBgcmVjb3JkYCBvdSBvIGBmb3JtR3JvdXBgIGZvcmVtIG51bG9zIG91IGluZGVmaW5pZG9zLCBvIG3DqXRvZG8gcmV0b3JuYXLDoSBgbnVsbGAuXHJcbiAgICogQ2FzbyBjb250csOhcmlvLCBvIG3DqXRvZG8gcmV0b3JuYSB1bSBub3ZvIG9iamV0byBxdWUgaW5jbHVpIHRvZGFzIGFzIHByb3ByaWVkYWRlcyBcclxuICAgKiBkbyBvYmpldG8gb3JpZ2luYWwsIHNvYnJlc2NyZXZlbmRvLWFzIGNvbSBvcyB2YWxvcmVzIGF0dWFpcyBkbyBmb3JtdWzDoXJpbywgc2UgZGlzcG9uw612ZWlzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCAtIE8gb2JqZXRvIGRlIG1vZGVsbyBvcmlnaW5hbCBxdWUgc2Vyw6EgYXR1YWxpemFkbyBjb20gb3MgdmFsb3JlcyBkbyBmb3JtdWzDoXJpby5cclxuICAgKiBAcGFyYW0ge0Zvcm1Hcm91cH0gZm9ybUdyb3VwIC0gTyBgRm9ybUdyb3VwYCBjb250ZW5kbyBvcyB2YWxvcmVzIGluc2VyaWRvcyBwZWxvIHVzdcOhcmlvLlxyXG4gICAqIEByZXR1cm5zIHtvYmplY3QgfCBudWxsfSAtIFVtIG5vdm8gb2JqZXRvIGNvbWJpbmFuZG8gbyBtb2RlbG8gb3JpZ2luYWwgZSBvcyB2YWxvcmVzIGRvIGZvcm11bMOhcmlvLCBvdSBgbnVsbGAgc2UgYHJlY29yZGAgb3UgYGZvcm1Hcm91cGAgZm9yZW0gbnVsb3Mgb3UgaW5kZWZpbmlkb3MuXHJcbiAgICpcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIC8vIFN1cG9uaGEgcXVlIHZvY8OqIHRlbmhhIHVtIG9iamV0byBkZSBtb2RlbG8gYHBlcnNvbmAgZSB1bSBgRm9ybUdyb3VwYCBjaGFtYWRvIGBwZXJzb25Gb3JtYC5cclxuICAgKiBjb25zdCBwZXJzb24gPSB7XHJcbiAgICogICBuYW1lOiAnSm9obiBEb2UnLFxyXG4gICAqICAgYWdlOiAzMCxcclxuICAgKiAgIGVtYWlsOiAnam9obi5kb2VAZXhhbXBsZS5jb20nXHJcbiAgICogfTtcclxuICAgKiBcclxuICAgKiBjb25zdCBwZXJzb25Gb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgKiAgIG5hbWU6IFsnSmFuZSBEb2UnXSxcclxuICAgKiAgIGFnZTogWzI1XSxcclxuICAgKiAgIGVtYWlsOiBbJ2phbmUuZG9lQGV4YW1wbGUuY29tJ11cclxuICAgKiB9KTtcclxuICAgKiBcclxuICAgKiBjb25zdCB1cGRhdGVkUGVyc29uID0gdGhpcy5tYXBGb3JtVG9Nb2RlbChwZXJzb24sIHBlcnNvbkZvcm0pO1xyXG4gICAqIC8vIGB1cGRhdGVkUGVyc29uYCBhZ29yYSBjb250w6ltOlxyXG4gICAqIC8vIHtcclxuICAgKiAvLyAgIG5hbWU6ICdKYW5lIERvZScsXHJcbiAgICogLy8gICBhZ2U6IDI1LFxyXG4gICAqIC8vICAgZW1haWw6ICdqYW5lLmRvZUBleGFtcGxlLmNvbSdcclxuICAgKiAvLyB9XHJcbiAgKi9cclxuICBzdGF0aWMgbWFwRm9ybVRvTW9kZWwocmVjb3JkOiBvYmplY3QsIGZvcm1Hcm91cDogRm9ybUdyb3VwKTogb2JqZWN0IHwgbnVsbCB7XHJcbiAgICBpZiAoKHJlY29yZCA9PT0gbnVsbCB8fCByZWNvcmQgPT09IHVuZGVmaW5lZCkgfHwgKGZvcm1Hcm91cCA9PT0gbnVsbCB8fCBmb3JtR3JvdXAgPT09IHVuZGVmaW5lZCkpIHsgcmV0dXJuIG51bGw7IH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ucmVjb3JkLFxyXG4gICAgICAuLi5mb3JtR3JvdXAudmFsdWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
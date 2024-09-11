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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3V0aWxzL2Zvcm0tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUE4QixnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRzNHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFNBQVM7SUFFcEIsd0RBQXdEO0lBQ3hELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxPQUFrQjtRQUM5QyxNQUFNLEdBQUcsR0FBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV0RSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCxvREFBb0Q7SUFDcEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUErQjtRQUNuRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELHdGQUF3RjtJQUN4RixNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBK0I7UUFDeEQsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFBQyxPQUFPLElBQUksQ0FBQTtZQUFDLENBQUM7aUJBQ3BFLENBQUM7Z0JBQUMsT0FBTyxLQUFLLENBQUE7WUFBQyxDQUFDO1FBQ3ZCLENBQUM7YUFDSSxDQUFDO1lBQUMsT0FBTyxLQUFLLENBQUE7UUFBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwyQ0FBMkM7SUFDM0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUE4QztRQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVyQyxJQUFJLFlBQVksR0FBRyxPQUFPLEVBQUUsS0FBSyxDQUFDO1lBRWxDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUVqQixPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUM7WUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxDQUFDO1lBRXpCLE9BQU8sRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFaEMsSUFBSSxPQUFPLFlBQVksZ0JBQWdCLElBQUksT0FBTyxZQUFZLGdCQUFnQixFQUFFLENBQUM7Z0JBQy9FLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0IsQ0FBQztRQUVILENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxNQUFNLENBQUMsZUFBZSxDQUFDLFNBQWlCLEVBQUUsYUFBcUIsRUFBRSxjQUFvQixFQUFFLGtCQUEyQjtRQUNoSCxNQUFNLE1BQU0sR0FBUztZQUNuQixVQUFVLEVBQUUsMkJBQTJCO1lBQ3ZDLFdBQVcsRUFBRSxxQ0FBcUMsY0FBYyxDQUFDLGNBQWMsY0FBYztZQUM3RixXQUFXLEVBQUUscUNBQXFDLGNBQWMsQ0FBQyxjQUFjLGNBQWM7WUFDN0YsS0FBSyxFQUFFLGlDQUFpQyxjQUFjLENBQUMsR0FBRyxHQUFHO1lBQzdELEtBQUssRUFBRSxpQ0FBaUMsY0FBYyxDQUFDLEdBQUcsR0FBRztZQUM3RCxlQUFlLEVBQUUsUUFBUSxTQUFTLGlCQUFpQjtZQUNuRCxvQkFBb0IsRUFBRSxRQUFRLFNBQVMsMEJBQTBCO1lBQ2pFLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsT0FBTyxFQUFFLDRCQUE0QjtTQUN0QyxDQUFDO1FBRUYsT0FBTyxDQUFDLGtCQUFrQjtZQUN4QixDQUFDLENBQUMsa0JBQWtCO1lBQ3BCLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2dCQUNyQixDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLG9CQUFvQixhQUFhLHlCQUF5QixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXNDRTtJQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBYyxFQUFFLFNBQW9CO1FBQ3hELElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFBQyxPQUFPLElBQUksQ0FBQztRQUFDLENBQUM7UUFFbEgsT0FBTztZQUNMLEdBQUcsTUFBTTtZQUNULEdBQUcsU0FBUyxDQUFDLEtBQUs7U0FDbkIsQ0FBQztJQUNKLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTmdDb250cm9sLCBVbnR5cGVkRm9ybUdyb3VwLCBVbnR5cGVkRm9ybUFycmF5LCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBzdW1tYXJ5IENvbnTDqW0gZGl2ZXJzb3MgbcOpdG9kb3MgZGUgdXRpbGlkYWRlIHBhcmEgZm9ybXVsw6FyaW9zXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9ybVV0aWxzIHtcclxuXHJcbiAgLyoqIFZlcmlmaWNhIHNlIHVtIGNhbXBvIMOpIGludsOhbGlkbyAoVGVtcGxhdGUgRHJpdmVuKSAqL1xyXG4gIHN0YXRpYyBpc0ludmFsaWRGaWVsZFRlbXBsYXRlKGNvbnRyb2w6IE5nQ29udHJvbCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgcmV0OiBhbnkgPSAhY29udHJvbC52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQpO1xyXG4gIFxyXG4gICAgcmV0dXJuIChyZXQgPyByZXQgOiBmYWxzZSlcclxuICB9XHJcbiAgXHJcbiAgLyoqIFZlcmlmaWNhIHNlIHVtIGNhbXBvIMOpIGludsOhbGlkbyAoRGF0YSBEcml2ZW4pICovXHJcbiAgc3RhdGljIGlzSW52YWxpZEZpZWxkKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoY29udHJvbCA/ICFjb250cm9sLnZhbGlkICYmIChjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZCkgOiBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvKiogVmVyaWZpY2Egc2UgdW0gY2FtcG8gw6kgaW52w6FsaWRvIG91IHNlIHBvc3N1aSBhbGd1bSBlcnJvIGN1c3RvbWl6YWRvIChEYXRhIERyaXZlbikgKi9cclxuICBzdGF0aWMgaXNJbnZhbGlkRmllbGRFcnJvcihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wgfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoY29udHJvbCkge1xyXG4gICAgICBpZiAoIWNvbnRyb2wudmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkKSkgeyByZXR1cm4gdHJ1ZSB9XHJcbiAgICAgIGVsc2UgeyByZXR1cm4gZmFsc2UgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7IHJldHVybiBmYWxzZSB9XHJcbiAgfVxyXG5cclxuICAvKiogVmFsaWRhIHRvZG9zIG9zIGNhbXBvcyBkbyBmb3JtdWzDoXJpbyAqL1xyXG4gIHN0YXRpYyB2YWxpZGF0ZUZpZWxkcyhmb3JtR3JvdXA6IFVudHlwZWRGb3JtR3JvdXAgfCBVbnR5cGVkRm9ybUFycmF5KTogdm9pZCB7XHJcbiAgICBPYmplY3Qua2V5cyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb25zdCBjb250cm9sID0gZm9ybUdyb3VwLmdldChmaWVsZCk7XHJcbiAgXHJcbiAgICAgIGxldCBjdXJyZW50VmFsdWUgPSBjb250cm9sPy52YWx1ZTtcclxuXHJcbiAgICAgIGNvbnRyb2w/LnJlc2V0KCk7XHJcblxyXG4gICAgICBjb250cm9sPy5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgICBjb250cm9sPy5tYXJrQXNUb3VjaGVkKCk7XHJcblxyXG4gICAgICBjb250cm9sPy5zZXRWYWx1ZShjdXJyZW50VmFsdWUpO1xyXG4gICAgICBcclxuICAgICAgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBVbnR5cGVkRm9ybUdyb3VwIHx8IGNvbnRyb2wgaW5zdGFuY2VvZiBVbnR5cGVkRm9ybUFycmF5KSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZUZpZWxkcyhjb250cm9sKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgfSAgICAgXHJcbiAgICAgIFxyXG4gIC8qKiBPYnTDqW0gYSBtZW5zYWdlbSBkZSBlcnJvIGNvbmZvcm1lIG8gdmFsaWRhZG9yIHV0aWxpemFkbyAqL1xyXG4gIHN0YXRpYyBnZXRFcnJvck1lc3NhZ2UoZmllbGROYW1lOiBzdHJpbmcsIHZhbGlkYXRvck5hbWU6IHN0cmluZywgdmFsaWRhdG9yVmFsdWU/OiBhbnksIGN1c3RvbUVycm9yTWVzc2FnZT86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBjb25maWcgOiBhbnkgPSB7XHJcbiAgICAgICdyZXF1aXJlZCc6IGBFc3RlIGNhbXBvIMOpIG9icmlnYXTDs3Jpby5gLFxyXG4gICAgICAnbWlubGVuZ3RoJzogYEVzdGUgY2FtcG8gZGV2ZSBwb3NzdWlyIG5vIG3DrW5pbW8gJHt2YWxpZGF0b3JWYWx1ZS5yZXF1aXJlZExlbmd0aH0gY2FyYWN0ZXJlcy5gLFxyXG4gICAgICAnbWF4bGVuZ3RoJzogYEVzdGUgY2FtcG8gZGV2ZSBwb3NzdWlyIG5vIG3DoXhpbW8gJHt2YWxpZGF0b3JWYWx1ZS5yZXF1aXJlZExlbmd0aH0gY2FyYWN0ZXJlcy5gLFxyXG4gICAgICAnbWluJzogYEVzdGUgY2FtcG8gZGV2ZSBzZXIgbm8gbcOtbmltbyAke3ZhbGlkYXRvclZhbHVlLm1pbn0uYCxcclxuICAgICAgJ21heCc6IGBFc3RlIGNhbXBvIGRldmUgc2VyIG5vIG3DoXhpbW8gJHt2YWxpZGF0b3JWYWx1ZS5tYXh9LmAsXHJcbiAgICAgICdjcGNucGpJbnZhbGlkJzogYEVzdGUgJHtmaWVsZE5hbWV9IGVzdMOhIGludsOhbGlkby5gLFxyXG4gICAgICAnY3BjbnBqSW52YWxpZERpZ2l0JzogYEVzdGUgJHtmaWVsZE5hbWV9IHRlbSB1bSBkw61naXRvIGludsOhbGlkby5gLFxyXG4gICAgICAnaW5jb3JyZWN0JzogYEVzdGUgY2FtcG8gZXN0w6EgaW52w6FsaWRvLmAsXHJcbiAgICAgICdlbWFpbCc6IGBFc3RlIGUtbWFpbCBlc3TDoSBpbnbDoWxpZG8uYFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKGN1c3RvbUVycm9yTWVzc2FnZVxyXG4gICAgICA/IGN1c3RvbUVycm9yTWVzc2FnZVxyXG4gICAgICA6IGNvbmZpZ1t2YWxpZGF0b3JOYW1lXVxyXG4gICAgICAgID8gY29uZmlnW3ZhbGlkYXRvck5hbWVdXHJcbiAgICAgICAgOiBgRXN0ZSB2YWxpZGFkb3IgLSAke3ZhbGlkYXRvck5hbWV9IC0gbsOjbyBmb2kgaW1wbGVtZW50YWRvYCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdW1tYXJ5IE1hcGVpYSBvcyB2YWxvcmVzIGRlIHVtIGZvcm11bMOhcmlvIHJlYXRpdm8gcGFyYSB1bSBvYmpldG8gZGUgbW9kZWxvLlxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogTyBtw6l0b2RvIGBtYXBGb3JtVG9Nb2RlbGAgcmVjZWJlIHVtIG9iamV0byBkZSBtb2RlbG8gZSB1bSBgRm9ybUdyb3VwYCBkbyBBbmd1bGFyLCBcclxuICAgKiBlIHJldG9ybmEgdW0gbm92byBvYmpldG8gcXVlIGNvbWJpbmEgYXMgcHJvcHJpZWRhZGVzIGRvIG1vZGVsbyBvcmlnaW5hbCBjb20gb3MgdmFsb3JlcyBcclxuICAgKiBhdHVhaXMgZG8gZm9ybXVsw6FyaW8uIEVzdGUgbcOpdG9kbyDDqSDDunRpbCBwYXJhIGF0dWFsaXphciBkaW5hbWljYW1lbnRlIGFzIHByb3ByaWVkYWRlcyBcclxuICAgKiBkZSB1bSBtb2RlbG8gY29tIGJhc2Ugbm9zIHZhbG9yZXMgaW5zZXJpZG9zIHBlbG8gdXN1w6FyaW8gZW0gdW0gZm9ybXVsw6FyaW8uXHJcbiAgICogXHJcbiAgICogU2UgbyBvYmpldG8gYHJlY29yZGAgb3UgbyBgZm9ybUdyb3VwYCBmb3JlbSBudWxvcyBvdSBpbmRlZmluaWRvcywgbyBtw6l0b2RvIHJldG9ybmFyw6EgYG51bGxgLlxyXG4gICAqIENhc28gY29udHLDoXJpbywgbyBtw6l0b2RvIHJldG9ybmEgdW0gbm92byBvYmpldG8gcXVlIGluY2x1aSB0b2RhcyBhcyBwcm9wcmllZGFkZXMgXHJcbiAgICogZG8gb2JqZXRvIG9yaWdpbmFsLCBzb2JyZXNjcmV2ZW5kby1hcyBjb20gb3MgdmFsb3JlcyBhdHVhaXMgZG8gZm9ybXVsw6FyaW8sIHNlIGRpc3BvbsOtdmVpcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgLSBPIG9iamV0byBkZSBtb2RlbG8gb3JpZ2luYWwgcXVlIHNlcsOhIGF0dWFsaXphZG8gY29tIG9zIHZhbG9yZXMgZG8gZm9ybXVsw6FyaW8uXHJcbiAgICogQHBhcmFtIHtGb3JtR3JvdXB9IGZvcm1Hcm91cCAtIE8gYEZvcm1Hcm91cGAgY29udGVuZG8gb3MgdmFsb3JlcyBpbnNlcmlkb3MgcGVsbyB1c3XDoXJpby5cclxuICAgKiBAcmV0dXJucyB7b2JqZWN0IHwgbnVsbH0gLSBVbSBub3ZvIG9iamV0byBjb21iaW5hbmRvIG8gbW9kZWxvIG9yaWdpbmFsIGUgb3MgdmFsb3JlcyBkbyBmb3JtdWzDoXJpbywgb3UgYG51bGxgIHNlIGByZWNvcmRgIG91IGBmb3JtR3JvdXBgIGZvcmVtIG51bG9zIG91IGluZGVmaW5pZG9zLlxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiAvLyBTdXBvbmhhIHF1ZSB2b2PDqiB0ZW5oYSB1bSBvYmpldG8gZGUgbW9kZWxvIGBwZXJzb25gIGUgdW0gYEZvcm1Hcm91cGAgY2hhbWFkbyBgcGVyc29uRm9ybWAuXHJcbiAgICogY29uc3QgcGVyc29uID0ge1xyXG4gICAqICAgbmFtZTogJ0pvaG4gRG9lJyxcclxuICAgKiAgIGFnZTogMzAsXHJcbiAgICogICBlbWFpbDogJ2pvaG4uZG9lQGV4YW1wbGUuY29tJ1xyXG4gICAqIH07XHJcbiAgICogXHJcbiAgICogY29uc3QgcGVyc29uRm9ybTogRm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICogICBuYW1lOiBbJ0phbmUgRG9lJ10sXHJcbiAgICogICBhZ2U6IFsyNV0sXHJcbiAgICogICBlbWFpbDogWydqYW5lLmRvZUBleGFtcGxlLmNvbSddXHJcbiAgICogfSk7XHJcbiAgICogXHJcbiAgICogY29uc3QgdXBkYXRlZFBlcnNvbiA9IHRoaXMubWFwRm9ybVRvTW9kZWwocGVyc29uLCBwZXJzb25Gb3JtKTtcclxuICAgKiAvLyBgdXBkYXRlZFBlcnNvbmAgYWdvcmEgY29udMOpbTpcclxuICAgKiAvLyB7XHJcbiAgICogLy8gICBuYW1lOiAnSmFuZSBEb2UnLFxyXG4gICAqIC8vICAgYWdlOiAyNSxcclxuICAgKiAvLyAgIGVtYWlsOiAnamFuZS5kb2VAZXhhbXBsZS5jb20nXHJcbiAgICogLy8gfVxyXG4gICovXHJcbiAgc3RhdGljIG1hcEZvcm1Ub01vZGVsKHJlY29yZDogb2JqZWN0LCBmb3JtR3JvdXA6IEZvcm1Hcm91cCk6IG9iamVjdCB8IG51bGwge1xyXG4gICAgaWYgKChyZWNvcmQgPT09IG51bGwgfHwgcmVjb3JkID09PSB1bmRlZmluZWQpIHx8IChmb3JtR3JvdXAgPT09IG51bGwgfHwgZm9ybUdyb3VwID09PSB1bmRlZmluZWQpKSB7IHJldHVybiBudWxsOyB9XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlY29yZCxcclxuICAgICAgLi4uZm9ybUdyb3VwLnZhbHVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn1cclxuIl19
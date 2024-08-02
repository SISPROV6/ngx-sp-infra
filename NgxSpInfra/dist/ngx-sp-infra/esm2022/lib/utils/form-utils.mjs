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
    mapFormToModel(record, formGroup) {
        if ((record === null || record === undefined) || (formGroup === null || formGroup === undefined)) {
            return null;
        }
        return {
            ...record,
            ...formGroup.value
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3V0aWxzL2Zvcm0tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUE4QixnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRzNHOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFNBQVM7SUFFcEIsd0RBQXdEO0lBQ3hELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxPQUFrQjtRQUM5QyxNQUFNLEdBQUcsR0FBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV0RSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCxvREFBb0Q7SUFDcEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUErQjtRQUNuRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELHdGQUF3RjtJQUN4RixNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBK0I7UUFDeEQsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFBQyxPQUFPLElBQUksQ0FBQTtZQUFDLENBQUM7aUJBQ3BFLENBQUM7Z0JBQUMsT0FBTyxLQUFLLENBQUE7WUFBQyxDQUFDO1FBQ3ZCLENBQUM7YUFDSSxDQUFDO1lBQUMsT0FBTyxLQUFLLENBQUE7UUFBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwyQ0FBMkM7SUFDM0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUE4QztRQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUM7WUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxDQUFDO1lBRXpCLElBQUksT0FBTyxZQUFZLGdCQUFnQixJQUFJLE9BQU8sWUFBWSxnQkFBZ0IsRUFBRSxDQUFDO2dCQUMvRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9CLENBQUM7UUFFSCxDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxTQUFpQixFQUFFLGFBQXFCLEVBQUUsY0FBb0IsRUFBRSxrQkFBMkI7UUFDaEgsTUFBTSxNQUFNLEdBQVM7WUFDbkIsVUFBVSxFQUFFLDJCQUEyQjtZQUN2QyxXQUFXLEVBQUUscUNBQXFDLGNBQWMsQ0FBQyxjQUFjLGNBQWM7WUFDN0YsV0FBVyxFQUFFLHFDQUFxQyxjQUFjLENBQUMsY0FBYyxjQUFjO1lBQzdGLEtBQUssRUFBRSxpQ0FBaUMsY0FBYyxDQUFDLEdBQUcsR0FBRztZQUM3RCxLQUFLLEVBQUUsaUNBQWlDLGNBQWMsQ0FBQyxHQUFHLEdBQUc7WUFDN0QsZUFBZSxFQUFFLFFBQVEsU0FBUyxpQkFBaUI7WUFDbkQsb0JBQW9CLEVBQUUsUUFBUSxTQUFTLDBCQUEwQjtZQUNqRSxXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLE9BQU8sRUFBRSw0QkFBNEI7U0FDdEMsQ0FBQztRQUVGLE9BQU8sQ0FBQyxrQkFBa0I7WUFDeEIsQ0FBQyxDQUFDLGtCQUFrQjtZQUNwQixDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztnQkFDckIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxvQkFBb0IsYUFBYSx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFJRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFzQ0U7SUFDSyxjQUFjLENBQUMsTUFBYyxFQUFFLFNBQW9CO1FBQ3hELElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFBQyxPQUFPLElBQUksQ0FBQztRQUFDLENBQUM7UUFFbEgsT0FBTztZQUNMLEdBQUcsTUFBTTtZQUNULEdBQUcsU0FBUyxDQUFDLEtBQUs7U0FDbkIsQ0FBQztJQUNKLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTmdDb250cm9sLCBVbnR5cGVkRm9ybUdyb3VwLCBVbnR5cGVkRm9ybUFycmF5LCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBzdW1tYXJ5IENvbnTDqW0gZGl2ZXJzb3MgbcOpdG9kb3MgZGUgdXRpbGlkYWRlIHBhcmEgZm9ybXVsw6FyaW9zXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9ybVV0aWxzIHtcclxuXHJcbiAgLyoqIFZlcmlmaWNhIHNlIHVtIGNhbXBvIMOpIGludsOhbGlkbyAoVGVtcGxhdGUgRHJpdmVuKSAqL1xyXG4gIHN0YXRpYyBpc0ludmFsaWRGaWVsZFRlbXBsYXRlKGNvbnRyb2w6IE5nQ29udHJvbCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgcmV0OiBhbnkgPSAhY29udHJvbC52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQpO1xyXG4gIFxyXG4gICAgcmV0dXJuIChyZXQgPyByZXQgOiBmYWxzZSlcclxuICB9XHJcbiAgXHJcbiAgLyoqIFZlcmlmaWNhIHNlIHVtIGNhbXBvIMOpIGludsOhbGlkbyAoRGF0YSBEcml2ZW4pICovXHJcbiAgc3RhdGljIGlzSW52YWxpZEZpZWxkKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoY29udHJvbCA/ICFjb250cm9sLnZhbGlkICYmIChjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZCkgOiBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvKiogVmVyaWZpY2Egc2UgdW0gY2FtcG8gw6kgaW52w6FsaWRvIG91IHNlIHBvc3N1aSBhbGd1bSBlcnJvIGN1c3RvbWl6YWRvIChEYXRhIERyaXZlbikgKi9cclxuICBzdGF0aWMgaXNJbnZhbGlkRmllbGRFcnJvcihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wgfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoY29udHJvbCkge1xyXG4gICAgICBpZiAoIWNvbnRyb2wudmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkKSkgeyByZXR1cm4gdHJ1ZSB9XHJcbiAgICAgIGVsc2UgeyByZXR1cm4gZmFsc2UgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7IHJldHVybiBmYWxzZSB9XHJcbiAgfVxyXG5cclxuICAvKiogVmFsaWRhIHRvZG9zIG9zIGNhbXBvcyBkbyBmb3JtdWzDoXJpbyAqL1xyXG4gIHN0YXRpYyB2YWxpZGF0ZUZpZWxkcyhmb3JtR3JvdXA6IFVudHlwZWRGb3JtR3JvdXAgfCBVbnR5cGVkRm9ybUFycmF5KTogdm9pZCB7XHJcbiAgICBPYmplY3Qua2V5cyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb25zdCBjb250cm9sID0gZm9ybUdyb3VwLmdldChmaWVsZCk7XHJcbiAgXHJcbiAgICAgIGNvbnRyb2w/Lm1hcmtBc0RpcnR5KCk7XHJcbiAgICAgIGNvbnRyb2w/Lm1hcmtBc1RvdWNoZWQoKTtcclxuICAgICAgXHJcbiAgICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgVW50eXBlZEZvcm1Hcm91cCB8fCBjb250cm9sIGluc3RhbmNlb2YgVW50eXBlZEZvcm1BcnJheSkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGVGaWVsZHMoY29udHJvbCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgIH0pO1xyXG4gIFxyXG4gIH0gICAgIFxyXG4gICAgICBcclxuICAvKiogT2J0w6ltIGEgbWVuc2FnZW0gZGUgZXJybyBjb25mb3JtZSBvIHZhbGlkYWRvciB1dGlsaXphZG8gKi9cclxuICBzdGF0aWMgZ2V0RXJyb3JNZXNzYWdlKGZpZWxkTmFtZTogc3RyaW5nLCB2YWxpZGF0b3JOYW1lOiBzdHJpbmcsIHZhbGlkYXRvclZhbHVlPzogYW55LCBjdXN0b21FcnJvck1lc3NhZ2U/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgY29uZmlnIDogYW55ID0ge1xyXG4gICAgICAncmVxdWlyZWQnOiBgRXN0ZSBjYW1wbyDDqSBvYnJpZ2F0w7NyaW8uYCxcclxuICAgICAgJ21pbmxlbmd0aCc6IGBFc3RlIGNhbXBvIGRldmUgcG9zc3VpciBubyBtw61uaW1vICR7dmFsaWRhdG9yVmFsdWUucmVxdWlyZWRMZW5ndGh9IGNhcmFjdGVyZXMuYCxcclxuICAgICAgJ21heGxlbmd0aCc6IGBFc3RlIGNhbXBvIGRldmUgcG9zc3VpciBubyBtw6F4aW1vICR7dmFsaWRhdG9yVmFsdWUucmVxdWlyZWRMZW5ndGh9IGNhcmFjdGVyZXMuYCxcclxuICAgICAgJ21pbic6IGBFc3RlIGNhbXBvIGRldmUgc2VyIG5vIG3DrW5pbW8gJHt2YWxpZGF0b3JWYWx1ZS5taW59LmAsXHJcbiAgICAgICdtYXgnOiBgRXN0ZSBjYW1wbyBkZXZlIHNlciBubyBtw6F4aW1vICR7dmFsaWRhdG9yVmFsdWUubWF4fS5gLFxyXG4gICAgICAnY3BjbnBqSW52YWxpZCc6IGBFc3RlICR7ZmllbGROYW1lfSBlc3TDoSBpbnbDoWxpZG8uYCxcclxuICAgICAgJ2NwY25wakludmFsaWREaWdpdCc6IGBFc3RlICR7ZmllbGROYW1lfSB0ZW0gdW0gZMOtZ2l0byBpbnbDoWxpZG8uYCxcclxuICAgICAgJ2luY29ycmVjdCc6IGBFc3RlIGNhbXBvIGVzdMOhIGludsOhbGlkby5gLFxyXG4gICAgICAnZW1haWwnOiBgRXN0ZSBlLW1haWwgZXN0w6EgaW52w6FsaWRvLmBcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChjdXN0b21FcnJvck1lc3NhZ2VcclxuICAgICAgPyBjdXN0b21FcnJvck1lc3NhZ2VcclxuICAgICAgOiBjb25maWdbdmFsaWRhdG9yTmFtZV1cclxuICAgICAgICA/IGNvbmZpZ1t2YWxpZGF0b3JOYW1lXVxyXG4gICAgICAgIDogYEVzdGUgdmFsaWRhZG9yIC0gJHt2YWxpZGF0b3JOYW1lfSAtIG7Do28gZm9pIGltcGxlbWVudGFkb2ApO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAvKipcclxuICAgKiBAc3VtbWFyeSBNYXBlaWEgb3MgdmFsb3JlcyBkZSB1bSBmb3JtdWzDoXJpbyByZWF0aXZvIHBhcmEgdW0gb2JqZXRvIGRlIG1vZGVsby5cclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIE8gbcOpdG9kbyBgbWFwRm9ybVRvTW9kZWxgIHJlY2ViZSB1bSBvYmpldG8gZGUgbW9kZWxvIGUgdW0gYEZvcm1Hcm91cGAgZG8gQW5ndWxhciwgXHJcbiAgICogZSByZXRvcm5hIHVtIG5vdm8gb2JqZXRvIHF1ZSBjb21iaW5hIGFzIHByb3ByaWVkYWRlcyBkbyBtb2RlbG8gb3JpZ2luYWwgY29tIG9zIHZhbG9yZXMgXHJcbiAgICogYXR1YWlzIGRvIGZvcm11bMOhcmlvLiBFc3RlIG3DqXRvZG8gw6kgw7p0aWwgcGFyYSBhdHVhbGl6YXIgZGluYW1pY2FtZW50ZSBhcyBwcm9wcmllZGFkZXMgXHJcbiAgICogZGUgdW0gbW9kZWxvIGNvbSBiYXNlIG5vcyB2YWxvcmVzIGluc2VyaWRvcyBwZWxvIHVzdcOhcmlvIGVtIHVtIGZvcm11bMOhcmlvLlxyXG4gICAqIFxyXG4gICAqIFNlIG8gb2JqZXRvIGByZWNvcmRgIG91IG8gYGZvcm1Hcm91cGAgZm9yZW0gbnVsb3Mgb3UgaW5kZWZpbmlkb3MsIG8gbcOpdG9kbyByZXRvcm5hcsOhIGBudWxsYC5cclxuICAgKiBDYXNvIGNvbnRyw6FyaW8sIG8gbcOpdG9kbyByZXRvcm5hIHVtIG5vdm8gb2JqZXRvIHF1ZSBpbmNsdWkgdG9kYXMgYXMgcHJvcHJpZWRhZGVzIFxyXG4gICAqIGRvIG9iamV0byBvcmlnaW5hbCwgc29icmVzY3JldmVuZG8tYXMgY29tIG9zIHZhbG9yZXMgYXR1YWlzIGRvIGZvcm11bMOhcmlvLCBzZSBkaXNwb27DrXZlaXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIC0gTyBvYmpldG8gZGUgbW9kZWxvIG9yaWdpbmFsIHF1ZSBzZXLDoSBhdHVhbGl6YWRvIGNvbSBvcyB2YWxvcmVzIGRvIGZvcm11bMOhcmlvLlxyXG4gICAqIEBwYXJhbSB7Rm9ybUdyb3VwfSBmb3JtR3JvdXAgLSBPIGBGb3JtR3JvdXBgIGNvbnRlbmRvIG9zIHZhbG9yZXMgaW5zZXJpZG9zIHBlbG8gdXN1w6FyaW8uXHJcbiAgICogQHJldHVybnMge29iamVjdCB8IG51bGx9IC0gVW0gbm92byBvYmpldG8gY29tYmluYW5kbyBvIG1vZGVsbyBvcmlnaW5hbCBlIG9zIHZhbG9yZXMgZG8gZm9ybXVsw6FyaW8sIG91IGBudWxsYCBzZSBgcmVjb3JkYCBvdSBgZm9ybUdyb3VwYCBmb3JlbSBudWxvcyBvdSBpbmRlZmluaWRvcy5cclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogLy8gU3Vwb25oYSBxdWUgdm9jw6ogdGVuaGEgdW0gb2JqZXRvIGRlIG1vZGVsbyBgcGVyc29uYCBlIHVtIGBGb3JtR3JvdXBgIGNoYW1hZG8gYHBlcnNvbkZvcm1gLlxyXG4gICAqIGNvbnN0IHBlcnNvbiA9IHtcclxuICAgKiAgIG5hbWU6ICdKb2huIERvZScsXHJcbiAgICogICBhZ2U6IDMwLFxyXG4gICAqICAgZW1haWw6ICdqb2huLmRvZUBleGFtcGxlLmNvbSdcclxuICAgKiB9O1xyXG4gICAqIFxyXG4gICAqIGNvbnN0IHBlcnNvbkZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAqICAgbmFtZTogWydKYW5lIERvZSddLFxyXG4gICAqICAgYWdlOiBbMjVdLFxyXG4gICAqICAgZW1haWw6IFsnamFuZS5kb2VAZXhhbXBsZS5jb20nXVxyXG4gICAqIH0pO1xyXG4gICAqIFxyXG4gICAqIGNvbnN0IHVwZGF0ZWRQZXJzb24gPSB0aGlzLm1hcEZvcm1Ub01vZGVsKHBlcnNvbiwgcGVyc29uRm9ybSk7XHJcbiAgICogLy8gYHVwZGF0ZWRQZXJzb25gIGFnb3JhIGNvbnTDqW06XHJcbiAgICogLy8ge1xyXG4gICAqIC8vICAgbmFtZTogJ0phbmUgRG9lJyxcclxuICAgKiAvLyAgIGFnZTogMjUsXHJcbiAgICogLy8gICBlbWFpbDogJ2phbmUuZG9lQGV4YW1wbGUuY29tJ1xyXG4gICAqIC8vIH1cclxuICAqL1xyXG4gIHB1YmxpYyBtYXBGb3JtVG9Nb2RlbChyZWNvcmQ6IG9iamVjdCwgZm9ybUdyb3VwOiBGb3JtR3JvdXApOiBvYmplY3QgfCBudWxsIHtcclxuICAgIGlmICgocmVjb3JkID09PSBudWxsIHx8IHJlY29yZCA9PT0gdW5kZWZpbmVkKSB8fCAoZm9ybUdyb3VwID09PSBudWxsIHx8IGZvcm1Hcm91cCA9PT0gdW5kZWZpbmVkKSkgeyByZXR1cm4gbnVsbDsgfVxyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5yZWNvcmQsXHJcbiAgICAgIC4uLmZvcm1Hcm91cC52YWx1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
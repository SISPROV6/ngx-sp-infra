import { UntypedFormGroup, UntypedFormArray } from '@angular/forms';
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
    static getErrorMessage(fieldName, validatorName, validatorValue) {
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
        return (config[validatorName] ? config[validatorName] : `Este validador - ${validatorName} - não implementado`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3V0aWxzL2Zvcm0tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUE4QixnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhHLE1BQU0sT0FBTyxTQUFTO0lBRXBCLHdEQUF3RDtJQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsT0FBa0I7UUFDOUMsTUFBTSxHQUFHLEdBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUQsb0RBQW9EO0lBQ3BELE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBK0I7UUFDbkQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRCwyQ0FBMkM7SUFDM0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUE4QztRQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUM7WUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxDQUFDO1lBRXpCLElBQUksT0FBTyxZQUFZLGdCQUFnQixJQUFJLE9BQU8sWUFBWSxnQkFBZ0IsRUFBRSxDQUFDO2dCQUMvRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9CLENBQUM7UUFFSCxDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxTQUFpQixFQUFFLGFBQXFCLEVBQUUsY0FBb0I7UUFDbkYsTUFBTSxNQUFNLEdBQVM7WUFDbkIsVUFBVSxFQUFFLDJCQUEyQjtZQUN2QyxXQUFXLEVBQUUscUNBQXFDLGNBQWMsQ0FBQyxjQUFjLGNBQWM7WUFDN0YsV0FBVyxFQUFFLHFDQUFxQyxjQUFjLENBQUMsY0FBYyxjQUFjO1lBQzdGLEtBQUssRUFBRSxpQ0FBaUMsY0FBYyxDQUFDLEdBQUcsR0FBRztZQUM3RCxLQUFLLEVBQUUsaUNBQWlDLGNBQWMsQ0FBQyxHQUFHLEdBQUc7WUFDN0QsZUFBZSxFQUFFLFFBQVEsU0FBUyxpQkFBaUI7WUFDbkQsb0JBQW9CLEVBQUUsUUFBUSxTQUFTLDBCQUEwQjtZQUNqRSxXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLE9BQU8sRUFBRSw0QkFBNEI7U0FDdEMsQ0FBQztRQUVGLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLGFBQWEscUJBQXFCLENBQUMsQ0FBQztJQUNsSCxDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIE5nQ29udHJvbCwgVW50eXBlZEZvcm1Hcm91cCwgVW50eXBlZEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtVXRpbHMge1xyXG5cclxuICAvKiogVmVyaWZpY2Egc2UgdW0gY2FtcG8gw6kgaW52w6FsaWRvIChUZW1wbGF0ZSBEcml2ZW4pICovXHJcbiAgc3RhdGljIGlzSW52YWxpZEZpZWxkVGVtcGxhdGUoY29udHJvbDogTmdDb250cm9sKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCByZXQ6IGFueSA9ICFjb250cm9sLnZhbGlkICYmIChjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZCk7XHJcbiAgXHJcbiAgICByZXR1cm4gKHJldCA/IHJldCA6IGZhbHNlKVxyXG4gIH1cclxuICBcclxuICAvKiogVmVyaWZpY2Egc2UgdW0gY2FtcG8gw6kgaW52w6FsaWRvIChEYXRhIERyaXZlbikgKi9cclxuICBzdGF0aWMgaXNJbnZhbGlkRmllbGQoY29udHJvbDogQWJzdHJhY3RDb250cm9sIHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sID8gIWNvbnRyb2wudmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkKSA6IGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8qKiBWYWxpZGEgdG9kb3Mgb3MgY2FtcG9zIGRvIGZvcm11bMOhcmlvICovXHJcbiAgc3RhdGljIHZhbGlkYXRlRmllbGRzKGZvcm1Hcm91cDogVW50eXBlZEZvcm1Hcm91cCB8IFVudHlwZWRGb3JtQXJyYXkpOiB2b2lkIHtcclxuICAgIE9iamVjdC5rZXlzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtR3JvdXAuZ2V0KGZpZWxkKTtcclxuICBcclxuICAgICAgY29udHJvbD8ubWFya0FzRGlydHkoKTtcclxuICAgICAgY29udHJvbD8ubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgICBcclxuICAgICAgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBVbnR5cGVkRm9ybUdyb3VwIHx8IGNvbnRyb2wgaW5zdGFuY2VvZiBVbnR5cGVkRm9ybUFycmF5KSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZUZpZWxkcyhjb250cm9sKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgfSAgICAgXHJcbiAgICAgIFxyXG4gIC8qKiBPYnTDqW0gYSBtZW5zYWdlbSBkZSBlcnJvIGNvbmZvcm1lIG8gdmFsaWRhZG9yIHV0aWxpemFkbyAqL1xyXG4gIHN0YXRpYyBnZXRFcnJvck1lc3NhZ2UoZmllbGROYW1lOiBzdHJpbmcsIHZhbGlkYXRvck5hbWU6IHN0cmluZywgdmFsaWRhdG9yVmFsdWU/OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgY29uZmlnIDogYW55ID0ge1xyXG4gICAgICAncmVxdWlyZWQnOiBgRXN0ZSBjYW1wbyDDqSBvYnJpZ2F0w7NyaW8uYCxcclxuICAgICAgJ21pbmxlbmd0aCc6IGBFc3RlIGNhbXBvIGRldmUgcG9zc3VpciBubyBtw61uaW1vICR7dmFsaWRhdG9yVmFsdWUucmVxdWlyZWRMZW5ndGh9IGNhcmFjdGVyZXMuYCxcclxuICAgICAgJ21heGxlbmd0aCc6IGBFc3RlIGNhbXBvIGRldmUgcG9zc3VpciBubyBtw6F4aW1vICR7dmFsaWRhdG9yVmFsdWUucmVxdWlyZWRMZW5ndGh9IGNhcmFjdGVyZXMuYCxcclxuICAgICAgJ21pbic6IGBFc3RlIGNhbXBvIGRldmUgc2VyIG5vIG3DrW5pbW8gJHt2YWxpZGF0b3JWYWx1ZS5taW59LmAsXHJcbiAgICAgICdtYXgnOiBgRXN0ZSBjYW1wbyBkZXZlIHNlciBubyBtw6F4aW1vICR7dmFsaWRhdG9yVmFsdWUubWF4fS5gLFxyXG4gICAgICAnY3BjbnBqSW52YWxpZCc6IGBFc3RlICR7ZmllbGROYW1lfSBlc3TDoSBpbnbDoWxpZG8uYCxcclxuICAgICAgJ2NwY25wakludmFsaWREaWdpdCc6IGBFc3RlICR7ZmllbGROYW1lfSB0ZW0gdW0gZMOtZ2l0byBpbnbDoWxpZG8uYCxcclxuICAgICAgJ2luY29ycmVjdCc6IGBFc3RlIGNhbXBvIGVzdMOhIGludsOhbGlkby5gLFxyXG4gICAgICAnZW1haWwnOiBgRXN0ZSBlLW1haWwgZXN0w6EgaW52w6FsaWRvLmBcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChjb25maWdbdmFsaWRhdG9yTmFtZV0gPyBjb25maWdbdmFsaWRhdG9yTmFtZV0gOiBgRXN0ZSB2YWxpZGFkb3IgLSAke3ZhbGlkYXRvck5hbWV9IC0gbsOjbyBpbXBsZW1lbnRhZG9gKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
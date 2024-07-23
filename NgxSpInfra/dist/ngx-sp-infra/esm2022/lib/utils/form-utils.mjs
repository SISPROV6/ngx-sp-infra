import { UntypedFormGroup, UntypedFormArray } from '@angular/forms';
export class FormUtils {
    // Verifica se um campo é inválido (Template Driven)
    static isInvalidFieldTemplate(control) {
        const ret = !control.valid && (control.dirty || control.touched);
        return (ret ? ret : false);
    }
    // Verifica se um campo é inválido (Data Driven)
    static isInvalidField(control) {
        return (control ? !control.valid && (control.dirty || control.touched) : false);
    }
    // Valida todos os campos do formulário
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
    // Obtém a mensagem de erro conforme o validador utilizado
    static getErrorMessage(fieldName, validatorName, validatorValue) {
        const config = {
            'required': `${fieldName} é obrigatório.`,
            'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
            'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
            'min': `${fieldName} precisam ser no mínimo ${validatorValue.min}.`,
            'max': `${fieldName} podem ser no máximo ${validatorValue.max}.`,
            'cpcnpjInvalid': `${fieldName} é inválido.`,
            'cpcnpjInvalidDigit': `${fieldName} com digito inválido.`,
            'incorrect': `O valor de ${fieldName} é inválido.`,
            'email': `${fieldName} é inválido.`
        };
        return (config[validatorName] ? config[validatorName] : `${validatorName} não implementado`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3V0aWxzL2Zvcm0tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUE4QixnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhHLE1BQU0sT0FBTyxTQUFTO0lBRXBCLG9EQUFvRDtJQUNwRCxNQUFNLENBQUMsc0JBQXNCLENBQUMsT0FBa0I7UUFDOUMsTUFBTSxHQUFHLEdBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUQsZ0RBQWdEO0lBQ2hELE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBK0I7UUFDbkQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRCx1Q0FBdUM7SUFDdkMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUE4QztRQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUM7WUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxDQUFDO1lBRXpCLElBQUksT0FBTyxZQUFZLGdCQUFnQixJQUFJLE9BQU8sWUFBWSxnQkFBZ0IsRUFBRSxDQUFDO2dCQUMvRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9CLENBQUM7UUFFSCxDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxTQUFpQixFQUFFLGFBQXFCLEVBQUUsY0FBb0I7UUFFbkYsTUFBTSxNQUFNLEdBQVM7WUFDbkIsVUFBVSxFQUFFLEdBQUcsU0FBUyxpQkFBaUI7WUFDekMsV0FBVyxFQUFFLEdBQUcsU0FBUywwQkFBMEIsY0FBYyxDQUFDLGNBQWMsY0FBYztZQUM5RixXQUFXLEVBQUUsR0FBRyxTQUFTLDBCQUEwQixjQUFjLENBQUMsY0FBYyxjQUFjO1lBQzlGLEtBQUssRUFBRSxHQUFHLFNBQVMsMkJBQTJCLGNBQWMsQ0FBQyxHQUFHLEdBQUc7WUFDbkUsS0FBSyxFQUFFLEdBQUcsU0FBUyx3QkFBd0IsY0FBYyxDQUFDLEdBQUcsR0FBRztZQUNoRSxlQUFlLEVBQUUsR0FBRyxTQUFTLGNBQWM7WUFDM0Msb0JBQW9CLEVBQUUsR0FBRyxTQUFTLHVCQUF1QjtZQUN6RCxXQUFXLEVBQUUsY0FBYyxTQUFTLGNBQWM7WUFDbEQsT0FBTyxFQUFFLEdBQUcsU0FBUyxjQUFjO1NBQ3BDLENBQUM7UUFFRixPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxtQkFBbUIsQ0FBQyxDQUFDO0lBQy9GLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTmdDb250cm9sLCBVbnR5cGVkRm9ybUdyb3VwLCBVbnR5cGVkRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1VdGlscyB7XHJcblxyXG4gIC8vIFZlcmlmaWNhIHNlIHVtIGNhbXBvIMOpIGludsOhbGlkbyAoVGVtcGxhdGUgRHJpdmVuKVxyXG4gIHN0YXRpYyBpc0ludmFsaWRGaWVsZFRlbXBsYXRlKGNvbnRyb2w6IE5nQ29udHJvbCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgcmV0OiBhbnkgPSAhY29udHJvbC52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQpO1xyXG4gIFxyXG4gICAgcmV0dXJuIChyZXQgPyByZXQgOiBmYWxzZSlcclxuICB9XHJcbiAgXHJcbiAgLy8gVmVyaWZpY2Egc2UgdW0gY2FtcG8gw6kgaW52w6FsaWRvIChEYXRhIERyaXZlbilcclxuICBzdGF0aWMgaXNJbnZhbGlkRmllbGQoY29udHJvbDogQWJzdHJhY3RDb250cm9sIHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sID8gIWNvbnRyb2wudmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkKSA6IGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8vIFZhbGlkYSB0b2RvcyBvcyBjYW1wb3MgZG8gZm9ybXVsw6FyaW9cclxuICBzdGF0aWMgdmFsaWRhdGVGaWVsZHMoZm9ybUdyb3VwOiBVbnR5cGVkRm9ybUdyb3VwIHwgVW50eXBlZEZvcm1BcnJheSk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmtleXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Hcm91cC5nZXQoZmllbGQpO1xyXG4gIFxyXG4gICAgICBjb250cm9sPy5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgICBjb250cm9sPy5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIFVudHlwZWRGb3JtR3JvdXAgfHwgY29udHJvbCBpbnN0YW5jZW9mIFVudHlwZWRGb3JtQXJyYXkpIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRlRmllbGRzKGNvbnRyb2wpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9KTtcclxuICBcclxuICB9ICAgICBcclxuICAgICAgXHJcbiAgLy8gT2J0w6ltIGEgbWVuc2FnZW0gZGUgZXJybyBjb25mb3JtZSBvIHZhbGlkYWRvciB1dGlsaXphZG9cclxuICBzdGF0aWMgZ2V0RXJyb3JNZXNzYWdlKGZpZWxkTmFtZTogc3RyaW5nLCB2YWxpZGF0b3JOYW1lOiBzdHJpbmcsIHZhbGlkYXRvclZhbHVlPzogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgXHJcbiAgICBjb25zdCBjb25maWcgOiBhbnkgPSB7XHJcbiAgICAgICdyZXF1aXJlZCc6IGAke2ZpZWxkTmFtZX0gw6kgb2JyaWdhdMOzcmlvLmAsXHJcbiAgICAgICdtaW5sZW5ndGgnOiBgJHtmaWVsZE5hbWV9IHByZWNpc2EgdGVyIG5vIG3DrW5pbW8gJHt2YWxpZGF0b3JWYWx1ZS5yZXF1aXJlZExlbmd0aH0gY2FyYWN0ZXJlcy5gLFxyXG4gICAgICAnbWF4bGVuZ3RoJzogYCR7ZmllbGROYW1lfSBwcmVjaXNhIHRlciBubyBtw6F4aW1vICR7dmFsaWRhdG9yVmFsdWUucmVxdWlyZWRMZW5ndGh9IGNhcmFjdGVyZXMuYCxcclxuICAgICAgJ21pbic6IGAke2ZpZWxkTmFtZX0gcHJlY2lzYW0gc2VyIG5vIG3DrW5pbW8gJHt2YWxpZGF0b3JWYWx1ZS5taW59LmAsXHJcbiAgICAgICdtYXgnOiBgJHtmaWVsZE5hbWV9IHBvZGVtIHNlciBubyBtw6F4aW1vICR7dmFsaWRhdG9yVmFsdWUubWF4fS5gLFxyXG4gICAgICAnY3BjbnBqSW52YWxpZCc6IGAke2ZpZWxkTmFtZX0gw6kgaW52w6FsaWRvLmAsXHJcbiAgICAgICdjcGNucGpJbnZhbGlkRGlnaXQnOiBgJHtmaWVsZE5hbWV9IGNvbSBkaWdpdG8gaW52w6FsaWRvLmAsXHJcbiAgICAgICdpbmNvcnJlY3QnOiBgTyB2YWxvciBkZSAke2ZpZWxkTmFtZX0gw6kgaW52w6FsaWRvLmAsXHJcbiAgICAgICdlbWFpbCc6IGAke2ZpZWxkTmFtZX0gw6kgaW52w6FsaWRvLmBcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChjb25maWdbdmFsaWRhdG9yTmFtZV0gPyBjb25maWdbdmFsaWRhdG9yTmFtZV0gOiBgJHt2YWxpZGF0b3JOYW1lfSBuw6NvIGltcGxlbWVudGFkb2ApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
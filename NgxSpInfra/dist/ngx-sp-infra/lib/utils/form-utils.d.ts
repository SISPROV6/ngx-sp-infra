import { AbstractControl, NgControl, UntypedFormGroup, UntypedFormArray } from '@angular/forms';
export declare class FormUtils {
    static isInvalidFieldTemplate(control: NgControl): boolean;
    static isInvalidField(control: AbstractControl | null): boolean;
    static validateFields(formGroup: UntypedFormGroup | UntypedFormArray): void;
    static getErrorMessage(fieldName: string, validatorName: string, validatorValue?: any): string;
}

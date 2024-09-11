import { AsyncValidatorFn, FormControl, FormControlState, ValidatorFn } from "@angular/forms";
import { Observable } from "rxjs";
export declare class CustomFormControl<T = any> extends FormControl {
    private _dirtyChanges;
    private _touchedChanges;
    constructor(formState?: T | FormControlState<T>, validatorOrOpts?: ValidatorFn | ValidatorFn[] | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null);
    markAsDirty(opts?: {
        onlySelf?: boolean;
    }): void;
    markAsTouched(opts?: {
        onlySelf?: boolean;
    }): void;
    get dirtyChanges(): Observable<boolean>;
    get touchedChanges(): Observable<boolean>;
}
//# sourceMappingURL=custom-form-control.d.ts.map
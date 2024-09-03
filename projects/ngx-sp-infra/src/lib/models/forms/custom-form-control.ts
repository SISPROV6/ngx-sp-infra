import { AsyncValidatorFn, FormControl, FormControlState, ValidatorFn } from "@angular/forms";
import { Observable, Subject } from "rxjs";

export class CustomFormControl<T = any> extends FormControl {

   private _dirtyChanges: Subject<boolean> = new Subject<boolean>();
   private _touchedChanges: Subject<boolean> = new Subject<boolean>();
 
   constructor(
      formState: T | FormControlState<T> = null as T,
      validatorOrOpts?: ValidatorFn | ValidatorFn[] | null,
      asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
   ) {
     super(formState, validatorOrOpts, asyncValidator);
   }
 
   override markAsDirty(opts: { onlySelf?: boolean } = {}): void {
     super.markAsDirty(opts);
     this._dirtyChanges.next(this.dirty);
   }
 
   override markAsTouched(opts: { onlySelf?: boolean } = {}): void {
     super.markAsTouched(opts);
     this._touchedChanges.next(this.touched);
   }
 
   get dirtyChanges(): Observable<boolean> {
     return this._dirtyChanges.asObservable();
   }
 
   get touchedChanges(): Observable<boolean> {
     return this._touchedChanges.asObservable();
   }
}

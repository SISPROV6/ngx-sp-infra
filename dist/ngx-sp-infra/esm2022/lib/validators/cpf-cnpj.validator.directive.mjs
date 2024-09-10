import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { CpfCnpjValidator } from './cpf-cnpj.validator';
import * as i0 from "@angular/core";
export class CpfCnpjValidatorDirective extends CpfCnpjValidator {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CpfCnpjValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: CpfCnpjValidatorDirective, selector: "[appCpfCnpjValidate][ngModel]", providers: [{
                provide: NG_VALIDATORS,
                useExisting: CpfCnpjValidatorDirective,
                multi: true
            }], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CpfCnpjValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appCpfCnpjValidate][ngModel]',
                    providers: [{
                            provide: NG_VALIDATORS,
                            useExisting: CpfCnpjValidatorDirective,
                            multi: true
                        }]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BmLWNucGoudmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3ZhbGlkYXRvcnMvY3BmLWNucGoudmFsaWRhdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBYSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFXeEQsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGdCQUFnQjsrR0FBbEQseUJBQXlCO21HQUF6Qix5QkFBeUIsd0RBTnZCLENBQUM7Z0JBQ1IsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLEtBQUssRUFBRSxJQUFJO2FBQ2QsQ0FBQzs7NEZBRU8seUJBQXlCO2tCQVJyQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDOzRCQUNSLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLDJCQUEyQjs0QkFDdEMsS0FBSyxFQUFFLElBQUk7eUJBQ2QsQ0FBQztpQkFDTCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdG9yLCBOR19WQUxJREFUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ3BmQ25walZhbGlkYXRvciB9IGZyb20gJy4vY3BmLWNucGoudmFsaWRhdG9yJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1thcHBDcGZDbnBqVmFsaWRhdGVdW25nTW9kZWxdJyxcbiAgICBwcm92aWRlcnM6IFt7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBDcGZDbnBqVmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH1dXG59KVxuZXhwb3J0IGNsYXNzIENwZkNucGpWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBDcGZDbnBqVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHsgfVxuIl19
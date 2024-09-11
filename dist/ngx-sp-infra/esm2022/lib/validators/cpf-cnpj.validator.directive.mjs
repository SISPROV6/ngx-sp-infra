import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { CpfCnpjValidator } from './cpf-cnpj.validator';
import * as i0 from "@angular/core";
export class CpfCnpjValidatorDirective extends CpfCnpjValidator {
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵCpfCnpjValidatorDirective_BaseFactory; return function CpfCnpjValidatorDirective_Factory(t) { return (ɵCpfCnpjValidatorDirective_BaseFactory || (ɵCpfCnpjValidatorDirective_BaseFactory = i0.ɵɵgetInheritedFactory(CpfCnpjValidatorDirective)))(t || CpfCnpjValidatorDirective); }; })(); }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CpfCnpjValidatorDirective, selectors: [["", "appCpfCnpjValidate", "", "ngModel", ""]], features: [i0.ɵɵProvidersFeature([{
                    provide: NG_VALIDATORS,
                    useExisting: CpfCnpjValidatorDirective,
                    multi: true
                }]), i0.ɵɵInheritDefinitionFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CpfCnpjValidatorDirective, [{
        type: Directive,
        args: [{
                selector: '[appCpfCnpjValidate][ngModel]',
                providers: [{
                        provide: NG_VALIDATORS,
                        useExisting: CpfCnpjValidatorDirective,
                        multi: true
                    }]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BmLWNucGoudmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3ZhbGlkYXRvcnMvY3BmLWNucGoudmFsaWRhdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBYSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFXeEQsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGdCQUFnQjt3UUFBbEQseUJBQXlCLFNBQXpCLHlCQUF5QjtvRUFBekIseUJBQXlCLCtGQU52QixDQUFDO29CQUNSLE9BQU8sRUFBRSxhQUFhO29CQUN0QixXQUFXLEVBQUUseUJBQXlCO29CQUN0QyxLQUFLLEVBQUUsSUFBSTtpQkFDZCxDQUFDOztpRkFFTyx5QkFBeUI7Y0FSckMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDO3dCQUNSLE9BQU8sRUFBRSxhQUFhO3dCQUN0QixXQUFXLDJCQUEyQjt3QkFDdEMsS0FBSyxFQUFFLElBQUk7cUJBQ2QsQ0FBQzthQUNMIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3IsIE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDcGZDbnBqVmFsaWRhdG9yIH0gZnJvbSAnLi9jcGYtY25wai52YWxpZGF0b3InO1xuXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2FwcENwZkNucGpWYWxpZGF0ZV1bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW3tcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IENwZkNucGpWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfV1cbn0pXG5leHBvcnQgY2xhc3MgQ3BmQ25walZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIENwZkNucGpWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IgeyB9XG4iXX0=
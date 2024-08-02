import { Component, Input } from '@angular/core';
import { FormUtils } from '../../utils/form-utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class FieldErrorMessageComponent {
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
    }
    get errorMessage() {
        for (let propertyName in this.control?.errors) {
            if (this.control?.errors.hasOwnProperty(propertyName) &&
                (this.control?.dirty || this.control?.touched)) {
                return FormUtils.getErrorMessage(this.label, propertyName, this.control?.errors[propertyName], this.customErrorMessage);
            }
        }
        return null;
    }
    ngOnInit() {
        this._renderer.setStyle(this._elementRef.nativeElement, 'width', '100%');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: FieldErrorMessageComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.11", type: FieldErrorMessageComponent, selector: "app-field-error-message", inputs: { customErrorMessage: ["customMessage", "customErrorMessage"], control: "control", label: "label" }, ngImport: i0, template: "@if (customErrorMessage && customErrorMessage != \"\") {\r\n    <div class=\"invalid-feedback d-block\" role=\"alert\" *ngIf=\"customErrorMessage !== null\"> {{ customErrorMessage }} </div>\r\n} @else {\r\n    <div class=\"invalid-feedback d-block\" role=\"alert\" *ngIf=\"errorMessage !== null\"> {{ errorMessage }} </div>\r\n}", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: FieldErrorMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-field-error-message', template: "@if (customErrorMessage && customErrorMessage != \"\") {\r\n    <div class=\"invalid-feedback d-block\" role=\"alert\" *ngIf=\"customErrorMessage !== null\"> {{ customErrorMessage }} </div>\r\n} @else {\r\n    <div class=\"invalid-feedback d-block\" role=\"alert\" *ngIf=\"errorMessage !== null\"> {{ errorMessage }} </div>\r\n}" }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], propDecorators: { customErrorMessage: [{
                type: Input,
                args: ['customMessage']
            }], control: [{
                type: Input
            }], label: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWVycm9yLW1lc3NhZ2UvZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWVycm9yLW1lc3NhZ2UvZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFPbkQsTUFBTSxPQUFPLDBCQUEwQjtJQU1yQyxZQUNVLFNBQW9CLEVBQ3BCLFdBQXVCO1FBRHZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7SUFDN0IsQ0FBQztJQUdMLElBQVcsWUFBWTtRQUNyQixLQUFLLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDOUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO2dCQUNuRCxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzVILENBQUM7UUFDSCxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzRSxDQUFDOytHQTFCVSwwQkFBMEI7bUdBQTFCLDBCQUEwQiw0S0NWdkMsMFVBSUM7OzRGRE1ZLDBCQUEwQjtrQkFMdEMsU0FBUzsrQkFDRSx5QkFBeUI7dUdBS0osa0JBQWtCO3NCQUFoRCxLQUFLO3VCQUFDLGVBQWU7Z0JBQ2IsT0FBTztzQkFBZixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLXV0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWZpZWxkLWVycm9yLW1lc3NhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWVsZC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9maWVsZC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRFcnJvck1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgnY3VzdG9tTWVzc2FnZScpIHB1YmxpYyBjdXN0b21FcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICBASW5wdXQoKSBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wgfCBudWxsO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7IH1cclxuXHJcblxyXG4gIHB1YmxpYyBnZXQgZXJyb3JNZXNzYWdlKCkge1xyXG4gICAgZm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHRoaXMuY29udHJvbD8uZXJyb3JzKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbnRyb2w/LmVycm9ycy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmXHJcbiAgICAgICAgKHRoaXMuY29udHJvbD8uZGlydHkgfHwgdGhpcy5jb250cm9sPy50b3VjaGVkKSkge1xyXG4gICAgICAgICAgcmV0dXJuIEZvcm1VdGlscy5nZXRFcnJvck1lc3NhZ2UodGhpcy5sYWJlbCwgcHJvcGVydHlOYW1lLCB0aGlzLmNvbnRyb2w/LmVycm9yc1twcm9wZXJ0eU5hbWVdLCB0aGlzLmN1c3RvbUVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgXHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCAnMTAwJScpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiQGlmIChjdXN0b21FcnJvck1lc3NhZ2UgJiYgY3VzdG9tRXJyb3JNZXNzYWdlICE9IFwiXCIpIHtcclxuICAgIDxkaXYgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIiByb2xlPVwiYWxlcnRcIiAqbmdJZj1cImN1c3RvbUVycm9yTWVzc2FnZSAhPT0gbnVsbFwiPiB7eyBjdXN0b21FcnJvck1lc3NhZ2UgfX0gPC9kaXY+XHJcbn0gQGVsc2Uge1xyXG4gICAgPGRpdiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiIHJvbGU9XCJhbGVydFwiICpuZ0lmPVwiZXJyb3JNZXNzYWdlICE9PSBudWxsXCI+IHt7IGVycm9yTWVzc2FnZSB9fSA8L2Rpdj5cclxufSJdfQ==
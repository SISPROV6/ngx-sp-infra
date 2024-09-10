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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FieldErrorMessageComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: FieldErrorMessageComponent, selector: "app-field-error-message", inputs: { customErrorMessage: ["customMessage", "customErrorMessage"], control: "control", label: "label" }, ngImport: i0, template: "@if (customErrorMessage && customErrorMessage != \"\") {\n    <div class=\"invalid-feedback d-block\" role=\"alert\" *ngIf=\"customErrorMessage !== null\"> {{ customErrorMessage }} </div>\n} @else {\n    <div class=\"invalid-feedback d-block\" role=\"alert\" *ngIf=\"errorMessage !== null\"> {{ errorMessage }} </div>\n}", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FieldErrorMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-field-error-message', template: "@if (customErrorMessage && customErrorMessage != \"\") {\n    <div class=\"invalid-feedback d-block\" role=\"alert\" *ngIf=\"customErrorMessage !== null\"> {{ customErrorMessage }} </div>\n} @else {\n    <div class=\"invalid-feedback d-block\" role=\"alert\" *ngIf=\"errorMessage !== null\"> {{ errorMessage }} </div>\n}" }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], propDecorators: { customErrorMessage: [{
                type: Input,
                args: ['customMessage']
            }], control: [{
                type: Input
            }], label: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWVycm9yLW1lc3NhZ2UvZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWVycm9yLW1lc3NhZ2UvZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFPbkQsTUFBTSxPQUFPLDBCQUEwQjtJQU1yQyxZQUNVLFNBQW9CLEVBQ3BCLFdBQXVCO1FBRHZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7SUFDN0IsQ0FBQztJQUdMLElBQVcsWUFBWTtRQUNyQixLQUFLLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDOUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO2dCQUNuRCxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzVILENBQUM7UUFDSCxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzRSxDQUFDOytHQTFCVSwwQkFBMEI7bUdBQTFCLDBCQUEwQiw0S0NWdkMsa1VBSUM7OzRGRE1ZLDBCQUEwQjtrQkFMdEMsU0FBUzsrQkFDRSx5QkFBeUI7dUdBS0osa0JBQWtCO3NCQUFoRCxLQUFLO3VCQUFDLGVBQWU7Z0JBQ2IsT0FBTztzQkFBZixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLXV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZpZWxkLWVycm9yLW1lc3NhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpZWxkLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkRXJyb3JNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdjdXN0b21NZXNzYWdlJykgcHVibGljIGN1c3RvbUVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wgfCBudWxsO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkgeyB9XG5cblxuICBwdWJsaWMgZ2V0IGVycm9yTWVzc2FnZSgpIHtcbiAgICBmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gdGhpcy5jb250cm9sPy5lcnJvcnMpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRyb2w/LmVycm9ycy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmXG4gICAgICAgICh0aGlzLmNvbnRyb2w/LmRpcnR5IHx8IHRoaXMuY29udHJvbD8udG91Y2hlZCkpIHtcbiAgICAgICAgICByZXR1cm4gRm9ybVV0aWxzLmdldEVycm9yTWVzc2FnZSh0aGlzLmxhYmVsLCBwcm9wZXJ0eU5hbWUsIHRoaXMuY29udHJvbD8uZXJyb3JzW3Byb3BlcnR5TmFtZV0sIHRoaXMuY3VzdG9tRXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsICcxMDAlJyk7XG4gIH1cblxufVxuIiwiQGlmIChjdXN0b21FcnJvck1lc3NhZ2UgJiYgY3VzdG9tRXJyb3JNZXNzYWdlICE9IFwiXCIpIHtcbiAgICA8ZGl2IGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgcm9sZT1cImFsZXJ0XCIgKm5nSWY9XCJjdXN0b21FcnJvck1lc3NhZ2UgIT09IG51bGxcIj4ge3sgY3VzdG9tRXJyb3JNZXNzYWdlIH19IDwvZGl2PlxufSBAZWxzZSB7XG4gICAgPGRpdiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiIHJvbGU9XCJhbGVydFwiICpuZ0lmPVwiZXJyb3JNZXNzYWdlICE9PSBudWxsXCI+IHt7IGVycm9yTWVzc2FnZSB9fSA8L2Rpdj5cbn0iXX0=
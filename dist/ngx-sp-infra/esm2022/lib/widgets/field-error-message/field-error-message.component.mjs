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
        console.log("appFieldErrorMessage.control", this.control);
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: FieldErrorMessageComponent, selector: "app-field-error-message", inputs: { customErrorMessage: ["customMessage", "customErrorMessage"], control: "control", label: "label" }, ngImport: i0, template: "@if (customErrorMessage && customErrorMessage != \"\") {\r\n    <div class=\"invalid-feedback d-block\" role=\"alert\" *ngIf=\"customErrorMessage !== null\"> {{ customErrorMessage }} </div>\r\n} @else {\r\n    <div class=\"invalid-feedback d-block\" role=\"alert\" *ngIf=\"errorMessage !== null\"> {{ errorMessage }} </div>\r\n}", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FieldErrorMessageComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWVycm9yLW1lc3NhZ2UvZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWVycm9yLW1lc3NhZ2UvZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFPbkQsTUFBTSxPQUFPLDBCQUEwQjtJQU1yQyxZQUNVLFNBQW9CLEVBQ3BCLFdBQXVCO1FBRHZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7SUFDN0IsQ0FBQztJQUdMLElBQVcsWUFBWTtRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxRCxLQUFLLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDOUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO2dCQUNuRCxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzVILENBQUM7UUFDSCxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzRSxDQUFDOytHQTVCVSwwQkFBMEI7bUdBQTFCLDBCQUEwQiw0S0NWdkMsMFVBSUM7OzRGRE1ZLDBCQUEwQjtrQkFMdEMsU0FBUzsrQkFDRSx5QkFBeUI7dUdBS0osa0JBQWtCO3NCQUFoRCxLQUFLO3VCQUFDLGVBQWU7Z0JBQ2IsT0FBTztzQkFBZixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLXV0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWZpZWxkLWVycm9yLW1lc3NhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWVsZC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9maWVsZC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRFcnJvck1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgnY3VzdG9tTWVzc2FnZScpIHB1YmxpYyBjdXN0b21FcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICBASW5wdXQoKSBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wgfCBudWxsO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7IH1cclxuXHJcblxyXG4gIHB1YmxpYyBnZXQgZXJyb3JNZXNzYWdlKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJhcHBGaWVsZEVycm9yTWVzc2FnZS5jb250cm9sXCIsIHRoaXMuY29udHJvbCk7XHJcbiAgICBcclxuICAgIGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiB0aGlzLmNvbnRyb2w/LmVycm9ycykge1xyXG4gICAgICBpZiAodGhpcy5jb250cm9sPy5lcnJvcnMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJlxyXG4gICAgICAgICh0aGlzLmNvbnRyb2w/LmRpcnR5IHx8IHRoaXMuY29udHJvbD8udG91Y2hlZCkpIHtcclxuICAgICAgICAgIHJldHVybiBGb3JtVXRpbHMuZ2V0RXJyb3JNZXNzYWdlKHRoaXMubGFiZWwsIHByb3BlcnR5TmFtZSwgdGhpcy5jb250cm9sPy5lcnJvcnNbcHJvcGVydHlOYW1lXSwgdGhpcy5jdXN0b21FcnJvck1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgJzEwMCUnKTtcclxuICB9XHJcblxyXG59XHJcbiIsIkBpZiAoY3VzdG9tRXJyb3JNZXNzYWdlICYmIGN1c3RvbUVycm9yTWVzc2FnZSAhPSBcIlwiKSB7XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgcm9sZT1cImFsZXJ0XCIgKm5nSWY9XCJjdXN0b21FcnJvck1lc3NhZ2UgIT09IG51bGxcIj4ge3sgY3VzdG9tRXJyb3JNZXNzYWdlIH19IDwvZGl2PlxyXG59IEBlbHNlIHtcclxuICAgIDxkaXYgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIiByb2xlPVwiYWxlcnRcIiAqbmdJZj1cImVycm9yTWVzc2FnZSAhPT0gbnVsbFwiPiB7eyBlcnJvck1lc3NhZ2UgfX0gPC9kaXY+XHJcbn0iXX0=
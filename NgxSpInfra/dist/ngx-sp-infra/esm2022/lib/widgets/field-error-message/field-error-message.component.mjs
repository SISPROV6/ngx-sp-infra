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
                return FormUtils.getErrorMessage(this.label, propertyName, this.control?.errors[propertyName]);
            }
        }
        return null;
    }
    ngOnInit() {
        this._renderer.setStyle(this._elementRef.nativeElement, 'width', '100%');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: FieldErrorMessageComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.11", type: FieldErrorMessageComponent, selector: "app-field-error-message", inputs: { customErrorMessage: ["customMessage", "customErrorMessage"], control: "control", label: "label" }, ngImport: i0, template: "<div class=\"invalid-feedback d-block\" role=\"alert\"\r\n    *ngIf=\"errorMessage !== null\">\r\n    {{ errorMessage }}\r\n</div>\r\n\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: FieldErrorMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-field-error-message', template: "<div class=\"invalid-feedback d-block\" role=\"alert\"\r\n    *ngIf=\"errorMessage !== null\">\r\n    {{ errorMessage }}\r\n</div>\r\n\r\n" }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], propDecorators: { customErrorMessage: [{
                type: Input,
                args: ['customMessage']
            }], control: [{
                type: Input
            }], label: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWVycm9yLW1lc3NhZ2UvZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWVycm9yLW1lc3NhZ2UvZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFPbkQsTUFBTSxPQUFPLDBCQUEwQjtJQU1yQyxZQUNVLFNBQW9CLEVBQ3BCLFdBQXVCO1FBRHZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7SUFDN0IsQ0FBQztJQUNMLElBQVcsWUFBWTtRQUNyQixLQUFLLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDOUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO2dCQUNuRCxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDbkcsQ0FBQztRQUNILENBQUM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzNFLENBQUM7K0dBeEJVLDBCQUEwQjttR0FBMUIsMEJBQTBCLDRLQ1Z2Qyw0SUFLQTs7NEZES2EsMEJBQTBCO2tCQUx0QyxTQUFTOytCQUNFLHlCQUF5Qjt1R0FLSixrQkFBa0I7c0JBQWhELEtBQUs7dUJBQUMsZUFBZTtnQkFDYixPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZmllbGQtZXJyb3ItbWVzc2FnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpZWxkLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpZWxkLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWVsZEVycm9yTWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCdjdXN0b21NZXNzYWdlJykgcHVibGljIGN1c3RvbUVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IG51bGw7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWZcclxuICApIHsgfVxyXG4gIHB1YmxpYyBnZXQgZXJyb3JNZXNzYWdlKCkge1xyXG4gICAgZm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHRoaXMuY29udHJvbD8uZXJyb3JzKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbnRyb2w/LmVycm9ycy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmXHJcbiAgICAgICAgKHRoaXMuY29udHJvbD8uZGlydHkgfHwgdGhpcy5jb250cm9sPy50b3VjaGVkKSkge1xyXG4gICAgICAgICAgcmV0dXJuIEZvcm1VdGlscy5nZXRFcnJvck1lc3NhZ2UodGhpcy5sYWJlbCwgcHJvcGVydHlOYW1lLCB0aGlzLmNvbnRyb2w/LmVycm9yc1twcm9wZXJ0eU5hbWVdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsICcxMDAlJyk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgcm9sZT1cImFsZXJ0XCJcclxuICAgICpuZ0lmPVwiZXJyb3JNZXNzYWdlICE9PSBudWxsXCI+XHJcbiAgICB7eyBlcnJvck1lc3NhZ2UgfX1cclxuPC9kaXY+XHJcblxyXG4iXX0=
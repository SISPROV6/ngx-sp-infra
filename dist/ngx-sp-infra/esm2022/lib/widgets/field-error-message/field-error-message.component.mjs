import { Component, Input } from '@angular/core';
import { FormUtils } from '../../utils/form-utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function FieldErrorMessageComponent_Conditional_0_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.customErrorMessage, " ");
} }
function FieldErrorMessageComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, FieldErrorMessageComponent_Conditional_0_div_0_Template, 2, 1, "div", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r0.customErrorMessage !== null);
} }
function FieldErrorMessageComponent_Conditional_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage, " ");
} }
function FieldErrorMessageComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, FieldErrorMessageComponent_Conditional_1_div_0_Template, 2, 1, "div", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r0.errorMessage !== null);
} }
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
    static { this.ɵfac = function FieldErrorMessageComponent_Factory(t) { return new (t || FieldErrorMessageComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FieldErrorMessageComponent, selectors: [["app-field-error-message"]], inputs: { customErrorMessage: [i0.ɵɵInputFlags.None, "customMessage", "customErrorMessage"], control: "control", label: "label" }, decls: 2, vars: 1, consts: [["role", "alert", 1, "invalid-feedback", "d-block"], ["class", "invalid-feedback d-block", "role", "alert", 4, "ngIf"]], template: function FieldErrorMessageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, FieldErrorMessageComponent_Conditional_0_Template, 1, 1, "div", 0)(1, FieldErrorMessageComponent_Conditional_1_Template, 1, 1);
        } if (rf & 2) {
            i0.ɵɵconditional(0, ctx.customErrorMessage && ctx.customErrorMessage != "" ? 0 : 1);
        } }, dependencies: [i1.NgIf] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldErrorMessageComponent, [{
        type: Component,
        args: [{ selector: 'app-field-error-message', template: "@if (customErrorMessage && customErrorMessage != \"\") {\n    <div class=\"invalid-feedback d-block\" role=\"alert\" *ngIf=\"customErrorMessage !== null\"> {{ customErrorMessage }} </div>\n} @else {\n    <div class=\"invalid-feedback d-block\" role=\"alert\" *ngIf=\"errorMessage !== null\"> {{ errorMessage }} </div>\n}" }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { customErrorMessage: [{
            type: Input,
            args: ['customMessage']
        }], control: [{
            type: Input
        }], label: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FieldErrorMessageComponent, { className: "FieldErrorMessageComponent", filePath: "lib\\widgets\\field-error-message\\field-error-message.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWVycm9yLW1lc3NhZ2UvZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWVycm9yLW1lc3NhZ2UvZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0lDRi9DLDhCQUF1RjtJQUFDLFlBQXlCO0lBQUEsaUJBQU07OztJQUEvQixjQUF5QjtJQUF6QiwwREFBeUI7OztJQUFqSCx5RkFBdUY7OztJQUFuQyx5REFBaUM7OztJQUVyRiw4QkFBaUY7SUFBQyxZQUFtQjtJQUFBLGlCQUFNOzs7SUFBekIsY0FBbUI7SUFBbkIsb0RBQW1COzs7SUFBckcseUZBQWlGOzs7SUFBN0IsbURBQTJCOztBRE9uRixNQUFNLE9BQU8sMEJBQTBCO0lBTXJDLFlBQ1UsU0FBb0IsRUFDcEIsV0FBdUI7UUFEdkIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtJQUM3QixDQUFDO0lBR0wsSUFBVyxZQUFZO1FBQ3JCLEtBQUssSUFBSSxZQUFZLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztZQUM5QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7Z0JBQ25ELENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUMvQyxPQUFPLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDNUgsQ0FBQztRQUNILENBQUM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzNFLENBQUM7MkZBMUJVLDBCQUEwQjtvRUFBMUIsMEJBQTBCO1lDUnJDLEFBRkYsbUZBQXNELDREQUU3Qzs7WUFGVCxtRkFJQzs7O2lGRE1ZLDBCQUEwQjtjQUx0QyxTQUFTOzJCQUNFLHlCQUF5QjttRUFLSixrQkFBa0I7a0JBQWhELEtBQUs7bUJBQUMsZUFBZTtZQUNiLE9BQU87a0JBQWYsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSzs7a0ZBSEssMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZmllbGQtZXJyb3ItbWVzc2FnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWVsZC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmllbGRFcnJvck1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ2N1c3RvbU1lc3NhZ2UnKSBwdWJsaWMgY3VzdG9tRXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IG51bGw7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuXG4gIHB1YmxpYyBnZXQgZXJyb3JNZXNzYWdlKCkge1xuICAgIGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiB0aGlzLmNvbnRyb2w/LmVycm9ycykge1xuICAgICAgaWYgKHRoaXMuY29udHJvbD8uZXJyb3JzLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkgJiZcbiAgICAgICAgKHRoaXMuY29udHJvbD8uZGlydHkgfHwgdGhpcy5jb250cm9sPy50b3VjaGVkKSkge1xuICAgICAgICAgIHJldHVybiBGb3JtVXRpbHMuZ2V0RXJyb3JNZXNzYWdlKHRoaXMubGFiZWwsIHByb3BlcnR5TmFtZSwgdGhpcy5jb250cm9sPy5lcnJvcnNbcHJvcGVydHlOYW1lXSwgdGhpcy5jdXN0b21FcnJvck1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIFxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgJzEwMCUnKTtcbiAgfVxuXG59XG4iLCJAaWYgKGN1c3RvbUVycm9yTWVzc2FnZSAmJiBjdXN0b21FcnJvck1lc3NhZ2UgIT0gXCJcIikge1xuICAgIDxkaXYgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIiByb2xlPVwiYWxlcnRcIiAqbmdJZj1cImN1c3RvbUVycm9yTWVzc2FnZSAhPT0gbnVsbFwiPiB7eyBjdXN0b21FcnJvck1lc3NhZ2UgfX0gPC9kaXY+XG59IEBlbHNlIHtcbiAgICA8ZGl2IGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCIgcm9sZT1cImFsZXJ0XCIgKm5nSWY9XCJlcnJvck1lc3NhZ2UgIT09IG51bGxcIj4ge3sgZXJyb3JNZXNzYWdlIH19IDwvZGl2PlxufSJdfQ==
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function FieldControlErrorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage, "\n");
} }
export class FieldControlErrorComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', '100%');
    }
    static { this.ɵfac = function FieldControlErrorComponent_Factory(t) { return new (t || FieldControlErrorComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FieldControlErrorComponent, selectors: [["app-field-control-error"]], inputs: { showError: "showError", errorMessage: "errorMessage" }, decls: 1, vars: 1, consts: [["class", "invalid-feedback d-block", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "invalid-feedback", "d-block"]], template: function FieldControlErrorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, FieldControlErrorComponent_div_0_Template, 2, 1, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showError);
        } }, dependencies: [i1.NgIf] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldControlErrorComponent, [{
        type: Component,
        args: [{ selector: 'app-field-control-error', template: "<div class=\"invalid-feedback d-block\" role=\"alert\"\n    *ngIf=\"showError\">\n    {{ errorMessage }}\n</div>" }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { showError: [{
            type: Input
        }], errorMessage: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FieldControlErrorComponent, { className: "FieldControlErrorComponent", filePath: "lib\\widgets\\field-control-error\\field-control-error.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29udHJvbC1lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWNvbnRyb2wtZXJyb3IvZmllbGQtY29udHJvbC1lcnJvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWNvbnRyb2wtZXJyb3IvZmllbGQtY29udHJvbC1lcnJvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUMsTUFBTSxlQUFlLENBQUM7Ozs7SUNBaEYsOEJBQ3NCO0lBQ2xCLFlBQ0o7SUFBQSxpQkFBTTs7O0lBREYsY0FDSjtJQURJLHFEQUNKOztBRElBLE1BQU0sT0FBTywwQkFBMEI7SUFJckMsWUFBb0IsUUFBbUIsRUFBVSxVQUFzQjtRQUFuRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7SUFFNUUsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6RSxDQUFDOzJGQVJVLDBCQUEwQjtvRUFBMUIsMEJBQTBCO1lDUHZDLDJFQUNzQjs7WUFBakIsb0NBQWU7OztpRkRNUCwwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDRSx5QkFBeUI7bUVBSzFCLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLOztrRkFGSywwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZmllbGQtY29udHJvbC1lcnJvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWVsZC1jb250cm9sLWVycm9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmllbGQtY29udHJvbC1lcnJvci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmllbGRDb250cm9sRXJyb3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzaG93RXJyb3I6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCAnMTAwJScpO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIiByb2xlPVwiYWxlcnRcIlxuICAgICpuZ0lmPVwic2hvd0Vycm9yXCI+XG4gICAge3sgZXJyb3JNZXNzYWdlIH19XG48L2Rpdj4iXX0=
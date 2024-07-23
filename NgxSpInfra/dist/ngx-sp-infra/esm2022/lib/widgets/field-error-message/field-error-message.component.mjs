import { Component, Input } from '@angular/core';
import { FormUtils } from '../../utils/form-utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class FieldErrorMessageComponent {
    get errorMessage() {
        for (let propertyName in this.control?.errors) {
            if (this.control?.errors.hasOwnProperty(propertyName) &&
                (this.control?.dirty || this.control?.touched)) {
                return FormUtils.getErrorMessage(this.label, propertyName, this.control?.errors[propertyName]);
            }
        }
        return null;
    }
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', '100%');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: FieldErrorMessageComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.11", type: FieldErrorMessageComponent, selector: "app-field-error-message", inputs: { control: "control", label: "label" }, ngImport: i0, template: "<div class=\"invalid-feedback d-block\" role=\"alert\"\r\n    *ngIf=\"errorMessage !== null\">\r\n    {{ errorMessage }}\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: FieldErrorMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-field-error-message', template: "<div class=\"invalid-feedback d-block\" role=\"alert\"\r\n    *ngIf=\"errorMessage !== null\">\r\n    {{ errorMessage }}\r\n</div>\r\n" }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], propDecorators: { control: [{
                type: Input
            }], label: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWVycm9yLW1lc3NhZ2UvZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWVycm9yLW1lc3NhZ2UvZmllbGQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFPbkQsTUFBTSxPQUFPLDBCQUEwQjtJQUlyQyxJQUFJLFlBQVk7UUFFZCxLQUFLLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFFOUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO2dCQUNuRCxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDL0MsT0FBTyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDbkcsQ0FBQztRQUVILENBQUM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxZQUFvQixRQUFtQixFQUFVLFVBQXNCO1FBQW5ELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQztJQUU1RSxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pFLENBQUM7K0dBdEJVLDBCQUEwQjttR0FBMUIsMEJBQTBCLCtHQ1Z2Qyx3SUFJQTs7NEZETWEsMEJBQTBCO2tCQUx0QyxTQUFTOytCQUNFLHlCQUF5Qjt1R0FLMUIsT0FBTztzQkFBZixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLXV0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWZpZWxkLWVycm9yLW1lc3NhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWVsZC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9maWVsZC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRFcnJvck1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IG51bGw7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgZ2V0IGVycm9yTWVzc2FnZSgpIHtcclxuICAgIFxyXG4gICAgZm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHRoaXMuY29udHJvbD8uZXJyb3JzKSB7XHJcblxyXG4gICAgICBpZiAodGhpcy5jb250cm9sPy5lcnJvcnMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJlxyXG4gICAgICAgICh0aGlzLmNvbnRyb2w/LmRpcnR5IHx8IHRoaXMuY29udHJvbD8udG91Y2hlZCkpIHtcclxuICAgICAgICAgIHJldHVybiBGb3JtVXRpbHMuZ2V0RXJyb3JNZXNzYWdlKHRoaXMubGFiZWwsIHByb3BlcnR5TmFtZSwgdGhpcy5jb250cm9sPy5lcnJvcnNbcHJvcGVydHlOYW1lXSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCAnMTAwJScpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiIHJvbGU9XCJhbGVydFwiXHJcbiAgICAqbmdJZj1cImVycm9yTWVzc2FnZSAhPT0gbnVsbFwiPlxyXG4gICAge3sgZXJyb3JNZXNzYWdlIH19XHJcbjwvZGl2PlxyXG4iXX0=
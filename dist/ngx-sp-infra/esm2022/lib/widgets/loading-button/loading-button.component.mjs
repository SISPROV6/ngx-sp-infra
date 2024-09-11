import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function LoadingButtonComponent_img_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 1);
} }
export class LoadingButtonComponent {
    constructor() { }
    static { this.ɵfac = function LoadingButtonComponent_Factory(t) { return new (t || LoadingButtonComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoadingButtonComponent, selectors: [["app-loading-button"]], inputs: { isLoading: "isLoading" }, decls: 1, vars: 1, consts: [["class", "button-spinner", "src", "assets/imgs/spinner.gif", 4, "ngIf"], ["src", "assets/imgs/spinner.gif", 1, "button-spinner"]], template: function LoadingButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, LoadingButtonComponent_img_0_Template, 1, 0, "img", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isLoading);
        } }, dependencies: [i1.NgIf], styles: [".button-spinner[_ngcontent-%COMP%]{width:24px}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingButtonComponent, [{
        type: Component,
        args: [{ selector: 'app-loading-button', template: "<img class=\"button-spinner\" src=\"assets/imgs/spinner.gif\"\n    *ngIf=\"isLoading\">", styles: [".button-spinner{width:24px}\n"] }]
    }], () => [], { isLoading: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoadingButtonComponent, { className: "LoadingButtonComponent", filePath: "lib\\widgets\\loading-button\\loading-button.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvd2lkZ2V0cy9sb2FkaW5nLWJ1dHRvbi9sb2FkaW5nLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2xvYWRpbmctYnV0dG9uL2xvYWRpbmctYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lDQWpELHlCQUNzQjs7QURNdEIsTUFBTSxPQUFPLHNCQUFzQjtJQUdqQyxnQkFBZ0IsQ0FBQzt1RkFITixzQkFBc0I7b0VBQXRCLHNCQUFzQjtZQ1BuQyx1RUFDc0I7O1lBQWpCLG9DQUFlOzs7aUZETVAsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0Usb0JBQW9CO29CQUtyQixTQUFTO2tCQUFqQixLQUFLOztrRkFESyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sb2FkaW5nLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctYnV0dG9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXNMb2FkaW5nOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsIjxpbWcgY2xhc3M9XCJidXR0b24tc3Bpbm5lclwiIHNyYz1cImFzc2V0cy9pbWdzL3NwaW5uZXIuZ2lmXCJcbiAgICAqbmdJZj1cImlzTG9hZGluZ1wiPiJdfQ==
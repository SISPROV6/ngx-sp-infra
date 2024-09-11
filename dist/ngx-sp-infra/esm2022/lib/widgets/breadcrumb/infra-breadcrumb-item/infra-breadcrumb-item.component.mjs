import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["infra-breadcrumb-item", ""];
const _c1 = ["*"];
/**
 * Item da lista padrão da Sispro.
 *
 * Deve ser utilizado em conjunto com o InfraBreadCrumb
 */
export class InfraBreadcrumbItemComponent {
    constructor(elem) {
        this.elem = elem;
    }
    ngOnInit() {
        this.elem.nativeElement.classList.add("breadcrumb-item");
        if (this.elem.nativeElement.children.length > 0) {
            let isAnchor = this.elem.nativeElement.children[0] instanceof HTMLAnchorElement;
            if (isAnchor) {
                this.elem.nativeElement.classList.add("active");
            }
        }
    }
    static { this.ɵfac = function InfraBreadcrumbItemComponent_Factory(t) { return new (t || InfraBreadcrumbItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InfraBreadcrumbItemComponent, selectors: [["li", "infra-breadcrumb-item", ""]], attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function InfraBreadcrumbItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InfraBreadcrumbItemComponent, [{
        type: Component,
        args: [{ selector: 'li[infra-breadcrumb-item]', template: "<ng-content></ng-content>" }]
    }], () => [{ type: i0.ElementRef }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InfraBreadcrumbItemComponent, { className: "InfraBreadcrumbItemComponent", filePath: "lib\\widgets\\breadcrumb\\infra-breadcrumb-item\\infra-breadcrumb-item.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mcmEtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvYnJlYWRjcnVtYi9pbmZyYS1icmVhZGNydW1iLWl0ZW0vaW5mcmEtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvYnJlYWRjcnVtYi9pbmZyYS1icmVhZGNydW1iLWl0ZW0vaW5mcmEtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXNCLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTlEOzs7O0dBSUc7QUFPSCxNQUFNLE9BQU8sNEJBQTRCO0lBRXZDLFlBQW9CLElBQXFDO1FBQXJDLFNBQUksR0FBSixJQUFJLENBQWlDO0lBQUksQ0FBQztJQUU5RCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBRXhELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNoRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFlBQVksaUJBQWlCLENBQUM7WUFFaEYsSUFBSSxRQUFRLEVBQUUsQ0FBQztnQkFDYixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xELENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQzs2RkFkVSw0QkFBNEI7b0VBQTVCLDRCQUE0Qjs7WUNiekMsa0JBQXlCOzs7aUZEYVosNEJBQTRCO2NBTnhDLFNBQVM7MkJBRUUsMkJBQTJCOztrRkFJMUIsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJdGVtIGRhIGxpc3RhIHBhZHLDo28gZGEgU2lzcHJvLlxuICogXG4gKiBEZXZlIHNlciB1dGlsaXphZG8gZW0gY29uanVudG8gY29tIG8gSW5mcmFCcmVhZENydW1iXG4gKi9cbkBDb21wb25lbnQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2xpW2luZnJhLWJyZWFkY3J1bWItaXRlbV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5mcmEtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5mcmEtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbmZyYUJyZWFkY3J1bWJJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW06IEVsZW1lbnRSZWY8SFRNTERhdGFMaXN0RWxlbWVudD4pIHsgfVxuICBcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJyZWFkY3J1bWItaXRlbVwiKVxuICAgIFxuICAgIGlmICh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgaXNBbmNob3IgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50O1xuICAgICAgXG4gICAgICBpZiAoaXNBbmNob3IpIHtcbiAgICAgICAgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD4iXX0=
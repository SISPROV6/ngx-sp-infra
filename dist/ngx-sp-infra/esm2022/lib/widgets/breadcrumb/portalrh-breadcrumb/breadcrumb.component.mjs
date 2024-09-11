import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BreadcrumbComponent {
    constructor() {
        this.menu = '';
        this.opcao = '';
    }
    ngOnInit() {
    }
    static { this.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { menu: "menu", opcao: "opcao" }, decls: 5, vars: 2, consts: [[1, "breadcrumb"], [1, "breadcrumb-item", "active"], [1, "breadcrumb-item"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ol", 0)(1, "li", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "li", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.menu);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.opcao);
        } } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{ selector: 'app-breadcrumb', template: "<!-- Breadcrumb -->\n<ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item active\">{{ menu }}</li>\n    <li class=\"breadcrumb-item\">{{ opcao }}</li>\n</ol>\n" }]
    }], () => [], { menu: [{
            type: Input
        }], opcao: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BreadcrumbComponent, { className: "BreadcrumbComponent", filePath: "lib\\widgets\\breadcrumb\\portalrh-breadcrumb\\breadcrumb.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2JyZWFkY3J1bWIvcG9ydGFscmgtYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvYnJlYWRjcnVtYi9wb3J0YWxyaC1icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT3pELE1BQU0sT0FBTyxtQkFBbUI7SUFLOUI7UUFIUyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBVyxFQUFFLENBQUM7SUFFWixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO29GQVJVLG1CQUFtQjtvRUFBbkIsbUJBQW1CO1lDTDVCLEFBREosNkJBQXVCLFlBQ2dCO1lBQUEsWUFBVTtZQUFBLGlCQUFLO1lBQ2xELDZCQUE0QjtZQUFBLFlBQVc7WUFDM0MsQUFEMkMsaUJBQUssRUFDM0M7O1lBRmtDLGVBQVU7WUFBViw4QkFBVTtZQUNqQixlQUFXO1lBQVgsK0JBQVc7OztpRkRJOUIsbUJBQW1CO2NBTC9CLFNBQVM7MkJBQ0UsZ0JBQWdCO29CQU1qQixJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7O2tGQUhLLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYnJlYWRjcnVtYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBASW5wdXQoKSBtZW51OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgb3BjYW86IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPCEtLSBCcmVhZGNydW1iIC0tPlxuPG9sIGNsYXNzPVwiYnJlYWRjcnVtYlwiPlxuICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIj57eyBtZW51IH19PC9saT5cbiAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIj57eyBvcGNhbyB9fTwvbGk+XG48L29sPlxuIl19
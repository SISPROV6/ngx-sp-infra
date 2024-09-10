import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BreadcrumbComponent {
    constructor() {
        this.menu = '';
        this.opcao = '';
    }
    ngOnInit() {
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BreadcrumbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BreadcrumbComponent, selector: "app-breadcrumb", inputs: { menu: "menu", opcao: "opcao" }, ngImport: i0, template: "<!-- Breadcrumb -->\n<ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item active\">{{ menu }}</li>\n    <li class=\"breadcrumb-item\">{{ opcao }}</li>\n</ol>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-breadcrumb', template: "<!-- Breadcrumb -->\n<ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item active\">{{ menu }}</li>\n    <li class=\"breadcrumb-item\">{{ opcao }}</li>\n</ol>\n" }]
        }], ctorParameters: () => [], propDecorators: { menu: [{
                type: Input
            }], opcao: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2JyZWFkY3J1bWIvcG9ydGFscmgtYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvYnJlYWRjcnVtYi9wb3J0YWxyaC1icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT3pELE1BQU0sT0FBTyxtQkFBbUI7SUFLOUI7UUFIUyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBVyxFQUFFLENBQUM7SUFFWixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOytHQVJVLG1CQUFtQjttR0FBbkIsbUJBQW1CLGdHQ1BoQyx1S0FLQTs7NEZERWEsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGdCQUFnQjt3REFNakIsSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYnJlYWRjcnVtYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBASW5wdXQoKSBtZW51OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgb3BjYW86IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPCEtLSBCcmVhZGNydW1iIC0tPlxuPG9sIGNsYXNzPVwiYnJlYWRjcnVtYlwiPlxuICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIj57eyBtZW51IH19PC9saT5cbiAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIj57eyBvcGNhbyB9fTwvbGk+XG48L29sPlxuIl19
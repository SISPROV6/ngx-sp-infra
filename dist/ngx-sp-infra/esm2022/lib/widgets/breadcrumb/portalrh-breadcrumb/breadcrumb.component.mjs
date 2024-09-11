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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BreadcrumbComponent, selector: "app-breadcrumb", inputs: { menu: "menu", opcao: "opcao" }, ngImport: i0, template: "<!-- Breadcrumb -->\r\n<ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item active\">{{ menu }}</li>\r\n    <li class=\"breadcrumb-item\">{{ opcao }}</li>\r\n</ol>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-breadcrumb', template: "<!-- Breadcrumb -->\r\n<ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item active\">{{ menu }}</li>\r\n    <li class=\"breadcrumb-item\">{{ opcao }}</li>\r\n</ol>\r\n" }]
        }], ctorParameters: () => [], propDecorators: { menu: [{
                type: Input
            }], opcao: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2JyZWFkY3J1bWIvcG9ydGFscmgtYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvYnJlYWRjcnVtYi9wb3J0YWxyaC1icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT3pELE1BQU0sT0FBTyxtQkFBbUI7SUFLOUI7UUFIUyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBVyxFQUFFLENBQUM7SUFFWixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOytHQVJVLG1CQUFtQjttR0FBbkIsbUJBQW1CLGdHQ1BoQyxpTEFLQTs7NEZERWEsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGdCQUFnQjt3REFNakIsSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYnJlYWRjcnVtYicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBcclxuICBASW5wdXQoKSBtZW51OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBvcGNhbzogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPCEtLSBCcmVhZGNydW1iIC0tPlxyXG48b2wgY2xhc3M9XCJicmVhZGNydW1iXCI+XHJcbiAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCI+e3sgbWVudSB9fTwvbGk+XHJcbiAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIj57eyBvcGNhbyB9fTwvbGk+XHJcbjwvb2w+XHJcbiJdfQ==
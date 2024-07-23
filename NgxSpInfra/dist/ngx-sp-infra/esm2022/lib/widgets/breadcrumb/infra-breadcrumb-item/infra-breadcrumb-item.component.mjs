import { Component } from '@angular/core';
import * as i0 from "@angular/core";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: InfraBreadcrumbItemComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.11", type: InfraBreadcrumbItemComponent, selector: "li[infra-breadcrumb-item]", ngImport: i0, template: "<ng-content></ng-content>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: InfraBreadcrumbItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'li[infra-breadcrumb-item]', template: "<ng-content></ng-content>" }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mcmEtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvYnJlYWRjcnVtYi9pbmZyYS1icmVhZGNydW1iLWl0ZW0vaW5mcmEtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvYnJlYWRjcnVtYi9pbmZyYS1icmVhZGNydW1iLWl0ZW0vaW5mcmEtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXNCLE1BQU0sZUFBZSxDQUFDOztBQUU5RDs7OztHQUlHO0FBT0gsTUFBTSxPQUFPLDRCQUE0QjtJQUV2QyxZQUFvQixJQUFxQztRQUFyQyxTQUFJLEdBQUosSUFBSSxDQUFpQztJQUFJLENBQUM7SUFFOUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUV4RCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDaEQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLGlCQUFpQixDQUFDO1lBRWhGLElBQUksUUFBUSxFQUFFLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7K0dBZFUsNEJBQTRCO21HQUE1Qiw0QkFBNEIsaUVDYnpDLDJCQUF5Qjs7NEZEYVosNEJBQTRCO2tCQU54QyxTQUFTOytCQUVFLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSXRlbSBkYSBsaXN0YSBwYWRyw6NvIGRhIFNpc3Byby5cbiAqIFxuICogRGV2ZSBzZXIgdXRpbGl6YWRvIGVtIGNvbmp1bnRvIGNvbSBvIEluZnJhQnJlYWRDcnVtYlxuICovXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdsaVtpbmZyYS1icmVhZGNydW1iLWl0ZW1dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2luZnJhLWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2luZnJhLWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5mcmFCcmVhZGNydW1iSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtOiBFbGVtZW50UmVmPEhUTUxEYXRhTGlzdEVsZW1lbnQ+KSB7IH1cbiAgXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJicmVhZGNydW1iLWl0ZW1cIilcbiAgICBcbiAgICBpZiAodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGlzQW5jaG9yID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0gaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICAgIFxuICAgICAgaWYgKGlzQW5jaG9yKSB7XG4gICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+Il19
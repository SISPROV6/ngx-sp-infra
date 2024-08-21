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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mcmEtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvYnJlYWRjcnVtYi9pbmZyYS1icmVhZGNydW1iLWl0ZW0vaW5mcmEtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvYnJlYWRjcnVtYi9pbmZyYS1icmVhZGNydW1iLWl0ZW0vaW5mcmEtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXNCLE1BQU0sZUFBZSxDQUFDOztBQUU5RDs7OztHQUlHO0FBT0gsTUFBTSxPQUFPLDRCQUE0QjtJQUV2QyxZQUFvQixJQUFxQztRQUFyQyxTQUFJLEdBQUosSUFBSSxDQUFpQztJQUFJLENBQUM7SUFFOUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUV4RCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDaEQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLGlCQUFpQixDQUFDO1lBRWhGLElBQUksUUFBUSxFQUFFLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7K0dBZFUsNEJBQTRCO21HQUE1Qiw0QkFBNEIsaUVDYnpDLDJCQUF5Qjs7NEZEYVosNEJBQTRCO2tCQU54QyxTQUFTOytCQUVFLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogSXRlbSBkYSBsaXN0YSBwYWRyw6NvIGRhIFNpc3Byby5cclxuICogXHJcbiAqIERldmUgc2VyIHV0aWxpemFkbyBlbSBjb25qdW50byBjb20gbyBJbmZyYUJyZWFkQ3J1bWJcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdsaVtpbmZyYS1icmVhZGNydW1iLWl0ZW1dJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5mcmEtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbmZyYS1icmVhZGNydW1iLWl0ZW0uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmZyYUJyZWFkY3J1bWJJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtOiBFbGVtZW50UmVmPEhUTUxEYXRhTGlzdEVsZW1lbnQ+KSB7IH1cclxuICBcclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJicmVhZGNydW1iLWl0ZW1cIilcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGlzQW5jaG9yID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0gaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudDtcclxuICAgICAgXHJcbiAgICAgIGlmIChpc0FuY2hvcikge1xyXG4gICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiJdfQ==
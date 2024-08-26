import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class LoadingButtonComponent {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LoadingButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: LoadingButtonComponent, selector: "app-loading-button", inputs: { isLoading: "isLoading" }, ngImport: i0, template: "<img class=\"button-spinner\" src=\"assets/imgs/spinner.gif\"\r\n    *ngIf=\"isLoading\">", styles: [".button-spinner{width:24px}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LoadingButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-loading-button', template: "<img class=\"button-spinner\" src=\"assets/imgs/spinner.gif\"\r\n    *ngIf=\"isLoading\">", styles: [".button-spinner{width:24px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { isLoading: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvd2lkZ2V0cy9sb2FkaW5nLWJ1dHRvbi9sb2FkaW5nLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2xvYWRpbmctYnV0dG9uL2xvYWRpbmctYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPakQsTUFBTSxPQUFPLHNCQUFzQjtJQUdqQyxnQkFBZ0IsQ0FBQzsrR0FITixzQkFBc0I7bUdBQXRCLHNCQUFzQiw4RkNQbkMsMkZBQ3NCOzs0RkRNVCxzQkFBc0I7a0JBTGxDLFNBQVM7K0JBQ0Usb0JBQW9CO3dEQUtyQixTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbG9hZGluZy1idXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy1idXR0b24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQnV0dG9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBpc0xvYWRpbmc6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG59XHJcbiIsIjxpbWcgY2xhc3M9XCJidXR0b24tc3Bpbm5lclwiIHNyYz1cImFzc2V0cy9pbWdzL3NwaW5uZXIuZ2lmXCJcclxuICAgICpuZ0lmPVwiaXNMb2FkaW5nXCI+Il19
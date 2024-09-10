import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
export class ConfirmComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.cancelText = 'Cancelar';
        this.okText = 'Sim';
        this.clickButton = new EventEmitter();
    }
    ngOnInit() {
        this.confirmResult = new Subject();
        const elSpan = document.createElement('span');
        elSpan.classList.add('xoverflow');
        elSpan.innerHTML = this.message;
        let elDivMessage = document.getElementById("divMessage");
        elDivMessage?.appendChild(elSpan);
    }
    confirm() {
        this.confirmAndClose('confirmado');
    }
    closeConfirm() {
        this.confirmAndClose('cancelado');
    }
    confirmAndClose(value) {
        this.bsModalRef.hide();
        this.confirmResult.next(value);
        this.clickButton.emit(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ConfirmComponent, deps: [{ token: i1.BsModalRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ConfirmComponent, selector: "app-confirm", inputs: { title: "title", message: "message", cancelText: "cancelText", okText: "okText", okButton: "okButton", parametroOkButton: "parametroOkButton" }, outputs: { clickButton: "clickButton" }, ngImport: i0, template: "<div class=\"modal-content \">\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{ title }}</h5>\n        <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeConfirm()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div id=\"divMessage\"></div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">{{ okText }}</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\" (click)=\"closeConfirm()\">{{ cancelText }}</button>\n    </div>\n</div>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ConfirmComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-confirm', template: "<div class=\"modal-content \">\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{ title }}</h5>\n        <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeConfirm()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div id=\"divMessage\"></div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">{{ okText }}</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\" (click)=\"closeConfirm()\">{{ cancelText }}</button>\n    </div>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1.BsModalRef }], propDecorators: { title: [{
                type: Input
            }], message: [{
                type: Input
            }], cancelText: [{
                type: Input
            }], okText: [{
                type: Input
            }], okButton: [{
                type: Input
            }], parametroOkButton: [{
                type: Input
            }], clickButton: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi9tZXNzYWdlL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi9tZXNzYWdlL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQVMvQixNQUFNLE9BQU8sZ0JBQWdCO0lBVzNCLFlBQW1CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFSaEMsZUFBVSxHQUFXLFVBQVUsQ0FBQztRQUNoQyxXQUFNLEdBQVcsS0FBSyxDQUFDO1FBR3RCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQThCLENBQUM7SUFJM0IsQ0FBQztJQUU3QyxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRW5DLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7UUFFakMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRWhDLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUUsWUFBWSxDQUFFLENBQUM7UUFFM0QsWUFBWSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsT0FBTztRQUNGLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxlQUFlLENBQUMsS0FBaUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQTtRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOytHQXZDVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQixzUENYN0Isc3NCQWVBOzs0RkRKYSxnQkFBZ0I7a0JBTDVCLFNBQVM7K0JBQ0UsYUFBYTsrRUFLZCxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNJLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQnNNb2RhbFJlZiB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY29uZmlybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBjYW5jZWxUZXh0OiBzdHJpbmcgPSAnQ2FuY2VsYXInO1xuICBASW5wdXQoKSBva1RleHQ6IHN0cmluZyA9ICdTaW0nO1xuICBASW5wdXQoKSBva0J1dHRvbjogRnVuY3Rpb247XG4gIEBJbnB1dCgpIHBhcmFtZXRyb09rQnV0dG9uOiBib29sZWFuO1xuICBAT3V0cHV0KCkgY2xpY2tCdXR0b24gPSBuZXcgRXZlbnRFbWl0dGVyPCdjb25maXJtYWRvJyB8ICdjYW5jZWxhZG8nPigpO1xuXG4gIGNvbmZpcm1SZXN1bHQ6IFN1YmplY3Q8J2NvbmZpcm1hZG8nIHwgJ2NhbmNlbGFkbyc+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBic01vZGFsUmVmOiBCc01vZGFsUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlybVJlc3VsdCA9IG5ldyBTdWJqZWN0KCk7XG4gIFxuICAgIGNvbnN0IGVsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIGVsU3Bhbi5jbGFzc0xpc3QuYWRkKCd4b3ZlcmZsb3cnKVxuXG4gICAgZWxTcGFuLmlubmVySFRNTCA9IHRoaXMubWVzc2FnZTtcblxuICAgIGxldCBlbERpdk1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggXCJkaXZNZXNzYWdlXCIgKTtcbiAgICBcbiAgICBlbERpdk1lc3NhZ2U/LmFwcGVuZENoaWxkKGVsU3Bhbik7XG4gIH1cblxuICBjb25maXJtKCkge1xuICAgICAgIHRoaXMuY29uZmlybUFuZENsb3NlKCdjb25maXJtYWRvJyk7XG4gIH1cblxuICBjbG9zZUNvbmZpcm0oKSB7XG4gICAgdGhpcy5jb25maXJtQW5kQ2xvc2UoJ2NhbmNlbGFkbycpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maXJtQW5kQ2xvc2UodmFsdWU6ICdjb25maXJtYWRvJyB8ICdjYW5jZWxhZG8nKSB7XG4gICAgdGhpcy5ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB0aGlzLmNvbmZpcm1SZXN1bHQubmV4dCggdmFsdWUgKVxuICAgIHRoaXMuY2xpY2tCdXR0b24uZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57eyB0aXRsZSB9fTwvaDU+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJjbG9zZUNvbmZpcm0oKVwiPlxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgPGRpdiBpZD1cImRpdk1lc3NhZ2VcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cImNvbmZpcm0oKVwiPnt7IG9rVGV4dCB9fTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiAoY2xpY2spPVwiY2xvc2VDb25maXJtKClcIj57eyBjYW5jZWxUZXh0IH19PC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==
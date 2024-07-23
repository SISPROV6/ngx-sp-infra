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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: ConfirmComponent, deps: [{ token: i1.BsModalRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.11", type: ConfirmComponent, selector: "app-confirm", inputs: { title: "title", message: "message", cancelText: "cancelText", okText: "okText", okButton: "okButton", parametroOkButton: "parametroOkButton" }, outputs: { clickButton: "clickButton" }, ngImport: i0, template: "<div class=\"modal-content \">\r\n    <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">{{ title }}</h5>\r\n        <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeConfirm()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div id=\"divMessage\"></div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">{{ okText }}</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\" (click)=\"closeConfirm()\">{{ cancelText }}</button>\r\n    </div>\r\n</div>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: ConfirmComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-confirm', template: "<div class=\"modal-content \">\r\n    <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">{{ title }}</h5>\r\n        <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeConfirm()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div id=\"divMessage\"></div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">{{ okText }}</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\" (click)=\"closeConfirm()\">{{ cancelText }}</button>\r\n    </div>\r\n</div>\r\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi9tZXNzYWdlL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi9tZXNzYWdlL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQVMvQixNQUFNLE9BQU8sZ0JBQWdCO0lBVzNCLFlBQW1CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFSaEMsZUFBVSxHQUFXLFVBQVUsQ0FBQztRQUNoQyxXQUFNLEdBQVcsS0FBSyxDQUFDO1FBR3RCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQThCLENBQUM7SUFJM0IsQ0FBQztJQUU3QyxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRW5DLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7UUFFakMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRWhDLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUUsWUFBWSxDQUFFLENBQUM7UUFFM0QsWUFBWSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsT0FBTztRQUNGLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxlQUFlLENBQUMsS0FBaUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQTtRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOytHQXZDVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQixzUENYN0Isb3VCQWVBOzs0RkRKYSxnQkFBZ0I7a0JBTDVCLFNBQVM7K0JBQ0UsYUFBYTsrRUFLZCxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNJLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jb25maXJtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlybS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybS5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2FuY2VsVGV4dDogc3RyaW5nID0gJ0NhbmNlbGFyJztcclxuICBASW5wdXQoKSBva1RleHQ6IHN0cmluZyA9ICdTaW0nO1xyXG4gIEBJbnB1dCgpIG9rQnV0dG9uOiBGdW5jdGlvbjtcclxuICBASW5wdXQoKSBwYXJhbWV0cm9Pa0J1dHRvbjogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgY2xpY2tCdXR0b24gPSBuZXcgRXZlbnRFbWl0dGVyPCdjb25maXJtYWRvJyB8ICdjYW5jZWxhZG8nPigpO1xyXG5cclxuICBjb25maXJtUmVzdWx0OiBTdWJqZWN0PCdjb25maXJtYWRvJyB8ICdjYW5jZWxhZG8nPjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGJzTW9kYWxSZWY6IEJzTW9kYWxSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maXJtUmVzdWx0ID0gbmV3IFN1YmplY3QoKTtcclxuICBcclxuICAgIGNvbnN0IGVsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgICBlbFNwYW4uY2xhc3NMaXN0LmFkZCgneG92ZXJmbG93JylcclxuXHJcbiAgICBlbFNwYW4uaW5uZXJIVE1MID0gdGhpcy5tZXNzYWdlO1xyXG5cclxuICAgIGxldCBlbERpdk1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggXCJkaXZNZXNzYWdlXCIgKTtcclxuICAgIFxyXG4gICAgZWxEaXZNZXNzYWdlPy5hcHBlbmRDaGlsZChlbFNwYW4pO1xyXG4gIH1cclxuXHJcbiAgY29uZmlybSgpIHtcclxuICAgICAgIHRoaXMuY29uZmlybUFuZENsb3NlKCdjb25maXJtYWRvJyk7XHJcbiAgfVxyXG5cclxuICBjbG9zZUNvbmZpcm0oKSB7XHJcbiAgICB0aGlzLmNvbmZpcm1BbmRDbG9zZSgnY2FuY2VsYWRvJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbmZpcm1BbmRDbG9zZSh2YWx1ZTogJ2NvbmZpcm1hZG8nIHwgJ2NhbmNlbGFkbycpIHtcclxuICAgIHRoaXMuYnNNb2RhbFJlZi5oaWRlKCk7XHJcbiAgICB0aGlzLmNvbmZpcm1SZXN1bHQubmV4dCggdmFsdWUgKVxyXG4gICAgdGhpcy5jbGlja0J1dHRvbi5lbWl0KHZhbHVlKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnQgXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57eyB0aXRsZSB9fTwvaDU+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cImNsb3NlQ29uZmlybSgpXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgPGRpdiBpZD1cImRpdk1lc3NhZ2VcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cImNvbmZpcm0oKVwiPnt7IG9rVGV4dCB9fTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIChjbGljayk9XCJjbG9zZUNvbmZpcm0oKVwiPnt7IGNhbmNlbFRleHQgfX08L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19
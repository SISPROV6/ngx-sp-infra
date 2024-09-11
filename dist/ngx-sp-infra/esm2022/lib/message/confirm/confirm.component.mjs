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
    static { this.ɵfac = function ConfirmComponent_Factory(t) { return new (t || ConfirmComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConfirmComponent, selectors: [["app-confirm"]], inputs: { title: "title", message: "message", cancelText: "cancelText", okText: "okText", okButton: "okButton", parametroOkButton: "parametroOkButton" }, outputs: { clickButton: "clickButton" }, decls: 14, vars: 3, consts: [[1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["id", "divMessage"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"]], template: function ConfirmComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h5", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵlistener("click", function ConfirmComponent_Template_button_click_4_listener() { return ctx.closeConfirm(); });
            i0.ɵɵelementStart(5, "span", 4);
            i0.ɵɵtext(6, "\u00D7");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(7, "div", 5);
            i0.ɵɵelement(8, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 7)(10, "button", 8);
            i0.ɵɵlistener("click", function ConfirmComponent_Template_button_click_10_listener() { return ctx.confirm(); });
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 9);
            i0.ɵɵlistener("click", function ConfirmComponent_Template_button_click_12_listener() { return ctx.closeConfirm(); });
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.okText);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.cancelText);
        } } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmComponent, [{
        type: Component,
        args: [{ selector: 'app-confirm', template: "<div class=\"modal-content \">\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{ title }}</h5>\n        <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeConfirm()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div id=\"divMessage\"></div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">{{ okText }}</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\" (click)=\"closeConfirm()\">{{ cancelText }}</button>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.BsModalRef }], { title: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ConfirmComponent, { className: "ConfirmComponent", filePath: "lib\\message\\confirm\\confirm.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi9tZXNzYWdlL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi9tZXNzYWdlL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQVMvQixNQUFNLE9BQU8sZ0JBQWdCO0lBVzNCLFlBQW1CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFSaEMsZUFBVSxHQUFXLFVBQVUsQ0FBQztRQUNoQyxXQUFNLEdBQVcsS0FBSyxDQUFDO1FBR3RCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQThCLENBQUM7SUFJM0IsQ0FBQztJQUU3QyxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRW5DLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7UUFFakMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRWhDLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUUsWUFBWSxDQUFFLENBQUM7UUFFM0QsWUFBWSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsT0FBTztRQUNGLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxlQUFlLENBQUMsS0FBaUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQTtRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO2lGQXZDVSxnQkFBZ0I7b0VBQWhCLGdCQUFnQjtZQ1RyQixBQURKLEFBREosOEJBQTRCLGFBQ0UsWUFDRTtZQUFBLFlBQVc7WUFBQSxpQkFBSztZQUN4QyxpQ0FBd0c7WUFBekIsNkZBQVMsa0JBQWMsSUFBQztZQUNuRywrQkFBeUI7WUFBQSxzQkFBTztZQUV4QyxBQURJLEFBRG9DLGlCQUFPLEVBQ2xDLEVBQ1A7WUFDTiw4QkFBd0I7WUFDcEIseUJBQTJCO1lBQy9CLGlCQUFNO1lBRUYsQUFESiw4QkFBMEIsaUJBQzRDO1lBQXBCLDhGQUFTLGFBQVMsSUFBQztZQUFDLGFBQVk7WUFBQSxpQkFBUztZQUN2RixrQ0FBaUc7WUFBekIsOEZBQVMsa0JBQWMsSUFBQztZQUFDLGFBQWdCO1lBRXpILEFBREksQUFEcUgsaUJBQVMsRUFDeEgsRUFDSjs7WUFaMEIsZUFBVztZQUFYLCtCQUFXO1lBUytCLGVBQVk7WUFBWixnQ0FBWTtZQUNtQixlQUFnQjtZQUFoQixvQ0FBZ0I7OztpRkRENUcsZ0JBQWdCO2NBTDVCLFNBQVM7MkJBQ0UsYUFBYTsyQ0FLZCxLQUFLO2tCQUFiLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNJLFdBQVc7a0JBQXBCLE1BQU07O2tGQVBJLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jb25maXJtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb25maXJtLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbmNlbFRleHQ6IHN0cmluZyA9ICdDYW5jZWxhcic7XG4gIEBJbnB1dCgpIG9rVGV4dDogc3RyaW5nID0gJ1NpbSc7XG4gIEBJbnB1dCgpIG9rQnV0dG9uOiBGdW5jdGlvbjtcbiAgQElucHV0KCkgcGFyYW1ldHJvT2tCdXR0b246IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBjbGlja0J1dHRvbiA9IG5ldyBFdmVudEVtaXR0ZXI8J2NvbmZpcm1hZG8nIHwgJ2NhbmNlbGFkbyc+KCk7XG5cbiAgY29uZmlybVJlc3VsdDogU3ViamVjdDwnY29uZmlybWFkbycgfCAnY2FuY2VsYWRvJz47XG5cbiAgY29uc3RydWN0b3IocHVibGljIGJzTW9kYWxSZWY6IEJzTW9kYWxSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb25maXJtUmVzdWx0ID0gbmV3IFN1YmplY3QoKTtcbiAgXG4gICAgY29uc3QgZWxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgZWxTcGFuLmNsYXNzTGlzdC5hZGQoJ3hvdmVyZmxvdycpXG5cbiAgICBlbFNwYW4uaW5uZXJIVE1MID0gdGhpcy5tZXNzYWdlO1xuXG4gICAgbGV0IGVsRGl2TWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBcImRpdk1lc3NhZ2VcIiApO1xuICAgIFxuICAgIGVsRGl2TWVzc2FnZT8uYXBwZW5kQ2hpbGQoZWxTcGFuKTtcbiAgfVxuXG4gIGNvbmZpcm0oKSB7XG4gICAgICAgdGhpcy5jb25maXJtQW5kQ2xvc2UoJ2NvbmZpcm1hZG8nKTtcbiAgfVxuXG4gIGNsb3NlQ29uZmlybSgpIHtcbiAgICB0aGlzLmNvbmZpcm1BbmRDbG9zZSgnY2FuY2VsYWRvJyk7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpcm1BbmRDbG9zZSh2YWx1ZTogJ2NvbmZpcm1hZG8nIHwgJ2NhbmNlbGFkbycpIHtcbiAgICB0aGlzLmJzTW9kYWxSZWYuaGlkZSgpO1xuICAgIHRoaXMuY29uZmlybVJlc3VsdC5uZXh0KCB2YWx1ZSApXG4gICAgdGhpcy5jbGlja0J1dHRvbi5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnQgXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7IHRpdGxlIH19PC9oNT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cImNsb3NlQ29uZmlybSgpXCI+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICA8ZGl2IGlkPVwiZGl2TWVzc2FnZVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwiY29uZmlybSgpXCI+e3sgb2tUZXh0IH19PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIChjbGljayk9XCJjbG9zZUNvbmZpcm0oKVwiPnt7IGNhbmNlbFRleHQgfX08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19
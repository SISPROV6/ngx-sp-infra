import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function SaveComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "form")(2, "div", 12);
    i0.ɵɵelement(3, "input", 13)(4, "span", 14)(5, "span", 15);
    i0.ɵɵelementStart(6, "label");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const field_r1 = ctx.$implicit;
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(field_r1);
} }
export class SaveComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.cancelText = 'Cancelar';
        this.okText = 'Sim';
    }
    ngOnInit() {
        this.confirmResult = new Subject();
    }
    confirm() {
        this.okButton({ Id: 15 });
        this.confirmAndClose(true);
    }
    closeConfirm() {
        this.confirmAndClose(false);
    }
    confirmAndClose(value) {
        this.confirmResult.next(value);
        this.bsModalRef.hide();
    }
    static { this.ɵfac = function SaveComponent_Factory(t) { return new (t || SaveComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SaveComponent, selectors: [["app-save"]], inputs: { title: "title", message: "message", cancelText: "cancelText", okText: "okText", okButton: "okButton", fields: "fields" }, decls: 21, vars: 5, consts: [[1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "body-config"], ["class", "input-config", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], [1, "input-config"], [1, "input-group"], ["type", "text", "required", ""], [1, "highlight"], [1, "bar"]], template: function SaveComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵlistener("click", function SaveComponent_Template_button_click_4_listener() { return ctx.closeConfirm(); });
            i0.ɵɵelementStart(5, "span", 4);
            i0.ɵɵtext(6, "\u00D7");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(7, "div", 5)(8, "h4");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 6)(11, "form")(12, "fieldset")(13, "legend");
            i0.ɵɵtext(14, " dados ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(15, SaveComponent_div_15_Template, 8, 1, "div", 7);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(16, "div", 8)(17, "button", 9);
            i0.ɵɵlistener("click", function SaveComponent_Template_button_click_17_listener() { return ctx.confirm(); });
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "button", 10);
            i0.ɵɵlistener("click", function SaveComponent_Template_button_click_19_listener() { return ctx.closeConfirm(); });
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.message);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.fields);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.okText);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.cancelText);
        } }, dependencies: [i2.NgForOf, i3.ɵNgNoValidate, i3.NgControlStatusGroup, i3.NgForm], styles: [".input-config[_ngcontent-%COMP%]{padding:10px}.body-config[_ngcontent-%COMP%]{padding-top:15px;padding-bottom:20px}.input-group[_ngcontent-%COMP%]{position:relative;margin:40px 0 20px}input[_ngcontent-%COMP%]{font-size:18px;padding:10px 10px 10px 5px;display:block;width:300px;border:none;border-bottom:1px solid #757575}input[_ngcontent-%COMP%]:focus{outline:none}label[_ngcontent-%COMP%]{color:#999;font-size:18px;font-weight:400;position:absolute;pointer-events:none;left:5px;top:10px;transition:.2s ease all;-moz-transition:.2s ease all;-webkit-transition:.2s ease all}input[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%]{top:-20px;font-size:14px;color:#5b7cfd}.bar[_ngcontent-%COMP%]{position:relative;display:block;width:315px}.bar[_ngcontent-%COMP%]:before, .bar[_ngcontent-%COMP%]:after{content:\"\";height:2px;width:0;bottom:0;position:absolute;background:#5b7cfd;transition:.2s ease all;-moz-transition:.2s ease all;-webkit-transition:.2s ease all}.bar[_ngcontent-%COMP%]:before{left:50%}.bar[_ngcontent-%COMP%]:after{right:50%}input[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:before, input[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:after{width:50%}.highlight[_ngcontent-%COMP%]{position:absolute;height:60%;width:100px;top:25%;left:0;pointer-events:none;opacity:.5}input[_ngcontent-%COMP%]:focus ~ .highlight[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_inputHighlighter .3s ease;-moz-animation:inputHighlighter .3s ease;animation:_ngcontent-%COMP%_inputHighlighter .3s ease}@-webkit-keyframes _ngcontent-%COMP%_inputHighlighter{0%{background:#4285f4}to{width:0;background:transparent}}@-moz-keyframes inputHighlighter{0%{background:#4285f4}to{width:0;background:transparent}}@keyframes _ngcontent-%COMP%_inputHighlighter{0%{background:#4285f4}to{width:0;background:transparent}}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SaveComponent, [{
        type: Component,
        args: [{ selector: 'app-save', template: "<div class=\"modal-content \">\n  <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{ title }}</h4>\n      <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeConfirm()\">\n          <span aria-hidden=\"true\">&times;</span>\n      </button>\n  </div>\n  <div class=\"modal-body\">\n      <h4>{{ message }}</h4>\n\n    <div class=\"body-config \">\n      <form>\n        <fieldset>\n          <legend> dados </legend>\n\n          <div class=\"input-config\" *ngFor=\"let field of fields ; let i = index\" >\n            <form>\n              <div class=\"input-group\">\n                <input type=\"text\" required>\n                <span class=\"highlight\"></span>\n                <span class=\"bar\"></span>\n                <label>{{field}}</label>\n              </div>\n            </form>\n          </div>\n        </fieldset>\n      </form>\n    </div>\n\n  </div>\n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">{{okText}}</button>\n      <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\" (click)=\"closeConfirm()\">{{ cancelText }}</button>\n  </div>\n</div>\n", styles: [".input-config{padding:10px}.body-config{padding-top:15px;padding-bottom:20px}.input-group{position:relative;margin:40px 0 20px}input{font-size:18px;padding:10px 10px 10px 5px;display:block;width:300px;border:none;border-bottom:1px solid #757575}input:focus{outline:none}label{color:#999;font-size:18px;font-weight:400;position:absolute;pointer-events:none;left:5px;top:10px;transition:.2s ease all;-moz-transition:.2s ease all;-webkit-transition:.2s ease all}input:focus~label,input:valid~label{top:-20px;font-size:14px;color:#5b7cfd}.bar{position:relative;display:block;width:315px}.bar:before,.bar:after{content:\"\";height:2px;width:0;bottom:0;position:absolute;background:#5b7cfd;transition:.2s ease all;-moz-transition:.2s ease all;-webkit-transition:.2s ease all}.bar:before{left:50%}.bar:after{right:50%}input:focus~.bar:before,input:focus~.bar:after{width:50%}.highlight{position:absolute;height:60%;width:100px;top:25%;left:0;pointer-events:none;opacity:.5}input:focus~.highlight{-webkit-animation:inputHighlighter .3s ease;-moz-animation:inputHighlighter .3s ease;animation:inputHighlighter .3s ease}@-webkit-keyframes inputHighlighter{0%{background:#4285f4}to{width:0;background:transparent}}@-moz-keyframes inputHighlighter{0%{background:#4285f4}to{width:0;background:transparent}}@keyframes inputHighlighter{0%{background:#4285f4}to{width:0;background:transparent}}\n"] }]
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
        }], fields: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SaveComponent, { className: "SaveComponent", filePath: "lib\\message\\save\\save.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi9tZXNzYWdlL3NhdmUvc2F2ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi9tZXNzYWdlL3NhdmUvc2F2ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7SUNlakIsQUFERixBQURGLCtCQUF3RSxXQUNoRSxjQUNxQjtJQUd2QixBQURBLEFBREEsNEJBQTRCLGVBQ0csZUFDTjtJQUN6Qiw2QkFBTztJQUFBLFlBQVM7SUFHdEIsQUFERSxBQURFLEFBRGtCLGlCQUFRLEVBQ3BCLEVBQ0QsRUFDSDs7O0lBSE8sZUFBUztJQUFULDhCQUFTOztBRFZoQyxNQUFNLE9BQU8sYUFBYTtJQVV4QixZQUFtQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBUGhDLGVBQVUsR0FBVyxVQUFVLENBQUM7UUFDaEMsV0FBTSxHQUFXLEtBQUssQ0FBQztJQU1ZLENBQUM7SUFFN0MsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsT0FBTztRQUdMLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU8sZUFBZSxDQUFDLEtBQWM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDOzhFQS9CVSxhQUFhO29FQUFiLGFBQWE7WUNUcEIsQUFESixBQURGLDhCQUE0QixhQUNBLFlBQ0U7WUFBQSxZQUFXO1lBQUEsaUJBQUs7WUFDeEMsaUNBQXdHO1lBQXpCLDBGQUFTLGtCQUFjLElBQUM7WUFDbkcsK0JBQXlCO1lBQUEsc0JBQU87WUFFeEMsQUFESSxBQURvQyxpQkFBTyxFQUNsQyxFQUNQO1lBRUYsQUFESiw4QkFBd0IsU0FDaEI7WUFBQSxZQUFhO1lBQUEsaUJBQUs7WUFLbEIsQUFERixBQURGLEFBREYsK0JBQTBCLFlBQ2xCLGdCQUNNLGNBQ0E7WUFBQyx3QkFBTTtZQUFBLGlCQUFTO1lBRXhCLGdFQUF3RTtZQWNoRixBQUZFLEFBREUsQUFERSxpQkFBVyxFQUNOLEVBQ0gsRUFFRjtZQUVGLEFBREosK0JBQTBCLGlCQUM0QztZQUFwQiwyRkFBUyxhQUFTLElBQUM7WUFBQyxhQUFVO1lBQUEsaUJBQVM7WUFDckYsbUNBQWlHO1lBQXpCLDJGQUFTLGtCQUFjLElBQUM7WUFBQyxhQUFnQjtZQUV2SCxBQURFLEFBRHFILGlCQUFTLEVBQ3hILEVBQ0Y7O1lBaEN3QixlQUFXO1lBQVgsK0JBQVc7WUFNL0IsZUFBYTtZQUFiLGlDQUFhO1lBTytCLGVBQVk7WUFBWixvQ0FBWTtZQWdCTSxlQUFVO1lBQVYsZ0NBQVU7WUFDcUIsZUFBZ0I7WUFBaEIsb0NBQWdCOzs7aUZEckIxRyxhQUFhO2NBTHpCLFNBQVM7MkJBQ0UsVUFBVTsyQ0FLWCxLQUFLO2tCQUFiLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSzs7a0ZBTkssYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEJzTW9kYWxSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNhdmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2F2ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NhdmUuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2F2ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgY2FuY2VsVGV4dDogc3RyaW5nID0gJ0NhbmNlbGFyJztcbiAgQElucHV0KCkgb2tUZXh0OiBzdHJpbmcgPSAnU2ltJztcbiAgQElucHV0KCkgb2tCdXR0b246IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBmaWVsZHM6IHN0cmluZ1tdO1xuXG4gIGNvbmZpcm1SZXN1bHQ6IFN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IocHVibGljIGJzTW9kYWxSZWY6IEJzTW9kYWxSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb25maXJtUmVzdWx0ID0gbmV3IFN1YmplY3QoKTtcbiAgfVxuXG4gIGNvbmZpcm0oKSB7XG4gIFxuXG4gICAgdGhpcy5va0J1dHRvbih7SWQ6IDE1fSk7XG4gICAgdGhpcy5jb25maXJtQW5kQ2xvc2UodHJ1ZSk7XG4gIH1cblxuICBjbG9zZUNvbmZpcm0oKSB7XG4gICAgdGhpcy5jb25maXJtQW5kQ2xvc2UoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maXJtQW5kQ2xvc2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpcm1SZXN1bHQubmV4dCh2YWx1ZSk7XG5cbiAgICB0aGlzLmJzTW9kYWxSZWYuaGlkZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudCBcIj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57eyB0aXRsZSB9fTwvaDQ+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwiY2xvc2VDb25maXJtKClcIj5cbiAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgPGg0Pnt7IG1lc3NhZ2UgfX08L2g0PlxuXG4gICAgPGRpdiBjbGFzcz1cImJvZHktY29uZmlnIFwiPlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICA8bGVnZW5kPiBkYWRvcyA8L2xlZ2VuZD5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jb25maWdcIiAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZmllbGRzIDsgbGV0IGkgPSBpbmRleFwiID5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+e3tmaWVsZH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cImNvbmZpcm0oKVwiPnt7b2tUZXh0fX08L2J1dHRvbj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIChjbGljayk9XCJjbG9zZUNvbmZpcm0oKVwiPnt7IGNhbmNlbFRleHQgfX08L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==
import { Component, EventEmitter, Input, Output } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../svg-storage/svg-storage.component";
import * as i4 from "./pipes/search-tree.pipe";
function TreeComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "span", 4);
    i0.ɵɵelement(2, "app-svg-storage", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 6);
    i0.ɵɵtwoWayListener("ngModelChange", function TreeComponent_ng_template_0_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.search, $event) || (ctx_r1.search = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.search);
} }
function TreeComponent_ng_container_2_app_svg_storage_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-svg-storage", 11);
    i0.ɵɵlistener("click", function TreeComponent_ng_container_2_app_svg_storage_2_Template_app_svg_storage_click_0_listener() { i0.ɵɵrestoreView(_r3); const item_r4 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.onExpand(item_r4); return i0.ɵɵresetView(item_r4.aplicClass ? item_r4.aplicClass = false : item_r4.aplicClass = true); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMap(item_r4.aplicClass ? "rotate" : null);
} }
function TreeComponent_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 12);
    i0.ɵɵlistener("change", function TreeComponent_ng_container_2_ng_template_3_Template_input_change_0_listener() { i0.ɵɵrestoreView(_r5); const item_r4 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onCheck(ctx_r1.items, item_r4)); });
    i0.ɵɵtwoWayListener("ngModelChange", function TreeComponent_ng_container_2_ng_template_3_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r5); const item_r4 = i0.ɵɵnextContext().$implicit; i0.ɵɵtwoWayBindingSet(item_r4.is_selected, $event) || (item_r4.is_selected = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("checked", ctx_r1.onCheckEvent(ctx_r1.items));
    i0.ɵɵtwoWayProperty("ngModel", item_r4.is_selected);
} }
function TreeComponent_ng_container_2_ul_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul")(1, "app-tree", 13);
    i0.ɵɵlistener("onSelect", function TreeComponent_ng_container_2_ul_6_Template_app_tree_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r6); const item_r4 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(item_r4.is_selected = $event); })("onEvent", function TreeComponent_ng_container_2_ul_6_Template_app_tree_onEvent_1_listener($event) { i0.ɵɵrestoreView(_r6); const item_r4 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(item_r4.is_selected = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", item_r4.children)("checkbox", ctx_r1.checkbox);
} }
function TreeComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵtemplate(2, TreeComponent_ng_container_2_app_svg_storage_2_Template, 1, 2, "app-svg-storage", 8)(3, TreeComponent_ng_container_2_ng_template_3_Template, 1, 2, "ng-template", 0);
    i0.ɵɵelementStart(4, "label", 9);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, TreeComponent_ng_container_2_ul_6_Template, 2, 2, "ul", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap(!item_r4.has_children ? "children" : null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.has_children);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.checkbox);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.expanded);
} }
export class TreeComponent {
    constructor() {
        // #region ==========> PROPERTIES <==========
        // #region PUBLIC
        this.items = [];
        this.checkbox = false;
        this.filter = false;
        this.onSelect = new EventEmitter();
        this.onEvent = new EventEmitter();
        this.checked = (item) => item.is_selected == true;
        this.search = "";
    }
    ngOnInit() { }
    // #endregion PUBLIC
    // #endregion ==========> PROPERTIES <==========
    // #region ==========> PUBLIC METHODS <==========
    onExpand(item) {
        if (item.expanded) {
            item.expanded = !item.expanded;
            return;
        }
        else {
            if (item.children) {
                if (item.children.length > 0) {
                    item.expanded = true;
                }
                else {
                    item.expanded = false;
                }
            }
        }
    }
    onCheck(items, item) {
        if (item.has_children) {
            item.children.forEach((firstNode) => {
                if (firstNode.is_selected != item.is_selected) {
                    firstNode.is_selected = !firstNode.is_selected;
                }
                if (firstNode.has_children) {
                    firstNode.children.forEach((secondNode) => {
                        if (secondNode.is_selected != firstNode.is_selected) {
                            secondNode.is_selected = !secondNode.is_selected;
                        }
                    });
                }
            });
        }
        if (this.indeterminateCheck(items)) {
            this.onSelect.emit(true);
        }
        else if (!this.indeterminateCheck(items)) {
            this.onSelect.emit(false);
        }
    }
    onCheckEvent(items) {
        if (this.indeterminateCheck(items)) {
            this.onEvent.emit(true);
        }
        else {
            this.onEvent.emit(false);
        }
    }
    // #endregion ==========> PUBLIC METHODS <==========
    // #region ==========> PRIVATE METHODS <==========
    indeterminateCheck(list) {
        return list.some(this.checked);
    }
    static { this.ɵfac = function TreeComponent_Factory(t) { return new (t || TreeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeComponent, selectors: [["app-tree"]], inputs: { items: "items", checkbox: "checkbox", filter: "filter" }, outputs: { onSelect: "onSelect", onEvent: "onEvent" }, decls: 4, vars: 5, consts: [[3, "ngIf"], [1, "tree-view"], [4, "ngFor", "ngForOf"], [1, "input-group", "glb-search-input", "my-3"], [1, "input-group-text", "search", "px-2", "glb-bg-color-white"], ["svgName", "search", "svgColor", "gray", "svgSize", "medium-small", 1, "d-flex", "align-items-center"], ["type", "text", 1, "form-control", "border-left-none", "ps-0", 3, "ngModelChange", "ngModel"], [1, "container", "py-1"], ["class", "chevron", "svgSize", "medium-small", "svgName", "chevron-right", 3, "class", "click", 4, "ngIf"], [1, "label", "mb-0", "ms-2"], [4, "ngIf"], ["svgSize", "medium-small", "svgName", "chevron-right", 1, "chevron", 3, "click"], ["type", "checkbox", 1, "form-check-input", "m-0", "position-relative", 3, "change", "ngModelChange", "checked", "ngModel"], [3, "onSelect", "onEvent", "items", "checkbox"]], template: function TreeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeComponent_ng_template_0_Template, 4, 1, "ng-template", 0);
            i0.ɵɵelementStart(1, "ul", 1);
            i0.ɵɵtemplate(2, TreeComponent_ng_container_2_Template, 7, 6, "ng-container", 2);
            i0.ɵɵpipe(3, "TreeFilter");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.filter);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(3, 2, ctx.items, ctx.search));
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel, i3.SvgStorageComponent, TreeComponent, i4.SearchTreePipe], styles: ["*[_ngcontent-%COMP%]{font-family:Open Sans,Arial,Helvetica,sans-serif;color:#000;box-sizing:border-box;list-style:none;font-size:1rem}.tree-view[_ngcontent-%COMP%]{margin:0;padding:0;list-style-type:none;transition:all .3s ease-in-out}.container[_ngcontent-%COMP%]{margin:0;padding:0;display:flex;align-items:center}.chevron[_ngcontent-%COMP%]{position:relative;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0);-webkit-transition:.3s ease-in-out;-moz-transition:.3s ease-in-out;-o-transition:.3s ease-in-out;transition:.3s ease-in-out;color:#000;cursor:pointer}.chevron[_ngcontent-%COMP%]:hover{color:#0d6efd;transform:rotate(30deg)}.chevron.rotate[_ngcontent-%COMP%]{transform:rotate(90deg);-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);-moz-transform:rotate(90deg);-o-transform:rotate(90deg);transition:.3s}.form-check-input[_ngcontent-%COMP%]{cursor:pointer}.children[_ngcontent-%COMP%]{padding-left:20px}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeComponent, [{
        type: Component,
        args: [{ selector: "app-tree", template: "<!-- FILTER -->\n<ng-template [ngIf]=\"filter\">\n  <!-- <app-search-filters></app-search-filters> -->\n\n  <div class=\"input-group glb-search-input my-3\">\n    <span class=\"input-group-text search px-2 glb-bg-color-white\">\n      <app-svg-storage svgName=\"search\" svgColor=\"gray\" svgSize=\"medium-small\"\n        class=\"d-flex align-items-center\"></app-svg-storage>\n    </span>\n    <input type=\"text\" class=\"form-control border-left-none ps-0\" [(ngModel)]=\"search\">\n  </div>\n  \n</ng-template>\n<!-- TREE -->\n<ul class=\"tree-view\">\n  <ng-container *ngFor=\"let item of items | TreeFilter : search; index as i\">\n    <div class=\"container py-1\" [class]=\"!item.has_children ? 'children' : null \">\n      <app-svg-storage\n        class=\"chevron\"\n        *ngIf=\"item.has_children\"\n        [class]=\"item.aplicClass ? 'rotate' : null\"\n        (click)=\"\n          onExpand(item);\n          item.aplicClass ? (item.aplicClass = false) : (item.aplicClass = true)\n        \"\n        svgSize=\"medium-small\"\n        svgName=\"chevron-right\"\n      ></app-svg-storage>\n      <!-- CHECKBOX -->\n      <ng-template [ngIf]=\"checkbox\">\n        <input\n          type=\"checkbox\"\n          class=\"form-check-input m-0 position-relative\"\n          [checked]=\"onCheckEvent(items)\"\n          (change)=\"onCheck(items, item)\"\n          [(ngModel)]=\"item.is_selected\"\n        />\n      </ng-template>\n      <label class=\"label mb-0 ms-2\">{{ item.label }}</label>\n    </div>\n    <!-- NODES -->\n    <ul *ngIf=\"item.expanded\">\n      <app-tree\n        (onSelect)=\"item.is_selected = $event\"\n        (onEvent)=\"item.is_selected = $event\"\n        [items]=\"item.children\"\n        [checkbox]=\"checkbox\"\n      ></app-tree>\n    </ul>\n  </ng-container>\n</ul>", styles: ["*{font-family:Open Sans,Arial,Helvetica,sans-serif;color:#000;box-sizing:border-box;list-style:none;font-size:1rem}.tree-view{margin:0;padding:0;list-style-type:none;transition:all .3s ease-in-out}.container{margin:0;padding:0;display:flex;align-items:center}.chevron{position:relative;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0);-webkit-transition:.3s ease-in-out;-moz-transition:.3s ease-in-out;-o-transition:.3s ease-in-out;transition:.3s ease-in-out;color:#000;cursor:pointer}.chevron:hover{color:#0d6efd;transform:rotate(30deg)}.chevron.rotate{transform:rotate(90deg);-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);-moz-transform:rotate(90deg);-o-transform:rotate(90deg);transition:.3s}.form-check-input{cursor:pointer}.children{padding-left:20px}\n"] }]
    }], () => [], { items: [{
            type: Input
        }], checkbox: [{
            type: Input
        }], filter: [{
            type: Input
        }], onSelect: [{
            type: Output
        }], onEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TreeComponent, { className: "TreeComponent", filePath: "lib\\widgets\\tree\\tree.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL3RyZWUvdHJlZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL3RyZWUvdHJlZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ0szRSxBQURGLDhCQUErQyxjQUNpQjtJQUM1RCxxQ0FDc0Q7SUFDeEQsaUJBQU87SUFDUCxnQ0FBbUY7SUFBckIsaVNBQW9CO0lBQ3BGLEFBREUsaUJBQW1GLEVBQy9FOzs7SUFEMEQsZUFBb0I7SUFBcEIsNkNBQW9COzs7O0lBUWhGLDJDQVVDO0lBTkMscU9BQ2Esd0JBQ1osa0VBQWlELEtBQUssd0JBQzFELElBQUksS0FBQTtJQUdGLGlCQUFrQjs7O0lBUGpCLG1EQUEyQzs7OztJQVUzQyxpQ0FNRTtJQUZBLCtPQUFVLHFDQUFvQixLQUFDO0lBQy9CLHVVQUE4QjtJQUxoQyxpQkFNRTs7OztJQUhBLDJEQUErQjtJQUUvQixtREFBOEI7Ozs7SUFPbEMsQUFERiwwQkFBMEIsbUJBTXZCO0lBSEMsQUFEQSxpUEFBc0Msa09BQ0Q7SUFJekMsQUFERyxpQkFBVyxFQUNUOzs7O0lBSEQsY0FBdUI7SUFDdkIsQUFEQSx3Q0FBdUIsNkJBQ0Y7OztJQS9CM0IsNkJBQTJFO0lBQ3pFLDhCQUE4RTtJQWE1RSxBQVpBLHFHQVVDLGdGQUU4QjtJQVMvQixnQ0FBK0I7SUFBQSxZQUFnQjtJQUNqRCxBQURpRCxpQkFBUSxFQUNuRDtJQUVOLDRFQUEwQjs7Ozs7SUF6QkUsY0FBaUQ7SUFBakQsd0RBQWlEO0lBR3hFLGNBQXVC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SUFDSCxDQUFDO0lBQ0Qsb0RBQW9EO0lBRXBELGtEQUFrRDtJQUUxQyxrQkFBa0IsQ0FBQyxJQUFnQjtRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OEVBekVVLGFBQWE7b0VBQWIsYUFBYTtZQ1AxQiw4RUFBNkI7WUFhN0IsNkJBQXNCO1lBQ3BCLGdGQUEyRTs7WUFtQzdFLGlCQUFLOztZQWpEUSxpQ0FBZTtZQWNLLGVBQWdDO1lBQWhDLHFFQUFnQzttS0RQcEQsYUFBYTs7aUZBQWIsYUFBYTtjQUx6QixTQUFTOzJCQUNFLFVBQVU7b0JBWUosS0FBSztrQkFBcEIsS0FBSztZQUNVLFFBQVE7a0JBQXZCLEtBQUs7WUFDVSxNQUFNO2tCQUFyQixLQUFLO1lBRVcsUUFBUTtrQkFBeEIsTUFBTTtZQUNVLE9BQU87a0JBQXZCLE1BQU07O2tGQWJJLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyZWVJdGVtIH0gZnJvbSBcIi4vbW9kZWxzL3RyZWUtaXRlbVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLXRyZWVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi90cmVlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi90cmVlLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gUFJPUEVSVElFUyA8PT09PT09PT09PVxuXG4gIC8vICNyZWdpb24gUFVCTElDXG4gIEBJbnB1dCgpIHB1YmxpYyBpdGVtczogVHJlZUl0ZW1bXSB8IGFueSA9IFtdO1xuICBASW5wdXQoKSBwdWJsaWMgY2hlY2tib3g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGZpbHRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkV2ZW50OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIGNoZWNrZWQgPSAoaXRlbTogVHJlZUl0ZW0pID0+IGl0ZW0uaXNfc2VsZWN0ZWQgPT0gdHJ1ZTtcblxuICBwdWJsaWMgc2VhcmNoOiBzdHJpbmcgPSBcIlwiO1xuICAvLyAjZW5kcmVnaW9uIFBVQkxJQ1xuXG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gUFJPUEVSVElFUyA8PT09PT09PT09PVxuXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gUFVCTElDIE1FVEhPRFMgPD09PT09PT09PT1cbiAgcHVibGljIG9uRXhwYW5kKGl0ZW06IFRyZWVJdGVtKTogdm9pZCB7XG4gICAgaWYgKGl0ZW0uZXhwYW5kZWQpIHtcbiAgICAgIGl0ZW0uZXhwYW5kZWQgPSAhaXRlbS5leHBhbmRlZDtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGl0ZW0uZXhwYW5kZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNoZWNrKGl0ZW1zOiBUcmVlSXRlbVtdLCBpdGVtOiBUcmVlSXRlbSk6IHZvaWQge1xuICAgIGlmIChpdGVtLmhhc19jaGlsZHJlbikge1xuICAgICAgaXRlbS5jaGlsZHJlbi5mb3JFYWNoKChmaXJzdE5vZGUpID0+IHtcbiAgICAgICAgaWYgKGZpcnN0Tm9kZS5pc19zZWxlY3RlZCAhPSBpdGVtLmlzX3NlbGVjdGVkKSB7XG4gICAgICAgICAgZmlyc3ROb2RlLmlzX3NlbGVjdGVkID0gIWZpcnN0Tm9kZS5pc19zZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlyc3ROb2RlLmhhc19jaGlsZHJlbikge1xuICAgICAgICAgIGZpcnN0Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKChzZWNvbmROb2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Vjb25kTm9kZS5pc19zZWxlY3RlZCAhPSBmaXJzdE5vZGUuaXNfc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgc2Vjb25kTm9kZS5pc19zZWxlY3RlZCA9ICFzZWNvbmROb2RlLmlzX3NlbGVjdGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5kZXRlcm1pbmF0ZUNoZWNrKGl0ZW1zKSkge1xuICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KHRydWUpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuaW5kZXRlcm1pbmF0ZUNoZWNrKGl0ZW1zKSkge1xuICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25DaGVja0V2ZW50KGl0ZW1zOiBUcmVlSXRlbVtdKSB7XG4gICAgaWYgKHRoaXMuaW5kZXRlcm1pbmF0ZUNoZWNrKGl0ZW1zKSkge1xuICAgICAgdGhpcy5vbkV2ZW50LmVtaXQodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25FdmVudC5lbWl0KGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PiBQVUJMSUMgTUVUSE9EUyA8PT09PT09PT09PVxuXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gUFJJVkFURSBNRVRIT0RTIDw9PT09PT09PT09XG5cbiAgcHJpdmF0ZSBpbmRldGVybWluYXRlQ2hlY2sobGlzdDogVHJlZUl0ZW1bXSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBsaXN0LnNvbWUodGhpcy5jaGVja2VkKTtcbiAgfVxuXG4gIC8vIHByaXZhdGUgYWxsQ2hlY2sobGlzdDogVHJlZUl0ZW1bXSk6IGJvb2xlYW4ge1xuICAvLyAgIHJldHVybiBsaXN0LmV2ZXJ5KHRoaXMuY2hlY2tlZCk7XG4gIC8vIH1cbiAgLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PiBQUklWQVRFIE1FVEhPRFMgPD09PT09PT09PT1cbn1cbiIsIjwhLS0gRklMVEVSIC0tPlxuPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImZpbHRlclwiPlxuICA8IS0tIDxhcHAtc2VhcmNoLWZpbHRlcnM+PC9hcHAtc2VhcmNoLWZpbHRlcnM+IC0tPlxuXG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBnbGItc2VhcmNoLWlucHV0IG15LTNcIj5cbiAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHQgc2VhcmNoIHB4LTIgZ2xiLWJnLWNvbG9yLXdoaXRlXCI+XG4gICAgICA8YXBwLXN2Zy1zdG9yYWdlIHN2Z05hbWU9XCJzZWFyY2hcIiBzdmdDb2xvcj1cImdyYXlcIiBzdmdTaXplPVwibWVkaXVtLXNtYWxsXCJcbiAgICAgICAgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+PC9hcHAtc3ZnLXN0b3JhZ2U+XG4gICAgPC9zcGFuPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGJvcmRlci1sZWZ0LW5vbmUgcHMtMFwiIFsobmdNb2RlbCldPVwic2VhcmNoXCI+XG4gIDwvZGl2PlxuICBcbjwvbmctdGVtcGxhdGU+XG48IS0tIFRSRUUgLS0+XG48dWwgY2xhc3M9XCJ0cmVlLXZpZXdcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtcyB8IFRyZWVGaWx0ZXIgOiBzZWFyY2g7IGluZGV4IGFzIGlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHB5LTFcIiBbY2xhc3NdPVwiIWl0ZW0uaGFzX2NoaWxkcmVuID8gJ2NoaWxkcmVuJyA6IG51bGwgXCI+XG4gICAgICA8YXBwLXN2Zy1zdG9yYWdlXG4gICAgICAgIGNsYXNzPVwiY2hldnJvblwiXG4gICAgICAgICpuZ0lmPVwiaXRlbS5oYXNfY2hpbGRyZW5cIlxuICAgICAgICBbY2xhc3NdPVwiaXRlbS5hcGxpY0NsYXNzID8gJ3JvdGF0ZScgOiBudWxsXCJcbiAgICAgICAgKGNsaWNrKT1cIlxuICAgICAgICAgIG9uRXhwYW5kKGl0ZW0pO1xuICAgICAgICAgIGl0ZW0uYXBsaWNDbGFzcyA/IChpdGVtLmFwbGljQ2xhc3MgPSBmYWxzZSkgOiAoaXRlbS5hcGxpY0NsYXNzID0gdHJ1ZSlcbiAgICAgICAgXCJcbiAgICAgICAgc3ZnU2l6ZT1cIm1lZGl1bS1zbWFsbFwiXG4gICAgICAgIHN2Z05hbWU9XCJjaGV2cm9uLXJpZ2h0XCJcbiAgICAgID48L2FwcC1zdmctc3RvcmFnZT5cbiAgICAgIDwhLS0gQ0hFQ0tCT1ggLS0+XG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiY2hlY2tib3hcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXQgbS0wIHBvc2l0aW9uLXJlbGF0aXZlXCJcbiAgICAgICAgICBbY2hlY2tlZF09XCJvbkNoZWNrRXZlbnQoaXRlbXMpXCJcbiAgICAgICAgICAoY2hhbmdlKT1cIm9uQ2hlY2soaXRlbXMsIGl0ZW0pXCJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cIml0ZW0uaXNfc2VsZWN0ZWRcIlxuICAgICAgICAvPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsIG1iLTAgbXMtMlwiPnt7IGl0ZW0ubGFiZWwgfX08L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDwhLS0gTk9ERVMgLS0+XG4gICAgPHVsICpuZ0lmPVwiaXRlbS5leHBhbmRlZFwiPlxuICAgICAgPGFwcC10cmVlXG4gICAgICAgIChvblNlbGVjdCk9XCJpdGVtLmlzX3NlbGVjdGVkID0gJGV2ZW50XCJcbiAgICAgICAgKG9uRXZlbnQpPVwiaXRlbS5pc19zZWxlY3RlZCA9ICRldmVudFwiXG4gICAgICAgIFtpdGVtc109XCJpdGVtLmNoaWxkcmVuXCJcbiAgICAgICAgW2NoZWNrYm94XT1cImNoZWNrYm94XCJcbiAgICAgID48L2FwcC10cmVlPlxuICAgIDwvdWw+XG4gIDwvbmctY29udGFpbmVyPlxuPC91bD4iXX0=
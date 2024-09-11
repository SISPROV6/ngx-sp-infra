import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-bootstrap/tooltip";
import * as i3 from "../svg-storage/svg-storage.component";
function OrderingComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-svg-storage", 1);
    i0.ɵɵlistener("click", function OrderingComponent_ng_template_0_Template_app_svg_storage_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.sort()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("rotate", ctx_r1.sortDirection !== "");
    i0.ɵɵproperty("svgName", "arrow-up")("svgColor", ctx_r1.getSvgColor());
} }
function OrderingComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-svg-storage", 2);
    i0.ɵɵlistener("click", function OrderingComponent_ng_template_1_Template_app_svg_storage_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.sort()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵclassProp("rotate", true);
    i0.ɵɵproperty("svgName", "arrow-down")("svgColor", "blue");
} }
export class OrderingComponent {
    // Função chamada quando o botão de ordenação é clicado
    sort() {
        // Inverte a direção de ordenação atual
        if (this.sortDirection === 'asc') {
            this.sortDirection = 'desc';
        }
        else {
            this.sortDirection = 'asc';
        }
        // Emite o evento com a nova direção de ordenação
        this.sortDirectionChange.emit(this.sortDirection);
        // Emite o evento de mudança na ordenação com a direção e os atributos de ordenação
        this.sortChange.emit({ direction: this.sortDirection, column: this.sortAttributes });
    }
    // Obtém a cor do ícone com base na direção de ordenação atual
    getSvgColor() {
        return this.sortDirection === 'asc' ? 'blue' : 'lightgray';
    }
    constructor() {
        this.isColumnClicked = false;
        // Direção atual da ordenação ('asc', 'desc' ou vazio)
        this.sortDirection = '';
        // Atributos de ordenação
        this.sortAttributes = [];
        // Evento emitido quando a direção de ordenação é alterada
        this.sortDirectionChange = new EventEmitter();
        // Evento emitido quando ocorre uma mudança na ordenação
        this.sortChange = new EventEmitter();
    }
    ngOnInit() {
        // Define a direção de ordenação inicial como vazio
        this.sortDirection = '';
    }
    static { this.ɵfac = function OrderingComponent_Factory(t) { return new (t || OrderingComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OrderingComponent, selectors: [["app-ordering"]], inputs: { isColumnClicked: "isColumnClicked", sortDirection: "sortDirection", sortAttributes: "sortAttributes" }, outputs: { sortDirectionChange: "sortDirectionChange", sortChange: "sortChange" }, decls: 2, vars: 2, consts: [[3, "ngIf"], ["tooltip", "'Ascendente'", 2, "cursor", "pointer", 3, "click", "svgName", "svgColor"], ["tooltip", "'Descendente'", 2, "cursor", "pointer", 3, "click", "svgName", "svgColor"]], template: function OrderingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, OrderingComponent_ng_template_0_Template, 1, 4, "ng-template", 0)(1, OrderingComponent_ng_template_1_Template, 1, 4, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.sortDirection !== "desc");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.sortDirection === "desc");
        } }, dependencies: [i1.NgIf, i2.TooltipDirective, i3.SvgStorageComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrderingComponent, [{
        type: Component,
        args: [{ selector: 'app-ordering', template: "<ng-template [ngIf]=\"sortDirection !== 'desc'\">\n  <app-svg-storage\n    (click)=\"sort()\"\n    [svgName]=\"'arrow-up'\"\n    [class.rotate]=\"sortDirection !== ''\"\n    [svgColor]=\"getSvgColor()\"\n    tooltip=\"'Ascendente'\"\n    style=\"cursor: pointer;\"\n  ></app-svg-storage>\n  <!-- Ordenar Ascendente -->\n</ng-template>\n\n<ng-template [ngIf]=\"sortDirection === 'desc'\">\n  <app-svg-storage\n    (click)=\"sort()\"\n    [svgName]=\"'arrow-down'\"\n    [class.rotate]=\"true\"\n    [svgColor]=\"'blue'\"\n    tooltip=\"'Descendente'\"\n    style=\"cursor: pointer;\"\n  ></app-svg-storage>\n  <!-- Ordenar Descendente -->\n</ng-template>\n" }]
    }], () => [], { isColumnClicked: [{
            type: Input
        }], sortDirection: [{
            type: Input
        }], sortAttributes: [{
            type: Input
        }], sortDirectionChange: [{
            type: Output
        }], sortChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OrderingComponent, { className: "OrderingComponent", filePath: "lib\\widgets\\ordering\\ordering.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvd2lkZ2V0cy9vcmRlcmluZy9vcmRlcmluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL29yZGVyaW5nL29yZGVyaW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNDN0UsMENBT0M7SUFOQyw4TEFBUyxhQUFNLEtBQUM7SUFNakIsaUJBQWtCOzs7SUFKakIscURBQXFDO0lBQ3JDLEFBRkEsb0NBQXNCLGtDQUVJOzs7O0lBUTVCLDBDQU9DO0lBTkMsOExBQVMsYUFBTSxLQUFDO0lBTWpCLGlCQUFrQjs7SUFKakIsOEJBQXFCO0lBQ3JCLEFBRkEsc0NBQXdCLG9CQUVMOztBRFZ2QixNQUFNLE9BQU8saUJBQWlCO0lBZTVCLHVEQUF1RDtJQUN2RCxJQUFJO1FBQ0YsdUNBQXVDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxLQUFLLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztRQUM5QixDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7UUFFRCxpREFBaUQ7UUFDakQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEQsbUZBQW1GO1FBQ25GLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQzdELENBQUM7SUFFRDtRQWxDUyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUMxQyxzREFBc0Q7UUFDN0Msa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFFcEMseUJBQXlCO1FBQ2hCLG1CQUFjLEdBQXNCLEVBQUUsQ0FBQztRQUVoRCwwREFBMEQ7UUFDaEQsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUUzRCx3REFBd0Q7UUFDOUMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFvRCxDQUFDO0lBdUI3RSxDQUFDO0lBRWhCLFFBQVE7UUFDTixtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztrRkF6Q1UsaUJBQWlCO29FQUFqQixpQkFBaUI7WUNLOUIsQUFaQSxrRkFBK0MscUVBWUE7O1lBWmxDLG1EQUFpQztZQVlqQyxjQUFpQztZQUFqQyxtREFBaUM7OztpRkRMakMsaUJBQWlCO2NBTDdCLFNBQVM7MkJBQ0UsY0FBYztvQkFNZixlQUFlO2tCQUF2QixLQUFLO1lBRUcsYUFBYTtrQkFBckIsS0FBSztZQUdHLGNBQWM7a0JBQXRCLEtBQUs7WUFHSSxtQkFBbUI7a0JBQTVCLE1BQU07WUFHRyxVQUFVO2tCQUFuQixNQUFNOztrRkFiSSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1vcmRlcmluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlcmluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29yZGVyaW5nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGlzQ29sdW1uQ2xpY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBEaXJlw6fDo28gYXR1YWwgZGEgb3JkZW5hw6fDo28gKCdhc2MnLCAnZGVzYycgb3UgdmF6aW8pXG4gIEBJbnB1dCgpIHNvcnREaXJlY3Rpb246IHN0cmluZyA9ICcnO1xuXG4gIC8vIEF0cmlidXRvcyBkZSBvcmRlbmHDp8Ojb1xuICBASW5wdXQoKSBzb3J0QXR0cmlidXRlczogc3RyaW5nIHwgc3RyaW5nW10gPSBbXTtcblxuICAvLyBFdmVudG8gZW1pdGlkbyBxdWFuZG8gYSBkaXJlw6fDo28gZGUgb3JkZW5hw6fDo28gw6kgYWx0ZXJhZGFcbiAgQE91dHB1dCgpIHNvcnREaXJlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvLyBFdmVudG8gZW1pdGlkbyBxdWFuZG8gb2NvcnJlIHVtYSBtdWRhbsOnYSBuYSBvcmRlbmHDp8Ojb1xuICBAT3V0cHV0KCkgc29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBkaXJlY3Rpb246IHN0cmluZywgY29sdW1uOiBzdHJpbmcgfCBzdHJpbmdbXSB9PigpO1xuXG4gIC8vIEZ1bsOnw6NvIGNoYW1hZGEgcXVhbmRvIG8gYm90w6NvIGRlIG9yZGVuYcOnw6NvIMOpIGNsaWNhZG9cbiAgc29ydCgpIHtcbiAgICAvLyBJbnZlcnRlIGEgZGlyZcOnw6NvIGRlIG9yZGVuYcOnw6NvIGF0dWFsXG4gICAgaWYgKHRoaXMuc29ydERpcmVjdGlvbiA9PT0gJ2FzYycpIHtcbiAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9ICdkZXNjJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gJ2FzYyc7XG4gICAgfVxuXG4gICAgLy8gRW1pdGUgbyBldmVudG8gY29tIGEgbm92YSBkaXJlw6fDo28gZGUgb3JkZW5hw6fDo29cbiAgICB0aGlzLnNvcnREaXJlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNvcnREaXJlY3Rpb24pO1xuXG4gICAgLy8gRW1pdGUgbyBldmVudG8gZGUgbXVkYW7Dp2EgbmEgb3JkZW5hw6fDo28gY29tIGEgZGlyZcOnw6NvIGUgb3MgYXRyaWJ1dG9zIGRlIG9yZGVuYcOnw6NvXG4gICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQoeyBkaXJlY3Rpb246IHRoaXMuc29ydERpcmVjdGlvbiwgY29sdW1uOiB0aGlzLnNvcnRBdHRyaWJ1dGVzIH0pO1xuICB9XG5cbiAgLy8gT2J0w6ltIGEgY29yIGRvIMOtY29uZSBjb20gYmFzZSBuYSBkaXJlw6fDo28gZGUgb3JkZW5hw6fDo28gYXR1YWxcbiAgZ2V0U3ZnQ29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0RGlyZWN0aW9uID09PSAnYXNjJyA/ICdibHVlJyA6ICdsaWdodGdyYXknO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIERlZmluZSBhIGRpcmXDp8OjbyBkZSBvcmRlbmHDp8OjbyBpbmljaWFsIGNvbW8gdmF6aW9cbiAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSAnJztcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlIFtuZ0lmXT1cInNvcnREaXJlY3Rpb24gIT09ICdkZXNjJ1wiPlxuICA8YXBwLXN2Zy1zdG9yYWdlXG4gICAgKGNsaWNrKT1cInNvcnQoKVwiXG4gICAgW3N2Z05hbWVdPVwiJ2Fycm93LXVwJ1wiXG4gICAgW2NsYXNzLnJvdGF0ZV09XCJzb3J0RGlyZWN0aW9uICE9PSAnJ1wiXG4gICAgW3N2Z0NvbG9yXT1cImdldFN2Z0NvbG9yKClcIlxuICAgIHRvb2x0aXA9XCInQXNjZW5kZW50ZSdcIlxuICAgIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiXG4gID48L2FwcC1zdmctc3RvcmFnZT5cbiAgPCEtLSBPcmRlbmFyIEFzY2VuZGVudGUgLS0+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgW25nSWZdPVwic29ydERpcmVjdGlvbiA9PT0gJ2Rlc2MnXCI+XG4gIDxhcHAtc3ZnLXN0b3JhZ2VcbiAgICAoY2xpY2spPVwic29ydCgpXCJcbiAgICBbc3ZnTmFtZV09XCInYXJyb3ctZG93bidcIlxuICAgIFtjbGFzcy5yb3RhdGVdPVwidHJ1ZVwiXG4gICAgW3N2Z0NvbG9yXT1cIidibHVlJ1wiXG4gICAgdG9vbHRpcD1cIidEZXNjZW5kZW50ZSdcIlxuICAgIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiXG4gID48L2FwcC1zdmctc3RvcmFnZT5cbiAgPCEtLSBPcmRlbmFyIERlc2NlbmRlbnRlIC0tPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==
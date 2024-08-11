import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-bootstrap/tooltip";
import * as i3 from "../svg-storage/svg-storage.component";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: OrderingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.11", type: OrderingComponent, selector: "app-ordering", inputs: { isColumnClicked: "isColumnClicked", sortDirection: "sortDirection", sortAttributes: "sortAttributes" }, outputs: { sortDirectionChange: "sortDirectionChange", sortChange: "sortChange" }, ngImport: i0, template: "<ng-template [ngIf]=\"sortDirection !== 'desc'\">\r\n  <app-svg-storage\r\n    (click)=\"sort()\"\r\n    [svgName]=\"'arrow-up'\"\r\n    [class.rotate]=\"sortDirection !== ''\"\r\n    [svgColor]=\"getSvgColor()\"\r\n    tooltip=\"'Ascendente'\"\r\n    style=\"cursor: pointer;\"\r\n  ></app-svg-storage>\r\n  <!-- Ordenar Ascendente -->\r\n</ng-template>\r\n\r\n<ng-template [ngIf]=\"sortDirection === 'desc'\">\r\n  <app-svg-storage\r\n    (click)=\"sort()\"\r\n    [svgName]=\"'arrow-down'\"\r\n    [class.rotate]=\"true\"\r\n    [svgColor]=\"'blue'\"\r\n    tooltip=\"'Descendente'\"\r\n    style=\"cursor: pointer;\"\r\n  ></app-svg-storage>\r\n  <!-- Ordenar Descendente -->\r\n</ng-template>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.TooltipDirective, selector: "[tooltip], [tooltipHtml]", inputs: ["adaptivePosition", "tooltip", "placement", "triggers", "container", "containerClass", "boundariesElement", "isOpen", "isDisabled", "delay", "tooltipHtml", "tooltipPlacement", "tooltipIsOpen", "tooltipEnable", "tooltipAppendToBody", "tooltipAnimation", "tooltipClass", "tooltipContext", "tooltipPopupDelay", "tooltipFadeDuration", "tooltipTrigger"], outputs: ["tooltipChange", "onShown", "onHidden", "tooltipStateChanged"], exportAs: ["bs-tooltip"] }, { kind: "component", type: i3.SvgStorageComponent, selector: "app-svg-storage", inputs: ["svgName", "svgColor", "svgFill", "svgSize", "svgStrokeWidth"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: OrderingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-ordering', template: "<ng-template [ngIf]=\"sortDirection !== 'desc'\">\r\n  <app-svg-storage\r\n    (click)=\"sort()\"\r\n    [svgName]=\"'arrow-up'\"\r\n    [class.rotate]=\"sortDirection !== ''\"\r\n    [svgColor]=\"getSvgColor()\"\r\n    tooltip=\"'Ascendente'\"\r\n    style=\"cursor: pointer;\"\r\n  ></app-svg-storage>\r\n  <!-- Ordenar Ascendente -->\r\n</ng-template>\r\n\r\n<ng-template [ngIf]=\"sortDirection === 'desc'\">\r\n  <app-svg-storage\r\n    (click)=\"sort()\"\r\n    [svgName]=\"'arrow-down'\"\r\n    [class.rotate]=\"true\"\r\n    [svgColor]=\"'blue'\"\r\n    tooltip=\"'Descendente'\"\r\n    style=\"cursor: pointer;\"\r\n  ></app-svg-storage>\r\n  <!-- Ordenar Descendente -->\r\n</ng-template>\r\n" }]
        }], ctorParameters: () => [], propDecorators: { isColumnClicked: [{
                type: Input
            }], sortDirection: [{
                type: Input
            }], sortAttributes: [{
                type: Input
            }], sortDirectionChange: [{
                type: Output
            }], sortChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvd2lkZ2V0cy9vcmRlcmluZy9vcmRlcmluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL29yZGVyaW5nL29yZGVyaW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTy9FLE1BQU0sT0FBTyxpQkFBaUI7SUFlNUIsdURBQXVEO0lBQ3ZELElBQUk7UUFDRix1Q0FBdUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBQzlCLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztRQUVELGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVsRCxtRkFBbUY7UUFDbkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDN0QsQ0FBQztJQUVEO1FBbENTLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQzFDLHNEQUFzRDtRQUM3QyxrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUVwQyx5QkFBeUI7UUFDaEIsbUJBQWMsR0FBc0IsRUFBRSxDQUFDO1FBRWhELDBEQUEwRDtRQUNoRCx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTNELHdEQUF3RDtRQUM5QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQW9ELENBQUM7SUF1QjdFLENBQUM7SUFFaEIsUUFBUTtRQUNOLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDOytHQXpDVSxpQkFBaUI7bUdBQWpCLGlCQUFpQix5UENQOUIsK3JCQXVCQTs7NEZEaEJhLGlCQUFpQjtrQkFMN0IsU0FBUzsrQkFDRSxjQUFjO3dEQU1mLGVBQWU7c0JBQXZCLEtBQUs7Z0JBRUcsYUFBYTtzQkFBckIsS0FBSztnQkFHRyxjQUFjO3NCQUF0QixLQUFLO2dCQUdJLG1CQUFtQjtzQkFBNUIsTUFBTTtnQkFHRyxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtb3JkZXJpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlcmluZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vb3JkZXJpbmcuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3JkZXJpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBpc0NvbHVtbkNsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvLyBEaXJlw6fDo28gYXR1YWwgZGEgb3JkZW5hw6fDo28gKCdhc2MnLCAnZGVzYycgb3UgdmF6aW8pXHJcbiAgQElucHV0KCkgc29ydERpcmVjdGlvbjogc3RyaW5nID0gJyc7XHJcblxyXG4gIC8vIEF0cmlidXRvcyBkZSBvcmRlbmHDp8Ojb1xyXG4gIEBJbnB1dCgpIHNvcnRBdHRyaWJ1dGVzOiBzdHJpbmcgfCBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAvLyBFdmVudG8gZW1pdGlkbyBxdWFuZG8gYSBkaXJlw6fDo28gZGUgb3JkZW5hw6fDo28gw6kgYWx0ZXJhZGFcclxuICBAT3V0cHV0KCkgc29ydERpcmVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAvLyBFdmVudG8gZW1pdGlkbyBxdWFuZG8gb2NvcnJlIHVtYSBtdWRhbsOnYSBuYSBvcmRlbmHDp8Ojb1xyXG4gIEBPdXRwdXQoKSBzb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRpcmVjdGlvbjogc3RyaW5nLCBjb2x1bW46IHN0cmluZyB8IHN0cmluZ1tdIH0+KCk7XHJcblxyXG4gIC8vIEZ1bsOnw6NvIGNoYW1hZGEgcXVhbmRvIG8gYm90w6NvIGRlIG9yZGVuYcOnw6NvIMOpIGNsaWNhZG9cclxuICBzb3J0KCkge1xyXG4gICAgLy8gSW52ZXJ0ZSBhIGRpcmXDp8OjbyBkZSBvcmRlbmHDp8OjbyBhdHVhbFxyXG4gICAgaWYgKHRoaXMuc29ydERpcmVjdGlvbiA9PT0gJ2FzYycpIHtcclxuICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gJ2Rlc2MnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gJ2FzYyc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW1pdGUgbyBldmVudG8gY29tIGEgbm92YSBkaXJlw6fDo28gZGUgb3JkZW5hw6fDo29cclxuICAgIHRoaXMuc29ydERpcmVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc29ydERpcmVjdGlvbik7XHJcblxyXG4gICAgLy8gRW1pdGUgbyBldmVudG8gZGUgbXVkYW7Dp2EgbmEgb3JkZW5hw6fDo28gY29tIGEgZGlyZcOnw6NvIGUgb3MgYXRyaWJ1dG9zIGRlIG9yZGVuYcOnw6NvXHJcbiAgICB0aGlzLnNvcnRDaGFuZ2UuZW1pdCh7IGRpcmVjdGlvbjogdGhpcy5zb3J0RGlyZWN0aW9uLCBjb2x1bW46IHRoaXMuc29ydEF0dHJpYnV0ZXMgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBPYnTDqW0gYSBjb3IgZG8gw61jb25lIGNvbSBiYXNlIG5hIGRpcmXDp8OjbyBkZSBvcmRlbmHDp8OjbyBhdHVhbFxyXG4gIGdldFN2Z0NvbG9yKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zb3J0RGlyZWN0aW9uID09PSAnYXNjJyA/ICdibHVlJyA6ICdsaWdodGdyYXknO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIERlZmluZSBhIGRpcmXDp8OjbyBkZSBvcmRlbmHDp8OjbyBpbmljaWFsIGNvbW8gdmF6aW9cclxuICAgIHRoaXMuc29ydERpcmVjdGlvbiA9ICcnO1xyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGUgW25nSWZdPVwic29ydERpcmVjdGlvbiAhPT0gJ2Rlc2MnXCI+XHJcbiAgPGFwcC1zdmctc3RvcmFnZVxyXG4gICAgKGNsaWNrKT1cInNvcnQoKVwiXHJcbiAgICBbc3ZnTmFtZV09XCInYXJyb3ctdXAnXCJcclxuICAgIFtjbGFzcy5yb3RhdGVdPVwic29ydERpcmVjdGlvbiAhPT0gJydcIlxyXG4gICAgW3N2Z0NvbG9yXT1cImdldFN2Z0NvbG9yKClcIlxyXG4gICAgdG9vbHRpcD1cIidBc2NlbmRlbnRlJ1wiXHJcbiAgICBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIlxyXG4gID48L2FwcC1zdmctc3RvcmFnZT5cclxuICA8IS0tIE9yZGVuYXIgQXNjZW5kZW50ZSAtLT5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSBbbmdJZl09XCJzb3J0RGlyZWN0aW9uID09PSAnZGVzYydcIj5cclxuICA8YXBwLXN2Zy1zdG9yYWdlXHJcbiAgICAoY2xpY2spPVwic29ydCgpXCJcclxuICAgIFtzdmdOYW1lXT1cIidhcnJvdy1kb3duJ1wiXHJcbiAgICBbY2xhc3Mucm90YXRlXT1cInRydWVcIlxyXG4gICAgW3N2Z0NvbG9yXT1cIidibHVlJ1wiXHJcbiAgICB0b29sdGlwPVwiJ0Rlc2NlbmRlbnRlJ1wiXHJcbiAgICBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIlxyXG4gID48L2FwcC1zdmctc3RvcmFnZT5cclxuICA8IS0tIE9yZGVuYXIgRGVzY2VuZGVudGUgLS0+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==
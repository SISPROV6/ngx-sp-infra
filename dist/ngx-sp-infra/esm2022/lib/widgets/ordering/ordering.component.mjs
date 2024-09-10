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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: OrderingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: OrderingComponent, selector: "app-ordering", inputs: { isColumnClicked: "isColumnClicked", sortDirection: "sortDirection", sortAttributes: "sortAttributes" }, outputs: { sortDirectionChange: "sortDirectionChange", sortChange: "sortChange" }, ngImport: i0, template: "<ng-template [ngIf]=\"sortDirection !== 'desc'\">\n  <app-svg-storage\n    (click)=\"sort()\"\n    [svgName]=\"'arrow-up'\"\n    [class.rotate]=\"sortDirection !== ''\"\n    [svgColor]=\"getSvgColor()\"\n    tooltip=\"'Ascendente'\"\n    style=\"cursor: pointer;\"\n  ></app-svg-storage>\n  <!-- Ordenar Ascendente -->\n</ng-template>\n\n<ng-template [ngIf]=\"sortDirection === 'desc'\">\n  <app-svg-storage\n    (click)=\"sort()\"\n    [svgName]=\"'arrow-down'\"\n    [class.rotate]=\"true\"\n    [svgColor]=\"'blue'\"\n    tooltip=\"'Descendente'\"\n    style=\"cursor: pointer;\"\n  ></app-svg-storage>\n  <!-- Ordenar Descendente -->\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.TooltipDirective, selector: "[tooltip], [tooltipHtml]", inputs: ["adaptivePosition", "tooltip", "placement", "triggers", "container", "containerClass", "boundariesElement", "isOpen", "isDisabled", "delay", "tooltipHtml", "tooltipPlacement", "tooltipIsOpen", "tooltipEnable", "tooltipAppendToBody", "tooltipAnimation", "tooltipClass", "tooltipContext", "tooltipPopupDelay", "tooltipFadeDuration", "tooltipTrigger"], outputs: ["tooltipChange", "onShown", "onHidden", "tooltipStateChanged"], exportAs: ["bs-tooltip"] }, { kind: "component", type: i3.SvgStorageComponent, selector: "app-svg-storage", inputs: ["svgName", "svgColor", "svgFill", "svgSize", "svgStrokeWidth"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: OrderingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-ordering', template: "<ng-template [ngIf]=\"sortDirection !== 'desc'\">\n  <app-svg-storage\n    (click)=\"sort()\"\n    [svgName]=\"'arrow-up'\"\n    [class.rotate]=\"sortDirection !== ''\"\n    [svgColor]=\"getSvgColor()\"\n    tooltip=\"'Ascendente'\"\n    style=\"cursor: pointer;\"\n  ></app-svg-storage>\n  <!-- Ordenar Ascendente -->\n</ng-template>\n\n<ng-template [ngIf]=\"sortDirection === 'desc'\">\n  <app-svg-storage\n    (click)=\"sort()\"\n    [svgName]=\"'arrow-down'\"\n    [class.rotate]=\"true\"\n    [svgColor]=\"'blue'\"\n    tooltip=\"'Descendente'\"\n    style=\"cursor: pointer;\"\n  ></app-svg-storage>\n  <!-- Ordenar Descendente -->\n</ng-template>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvd2lkZ2V0cy9vcmRlcmluZy9vcmRlcmluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL29yZGVyaW5nL29yZGVyaW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTy9FLE1BQU0sT0FBTyxpQkFBaUI7SUFlNUIsdURBQXVEO0lBQ3ZELElBQUk7UUFDRix1Q0FBdUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBQzlCLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztRQUVELGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVsRCxtRkFBbUY7UUFDbkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDN0QsQ0FBQztJQUVEO1FBbENTLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQzFDLHNEQUFzRDtRQUM3QyxrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUVwQyx5QkFBeUI7UUFDaEIsbUJBQWMsR0FBc0IsRUFBRSxDQUFDO1FBRWhELDBEQUEwRDtRQUNoRCx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTNELHdEQUF3RDtRQUM5QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQW9ELENBQUM7SUF1QjdFLENBQUM7SUFFaEIsUUFBUTtRQUNOLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDOytHQXpDVSxpQkFBaUI7bUdBQWpCLGlCQUFpQix5UENQOUIsaXBCQXVCQTs7NEZEaEJhLGlCQUFpQjtrQkFMN0IsU0FBUzsrQkFDRSxjQUFjO3dEQU1mLGVBQWU7c0JBQXZCLEtBQUs7Z0JBRUcsYUFBYTtzQkFBckIsS0FBSztnQkFHRyxjQUFjO3NCQUF0QixLQUFLO2dCQUdJLG1CQUFtQjtzQkFBNUIsTUFBTTtnQkFHRyxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtb3JkZXJpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXJpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vcmRlcmluZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBpc0NvbHVtbkNsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gRGlyZcOnw6NvIGF0dWFsIGRhIG9yZGVuYcOnw6NvICgnYXNjJywgJ2Rlc2MnIG91IHZhemlvKVxuICBASW5wdXQoKSBzb3J0RGlyZWN0aW9uOiBzdHJpbmcgPSAnJztcblxuICAvLyBBdHJpYnV0b3MgZGUgb3JkZW5hw6fDo29cbiAgQElucHV0KCkgc29ydEF0dHJpYnV0ZXM6IHN0cmluZyB8IHN0cmluZ1tdID0gW107XG5cbiAgLy8gRXZlbnRvIGVtaXRpZG8gcXVhbmRvIGEgZGlyZcOnw6NvIGRlIG9yZGVuYcOnw6NvIMOpIGFsdGVyYWRhXG4gIEBPdXRwdXQoKSBzb3J0RGlyZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLy8gRXZlbnRvIGVtaXRpZG8gcXVhbmRvIG9jb3JyZSB1bWEgbXVkYW7Dp2EgbmEgb3JkZW5hw6fDo29cbiAgQE91dHB1dCgpIHNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZGlyZWN0aW9uOiBzdHJpbmcsIGNvbHVtbjogc3RyaW5nIHwgc3RyaW5nW10gfT4oKTtcblxuICAvLyBGdW7Dp8OjbyBjaGFtYWRhIHF1YW5kbyBvIGJvdMOjbyBkZSBvcmRlbmHDp8OjbyDDqSBjbGljYWRvXG4gIHNvcnQoKSB7XG4gICAgLy8gSW52ZXJ0ZSBhIGRpcmXDp8OjbyBkZSBvcmRlbmHDp8OjbyBhdHVhbFxuICAgIGlmICh0aGlzLnNvcnREaXJlY3Rpb24gPT09ICdhc2MnKSB7XG4gICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSAnZGVzYyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9ICdhc2MnO1xuICAgIH1cblxuICAgIC8vIEVtaXRlIG8gZXZlbnRvIGNvbSBhIG5vdmEgZGlyZcOnw6NvIGRlIG9yZGVuYcOnw6NvXG4gICAgdGhpcy5zb3J0RGlyZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zb3J0RGlyZWN0aW9uKTtcblxuICAgIC8vIEVtaXRlIG8gZXZlbnRvIGRlIG11ZGFuw6dhIG5hIG9yZGVuYcOnw6NvIGNvbSBhIGRpcmXDp8OjbyBlIG9zIGF0cmlidXRvcyBkZSBvcmRlbmHDp8Ojb1xuICAgIHRoaXMuc29ydENoYW5nZS5lbWl0KHsgZGlyZWN0aW9uOiB0aGlzLnNvcnREaXJlY3Rpb24sIGNvbHVtbjogdGhpcy5zb3J0QXR0cmlidXRlcyB9KTtcbiAgfVxuXG4gIC8vIE9idMOpbSBhIGNvciBkbyDDrWNvbmUgY29tIGJhc2UgbmEgZGlyZcOnw6NvIGRlIG9yZGVuYcOnw6NvIGF0dWFsXG4gIGdldFN2Z0NvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc29ydERpcmVjdGlvbiA9PT0gJ2FzYycgPyAnYmx1ZScgOiAnbGlnaHRncmF5JztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBEZWZpbmUgYSBkaXJlw6fDo28gZGUgb3JkZW5hw6fDo28gaW5pY2lhbCBjb21vIHZhemlvXG4gICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gJyc7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZSBbbmdJZl09XCJzb3J0RGlyZWN0aW9uICE9PSAnZGVzYydcIj5cbiAgPGFwcC1zdmctc3RvcmFnZVxuICAgIChjbGljayk9XCJzb3J0KClcIlxuICAgIFtzdmdOYW1lXT1cIidhcnJvdy11cCdcIlxuICAgIFtjbGFzcy5yb3RhdGVdPVwic29ydERpcmVjdGlvbiAhPT0gJydcIlxuICAgIFtzdmdDb2xvcl09XCJnZXRTdmdDb2xvcigpXCJcbiAgICB0b29sdGlwPVwiJ0FzY2VuZGVudGUnXCJcbiAgICBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIlxuICA+PC9hcHAtc3ZnLXN0b3JhZ2U+XG4gIDwhLS0gT3JkZW5hciBBc2NlbmRlbnRlIC0tPlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlIFtuZ0lmXT1cInNvcnREaXJlY3Rpb24gPT09ICdkZXNjJ1wiPlxuICA8YXBwLXN2Zy1zdG9yYWdlXG4gICAgKGNsaWNrKT1cInNvcnQoKVwiXG4gICAgW3N2Z05hbWVdPVwiJ2Fycm93LWRvd24nXCJcbiAgICBbY2xhc3Mucm90YXRlXT1cInRydWVcIlxuICAgIFtzdmdDb2xvcl09XCInYmx1ZSdcIlxuICAgIHRvb2x0aXA9XCInRGVzY2VuZGVudGUnXCJcbiAgICBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIlxuICA+PC9hcHAtc3ZnLXN0b3JhZ2U+XG4gIDwhLS0gT3JkZW5hciBEZXNjZW5kZW50ZSAtLT5cbjwvbmctdGVtcGxhdGU+XG4iXX0=
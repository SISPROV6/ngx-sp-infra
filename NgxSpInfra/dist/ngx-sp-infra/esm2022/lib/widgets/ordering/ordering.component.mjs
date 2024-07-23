import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../svg-storage/svg-storage.component";
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.11", type: OrderingComponent, selector: "app-ordering", inputs: { isColumnClicked: "isColumnClicked", sortDirection: "sortDirection", sortAttributes: "sortAttributes" }, outputs: { sortDirectionChange: "sortDirectionChange", sortChange: "sortChange" }, ngImport: i0, template: "<ng-template [ngIf]=\"sortDirection !== 'desc'\">\n  <app-svg-storage\n    (click)=\"sort()\"\n    [svgName]=\"'arrow-up'\"\n    [class.rotate]=\"sortDirection !== ''\"\n    [svgColor]=\"getSvgColor()\"\n    tooltip=\"'Ascendente'\"\n    style=\"cursor: pointer;\"\n  ></app-svg-storage>\n  <!-- Ordenar Ascendente -->\n</ng-template>\n\n<ng-template [ngIf]=\"sortDirection === 'desc'\">\n  <app-svg-storage\n    (click)=\"sort()\"\n    [svgName]=\"'arrow-down'\"\n    [class.rotate]=\"true\"\n    [svgColor]=\"'blue'\"\n    tooltip=\"'Descendente'\"\n    style=\"cursor: pointer;\"\n  ></app-svg-storage>\n  <!-- Ordenar Descendente -->\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.SvgStorageComponent, selector: "app-svg-storage", inputs: ["svgName", "svgColor", "svgFill", "svgSize", "svgStrokeWidth"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: OrderingComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvd2lkZ2V0cy9vcmRlcmluZy9vcmRlcmluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL29yZGVyaW5nL29yZGVyaW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPL0UsTUFBTSxPQUFPLGlCQUFpQjtJQWU1Qix1REFBdUQ7SUFDdkQsSUFBSTtRQUNGLHVDQUF1QztRQUN2QyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssS0FBSyxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7UUFDOUIsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDO1FBRUQsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWxELG1GQUFtRjtRQUNuRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsOERBQThEO0lBQzlELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7UUFsQ1Msb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDMUMsc0RBQXNEO1FBQzdDLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBRXBDLHlCQUF5QjtRQUNoQixtQkFBYyxHQUFzQixFQUFFLENBQUM7UUFFaEQsMERBQTBEO1FBQ2hELHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFM0Qsd0RBQXdEO1FBQzlDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBb0QsQ0FBQztJQXVCN0UsQ0FBQztJQUVoQixRQUFRO1FBQ04sbURBQW1EO1FBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7K0dBekNVLGlCQUFpQjttR0FBakIsaUJBQWlCLHlQQ1A5QixpcEJBdUJBOzs0RkRoQmEsaUJBQWlCO2tCQUw3QixTQUFTOytCQUNFLGNBQWM7d0RBTWYsZUFBZTtzQkFBdkIsS0FBSztnQkFFRyxhQUFhO3NCQUFyQixLQUFLO2dCQUdHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBR0ksbUJBQW1CO3NCQUE1QixNQUFNO2dCQUdHLFVBQVU7c0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1vcmRlcmluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlcmluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29yZGVyaW5nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGlzQ29sdW1uQ2xpY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBEaXJlw6fDo28gYXR1YWwgZGEgb3JkZW5hw6fDo28gKCdhc2MnLCAnZGVzYycgb3UgdmF6aW8pXG4gIEBJbnB1dCgpIHNvcnREaXJlY3Rpb246IHN0cmluZyA9ICcnO1xuXG4gIC8vIEF0cmlidXRvcyBkZSBvcmRlbmHDp8Ojb1xuICBASW5wdXQoKSBzb3J0QXR0cmlidXRlczogc3RyaW5nIHwgc3RyaW5nW10gPSBbXTtcblxuICAvLyBFdmVudG8gZW1pdGlkbyBxdWFuZG8gYSBkaXJlw6fDo28gZGUgb3JkZW5hw6fDo28gw6kgYWx0ZXJhZGFcbiAgQE91dHB1dCgpIHNvcnREaXJlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvLyBFdmVudG8gZW1pdGlkbyBxdWFuZG8gb2NvcnJlIHVtYSBtdWRhbsOnYSBuYSBvcmRlbmHDp8Ojb1xuICBAT3V0cHV0KCkgc29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBkaXJlY3Rpb246IHN0cmluZywgY29sdW1uOiBzdHJpbmcgfCBzdHJpbmdbXSB9PigpO1xuXG4gIC8vIEZ1bsOnw6NvIGNoYW1hZGEgcXVhbmRvIG8gYm90w6NvIGRlIG9yZGVuYcOnw6NvIMOpIGNsaWNhZG9cbiAgc29ydCgpIHtcbiAgICAvLyBJbnZlcnRlIGEgZGlyZcOnw6NvIGRlIG9yZGVuYcOnw6NvIGF0dWFsXG4gICAgaWYgKHRoaXMuc29ydERpcmVjdGlvbiA9PT0gJ2FzYycpIHtcbiAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9ICdkZXNjJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gJ2FzYyc7XG4gICAgfVxuXG4gICAgLy8gRW1pdGUgbyBldmVudG8gY29tIGEgbm92YSBkaXJlw6fDo28gZGUgb3JkZW5hw6fDo29cbiAgICB0aGlzLnNvcnREaXJlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNvcnREaXJlY3Rpb24pO1xuXG4gICAgLy8gRW1pdGUgbyBldmVudG8gZGUgbXVkYW7Dp2EgbmEgb3JkZW5hw6fDo28gY29tIGEgZGlyZcOnw6NvIGUgb3MgYXRyaWJ1dG9zIGRlIG9yZGVuYcOnw6NvXG4gICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQoeyBkaXJlY3Rpb246IHRoaXMuc29ydERpcmVjdGlvbiwgY29sdW1uOiB0aGlzLnNvcnRBdHRyaWJ1dGVzIH0pO1xuICB9XG5cbiAgLy8gT2J0w6ltIGEgY29yIGRvIMOtY29uZSBjb20gYmFzZSBuYSBkaXJlw6fDo28gZGUgb3JkZW5hw6fDo28gYXR1YWxcbiAgZ2V0U3ZnQ29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0RGlyZWN0aW9uID09PSAnYXNjJyA/ICdibHVlJyA6ICdsaWdodGdyYXknO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIERlZmluZSBhIGRpcmXDp8OjbyBkZSBvcmRlbmHDp8OjbyBpbmljaWFsIGNvbW8gdmF6aW9cbiAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSAnJztcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlIFtuZ0lmXT1cInNvcnREaXJlY3Rpb24gIT09ICdkZXNjJ1wiPlxuICA8YXBwLXN2Zy1zdG9yYWdlXG4gICAgKGNsaWNrKT1cInNvcnQoKVwiXG4gICAgW3N2Z05hbWVdPVwiJ2Fycm93LXVwJ1wiXG4gICAgW2NsYXNzLnJvdGF0ZV09XCJzb3J0RGlyZWN0aW9uICE9PSAnJ1wiXG4gICAgW3N2Z0NvbG9yXT1cImdldFN2Z0NvbG9yKClcIlxuICAgIHRvb2x0aXA9XCInQXNjZW5kZW50ZSdcIlxuICAgIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiXG4gID48L2FwcC1zdmctc3RvcmFnZT5cbiAgPCEtLSBPcmRlbmFyIEFzY2VuZGVudGUgLS0+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgW25nSWZdPVwic29ydERpcmVjdGlvbiA9PT0gJ2Rlc2MnXCI+XG4gIDxhcHAtc3ZnLXN0b3JhZ2VcbiAgICAoY2xpY2spPVwic29ydCgpXCJcbiAgICBbc3ZnTmFtZV09XCInYXJyb3ctZG93bidcIlxuICAgIFtjbGFzcy5yb3RhdGVdPVwidHJ1ZVwiXG4gICAgW3N2Z0NvbG9yXT1cIidibHVlJ1wiXG4gICAgdG9vbHRpcD1cIidEZXNjZW5kZW50ZSdcIlxuICAgIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiXG4gID48L2FwcC1zdmctc3RvcmFnZT5cbiAgPCEtLSBPcmRlbmFyIERlc2NlbmRlbnRlIC0tPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==
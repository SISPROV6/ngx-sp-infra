import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class LibSpinnerComponent {
    // #endregion PUBLIC
    // #endregion ==========> PROPERTIES <==========
    // #region ==========> INITIALIZATION <==========
    constructor() {
        // #endregion PROTECTED
        // #region PUBLIC
        /** Tipo do spinner
         * @alias "type"
         * @default "border" */
        this.spinnerType = "border";
        /** Tamanho do spinner (Padrão ou pequeno)
         * @alias "size"
         * @default "default" */
        this.spinnerSize = "default";
        /** Texto de ajuda, será exibido no hover em cima do spinner
         * @alias "text"
         * @default "Carregando informações..." */
        this.helperText = "Carregando informações...";
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes["spinnerSize"]) {
            if (this.spinnerSize === "small")
                this.size = `spinner-${this.spinnerType}-sm`;
            else if (this.spinnerSize === "default")
                delete this.size;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LibSpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: LibSpinnerComponent, selector: "lib-spinner", inputs: { spinnerType: ["type", "spinnerType"], spinnerTheme: ["theme", "spinnerTheme"], spinnerSize: ["size", "spinnerSize"], helperText: ["text", "helperText"] }, usesOnChanges: true, ngImport: i0, template: `
    <div class="spinner-{{spinnerType}} {{spinnerTheme ? 'text-'+spinnerTheme : ''}} {{size}}" role="status">
      <span class="visually-hidden">{{ helperText }}</span>
    </div>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LibSpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-spinner', template: `
    <div class="spinner-{{spinnerType}} {{spinnerTheme ? 'text-'+spinnerTheme : ''}} {{size}}" role="status">
      <span class="visually-hidden">{{ helperText }}</span>
    </div>
  ` }]
        }], ctorParameters: () => [], propDecorators: { spinnerType: [{
                type: Input,
                args: ['type']
            }], spinnerTheme: [{
                type: Input,
                args: ['theme']
            }], spinnerSize: [{
                type: Input,
                args: ['size']
            }], helperText: [{
                type: Input,
                args: ['text']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDOztBQVduRixNQUFNLE9BQU8sbUJBQW1CO0lBZ0M5QixvQkFBb0I7SUFFcEIsZ0RBQWdEO0lBR2hELGlEQUFpRDtJQUNqRDtRQTVCQSx1QkFBdUI7UUFFdkIsaUJBQWlCO1FBRWpCOzsrQkFFdUI7UUFDRCxnQkFBVyxHQUFzQixRQUFRLENBQUM7UUFNaEU7O2dDQUV3QjtRQUNGLGdCQUFXLEdBQXdCLFNBQVMsQ0FBQztRQUVuRTs7a0RBRTBDO1FBQ3BCLGVBQVUsR0FBVywyQkFBMkIsQ0FBQztJQU92RCxDQUFDO0lBRWpCLFFBQVEsS0FBVyxDQUFDO0lBRXBCLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1lBQzNCLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxPQUFPO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxJQUFJLENBQUMsV0FBVyxLQUFLLENBQUM7aUJBQzFFLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTO2dCQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQzsrR0EvQ1UsbUJBQW1CO21HQUFuQixtQkFBbUIsNk9BUHBCOzs7O0dBSVQ7OzRGQUdVLG1CQUFtQjtrQkFUL0IsU0FBUzsrQkFDRSxhQUFhLFlBQ2I7Ozs7R0FJVDt3REFvQnFCLFdBQVc7c0JBQWhDLEtBQUs7dUJBQUMsTUFBTTtnQkFJVSxZQUFZO3NCQUFsQyxLQUFLO3VCQUFDLE9BQU87Z0JBS1EsV0FBVztzQkFBaEMsS0FBSzt1QkFBQyxNQUFNO2dCQUtTLFVBQVU7c0JBQS9CLEtBQUs7dUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1zcGlubmVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXIte3tzcGlubmVyVHlwZX19IHt7c3Bpbm5lclRoZW1lID8gJ3RleHQtJytzcGlubmVyVGhlbWUgOiAnJ319IHt7c2l6ZX19XCIgcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPnt7IGhlbHBlclRleHQgfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogYGBcclxufSlcclxuZXhwb3J0IGNsYXNzIExpYlNwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gUFJPUEVSVElFUyA8PT09PT09PT09PVxyXG5cclxuICAvLyAjcmVnaW9uIFBSSVZBVEVcclxuICAvLyBbLi4uXVxyXG4gIC8vICNlbmRyZWdpb24gUFJJVkFURVxyXG5cclxuICAvLyAjcmVnaW9uIFBST1RFQ1RFRFxyXG4gIHByb3RlY3RlZCBzaXplPzogc3RyaW5nO1xyXG4gIC8vICNlbmRyZWdpb24gUFJPVEVDVEVEXHJcblxyXG4gIC8vICNyZWdpb24gUFVCTElDXHJcblxyXG4gIC8qKiBUaXBvIGRvIHNwaW5uZXJcclxuICAgKiBAYWxpYXMgXCJ0eXBlXCJcclxuICAgKiBAZGVmYXVsdCBcImJvcmRlclwiICovXHJcbiAgQElucHV0KCd0eXBlJykgcHVibGljIHNwaW5uZXJUeXBlOiBcImJvcmRlclwiIHwgXCJncm93XCIgPSBcImJvcmRlclwiO1xyXG5cclxuICAvKiogVGVtYSBkZSBjb3IgZG8gc3Bpbm5lclxyXG4gICAqIEBhbGlhcyBcInRoZW1lXCIgKi9cclxuICBASW5wdXQoJ3RoZW1lJykgcHVibGljIHNwaW5uZXJUaGVtZTogXCJwcmltYXJ5XCIgfCBcInNlY29uZGFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcImRhbmdlclwiIHwgXCJ3YXJuaW5nXCI7XHJcblxyXG4gIC8qKiBUYW1hbmhvIGRvIHNwaW5uZXIgKFBhZHLDo28gb3UgcGVxdWVubylcclxuICAgKiBAYWxpYXMgXCJzaXplXCJcclxuICAgKiBAZGVmYXVsdCBcImRlZmF1bHRcIiAqL1xyXG4gIEBJbnB1dCgnc2l6ZScpIHB1YmxpYyBzcGlubmVyU2l6ZTogXCJkZWZhdWx0XCIgfCBcInNtYWxsXCIgPSBcImRlZmF1bHRcIjtcclxuXHJcbiAgLyoqIFRleHRvIGRlIGFqdWRhLCBzZXLDoSBleGliaWRvIG5vIGhvdmVyIGVtIGNpbWEgZG8gc3Bpbm5lclxyXG4gICAqIEBhbGlhcyBcInRleHRcIlxyXG4gICAqIEBkZWZhdWx0IFwiQ2FycmVnYW5kbyBpbmZvcm1hw6fDtWVzLi4uXCIgKi9cclxuICBASW5wdXQoJ3RleHQnKSBwdWJsaWMgaGVscGVyVGV4dDogc3RyaW5nID0gXCJDYXJyZWdhbmRvIGluZm9ybWHDp8O1ZXMuLi5cIjtcclxuICAvLyAjZW5kcmVnaW9uIFBVQkxJQ1xyXG5cclxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IFBST1BFUlRJRVMgPD09PT09PT09PT1cclxuXHJcblxyXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gSU5JVElBTElaQVRJT04gPD09PT09PT09PT1cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlc1tcInNwaW5uZXJTaXplXCJdKSB7XHJcbiAgICAgIGlmICh0aGlzLnNwaW5uZXJTaXplID09PSBcInNtYWxsXCIpIHRoaXMuc2l6ZSA9IGBzcGlubmVyLSR7dGhpcy5zcGlubmVyVHlwZX0tc21gO1xyXG4gICAgICBlbHNlIGlmICh0aGlzLnNwaW5uZXJTaXplID09PSBcImRlZmF1bHRcIikgZGVsZXRlIHRoaXMuc2l6ZTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PiBJTklUSUFMSVpBVElPTiA8PT09PT09PT09PVxyXG5cclxufVxyXG4iXX0=
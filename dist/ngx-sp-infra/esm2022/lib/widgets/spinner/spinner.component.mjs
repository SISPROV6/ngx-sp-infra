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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDOztBQVduRixNQUFNLE9BQU8sbUJBQW1CO0lBZ0M5QixvQkFBb0I7SUFFcEIsZ0RBQWdEO0lBR2hELGlEQUFpRDtJQUNqRDtRQTVCQSx1QkFBdUI7UUFFdkIsaUJBQWlCO1FBRWpCOzsrQkFFdUI7UUFDRCxnQkFBVyxHQUFzQixRQUFRLENBQUM7UUFNaEU7O2dDQUV3QjtRQUNGLGdCQUFXLEdBQXdCLFNBQVMsQ0FBQztRQUVuRTs7a0RBRTBDO1FBQ3BCLGVBQVUsR0FBVywyQkFBMkIsQ0FBQztJQU92RCxDQUFDO0lBRWpCLFFBQVEsS0FBVyxDQUFDO0lBRXBCLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1lBQzNCLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxPQUFPO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxJQUFJLENBQUMsV0FBVyxLQUFLLENBQUM7aUJBQzFFLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTO2dCQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQzsrR0EvQ1UsbUJBQW1CO21HQUFuQixtQkFBbUIsNk9BUHBCOzs7O0dBSVQ7OzRGQUdVLG1CQUFtQjtrQkFUL0IsU0FBUzsrQkFDRSxhQUFhLFlBQ2I7Ozs7R0FJVDt3REFvQnFCLFdBQVc7c0JBQWhDLEtBQUs7dUJBQUMsTUFBTTtnQkFJVSxZQUFZO3NCQUFsQyxLQUFLO3VCQUFDLE9BQU87Z0JBS1EsV0FBVztzQkFBaEMsS0FBSzt1QkFBQyxNQUFNO2dCQUtTLFVBQVU7c0JBQS9CLEtBQUs7dUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zcGlubmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci17e3NwaW5uZXJUeXBlfX0ge3tzcGlubmVyVGhlbWUgPyAndGV4dC0nK3NwaW5uZXJUaGVtZSA6ICcnfX0ge3tzaXplfX1cIiByb2xlPVwic3RhdHVzXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPnt7IGhlbHBlclRleHQgfX08L3NwYW4+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogYGBcbn0pXG5leHBvcnQgY2xhc3MgTGliU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAvLyAjcmVnaW9uID09PT09PT09PT0+IFBST1BFUlRJRVMgPD09PT09PT09PT1cblxuICAvLyAjcmVnaW9uIFBSSVZBVEVcbiAgLy8gWy4uLl1cbiAgLy8gI2VuZHJlZ2lvbiBQUklWQVRFXG5cbiAgLy8gI3JlZ2lvbiBQUk9URUNURURcbiAgcHJvdGVjdGVkIHNpemU/OiBzdHJpbmc7XG4gIC8vICNlbmRyZWdpb24gUFJPVEVDVEVEXG5cbiAgLy8gI3JlZ2lvbiBQVUJMSUNcblxuICAvKiogVGlwbyBkbyBzcGlubmVyXG4gICAqIEBhbGlhcyBcInR5cGVcIlxuICAgKiBAZGVmYXVsdCBcImJvcmRlclwiICovXG4gIEBJbnB1dCgndHlwZScpIHB1YmxpYyBzcGlubmVyVHlwZTogXCJib3JkZXJcIiB8IFwiZ3Jvd1wiID0gXCJib3JkZXJcIjtcblxuICAvKiogVGVtYSBkZSBjb3IgZG8gc3Bpbm5lclxuICAgKiBAYWxpYXMgXCJ0aGVtZVwiICovXG4gIEBJbnB1dCgndGhlbWUnKSBwdWJsaWMgc3Bpbm5lclRoZW1lOiBcInByaW1hcnlcIiB8IFwic2Vjb25kYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwiZGFuZ2VyXCIgfCBcIndhcm5pbmdcIjtcblxuICAvKiogVGFtYW5obyBkbyBzcGlubmVyIChQYWRyw6NvIG91IHBlcXVlbm8pXG4gICAqIEBhbGlhcyBcInNpemVcIlxuICAgKiBAZGVmYXVsdCBcImRlZmF1bHRcIiAqL1xuICBASW5wdXQoJ3NpemUnKSBwdWJsaWMgc3Bpbm5lclNpemU6IFwiZGVmYXVsdFwiIHwgXCJzbWFsbFwiID0gXCJkZWZhdWx0XCI7XG5cbiAgLyoqIFRleHRvIGRlIGFqdWRhLCBzZXLDoSBleGliaWRvIG5vIGhvdmVyIGVtIGNpbWEgZG8gc3Bpbm5lclxuICAgKiBAYWxpYXMgXCJ0ZXh0XCJcbiAgICogQGRlZmF1bHQgXCJDYXJyZWdhbmRvIGluZm9ybWHDp8O1ZXMuLi5cIiAqL1xuICBASW5wdXQoJ3RleHQnKSBwdWJsaWMgaGVscGVyVGV4dDogc3RyaW5nID0gXCJDYXJyZWdhbmRvIGluZm9ybWHDp8O1ZXMuLi5cIjtcbiAgLy8gI2VuZHJlZ2lvbiBQVUJMSUNcblxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IFBST1BFUlRJRVMgPD09PT09PT09PT1cblxuXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gSU5JVElBTElaQVRJT04gPD09PT09PT09PT1cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1tcInNwaW5uZXJTaXplXCJdKSB7XG4gICAgICBpZiAodGhpcy5zcGlubmVyU2l6ZSA9PT0gXCJzbWFsbFwiKSB0aGlzLnNpemUgPSBgc3Bpbm5lci0ke3RoaXMuc3Bpbm5lclR5cGV9LXNtYDtcbiAgICAgIGVsc2UgaWYgKHRoaXMuc3Bpbm5lclNpemUgPT09IFwiZGVmYXVsdFwiKSBkZWxldGUgdGhpcy5zaXplO1xuICAgIH1cbiAgfVxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IElOSVRJQUxJWkFUSU9OIDw9PT09PT09PT09XG5cbn1cbiJdfQ==
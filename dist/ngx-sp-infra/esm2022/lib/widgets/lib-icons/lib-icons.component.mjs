import { Component, Input } from '@angular/core';
import { IconsList } from '../../models/icons/icon.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class LibIconsComponent {
    /** Cor do ícone
     * Paleta de cores:
     * @argument 'white' - #FFFFFF
     * @argument 'blue' - #3767b2
     * @argument 'gray' - #6C757D
     * @argument 'light-gray' - #CED4DA
     * @argument 'green' - #0F5132
     * @argument 'light-blue' - #3767B2
     * @argument 'yellow' - #FFC107
     * @argument 'red' - #B23737
     * @argument 'currentColor' - currentColor
     * @argument string - HEX da cor específica
    */
    get iconColor() { return this.color; }
    set iconColor(value) {
        switch (value) {
            case "white":
                this.color = "#FFFFFF";
                break;
            case "blue":
                this.color = "#3767b2";
                break;
            case "gray":
                this.color = "#6C757D";
                break;
            case "light-gray":
                this.color = "#CED4DA";
                break;
            case "green":
                this.color = "#0F5132";
                break;
            case "light-blue":
                this.color = "#3767B2";
                break;
            case "yellow":
                this.color = "#FFC107";
                break;
            case "red":
                this.color = "#B23737";
                break;
            case "currentColor":
                this.color = "currentColor";
                break;
            default:
                this.color = value;
                break;
        }
    }
    /** Tamanho do ícone
     * Tamanhos disponíveis:
     * @argument 'default' - 24px
     * @argument 'medium-small' - 20px | Será depreciado em breve!
     * @argument 'small' - 18px
     * @argument number - número em pixels | Preferencialmente não utilizar!
    */
    get iconSize() { return this.size; }
    set iconSize(value) {
        switch (value) {
            case "default":
                this.size = 24;
                break;
            case "medium-small":
                this.size = 20;
                break;
            case "small":
                this.size = 18;
                break;
            default:
                this.size = value;
                break;
        }
    }
    // #endregion PUBLIC
    // #endregion ==========> PROPERTIES <==========
    // #region ==========> INITIALIZATION <==========
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.size = 24;
        this.color = "currentColor";
        this.iconsList = new IconsList(this.size);
    }
    ngOnInit() {
        this.iconsList = new IconsList(this.size);
        this.checkName();
    }
    ngOnChanges(changes) {
        console.log("changes: ", changes);
        if (changes['iconName'])
            this.checkName();
        else {
            switch (this.iconColor) {
                case "white":
                    this.color = "#212529";
                    break;
                case "blue":
                    this.color = "#213B70";
                    break;
                case "gray":
                    this.color = "#212529";
                    break;
                case "lightgray":
                    this.color = "#CED4DA";
                    break;
                case "green":
                    this.color = "#D1E7DD";
                    break;
                case "light-blue":
                    this.color = "#3767B2";
                    break;
                case "yellow":
                    this.color = "#664D03";
                    break;
                case "red":
                    this.color = "#842029";
                    break;
                case "currentColor":
                    this.color = "currentColor";
                    break;
                default:
                    this.color = this.iconColor;
                    break;
            }
            this.iconsList = new IconsList(this.size);
            this.getSVG();
        }
        console.log("color: ", this.color);
    }
    // #endregion ==========> INITIALIZATION <==========
    // #region ==========> UTILS <==========
    /** Valida se o nome informado do ícone existe na lista, caso contrário mostra um erro no console */
    checkName() {
        let hasIcon = this.iconsList.getIcon(this.iconName) ? true : false;
        if (this.iconsList && !hasIcon) {
            console.error(`O ícone informado "${this.iconName}" não existe, utilize outro!`);
        }
        this.getSVG();
    }
    getSVG() {
        let unsanitizedSVG = this.iconsList.getIcon(this.iconName) ? this.iconsList.getIcon(this.iconName).svg ?? "" : "";
        this.safeSVG = this._sanitizer.bypassSecurityTrustHtml(unsanitizedSVG);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LibIconsComponent, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: LibIconsComponent, selector: "lib-icon", inputs: { iconName: "iconName", iconColor: "iconColor", iconSize: "iconSize" }, usesOnChanges: true, ngImport: i0, template: `
    <span [style.color]="color" [innerHTML]="safeSVG"></span>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LibIconsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-icon', template: `
    <span [style.color]="color" [innerHTML]="safeSVG"></span>
  ` }]
        }], ctorParameters: () => [{ type: i1.DomSanitizer }], propDecorators: { iconName: [{
                type: Input,
                args: [{ required: true }]
            }], iconColor: [{
                type: Input
            }], iconSize: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWljb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvbGliLWljb25zL2xpYi1pY29ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBRW5GLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBVTFELE1BQU0sT0FBTyxpQkFBaUI7SUFheEI7Ozs7Ozs7Ozs7OztNQVlFO0lBQ0osSUFDVyxTQUFTLEtBQXFILE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0osSUFBVyxTQUFTLENBQUMsS0FBcUg7UUFDeEksUUFBUSxLQUFLLEVBQUUsQ0FBQztZQUNkLEtBQUssT0FBTztnQkFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFBQyxNQUFNO1lBQzVDLEtBQUssTUFBTTtnQkFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFBQyxNQUFNO1lBQzNDLEtBQUssTUFBTTtnQkFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFBQyxNQUFNO1lBQzNDLEtBQUssWUFBWTtnQkFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFBQyxNQUFNO1lBQ2pELEtBQUssT0FBTztnQkFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFBQyxNQUFNO1lBQzVDLEtBQUssWUFBWTtnQkFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFBQyxNQUFNO1lBQ2pELEtBQUssUUFBUTtnQkFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFBQyxNQUFNO1lBQzdDLEtBQUssS0FBSztnQkFBRSxJ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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJY29uc0xpc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvaWNvbnMvaWNvbi5tb2RlbCc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWljb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBbc3R5bGUuY29sb3JdPVwiY29sb3JcIiBbaW5uZXJIVE1MXT1cInNhZmVTVkdcIj48L3NwYW4+XHJcbiAgYCxcclxuICBzdHlsZXM6IGBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJJY29uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgLy8gI3JlZ2lvbiA9PT09PT09PT09PiBQUk9QRVJUSUVTIDw9PT09PT09PT09XHJcblxyXG4gIC8vICNyZWdpb24gUFJJVkFURVxyXG4gIHByaXZhdGUgaWNvbnNMaXN0OiBJY29uc0xpc3Q7XHJcbiAgLy8gI2VuZHJlZ2lvbiBQUklWQVRFXHJcblxyXG4gIC8vICNyZWdpb24gUFVCTElDXHJcblxyXG4gIC8qKiAob2JyaWdhdMOzcmlvKSBOb21lIGRvIMOtY29uZSAqL1xyXG4gIEBJbnB1dCh7IHJlcXVpcmVkOiB0cnVlIH0pIHB1YmxpYyBpY29uTmFtZTogc3RyaW5nO1xyXG5cclxuICAgICAgLyoqIENvciBkbyDDrWNvbmVcclxuICAgICAgICogUGFsZXRhIGRlIGNvcmVzOlxyXG4gICAgICAgKiBAYXJndW1lbnQgJ3doaXRlJyAtICNGRkZGRkZcclxuICAgICAgICogQGFyZ3VtZW50ICdibHVlJyAtICMzNzY3YjJcclxuICAgICAgICogQGFyZ3VtZW50ICdncmF5JyAtICM2Qzc1N0RcclxuICAgICAgICogQGFyZ3VtZW50ICdsaWdodC1ncmF5JyAtICNDRUQ0REFcclxuICAgICAgICogQGFyZ3VtZW50ICdncmVlbicgLSAjMEY1MTMyXHJcbiAgICAgICAqIEBhcmd1bWVudCAnbGlnaHQtYmx1ZScgLSAjMzc2N0IyXHJcbiAgICAgICAqIEBhcmd1bWVudCAneWVsbG93JyAtICNGRkMxMDdcclxuICAgICAgICogQGFyZ3VtZW50ICdyZWQnIC0gI0IyMzczN1xyXG4gICAgICAgKiBAYXJndW1lbnQgJ2N1cnJlbnRDb2xvcicgLSBjdXJyZW50Q29sb3JcclxuICAgICAgICogQGFyZ3VtZW50IHN0cmluZyAtIEhFWCBkYSBjb3IgZXNwZWPDrWZpY2FcclxuICAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgZ2V0IGljb25Db2xvcigpOiAnd2hpdGUnIHwgJ2JsdWUnIHwgJ2dyYXknIHwgJ2xpZ2h0LWdyYXknIHwgJ2dyZWVuJyB8ICdsaWdodC1ibHVlJyB8ICd5ZWxsb3cnIHwgJ3JlZCcgfCAnY3VycmVudENvbG9yJyB8IHN0cmluZyB7IHJldHVybiB0aGlzLmNvbG9yOyB9XHJcbiAgICBwdWJsaWMgc2V0IGljb25Db2xvcih2YWx1ZTogJ3doaXRlJyB8ICdibHVlJyB8ICdncmF5JyB8ICdsaWdodC1ncmF5JyB8ICdncmVlbicgfCAnbGlnaHQtYmx1ZScgfCAneWVsbG93JyB8ICdyZWQnIHwgJ2N1cnJlbnRDb2xvcicgfCBzdHJpbmcpIHtcclxuICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgIGNhc2UgXCJ3aGl0ZVwiOiB0aGlzLmNvbG9yID0gXCIjRkZGRkZGXCI7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJibHVlXCI6IHRoaXMuY29sb3IgPSBcIiMzNzY3YjJcIjsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImdyYXlcIjogdGhpcy5jb2xvciA9IFwiIzZDNzU3RFwiOyBicmVhaztcclxuICAgICAgICBjYXNlIFwibGlnaHQtZ3JheVwiOiB0aGlzLmNvbG9yID0gXCIjQ0VENERBXCI7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJncmVlblwiOiB0aGlzLmNvbG9yID0gXCIjMEY1MTMyXCI7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJsaWdodC1ibHVlXCI6IHRoaXMuY29sb3IgPSBcIiMzNzY3QjJcIjsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInllbGxvd1wiOiB0aGlzLmNvbG9yID0gXCIjRkZDMTA3XCI7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJyZWRcIjogdGhpcy5jb2xvciA9IFwiI0IyMzczN1wiOyBicmVhaztcclxuICAgICAgICBjYXNlIFwiY3VycmVudENvbG9yXCI6IHRoaXMuY29sb3IgPSBcImN1cnJlbnRDb2xvclwiOyBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiB0aGlzLmNvbG9yID0gdmFsdWU7IGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFRhbWFuaG8gZG8gw61jb25lXHJcbiAgICAgKiBUYW1hbmhvcyBkaXNwb27DrXZlaXM6XHJcbiAgICAgKiBAYXJndW1lbnQgJ2RlZmF1bHQnIC0gMjRweFxyXG4gICAgICogQGFyZ3VtZW50ICdtZWRpdW0tc21hbGwnIC0gMjBweCB8IFNlcsOhIGRlcHJlY2lhZG8gZW0gYnJldmUhXHJcbiAgICAgKiBAYXJndW1lbnQgJ3NtYWxsJyAtIDE4cHhcclxuICAgICAqIEBhcmd1bWVudCBudW1iZXIgLSBuw7ptZXJvIGVtIHBpeGVscyB8IFByZWZlcmVuY2lhbG1lbnRlIG7Do28gdXRpbGl6YXIhXHJcbiAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBnZXQgaWNvblNpemUoKTogJ2RlZmF1bHQnIHwgJ21lZGl1bS1zbWFsbCcgfCAnc21hbGwnIHwgbnVtYmVyIHsgcmV0dXJuIHRoaXMuc2l6ZTsgfVxyXG4gICAgcHVibGljIHNldCBpY29uU2l6ZSh2YWx1ZTogJ2RlZmF1bHQnIHwgJ21lZGl1bS1zbWFsbCcgfCAnc21hbGwnIHwgbnVtYmVyKSB7XHJcbiAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICBjYXNlIFwiZGVmYXVsdFwiOiB0aGlzLnNpemUgPSAyNDsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIm1lZGl1bS1zbWFsbFwiOiB0aGlzLnNpemUgPSAyMDsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInNtYWxsXCI6IHRoaXMuc2l6ZSA9IDE4OyBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiB0aGlzLnNpemUgPSB2YWx1ZSBhcyBudW1iZXI7IGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzYWZlU1ZHOiBTYWZlSHRtbDtcclxuICAgIHByb3RlY3RlZCBzaXplOiBudW1iZXIgPSAyNDtcclxuICAgIHByb3RlY3RlZCBjb2xvcjogc3RyaW5nID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAvLyAjZW5kcmVnaW9uIFBVQkxJQ1xyXG5cclxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IFBST1BFUlRJRVMgPD09PT09PT09PT1cclxuXHJcblxyXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gSU5JVElBTElaQVRJT04gPD09PT09PT09PT1cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gICAgdGhpcy5pY29uc0xpc3QgPSBuZXcgSWNvbnNMaXN0KHRoaXMuc2l6ZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaWNvbnNMaXN0ID0gbmV3IEljb25zTGlzdCh0aGlzLnNpemUpO1xyXG4gICAgdGhpcy5jaGVja05hbWUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlczogXCIsIGNoYW5nZXMpO1xyXG4gICAgXHJcbiAgICBpZiAoY2hhbmdlc1snaWNvbk5hbWUnXSkgdGhpcy5jaGVja05hbWUoKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuaWNvbkNvbG9yKSB7XHJcbiAgICAgICAgY2FzZSBcIndoaXRlXCI6IHRoaXMuY29sb3IgPSBcIiMyMTI1MjlcIjsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImJsdWVcIjogdGhpcy5jb2xvciA9IFwiIzIxM0I3MFwiOyBicmVhaztcclxuICAgICAgICBjYXNlIFwiZ3JheVwiOiB0aGlzLmNvbG9yID0gXCIjMjEyNTI5XCI7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJsaWdodGdyYXlcIjogdGhpcy5jb2xvciA9IFwiI0NFRDREQVwiOyBicmVhaztcclxuICAgICAgICBjYXNlIFwiZ3JlZW5cIjogdGhpcy5jb2xvciA9IFwiI0QxRTdERFwiOyBicmVhaztcclxuICAgICAgICBjYXNlIFwibGlnaHQtYmx1ZVwiOiB0aGlzLmNvbG9yID0gXCIjMzc2N0IyXCI7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ5ZWxsb3dcIjogdGhpcy5jb2xvciA9IFwiIzY2NEQwM1wiOyBicmVhaztcclxuICAgICAgICBjYXNlIFwicmVkXCI6IHRoaXMuY29sb3IgPSBcIiM4NDIwMjlcIjsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImN1cnJlbnRDb2xvclwiOiB0aGlzLmNvbG9yID0gXCJjdXJyZW50Q29sb3JcIjsgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDogdGhpcy5jb2xvciA9IHRoaXMuaWNvbkNvbG9yOyBicmVhaztcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICB0aGlzLmljb25zTGlzdCA9IG5ldyBJY29uc0xpc3QodGhpcy5zaXplKTtcclxuICAgICAgdGhpcy5nZXRTVkcoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImNvbG9yOiBcIiwgdGhpcy5jb2xvcik7XHJcbiAgfVxyXG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gSU5JVElBTElaQVRJT04gPD09PT09PT09PT1cclxuXHJcblxyXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gVVRJTFMgPD09PT09PT09PT1cclxuXHJcbiAgLyoqIFZhbGlkYSBzZSBvIG5vbWUgaW5mb3JtYWRvIGRvIMOtY29uZSBleGlzdGUgbmEgbGlzdGEsIGNhc28gY29udHLDoXJpbyBtb3N0cmEgdW0gZXJybyBubyBjb25zb2xlICovXHJcbiAgcHJpdmF0ZSBjaGVja05hbWUoKTogdm9pZCB7XHJcbiAgICBsZXQgaGFzSWNvbjogYm9vbGVhbiA9IHRoaXMuaWNvbnNMaXN0LmdldEljb24odGhpcy5pY29uTmFtZSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBpZiAodGhpcy5pY29uc0xpc3QgJiYgIWhhc0ljb24pIHsgY29uc29sZS5lcnJvcihgTyDDrWNvbmUgaW5mb3JtYWRvIFwiJHt0aGlzLmljb25OYW1lfVwiIG7Do28gZXhpc3RlLCB1dGlsaXplIG91dHJvIWApOyB9XHJcblxyXG4gICAgdGhpcy5nZXRTVkcoKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgZ2V0U1ZHKCk6IHZvaWQge1xyXG4gICAgbGV0IHVuc2FuaXRpemVkU1ZHID0gdGhpcy5pY29uc0xpc3QuZ2V0SWNvbih0aGlzLmljb25OYW1lKSA/IHRoaXMuaWNvbnNMaXN0LmdldEljb24odGhpcy5pY29uTmFtZSkhLnN2ZyA/PyBcIlwiIDogXCJcIjtcclxuICAgIHRoaXMuc2FmZVNWRyA9IHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh1bnNhbml0aXplZFNWRyk7XHJcbiAgfVxyXG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gVVRJTFMgPD09PT09PT09PT1cclxuXHJcbn1cclxuIl19
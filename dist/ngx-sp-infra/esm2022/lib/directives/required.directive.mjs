import { Directive, Input } from "@angular/core";
import * as i0 from "@angular/core";
/**
 * Diretiva que adiciona um asterisco vermelho (*) ao lado de um elemento <label>
 * para indicar que o campo é obrigatório.
 *
 * ## Uso
 *
 * No seu template HTML, você pode usar a diretiva de duas maneiras:
 *
 * 1. Sem especificar o valor, onde o marcador será exibido por padrão:
 *
 * ```html
 * <label libRequired for="inputTeste" class="form-label">Pessoa</label>
 * ```
 *
 * 2. Especificando explicitamente o valor (true ou false):
 *
 * ```html
 * <label [libRequired]="true" for="inputTeste" class="form-label">Nome</label>
 * <label [libRequired]="false" for="inputTeste" class="form-label">Empresa</label>
 * ```
 *
 * ### Inputs
 *
 * - `libRequired`: boolean | string
 *   - Determina se o asterisco de obrigatoriedade deve ser exibido.
 *   - Aceita valores booleanos (`true` ou `false`) ou strings (`"true"` ou `"false"`).
 *   - Padrão: `true`
 *
 * - `sisID`: string
 *   - Identificador único para o elemento `<span>` criado.
 *   - Útil para manipulação direta do DOM ou testes.
 */
export class RequiredDirective {
    /**
     * @param _elementRef - Referência ao elemento DOM ao qual a diretiva está associada.
     * @param _renderer - Serviço Angular para manipulação segura do DOM.
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._showMarker = true; // Valor padrão
        /** Identificador único para o elemento <span> criado. */
        this.spanID = "";
    }
    /**
     * Define se o asterisco de obrigatoriedade deve ser exibido.
     * Se nenhum valor for especificado, o padrão é true.
     */
    set showMarker(value) { this._showMarker = value !== false && value !== 'false'; /* Qualquer valor diferente de false será tratado como true*/ }
    get showMarker() { return this._showMarker; }
    ngOnInit() {
        if (this.showMarker) {
            this.addMarker();
        }
    }
    ngOnChanges(changes) {
        if (changes["showMarker"]?.currentValue !== changes["showMarker"]?.previousValue && changes["showMarker"]?.previousValue !== undefined) {
            if (this.showMarker) {
                this.addMarker();
            }
            else {
                this.removeMarker();
            }
        }
    }
    /** Adiciona o marcador de asterisco ao elemento <label>. */
    addMarker() {
        if (document.getElementById(this.spanID)) {
            return;
        }
        const spanElement = document.createElement("span");
        spanElement.className = "text-danger";
        spanElement.innerHTML = " *";
        spanElement.id = this.spanID;
        this._renderer.appendChild(this._elementRef.nativeElement, spanElement);
    }
    /** Remove o marcador de asterisco do elemento <label>. */
    removeMarker() {
        if (this.spanID === "") {
            return;
        }
        const spanElement = document.getElementById(this.spanID);
        if (spanElement !== null) {
            this._renderer.removeChild(this._elementRef.nativeElement, spanElement);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RequiredDirective, selector: "label[libRequired], span[libRequired], p[libRequired]", inputs: { showMarker: ["libRequired", "showMarker"], spanID: ["sisID", "spanID"] }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "label[libRequired], span[libRequired], p[libRequired]"
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { showMarker: [{
                type: Input,
                args: ["libRequired"]
            }], spanID: [{
                type: Input,
                args: ["sisID"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvZGlyZWN0aXZlcy9yZXF1aXJlZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDOztBQUUxRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStCRztBQUlILE1BQU0sT0FBTyxpQkFBaUI7SUFHNUI7OztPQUdHO0lBQ0gsWUFDVSxXQUF1QixFQUN2QixTQUFvQjtRQURwQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBUnRCLGdCQUFXLEdBQVksSUFBSSxDQUFDLENBQUMsZUFBZTtRQW1CcEQseURBQXlEO1FBQ3pDLFdBQU0sR0FBVyxFQUFFLENBQUM7SUFYaEMsQ0FBQztJQUVMOzs7T0FHRztJQUNILElBQ0ksVUFBVSxDQUFDLEtBQXVCLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO0lBQ2xLLElBQUksVUFBVSxLQUFjLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFNdEQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxZQUFZLEtBQUssT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLGFBQWEsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3ZJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUFDLENBQUM7aUJBQ3JDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQUMsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUdELDREQUE0RDtJQUNwRCxTQUFTO1FBQ2YsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQUMsT0FBTztRQUFDLENBQUM7UUFFckQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxXQUFXLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztRQUN0QyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUM3QixXQUFXLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELDBEQUEwRDtJQUNsRCxZQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUFDLE9BQU87UUFBQyxDQUFDO1FBRW5DLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELElBQUksV0FBVyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFBQyxDQUFDO0lBQ3hHLENBQUM7K0dBdkRVLGlCQUFpQjttR0FBakIsaUJBQWlCOzs0RkFBakIsaUJBQWlCO2tCQUg3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx1REFBdUQ7aUJBQ2xFO3VHQWtCSyxVQUFVO3NCQURiLEtBQUs7dUJBQUMsYUFBYTtnQkFLSixNQUFNO3NCQUFyQixLQUFLO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLyoqXG4gKiBEaXJldGl2YSBxdWUgYWRpY2lvbmEgdW0gYXN0ZXJpc2NvIHZlcm1lbGhvICgqKSBhbyBsYWRvIGRlIHVtIGVsZW1lbnRvIDxsYWJlbD5cbiAqIHBhcmEgaW5kaWNhciBxdWUgbyBjYW1wbyDDqSBvYnJpZ2F0w7NyaW8uXG4gKiBcbiAqICMjIFVzb1xuICogXG4gKiBObyBzZXUgdGVtcGxhdGUgSFRNTCwgdm9jw6ogcG9kZSB1c2FyIGEgZGlyZXRpdmEgZGUgZHVhcyBtYW5laXJhczpcbiAqIFxuICogMS4gU2VtIGVzcGVjaWZpY2FyIG8gdmFsb3IsIG9uZGUgbyBtYXJjYWRvciBzZXLDoSBleGliaWRvIHBvciBwYWRyw6NvOlxuICogXG4gKiBgYGBodG1sXG4gKiA8bGFiZWwgbGliUmVxdWlyZWQgZm9yPVwiaW5wdXRUZXN0ZVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlBlc3NvYTwvbGFiZWw+XG4gKiBgYGBcbiAqIFxuICogMi4gRXNwZWNpZmljYW5kbyBleHBsaWNpdGFtZW50ZSBvIHZhbG9yICh0cnVlIG91IGZhbHNlKTpcbiAqIFxuICogYGBgaHRtbFxuICogPGxhYmVsIFtsaWJSZXF1aXJlZF09XCJ0cnVlXCIgZm9yPVwiaW5wdXRUZXN0ZVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPk5vbWU8L2xhYmVsPlxuICogPGxhYmVsIFtsaWJSZXF1aXJlZF09XCJmYWxzZVwiIGZvcj1cImlucHV0VGVzdGVcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5FbXByZXNhPC9sYWJlbD5cbiAqIGBgYFxuICogXG4gKiAjIyMgSW5wdXRzXG4gKiBcbiAqIC0gYGxpYlJlcXVpcmVkYDogYm9vbGVhbiB8IHN0cmluZ1xuICogICAtIERldGVybWluYSBzZSBvIGFzdGVyaXNjbyBkZSBvYnJpZ2F0b3JpZWRhZGUgZGV2ZSBzZXIgZXhpYmlkby4gXG4gKiAgIC0gQWNlaXRhIHZhbG9yZXMgYm9vbGVhbm9zIChgdHJ1ZWAgb3UgYGZhbHNlYCkgb3Ugc3RyaW5ncyAoYFwidHJ1ZVwiYCBvdSBgXCJmYWxzZVwiYCkuXG4gKiAgIC0gUGFkcsOjbzogYHRydWVgXG4gKiBcbiAqIC0gYHNpc0lEYDogc3RyaW5nXG4gKiAgIC0gSWRlbnRpZmljYWRvciDDum5pY28gcGFyYSBvIGVsZW1lbnRvIGA8c3Bhbj5gIGNyaWFkby5cbiAqICAgLSDDmnRpbCBwYXJhIG1hbmlwdWxhw6fDo28gZGlyZXRhIGRvIERPTSBvdSB0ZXN0ZXMuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJsYWJlbFtsaWJSZXF1aXJlZF0sIHNwYW5bbGliUmVxdWlyZWRdLCBwW2xpYlJlcXVpcmVkXVwiXG59KVxuZXhwb3J0IGNsYXNzIFJlcXVpcmVkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9zaG93TWFya2VyOiBib29sZWFuID0gdHJ1ZTsgLy8gVmFsb3IgcGFkcsOjb1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gX2VsZW1lbnRSZWYgLSBSZWZlcsOqbmNpYSBhbyBlbGVtZW50byBET00gYW8gcXVhbCBhIGRpcmV0aXZhIGVzdMOhIGFzc29jaWFkYS5cbiAgICogQHBhcmFtIF9yZW5kZXJlciAtIFNlcnZpw6dvIEFuZ3VsYXIgcGFyYSBtYW5pcHVsYcOnw6NvIHNlZ3VyYSBkbyBET00uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkgeyB9XG5cbiAgLyoqXG4gICAqIERlZmluZSBzZSBvIGFzdGVyaXNjbyBkZSBvYnJpZ2F0b3JpZWRhZGUgZGV2ZSBzZXIgZXhpYmlkby5cbiAgICogU2UgbmVuaHVtIHZhbG9yIGZvciBlc3BlY2lmaWNhZG8sIG8gcGFkcsOjbyDDqSB0cnVlLlxuICAgKi9cbiAgQElucHV0KFwibGliUmVxdWlyZWRcIilcbiAgc2V0IHNob3dNYXJrZXIodmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpIHsgdGhpcy5fc2hvd01hcmtlciA9IHZhbHVlICE9PSBmYWxzZSAmJiB2YWx1ZSAhPT0gJ2ZhbHNlJzsgLyogUXVhbHF1ZXIgdmFsb3IgZGlmZXJlbnRlIGRlIGZhbHNlIHNlcsOhIHRyYXRhZG8gY29tbyB0cnVlKi8gfVxuICBnZXQgc2hvd01hcmtlcigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3Nob3dNYXJrZXI7IH1cblxuICAvKiogSWRlbnRpZmljYWRvciDDum5pY28gcGFyYSBvIGVsZW1lbnRvIDxzcGFuPiBjcmlhZG8uICovXG4gIEBJbnB1dChcInNpc0lEXCIpIHNwYW5JRDogc3RyaW5nID0gXCJcIjtcblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3dNYXJrZXIpIHtcbiAgICAgIHRoaXMuYWRkTWFya2VyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzW1wic2hvd01hcmtlclwiXT8uY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzW1wic2hvd01hcmtlclwiXT8ucHJldmlvdXNWYWx1ZSAmJiBjaGFuZ2VzW1wic2hvd01hcmtlclwiXT8ucHJldmlvdXNWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5zaG93TWFya2VyKSB7IHRoaXMuYWRkTWFya2VyKCk7IH1cbiAgICAgIGVsc2UgeyB0aGlzLnJlbW92ZU1hcmtlcigpOyB9XG4gICAgfVxuICB9XG5cblxuICAvKiogQWRpY2lvbmEgbyBtYXJjYWRvciBkZSBhc3RlcmlzY28gYW8gZWxlbWVudG8gPGxhYmVsPi4gKi9cbiAgcHJpdmF0ZSBhZGRNYXJrZXIoKTogdm9pZCB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3BhbklEKSkgeyByZXR1cm47IH1cblxuICAgIGNvbnN0IHNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3BhbkVsZW1lbnQuY2xhc3NOYW1lID0gXCJ0ZXh0LWRhbmdlclwiO1xuICAgIHNwYW5FbGVtZW50LmlubmVySFRNTCA9IFwiICpcIjtcbiAgICBzcGFuRWxlbWVudC5pZCA9IHRoaXMuc3BhbklEO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgc3BhbkVsZW1lbnQpO1xuICB9XG5cbiAgLyoqIFJlbW92ZSBvIG1hcmNhZG9yIGRlIGFzdGVyaXNjbyBkbyBlbGVtZW50byA8bGFiZWw+LiAqL1xuICBwcml2YXRlIHJlbW92ZU1hcmtlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zcGFuSUQgPT09IFwiXCIpIHsgcmV0dXJuOyB9XG5cbiAgICBjb25zdCBzcGFuRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3BhbklEKTtcbiAgICBpZiAoc3BhbkVsZW1lbnQgIT09IG51bGwpIHsgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzcGFuRWxlbWVudCk7IH1cbiAgfVxufVxuIl19
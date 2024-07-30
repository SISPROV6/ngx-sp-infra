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
        spanElement.innerHTML = "*";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: RequiredDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.11", type: RequiredDirective, selector: "label[libRequired]", inputs: { showMarker: ["libRequired", "showMarker"], spanID: ["sisID", "spanID"] }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: RequiredDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "label[libRequired]"
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { showMarker: [{
                type: Input,
                args: ["libRequired"]
            }], spanID: [{
                type: Input,
                args: ["sisID"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvZGlyZWN0aXZlcy9yZXF1aXJlZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDOztBQUUxRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStCRztBQUlILE1BQU0sT0FBTyxpQkFBaUI7SUFHNUI7OztPQUdHO0lBQ0gsWUFDVSxXQUF1QixFQUN2QixTQUFvQjtRQURwQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBUnRCLGdCQUFXLEdBQVksSUFBSSxDQUFDLENBQUMsZUFBZTtRQW1CcEQseURBQXlEO1FBQ3pDLFdBQU0sR0FBVyxFQUFFLENBQUM7SUFYaEMsQ0FBQztJQUVMOzs7T0FHRztJQUNILElBQ0ksVUFBVSxDQUFDLEtBQXVCLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO0lBQ2xLLElBQUksVUFBVSxLQUFjLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFNdEQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxZQUFZLEtBQUssT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLGFBQWEsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3ZJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUFDLENBQUM7aUJBQ3JDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQUMsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUdELDREQUE0RDtJQUNwRCxTQUFTO1FBQ2YsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQUMsT0FBTztRQUFDLENBQUM7UUFFckQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxXQUFXLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztRQUN0QyxXQUFXLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUM1QixXQUFXLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELDBEQUEwRDtJQUNsRCxZQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUFDLE9BQU87UUFBQyxDQUFDO1FBRW5DLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELElBQUksV0FBVyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFBQyxDQUFDO0lBQ3hHLENBQUM7K0dBdkRVLGlCQUFpQjttR0FBakIsaUJBQWlCOzs0RkFBakIsaUJBQWlCO2tCQUg3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9CO3VHQWtCSyxVQUFVO3NCQURiLEtBQUs7dUJBQUMsYUFBYTtnQkFLSixNQUFNO3NCQUFyQixLQUFLO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbi8qKlxyXG4gKiBEaXJldGl2YSBxdWUgYWRpY2lvbmEgdW0gYXN0ZXJpc2NvIHZlcm1lbGhvICgqKSBhbyBsYWRvIGRlIHVtIGVsZW1lbnRvIDxsYWJlbD5cclxuICogcGFyYSBpbmRpY2FyIHF1ZSBvIGNhbXBvIMOpIG9icmlnYXTDs3Jpby5cclxuICogXHJcbiAqICMjIFVzb1xyXG4gKiBcclxuICogTm8gc2V1IHRlbXBsYXRlIEhUTUwsIHZvY8OqIHBvZGUgdXNhciBhIGRpcmV0aXZhIGRlIGR1YXMgbWFuZWlyYXM6XHJcbiAqIFxyXG4gKiAxLiBTZW0gZXNwZWNpZmljYXIgbyB2YWxvciwgb25kZSBvIG1hcmNhZG9yIHNlcsOhIGV4aWJpZG8gcG9yIHBhZHLDo286XHJcbiAqIFxyXG4gKiBgYGBodG1sXHJcbiAqIDxsYWJlbCBsaWJSZXF1aXJlZCBmb3I9XCJpbnB1dFRlc3RlXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+UGVzc29hPC9sYWJlbD5cclxuICogYGBgXHJcbiAqIFxyXG4gKiAyLiBFc3BlY2lmaWNhbmRvIGV4cGxpY2l0YW1lbnRlIG8gdmFsb3IgKHRydWUgb3UgZmFsc2UpOlxyXG4gKiBcclxuICogYGBgaHRtbFxyXG4gKiA8bGFiZWwgW2xpYlJlcXVpcmVkXT1cInRydWVcIiBmb3I9XCJpbnB1dFRlc3RlXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+Tm9tZTwvbGFiZWw+XHJcbiAqIDxsYWJlbCBbbGliUmVxdWlyZWRdPVwiZmFsc2VcIiBmb3I9XCJpbnB1dFRlc3RlXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+RW1wcmVzYTwvbGFiZWw+XHJcbiAqIGBgYFxyXG4gKiBcclxuICogIyMjIElucHV0c1xyXG4gKiBcclxuICogLSBgbGliUmVxdWlyZWRgOiBib29sZWFuIHwgc3RyaW5nXHJcbiAqICAgLSBEZXRlcm1pbmEgc2UgbyBhc3RlcmlzY28gZGUgb2JyaWdhdG9yaWVkYWRlIGRldmUgc2VyIGV4aWJpZG8uIFxyXG4gKiAgIC0gQWNlaXRhIHZhbG9yZXMgYm9vbGVhbm9zIChgdHJ1ZWAgb3UgYGZhbHNlYCkgb3Ugc3RyaW5ncyAoYFwidHJ1ZVwiYCBvdSBgXCJmYWxzZVwiYCkuXHJcbiAqICAgLSBQYWRyw6NvOiBgdHJ1ZWBcclxuICogXHJcbiAqIC0gYHNpc0lEYDogc3RyaW5nXHJcbiAqICAgLSBJZGVudGlmaWNhZG9yIMO6bmljbyBwYXJhIG8gZWxlbWVudG8gYDxzcGFuPmAgY3JpYWRvLlxyXG4gKiAgIC0gw5p0aWwgcGFyYSBtYW5pcHVsYcOnw6NvIGRpcmV0YSBkbyBET00gb3UgdGVzdGVzLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwibGFiZWxbbGliUmVxdWlyZWRdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcXVpcmVkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgX3Nob3dNYXJrZXI6IGJvb2xlYW4gPSB0cnVlOyAvLyBWYWxvciBwYWRyw6NvXHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBfZWxlbWVudFJlZiAtIFJlZmVyw6puY2lhIGFvIGVsZW1lbnRvIERPTSBhbyBxdWFsIGEgZGlyZXRpdmEgZXN0w6EgYXNzb2NpYWRhLlxyXG4gICAqIEBwYXJhbSBfcmVuZGVyZXIgLSBTZXJ2acOnbyBBbmd1bGFyIHBhcmEgbWFuaXB1bGHDp8OjbyBzZWd1cmEgZG8gRE9NLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVmaW5lIHNlIG8gYXN0ZXJpc2NvIGRlIG9icmlnYXRvcmllZGFkZSBkZXZlIHNlciBleGliaWRvLlxyXG4gICAqIFNlIG5lbmh1bSB2YWxvciBmb3IgZXNwZWNpZmljYWRvLCBvIHBhZHLDo28gw6kgdHJ1ZS5cclxuICAgKi9cclxuICBASW5wdXQoXCJsaWJSZXF1aXJlZFwiKVxyXG4gIHNldCBzaG93TWFya2VyKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSB7IHRoaXMuX3Nob3dNYXJrZXIgPSB2YWx1ZSAhPT0gZmFsc2UgJiYgdmFsdWUgIT09ICdmYWxzZSc7IC8qIFF1YWxxdWVyIHZhbG9yIGRpZmVyZW50ZSBkZSBmYWxzZSBzZXLDoSB0cmF0YWRvIGNvbW8gdHJ1ZSovIH1cclxuICBnZXQgc2hvd01hcmtlcigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3Nob3dNYXJrZXI7IH1cclxuXHJcbiAgLyoqIElkZW50aWZpY2Fkb3Igw7puaWNvIHBhcmEgbyBlbGVtZW50byA8c3Bhbj4gY3JpYWRvLiAqL1xyXG4gIEBJbnB1dChcInNpc0lEXCIpIHNwYW5JRDogc3RyaW5nID0gXCJcIjtcclxuXHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2hvd01hcmtlcikge1xyXG4gICAgICB0aGlzLmFkZE1hcmtlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXNbXCJzaG93TWFya2VyXCJdPy5jdXJyZW50VmFsdWUgIT09IGNoYW5nZXNbXCJzaG93TWFya2VyXCJdPy5wcmV2aW91c1ZhbHVlICYmIGNoYW5nZXNbXCJzaG93TWFya2VyXCJdPy5wcmV2aW91c1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKHRoaXMuc2hvd01hcmtlcikgeyB0aGlzLmFkZE1hcmtlcigpOyB9XHJcbiAgICAgIGVsc2UgeyB0aGlzLnJlbW92ZU1hcmtlcigpOyB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIEFkaWNpb25hIG8gbWFyY2Fkb3IgZGUgYXN0ZXJpc2NvIGFvIGVsZW1lbnRvIDxsYWJlbD4uICovXHJcbiAgcHJpdmF0ZSBhZGRNYXJrZXIoKTogdm9pZCB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zcGFuSUQpKSB7IHJldHVybjsgfVxyXG5cclxuICAgIGNvbnN0IHNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBzcGFuRWxlbWVudC5jbGFzc05hbWUgPSBcInRleHQtZGFuZ2VyXCI7XHJcbiAgICBzcGFuRWxlbWVudC5pbm5lckhUTUwgPSBcIipcIjtcclxuICAgIHNwYW5FbGVtZW50LmlkID0gdGhpcy5zcGFuSUQ7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHNwYW5FbGVtZW50KTtcclxuICB9XHJcblxyXG4gIC8qKiBSZW1vdmUgbyBtYXJjYWRvciBkZSBhc3RlcmlzY28gZG8gZWxlbWVudG8gPGxhYmVsPi4gKi9cclxuICBwcml2YXRlIHJlbW92ZU1hcmtlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNwYW5JRCA9PT0gXCJcIikgeyByZXR1cm47IH1cclxuXHJcbiAgICBjb25zdCBzcGFuRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3BhbklEKTtcclxuICAgIGlmIChzcGFuRWxlbWVudCAhPT0gbnVsbCkgeyB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHNwYW5FbGVtZW50KTsgfVxyXG4gIH1cclxufVxyXG4iXX0=
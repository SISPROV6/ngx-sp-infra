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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: RequiredDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.11", type: RequiredDirective, selector: "label[libRequired], span[libRequired], p[libRequired]", inputs: { showMarker: ["libRequired", "showMarker"], spanID: ["sisID", "spanID"] }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: RequiredDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvZGlyZWN0aXZlcy9yZXF1aXJlZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDOztBQUUxRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStCRztBQUlILE1BQU0sT0FBTyxpQkFBaUI7SUFHNUI7OztPQUdHO0lBQ0gsWUFDVSxXQUF1QixFQUN2QixTQUFvQjtRQURwQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBUnRCLGdCQUFXLEdBQVksSUFBSSxDQUFDLENBQUMsZUFBZTtRQW1CcEQseURBQXlEO1FBQ3pDLFdBQU0sR0FBVyxFQUFFLENBQUM7SUFYaEMsQ0FBQztJQUVMOzs7T0FHRztJQUNILElBQ0ksVUFBVSxDQUFDLEtBQXVCLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO0lBQ2xLLElBQUksVUFBVSxLQUFjLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFNdEQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxZQUFZLEtBQUssT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLGFBQWEsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3ZJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUFDLENBQUM7aUJBQ3JDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQUMsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUdELDREQUE0RDtJQUNwRCxTQUFTO1FBQ2YsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQUMsT0FBTztRQUFDLENBQUM7UUFFckQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxXQUFXLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztRQUN0QyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUM3QixXQUFXLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELDBEQUEwRDtJQUNsRCxZQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUFDLE9BQU87UUFBQyxDQUFDO1FBRW5DLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELElBQUksV0FBVyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFBQyxDQUFDO0lBQ3hHLENBQUM7K0dBdkRVLGlCQUFpQjttR0FBakIsaUJBQWlCOzs0RkFBakIsaUJBQWlCO2tCQUg3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx1REFBdUQ7aUJBQ2xFO3VHQWtCSyxVQUFVO3NCQURiLEtBQUs7dUJBQUMsYUFBYTtnQkFLSixNQUFNO3NCQUFyQixLQUFLO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbi8qKlxyXG4gKiBEaXJldGl2YSBxdWUgYWRpY2lvbmEgdW0gYXN0ZXJpc2NvIHZlcm1lbGhvICgqKSBhbyBsYWRvIGRlIHVtIGVsZW1lbnRvIDxsYWJlbD5cclxuICogcGFyYSBpbmRpY2FyIHF1ZSBvIGNhbXBvIMOpIG9icmlnYXTDs3Jpby5cclxuICogXHJcbiAqICMjIFVzb1xyXG4gKiBcclxuICogTm8gc2V1IHRlbXBsYXRlIEhUTUwsIHZvY8OqIHBvZGUgdXNhciBhIGRpcmV0aXZhIGRlIGR1YXMgbWFuZWlyYXM6XHJcbiAqIFxyXG4gKiAxLiBTZW0gZXNwZWNpZmljYXIgbyB2YWxvciwgb25kZSBvIG1hcmNhZG9yIHNlcsOhIGV4aWJpZG8gcG9yIHBhZHLDo286XHJcbiAqIFxyXG4gKiBgYGBodG1sXHJcbiAqIDxsYWJlbCBsaWJSZXF1aXJlZCBmb3I9XCJpbnB1dFRlc3RlXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+UGVzc29hPC9sYWJlbD5cclxuICogYGBgXHJcbiAqIFxyXG4gKiAyLiBFc3BlY2lmaWNhbmRvIGV4cGxpY2l0YW1lbnRlIG8gdmFsb3IgKHRydWUgb3UgZmFsc2UpOlxyXG4gKiBcclxuICogYGBgaHRtbFxyXG4gKiA8bGFiZWwgW2xpYlJlcXVpcmVkXT1cInRydWVcIiBmb3I9XCJpbnB1dFRlc3RlXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+Tm9tZTwvbGFiZWw+XHJcbiAqIDxsYWJlbCBbbGliUmVxdWlyZWRdPVwiZmFsc2VcIiBmb3I9XCJpbnB1dFRlc3RlXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+RW1wcmVzYTwvbGFiZWw+XHJcbiAqIGBgYFxyXG4gKiBcclxuICogIyMjIElucHV0c1xyXG4gKiBcclxuICogLSBgbGliUmVxdWlyZWRgOiBib29sZWFuIHwgc3RyaW5nXHJcbiAqICAgLSBEZXRlcm1pbmEgc2UgbyBhc3RlcmlzY28gZGUgb2JyaWdhdG9yaWVkYWRlIGRldmUgc2VyIGV4aWJpZG8uIFxyXG4gKiAgIC0gQWNlaXRhIHZhbG9yZXMgYm9vbGVhbm9zIChgdHJ1ZWAgb3UgYGZhbHNlYCkgb3Ugc3RyaW5ncyAoYFwidHJ1ZVwiYCBvdSBgXCJmYWxzZVwiYCkuXHJcbiAqICAgLSBQYWRyw6NvOiBgdHJ1ZWBcclxuICogXHJcbiAqIC0gYHNpc0lEYDogc3RyaW5nXHJcbiAqICAgLSBJZGVudGlmaWNhZG9yIMO6bmljbyBwYXJhIG8gZWxlbWVudG8gYDxzcGFuPmAgY3JpYWRvLlxyXG4gKiAgIC0gw5p0aWwgcGFyYSBtYW5pcHVsYcOnw6NvIGRpcmV0YSBkbyBET00gb3UgdGVzdGVzLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwibGFiZWxbbGliUmVxdWlyZWRdLCBzcGFuW2xpYlJlcXVpcmVkXSwgcFtsaWJSZXF1aXJlZF1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVxdWlyZWREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBfc2hvd01hcmtlcjogYm9vbGVhbiA9IHRydWU7IC8vIFZhbG9yIHBhZHLDo29cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIF9lbGVtZW50UmVmIC0gUmVmZXLDqm5jaWEgYW8gZWxlbWVudG8gRE9NIGFvIHF1YWwgYSBkaXJldGl2YSBlc3TDoSBhc3NvY2lhZGEuXHJcbiAgICogQHBhcmFtIF9yZW5kZXJlciAtIFNlcnZpw6dvIEFuZ3VsYXIgcGFyYSBtYW5pcHVsYcOnw6NvIHNlZ3VyYSBkbyBET00uXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICApIHsgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWZpbmUgc2UgbyBhc3RlcmlzY28gZGUgb2JyaWdhdG9yaWVkYWRlIGRldmUgc2VyIGV4aWJpZG8uXHJcbiAgICogU2UgbmVuaHVtIHZhbG9yIGZvciBlc3BlY2lmaWNhZG8sIG8gcGFkcsOjbyDDqSB0cnVlLlxyXG4gICAqL1xyXG4gIEBJbnB1dChcImxpYlJlcXVpcmVkXCIpXHJcbiAgc2V0IHNob3dNYXJrZXIodmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpIHsgdGhpcy5fc2hvd01hcmtlciA9IHZhbHVlICE9PSBmYWxzZSAmJiB2YWx1ZSAhPT0gJ2ZhbHNlJzsgLyogUXVhbHF1ZXIgdmFsb3IgZGlmZXJlbnRlIGRlIGZhbHNlIHNlcsOhIHRyYXRhZG8gY29tbyB0cnVlKi8gfVxyXG4gIGdldCBzaG93TWFya2VyKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc2hvd01hcmtlcjsgfVxyXG5cclxuICAvKiogSWRlbnRpZmljYWRvciDDum5pY28gcGFyYSBvIGVsZW1lbnRvIDxzcGFuPiBjcmlhZG8uICovXHJcbiAgQElucHV0KFwic2lzSURcIikgc3BhbklEOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zaG93TWFya2VyKSB7XHJcbiAgICAgIHRoaXMuYWRkTWFya2VyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlc1tcInNob3dNYXJrZXJcIl0/LmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlc1tcInNob3dNYXJrZXJcIl0/LnByZXZpb3VzVmFsdWUgJiYgY2hhbmdlc1tcInNob3dNYXJrZXJcIl0/LnByZXZpb3VzVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAodGhpcy5zaG93TWFya2VyKSB7IHRoaXMuYWRkTWFya2VyKCk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMucmVtb3ZlTWFya2VyKCk7IH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKiogQWRpY2lvbmEgbyBtYXJjYWRvciBkZSBhc3RlcmlzY28gYW8gZWxlbWVudG8gPGxhYmVsPi4gKi9cclxuICBwcml2YXRlIGFkZE1hcmtlcigpOiB2b2lkIHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnNwYW5JRCkpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgY29uc3Qgc3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHNwYW5FbGVtZW50LmNsYXNzTmFtZSA9IFwidGV4dC1kYW5nZXJcIjtcclxuICAgIHNwYW5FbGVtZW50LmlubmVySFRNTCA9IFwiICpcIjtcclxuICAgIHNwYW5FbGVtZW50LmlkID0gdGhpcy5zcGFuSUQ7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHNwYW5FbGVtZW50KTtcclxuICB9XHJcblxyXG4gIC8qKiBSZW1vdmUgbyBtYXJjYWRvciBkZSBhc3RlcmlzY28gZG8gZWxlbWVudG8gPGxhYmVsPi4gKi9cclxuICBwcml2YXRlIHJlbW92ZU1hcmtlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNwYW5JRCA9PT0gXCJcIikgeyByZXR1cm47IH1cclxuXHJcbiAgICBjb25zdCBzcGFuRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3BhbklEKTtcclxuICAgIGlmIChzcGFuRWxlbWVudCAhPT0gbnVsbCkgeyB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHNwYW5FbGVtZW50KTsgfVxyXG4gIH1cclxufVxyXG4iXX0=
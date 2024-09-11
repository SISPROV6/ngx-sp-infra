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
    static { this.ɵfac = function RequiredDirective_Factory(t) { return new (t || RequiredDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: RequiredDirective, selectors: [["label", "libRequired", ""], ["span", "libRequired", ""], ["p", "libRequired", ""]], inputs: { showMarker: [i0.ɵɵInputFlags.None, "libRequired", "showMarker"], spanID: [i0.ɵɵInputFlags.None, "sisID", "spanID"] }, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RequiredDirective, [{
        type: Directive,
        args: [{
                selector: "label[libRequired], span[libRequired], p[libRequired]"
            }]
    }], () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], { showMarker: [{
            type: Input,
            args: ["libRequired"]
        }], spanID: [{
            type: Input,
            args: ["sisID"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvZGlyZWN0aXZlcy9yZXF1aXJlZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDOztBQUUxRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStCRztBQUlILE1BQU0sT0FBTyxpQkFBaUI7SUFHNUI7OztPQUdHO0lBQ0gsWUFDVSxXQUF1QixFQUN2QixTQUFvQjtRQURwQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBUnRCLGdCQUFXLEdBQVksSUFBSSxDQUFDLENBQUMsZUFBZTtRQW1CcEQseURBQXlEO1FBQ3pDLFdBQU0sR0FBVyxFQUFFLENBQUM7SUFYaEMsQ0FBQztJQUVMOzs7T0FHRztJQUNILElBQ0ksVUFBVSxDQUFDLEtBQXVCLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO0lBQ2xLLElBQUksVUFBVSxLQUFjLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFNdEQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxZQUFZLEtBQUssT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLGFBQWEsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3ZJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUFDLENBQUM7aUJBQ3JDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQUMsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUdELDREQUE0RDtJQUNwRCxTQUFTO1FBQ2YsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQUMsT0FBTztRQUFDLENBQUM7UUFFckQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxXQUFXLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztRQUN0QyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUM3QixXQUFXLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELDBEQUEwRDtJQUNsRCxZQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUFDLE9BQU87UUFBQyxDQUFDO1FBRW5DLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELElBQUksV0FBVyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFBQyxDQUFDO0lBQ3hHLENBQUM7a0ZBdkRVLGlCQUFpQjtvRUFBakIsaUJBQWlCOztpRkFBakIsaUJBQWlCO2NBSDdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdURBQXVEO2FBQ2xFO21FQWtCSyxVQUFVO2tCQURiLEtBQUs7bUJBQUMsYUFBYTtZQUtKLE1BQU07a0JBQXJCLEtBQUs7bUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vKipcbiAqIERpcmV0aXZhIHF1ZSBhZGljaW9uYSB1bSBhc3RlcmlzY28gdmVybWVsaG8gKCopIGFvIGxhZG8gZGUgdW0gZWxlbWVudG8gPGxhYmVsPlxuICogcGFyYSBpbmRpY2FyIHF1ZSBvIGNhbXBvIMOpIG9icmlnYXTDs3Jpby5cbiAqIFxuICogIyMgVXNvXG4gKiBcbiAqIE5vIHNldSB0ZW1wbGF0ZSBIVE1MLCB2b2PDqiBwb2RlIHVzYXIgYSBkaXJldGl2YSBkZSBkdWFzIG1hbmVpcmFzOlxuICogXG4gKiAxLiBTZW0gZXNwZWNpZmljYXIgbyB2YWxvciwgb25kZSBvIG1hcmNhZG9yIHNlcsOhIGV4aWJpZG8gcG9yIHBhZHLDo286XG4gKiBcbiAqIGBgYGh0bWxcbiAqIDxsYWJlbCBsaWJSZXF1aXJlZCBmb3I9XCJpbnB1dFRlc3RlXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+UGVzc29hPC9sYWJlbD5cbiAqIGBgYFxuICogXG4gKiAyLiBFc3BlY2lmaWNhbmRvIGV4cGxpY2l0YW1lbnRlIG8gdmFsb3IgKHRydWUgb3UgZmFsc2UpOlxuICogXG4gKiBgYGBodG1sXG4gKiA8bGFiZWwgW2xpYlJlcXVpcmVkXT1cInRydWVcIiBmb3I9XCJpbnB1dFRlc3RlXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+Tm9tZTwvbGFiZWw+XG4gKiA8bGFiZWwgW2xpYlJlcXVpcmVkXT1cImZhbHNlXCIgZm9yPVwiaW5wdXRUZXN0ZVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkVtcHJlc2E8L2xhYmVsPlxuICogYGBgXG4gKiBcbiAqICMjIyBJbnB1dHNcbiAqIFxuICogLSBgbGliUmVxdWlyZWRgOiBib29sZWFuIHwgc3RyaW5nXG4gKiAgIC0gRGV0ZXJtaW5hIHNlIG8gYXN0ZXJpc2NvIGRlIG9icmlnYXRvcmllZGFkZSBkZXZlIHNlciBleGliaWRvLiBcbiAqICAgLSBBY2VpdGEgdmFsb3JlcyBib29sZWFub3MgKGB0cnVlYCBvdSBgZmFsc2VgKSBvdSBzdHJpbmdzIChgXCJ0cnVlXCJgIG91IGBcImZhbHNlXCJgKS5cbiAqICAgLSBQYWRyw6NvOiBgdHJ1ZWBcbiAqIFxuICogLSBgc2lzSURgOiBzdHJpbmdcbiAqICAgLSBJZGVudGlmaWNhZG9yIMO6bmljbyBwYXJhIG8gZWxlbWVudG8gYDxzcGFuPmAgY3JpYWRvLlxuICogICAtIMOadGlsIHBhcmEgbWFuaXB1bGHDp8OjbyBkaXJldGEgZG8gRE9NIG91IHRlc3Rlcy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcImxhYmVsW2xpYlJlcXVpcmVkXSwgc3BhbltsaWJSZXF1aXJlZF0sIHBbbGliUmVxdWlyZWRdXCJcbn0pXG5leHBvcnQgY2xhc3MgUmVxdWlyZWREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3Nob3dNYXJrZXI6IGJvb2xlYW4gPSB0cnVlOyAvLyBWYWxvciBwYWRyw6NvXG5cbiAgLyoqXG4gICAqIEBwYXJhbSBfZWxlbWVudFJlZiAtIFJlZmVyw6puY2lhIGFvIGVsZW1lbnRvIERPTSBhbyBxdWFsIGEgZGlyZXRpdmEgZXN0w6EgYXNzb2NpYWRhLlxuICAgKiBAcGFyYW0gX3JlbmRlcmVyIC0gU2VydmnDp28gQW5ndWxhciBwYXJhIG1hbmlwdWxhw6fDo28gc2VndXJhIGRvIERPTS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7IH1cblxuICAvKipcbiAgICogRGVmaW5lIHNlIG8gYXN0ZXJpc2NvIGRlIG9icmlnYXRvcmllZGFkZSBkZXZlIHNlciBleGliaWRvLlxuICAgKiBTZSBuZW5odW0gdmFsb3IgZm9yIGVzcGVjaWZpY2FkbywgbyBwYWRyw6NvIMOpIHRydWUuXG4gICAqL1xuICBASW5wdXQoXCJsaWJSZXF1aXJlZFwiKVxuICBzZXQgc2hvd01hcmtlcih2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgeyB0aGlzLl9zaG93TWFya2VyID0gdmFsdWUgIT09IGZhbHNlICYmIHZhbHVlICE9PSAnZmFsc2UnOyAvKiBRdWFscXVlciB2YWxvciBkaWZlcmVudGUgZGUgZmFsc2Ugc2Vyw6EgdHJhdGFkbyBjb21vIHRydWUqLyB9XG4gIGdldCBzaG93TWFya2VyKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc2hvd01hcmtlcjsgfVxuXG4gIC8qKiBJZGVudGlmaWNhZG9yIMO6bmljbyBwYXJhIG8gZWxlbWVudG8gPHNwYW4+IGNyaWFkby4gKi9cbiAgQElucHV0KFwic2lzSURcIikgc3BhbklEOiBzdHJpbmcgPSBcIlwiO1xuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvd01hcmtlcikge1xuICAgICAgdGhpcy5hZGRNYXJrZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbXCJzaG93TWFya2VyXCJdPy5jdXJyZW50VmFsdWUgIT09IGNoYW5nZXNbXCJzaG93TWFya2VyXCJdPy5wcmV2aW91c1ZhbHVlICYmIGNoYW5nZXNbXCJzaG93TWFya2VyXCJdPy5wcmV2aW91c1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLnNob3dNYXJrZXIpIHsgdGhpcy5hZGRNYXJrZXIoKTsgfVxuICAgICAgZWxzZSB7IHRoaXMucmVtb3ZlTWFya2VyKCk7IH1cbiAgICB9XG4gIH1cblxuXG4gIC8qKiBBZGljaW9uYSBvIG1hcmNhZG9yIGRlIGFzdGVyaXNjbyBhbyBlbGVtZW50byA8bGFiZWw+LiAqL1xuICBwcml2YXRlIGFkZE1hcmtlcigpOiB2b2lkIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zcGFuSUQpKSB7IHJldHVybjsgfVxuXG4gICAgY29uc3Qgc3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuRWxlbWVudC5jbGFzc05hbWUgPSBcInRleHQtZGFuZ2VyXCI7XG4gICAgc3BhbkVsZW1lbnQuaW5uZXJIVE1MID0gXCIgKlwiO1xuICAgIHNwYW5FbGVtZW50LmlkID0gdGhpcy5zcGFuSUQ7XG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzcGFuRWxlbWVudCk7XG4gIH1cblxuICAvKiogUmVtb3ZlIG8gbWFyY2Fkb3IgZGUgYXN0ZXJpc2NvIGRvIGVsZW1lbnRvIDxsYWJlbD4uICovXG4gIHByaXZhdGUgcmVtb3ZlTWFya2VyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNwYW5JRCA9PT0gXCJcIikgeyByZXR1cm47IH1cblxuICAgIGNvbnN0IHNwYW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zcGFuSUQpO1xuICAgIGlmIChzcGFuRWxlbWVudCAhPT0gbnVsbCkgeyB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHNwYW5FbGVtZW50KTsgfVxuICB9XG59XG4iXX0=
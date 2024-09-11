import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class LoadingBtnDirective {
    get isLoading() { return this._isLoading; }
    set isLoading(value) {
        this._isLoading = value !== false && value !== 'false';
        if (this._isLoading)
            this.setLoadingState();
        else
            this.setDefaultState();
    }
    // #endregion PUBLIC
    // #endregion ==========> PROPERTIES <==========
    // #region ==========> INITIALIZATION <==========
    /**
     * @param _elementRef - Referência ao elemento DOM ao qual a diretiva está associada.
     * @param _renderer - Serviço Angular para manipulação segura do DOM. */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        // #region ==========> PROPERTIES <==========
        // #region PRIVATE
        this._isLoading = false;
        // #endregion PRIVATE
        // #region PUBLIC
        /** Texto ao trocar o botão para carregamento
         * @example "Salvando..." */
        this.loadingText = "";
        /** Tipo de spinner a ser exibido no botão
         * @default "border" */
        this.loadingType = "border";
    }
    ngOnInit() { }
    ngAfterViewInit() {
        // Somente captura o conteúdo original se ainda não foi capturado
        if (!this._originalContent) {
            this._originalContent = this._elementRef.nativeElement.innerHTML;
        }
    }
    // #endregion ==========> INITIALIZATION <==========
    // #region ==========> UTILS <==========
    setLoadingState() {
        // Captura o conteúdo original se não foi capturado
        if (!this._originalContent)
            this._originalContent = this._elementRef.nativeElement.innerHTML;
        // Desabilita o botão e substitui o conteúdo
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', true);
        this._renderer.setProperty(this._elementRef.nativeElement, 'innerHTML', `<span class="spinner-${this.loadingType} spinner-${this.loadingType}-sm" style="width: 1rem; height: 1rem;"></span> ${this.loadingText}`);
    }
    setDefaultState() {
        // Restaura o conteúdo original e habilita o botão
        if (this._originalContent) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', false);
            this._renderer.setProperty(this._elementRef.nativeElement, 'innerHTML', this._originalContent);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LoadingBtnDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: LoadingBtnDirective, selector: "button[libLoading], a[libLoading]", inputs: { loadingText: "loadingText", loadingType: "loadingType", isLoading: ["libLoading", "isLoading"] }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LoadingBtnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[libLoading], a[libLoading]'
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { loadingText: [{
                type: Input
            }], loadingType: [{
                type: Input
            }], isLoading: [{
                type: Input,
                args: ["libLoading"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1idG4uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvZGlyZWN0aXZlcy9sb2FkaW5nLWJ0bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFLL0YsTUFBTSxPQUFPLG1CQUFtQjtJQW1COUIsSUFDVyxTQUFTLEtBQWMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMzRCxJQUFXLFNBQVMsQ0FBQyxLQUF1QjtRQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxLQUFLLE9BQU8sQ0FBQztRQUV2RCxJQUFJLElBQUksQ0FBQyxVQUFVO1lBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDOztZQUN2QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNELG9CQUFvQjtJQUVwQixnREFBZ0Q7SUFHaEQsaURBQWlEO0lBQ2pEOzs0RUFFd0U7SUFDeEUsWUFDVSxXQUF1QixFQUN2QixTQUFvQjtRQURwQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBcEM5Qiw2Q0FBNkM7UUFFN0Msa0JBQWtCO1FBQ1YsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUVwQyxxQkFBcUI7UUFFckIsaUJBQWlCO1FBRWpCO29DQUM0QjtRQUNaLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpDOytCQUN1QjtRQUNQLGdCQUFXLEdBQXNCLFFBQVEsQ0FBQztJQXNCdEQsQ0FBQztJQUVMLFFBQVEsS0FBSyxDQUFDO0lBRWQsZUFBZTtRQUNiLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUNuRSxDQUFDO0lBQ0gsQ0FBQztJQUNELG9EQUFvRDtJQUdwRCx3Q0FBd0M7SUFDaEMsZUFBZTtRQUNyQixtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFBRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBRTdGLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUM5QixXQUFXLEVBQ1gsd0JBQXdCLElBQUksQ0FBQyxXQUFXLFlBQVksSUFBSSxDQUFDLFdBQVcsbURBQW1ELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FDMUksQ0FBQztJQUNKLENBQUM7SUFFTyxlQUFlO1FBQ3JCLGtEQUFrRDtRQUNsRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakcsQ0FBQztJQUNILENBQUM7K0dBeEVVLG1CQUFtQjttR0FBbkIsbUJBQW1COzs0RkFBbkIsbUJBQW1CO2tCQUgvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQ0FBbUM7aUJBQzlDO3VHQWNpQixXQUFXO3NCQUExQixLQUFLO2dCQUlVLFdBQVc7c0JBQTFCLEtBQUs7Z0JBR0ssU0FBUztzQkFEbkIsS0FBSzt1QkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnYnV0dG9uW2xpYkxvYWRpbmddLCBhW2xpYkxvYWRpbmddJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ0J0bkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgXHJcbiAgLy8gI3JlZ2lvbiA9PT09PT09PT09PiBQUk9QRVJUSUVTIDw9PT09PT09PT09XHJcblxyXG4gIC8vICNyZWdpb24gUFJJVkFURVxyXG4gIHByaXZhdGUgX2lzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX29yaWdpbmFsQ29udGVudDogYW55O1xyXG4gIC8vICNlbmRyZWdpb24gUFJJVkFURVxyXG5cclxuICAvLyAjcmVnaW9uIFBVQkxJQ1xyXG5cclxuICAvKiogVGV4dG8gYW8gdHJvY2FyIG8gYm90w6NvIHBhcmEgY2FycmVnYW1lbnRvXHJcbiAgICogQGV4YW1wbGUgXCJTYWx2YW5kby4uLlwiICovXHJcbiAgQElucHV0KCkgcHVibGljIGxvYWRpbmdUZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAvKiogVGlwbyBkZSBzcGlubmVyIGEgc2VyIGV4aWJpZG8gbm8gYm90w6NvXHJcbiAgICogQGRlZmF1bHQgXCJib3JkZXJcIiAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBsb2FkaW5nVHlwZTogXCJib3JkZXJcIiB8IFwiZ3Jvd1wiID0gXCJib3JkZXJcIjtcclxuXHJcbiAgQElucHV0KFwibGliTG9hZGluZ1wiKVxyXG4gIHB1YmxpYyBnZXQgaXNMb2FkaW5nKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5faXNMb2FkaW5nOyB9XHJcbiAgcHVibGljIHNldCBpc0xvYWRpbmcodmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2lzTG9hZGluZyA9IHZhbHVlICE9PSBmYWxzZSAmJiB2YWx1ZSAhPT0gJ2ZhbHNlJztcclxuXHJcbiAgICBpZiAodGhpcy5faXNMb2FkaW5nKSB0aGlzLnNldExvYWRpbmdTdGF0ZSgpO1xyXG4gICAgZWxzZSB0aGlzLnNldERlZmF1bHRTdGF0ZSgpO1xyXG4gIH1cclxuICAvLyAjZW5kcmVnaW9uIFBVQkxJQ1xyXG5cclxuICAvLyAjZW5kcmVnaW9uID09PT09PT09PT0+IFBST1BFUlRJRVMgPD09PT09PT09PT1cclxuXHJcblxyXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gSU5JVElBTElaQVRJT04gPD09PT09PT09PT1cclxuICAvKipcclxuICAgKiBAcGFyYW0gX2VsZW1lbnRSZWYgLSBSZWZlcsOqbmNpYSBhbyBlbGVtZW50byBET00gYW8gcXVhbCBhIGRpcmV0aXZhIGVzdMOhIGFzc29jaWFkYS5cclxuICAgKiBAcGFyYW0gX3JlbmRlcmVyIC0gU2VydmnDp28gQW5ndWxhciBwYXJhIG1hbmlwdWxhw6fDo28gc2VndXJhIGRvIERPTS4gKi9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vIFNvbWVudGUgY2FwdHVyYSBvIGNvbnRlw7pkbyBvcmlnaW5hbCBzZSBhaW5kYSBuw6NvIGZvaSBjYXB0dXJhZG9cclxuICAgIGlmICghdGhpcy5fb3JpZ2luYWxDb250ZW50KSB7XHJcbiAgICAgIHRoaXMuX29yaWdpbmFsQ29udGVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gSU5JVElBTElaQVRJT04gPD09PT09PT09PT1cclxuXHJcblxyXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gVVRJTFMgPD09PT09PT09PT1cclxuICBwcml2YXRlIHNldExvYWRpbmdTdGF0ZSgpIHtcclxuICAgIC8vIENhcHR1cmEgbyBjb250ZcO6ZG8gb3JpZ2luYWwgc2UgbsOjbyBmb2kgY2FwdHVyYWRvXHJcbiAgICBpZiAoIXRoaXMuX29yaWdpbmFsQ29udGVudCkgdGhpcy5fb3JpZ2luYWxDb250ZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcclxuXHJcbiAgICAvLyBEZXNhYmlsaXRhIG8gYm90w6NvIGUgc3Vic3RpdHVpIG8gY29udGXDumRvXHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkoXHJcbiAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ2lubmVySFRNTCcsXHJcbiAgICAgIGA8c3BhbiBjbGFzcz1cInNwaW5uZXItJHt0aGlzLmxvYWRpbmdUeXBlfSBzcGlubmVyLSR7dGhpcy5sb2FkaW5nVHlwZX0tc21cIiBzdHlsZT1cIndpZHRoOiAxcmVtOyBoZWlnaHQ6IDFyZW07XCI+PC9zcGFuPiAke3RoaXMubG9hZGluZ1RleHR9YFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RGVmYXVsdFN0YXRlKCkge1xyXG4gICAgLy8gUmVzdGF1cmEgbyBjb250ZcO6ZG8gb3JpZ2luYWwgZSBoYWJpbGl0YSBvIGJvdMOjb1xyXG4gICAgaWYgKHRoaXMuX29yaWdpbmFsQ29udGVudCkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaW5uZXJIVE1MJywgdGhpcy5fb3JpZ2luYWxDb250ZW50KTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PiBVVElMUyA8PT09PT09PT09PVxyXG5cclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1idG4uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvZGlyZWN0aXZlcy9sb2FkaW5nLWJ0bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFLL0YsTUFBTSxPQUFPLG1CQUFtQjtJQW1COUIsSUFDVyxTQUFTLEtBQWMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMzRCxJQUFXLFNBQVMsQ0FBQyxLQUF1QjtRQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxLQUFLLE9BQU8sQ0FBQztRQUV2RCxJQUFJLElBQUksQ0FBQyxVQUFVO1lBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDOztZQUN2QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNELG9CQUFvQjtJQUVwQixnREFBZ0Q7SUFHaEQsaURBQWlEO0lBQ2pEOzs0RUFFd0U7SUFDeEUsWUFDVSxXQUF1QixFQUN2QixTQUFvQjtRQURwQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBcEM5Qiw2Q0FBNkM7UUFFN0Msa0JBQWtCO1FBQ1YsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUVwQyxxQkFBcUI7UUFFckIsaUJBQWlCO1FBRWpCO29DQUM0QjtRQUNaLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpDOytCQUN1QjtRQUNQLGdCQUFXLEdBQXNCLFFBQVEsQ0FBQztJQXNCdEQsQ0FBQztJQUVMLFFBQVEsS0FBSyxDQUFDO0lBRWQsZUFBZTtRQUNiLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUNuRSxDQUFDO0lBQ0gsQ0FBQztJQUNELG9EQUFvRDtJQUdwRCx3Q0FBd0M7SUFDaEMsZUFBZTtRQUNyQixtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFBRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBRTdGLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUM5QixXQUFXLEVBQ1gsd0JBQXdCLElBQUksQ0FBQyxXQUFXLFlBQVksSUFBSSxDQUFDLFdBQVcsbURBQW1ELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FDMUksQ0FBQztJQUNKLENBQUM7SUFFTyxlQUFlO1FBQ3JCLGtEQUFrRDtRQUNsRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakcsQ0FBQztJQUNILENBQUM7K0dBeEVVLG1CQUFtQjttR0FBbkIsbUJBQW1COzs0RkFBbkIsbUJBQW1CO2tCQUgvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQ0FBbUM7aUJBQzlDO3VHQWNpQixXQUFXO3NCQUExQixLQUFLO2dCQUlVLFdBQVc7c0JBQTFCLEtBQUs7Z0JBR0ssU0FBUztzQkFEbkIsS0FBSzt1QkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uW2xpYkxvYWRpbmddLCBhW2xpYkxvYWRpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQnRuRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gUFJPUEVSVElFUyA8PT09PT09PT09PVxuXG4gIC8vICNyZWdpb24gUFJJVkFURVxuICBwcml2YXRlIF9pc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfb3JpZ2luYWxDb250ZW50OiBhbnk7XG4gIC8vICNlbmRyZWdpb24gUFJJVkFURVxuXG4gIC8vICNyZWdpb24gUFVCTElDXG5cbiAgLyoqIFRleHRvIGFvIHRyb2NhciBvIGJvdMOjbyBwYXJhIGNhcnJlZ2FtZW50b1xuICAgKiBAZXhhbXBsZSBcIlNhbHZhbmRvLi4uXCIgKi9cbiAgQElucHV0KCkgcHVibGljIGxvYWRpbmdUZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gIC8qKiBUaXBvIGRlIHNwaW5uZXIgYSBzZXIgZXhpYmlkbyBubyBib3TDo29cbiAgICogQGRlZmF1bHQgXCJib3JkZXJcIiAqL1xuICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZ1R5cGU6IFwiYm9yZGVyXCIgfCBcImdyb3dcIiA9IFwiYm9yZGVyXCI7XG5cbiAgQElucHV0KFwibGliTG9hZGluZ1wiKVxuICBwdWJsaWMgZ2V0IGlzTG9hZGluZygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2lzTG9hZGluZzsgfVxuICBwdWJsaWMgc2V0IGlzTG9hZGluZyh2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykge1xuICAgIHRoaXMuX2lzTG9hZGluZyA9IHZhbHVlICE9PSBmYWxzZSAmJiB2YWx1ZSAhPT0gJ2ZhbHNlJztcblxuICAgIGlmICh0aGlzLl9pc0xvYWRpbmcpIHRoaXMuc2V0TG9hZGluZ1N0YXRlKCk7XG4gICAgZWxzZSB0aGlzLnNldERlZmF1bHRTdGF0ZSgpO1xuICB9XG4gIC8vICNlbmRyZWdpb24gUFVCTElDXG5cbiAgLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PiBQUk9QRVJUSUVTIDw9PT09PT09PT09XG5cblxuICAvLyAjcmVnaW9uID09PT09PT09PT0+IElOSVRJQUxJWkFUSU9OIDw9PT09PT09PT09XG4gIC8qKlxuICAgKiBAcGFyYW0gX2VsZW1lbnRSZWYgLSBSZWZlcsOqbmNpYSBhbyBlbGVtZW50byBET00gYW8gcXVhbCBhIGRpcmV0aXZhIGVzdMOhIGFzc29jaWFkYS5cbiAgICogQHBhcmFtIF9yZW5kZXJlciAtIFNlcnZpw6dvIEFuZ3VsYXIgcGFyYSBtYW5pcHVsYcOnw6NvIHNlZ3VyYSBkbyBET00uICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBTb21lbnRlIGNhcHR1cmEgbyBjb250ZcO6ZG8gb3JpZ2luYWwgc2UgYWluZGEgbsOjbyBmb2kgY2FwdHVyYWRvXG4gICAgaWYgKCF0aGlzLl9vcmlnaW5hbENvbnRlbnQpIHtcbiAgICAgIHRoaXMuX29yaWdpbmFsQ29udGVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XG4gICAgfVxuICB9XG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gSU5JVElBTElaQVRJT04gPD09PT09PT09PT1cblxuXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gVVRJTFMgPD09PT09PT09PT1cbiAgcHJpdmF0ZSBzZXRMb2FkaW5nU3RhdGUoKSB7XG4gICAgLy8gQ2FwdHVyYSBvIGNvbnRlw7pkbyBvcmlnaW5hbCBzZSBuw6NvIGZvaSBjYXB0dXJhZG9cbiAgICBpZiAoIXRoaXMuX29yaWdpbmFsQ29udGVudCkgdGhpcy5fb3JpZ2luYWxDb250ZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcblxuICAgIC8vIERlc2FiaWxpdGEgbyBib3TDo28gZSBzdWJzdGl0dWkgbyBjb250ZcO6ZG9cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIHRydWUpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KFxuICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2lubmVySFRNTCcsXG4gICAgICBgPHNwYW4gY2xhc3M9XCJzcGlubmVyLSR7dGhpcy5sb2FkaW5nVHlwZX0gc3Bpbm5lci0ke3RoaXMubG9hZGluZ1R5cGV9LXNtXCIgc3R5bGU9XCJ3aWR0aDogMXJlbTsgaGVpZ2h0OiAxcmVtO1wiPjwvc3Bhbj4gJHt0aGlzLmxvYWRpbmdUZXh0fWBcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXREZWZhdWx0U3RhdGUoKSB7XG4gICAgLy8gUmVzdGF1cmEgbyBjb250ZcO6ZG8gb3JpZ2luYWwgZSBoYWJpbGl0YSBvIGJvdMOjb1xuICAgIGlmICh0aGlzLl9vcmlnaW5hbENvbnRlbnQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaW5uZXJIVE1MJywgdGhpcy5fb3JpZ2luYWxDb250ZW50KTtcbiAgICB9XG4gIH1cbiAgLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PiBVVElMUyA8PT09PT09PT09PVxuXG59XG4iXX0=
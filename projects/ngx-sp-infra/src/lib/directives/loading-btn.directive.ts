import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[libLoading], a[libLoading]'
})
export class LoadingBtnDirective implements OnInit, AfterViewInit {
  
  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private _isLoading: boolean = false;
  private _originalContent: any;
  // #endregion PRIVATE

  // #region PUBLIC

  /** Texto ao trocar o botão para carregamento
   * @example "Salvando..." */
  @Input() public loadingText: string = "";

  /** Tipo de spinner a ser exibido no botão
   * @default "border" */
  @Input() public loadingType: "border" | "grow" = "border";

  @Input("libLoading")
  public get isLoading(): boolean { return this._isLoading; }
  public set isLoading(value: boolean | string) {
    this._isLoading = value !== false && value !== 'false';

    if (this._isLoading) this.setLoadingState();
    else this.setDefaultState();
  }
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  /**
   * @param _elementRef - Referência ao elemento DOM ao qual a diretiva está associada.
   * @param _renderer - Serviço Angular para manipulação segura do DOM. */
  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    // Somente captura o conteúdo original se ainda não foi capturado
    if (!this._originalContent) {
      this._originalContent = this._elementRef.nativeElement.innerHTML;
    }
  }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========
  private setLoadingState() {
    // Captura o conteúdo original se não foi capturado
    if (!this._originalContent) this._originalContent = this._elementRef.nativeElement.innerHTML;

    // Desabilita o botão e substitui o conteúdo
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', true);
    this._renderer.setProperty(
      this._elementRef.nativeElement,
      'innerHTML',
      `<span class="spinner-${this.loadingType} spinner-${this.loadingType}-sm" style="width: 1rem; height: 1rem;"></span> ${this.loadingText}`
    );
  }

  private setDefaultState() {
    // Restaura o conteúdo original e habilita o botão
    if (this._originalContent) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', false);
      this._renderer.setProperty(this._elementRef.nativeElement, 'innerHTML', this._originalContent);
    }
  }
  // #endregion ==========> UTILS <==========

}

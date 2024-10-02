import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from "@angular/core";

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
@Directive({
  selector: "label[libRequired], span[libRequired], p[libRequired]"
})
export class RequiredDirective implements OnInit, OnChanges {
  private _showMarker: boolean = true; // Valor padrão

  /**
   * @param _elementRef - Referência ao elemento DOM ao qual a diretiva está associada.
   * @param _renderer - Serviço Angular para manipulação segura do DOM.
   */
  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
  ) { }

  /**
   * Define se o asterisco de obrigatoriedade deve ser exibido.
   * Se nenhum valor for especificado, o padrão é true.
   */
  @Input("libRequired")
  set showMarker(value: boolean | string) { this._showMarker = value !== false && value !== 'false'; /* Qualquer valor diferente de false será tratado como true*/ }
  get showMarker(): boolean { return this._showMarker; }

  /** Identificador único para o elemento <span> criado. */
  @Input("requiredID") spanID: string = "";


  ngOnInit(): void {
    if (this.showMarker) {
      this.addMarker();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["showMarker"]?.currentValue !== changes["showMarker"]?.previousValue && changes["showMarker"]?.previousValue !== undefined) {
      if (this.showMarker) { this.addMarker(); }
      else { this.removeMarker(); }
    }
  }


  /** Adiciona o marcador de asterisco ao elemento <label>. */
  private addMarker(): void {
    if (document.getElementById(this.spanID)) { return; }

    const spanElement = document.createElement("span");
    spanElement.className = "text-danger";
    spanElement.innerHTML = " *";
    spanElement.id = this.spanID;
    this._renderer.appendChild(this._elementRef.nativeElement, spanElement);
  }

  /** Remove o marcador de asterisco do elemento <label>. */
  private removeMarker(): void {
    if (this.spanID === "") { return; }

    const spanElement = document.getElementById(this.spanID);
    if (spanElement !== null) { this._renderer.removeChild(this._elementRef.nativeElement, spanElement); }
  }
}

import { ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from "@angular/core";
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
export declare class RequiredDirective implements OnInit, OnChanges {
    private _elementRef;
    private _renderer;
    private _showMarker;
    /**
     * @param _elementRef - Referência ao elemento DOM ao qual a diretiva está associada.
     * @param _renderer - Serviço Angular para manipulação segura do DOM.
     */
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    /**
     * Define se o asterisco de obrigatoriedade deve ser exibido.
     * Se nenhum valor for especificado, o padrão é true.
     */
    set showMarker(value: boolean | string);
    get showMarker(): boolean;
    /** Identificador único para o elemento <span> criado. */
    spanID: string;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** Adiciona o marcador de asterisco ao elemento <label>. */
    private addMarker;
    /** Remove o marcador de asterisco do elemento <label>. */
    private removeMarker;
    static ɵfac: i0.ɵɵFactoryDeclaration<RequiredDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RequiredDirective, "label[libRequired], span[libRequired], p[libRequired]", never, { "showMarker": { "alias": "libRequired"; "required": false; }; "spanID": { "alias": "sisID"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=required.directive.d.ts.map
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-spinner',
  template: `
    <div class="spinner-{{spinnerType}} {{spinnerTheme ? 'text-'+spinnerTheme : ''}} {{size}}" role="status">
      <span class="visually-hidden">{{ helperText }}</span>
    </div>
  `,
  styles: ``
})
export class LibSpinnerComponent implements OnInit, OnChanges {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PROTECTED
  protected size?: string;
  // #endregion PROTECTED

  // #region PUBLIC

  /** Tipo do spinner
   * @alias "type"
   * @default "border" */
  @Input('type') public spinnerType: "border" | "grow" = "border";

  /** Tema de cor do spinner
   * @alias "theme" */
  @Input('theme') public spinnerTheme: "primary" | "secondary" | "success" | "danger" | "warning";

  /** Tamanho do spinner (Padrão ou pequeno)
   * @alias "size"
   * @default "default" */
  @Input('size') public spinnerSize: "default" | "small" = "default";

  /** Texto de ajuda, será exibido no hover em cima do spinner
   * @alias "text"
   * @default "Carregando informações..." */
  @Input('text') public helperText: string = "Carregando informações...";
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["spinnerSize"]) {
      if (this.spinnerSize === "small") this.size = `spinner-${this.spinnerType}-sm`;
      else if (this.spinnerSize === "default") delete this.size;
    }
  }
  // #endregion ==========> INITIALIZATION <==========

}

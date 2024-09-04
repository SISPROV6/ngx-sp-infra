import { Component } from '@angular/core';

@Component({
  selector: 'lib-spinner',
  standalone: true,
  imports: [],
  template: `
    <p>
      spinner works!
    </p>
  `,
  styles: ``
})
export class SpinnerComponent {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PROTECTED
  // [...]
  // #endregion PROTECTED

  // #region PUBLIC
  
  public spinnerType: "border" | "grow" = "border";
  public spinnerTheme: "primary" | "secondary" | "success" | "danger" | "warning" = "primary";
  public spinnerSize: "default" | "small" | string = "default";

  public helperText: string = "Carregando informações...";

  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor() { }

  ngOnInit() { }
  // #endregion ==========> INITIALIZATION <==========

}

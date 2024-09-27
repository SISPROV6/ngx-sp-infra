import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-button',
  template: `
    <img class="button-spinner" src="assets/imgs/spinner.gif" *ngIf="isLoading">
  `,
  styles: `
    .button-spinner{ width: 24px; }
  `
})
export class LoadingButtonComponent {
  @Input() isLoading: boolean;

  constructor() { }

}

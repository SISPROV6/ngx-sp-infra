import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[copy-clipboard]'
})
export class CopyClipboardDirective {

  @Input("copy-clipboard")
  public payload: string = "";

  @HostListener("click", ["$event"])
  public onClick(event: MouseEvent): void {

    event.preventDefault();
    if (!this.payload)
      return;

    navigator.clipboard.writeText(this.payload.toString());
  }

}

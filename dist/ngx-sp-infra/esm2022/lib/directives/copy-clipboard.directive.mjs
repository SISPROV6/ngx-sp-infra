import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class CopyClipboardDirective {
    constructor() {
        this.payload = "";
    }
    onClick(event) {
        event.preventDefault();
        if (!this.payload)
            return;
        navigator.clipboard.writeText(this.payload.toString());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CopyClipboardDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: CopyClipboardDirective, selector: "[copy-clipboard]", inputs: { payload: ["copy-clipboard", "payload"] }, host: { listeners: { "click": "onClick($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CopyClipboardDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[copy-clipboard]'
                }]
        }], propDecorators: { payload: [{
                type: Input,
                args: ["copy-clipboard"]
            }], onClick: [{
                type: HostListener,
                args: ["click", ["$event"]]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1jbGlwYm9hcmQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvZGlyZWN0aXZlcy9jb3B5LWNsaXBib2FyZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFLckYsTUFBTSxPQUFPLHNCQUFzQjtJQUhuQztRQU1TLFlBQU8sR0FBVyxFQUFFLENBQUM7S0FZN0I7SUFUUSxPQUFPLENBQUMsS0FBaUI7UUFFOUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNmLE9BQU87UUFFVCxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzsrR0FiVSxzQkFBc0I7bUdBQXRCLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjtrQkFIbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs4QkFJUSxPQUFPO3NCQURiLEtBQUs7dUJBQUMsZ0JBQWdCO2dCQUloQixPQUFPO3NCQURiLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbY29weS1jbGlwYm9hcmRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29weUNsaXBib2FyZERpcmVjdGl2ZSB7XHJcblxyXG4gIEBJbnB1dChcImNvcHktY2xpcGJvYXJkXCIpXHJcbiAgcHVibGljIHBheWxvYWQ6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXHJcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCF0aGlzLnBheWxvYWQpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0aGlzLnBheWxvYWQudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
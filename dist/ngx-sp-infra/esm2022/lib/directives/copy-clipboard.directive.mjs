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
    static { this.ɵfac = function CopyClipboardDirective_Factory(t) { return new (t || CopyClipboardDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CopyClipboardDirective, selectors: [["", "copy-clipboard", ""]], hostBindings: function CopyClipboardDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function CopyClipboardDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } }, inputs: { payload: [i0.ɵɵInputFlags.None, "copy-clipboard", "payload"] } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CopyClipboardDirective, [{
        type: Directive,
        args: [{
                selector: '[copy-clipboard]'
            }]
    }], null, { payload: [{
            type: Input,
            args: ["copy-clipboard"]
        }], onClick: [{
            type: HostListener,
            args: ["click", ["$event"]]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1jbGlwYm9hcmQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvZGlyZWN0aXZlcy9jb3B5LWNsaXBib2FyZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFLckYsTUFBTSxPQUFPLHNCQUFzQjtJQUhuQztRQU1TLFlBQU8sR0FBVyxFQUFFLENBQUM7S0FZN0I7SUFUUSxPQUFPLENBQUMsS0FBaUI7UUFFOUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNmLE9BQU87UUFFVCxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzt1RkFiVSxzQkFBc0I7b0VBQXRCLHNCQUFzQjtZQUF0QixpR0FBQSxtQkFBZSxJQUFPOzs7aUZBQXRCLHNCQUFzQjtjQUhsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3QjtnQkFJUSxPQUFPO2tCQURiLEtBQUs7bUJBQUMsZ0JBQWdCO1lBSWhCLE9BQU87a0JBRGIsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjb3B5LWNsaXBib2FyZF0nXG59KVxuZXhwb3J0IGNsYXNzIENvcHlDbGlwYm9hcmREaXJlY3RpdmUge1xuXG4gIEBJbnB1dChcImNvcHktY2xpcGJvYXJkXCIpXG4gIHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcgPSBcIlwiO1xuXG4gIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5wYXlsb2FkKVxuICAgICAgcmV0dXJuO1xuXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGhpcy5wYXlsb2FkLnRvU3RyaW5nKCkpO1xuICB9XG5cbn1cbiJdfQ==
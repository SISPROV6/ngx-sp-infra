import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class DynamicTableComponent {
    constructor() { }
    ngOnInit() { }
    ngOnChanges(changes) { }
    ngAfterViewInit() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: DynamicTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.11", type: DynamicTableComponent, selector: "lib-dynamic-table", usesOnChanges: true, ngImport: i0, template: "<p>dynamic-table works!</p>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: DynamicTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-dynamic-table', template: "<p>dynamic-table works!</p>\r\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2R5bmFtaWMtdGFibGUvZHluYW1pYy10YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2R5bmFtaWMtdGFibGUvZHluYW1pYy10YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBb0MsTUFBTSxlQUFlLENBQUM7O0FBTzNGLE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsZ0JBRUcsQ0FBQztJQUVKLFFBQVEsS0FBVSxDQUFDO0lBRW5CLFdBQVcsQ0FBQyxPQUFzQixJQUFTLENBQUM7SUFFNUMsZUFBZSxLQUFVLENBQUM7K0dBVGYscUJBQXFCO21HQUFyQixxQkFBcUIsOEVDUGxDLGlDQUNBOzs0RkRNYSxxQkFBcUI7a0JBTGpDLFNBQVM7K0JBQ0UsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZHluYW1pYy10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2R5bmFtaWMtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9keW5hbWljLXRhYmxlLmNvbXBvbmVudC5zY3NzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1RhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG5cclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge31cclxuXHJcblxyXG4gIC8vICNyZWdpb24gPT09PT09PT09PT4gUFJPUEVSVElFUyA8PT09PT09PT09PVxyXG5cclxuICAvLyAjcmVnaW9uIFBSSVZBVEVcclxuICAvLyBbLi4uXVxyXG4gIC8vICNlbmRyZWdpb24gUFJJVkFURVxyXG5cclxuICAvLyAjcmVnaW9uIFBVQkxJQ1xyXG4gIC8vIFsuLi5dXHJcbiAgLy8gI2VuZHJlZ2lvbiBQVUJMSUNcclxuXHJcbiAgLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PiBQUk9QRVJUSUVTIDw9PT09PT09PT09XHJcblxyXG5cclxuICAvLyAjcmVnaW9uID09PT09PT09PT0+IEZPUk0gQlVJTERFUiA8PT09PT09PT09PVxyXG5cclxuICAvLyAjcmVnaW9uIEZPUk0gREFUQVxyXG4gIC8vIFsuLi5dXHJcbiAgLy8gI2VuZHJlZ2lvbiBGT1JNIERBVEFcclxuXHJcbiAgLy8gI3JlZ2lvbiBGT1JNIFZBTElEQVRPUlNcclxuICAvLyBbLi4uXVxyXG4gIC8vICNlbmRyZWdpb24gRk9STSBWQUxJREFUT1JTXHJcblxyXG4gIC8vICNlbmRyZWdpb24gPT09PT09PT09PT4gRk9STSBCVUlMREVSIDw9PT09PT09PT09XHJcblxyXG5cclxuICAvLyAjcmVnaW9uID09PT09PT09PT0+IFVUSUxJVElFUyA8PT09PT09PT09PVxyXG4gIC8vIFsuLi5dXHJcbiAgLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PiBVVElMSVRJRVMgPD09PT09PT09PT1cclxuXHJcbn1cclxuIiwiPHA+ZHluYW1pYy10YWJsZSB3b3JrcyE8L3A+XHJcbiJdfQ==
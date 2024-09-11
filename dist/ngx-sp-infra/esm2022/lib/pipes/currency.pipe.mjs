import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class CurrencyPipe {
    transform(value) {
        return `R$ ${value.toFixed(2).toString().replace('.', ',')}`;
    }
    static { this.ɵfac = function CurrencyPipe_Factory(t) { return new (t || CurrencyPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "currencyBRL", type: CurrencyPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CurrencyPipe, [{
        type: Pipe,
        args: [{
                name: 'currencyBRL'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3BpcGVzL2N1cnJlbmN5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxZQUFZO0lBRWhCLFNBQVMsQ0FBQyxLQUFhO1FBRTVCLE9BQU8sTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUMvRCxDQUFDOzZFQUxVLFlBQVk7cUZBQVosWUFBWTs7aUZBQVosWUFBWTtjQUh4QixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLGFBQWE7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2N1cnJlbmN5QlJMJ1xufSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICBwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIFxuICAgIHJldHVybiBgUiQgJHt2YWx1ZS50b0ZpeGVkKDIpLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcsJyl9YDtcbiAgfVxuXG59XG4iXX0=
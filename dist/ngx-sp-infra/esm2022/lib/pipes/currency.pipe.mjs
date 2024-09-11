import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class CurrencyPipe {
    transform(value) {
        return `R$ ${value.toFixed(2).toString().replace('.', ',')}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CurrencyPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: CurrencyPipe, name: "currencyBRL" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CurrencyPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'currencyBRL'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3BpcGVzL2N1cnJlbmN5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxZQUFZO0lBRWhCLFNBQVMsQ0FBQyxLQUFhO1FBRTVCLE9BQU8sTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUMvRCxDQUFDOytHQUxVLFlBQVk7NkdBQVosWUFBWTs7NEZBQVosWUFBWTtrQkFIeEIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsYUFBYTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2N1cnJlbmN5QlJMJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHB1YmxpYyB0cmFuc2Zvcm0odmFsdWU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBcclxuICAgIHJldHVybiBgUiQgJHt2YWx1ZS50b0ZpeGVkKDIpLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcsJyl9YDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class CpfCnpjPipe {
    transform(value) {
        switch (value.length) {
            case 11: return `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6, 9)}-${value.substring(9)}`;
            case 14: return `${value.substring(0, 2)}.${value.substring(2, 5)}.${value.substring(5, 8)}/${value.substring(8, 12)}-${value.substring(12)}`;
            default: return value;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: CpfCnpjPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.3.11", ngImport: i0, type: CpfCnpjPipe, name: "cpfCnpj" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: CpfCnpjPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'cpfCnpj'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BmLWNucGoucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3BpcGVzL2NwZi1jbnBqLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxXQUFXO0lBRWYsU0FBUyxDQUFDLEtBQWE7UUFFNUIsUUFBUSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDckIsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRW5ILEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUU5SSxPQUFPLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQztRQUN4QixDQUFDO0lBQ0gsQ0FBQzsrR0FYVSxXQUFXOzZHQUFYLFdBQVc7OzRGQUFYLFdBQVc7a0JBSHZCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLFNBQVM7aUJBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdjcGZDbnBqJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3BmQ25walBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgcHVibGljIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgICBzd2l0Y2ggKHZhbHVlLmxlbmd0aCkge1xyXG4gICAgICBjYXNlIDExOiByZXR1cm4gYCR7dmFsdWUuc3Vic3RyaW5nKDAsIDMpfS4ke3ZhbHVlLnN1YnN0cmluZygzLCA2KX0uJHt2YWx1ZS5zdWJzdHJpbmcoNiwgOSl9LSR7dmFsdWUuc3Vic3RyaW5nKDkpfWA7XHJcblxyXG4gICAgICBjYXNlIDE0OiByZXR1cm4gYCR7dmFsdWUuc3Vic3RyaW5nKDAsIDIpfS4ke3ZhbHVlLnN1YnN0cmluZygyLCA1KX0uJHt2YWx1ZS5zdWJzdHJpbmcoNSwgOCl9LyR7dmFsdWUuc3Vic3RyaW5nKDgsIDEyKX0tJHt2YWx1ZS5zdWJzdHJpbmcoMTIpfWA7XHJcblxyXG4gICAgICBkZWZhdWx0OiByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
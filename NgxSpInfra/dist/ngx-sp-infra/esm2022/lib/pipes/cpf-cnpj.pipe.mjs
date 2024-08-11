import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class CpfCnpjPipe {
    transform(value) {
        if (value.length == 11) {
            return `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6, 9)}-${value.substring(9)}`;
        }
        else if (value.length == 14) {
            return `${value.substring(0, 2)}.${value.substring(2, 5)}.${value.substring(5, 8)}/${value.substring(8, 12)}-${value.substring(12)}`;
        }
        else
            return value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BmLWNucGoucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3BpcGVzL2NwZi1jbnBqLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxXQUFXO0lBRWYsU0FBUyxDQUFDLEtBQWE7UUFFNUIsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUcsQ0FBQzthQUVJLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUM1QixPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3ZJLENBQUM7O1lBRUksT0FBTyxLQUFLLENBQUM7SUFDcEIsQ0FBQzsrR0FiVSxXQUFXOzZHQUFYLFdBQVc7OzRGQUFYLFdBQVc7a0JBSHZCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLFNBQVM7aUJBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdjcGZDbnBqJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3BmQ25walBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgcHVibGljIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIFxyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PSAxMSkge1xyXG4gICAgICByZXR1cm4gYCR7dmFsdWUuc3Vic3RyaW5nKDAsIDMpfS4ke3ZhbHVlLnN1YnN0cmluZygzLCA2KX0uJHt2YWx1ZS5zdWJzdHJpbmcoNiwgOSl9LSR7dmFsdWUuc3Vic3RyaW5nKDkpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAodmFsdWUubGVuZ3RoID09IDE0KSB7XHJcbiAgICAgIHJldHVybiBgJHt2YWx1ZS5zdWJzdHJpbmcoMCwgMil9LiR7dmFsdWUuc3Vic3RyaW5nKDIsIDUpfS4ke3ZhbHVlLnN1YnN0cmluZyg1LCA4KX0vJHt2YWx1ZS5zdWJzdHJpbmcoOCwgMTIpfS0ke3ZhbHVlLnN1YnN0cmluZygxMil9YDtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
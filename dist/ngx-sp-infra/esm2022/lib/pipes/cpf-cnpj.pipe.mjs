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
    static { this.ɵfac = function CpfCnpjPipe_Factory(t) { return new (t || CpfCnpjPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "cpfCnpj", type: CpfCnpjPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CpfCnpjPipe, [{
        type: Pipe,
        args: [{
                name: 'cpfCnpj'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BmLWNucGoucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3BpcGVzL2NwZi1jbnBqLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxXQUFXO0lBRWYsU0FBUyxDQUFDLEtBQWE7UUFFNUIsUUFBUSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDckIsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRW5ILEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUU5SSxPQUFPLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQztRQUN4QixDQUFDO0lBQ0gsQ0FBQzs0RUFYVSxXQUFXO2lGQUFYLFdBQVc7O2lGQUFYLFdBQVc7Y0FIdkIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxTQUFTO2FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjcGZDbnBqJ1xufSlcbmV4cG9ydCBjbGFzcyBDcGZDbnBqUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHB1YmxpYyB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICBzd2l0Y2ggKHZhbHVlLmxlbmd0aCkge1xuICAgICAgY2FzZSAxMTogcmV0dXJuIGAke3ZhbHVlLnN1YnN0cmluZygwLCAzKX0uJHt2YWx1ZS5zdWJzdHJpbmcoMywgNil9LiR7dmFsdWUuc3Vic3RyaW5nKDYsIDkpfS0ke3ZhbHVlLnN1YnN0cmluZyg5KX1gO1xuXG4gICAgICBjYXNlIDE0OiByZXR1cm4gYCR7dmFsdWUuc3Vic3RyaW5nKDAsIDIpfS4ke3ZhbHVlLnN1YnN0cmluZygyLCA1KX0uJHt2YWx1ZS5zdWJzdHJpbmcoNSwgOCl9LyR7dmFsdWUuc3Vic3RyaW5nKDgsIDEyKX0tJHt2YWx1ZS5zdWJzdHJpbmcoMTIpfWA7XG5cbiAgICAgIGRlZmF1bHQ6IHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
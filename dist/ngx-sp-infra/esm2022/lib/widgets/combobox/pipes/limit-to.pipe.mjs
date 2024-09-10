import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class LimitToPipe {
    transform(array, itemsCount, startIndex = 0) {
        if (!Array.isArray(array) || itemsCount === 0) {
            return array;
        }
        return array.slice(startIndex, startIndex + itemsCount);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LimitToPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: LimitToPipe, name: "limitTo" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LimitToPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'limitTo'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGltaXQtdG8ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvY29tYm9ib3gvcGlwZXMvbGltaXQtdG8ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLFdBQVc7SUFDZixTQUFTLENBQUMsS0FBWSxFQUFFLFVBQWtCLEVBQUUsYUFBcUIsQ0FBQztRQUN2RSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxVQUFVLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDOUMsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQzsrR0FOVSxXQUFXOzZHQUFYLFdBQVc7OzRGQUFYLFdBQVc7a0JBSHZCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLFNBQVM7aUJBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdsaW1pdFRvJ1xufSlcbmV4cG9ydCBjbGFzcyBMaW1pdFRvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBwdWJsaWMgdHJhbnNmb3JtKGFycmF5OiBhbnlbXSwgaXRlbXNDb3VudDogbnVtYmVyLCBzdGFydEluZGV4OiBudW1iZXIgPSAwKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSB8fCBpdGVtc0NvdW50ID09PSAwKSB7XG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheS5zbGljZShzdGFydEluZGV4LCBzdGFydEluZGV4ICsgaXRlbXNDb3VudCk7XG4gIH1cbn1cbiJdfQ==
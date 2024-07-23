import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LimitToPipe implements PipeTransform {
    transform(array: any[], itemsCount: number, startIndex?: number): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<LimitToPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<LimitToPipe, "limitTo", false>;
}

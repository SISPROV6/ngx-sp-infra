import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * filters an array based on searctext
 */
export declare class FilterByPipe implements PipeTransform {
    transform(array: any[], searchText?: string, keyName?: string): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterByPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FilterByPipe, "filterBy", false>;
}

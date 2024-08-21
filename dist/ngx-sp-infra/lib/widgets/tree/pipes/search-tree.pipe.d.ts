import { TreeItem } from '../models/tree-item';
import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SearchTreePipe implements PipeTransform {
    transform(items: TreeItem[], search: string): TreeItem[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchTreePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SearchTreePipe, "TreeFilter", false>;
}

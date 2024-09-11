import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SearchTreePipe {
    transform(items, search) {
        return items.filter(node => node.label.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }
    static { this.ɵfac = function SearchTreePipe_Factory(t) { return new (t || SearchTreePipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "TreeFilter", type: SearchTreePipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchTreePipe, [{
        type: Pipe,
        args: [{
                name: 'TreeFilter',
                pure: true,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRyZWUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvdHJlZS9waXBlcy9zZWFyY2gtdHJlZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQU9wRCxNQUFNLE9BQU8sY0FBYztJQUVsQixTQUFTLENBQUMsS0FBaUIsRUFBRSxNQUFjO1FBQ2hELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7K0VBSlUsY0FBYztvRkFBZCxjQUFjOztpRkFBZCxjQUFjO2NBTDFCLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLElBQUk7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyZWVJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtaXRlbSc7XG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ1RyZWVGaWx0ZXInLFxuICBwdXJlOiB0cnVlLFxufSlcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFRyZWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgcHVibGljIHRyYW5zZm9ybShpdGVtczogVHJlZUl0ZW1bXSwgc2VhcmNoOiBzdHJpbmcpOiBUcmVlSXRlbVtdIHtcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKG5vZGUgPT4gbm9kZS5sYWJlbC50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvY2FsZUxvd2VyQ2FzZSgpKSk7XG4gIH1cblxufVxuIl19
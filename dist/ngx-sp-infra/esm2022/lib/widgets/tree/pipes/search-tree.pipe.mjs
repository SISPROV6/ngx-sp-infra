import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SearchTreePipe {
    transform(items, search) {
        return items.filter(node => node.label.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SearchTreePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: SearchTreePipe, name: "TreeFilter" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SearchTreePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'TreeFilter',
                    pure: true,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRyZWUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvdHJlZS9waXBlcy9zZWFyY2gtdHJlZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQU9wRCxNQUFNLE9BQU8sY0FBYztJQUVsQixTQUFTLENBQUMsS0FBaUIsRUFBRSxNQUFjO1FBQ2hELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7K0dBSlUsY0FBYzs2R0FBZCxjQUFjOzs0RkFBZCxjQUFjO2tCQUwxQixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxZQUFZO29CQUNsQixJQUFJLEVBQUUsSUFBSTtpQkFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyZWVJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtaXRlbSc7XHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnVHJlZUZpbHRlcicsXHJcbiAgcHVyZTogdHJ1ZSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hUcmVlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICBwdWJsaWMgdHJhbnNmb3JtKGl0ZW1zOiBUcmVlSXRlbVtdLCBzZWFyY2g6IHN0cmluZyk6IFRyZWVJdGVtW10ge1xyXG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihub2RlID0+IG5vZGUubGFiZWwudG9Mb2NhbGVMb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb2NhbGVMb3dlckNhc2UoKSkpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
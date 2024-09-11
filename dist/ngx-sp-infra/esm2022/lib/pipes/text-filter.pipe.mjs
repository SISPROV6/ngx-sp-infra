import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TextFilterPipe {
    transform(options, search) {
        return options.filter(e => e.LABEL.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || e.ID.toLocaleString().toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }
    static { this.ɵfac = function TextFilterPipe_Factory(t) { return new (t || TextFilterPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "textFilter", type: TextFilterPipe, pure: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextFilterPipe, [{
        type: Pipe,
        args: [{
                name: 'textFilter',
                pure: false
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWx0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3BpcGVzL3RleHQtZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBT3BELE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFNBQVMsQ0FBQyxPQUF5QixFQUFFLE1BQWM7UUFDakQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pMLENBQUM7K0VBSFUsY0FBYztvRkFBZCxjQUFjOztpRkFBZCxjQUFjO2NBSjFCLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLEtBQUs7YUFDWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlY29yZENvbWJvYm94IH0gZnJvbSAnLi4vbW9kZWxzL2NvbWJvYm94L3JlY29yZC1jb21ib2JveCc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RleHRGaWx0ZXInLFxuICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0RmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0ob3B0aW9uczogUmVjb3JkQ29tYm9ib3hbXSwgc2VhcmNoOiBzdHJpbmcpOiBhbnlbXSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKGUgPT4gZS5MQUJFTC50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvY2FsZUxvd2VyQ2FzZSgpKSB8fCBlLklELnRvTG9jYWxlU3RyaW5nKCkudG9Mb2NhbGVMb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb2NhbGVMb3dlckNhc2UoKSkpO1xuICB9XG59XG4iXX0=
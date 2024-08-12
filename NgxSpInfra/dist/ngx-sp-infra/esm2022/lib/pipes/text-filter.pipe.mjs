import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TextFilterPipe {
    transform(options, search) {
        return options.filter(e => e.LABEL.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || e.ID.toLocaleString().toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: TextFilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.3.11", ngImport: i0, type: TextFilterPipe, name: "textFilter", pure: false }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: TextFilterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'textFilter',
                    pure: false
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWx0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3BpcGVzL3RleHQtZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBT3BELE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFNBQVMsQ0FBQyxPQUF5QixFQUFFLE1BQWM7UUFDakQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pMLENBQUM7K0dBSFUsY0FBYzs2R0FBZCxjQUFjOzs0RkFBZCxjQUFjO2tCQUoxQixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxZQUFZO29CQUNsQixJQUFJLEVBQUUsS0FBSztpQkFDWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVjb3JkQ29tYm9ib3ggfSBmcm9tICcuLi9tb2RlbHMvY29tYm9ib3gvcmVjb3JkLWNvbWJvYm94JztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAndGV4dEZpbHRlcicsXHJcbiAgcHVyZTogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKG9wdGlvbnM6IFJlY29yZENvbWJvYm94W10sIHNlYXJjaDogc3RyaW5nKTogYW55W10ge1xyXG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKGUgPT4gZS5MQUJFTC50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvY2FsZUxvd2VyQ2FzZSgpKSB8fCBlLklELnRvTG9jYWxlU3RyaW5nKCkudG9Mb2NhbGVMb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb2NhbGVMb3dlckNhc2UoKSkpO1xyXG4gIH1cclxufVxyXG4iXX0=
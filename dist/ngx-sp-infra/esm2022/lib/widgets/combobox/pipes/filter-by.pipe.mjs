import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * filters an array based on searctext
 */
export class FilterByPipe {
    transform(array, searchText, keyName) {
        if (!array || !searchText || !Array.isArray(array)) {
            return array;
        }
        if (typeof array[0] === 'string') {
            return array.filter((item) => item.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
        }
        // filter array, items which match and return true will be
        // kept, false will be filtered out
        if (!keyName) {
            return array.filter((item) => {
                for (const key in item) {
                    if (typeof item[key] !== 'object' && item[key].toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                        return true;
                    }
                }
                return false;
            });
        }
        else {
            return array.filter((item) => {
                if (typeof item[keyName] !== 'object' && item[keyName].toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FilterByPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: FilterByPipe, name: "filterBy" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FilterByPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'filterBy'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWJ5LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2NvbWJvYm94L3BpcGVzL2ZpbHRlci1ieS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUVwRDs7R0FFRztBQUlILE1BQU0sT0FBTyxZQUFZO0lBQ2YsU0FBUyxDQUFDLEtBQVksRUFBRSxVQUFtQixFQUFFLE9BQWdCO1FBQ2pFLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDbEQsT0FBTyxLQUFLLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDaEMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUYsQ0FBQztRQUNELDBEQUEwRDtRQUMxRCxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ1osT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQy9CLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ3RCLElBQUksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDOUcsT0FBTyxJQUFJLENBQUM7b0JBQ2YsQ0FBQztnQkFDSixDQUFDO2dCQUNELE9BQU8sS0FBSyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQzthQUFNLENBQUM7WUFDTCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUN0SCxPQUFPLElBQUksQ0FBQztnQkFDZixDQUFDO2dCQUNELE9BQU8sS0FBSyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQztJQUVKLENBQUM7K0dBNUJTLFlBQVk7NkdBQVosWUFBWTs7NEZBQVosWUFBWTtrQkFIeEIsSUFBSTttQkFBQztvQkFDSCxJQUFJLEVBQUUsVUFBVTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogZmlsdGVycyBhbiBhcnJheSBiYXNlZCBvbiBzZWFyY3RleHRcclxuICovXHJcbkBQaXBlKHtcclxuICAgbmFtZTogJ2ZpbHRlckJ5J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsdGVyQnlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgIHB1YmxpYyB0cmFuc2Zvcm0oYXJyYXk6IGFueVtdLCBzZWFyY2hUZXh0Pzogc3RyaW5nLCBrZXlOYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgIGlmICghYXJyYXkgfHwgIXNlYXJjaFRleHQgfHwgIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgIHJldHVybiBhcnJheTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIGFycmF5WzBdID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCkpID4gLTEpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGZpbHRlciBhcnJheSwgaXRlbXMgd2hpY2ggbWF0Y2ggYW5kIHJldHVybiB0cnVlIHdpbGwgYmVcclxuICAgICAgLy8ga2VwdCwgZmFsc2Ugd2lsbCBiZSBmaWx0ZXJlZCBvdXRcclxuICAgICAgaWYgKCFrZXlOYW1lKSB7XHJcbiAgICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbVtrZXldICE9PSAnb2JqZWN0JyAmJiBpdGVtW2tleV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcigoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbVtrZXlOYW1lXSAhPT0gJ29iamVjdCcgJiYgaXRlbVtrZXlOYW1lXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgfVxyXG59XHJcbiJdfQ==
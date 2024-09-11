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
    static { this.ɵfac = function FilterByPipe_Factory(t) { return new (t || FilterByPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "filterBy", type: FilterByPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterByPipe, [{
        type: Pipe,
        args: [{
                name: 'filterBy'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWJ5LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2NvbWJvYm94L3BpcGVzL2ZpbHRlci1ieS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUVwRDs7R0FFRztBQUlILE1BQU0sT0FBTyxZQUFZO0lBQ2YsU0FBUyxDQUFDLEtBQVksRUFBRSxVQUFtQixFQUFFLE9BQWdCO1FBQ2pFLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDbEQsT0FBTyxLQUFLLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDaEMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUYsQ0FBQztRQUNELDBEQUEwRDtRQUMxRCxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ1osT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQy9CLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ3RCLElBQUksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDOUcsT0FBTyxJQUFJLENBQUM7b0JBQ2YsQ0FBQztnQkFDSixDQUFDO2dCQUNELE9BQU8sS0FBSyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQzthQUFNLENBQUM7WUFDTCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUN0SCxPQUFPLElBQUksQ0FBQztnQkFDZixDQUFDO2dCQUNELE9BQU8sS0FBSyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQztJQUVKLENBQUM7NkVBNUJTLFlBQVk7a0ZBQVosWUFBWTs7aUZBQVosWUFBWTtjQUh4QixJQUFJO2VBQUM7Z0JBQ0gsSUFBSSxFQUFFLFVBQVU7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogZmlsdGVycyBhbiBhcnJheSBiYXNlZCBvbiBzZWFyY3RleHRcbiAqL1xuQFBpcGUoe1xuICAgbmFtZTogJ2ZpbHRlckJ5J1xufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgIHB1YmxpYyB0cmFuc2Zvcm0oYXJyYXk6IGFueVtdLCBzZWFyY2hUZXh0Pzogc3RyaW5nLCBrZXlOYW1lPzogc3RyaW5nKSB7XG4gICAgICBpZiAoIWFycmF5IHx8ICFzZWFyY2hUZXh0IHx8ICFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBhcnJheVswXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKSkgPiAtMSk7XG4gICAgICB9XG4gICAgICAvLyBmaWx0ZXIgYXJyYXksIGl0ZW1zIHdoaWNoIG1hdGNoIGFuZCByZXR1cm4gdHJ1ZSB3aWxsIGJlXG4gICAgICAvLyBrZXB0LCBmYWxzZSB3aWxsIGJlIGZpbHRlcmVkIG91dFxuICAgICAgaWYgKCFrZXlOYW1lKSB7XG4gICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGl0ZW0pIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbVtrZXldICE9PSAnb2JqZWN0JyAmJiBpdGVtW2tleV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtW2tleU5hbWVdICE9PSAnb2JqZWN0JyAmJiBpdGVtW2tleU5hbWVdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xuICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgfVxufVxuIl19
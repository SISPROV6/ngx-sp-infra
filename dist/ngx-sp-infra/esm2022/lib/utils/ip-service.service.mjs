import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class IpServiceService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    getIPAddress() {
        return this._httpClient.get("https://api.ipify.org/?format=json")
            .pipe(take(1));
    }
    static { this.ɵfac = function IpServiceService_Factory(t) { return new (t || IpServiceService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: IpServiceService, factory: IpServiceService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IpServiceService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXAtc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvdXRpbHMvaXAtc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLdEMsTUFBTSxPQUFPLGdCQUFnQjtJQUUzQixZQUFxQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtJQUFLLENBQUM7SUFFbEQsWUFBWTtRQUVWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUM7YUFDOUQsSUFBSSxDQUNILElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUixDQUFDO0lBRU4sQ0FBQztpRkFYVSxnQkFBZ0I7dUVBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmYsTUFBTTs7aUZBRVAsZ0JBQWdCO2NBSDVCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIElwU2VydmljZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50ICkgeyB9XG5cbiAgZ2V0SVBBZGRyZXNzKCk6IGFueSBcbiAgeyAgXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBDbGllbnQuZ2V0KFwiaHR0cHM6Ly9hcGkuaXBpZnkub3JnLz9mb3JtYXQ9anNvblwiKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2UoMSlcbiAgICAgICk7XG5cbiAgfVxuXG59XG4iXX0=
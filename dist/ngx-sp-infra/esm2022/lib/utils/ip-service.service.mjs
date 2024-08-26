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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IpServiceService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IpServiceService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IpServiceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.HttpClient }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXAtc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvdXRpbHMvaXAtc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLdEMsTUFBTSxPQUFPLGdCQUFnQjtJQUUzQixZQUFxQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtJQUFLLENBQUM7SUFFbEQsWUFBWTtRQUVWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUM7YUFDOUQsSUFBSSxDQUNILElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUixDQUFDO0lBRU4sQ0FBQzsrR0FYVSxnQkFBZ0I7bUhBQWhCLGdCQUFnQixjQUZmLE1BQU07OzRGQUVQLGdCQUFnQjtrQkFINUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXBTZXJ2aWNlU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50ICkgeyB9XHJcblxyXG4gIGdldElQQWRkcmVzcygpOiBhbnkgXHJcbiAgeyAgXHJcbiAgICByZXR1cm4gdGhpcy5faHR0cENsaWVudC5nZXQoXCJodHRwczovL2FwaS5pcGlmeS5vcmcvP2Zvcm1hdD1qc29uXCIpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2UoMSlcclxuICAgICAgKTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
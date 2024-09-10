import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class SettingsService {
    constructor() { }
    getLocaleId() {
        //Aqui implementar busca do LOCALE_ID
        //return 'en-US';
        return 'pt-BR';
    }
    getDefaultCurrencyCode() {
        //Aqui implementar busca do DEFAULT_CURRENCY_CODE
        //return 'USD';
        return 'BRL';
    }
    getCurrencyBR(numero) {
        const formata = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        });
        return formata.format(numero);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SettingsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SettingsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SettingsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3V0aWxzL3NldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLGVBQWU7SUFFMUIsZ0JBQWdCLENBQUM7SUFFakIsV0FBVztRQUNULHFDQUFxQztRQUNyQyxpQkFBaUI7UUFDakIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELHNCQUFzQjtRQUNwQixpREFBaUQ7UUFDakQsZUFBZTtRQUNmLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGFBQWEsQ0FBRyxNQUFjO1FBRXRCLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBRSxPQUFPLEVBQUU7WUFDeEMsS0FBSyxFQUFFLFVBQVU7WUFDakIsUUFBUSxFQUFFLEtBQUs7WUFDZixxQkFBcUIsRUFBRSxDQUFDO1NBQy9CLENBQUUsQ0FBQztRQUNKLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBRSxNQUFNLENBQUUsQ0FBQztJQUN4QyxDQUFDOytHQXhCVSxlQUFlO21IQUFmLGVBQWUsY0FGZCxNQUFNOzs0RkFFUCxlQUFlO2tCQUgzQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGdldExvY2FsZUlkKCkge1xuICAgIC8vQXF1aSBpbXBsZW1lbnRhciBidXNjYSBkbyBMT0NBTEVfSURcbiAgICAvL3JldHVybiAnZW4tVVMnO1xuICAgIHJldHVybiAncHQtQlInO1xuICB9XG5cbiAgZ2V0RGVmYXVsdEN1cnJlbmN5Q29kZSgpIHtcbiAgICAvL0FxdWkgaW1wbGVtZW50YXIgYnVzY2EgZG8gREVGQVVMVF9DVVJSRU5DWV9DT0RFXG4gICAgLy9yZXR1cm4gJ1VTRCc7XG4gICAgcmV0dXJuICdCUkwnO1xuICB9XG5cbiAgZ2V0Q3VycmVuY3lCUiAoIG51bWVybzogbnVtYmVyICk6IHN0cmluZ1xuICB7XG4gICAgICAgICAgY29uc3QgZm9ybWF0YSA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCggJ3B0LUJSJywge1xuICAgICAgICAgICAgICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICAgICAgICAgICAgICBjdXJyZW5jeTogJ0JSTCcsXG4gICAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDJcbiAgICAgICAgICB9ICk7XG4gICAgICAgICAgcmV0dXJuIGZvcm1hdGEuZm9ybWF0KCBudW1lcm8gKTtcbiAgfVxuXG59XG4iXX0=
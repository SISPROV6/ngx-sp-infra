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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3V0aWxzL3NldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLGVBQWU7SUFFMUIsZ0JBQWdCLENBQUM7SUFFakIsV0FBVztRQUNULHFDQUFxQztRQUNyQyxpQkFBaUI7UUFDakIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELHNCQUFzQjtRQUNwQixpREFBaUQ7UUFDakQsZUFBZTtRQUNmLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGFBQWEsQ0FBRyxNQUFjO1FBRXRCLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBRSxPQUFPLEVBQUU7WUFDeEMsS0FBSyxFQUFFLFVBQVU7WUFDakIsUUFBUSxFQUFFLEtBQUs7WUFDZixxQkFBcUIsRUFBRSxDQUFDO1NBQy9CLENBQUUsQ0FBQztRQUNKLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBRSxNQUFNLENBQUUsQ0FBQztJQUN4QyxDQUFDOytHQXhCVSxlQUFlO21IQUFmLGVBQWUsY0FGZCxNQUFNOzs0RkFFUCxlQUFlO2tCQUgzQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGdldExvY2FsZUlkKCkge1xyXG4gICAgLy9BcXVpIGltcGxlbWVudGFyIGJ1c2NhIGRvIExPQ0FMRV9JRFxyXG4gICAgLy9yZXR1cm4gJ2VuLVVTJztcclxuICAgIHJldHVybiAncHQtQlInO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdEN1cnJlbmN5Q29kZSgpIHtcclxuICAgIC8vQXF1aSBpbXBsZW1lbnRhciBidXNjYSBkbyBERUZBVUxUX0NVUlJFTkNZX0NPREVcclxuICAgIC8vcmV0dXJuICdVU0QnO1xyXG4gICAgcmV0dXJuICdCUkwnO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVuY3lCUiAoIG51bWVybzogbnVtYmVyICk6IHN0cmluZ1xyXG4gIHtcclxuICAgICAgICAgIGNvbnN0IGZvcm1hdGEgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoICdwdC1CUicsIHtcclxuICAgICAgICAgICAgICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnQlJMJyxcclxuICAgICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyXHJcbiAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICByZXR1cm4gZm9ybWF0YS5mb3JtYXQoIG51bWVybyApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
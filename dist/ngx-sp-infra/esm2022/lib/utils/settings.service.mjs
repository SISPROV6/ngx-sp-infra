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
    static { this.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3V0aWxzL3NldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLGVBQWU7SUFFMUIsZ0JBQWdCLENBQUM7SUFFakIsV0FBVztRQUNULHFDQUFxQztRQUNyQyxpQkFBaUI7UUFDakIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELHNCQUFzQjtRQUNwQixpREFBaUQ7UUFDakQsZUFBZTtRQUNmLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGFBQWEsQ0FBRyxNQUFjO1FBRXRCLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBRSxPQUFPLEVBQUU7WUFDeEMsS0FBSyxFQUFFLFVBQVU7WUFDakIsUUFBUSxFQUFFLEtBQUs7WUFDZixxQkFBcUIsRUFBRSxDQUFDO1NBQy9CLENBQUUsQ0FBQztRQUNKLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBRSxNQUFNLENBQUUsQ0FBQztJQUN4QyxDQUFDO2dGQXhCVSxlQUFlO3VFQUFmLGVBQWUsV0FBZixlQUFlLG1CQUZkLE1BQU07O2lGQUVQLGVBQWU7Y0FIM0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0TG9jYWxlSWQoKSB7XG4gICAgLy9BcXVpIGltcGxlbWVudGFyIGJ1c2NhIGRvIExPQ0FMRV9JRFxuICAgIC8vcmV0dXJuICdlbi1VUyc7XG4gICAgcmV0dXJuICdwdC1CUic7XG4gIH1cblxuICBnZXREZWZhdWx0Q3VycmVuY3lDb2RlKCkge1xuICAgIC8vQXF1aSBpbXBsZW1lbnRhciBidXNjYSBkbyBERUZBVUxUX0NVUlJFTkNZX0NPREVcbiAgICAvL3JldHVybiAnVVNEJztcbiAgICByZXR1cm4gJ0JSTCc7XG4gIH1cblxuICBnZXRDdXJyZW5jeUJSICggbnVtZXJvOiBudW1iZXIgKTogc3RyaW5nXG4gIHtcbiAgICAgICAgICBjb25zdCBmb3JtYXRhID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCAncHQtQlInLCB7XG4gICAgICAgICAgICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnQlJMJyxcbiAgICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMlxuICAgICAgICAgIH0gKTtcbiAgICAgICAgICByZXR1cm4gZm9ybWF0YS5mb3JtYXQoIG51bWVybyApO1xuICB9XG5cbn1cbiJdfQ==
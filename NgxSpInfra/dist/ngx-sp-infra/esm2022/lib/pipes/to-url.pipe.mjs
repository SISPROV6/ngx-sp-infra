import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
/**
 * @description
 * Transforma um Blob ou MediaSource em uma URL para ser utilizada em imagens.
 *
 * Ela aceita valors não definidos em casos onde o valor vai ser trazido em outro momento.
 */
export class ToUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, ...args) {
        if (value) {
            let url = URL.createObjectURL(value);
            // Devemos dizer que a URL passada é segura e pode ser usada.
            // Se não limpada a url vai estar da seguinte forma: [unsafe][blob] ao invés de [blob]
            let safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
            return safeUrl;
        }
        // Se não estiver definida, retorna nada.
        return "";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: ToUrlPipe, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.3.11", ngImport: i0, type: ToUrlPipe, name: "toUrl" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: ToUrlPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'toUrl' }]
        }], ctorParameters: () => [{ type: i1.DomSanitizer }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tdXJsLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi9waXBlcy90by11cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0FBR3BEOzs7OztHQUtHO0FBSUgsTUFBTSxPQUFPLFNBQVM7SUFFcEIsWUFDVSxTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzlCLENBQUM7SUFFSixTQUFTLENBQUMsS0FBcUMsRUFBRSxHQUFHLElBQWU7UUFFakUsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNWLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsNkRBQTZEO1lBQzdELHNGQUFzRjtZQUN0RixJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7UUFFRCx5Q0FBeUM7UUFDekMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOytHQWxCVSxTQUFTOzZHQUFULFNBQVM7OzRGQUFULFNBQVM7a0JBSHJCLElBQUk7bUJBQ0gsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUcmFuc2Zvcm1hIHVtIEJsb2Igb3UgTWVkaWFTb3VyY2UgZW0gdW1hIFVSTCBwYXJhIHNlciB1dGlsaXphZGEgZW0gaW1hZ2Vucy5cbiAqIFxuICogRWxhIGFjZWl0YSB2YWxvcnMgbsOjbyBkZWZpbmlkb3MgZW0gY2Fzb3Mgb25kZSBvIHZhbG9yIHZhaSBzZXIgdHJhemlkbyBlbSBvdXRybyBtb21lbnRvLlxuICovXG5AUGlwZShcbiAgeyBuYW1lOiAndG9VcmwnIH1cbilcbmV4cG9ydCBjbGFzcyBUb1VybFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkge31cblxuICB0cmFuc2Zvcm0odmFsdWU6IEJsb2IgfCBNZWRpYVNvdXJjZSB8IHVuZGVmaW5lZCwgLi4uYXJnczogdW5rbm93bltdKTogU2FmZVVybCB7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCB1cmw6IHN0cmluZyA9IFVSTC5jcmVhdGVPYmplY3RVUkwodmFsdWUpO1xuICAgICAgLy8gRGV2ZW1vcyBkaXplciBxdWUgYSBVUkwgcGFzc2FkYSDDqSBzZWd1cmEgZSBwb2RlIHNlciB1c2FkYS5cbiAgICAgIC8vIFNlIG7Do28gbGltcGFkYSBhIHVybCB2YWkgZXN0YXIgZGEgc2VndWludGUgZm9ybWE6IFt1bnNhZmVdW2Jsb2JdIGFvIGludsOpcyBkZSBbYmxvYl1cbiAgICAgIGxldCBzYWZlVXJsOiBTYWZlVXJsID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh1cmwpO1xuICAgICAgcmV0dXJuIHNhZmVVcmw7XG4gICAgfVxuXG4gICAgLy8gU2UgbsOjbyBlc3RpdmVyIGRlZmluaWRhLCByZXRvcm5hIG5hZGEuXG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxufVxuIl19
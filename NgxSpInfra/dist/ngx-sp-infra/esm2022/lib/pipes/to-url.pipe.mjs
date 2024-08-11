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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tdXJsLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi9waXBlcy90by11cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0FBR3BEOzs7OztHQUtHO0FBSUgsTUFBTSxPQUFPLFNBQVM7SUFFcEIsWUFDVSxTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzlCLENBQUM7SUFFSixTQUFTLENBQUMsS0FBcUMsRUFBRSxHQUFHLElBQWU7UUFFakUsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNWLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsNkRBQTZEO1lBQzdELHNGQUFzRjtZQUN0RixJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7UUFFRCx5Q0FBeUM7UUFDekMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOytHQWxCVSxTQUFTOzZHQUFULFNBQVM7OzRGQUFULFNBQVM7a0JBSHJCLElBQUk7bUJBQ0gsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVHJhbnNmb3JtYSB1bSBCbG9iIG91IE1lZGlhU291cmNlIGVtIHVtYSBVUkwgcGFyYSBzZXIgdXRpbGl6YWRhIGVtIGltYWdlbnMuXHJcbiAqIFxyXG4gKiBFbGEgYWNlaXRhIHZhbG9ycyBuw6NvIGRlZmluaWRvcyBlbSBjYXNvcyBvbmRlIG8gdmFsb3IgdmFpIHNlciB0cmF6aWRvIGVtIG91dHJvIG1vbWVudG8uXHJcbiAqL1xyXG5AUGlwZShcclxuICB7IG5hbWU6ICd0b1VybCcgfVxyXG4pXHJcbmV4cG9ydCBjbGFzcyBUb1VybFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyXHJcbiAgKSB7fVxyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IEJsb2IgfCBNZWRpYVNvdXJjZSB8IHVuZGVmaW5lZCwgLi4uYXJnczogdW5rbm93bltdKTogU2FmZVVybCB7XHJcblxyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIGxldCB1cmw6IHN0cmluZyA9IFVSTC5jcmVhdGVPYmplY3RVUkwodmFsdWUpO1xyXG4gICAgICAvLyBEZXZlbW9zIGRpemVyIHF1ZSBhIFVSTCBwYXNzYWRhIMOpIHNlZ3VyYSBlIHBvZGUgc2VyIHVzYWRhLlxyXG4gICAgICAvLyBTZSBuw6NvIGxpbXBhZGEgYSB1cmwgdmFpIGVzdGFyIGRhIHNlZ3VpbnRlIGZvcm1hOiBbdW5zYWZlXVtibG9iXSBhbyBpbnbDqXMgZGUgW2Jsb2JdXHJcbiAgICAgIGxldCBzYWZlVXJsOiBTYWZlVXJsID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh1cmwpO1xyXG4gICAgICByZXR1cm4gc2FmZVVybDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZSBuw6NvIGVzdGl2ZXIgZGVmaW5pZGEsIHJldG9ybmEgbmFkYS5cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
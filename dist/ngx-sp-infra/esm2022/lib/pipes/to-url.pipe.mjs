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
    static { this.ɵfac = function ToUrlPipe_Factory(t) { return new (t || ToUrlPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer, 16)); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "toUrl", type: ToUrlPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToUrlPipe, [{
        type: Pipe,
        args: [{ name: 'toUrl' }]
    }], () => [{ type: i1.DomSanitizer }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tdXJsLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi9waXBlcy90by11cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0FBR3BEOzs7OztHQUtHO0FBSUgsTUFBTSxPQUFPLFNBQVM7SUFFcEIsWUFDVSxTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzlCLENBQUM7SUFFSixTQUFTLENBQUMsS0FBcUMsRUFBRSxHQUFHLElBQWU7UUFFakUsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNWLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsNkRBQTZEO1lBQzdELHNGQUFzRjtZQUN0RixJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7UUFFRCx5Q0FBeUM7UUFDekMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzBFQWxCVSxTQUFTOytFQUFULFNBQVM7O2lGQUFULFNBQVM7Y0FIckIsSUFBSTtlQUNILEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogVHJhbnNmb3JtYSB1bSBCbG9iIG91IE1lZGlhU291cmNlIGVtIHVtYSBVUkwgcGFyYSBzZXIgdXRpbGl6YWRhIGVtIGltYWdlbnMuXG4gKiBcbiAqIEVsYSBhY2VpdGEgdmFsb3JzIG7Do28gZGVmaW5pZG9zIGVtIGNhc29zIG9uZGUgbyB2YWxvciB2YWkgc2VyIHRyYXppZG8gZW0gb3V0cm8gbW9tZW50by5cbiAqL1xuQFBpcGUoXG4gIHsgbmFtZTogJ3RvVXJsJyB9XG4pXG5leHBvcnQgY2xhc3MgVG9VcmxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuICApIHt9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBCbG9iIHwgTWVkaWFTb3VyY2UgfCB1bmRlZmluZWQsIC4uLmFyZ3M6IHVua25vd25bXSk6IFNhZmVVcmwge1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBsZXQgdXJsOiBzdHJpbmcgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHZhbHVlKTtcbiAgICAgIC8vIERldmVtb3MgZGl6ZXIgcXVlIGEgVVJMIHBhc3NhZGEgw6kgc2VndXJhIGUgcG9kZSBzZXIgdXNhZGEuXG4gICAgICAvLyBTZSBuw6NvIGxpbXBhZGEgYSB1cmwgdmFpIGVzdGFyIGRhIHNlZ3VpbnRlIGZvcm1hOiBbdW5zYWZlXVtibG9iXSBhbyBpbnbDqXMgZGUgW2Jsb2JdXG4gICAgICBsZXQgc2FmZVVybDogU2FmZVVybCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodXJsKTtcbiAgICAgIHJldHVybiBzYWZlVXJsO1xuICAgIH1cblxuICAgIC8vIFNlIG7Do28gZXN0aXZlciBkZWZpbmlkYSwgcmV0b3JuYSBuYWRhLlxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbn1cbiJdfQ==
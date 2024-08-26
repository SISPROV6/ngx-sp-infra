import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Auxilia na injeção de dados de autenticação em endpoints que necessitam de tal ação.
 */
export class CheckUrlAndMethodService {
    constructor() { }
    /**
     * @description
     *
     * Verifica se a url da requisição precisa ou não ser autenticada.
     *
     * É utilizado REGEX para a formatação.
     *
     * @param url URL da requisição que está sendo enviada ou que foi recebida.
     * @param method Método da requisição.
     * @param urls Urls e métodos atrelados aos endpoints.
     * @returns Verdadeiro se deve ser autenticado e falso se não deve.
     */
    needsAuthRequest(url, method, urls) {
        // Adiciona a URL uma barra no final para fazer match.
        let urlToBeVerified = url;
        // TODO: Remover redundância de / nas URLs.
        let lastUrlChar = urlToBeVerified.charAt(urlToBeVerified.length - 1);
        if (lastUrlChar !== "/") {
            urlToBeVerified += "/";
        }
        let urlsToVerify = urls.keys();
        for (let urlToVerify of urlsToVerify) {
            let regexString = `${this.sanitizeForRegex(urlToVerify)}`;
            // Faz com que o caractere * fique com um ponto para pegar qualquer caractere no regex.
            regexString = regexString.replace("*", ".*");
            let regexMatch = urlToBeVerified.match(regexString);
            // Verifica se a url da match no regex construído a partir da url a ser autenticada.
            if (regexMatch && regexMatch.length === 1) {
                // Verifica se o método da ação necessita de autenticação.
                for (let methodAux of urls.get(urlToVerify)) {
                    methodAux = methodAux.replace("*", ".*");
                    let regexMatchedMethod = method.match(methodAux);
                    if (regexMatchedMethod && regexMatchedMethod.length === 1) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    /**
     * @description
     *
     * Insere caracteres de escape em palavras chaves de um regex.
     *
     * pego de https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
     *
     * @param unsanitizedString String a ser "limpada".
     * @returns String limpa para uso em regex.
     */
    sanitizeForRegex(unsanitizedString) {
        return unsanitizedString.replace(/[.+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CheckUrlAndMethodService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CheckUrlAndMethodService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CheckUrlAndMethodService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stdXJsLWFuZC1tZXRob2Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3V0aWxzL2NoZWNrLXVybC1hbmQtbWV0aG9kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7Ozs7R0FJRztBQUlILE1BQU0sT0FBTyx3QkFBd0I7SUFFbkMsZ0JBQWdCLENBQUM7SUFFakI7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxnQkFBZ0IsQ0FBQyxHQUFXLEVBQUUsTUFBYyxFQUFFLElBQTJCO1FBQ3ZFLHNEQUFzRDtRQUN0RCxJQUFJLGVBQWUsR0FBRyxHQUFHLENBQUM7UUFFMUIsMkNBQTJDO1FBQzNDLElBQUksV0FBVyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVyRSxJQUFJLFdBQVcsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN4QixlQUFlLElBQUksR0FBRyxDQUFDO1FBQ3pCLENBQUM7UUFFRCxJQUFJLFlBQVksR0FBNkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXpELEtBQUksSUFBSSxXQUFXLElBQUksWUFBWSxFQUFFLENBQUM7WUFDcEMsSUFBSSxXQUFXLEdBQVcsR0FBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFFLEVBQUUsQ0FBQztZQUVwRSx1RkFBdUY7WUFDdkYsV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTdDLElBQUksVUFBVSxHQUE2QixlQUFlLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTlFLG9GQUFvRjtZQUNwRixJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUUxQywwREFBMEQ7Z0JBQzFELEtBQUksSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUUsRUFBRSxDQUFDO29CQUM1QyxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBRXpDLElBQUksa0JBQWtCLEdBQTRCLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRTFFLElBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUMxRCxPQUFPLElBQUksQ0FBQztvQkFDZCxDQUFDO2dCQUVILENBQUM7WUFFSCxDQUFDO1FBRUgsQ0FBQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNLLGdCQUFnQixDQUFDLGlCQUF5QjtRQUNoRCxPQUFPLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLG9DQUFvQztJQUN0RyxDQUFDOytHQXZFVSx3QkFBd0I7bUhBQXhCLHdCQUF3QixjQUZyQixNQUFNOzs0RkFFVCx3QkFBd0I7a0JBSHBDLFVBQVU7bUJBQ1QsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBBdXhpbGlhIG5hIGluamXDp8OjbyBkZSBkYWRvcyBkZSBhdXRlbnRpY2HDp8OjbyBlbSBlbmRwb2ludHMgcXVlIG5lY2Vzc2l0YW0gZGUgdGFsIGHDp8Ojby5cclxuICovXHJcbkBJbmplY3RhYmxlKFxyXG4gIHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH1cclxuKVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tVcmxBbmRNZXRob2RTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBWZXJpZmljYSBzZSBhIHVybCBkYSByZXF1aXNpw6fDo28gcHJlY2lzYSBvdSBuw6NvIHNlciBhdXRlbnRpY2FkYS5cclxuICAgKlxyXG4gICAqIMOJIHV0aWxpemFkbyBSRUdFWCBwYXJhIGEgZm9ybWF0YcOnw6NvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVybCBVUkwgZGEgcmVxdWlzacOnw6NvIHF1ZSBlc3TDoSBzZW5kbyBlbnZpYWRhIG91IHF1ZSBmb2kgcmVjZWJpZGEuXHJcbiAgICogQHBhcmFtIG1ldGhvZCBNw6l0b2RvIGRhIHJlcXVpc2nDp8Ojby5cclxuICAgKiBAcGFyYW0gdXJscyBVcmxzIGUgbcOpdG9kb3MgYXRyZWxhZG9zIGFvcyBlbmRwb2ludHMuXHJcbiAgICogQHJldHVybnMgVmVyZGFkZWlybyBzZSBkZXZlIHNlciBhdXRlbnRpY2FkbyBlIGZhbHNvIHNlIG7Do28gZGV2ZS5cclxuICAgKi9cclxuICBuZWVkc0F1dGhSZXF1ZXN0KHVybDogc3RyaW5nLCBtZXRob2Q6IHN0cmluZywgdXJsczogTWFwPHN0cmluZywgc3RyaW5nW10+KTogYm9vbGVhbiB7XHJcbiAgICAvLyBBZGljaW9uYSBhIFVSTCB1bWEgYmFycmEgbm8gZmluYWwgcGFyYSBmYXplciBtYXRjaC5cclxuICAgIGxldCB1cmxUb0JlVmVyaWZpZWQgPSB1cmw7XHJcbiAgICBcclxuICAgIC8vIFRPRE86IFJlbW92ZXIgcmVkdW5kw6JuY2lhIGRlIC8gbmFzIFVSTHMuXHJcbiAgICBsZXQgbGFzdFVybENoYXIgPSB1cmxUb0JlVmVyaWZpZWQuY2hhckF0KHVybFRvQmVWZXJpZmllZC5sZW5ndGggLSAxKTtcclxuXHJcbiAgICBpZiAobGFzdFVybENoYXIgIT09IFwiL1wiKSB7XHJcbiAgICAgIHVybFRvQmVWZXJpZmllZCArPSBcIi9cIjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdXJsc1RvVmVyaWZ5OiBJdGVyYWJsZUl0ZXJhdG9yPHN0cmluZz4gPSB1cmxzLmtleXMoKTtcclxuXHJcbiAgICBmb3IobGV0IHVybFRvVmVyaWZ5IG9mIHVybHNUb1ZlcmlmeSkge1xyXG4gICAgICBsZXQgcmVnZXhTdHJpbmc6IHN0cmluZyA9IGAkeyB0aGlzLnNhbml0aXplRm9yUmVnZXgodXJsVG9WZXJpZnkpIH1gO1xyXG5cclxuICAgICAgLy8gRmF6IGNvbSBxdWUgbyBjYXJhY3RlcmUgKiBmaXF1ZSBjb20gdW0gcG9udG8gcGFyYSBwZWdhciBxdWFscXVlciBjYXJhY3RlcmUgbm8gcmVnZXguXHJcbiAgICAgIHJlZ2V4U3RyaW5nID0gcmVnZXhTdHJpbmcucmVwbGFjZShcIipcIiwgXCIuKlwiKTtcclxuXHJcbiAgICAgIGxldCByZWdleE1hdGNoOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9ICB1cmxUb0JlVmVyaWZpZWQubWF0Y2gocmVnZXhTdHJpbmcpO1xyXG5cclxuICAgICAgLy8gVmVyaWZpY2Egc2UgYSB1cmwgZGEgbWF0Y2ggbm8gcmVnZXggY29uc3RydcOtZG8gYSBwYXJ0aXIgZGEgdXJsIGEgc2VyIGF1dGVudGljYWRhLlxyXG4gICAgICBpZiAocmVnZXhNYXRjaCAmJiByZWdleE1hdGNoLmxlbmd0aCA9PT0gMSkge1xyXG5cclxuICAgICAgICAvLyBWZXJpZmljYSBzZSBvIG3DqXRvZG8gZGEgYcOnw6NvIG5lY2Vzc2l0YSBkZSBhdXRlbnRpY2HDp8Ojby5cclxuICAgICAgICBmb3IobGV0IG1ldGhvZEF1eCBvZiB1cmxzLmdldCh1cmxUb1ZlcmlmeSkhKSB7XHJcbiAgICAgICAgICBtZXRob2RBdXggPSBtZXRob2RBdXgucmVwbGFjZShcIipcIiwgXCIuKlwiKTtcclxuXHJcbiAgICAgICAgICBsZXQgcmVnZXhNYXRjaGVkTWV0aG9kOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IG1ldGhvZC5tYXRjaChtZXRob2RBdXgpO1xyXG5cclxuICAgICAgICAgIGlmIChyZWdleE1hdGNoZWRNZXRob2QgJiYgcmVnZXhNYXRjaGVkTWV0aG9kLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEluc2VyZSBjYXJhY3RlcmVzIGRlIGVzY2FwZSBlbSBwYWxhdnJhcyBjaGF2ZXMgZGUgdW0gcmVnZXguXHJcbiAgICpcclxuICAgKiBwZWdvIGRlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM0NDYxNzAvZXNjYXBlLXN0cmluZy1mb3ItdXNlLWluLWphdmFzY3JpcHQtcmVnZXhcclxuICAgKlxyXG4gICAqIEBwYXJhbSB1bnNhbml0aXplZFN0cmluZyBTdHJpbmcgYSBzZXIgXCJsaW1wYWRhXCIuXHJcbiAgICogQHJldHVybnMgU3RyaW5nIGxpbXBhIHBhcmEgdXNvIGVtIHJlZ2V4LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2FuaXRpemVGb3JSZWdleCh1bnNhbml0aXplZFN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB1bnNhbml0aXplZFN0cmluZy5yZXBsYWNlKC9bLis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7IC8vICQmIG1lYW5zIHRoZSB3aG9sZSBtYXRjaGVkIHN0cmluZ1xyXG4gIH1cclxuXHJcbn1cclxuIl19
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stdXJsLWFuZC1tZXRob2Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3V0aWxzL2NoZWNrLXVybC1hbmQtbWV0aG9kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7Ozs7R0FJRztBQUlILE1BQU0sT0FBTyx3QkFBd0I7SUFFbkMsZ0JBQWdCLENBQUM7SUFFakI7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxnQkFBZ0IsQ0FBQyxHQUFXLEVBQUUsTUFBYyxFQUFFLElBQTJCO1FBQ3ZFLHNEQUFzRDtRQUN0RCxJQUFJLGVBQWUsR0FBRyxHQUFHLENBQUM7UUFFMUIsMkNBQTJDO1FBQzNDLElBQUksV0FBVyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVyRSxJQUFJLFdBQVcsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN4QixlQUFlLElBQUksR0FBRyxDQUFDO1FBQ3pCLENBQUM7UUFFRCxJQUFJLFlBQVksR0FBNkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXpELEtBQUksSUFBSSxXQUFXLElBQUksWUFBWSxFQUFFLENBQUM7WUFDcEMsSUFBSSxXQUFXLEdBQVcsR0FBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFFLEVBQUUsQ0FBQztZQUVwRSx1RkFBdUY7WUFDdkYsV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTdDLElBQUksVUFBVSxHQUE2QixlQUFlLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTlFLG9GQUFvRjtZQUNwRixJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUUxQywwREFBMEQ7Z0JBQzFELEtBQUksSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUUsRUFBRSxDQUFDO29CQUM1QyxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBRXpDLElBQUksa0JBQWtCLEdBQTRCLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRTFFLElBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUMxRCxPQUFPLElBQUksQ0FBQztvQkFDZCxDQUFDO2dCQUVILENBQUM7WUFFSCxDQUFDO1FBRUgsQ0FBQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNLLGdCQUFnQixDQUFDLGlCQUF5QjtRQUNoRCxPQUFPLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLG9DQUFvQztJQUN0RyxDQUFDOytHQXZFVSx3QkFBd0I7bUhBQXhCLHdCQUF3QixjQUZyQixNQUFNOzs0RkFFVCx3QkFBd0I7a0JBSHBDLFVBQVU7bUJBQ1QsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIEF1eGlsaWEgbmEgaW5qZcOnw6NvIGRlIGRhZG9zIGRlIGF1dGVudGljYcOnw6NvIGVtIGVuZHBvaW50cyBxdWUgbmVjZXNzaXRhbSBkZSB0YWwgYcOnw6NvLlxuICovXG5ASW5qZWN0YWJsZShcbiAgeyBwcm92aWRlZEluOiAncm9vdCcgfVxuKVxuZXhwb3J0IGNsYXNzIENoZWNrVXJsQW5kTWV0aG9kU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqXG4gICAqIFZlcmlmaWNhIHNlIGEgdXJsIGRhIHJlcXVpc2nDp8OjbyBwcmVjaXNhIG91IG7Do28gc2VyIGF1dGVudGljYWRhLlxuICAgKlxuICAgKiDDiSB1dGlsaXphZG8gUkVHRVggcGFyYSBhIGZvcm1hdGHDp8Ojby5cbiAgICpcbiAgICogQHBhcmFtIHVybCBVUkwgZGEgcmVxdWlzacOnw6NvIHF1ZSBlc3TDoSBzZW5kbyBlbnZpYWRhIG91IHF1ZSBmb2kgcmVjZWJpZGEuXG4gICAqIEBwYXJhbSBtZXRob2QgTcOpdG9kbyBkYSByZXF1aXNpw6fDo28uXG4gICAqIEBwYXJhbSB1cmxzIFVybHMgZSBtw6l0b2RvcyBhdHJlbGFkb3MgYW9zIGVuZHBvaW50cy5cbiAgICogQHJldHVybnMgVmVyZGFkZWlybyBzZSBkZXZlIHNlciBhdXRlbnRpY2FkbyBlIGZhbHNvIHNlIG7Do28gZGV2ZS5cbiAgICovXG4gIG5lZWRzQXV0aFJlcXVlc3QodXJsOiBzdHJpbmcsIG1ldGhvZDogc3RyaW5nLCB1cmxzOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT4pOiBib29sZWFuIHtcbiAgICAvLyBBZGljaW9uYSBhIFVSTCB1bWEgYmFycmEgbm8gZmluYWwgcGFyYSBmYXplciBtYXRjaC5cbiAgICBsZXQgdXJsVG9CZVZlcmlmaWVkID0gdXJsO1xuICAgIFxuICAgIC8vIFRPRE86IFJlbW92ZXIgcmVkdW5kw6JuY2lhIGRlIC8gbmFzIFVSTHMuXG4gICAgbGV0IGxhc3RVcmxDaGFyID0gdXJsVG9CZVZlcmlmaWVkLmNoYXJBdCh1cmxUb0JlVmVyaWZpZWQubGVuZ3RoIC0gMSk7XG5cbiAgICBpZiAobGFzdFVybENoYXIgIT09IFwiL1wiKSB7XG4gICAgICB1cmxUb0JlVmVyaWZpZWQgKz0gXCIvXCI7XG4gICAgfVxuXG4gICAgbGV0IHVybHNUb1ZlcmlmeTogSXRlcmFibGVJdGVyYXRvcjxzdHJpbmc+ID0gdXJscy5rZXlzKCk7XG5cbiAgICBmb3IobGV0IHVybFRvVmVyaWZ5IG9mIHVybHNUb1ZlcmlmeSkge1xuICAgICAgbGV0IHJlZ2V4U3RyaW5nOiBzdHJpbmcgPSBgJHsgdGhpcy5zYW5pdGl6ZUZvclJlZ2V4KHVybFRvVmVyaWZ5KSB9YDtcblxuICAgICAgLy8gRmF6IGNvbSBxdWUgbyBjYXJhY3RlcmUgKiBmaXF1ZSBjb20gdW0gcG9udG8gcGFyYSBwZWdhciBxdWFscXVlciBjYXJhY3RlcmUgbm8gcmVnZXguXG4gICAgICByZWdleFN0cmluZyA9IHJlZ2V4U3RyaW5nLnJlcGxhY2UoXCIqXCIsIFwiLipcIik7XG5cbiAgICAgIGxldCByZWdleE1hdGNoOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9ICB1cmxUb0JlVmVyaWZpZWQubWF0Y2gocmVnZXhTdHJpbmcpO1xuXG4gICAgICAvLyBWZXJpZmljYSBzZSBhIHVybCBkYSBtYXRjaCBubyByZWdleCBjb25zdHJ1w61kbyBhIHBhcnRpciBkYSB1cmwgYSBzZXIgYXV0ZW50aWNhZGEuXG4gICAgICBpZiAocmVnZXhNYXRjaCAmJiByZWdleE1hdGNoLmxlbmd0aCA9PT0gMSkge1xuXG4gICAgICAgIC8vIFZlcmlmaWNhIHNlIG8gbcOpdG9kbyBkYSBhw6fDo28gbmVjZXNzaXRhIGRlIGF1dGVudGljYcOnw6NvLlxuICAgICAgICBmb3IobGV0IG1ldGhvZEF1eCBvZiB1cmxzLmdldCh1cmxUb1ZlcmlmeSkhKSB7XG4gICAgICAgICAgbWV0aG9kQXV4ID0gbWV0aG9kQXV4LnJlcGxhY2UoXCIqXCIsIFwiLipcIik7XG5cbiAgICAgICAgICBsZXQgcmVnZXhNYXRjaGVkTWV0aG9kOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IG1ldGhvZC5tYXRjaChtZXRob2RBdXgpO1xuXG4gICAgICAgICAgaWYgKHJlZ2V4TWF0Y2hlZE1ldGhvZCAmJiByZWdleE1hdGNoZWRNZXRob2QubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqXG4gICAqIEluc2VyZSBjYXJhY3RlcmVzIGRlIGVzY2FwZSBlbSBwYWxhdnJhcyBjaGF2ZXMgZGUgdW0gcmVnZXguXG4gICAqXG4gICAqIHBlZ28gZGUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzQ0NjE3MC9lc2NhcGUtc3RyaW5nLWZvci11c2UtaW4tamF2YXNjcmlwdC1yZWdleFxuICAgKlxuICAgKiBAcGFyYW0gdW5zYW5pdGl6ZWRTdHJpbmcgU3RyaW5nIGEgc2VyIFwibGltcGFkYVwiLlxuICAgKiBAcmV0dXJucyBTdHJpbmcgbGltcGEgcGFyYSB1c28gZW0gcmVnZXguXG4gICAqL1xuICBwcml2YXRlIHNhbml0aXplRm9yUmVnZXgodW5zYW5pdGl6ZWRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHVuc2FuaXRpemVkU3RyaW5nLnJlcGxhY2UoL1suKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTsgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXG4gIH1cblxufVxuIl19
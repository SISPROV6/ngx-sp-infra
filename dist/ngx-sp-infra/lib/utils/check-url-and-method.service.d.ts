import * as i0 from "@angular/core";
/**
 * @description
 *
 * Auxilia na injeção de dados de autenticação em endpoints que necessitam de tal ação.
 */
export declare class CheckUrlAndMethodService {
    constructor();
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
    needsAuthRequest(url: string, method: string, urls: Map<string, string[]>): boolean;
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
    private sanitizeForRegex;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckUrlAndMethodService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CheckUrlAndMethodService>;
}
//# sourceMappingURL=check-url-and-method.service.d.ts.map
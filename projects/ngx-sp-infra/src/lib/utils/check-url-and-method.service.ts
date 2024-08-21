import { Injectable } from '@angular/core';

/**
 * @description
 *
 * Auxilia na injeção de dados de autenticação em endpoints que necessitam de tal ação.
 */
@Injectable(
  { providedIn: 'root' }
)
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
  needsAuthRequest(url: string, method: string, urls: Map<string, string[]>): boolean {
    // Adiciona a URL uma barra no final para fazer match.
    let urlToBeVerified = url;
    
    // TODO: Remover redundância de / nas URLs.
    let lastUrlChar = urlToBeVerified.charAt(urlToBeVerified.length - 1);

    if (lastUrlChar !== "/") {
      urlToBeVerified += "/";
    }

    let urlsToVerify: IterableIterator<string> = urls.keys();

    for(let urlToVerify of urlsToVerify) {
      let regexString: string = `${ this.sanitizeForRegex(urlToVerify) }`;

      // Faz com que o caractere * fique com um ponto para pegar qualquer caractere no regex.
      regexString = regexString.replace("*", ".*");

      let regexMatch: RegExpMatchArray | null =  urlToBeVerified.match(regexString);

      // Verifica se a url da match no regex construído a partir da url a ser autenticada.
      if (regexMatch && regexMatch.length === 1) {

        // Verifica se o método da ação necessita de autenticação.
        for(let methodAux of urls.get(urlToVerify)!) {
          methodAux = methodAux.replace("*", ".*");

          let regexMatchedMethod: RegExpMatchArray | null = method.match(methodAux);

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
  private sanitizeForRegex(unsanitizedString: string): string {
    return unsanitizedString.replace(/[.+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

}

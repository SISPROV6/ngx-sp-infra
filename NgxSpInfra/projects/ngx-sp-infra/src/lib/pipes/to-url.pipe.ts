import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

/**
 * @description
 * Transforma um Blob ou MediaSource em uma URL para ser utilizada em imagens.
 * 
 * Ela aceita valors não definidos em casos onde o valor vai ser trazido em outro momento.
 */
@Pipe(
  { name: 'toUrl' }
)
export class ToUrlPipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  transform(value: Blob | MediaSource | undefined, ...args: unknown[]): SafeUrl {

    if (value) {
      let url: string = URL.createObjectURL(value);
      // Devemos dizer que a URL passada é segura e pode ser usada.
      // Se não limpada a url vai estar da seguinte forma: [unsafe][blob] ao invés de [blob]
      let safeUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
      return safeUrl;
    }

    // Se não estiver definida, retorna nada.
    return "";
  }

}

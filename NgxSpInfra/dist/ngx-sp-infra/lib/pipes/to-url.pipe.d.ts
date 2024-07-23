import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import * as i0 from "@angular/core";
/**
 * @description
 * Transforma um Blob ou MediaSource em uma URL para ser utilizada em imagens.
 *
 * Ela aceita valors não definidos em casos onde o valor vai ser trazido em outro momento.
 */
export declare class ToUrlPipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(value: Blob | MediaSource | undefined, ...args: unknown[]): SafeUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToUrlPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ToUrlPipe, "toUrl", false>;
}

import { AbstractControl } from '@angular/forms';
import { OnInit, ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FieldErrorMessageComponent implements OnInit {
    private _renderer;
    private _elementRef;
    customErrorMessage: string;
    control: AbstractControl | null;
    label: string;
    constructor(_renderer: Renderer2, _elementRef: ElementRef);
    get errorMessage(): string | null;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldErrorMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FieldErrorMessageComponent, "app-field-error-message", never, { "customErrorMessage": { "alias": "customMessage"; "required": false; }; "control": { "alias": "control"; "required": false; }; "label": { "alias": "label"; "required": false; }; }, {}, never, never, false, never>;
}

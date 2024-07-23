import { AbstractControl } from '@angular/forms';
import { OnInit, ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FieldErrorMessageComponent implements OnInit {
    private renderer;
    private elementRef;
    control: AbstractControl | null;
    label: string;
    get errorMessage(): string | null;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldErrorMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FieldErrorMessageComponent, "app-field-error-message", never, { "control": { "alias": "control"; "required": false; }; "label": { "alias": "label"; "required": false; }; }, {}, never, never, false, never>;
}

import { OnInit, ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FieldControlErrorComponent implements OnInit {
    private renderer;
    private elementRef;
    showError: boolean;
    errorMessage: string;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldControlErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FieldControlErrorComponent, "app-field-control-error", never, { "showError": { "alias": "showError"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; }, {}, never, never, false, never>;
}

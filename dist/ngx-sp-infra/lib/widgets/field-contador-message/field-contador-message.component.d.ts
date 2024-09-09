import { OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class FieldContadorMessageComponent implements OnInit {
    control: AbstractControl | null;
    maximo: number;
    cont: number;
    mensagem: string;
    mensagemExcedida: boolean;
    ngOnInit(): void;
    updateMessage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldContadorMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FieldContadorMessageComponent, "lib-field-contador-message", never, { "control": { "alias": "control"; "required": false; }; "maximo": { "alias": "maximo"; "required": false; }; }, {}, never, never, false, never>;
}

import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LibSpinnerComponent implements OnInit, OnChanges {
    protected size?: string;
    /** Tipo do spinner
     * @alias "type"
     * @default "border" */
    spinnerType: "border" | "grow";
    /** Tema de cor do spinner
     * @alias "theme" */
    spinnerTheme: "primary" | "secondary" | "success" | "danger" | "warning";
    /** Tamanho do spinner (Padrão ou pequeno)
     * @alias "size"
     * @default "default" */
    spinnerSize: "default" | "small";
    /** Texto de ajuda, será exibido no hover em cima do spinner
     * @alias "text"
     * @default "Carregando informações..." */
    helperText: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LibSpinnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LibSpinnerComponent, "lib-spinner", never, { "spinnerType": { "alias": "type"; "required": false; }; "spinnerTheme": { "alias": "theme"; "required": false; }; "spinnerSize": { "alias": "size"; "required": false; }; "helperText": { "alias": "text"; "required": false; }; }, {}, never, never, false, never>;
}

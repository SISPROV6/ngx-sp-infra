import { OnInit, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import * as i0 from "@angular/core";
export declare class ConfirmComponent implements OnInit {
    bsModalRef: BsModalRef;
    title: string;
    message: string;
    cancelText: string;
    okText: string;
    okButton: Function;
    parametroOkButton: boolean;
    clickButton: EventEmitter<"confirmado" | "cancelado">;
    confirmResult: Subject<'confirmado' | 'cancelado'>;
    constructor(bsModalRef: BsModalRef);
    ngOnInit(): void;
    confirm(): void;
    closeConfirm(): void;
    private confirmAndClose;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmComponent, "app-confirm", never, { "title": { "alias": "title"; "required": false; }; "message": { "alias": "message"; "required": false; }; "cancelText": { "alias": "cancelText"; "required": false; }; "okText": { "alias": "okText"; "required": false; }; "okButton": { "alias": "okButton"; "required": false; }; "parametroOkButton": { "alias": "parametroOkButton"; "required": false; }; }, { "clickButton": "clickButton"; }, never, never, false, never>;
}
//# sourceMappingURL=confirm.component.d.ts.map
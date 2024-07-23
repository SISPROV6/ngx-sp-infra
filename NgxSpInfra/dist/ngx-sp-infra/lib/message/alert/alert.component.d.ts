import { OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { alertTypes } from '../message-enum';
import * as i0 from "@angular/core";
export declare class AlertComponent implements OnInit {
    _bsModalRef: BsModalRef;
    message: string;
    type: alertTypes;
    constructor(_bsModalRef: BsModalRef);
    ngOnInit(): void;
    closeAlert(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "app-alert", never, { "message": { "alias": "message"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, never, false, never>;
}

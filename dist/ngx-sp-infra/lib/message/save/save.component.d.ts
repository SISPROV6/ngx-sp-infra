import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import * as i0 from "@angular/core";
export declare class SaveComponent implements OnInit {
    bsModalRef: BsModalRef;
    title: string;
    message: string;
    cancelText: string;
    okText: string;
    okButton: Function;
    fields: string[];
    confirmResult: Subject<boolean>;
    constructor(bsModalRef: BsModalRef);
    ngOnInit(): void;
    confirm(): void;
    closeConfirm(): void;
    private confirmAndClose;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaveComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaveComponent, "app-save", never, { "title": { "alias": "title"; "required": false; }; "message": { "alias": "message"; "required": false; }; "cancelText": { "alias": "cancelText"; "required": false; }; "okText": { "alias": "okText"; "required": false; }; "okButton": { "alias": "okButton"; "required": false; }; "fields": { "alias": "fields"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=save.component.d.ts.map
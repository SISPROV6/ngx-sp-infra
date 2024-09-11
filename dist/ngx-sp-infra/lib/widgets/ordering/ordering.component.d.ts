import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class OrderingComponent implements OnInit {
    isColumnClicked: boolean;
    sortDirection: string;
    sortAttributes: string | string[];
    sortDirectionChange: EventEmitter<string>;
    sortChange: EventEmitter<{
        direction: string;
        column: string | string[];
    }>;
    sort(): void;
    getSvgColor(): string;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrderingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OrderingComponent, "app-ordering", never, { "isColumnClicked": { "alias": "isColumnClicked"; "required": false; }; "sortDirection": { "alias": "sortDirection"; "required": false; }; "sortAttributes": { "alias": "sortAttributes"; "required": false; }; }, { "sortDirectionChange": "sortDirectionChange"; "sortChange": "sortChange"; }, never, never, false, never>;
}
//# sourceMappingURL=ordering.component.d.ts.map
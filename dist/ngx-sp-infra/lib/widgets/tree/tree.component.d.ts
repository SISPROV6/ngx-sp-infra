import { EventEmitter, OnInit } from "@angular/core";
import { TreeItem } from "./models/tree-item";
import * as i0 from "@angular/core";
export declare class TreeComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    items: TreeItem[] | any;
    checkbox: boolean;
    filter: boolean;
    onSelect: EventEmitter<boolean>;
    onEvent: EventEmitter<boolean>;
    checked: (item: TreeItem) => boolean;
    search: string;
    onExpand(item: TreeItem): void;
    onCheck(items: TreeItem[], item: TreeItem): void;
    onCheckEvent(items: TreeItem[]): void;
    private indeterminateCheck;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeComponent, "app-tree", never, { "items": { "alias": "items"; "required": false; }; "checkbox": { "alias": "checkbox"; "required": false; }; "filter": { "alias": "filter"; "required": false; }; }, { "onSelect": "onSelect"; "onEvent": "onEvent"; }, never, never, false, never>;
}

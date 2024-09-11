import { OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ContentContainerComponent implements OnInit, OnChanges {
    private _currentTab;
    navTabsList?: string[];
    containerTitle?: string;
    onChangeTab: EventEmitter<string>;
    currentContent: number;
    get currentTab(): string;
    set currentTab(value: string);
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContentContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContentContainerComponent, "lib-container", never, { "navTabsList": { "alias": "tabs"; "required": false; }; "containerTitle": { "alias": "containerTitle"; "required": false; }; }, { "onChangeTab": "onChangeTab"; }, never, ["[innerContent1]", "[innerContent2]", "[innerContent3]", "[innerContent4]", "[innerContent5]", "[innerContent6]", "[innerContent7]", "[innerContent8]", "[innerContent9]", "[innerContent10]", "[innerContent]"], false, never>;
}
//# sourceMappingURL=content-container.component.d.ts.map
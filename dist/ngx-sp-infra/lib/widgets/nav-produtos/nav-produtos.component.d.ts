import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class NavProdutosComponent implements OnInit {
    private router;
    navItems: {
        caminho: string;
        label: string;
    }[];
    activeItem: string;
    constructor(router: Router);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavProdutosComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavProdutosComponent, "lib-nav-produtos", never, { "navItems": { "alias": "navItems"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=nav-produtos.component.d.ts.map
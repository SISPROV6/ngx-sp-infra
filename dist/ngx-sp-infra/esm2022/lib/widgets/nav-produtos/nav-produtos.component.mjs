import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
function NavProdutosComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 2)(1, "a", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r1.activeItem == item_r1.caminho);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", item_r1.caminho);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1.label);
} }
export class NavProdutosComponent {
    constructor(router) {
        this.router = router;
        this.navItems = [];
        this.activeItem = '';
    }
    ngOnInit() {
        this.activeItem = this.router.url;
    }
    static { this.ɵfac = function NavProdutosComponent_Factory(t) { return new (t || NavProdutosComponent)(i0.ɵɵdirectiveInject(i1.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavProdutosComponent, selectors: [["lib-nav-produtos"]], inputs: { navItems: "navItems" }, decls: 2, vars: 1, consts: [[1, "menu"], ["class", "menu-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "menu-item"], ["target", "_blank", 3, "routerLink"]], template: function NavProdutosComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 0);
            i0.ɵɵtemplate(1, NavProdutosComponent_li_1_Template, 3, 4, "li", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.navItems);
        } }, dependencies: [i2.NgForOf, i1.RouterLink], styles: [".menu[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;display:flex;gap:20px}.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:center;position:relative;display:inline-block;padding-bottom:5px;color:#c7c7c7;text-decoration:none;border-bottom:2px solid #c7c7c7;transition:color .3s ease,border-bottom-color .3s ease;width:calc(100% + 15px)}.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#3e5154;border-bottom:2px solid #2847A0}.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:\"\";position:absolute;bottom:-2px;left:50%;transform:translate(-50%);width:calc(100% + 5px);height:2px;background-color:#2847a0}.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3e5154}.menu-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:\"\";position:absolute;bottom:0;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #2847A0;opacity:1;transition:all .2s ease-in-out}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavProdutosComponent, [{
        type: Component,
        args: [{ selector: 'lib-nav-produtos', standalone: false, template: `

    <ul class="menu">
      <li class="menu-item"
        *ngFor="let item of navItems"
        [class.active]="activeItem == item.caminho"
        >
        <!-- {{activeItem}}{{'mais' + item.caminho}} -->
        <a [routerLink]="item.caminho" target="_blank">{{ item.label }}</a>
        <!-- <a [href]="item.caminho" target="_blank">{{ item.label }}</a> -->
      </li>
    </ul>

  `, styles: [".menu{list-style:none;padding:0;margin:0;display:flex;gap:20px}.menu-item a{text-align:center;position:relative;display:inline-block;padding-bottom:5px;color:#c7c7c7;text-decoration:none;border-bottom:2px solid #c7c7c7;transition:color .3s ease,border-bottom-color .3s ease;width:calc(100% + 15px)}.menu-item a:hover{color:#3e5154;border-bottom:2px solid #2847A0}.menu-item.active a:after{content:\"\";position:absolute;bottom:-2px;left:50%;transform:translate(-50%);width:calc(100% + 5px);height:2px;background-color:#2847a0}.menu-item.active a{color:#3e5154}.menu-item.active a:before{content:\"\";position:absolute;bottom:0;left:50%;transform:translate(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #2847A0;opacity:1;transition:all .2s ease-in-out}\n"] }]
    }], () => [{ type: i1.Router }], { navItems: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavProdutosComponent, { className: "NavProdutosComponent", filePath: "lib\\widgets\\nav-produtos\\nav-produtos.component.ts", lineNumber: 23 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LXByb2R1dG9zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvbmF2LXByb2R1dG9zL25hdi1wcm9kdXRvcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7O0lBY2pELEFBTEYsNkJBR0csV0FFOEM7SUFBQSxZQUFnQjtJQUVqRSxBQUZpRSxpQkFBSSxFQUVoRTs7OztJQUxILDhEQUEyQztJQUd4QyxjQUEyQjtJQUEzQiw0Q0FBMkI7SUFBaUIsY0FBZ0I7SUFBaEIsbUNBQWdCOztBQVF2RSxNQUFNLE9BQU8sb0JBQW9CO0lBTS9CLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSnpCLGFBQVEsR0FBeUMsRUFBRSxDQUFDO1FBRTdELGVBQVUsR0FBVyxFQUFFLENBQUM7SUFFYSxDQUFDO0lBRXRDLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3BDLENBQUM7cUZBVlUsb0JBQW9CO29FQUFwQixvQkFBb0I7WUFkN0IsNkJBQWlCO1lBQ2YsbUVBR0c7WUFLTCxpQkFBSzs7WUFQZ0IsY0FBVztZQUFYLHNDQUFXOzs7aUZBWXZCLG9CQUFvQjtjQW5CaEMsU0FBUzsyQkFDRSxrQkFBa0IsY0FDaEIsS0FBSyxZQUNQOzs7Ozs7Ozs7Ozs7O0dBYVQ7dUNBS1EsUUFBUTtrQkFBaEIsS0FBSzs7a0ZBRkssb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1uYXYtcHJvZHV0b3MnLFxyXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxyXG4gIHRlbXBsYXRlOiBgXHJcblxyXG4gICAgPHVsIGNsYXNzPVwibWVudVwiPlxyXG4gICAgICA8bGkgY2xhc3M9XCJtZW51LWl0ZW1cIlxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIG5hdkl0ZW1zXCJcclxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZUl0ZW0gPT0gaXRlbS5jYW1pbmhvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPCEtLSB7e2FjdGl2ZUl0ZW19fXt7J21haXMnICsgaXRlbS5jYW1pbmhvfX0gLS0+XHJcbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiaXRlbS5jYW1pbmhvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgaXRlbS5sYWJlbCB9fTwvYT5cclxuICAgICAgICA8IS0tIDxhIFtocmVmXT1cIml0ZW0uY2FtaW5ob1wiIHRhcmdldD1cIl9ibGFua1wiPnt7IGl0ZW0ubGFiZWwgfX08L2E+IC0tPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuXHJcbiAgYCxcclxuICBzdHlsZVVybHM6IFsnLi9uYXYtcHJvZHV0b3MuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZQcm9kdXRvc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIG5hdkl0ZW1zOiB7IGNhbWluaG86IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W10gPSBbXTtcclxuXHJcbiAgYWN0aXZlSXRlbTogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5yb3V0ZXIudXJsO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
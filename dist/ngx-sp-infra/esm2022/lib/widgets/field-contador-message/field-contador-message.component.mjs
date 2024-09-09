import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class FieldContadorMessageComponent {
    constructor() {
        this.control = null;
        this.cont = 0;
        this.mensagem = '';
        this.mensagemExcedida = false;
    }
    ngOnInit() {
        if (this.control) {
            this.control.valueChanges.subscribe(value => {
                this.cont = value ? value.length : 0;
                this.updateMessage();
            });
        }
    }
    updateMessage() {
        if (this.cont > this.maximo) {
            this.mensagem = `Limite de caracteres excedido. (${this.cont}/${this.maximo})`;
            this.mensagemExcedida = true;
            if (this.control) {
                this.control.setErrors({ maxLengthExceeded: true });
            }
        }
        else {
            this.mensagem = `Limite de caracteres: ${this.cont}/${this.maximo}`;
            this.mensagemExcedida = false;
            if (this.control) {
                this.control.setErrors(null);
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FieldContadorMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: FieldContadorMessageComponent, selector: "lib-field-contador-message", inputs: { control: "control", maximo: "maximo" }, ngImport: i0, template: "<div\r\n  [class.text-danger]=\"mensagemExcedida\"\r\n  [class.text-muted]=\"!mensagemExcedida\"\r\n  class=\"text-end\">\r\n  {{ mensagem }}\r\n</div>\r\n", styles: [".text-danger{color:red}.text-muted{color:#6c757d}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FieldContadorMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-field-contador-message', standalone: false, template: "<div\r\n  [class.text-danger]=\"mensagemExcedida\"\r\n  [class.text-muted]=\"!mensagemExcedida\"\r\n  class=\"text-end\">\r\n  {{ mensagem }}\r\n</div>\r\n", styles: [".text-danger{color:red}.text-muted{color:#6c757d}\n"] }]
        }], propDecorators: { control: [{
                type: Input
            }], maximo: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29udGFkb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWNvbnRhZG9yLW1lc3NhZ2UvZmllbGQtY29udGFkb3ItbWVzc2FnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWNvbnRhZG9yLW1lc3NhZ2UvZmllbGQtY29udGFkb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFVekQsTUFBTSxPQUFPLDZCQUE2QjtJQU4xQztRQVFXLFlBQU8sR0FBMkIsSUFBSSxDQUFDO1FBRWhELFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7S0E0Qm5DO0lBekJDLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQ0FBbUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDL0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3RELENBQUM7UUFDSCxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcseUJBQXlCLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQzsrR0FoQ1UsNkJBQTZCO21HQUE3Qiw2QkFBNkIsb0hDVjFDLDZKQU1BOzs0RkRJYSw2QkFBNkI7a0JBTnpDLFNBQVM7K0JBQ0UsNEJBQTRCLGNBQzFCLEtBQUs7OEJBTVIsT0FBTztzQkFBZixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZmllbGQtY29udGFkb3ItbWVzc2FnZScsXHJcbiAgc3RhbmRhbG9uZTogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpZWxkLWNvbnRhZG9yLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpZWxkLWNvbnRhZG9yLW1lc3NhZ2UuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWVsZENvbnRhZG9yTWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG1heGltbyE6IG51bWJlcjtcclxuICBjb250OiBudW1iZXIgPSAwO1xyXG4gIG1lbnNhZ2VtOiBzdHJpbmcgPSAnJztcclxuICBtZW5zYWdlbUV4Y2VkaWRhOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcclxuICAgICAgdGhpcy5jb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICAgIHRoaXMuY29udCA9IHZhbHVlID8gdmFsdWUubGVuZ3RoIDogMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVNZXNzYWdlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY29udCA+IHRoaXMubWF4aW1vKSB7XHJcbiAgICAgIHRoaXMubWVuc2FnZW0gPSBgTGltaXRlIGRlIGNhcmFjdGVyZXMgZXhjZWRpZG8uICgke3RoaXMuY29udH0vJHt0aGlzLm1heGltb30pYDtcclxuICAgICAgdGhpcy5tZW5zYWdlbUV4Y2VkaWRhID0gdHJ1ZTtcclxuICAgICAgaWYgKHRoaXMuY29udHJvbCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbC5zZXRFcnJvcnMoeyBtYXhMZW5ndGhFeGNlZWRlZDogdHJ1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tZW5zYWdlbSA9IGBMaW1pdGUgZGUgY2FyYWN0ZXJlczogJHt0aGlzLmNvbnR9LyR7dGhpcy5tYXhpbW99YDtcclxuICAgICAgdGhpcy5tZW5zYWdlbUV4Y2VkaWRhID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2wuc2V0RXJyb3JzKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2XHJcbiAgW2NsYXNzLnRleHQtZGFuZ2VyXT1cIm1lbnNhZ2VtRXhjZWRpZGFcIlxyXG4gIFtjbGFzcy50ZXh0LW11dGVkXT1cIiFtZW5zYWdlbUV4Y2VkaWRhXCJcclxuICBjbGFzcz1cInRleHQtZW5kXCI+XHJcbiAge3sgbWVuc2FnZW0gfX1cclxuPC9kaXY+XHJcbiJdfQ==
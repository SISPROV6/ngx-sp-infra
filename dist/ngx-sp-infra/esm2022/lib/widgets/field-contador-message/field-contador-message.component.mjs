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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: FieldContadorMessageComponent, selector: "lib-field-contador-message", inputs: { control: "control", maximo: "maximo" }, ngImport: i0, template: "<div\n  [class.text-danger]=\"mensagemExcedida\"\n  [class.text-muted]=\"!mensagemExcedida\"\n  class=\"text-end\">\n  {{ mensagem }}\n</div>\n", styles: [".text-danger{color:red}.text-muted{color:#6c757d}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FieldContadorMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-field-contador-message', standalone: false, template: "<div\n  [class.text-danger]=\"mensagemExcedida\"\n  [class.text-muted]=\"!mensagemExcedida\"\n  class=\"text-end\">\n  {{ mensagem }}\n</div>\n", styles: [".text-danger{color:red}.text-muted{color:#6c757d}\n"] }]
        }], propDecorators: { control: [{
                type: Input
            }], maximo: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29udGFkb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWNvbnRhZG9yLW1lc3NhZ2UvZmllbGQtY29udGFkb3ItbWVzc2FnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2ZpZWxkLWNvbnRhZG9yLW1lc3NhZ2UvZmllbGQtY29udGFkb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFVekQsTUFBTSxPQUFPLDZCQUE2QjtJQU4xQztRQVFXLFlBQU8sR0FBMkIsSUFBSSxDQUFDO1FBRWhELFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7S0E0Qm5DO0lBekJDLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQ0FBbUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDL0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3RELENBQUM7UUFDSCxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcseUJBQXlCLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQzsrR0FoQ1UsNkJBQTZCO21HQUE3Qiw2QkFBNkIsb0hDVjFDLGlKQU1BOzs0RkRJYSw2QkFBNkI7a0JBTnpDLFNBQVM7K0JBQ0UsNEJBQTRCLGNBQzFCLEtBQUs7OEJBTVIsT0FBTztzQkFBZixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1maWVsZC1jb250YWRvci1tZXNzYWdlJyxcbiAgc3RhbmRhbG9uZTogZmFsc2UsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWVsZC1jb250YWRvci1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmllbGQtY29udGFkb3ItbWVzc2FnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmllbGRDb250YWRvck1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtYXhpbW8hOiBudW1iZXI7XG4gIGNvbnQ6IG51bWJlciA9IDA7XG4gIG1lbnNhZ2VtOiBzdHJpbmcgPSAnJztcbiAgbWVuc2FnZW1FeGNlZGlkYTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbCkge1xuICAgICAgdGhpcy5jb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICB0aGlzLmNvbnQgPSB2YWx1ZSA/IHZhbHVlLmxlbmd0aCA6IDA7XG4gICAgICAgIHRoaXMudXBkYXRlTWVzc2FnZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTWVzc2FnZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb250ID4gdGhpcy5tYXhpbW8pIHtcbiAgICAgIHRoaXMubWVuc2FnZW0gPSBgTGltaXRlIGRlIGNhcmFjdGVyZXMgZXhjZWRpZG8uICgke3RoaXMuY29udH0vJHt0aGlzLm1heGltb30pYDtcbiAgICAgIHRoaXMubWVuc2FnZW1FeGNlZGlkYSA9IHRydWU7XG4gICAgICBpZiAodGhpcy5jb250cm9sKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5zZXRFcnJvcnMoeyBtYXhMZW5ndGhFeGNlZWRlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZW5zYWdlbSA9IGBMaW1pdGUgZGUgY2FyYWN0ZXJlczogJHt0aGlzLmNvbnR9LyR7dGhpcy5tYXhpbW99YDtcbiAgICAgIHRoaXMubWVuc2FnZW1FeGNlZGlkYSA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuY29udHJvbCkge1xuICAgICAgICB0aGlzLmNvbnRyb2wuc2V0RXJyb3JzKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iLCI8ZGl2XG4gIFtjbGFzcy50ZXh0LWRhbmdlcl09XCJtZW5zYWdlbUV4Y2VkaWRhXCJcbiAgW2NsYXNzLnRleHQtbXV0ZWRdPVwiIW1lbnNhZ2VtRXhjZWRpZGFcIlxuICBjbGFzcz1cInRleHQtZW5kXCI+XG4gIHt7IG1lbnNhZ2VtIH19XG48L2Rpdj5cbiJdfQ==
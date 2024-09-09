import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertComponent } from './message/alert/alert.component';
import { ConfirmComponent } from './message/confirm/confirm.component';
import { ConfirmModalComponent } from './message/confirm-modal/confirm-modal.component';
import { SaveComponent } from './message/save/save.component';
import { InfraBreadcrumbItemComponent } from './widgets/breadcrumb/infra-breadcrumb-item/infra-breadcrumb-item.component';
import { InfraBreadcrumbComponent } from './widgets/breadcrumb/infra-breadcrumb/infra-breadcrumb.component';
import { BreadcrumbComponent } from './widgets/breadcrumb/portalrh-breadcrumb/breadcrumb.component';
import { ComboboxComponent } from './widgets/combobox/combobox.component';
import { FieldControlErrorComponent } from './widgets/field-control-error/field-control-error.component';
import { FieldErrorMessageComponent } from './widgets/field-error-message/field-error-message.component';
import { LoadingButtonComponent } from './widgets/loading-button/loading-button.component';
import { LoadingComponent } from './widgets/loading/loading.component';
import { TreeComponent } from './widgets/tree/tree.component';
import { SvgStorageComponent } from './widgets/svg-storage/svg-storage.component';
import { ToUrlPipe } from './pipes/to-url.pipe';
import { CpfCnpjPipe } from './pipes/cpf-cnpj.pipe';
import { FilterByPipe } from './widgets/combobox/pipes/filter-by.pipe';
import { LimitToPipe } from './widgets/combobox/pipes/limit-to.pipe';
import { SearchTreePipe } from './widgets/tree/pipes/search-tree.pipe';
import { ClickOutsideDirective } from './widgets/click-outside/clickoutside.directive';
import { OrderingComponent } from './widgets/ordering/ordering.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SearchComboboxComponent } from './widgets/search-combobox/search-combobox.component';
import { RequiredDirective } from './directives/required.directive';
import { SimpleHeaderComponent } from './widgets/simple-header/simple-header.component';
import { LibIconsComponent } from './widgets/lib-icons/lib-icons.component';
import { TextFilterPipe } from './pipes/text-filter.pipe';
import { ContentContainerComponent } from './widgets/content-container/content-container.component';
import { CopyClipboardDirective } from './directives/copy-clipboard.directive';
import { TableComponent } from './widgets/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LibComboboxComponent } from './widgets/lib-combobox/lib-combobox.component';
import { FieldContadorMessageComponent } from './widgets/field-contador-message/field-contador-message.component';
import { LibSpinnerComponent } from './widgets/spinner/spinner.component';
import { LoadingBtnDirective } from './directives/loading-btn.directive';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "ngx-bootstrap/accordion";
import * as i3 from "ngx-bootstrap/tooltip";
export class InfraModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: InfraModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: InfraModule, declarations: [LoadingComponent,
            FieldControlErrorComponent,
            FieldErrorMessageComponent,
            FieldContadorMessageComponent,
            LoadingButtonComponent,
            AlertComponent,
            ConfirmComponent,
            ConfirmModalComponent,
            SaveComponent,
            InfraBreadcrumbComponent,
            InfraBreadcrumbItemComponent,
            BreadcrumbComponent,
            ComboboxComponent,
            SvgStorageComponent,
            TreeComponent,
            ToUrlPipe,
            CpfCnpjPipe,
            FilterByPipe,
            LimitToPipe,
            SearchTreePipe,
            ClickOutsideDirective,
            OrderingComponent,
            SearchComboboxComponent,
            LibComboboxComponent, // Novo combobox, substituirá o Search futuramente
            RequiredDirective,
            SimpleHeaderComponent,
            LibIconsComponent,
            TextFilterPipe,
            ContentContainerComponent,
            CopyClipboardDirective,
            TableComponent,
            LibSpinnerComponent,
            LoadingBtnDirective], imports: [CommonModule, i1.ModalModule, i2.AccordionModule, i3.TooltipModule, FormsModule,
            NgxPaginationModule,
            ReactiveFormsModule,
            RouterModule], exports: [LoadingComponent,
            FieldControlErrorComponent,
            FieldErrorMessageComponent,
            FieldContadorMessageComponent,
            LoadingButtonComponent,
            AlertComponent,
            ConfirmComponent,
            ConfirmModalComponent,
            SaveComponent,
            InfraBreadcrumbComponent,
            InfraBreadcrumbItemComponent,
            BreadcrumbComponent,
            ComboboxComponent,
            SvgStorageComponent,
            TreeComponent,
            ToUrlPipe,
            CpfCnpjPipe,
            ClickOutsideDirective,
            OrderingComponent,
            SearchComboboxComponent,
            LibComboboxComponent,
            RequiredDirective,
            SimpleHeaderComponent,
            LibIconsComponent,
            TextFilterPipe,
            ContentContainerComponent,
            CopyClipboardDirective,
            TableComponent,
            LibSpinnerComponent,
            LoadingBtnDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: InfraModule, imports: [CommonModule,
            ModalModule.forRoot(),
            AccordionModule.forRoot(),
            TooltipModule.forRoot(),
            FormsModule,
            NgxPaginationModule,
            ReactiveFormsModule,
            RouterModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: InfraModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LoadingComponent,
                        FieldControlErrorComponent,
                        FieldErrorMessageComponent,
                        FieldContadorMessageComponent,
                        LoadingButtonComponent,
                        AlertComponent,
                        ConfirmComponent,
                        ConfirmModalComponent,
                        SaveComponent,
                        InfraBreadcrumbComponent,
                        InfraBreadcrumbItemComponent,
                        BreadcrumbComponent,
                        ComboboxComponent,
                        SvgStorageComponent,
                        TreeComponent,
                        ToUrlPipe,
                        CpfCnpjPipe,
                        FilterByPipe,
                        LimitToPipe,
                        SearchTreePipe,
                        ClickOutsideDirective,
                        OrderingComponent,
                        SearchComboboxComponent,
                        LibComboboxComponent, // Novo combobox, substituirá o Search futuramente
                        RequiredDirective,
                        SimpleHeaderComponent,
                        LibIconsComponent,
                        TextFilterPipe,
                        ContentContainerComponent,
                        CopyClipboardDirective,
                        TableComponent,
                        LibSpinnerComponent,
                        LoadingBtnDirective,
                    ],
                    imports: [
                        CommonModule,
                        ModalModule.forRoot(),
                        AccordionModule.forRoot(),
                        TooltipModule.forRoot(),
                        FormsModule,
                        NgxPaginationModule,
                        ReactiveFormsModule,
                        RouterModule
                    ],
                    exports: [
                        LoadingComponent,
                        FieldControlErrorComponent,
                        FieldErrorMessageComponent,
                        FieldContadorMessageComponent,
                        LoadingButtonComponent,
                        AlertComponent,
                        ConfirmComponent,
                        ConfirmModalComponent,
                        SaveComponent,
                        InfraBreadcrumbComponent,
                        InfraBreadcrumbItemComponent,
                        BreadcrumbComponent,
                        ComboboxComponent,
                        SvgStorageComponent,
                        TreeComponent,
                        ToUrlPipe,
                        CpfCnpjPipe,
                        ClickOutsideDirective,
                        OrderingComponent,
                        SearchComboboxComponent,
                        LibComboboxComponent,
                        RequiredDirective,
                        SimpleHeaderComponent,
                        LibIconsComponent,
                        TextFilterPipe,
                        ContentContainerComponent,
                        CopyClipboardDirective,
                        TableComponent,
                        LibSpinnerComponent,
                        LoadingBtnDirective,
                    ],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mcmEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvaW5mcmEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQzFILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1EQUFt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QU8sRUFBRTt3QkFDdkIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQiwwQkFBMEI7d0JBQzFCLDBCQUEwQjt3QkFDMUIsNkJBQTZCO3dCQUM3QixzQkFBc0I7d0JBQ3RCLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixxQkFBcUI7d0JBQ3JCLGFBQWE7d0JBQ2Isd0JBQXdCO3dCQUN4Qiw0QkFBNEI7d0JBQzVCLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2IsU0FBUzt3QkFDVCxXQUFXO3dCQUNYLHFCQUFxQjt3QkFDckIsaUJBQWlCO3dCQUVqQix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjt3QkFFcEIsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCx5QkFBeUI7d0JBRXpCLHNCQUFzQjt3QkFDdEIsY0FBYzt3QkFFZCxtQkFBbUI7d0JBQ25CLG1CQUFtQjtxQkFDcEI7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7aUJBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RhbFV0aWxzU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9tb2RhbC11dGlscy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBBY2NvcmRpb25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2FjY29yZGlvbic7XHJcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XHJcblxyXG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJy4vbWVzc2FnZS9hbGVydC9hbGVydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UvY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNhdmVDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2Uvc2F2ZS9zYXZlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEluZnJhQnJlYWRjcnVtYkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3dpZGdldHMvYnJlYWRjcnVtYi9pbmZyYS1icmVhZGNydW1iLWl0ZW0vaW5mcmEtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEluZnJhQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy9icmVhZGNydW1iL2luZnJhLWJyZWFkY3J1bWIvaW5mcmEtYnJlYWRjcnVtYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXRzL2JyZWFkY3J1bWIvcG9ydGFscmgtYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbWJvYm94Q29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXRzL2NvbWJvYm94L2NvbWJvYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpZWxkQ29udHJvbEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXRzL2ZpZWxkLWNvbnRyb2wtZXJyb3IvZmllbGQtY29udHJvbC1lcnJvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWVsZEVycm9yTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy9maWVsZC1lcnJvci1tZXNzYWdlL2ZpZWxkLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9hZGluZ0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy9sb2FkaW5nLWJ1dHRvbi9sb2FkaW5nLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXRzL3RyZWUvdHJlZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdmdTdG9yYWdlQ29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXRzL3N2Zy1zdG9yYWdlL3N2Zy1zdG9yYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvVXJsUGlwZSB9IGZyb20gJy4vcGlwZXMvdG8tdXJsLnBpcGUnO1xyXG5pbXBvcnQgeyBDcGZDbnBqUGlwZSB9IGZyb20gJy4vcGlwZXMvY3BmLWNucGoucGlwZSc7XHJcbmltcG9ydCB7IEZpbHRlckJ5UGlwZSB9IGZyb20gJy4vd2lkZ2V0cy9jb21ib2JveC9waXBlcy9maWx0ZXItYnkucGlwZSc7XHJcbmltcG9ydCB7IExpbWl0VG9QaXBlIH0gZnJvbSAnLi93aWRnZXRzL2NvbWJvYm94L3BpcGVzL2xpbWl0LXRvLnBpcGUnO1xyXG5pbXBvcnQgeyBTZWFyY2hUcmVlUGlwZSB9IGZyb20gJy4vd2lkZ2V0cy90cmVlL3BpcGVzL3NlYXJjaC10cmVlLnBpcGUnO1xyXG5pbXBvcnQgeyBDbGlja091dHNpZGVEaXJlY3RpdmUgfSBmcm9tICcuL3dpZGdldHMvY2xpY2stb3V0c2lkZS9jbGlja291dHNpZGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgT3JkZXJpbmdDb21wb25lbnQgfSBmcm9tICcuL3dpZGdldHMvb3JkZXJpbmcvb3JkZXJpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvdG9vbHRpcCc7XHJcblxyXG5pbXBvcnQgeyBTZWFyY2hDb21ib2JveENvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy9zZWFyY2gtY29tYm9ib3gvc2VhcmNoLWNvbWJvYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlcXVpcmVkRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlcXVpcmVkLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFNpbXBsZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy9zaW1wbGUtaGVhZGVyL3NpbXBsZS1oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGliSWNvbnNDb21wb25lbnQgfSBmcm9tICcuL3dpZGdldHMvbGliLWljb25zL2xpYi1pY29ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZXh0RmlsdGVyUGlwZSB9IGZyb20gJy4vcGlwZXMvdGV4dC1maWx0ZXIucGlwZSc7XHJcbmltcG9ydCB7IENvbnRlbnRDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3dpZGdldHMvY29udGVudC1jb250YWluZXIvY29udGVudC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29weUNsaXBib2FyZERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jb3B5LWNsaXBib2FyZC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy90YWJsZS90YWJsZS5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgTmd4UGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ25neC1wYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgTGliQ29tYm9ib3hDb21wb25lbnQgfSBmcm9tICcuL3dpZGdldHMvbGliLWNvbWJvYm94L2xpYi1jb21ib2JveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWVsZENvbnRhZG9yTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy9maWVsZC1jb250YWRvci1tZXNzYWdlL2ZpZWxkLWNvbnRhZG9yLW1lc3NhZ2UuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IExpYlNwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuL3dpZGdldHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRpbmdCdG5EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbG9hZGluZy1idG4uZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBMb2FkaW5nQ29tcG9uZW50LFxyXG4gICAgRmllbGRDb250cm9sRXJyb3JDb21wb25lbnQsXHJcbiAgICBGaWVsZEVycm9yTWVzc2FnZUNvbXBvbmVudCxcclxuICAgIEZpZWxkQ29udGFkb3JNZXNzYWdlQ29tcG9uZW50LFxyXG4gICAgTG9hZGluZ0J1dHRvbkNvbXBvbmVudCxcclxuICAgIEFsZXJ0Q29tcG9uZW50LFxyXG4gICAgQ29uZmlybUNvbXBvbmVudCxcclxuICAgIENvbmZpcm1Nb2RhbENvbXBvbmVudCxcclxuICAgIFNhdmVDb21wb25lbnQsXHJcbiAgICBJbmZyYUJyZWFkY3J1bWJDb21wb25lbnQsXHJcbiAgICBJbmZyYUJyZWFkY3J1bWJJdGVtQ29tcG9uZW50LFxyXG4gICAgQnJlYWRjcnVtYkNvbXBvbmVudCxcclxuICAgIENvbWJvYm94Q29tcG9uZW50LFxyXG4gICAgU3ZnU3RvcmFnZUNvbXBvbmVudCxcclxuICAgIFRyZWVDb21wb25lbnQsXHJcbiAgICBUb1VybFBpcGUsXHJcbiAgICBDcGZDbnBqUGlwZSxcclxuICAgIEZpbHRlckJ5UGlwZSxcclxuICAgIExpbWl0VG9QaXBlLFxyXG4gICAgU2VhcmNoVHJlZVBpcGUsXHJcbiAgICBDbGlja091dHNpZGVEaXJlY3RpdmUsXHJcbiAgICBPcmRlcmluZ0NvbXBvbmVudCxcclxuXHJcbiAgICBTZWFyY2hDb21ib2JveENvbXBvbmVudCxcclxuICAgIExpYkNvbWJvYm94Q29tcG9uZW50LCAvLyBOb3ZvIGNvbWJvYm94LCBzdWJzdGl0dWlyw6EgbyBTZWFyY2ggZnV0dXJhbWVudGVcclxuXHJcbiAgICBSZXF1aXJlZERpcmVjdGl2ZSxcclxuICAgIFNpbXBsZUhlYWRlckNvbXBvbmVudCxcclxuICAgIExpYkljb25zQ29tcG9uZW50LFxyXG4gICAgVGV4dEZpbHRlclBpcGUsXHJcbiAgICBDb250ZW50Q29udGFpbmVyQ29tcG9uZW50LFxyXG5cclxuICAgIENvcHlDbGlwYm9hcmREaXJlY3RpdmUsXHJcbiAgICBUYWJsZUNvbXBvbmVudCxcclxuXHJcbiAgICBMaWJTcGlubmVyQ29tcG9uZW50LFxyXG4gICAgTG9hZGluZ0J0bkRpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1vZGFsTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEFjY29yZGlvbk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBUb29sdGlwTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgTmd4UGFnaW5hdGlvbk1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIExvYWRpbmdDb21wb25lbnQsXHJcbiAgICBGaWVsZENvbnRyb2xFcnJvckNvbXBvbmVudCxcclxuICAgIEZpZWxkRXJyb3JNZXNzYWdlQ29tcG9uZW50LFxyXG4gICAgRmllbGRDb250YWRvck1lc3NhZ2VDb21wb25lbnQsXHJcbiAgICBMb2FkaW5nQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgQWxlcnRDb21wb25lbnQsXHJcbiAgICBDb25maXJtQ29tcG9uZW50LFxyXG4gICAgQ29uZmlybU1vZGFsQ29tcG9uZW50LFxyXG4gICAgU2F2ZUNvbXBvbmVudCxcclxuICAgIEluZnJhQnJlYWRjcnVtYkNvbXBvbmVudCxcclxuICAgIEluZnJhQnJlYWRjcnVtYkl0ZW1Db21wb25lbnQsXHJcbiAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxyXG4gICAgQ29tYm9ib3hDb21wb25lbnQsXHJcbiAgICBTdmdTdG9yYWdlQ29tcG9uZW50LFxyXG4gICAgVHJlZUNvbXBvbmVudCxcclxuICAgIFRvVXJsUGlwZSxcclxuICAgIENwZkNucGpQaXBlLFxyXG4gICAgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlLFxyXG4gICAgT3JkZXJpbmdDb21wb25lbnQsXHJcblxyXG4gICAgU2VhcmNoQ29tYm9ib3hDb21wb25lbnQsXHJcbiAgICBMaWJDb21ib2JveENvbXBvbmVudCxcclxuXHJcbiAgICBSZXF1aXJlZERpcmVjdGl2ZSxcclxuICAgIFNpbXBsZUhlYWRlckNvbXBvbmVudCxcclxuICAgIExpYkljb25zQ29tcG9uZW50LFxyXG4gICAgVGV4dEZpbHRlclBpcGUsXHJcbiAgICBDb250ZW50Q29udGFpbmVyQ29tcG9uZW50LFxyXG5cclxuICAgIENvcHlDbGlwYm9hcmREaXJlY3RpdmUsXHJcbiAgICBUYWJsZUNvbXBvbmVudCxcclxuXHJcbiAgICBMaWJTcGlubmVyQ29tcG9uZW50LFxyXG4gICAgTG9hZGluZ0J0bkRpcmVjdGl2ZSxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmZyYU1vZHVsZSB7IH1cclxuIl19
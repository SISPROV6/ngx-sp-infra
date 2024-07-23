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
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "ngx-bootstrap/accordion";
export class InfraModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: InfraModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.11", ngImport: i0, type: InfraModule, declarations: [LoadingComponent,
            FieldControlErrorComponent,
            FieldErrorMessageComponent,
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
            OrderingComponent], imports: [CommonModule, i1.ModalModule, i2.AccordionModule, FormsModule,
            ReactiveFormsModule,
            RouterModule], exports: [LoadingComponent,
            FieldControlErrorComponent,
            FieldErrorMessageComponent,
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
            OrderingComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: InfraModule, imports: [CommonModule,
            ModalModule.forRoot(),
            AccordionModule.forRoot(),
            FormsModule,
            ReactiveFormsModule,
            RouterModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: InfraModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LoadingComponent,
                        FieldControlErrorComponent,
                        FieldErrorMessageComponent,
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
                        OrderingComponent
                    ],
                    imports: [
                        CommonModule,
                        ModalModule.forRoot(),
                        AccordionModule.forRoot(),
                        FormsModule,
                        ReactiveFormsModule,
                        RouterModule
                    ],
                    exports: [
                        LoadingComponent,
                        FieldControlErrorComponent,
                        FieldErrorMessageComponent,
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
                    ],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mcmEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvaW5mcmEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQzFILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1EQUFt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QkFDckIsaUJBQWlCO3FCQUNsQjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtpQkFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQWNjb3JkaW9uTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9hY2NvcmRpb24nO1xyXG5pbXBvcnQgeyBNb2RhbE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xyXG5cclxuaW1wb3J0IHsgQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UvYWxlcnQvYWxlcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4vbWVzc2FnZS9jb25maXJtL2NvbmZpcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZmlybU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYXZlQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlL3NhdmUvc2F2ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbmZyYUJyZWFkY3J1bWJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXRzL2JyZWFkY3J1bWIvaW5mcmEtYnJlYWRjcnVtYi1pdGVtL2luZnJhLWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbmZyYUJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL3dpZGdldHMvYnJlYWRjcnVtYi9pbmZyYS1icmVhZGNydW1iL2luZnJhLWJyZWFkY3J1bWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy9icmVhZGNydW1iL3BvcnRhbHJoLWJyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21ib2JveENvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy9jb21ib2JveC9jb21ib2JveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWVsZENvbnRyb2xFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy9maWVsZC1jb250cm9sLWVycm9yL2ZpZWxkLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmllbGRFcnJvck1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL3dpZGdldHMvZmllbGQtZXJyb3ItbWVzc2FnZS9maWVsZC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvYWRpbmdCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3dpZGdldHMvbG9hZGluZy1idXR0b24vbG9hZGluZy1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJlZUNvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy90cmVlL3RyZWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3ZnU3RvcmFnZUNvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy9zdmctc3RvcmFnZS9zdmctc3RvcmFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb1VybFBpcGUgfSBmcm9tICcuL3BpcGVzL3RvLXVybC5waXBlJztcclxuaW1wb3J0IHsgQ3BmQ25walBpcGUgfSBmcm9tICcuL3BpcGVzL2NwZi1jbnBqLnBpcGUnO1xyXG5pbXBvcnQgeyBGaWx0ZXJCeVBpcGUgfSBmcm9tICcuL3dpZGdldHMvY29tYm9ib3gvcGlwZXMvZmlsdGVyLWJ5LnBpcGUnO1xyXG5pbXBvcnQgeyBMaW1pdFRvUGlwZSB9IGZyb20gJy4vd2lkZ2V0cy9jb21ib2JveC9waXBlcy9saW1pdC10by5waXBlJztcclxuaW1wb3J0IHsgU2VhcmNoVHJlZVBpcGUgfSBmcm9tICcuL3dpZGdldHMvdHJlZS9waXBlcy9zZWFyY2gtdHJlZS5waXBlJztcclxuaW1wb3J0IHsgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi93aWRnZXRzL2NsaWNrLW91dHNpZGUvY2xpY2tvdXRzaWRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE9yZGVyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXRzL29yZGVyaW5nL29yZGVyaW5nLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTG9hZGluZ0NvbXBvbmVudCxcclxuICAgIEZpZWxkQ29udHJvbEVycm9yQ29tcG9uZW50LFxyXG4gICAgRmllbGRFcnJvck1lc3NhZ2VDb21wb25lbnQsXHJcbiAgICBMb2FkaW5nQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgQWxlcnRDb21wb25lbnQsXHJcbiAgICBDb25maXJtQ29tcG9uZW50LFxyXG4gICAgQ29uZmlybU1vZGFsQ29tcG9uZW50LFxyXG4gICAgU2F2ZUNvbXBvbmVudCxcclxuICAgIEluZnJhQnJlYWRjcnVtYkNvbXBvbmVudCxcclxuICAgIEluZnJhQnJlYWRjcnVtYkl0ZW1Db21wb25lbnQsXHJcbiAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxyXG4gICAgQ29tYm9ib3hDb21wb25lbnQsXHJcbiAgICBTdmdTdG9yYWdlQ29tcG9uZW50LFxyXG4gICAgVHJlZUNvbXBvbmVudCxcclxuICAgIFRvVXJsUGlwZSxcclxuICAgIENwZkNucGpQaXBlLFxyXG4gICAgRmlsdGVyQnlQaXBlLFxyXG4gICAgTGltaXRUb1BpcGUsXHJcbiAgICBTZWFyY2hUcmVlUGlwZSxcclxuICAgIENsaWNrT3V0c2lkZURpcmVjdGl2ZSxcclxuICAgIE9yZGVyaW5nQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNb2RhbE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBBY2NvcmRpb25Nb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBMb2FkaW5nQ29tcG9uZW50LFxyXG4gICAgRmllbGRDb250cm9sRXJyb3JDb21wb25lbnQsXHJcbiAgICBGaWVsZEVycm9yTWVzc2FnZUNvbXBvbmVudCxcclxuICAgIExvYWRpbmdCdXR0b25Db21wb25lbnQsXHJcbiAgICBBbGVydENvbXBvbmVudCxcclxuICAgIENvbmZpcm1Db21wb25lbnQsXHJcbiAgICBDb25maXJtTW9kYWxDb21wb25lbnQsXHJcbiAgICBTYXZlQ29tcG9uZW50LFxyXG4gICAgSW5mcmFCcmVhZGNydW1iQ29tcG9uZW50LFxyXG4gICAgSW5mcmFCcmVhZGNydW1iSXRlbUNvbXBvbmVudCxcclxuICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXHJcbiAgICBDb21ib2JveENvbXBvbmVudCxcclxuICAgIFN2Z1N0b3JhZ2VDb21wb25lbnQsXHJcbiAgICBUcmVlQ29tcG9uZW50LFxyXG4gICAgVG9VcmxQaXBlLFxyXG4gICAgQ3BmQ25walBpcGUsXHJcbiAgICBDbGlja091dHNpZGVEaXJlY3RpdmUsXHJcbiAgICBPcmRlcmluZ0NvbXBvbmVudCxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmZyYU1vZHVsZSB7IH1cclxuIl19
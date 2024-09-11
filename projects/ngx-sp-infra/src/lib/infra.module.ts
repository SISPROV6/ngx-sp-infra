import { ModalUtilsService } from './service/modal-utils.service';
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
import { NavProdutosComponent } from './widgets/nav-produtos/nav-produtos.component';

@NgModule({
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
    OrderingComponent,
    NavProdutosComponent,

    SearchComboboxComponent,
    LibComboboxComponent, // Novo combobox, substituirá o Search futuramente

    RequiredDirective,
    SimpleHeaderComponent,
    LibIconsComponent,
    TextFilterPipe,
    ContentContainerComponent,

    CopyClipboardDirective,
    TableComponent,
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
    NavProdutosComponent,

    SearchComboboxComponent,
    LibComboboxComponent,

    RequiredDirective,
    SimpleHeaderComponent,
    LibIconsComponent,
    TextFilterPipe,
    ContentContainerComponent,

    CopyClipboardDirective,
    TableComponent,
  ],
  providers: [],
})
export class InfraModule { }

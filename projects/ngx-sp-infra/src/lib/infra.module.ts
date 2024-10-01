import { HeaderComponent } from './templates/header/header.component';
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
import { SimpleHeaderComponent } from './templates/simple-header/simple-header.component';
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
import { NavProdutosComponent } from './widgets/nav-produtos/nav-produtos.component';
import { ComboboxMultipleChoiceComponent } from './widgets/combobox-multiple-choice/combobox-multiple-choice.component';
import { CustomAcordionComponent } from './widgets/custom-acordion/custom-acordion.component';
import { DropdownOptionsComponent } from './widgets/dropdown-options/dropdown-options.component';
import { DynamicInputComponent } from './widgets/dynamic-input/dynamic-input.component';
import { GenericModalComponent } from './widgets/generic-modal/generic-modal.component';
import { PaginationComponent } from './widgets/pagination/pagination.component';
import { SearchFiltersComponent } from './widgets/search-filters/search-filters.component';
import { SideTabsComponent } from './widgets/side-tabs/side-tabs.component';
import { SimpleSearchComponent } from './widgets/simple-search/simple-search.component';
import { DisableControlDirective } from './directives/disable-control.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { DecimalCommaPipe } from './pipes/decimal-comma.pipe';
import { FilterMultipleChoicePipe } from './pipes/filter-multiple-choice.pipe';
import { OrderSortPipe } from './pipes/order-sort.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { TitleCasePipe } from './pipes/title-case-pipe.pipe';
import { FooterComponent } from './templates/footer/footer.component';
import { LibHeaderComponent } from './widgets/lib-header/lib-header.component';
import { InputTrimComponent } from './widgets/input-trim/input-trim.component';
import { NgxCurrencyDirective } from 'ngx-currency';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { PageNotAuthorizedComponent } from './components/page-not-authorized/page-not-authorized.component';

@NgModule({
  declarations: [
    PageNotAuthorizedComponent,
    
    LoadingComponent,
    FieldControlErrorComponent,
    FieldErrorMessageComponent,
    FieldContadorMessageComponent,
    InputTrimComponent,
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
    NavProdutosComponent,
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
    LibHeaderComponent,
    LibIconsComponent,
    TextFilterPipe,
    ContentContainerComponent,
    CopyClipboardDirective,
    TableComponent,
    LibSpinnerComponent,
    LoadingBtnDirective,
    InputTrimComponent,

    // #region Componentes portados (ainda serão organizados)
    ComboboxMultipleChoiceComponent,
    CustomAcordionComponent,
    DropdownOptionsComponent,
    DynamicInputComponent,
    GenericModalComponent,
    PaginationComponent,
    SearchFiltersComponent,
    SideTabsComponent,
    SimpleSearchComponent,

    DisableControlDirective,
    HighlightDirective,

    DecimalCommaPipe,
    FilterMultipleChoicePipe,
    OrderSortPipe,
    PhoneFormatPipe,
    TitleCasePipe,

    FooterComponent,
    HeaderComponent,
    SimpleHeaderComponent,
    // #endregion Componentes portados (ainda serão organizados)
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
		NgxCurrencyDirective,
    NgxMaskDirective, 
		NgxMaskPipe,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    PageNotAuthorizedComponent,
    
    LoadingComponent,
    FieldControlErrorComponent,
    FieldErrorMessageComponent,
    FieldContadorMessageComponent,
    InputTrimComponent,
    LoadingButtonComponent,
    AlertComponent,
    ConfirmComponent,
    ConfirmModalComponent,
    SaveComponent,
    InfraBreadcrumbComponent,
    InfraBreadcrumbItemComponent,
    NavProdutosComponent,
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
    LibHeaderComponent,
    LibIconsComponent,
    TextFilterPipe,
    ContentContainerComponent,
    CopyClipboardDirective,
    TableComponent,
    LibSpinnerComponent,
    LoadingBtnDirective,

    // #region Componentes portados (ainda serão organizados)
    ComboboxMultipleChoiceComponent,
    CustomAcordionComponent,
    DropdownOptionsComponent,
    DynamicInputComponent,
    GenericModalComponent,
    PaginationComponent,
    SearchFiltersComponent,
    SideTabsComponent,
    SimpleSearchComponent,

    DisableControlDirective,
    HighlightDirective,

    DecimalCommaPipe,
    FilterMultipleChoicePipe,
    OrderSortPipe,
    PhoneFormatPipe,
    TitleCasePipe,

    FooterComponent,
    HeaderComponent,
    SimpleHeaderComponent,
    // #endregion Componentes portados (ainda serão organizados)
  ],
  providers: [],
})
export class InfraModule { }

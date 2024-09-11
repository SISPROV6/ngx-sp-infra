import { Component, Input, EventEmitter, Output, HostListener, ViewChildren, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FilterByPipe } from './pipes/filter-by.pipe';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../svg-storage/svg-storage.component";
import * as i4 from "./pipes/filter-by.pipe";
import * as i5 from "./pipes/limit-to.pipe";
const _c0 = ["availableOption"];
const _c1 = a0 => ({ "ngx-disabled": a0 });
const _c2 = a0 => ({ active: a0 });
const _c3 = (a0, a1) => ({ active: a0, disabled: a1 });
function ComboboxComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "input", 14);
    i0.ɵɵlistener("change", function ComboboxComponent_div_5_div_1_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSearchText($event)); })("input", function ComboboxComponent_div_5_div_1_Template_input_input_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.searchTextChanged()); });
    i0.ɵɵtwoWayListener("ngModelChange", function ComboboxComponent_div_5_div_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.searchText, $event) || (ctx_r1.searchText = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 15);
    i0.ɵɵelement(3, "span", 16);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("direction", ctx_r1.config.inputDirection);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.searchText);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c2, ctx_r1.searchText));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.config.searchPlaceholder, "");
} }
function ComboboxComponent_div_5_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 17);
    i0.ɵɵlistener("click", function ComboboxComponent_div_5_li_3_Template_li_click_0_listener() { const ctx_r3 = i0.ɵɵrestoreView(_r3); const selected_r5 = ctx_r3.$implicit; const i_r6 = ctx_r3.index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deselectItem(selected_r5, i_r6)); });
    i0.ɵɵelement(1, "input", 18);
    i0.ɵɵelementStart(2, "div", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const selected_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.config.displayFn ? ctx_r1.config.displayFn(selected_r5) : selected_r5[ctx_r1.config.displayKey] || selected_r5);
} }
function ComboboxComponent_div_5_hr_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
} }
function ComboboxComponent_div_5_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 20, 0);
    i0.ɵɵlistener("click", function ComboboxComponent_div_5_li_6_Template_li_click_0_listener() { const ctx_r7 = i0.ɵɵrestoreView(_r7); const item_r9 = ctx_r7.$implicit; const i_r10 = ctx_r7.index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectItem(item_r9, i_r10)); });
    i0.ɵɵelement(2, "input", 21);
    i0.ɵɵelementStart(3, "div", 19);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c3, ctx_r1.focusedItemIndex == i_r10 && !item_r9.disabled, item_r9.disabled));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.config.displayFn ? ctx_r1.config.displayFn(item_r9) : item_r9[ctx_r1.config.displayKey] || item_r9, " ");
} }
function ComboboxComponent_div_5_li_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.config.noResultsFound);
} }
function ComboboxComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, ComboboxComponent_div_5_div_1_Template, 5, 7, "div", 7);
    i0.ɵɵelementStart(2, "ul", 8);
    i0.ɵɵtemplate(3, ComboboxComponent_div_5_li_3_Template, 4, 1, "li", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ComboboxComponent_div_5_hr_4_Template, 1, 0, "hr", 10);
    i0.ɵɵelementStart(5, "ul", 11);
    i0.ɵɵtemplate(6, ComboboxComponent_div_5_li_6_Template, 5, 5, "li", 12);
    i0.ɵɵpipe(7, "filterBy");
    i0.ɵɵpipe(8, "limitTo");
    i0.ɵɵtemplate(9, ComboboxComponent_div_5_li_9_Template, 2, 1, "li", 10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-height", ctx_r1.config.height);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.config.search);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.selectedItems);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedItems.length > 0 && ctx_r1.availableItems.length > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(8, 11, i0.ɵɵpipeBind3(7, 7, ctx_r1.availableItems, ctx_r1.searchText, ctx_r1.config.searchOnKey), ctx_r1.config.limitTo));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.showNotFound);
} }
export class ComboboxComponent {
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
        this.onChange(val);
        this.onTouched();
    }
    constructor(cdref, _elementRef) {
        this.cdref = cdref;
        this._elementRef = _elementRef;
        /**
         * Get the required inputs
         */
        this.options = [];
        /**
         * configuration options
         */
        this.config = {};
        /**
         * Whether multiple selection or single selection allowed
         */
        this.multiple = false;
        /**
         * change event when value changes to provide user to handle things in change event
         */
        this.change = new EventEmitter();
        /**
         * The search text change event emitter emitted when user type in the search input
         */
        this.searchChange = new EventEmitter();
        /**
         * Event emitted when dropdown is open.
         */
        this.open = new EventEmitter();
        /**
         * Event emitted when dropdown is open.
         */
        this.close = new EventEmitter();
        /**
         * Toogle the dropdown list
         */
        this.toggleDropdown = false;
        /**
         * Available items for selection
         */
        this.availableItems = [];
        /**
         * Selected Items
         */
        this.selectedItems = [];
        /**
         * Selection text to be Displayed
         */
        this.selectedDisplayText = '-';
        /**
         * variable to track if clicked inside or outside of component
         */
        this.clickedInside = false;
        /**
         * variable to track keypress event inside and outsid of component
         */
        this.insideKeyPress = false;
        /**
         * element to show not found text when not itmes match the search
         */
        this.showNotFound = false;
        this.onChange = () => {
            // empty
        };
        this.onTouched = () => {
            // empty
        };
        this.multiple = false;
    }
    /**
     * click listener for host inside this component i.e
     * if many instances are there, this detects if clicked inside
     * this instance
     */
    clickInsideComponent() {
        this.clickedInside = true;
    }
    blur() {
        this.toggleDropdown = false;
    }
    focus() {
        /* istanbul ignore else */
        if (!this.disabled) {
            this.toggleSelectDropdown();
        }
    }
    /**
     * click handler on documnent to hide the open dropdown if clicked outside
     */
    clickOutsideComponent() {
        /* istanbul ignore else */
        if (!this.clickedInside) {
            this.toggleDropdown = false;
            this.resetArrowKeyActiveElement();
            // clear searh on close
            this.searchText = undefined;
            this.close.emit();
        }
        this.clickedInside = false;
    }
    /**
     * click handler on documnent to hide the open dropdown if clicked outside
     */
    KeyPressOutsideComponent() {
        /* istanbul ignore else */
        if (!this.insideKeyPress) {
            this.toggleDropdown = false;
            this.resetArrowKeyActiveElement();
        }
        this.insideKeyPress = false;
    }
    /**
     * Event handler for key up and down event and enter press for selecting element
     */
    handleKeyboardEvent($event) {
        this.insideKeyPress = true;
        /* istanbul ignore else */
        if ($event.keyCode === 27 || this.disabled) {
            this.toggleDropdown = false;
            this.insideKeyPress = false;
            return;
        }
        const avaOpts = this.availableOptions.toArray();
        /* istanbul ignore else */
        if ($event.keyCode !== 9 && avaOpts.length === 0 && !this.toggleDropdown) {
            this.toggleDropdown = true;
        }
        // Arrow Down
        /* istanbul ignore else */
        if ($event.keyCode === 40 && avaOpts.length > 0) {
            this.onArrowKeyDown();
            /* istanbul ignore else */
            if (this.focusedItemIndex >= avaOpts.length) {
                this.focusedItemIndex = 0;
            }
            avaOpts[this.focusedItemIndex].nativeElement.focus();
            $event.preventDefault();
        }
        // Arrow Up
        /* istanbul ignore else */
        if ($event.keyCode === 38 && avaOpts.length) {
            this.onArrowKeyUp();
            /* istanbul ignore else */
            if (this.focusedItemIndex >= avaOpts.length) {
                this.focusedItemIndex = avaOpts.length - 1;
            }
            avaOpts[this.focusedItemIndex].nativeElement.focus();
            $event.preventDefault();
        }
        // Enter
        /* istanbul ignore else */
        if ($event.keyCode === 13 && this.focusedItemIndex !== null) {
            const filteredItems = new FilterByPipe().transform(this.availableItems, this.searchText, this.config.searchOnKey);
            this.selectItem(filteredItems[this.focusedItemIndex], this.availableItems.indexOf(filteredItems[this.focusedItemIndex]));
            return false;
        }
        return $event.key;
    }
    /**
     * Component onInit
     */
    ngOnInit() {
        /* istanbul ignore else */
        if (typeof this.options !== 'undefined' && Array.isArray(this.options)) {
            if (!this.config.isNotSort)
                this.availableItems = [...this.options.sort(this.config.customComparator)];
            else
                this.availableItems = [...this.options];
            this.initDropdownValuesAndOptions();
        }
    }
    /**
     * after view init to subscribe to available option changes
     */
    ngAfterViewInit() {
        this.availableOptions.changes.subscribe(this.setNotFoundState.bind(this));
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    writeValue(value, internal) {
        if (value) {
            if (Array.isArray(value)) {
                if (this.multiple) {
                    this.value = value;
                }
                else if (value.length > 0) {
                    this.value = value[0];
                }
            }
            else {
                this.value = value;
            }
            /* istanbul ignore else */
            if (this.selectedItems.length === 0) {
                if (Array.isArray(value)) {
                    this.selectedItems = value;
                }
                else {
                    this.selectedItems.push(value);
                }
                this.initDropdownValuesAndOptions();
            }
        }
        else {
            this.value = [];
            /* istanbul ignore else */
            if (!internal) {
                this.reset();
            }
        }
        /* istanbul ignore else */
        if (!internal) {
            this.reset();
        }
    }
    reset() {
        this.selectedItems = [];
        if (!this.config.isNotSort)
            this.availableItems = [...this.options.sort(this.config.customComparator)];
        else
            this.availableItems = [...this.options];
        this.initDropdownValuesAndOptions();
    }
    /**
     * function sets whether to show items not found text or not
     */
    setNotFoundState() {
        if (this.availableOptions.length === 0) {
            this.showNotFound = true;
        }
        else {
            this.showNotFound = false;
        }
        this.cdref.detectChanges();
    }
    /**
     * Component onchage i.e when any of the input properties change
     */
    ngOnChanges(changes) {
        this.selectedItems = [];
        // this.searchText = null;
        this.options = this.options || [];
        /* istanbul ignore else */
        if (changes['options']) {
            if (!this.config.isNotSort)
                this.availableItems = [...this.options.sort(this.config.customComparator)];
            else
                this.availableItems = [...this.options];
        }
        /* istanbul ignore else */
        if (changes['value']) {
            /* istanbul ignore else */
            if (JSON.stringify(changes['value'].currentValue) === JSON.stringify([]) ||
                changes['value'].currentValue === '' ||
                changes['value'].currentValue === null) {
                if (!this.config.isNotSort)
                    this.availableItems = [...this.options.sort(this.config.customComparator)];
                else
                    this.availableItems = [...this.options];
            }
        }
        this.initDropdownValuesAndOptions();
    }
    /**
     * Deselct a selected items
     * @param item:  item to be deselected
     * @param index:  index of the item
     */
    deselectItem(item, index) {
        this.selectedItems.forEach((element, i) => {
            /* istanbul ignore else */
            if (item === element) {
                this.selectedItems.splice(i, 1);
            }
        });
        let sortedItems = [...this.availableItems];
        /* istanbul ignore else */
        if (!this.availableItems.includes(item)) {
            this.availableItems.push(item);
            if (!this.config.isNotSort)
                sortedItems = this.availableItems.sort(this.config.customComparator);
            else
                sortedItems = this.availableItems;
        }
        this.selectedItems = [...this.selectedItems];
        this.availableItems = [...sortedItems];
        /* istanbul ignore else */
        if (!Array.isArray(this.value)) {
            this.value = [];
        }
        if (this.config.defaultSort) {
            const set1 = new Set(this.selectedItems);
            this.selectedItems = this.config.defaultSort.sort((a, b) => a[0] - b[0]).map(e => e[1]).filter(e => set1.has(e));
            const set2 = new Set(this.availableItems);
            this.availableItems = this.config.defaultSort.sort((a, b) => a[0] - b[0]).map(e => e[1]).filter(e => set2.has(e));
        }
        this.valueChanged();
        this.resetArrowKeyActiveElement();
    }
    /**
     * Select an item
     * @param item:  item to be selected
     * @param index:  index of the item
     */
    selectItem(item, index) {
        /* istanbul ignore else */
        if (!this.multiple) {
            /* istanbul ignore else */
            if (this.selectedItems.length > 0) {
                this.availableItems.push(this.selectedItems[0]);
            }
            this.selectedItems = [];
            this.toggleDropdown = false;
        }
        this.availableItems.forEach((element, i) => {
            /* istanbul ignore else */
            if (item === element) {
                this.selectedItems.push(item);
                this.availableItems.splice(i, 1);
            }
        });
        /* istanbul ignore else */
        if (this.config.clearOnSelection) {
            this.searchText = undefined;
        }
        this.selectedItems = [...this.selectedItems];
        this.availableItems = [...this.availableItems];
        if (!this.config.isNotSort) {
            this.selectedItems.sort(this.config.customComparator);
            this.availableItems.sort(this.config.customComparator);
        }
        if (this.config.defaultSort) {
            const set1 = new Set(this.selectedItems);
            this.selectedItems = this.config.defaultSort.sort((a, b) => a[0] - b[0]).map(e => e[1]).filter(e => set1.has(e));
            const set2 = new Set(this.availableItems);
            this.availableItems = this.config.defaultSort.sort((a, b) => a[0] - b[0]).map(e => e[1]).filter(e => set2.has(e));
        }
        // this.searchText = null;
        this.valueChanged();
        this.resetArrowKeyActiveElement();
    }
    /**
     * When selected items changes trigger the chaange back to parent
     */
    valueChanged() {
        this.writeValue(this.selectedItems, true);
        // this.valueChange.emit(this.value);
        this.change.emit({ value: this.value });
        this.setSelectedDisplayText();
    }
    /**
     * Toggle the dropdownlist on/off
     */
    toggleSelectDropdown() {
        this.toggleDropdown = !this.toggleDropdown;
        if (this.toggleDropdown) {
            this.open.emit();
        }
        else {
            this.searchText = undefined;
            this.close.emit();
        }
        this.resetArrowKeyActiveElement();
    }
    /**
     * The change handler for search text
     */
    searchTextChanged() {
        this.searchChange.emit(this.searchText);
    }
    changeSearchText($event) {
        $event.stopPropagation();
    }
    /**
     * initialize the config and other properties
     */
    initDropdownValuesAndOptions() {
        const config = {
            displayKey: 'description',
            height: 'auto',
            search: false,
            placeholder: '-',
            searchPlaceholder: 'Pesquisar ',
            limitTo: 0,
            customComparator: undefined,
            noResultsFound: 'Nada encontrado!',
            moreText: 'Selecionados',
            searchOnKey: null,
            clearOnSelection: false,
            inputDirection: 'ltr',
        };
        /* istanbul ignore else */
        if (this.config === 'undefined' || Object.keys(this.config).length === 0) {
            this.config = { ...config };
        }
        for (const key of Object.keys(config)) {
            this.config[key] = this.config[key] ? this.config[key] : config[key];
        }
        this.config = { ...this.config };
        // Adding placeholder in config as default param
        this.selectedDisplayText = this.config['placeholder'];
        /* istanbul ignore else */
        if (this.value !== '' && typeof this.value !== 'undefined') {
            if (Array.isArray(this.value)) {
                this.selectedItems = this.value;
            }
            else if (this.value !== '' && this.value !== null) {
                this.selectedItems[0] = this.value;
            }
            else {
                this.selectedItems = [];
                this.value = [];
            }
            this.selectedItems.forEach((item) => {
                const ind = this.availableItems.findIndex((aItem) => JSON.stringify(item) === JSON.stringify(aItem));
                if (ind !== -1) {
                    this.availableItems.splice(ind, 1);
                }
            });
        }
        this.setSelectedDisplayText();
    }
    /**
     * set the text to be displayed
     */
    setSelectedDisplayText() {
        let text = this.selectedItems[0];
        /* istanbul ignore else */
        if (typeof this.selectedItems[0] === 'object') {
            text = this.config.displayFn
                ? this.config.displayFn(this.selectedItems[0])
                : this.selectedItems[0][this.config.displayKey];
        }
        if (this.multiple && this.selectedItems.length > 0) {
            this.selectedDisplayText =
                this.selectedItems.length === 1
                    ? text
                    : text +
                        ` + ${this.selectedItems.length - 1} ${this.config.moreText}`;
        }
        else {
            this.selectedDisplayText =
                this.selectedItems.length === 0 ? this.config.placeholder : text;
        }
    }
    /**
     * Event handler for arrow key up event thats focuses on a item
     */
    onArrowKeyUp() {
        /* istanbul ignore else */
        if (this.focusedItemIndex === 0) {
            this.focusedItemIndex = this.availableItems.length - 1;
            return;
        }
        /* istanbul ignore else */
        if (this.onArrowKey()) {
            this.focusedItemIndex;
        }
    }
    /**
     * Event handler for arrow key down event thats focuses on a item
     */
    onArrowKeyDown() {
        /* istanbul ignore else */
        if (this.focusedItemIndex === this.availableItems.length - 1) {
            this.focusedItemIndex = 0;
            return;
        }
        /* istanbul ignore else */
        if (this.onArrowKey()) {
            this.focusedItemIndex++;
        }
    }
    onArrowKey() {
        /* istanbul ignore else */
        if (this.focusedItemIndex === null) {
            this.focusedItemIndex = 0;
            return false;
        }
        return true;
    }
    /**
     * will reset the element that is marked active using arrow keys
     */
    resetArrowKeyActiveElement() {
        this.focusedItemIndex = null;
    }
    static { this.ɵfac = function ComboboxComponent_Factory(t) { return new (t || ComboboxComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ComboboxComponent, selectors: [["app-combobox"]], viewQuery: function ComboboxComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.availableOptions = _t);
        } }, hostBindings: function ComboboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ComboboxComponent_click_HostBindingHandler() { return ctx.clickInsideComponent(); })("blur", function ComboboxComponent_blur_HostBindingHandler() { return ctx.blur(); })("focus", function ComboboxComponent_focus_HostBindingHandler() { return ctx.focus(); })("click", function ComboboxComponent_click_HostBindingHandler() { return ctx.clickOutsideComponent(); }, false, i0.ɵɵresolveDocument)("keydown", function ComboboxComponent_keydown_HostBindingHandler() { return ctx.KeyPressOutsideComponent(); }, false, i0.ɵɵresolveDocument)("keydown", function ComboboxComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); });
        } }, inputs: { _value: "_value", options: "options", config: "config", multiple: "multiple", disabled: "disabled" }, outputs: { change: "change", searchChange: "searchChange", open: "open", close: "close" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => ComboboxComponent),
                    multi: true,
                },
            ]), i0.ɵɵNgOnChangesFeature], decls: 6, vars: 6, consts: [["availableOption", ""], ["tabindex", "0", 1, "ngx-dropdown-container"], ["type", "button", "tabindex", "-1", 1, "ngx-dropdown-button", 3, "click", "ngClass", "disabled"], [1, "display-text"], ["svgName", "chevron-down", "svgColor", "#343A40", "svgSize", "small"], ["class", "ngx-dropdown-list-container scroll-y", 3, "maxHeight", 4, "ngIf"], [1, "ngx-dropdown-list-container", "scroll-y"], ["class", "search-container d-flex justify-content-between", 4, "ngIf"], [1, "selected-items"], ["class", "d-flex flex-row", "tabindex", "-1", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "available-items"], ["class", "d-flex flex-row", "tabindex", "-1", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "search-container", "d-flex", "justify-content-between"], ["name", "search-text", "tabindex", "-1", "autocomplete", "off", 3, "change", "input", "ngModelChange", "ngModel"], [3, "ngClass"], [1, "nsdicon-search"], ["tabindex", "-1", 1, "d-flex", "flex-row", 3, "click"], ["type", "checkbox", "checked", "true", 1, "form-check", "nsdicon-close", "me-2"], [2, "margin-top", "2px"], ["tabindex", "-1", 1, "d-flex", "flex-row", 3, "click", "ngClass"], ["type", "checkbox", 1, "form-check", "nsdicon-close", "me-2"]], template: function ComboboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "button", 2);
            i0.ɵɵlistener("click", function ComboboxComponent_Template_button_click_1_listener() { return ctx.toggleSelectDropdown(); });
            i0.ɵɵelementStart(2, "span", 3);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "app-svg-storage", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, ComboboxComponent_div_5_Template, 10, 14, "div", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c1, ctx.disabled))("disabled", ctx.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.selectedDisplayText, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.toggleDropdown);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i3.SvgStorageComponent, i4.FilterByPipe, i5.LimitToPipe], styles: [".ngx-dropdown-container[_ngcontent-%COMP%]{width:100%;position:relative}.ngx-dropdown-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:inline-block;margin-bottom:0;font-weight:400;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;user-select:none;border:1px solid #DEE2E6;border-radius:.375rem;line-height:1.5;color:#333;background-color:#fff;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;text-align:left}.ngx-dropdown-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline;vertical-align:middle}.ngx-dropdown-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .nsdicon-angle-down[_ngcontent-%COMP%]{right:5px;position:relative;float:right}.ngx-dropdown-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .nsdicon-angle-down[_ngcontent-%COMP%]:before{border-style:solid;border-width:.1em .1em 0 0;content:\"\";display:inline-block;height:10px;position:relative;vertical-align:text-top;width:10px;top:0;transform:rotate(135deg)}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-button[_ngcontent-%COMP%]{width:100%;min-height:30px;padding:.375rem .75rem;background-color:#fff;font-size:1rem;display:flex;align-items:center;justify-content:space-between}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-button[_ngcontent-%COMP%]   .display-text[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - 20px)}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]{box-sizing:border-box;border:1px solid rgba(0,0,0,.15);border-radius:4px;padding-left:10px;padding-right:10px;z-index:999999999;width:100%;background-clip:padding-box;background:#fff;position:absolute;-webkit-box-shadow:5px 5px 5px 0px rgba(0,0,0,.21);-moz-box-shadow:5px 5px 5px 0px rgba(0,0,0,.21);box-shadow:5px 5px 5px #00000036;overflow-y:auto}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]{position:relative;padding-top:10px;margin-top:5px}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:2rem;width:100%;font-size:13px;margin:0;padding:0;box-shadow:none;box-sizing:content-box;transition:all .3s}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-bottom:1px solid #007bff}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%]{transform:translateY(-2px) scale(.8);transform-origin:0 0}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#9e9e9e;position:absolute;top:0;left:0;height:100%;font-size:1rem;cursor:text;-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform-origin:0% 100%;transform-origin:0% 100%;text-align:initial;transform:translateY(12px);pointer-events:none}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   label.active[_ngcontent-%COMP%]{transform:translateY(-2px) scale(.8);transform-origin:0 0}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:1rem;list-style-type:none;padding-left:0}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   ul.selected-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:2px}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   ul.selected-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nsdicon-close[_ngcontent-%COMP%]{accent-color:#007bff;font-weight:700;font-size:large}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   ul.available-items[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:#337ab7;color:#fff}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:inherit;cursor:pointer;display:block;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:normal}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-disabled[_ngcontent-%COMP%]{pointer-events:none;background-color:#e9ecef;opacity:1;cursor:no-drop}.scroll-y[_ngcontent-%COMP%]{max-width:300px;overflow-y:scroll;overflow-x:hidden}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComboboxComponent, [{
        type: Component,
        args: [{ selector: 'app-combobox', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => ComboboxComponent),
                        multi: true,
                    },
                ], template: "<div class=\"ngx-dropdown-container\" tabindex=\"0\">\n  <button type=\"button\" tabindex=\"-1\" class=\"ngx-dropdown-button\" [ngClass]=\"{ 'ngx-disabled': disabled }\"\n    [disabled]=\"disabled\" (click)=\"toggleSelectDropdown()\">\n    <span class=\"display-text\">{{ selectedDisplayText }} </span>\n    <app-svg-storage svgName=\"chevron-down\" svgColor=\"#343A40\" svgSize=\"small\"/>\n  </button>\n  <div class=\"ngx-dropdown-list-container scroll-y\" *ngIf=\"toggleDropdown\" [style.maxHeight]=\"config.height\">\n    <div class=\"search-container d-flex justify-content-between\" *ngIf=\"config.search\">\n      <input (change)=\"changeSearchText($event)\" [style.direction]=\"config.inputDirection\" name=\"search-text\"\n        (input)=\"searchTextChanged()\" [(ngModel)]=\"searchText\" tabindex=\"-1\" autocomplete=\"off\" />\n      <label [ngClass]=\"{ active: searchText }\">\n        <span class=\"nsdicon-search\"></span>\n        {{ config.searchPlaceholder }}</label>\n    </div>\n    <ul class=\"selected-items\">\n      <li class=\"d-flex flex-row\" tabindex=\"-1\" *ngFor=\"let selected of selectedItems; let i = index\"\n        (click)=\"deselectItem(selected, i)\">\n        <input type=\"checkbox\" class=\"form-check nsdicon-close me-2\" checked=\"true\">\n        <div style=\"margin-top: 2px;\">{{\n          config.displayFn\n          ? config.displayFn(selected)\n          : selected[config.displayKey] || selected\n          }}</div>\n      </li>\n    </ul>\n    <hr *ngIf=\"selectedItems.length > 0 && availableItems.length > 0\" />\n    <ul class=\"available-items\">\n      <li class=\"d-flex flex-row\" #availableOption *ngFor=\"let item of availableItems | filterBy: searchText: config.searchOnKey\n\t\t\t| limitTo: config.limitTo; let i = index\" tabindex=\"-1\"\n        [ngClass]=\"{ active: focusedItemIndex == i && !item.disabled, disabled: item.disabled }\"\n        (click)=\"selectItem(item, i)\">\n        <input type=\"checkbox\" class=\"form-check nsdicon-close me-2\">\n        <div style=\"margin-top: 2px;\">\n          {{ config.displayFn ? config.displayFn(item) : item[config.displayKey] || item }}\n        </div>\n      </li>\n      <li *ngIf=\"showNotFound\">{{ config.noResultsFound }}</li>\n    </ul>\n  </div>\n</div>\n", styles: [".ngx-dropdown-container{width:100%;position:relative}.ngx-dropdown-container button{display:inline-block;margin-bottom:0;font-weight:400;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;user-select:none;border:1px solid #DEE2E6;border-radius:.375rem;line-height:1.5;color:#333;background-color:#fff;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;text-align:left}.ngx-dropdown-container button span{display:inline;vertical-align:middle}.ngx-dropdown-container button .nsdicon-angle-down{right:5px;position:relative;float:right}.ngx-dropdown-container button .nsdicon-angle-down:before{border-style:solid;border-width:.1em .1em 0 0;content:\"\";display:inline-block;height:10px;position:relative;vertical-align:text-top;width:10px;top:0;transform:rotate(135deg)}.ngx-dropdown-container .ngx-dropdown-button{width:100%;min-height:30px;padding:.375rem .75rem;background-color:#fff;font-size:1rem;display:flex;align-items:center;justify-content:space-between}.ngx-dropdown-container .ngx-dropdown-button .display-text{display:inline-block;width:calc(100% - 20px)}.ngx-dropdown-container .ngx-dropdown-list-container{box-sizing:border-box;border:1px solid rgba(0,0,0,.15);border-radius:4px;padding-left:10px;padding-right:10px;z-index:999999999;width:100%;background-clip:padding-box;background:#fff;position:absolute;-webkit-box-shadow:5px 5px 5px 0px rgba(0,0,0,.21);-moz-box-shadow:5px 5px 5px 0px rgba(0,0,0,.21);box-shadow:5px 5px 5px #00000036;overflow-y:auto}.ngx-dropdown-container .ngx-dropdown-list-container .search-container{position:relative;padding-top:10px;margin-top:5px}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:2rem;width:100%;font-size:13px;margin:0;padding:0;box-shadow:none;box-sizing:content-box;transition:all .3s}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus{border-bottom:1px solid #007bff}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus+label{transform:translateY(-2px) scale(.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label{color:#9e9e9e;position:absolute;top:0;left:0;height:100%;font-size:1rem;cursor:text;-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform-origin:0% 100%;transform-origin:0% 100%;text-align:initial;transform:translateY(12px);pointer-events:none}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label.active{transform:translateY(-2px) scale(.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container ul{margin-top:1rem;margin-bottom:1rem;list-style-type:none;padding-left:0}.ngx-dropdown-container .ngx-dropdown-list-container ul.selected-items li{margin-bottom:2px}.ngx-dropdown-container .ngx-dropdown-list-container ul.selected-items li .nsdicon-close{accent-color:#007bff;font-weight:700;font-size:large}.ngx-dropdown-container .ngx-dropdown-list-container ul.available-items li.active{background-color:#337ab7;color:#fff}.ngx-dropdown-container .ngx-dropdown-list-container ul li{font-size:inherit;cursor:pointer;display:block;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:normal}.ngx-dropdown-container .ngx-disabled{pointer-events:none;background-color:#e9ecef;opacity:1;cursor:no-drop}.scroll-y{max-width:300px;overflow-y:scroll;overflow-x:hidden}\n"] }]
    }], () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }], { _value: [{
            type: Input
        }], options: [{
            type: Input
        }], config: [{
            type: Input
        }], multiple: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], searchChange: [{
            type: Output
        }], open: [{
            type: Output
        }], close: [{
            type: Output
        }], availableOptions: [{
            type: ViewChildren,
            args: ['availableOption']
        }], clickInsideComponent: [{
            type: HostListener,
            args: ['click']
        }], blur: [{
            type: HostListener,
            args: ['blur']
        }], focus: [{
            type: HostListener,
            args: ['focus']
        }], clickOutsideComponent: [{
            type: HostListener,
            args: ['document:click']
        }], KeyPressOutsideComponent: [{
            type: HostListener,
            args: ['document:keydown']
        }], handleKeyboardEvent: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ComboboxComponent, { className: "ComboboxComponent", filePath: "lib\\widgets\\combobox\\combobox.component.ts", lineNumber: 31 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm9ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvd2lkZ2V0cy9jb21ib2JveC9jb21ib2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2NvbWJvYm94L2NvbWJvYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQVUsS0FBSyxFQUN4QixZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksRUFHWixZQUFZLEVBS1osVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ1BoRCxBQURGLCtCQUFtRixnQkFFVztJQUExRixBQURLLDJMQUFVLCtCQUF3QixLQUFDLHNLQUMvQiwwQkFBbUIsS0FBQztJQUFDLDRTQUF3QjtJQUR4RCxpQkFDNEY7SUFDNUYsaUNBQTBDO0lBQ3hDLDJCQUFvQztJQUNwQyxZQUE4QjtJQUNsQyxBQURrQyxpQkFBUSxFQUNwQzs7O0lBTHVDLGNBQXlDO0lBQXpDLHlEQUF5QztJQUNwRCxpREFBd0I7SUFDakQsY0FBa0M7SUFBbEMsdUVBQWtDO0lBRXZDLGVBQThCO0lBQTlCLCtEQUE4Qjs7OztJQUdoQyw4QkFDc0M7SUFBcEMsK1BBQVMsc0NBQXlCLEtBQUM7SUFDbkMsNEJBQTRFO0lBQzVFLCtCQUE4QjtJQUFBLFlBSTFCO0lBQ04sQUFETSxpQkFBTSxFQUNQOzs7O0lBTDJCLGVBSTFCO0lBSjBCLDJJQUkxQjs7O0lBR1IscUJBQW9FOzs7O0lBRWxFLGlDQUdnQztJQUE5Qiw0UEFBUyxpQ0FBbUIs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O1lBS1csTUFBTTtrQkFBdEIsTUFBTTtZQUtVLFlBQVk7a0JBQTVCLE1BQU07WUFLVSxJQUFJO2tCQUFwQixNQUFNO1lBS1UsS0FBSztrQkFBckIsTUFBTTtZQW1EQSxnQkFBZ0I7a0JBRHRCLFlBQVk7bUJBQUMsaUJBQWlCO1lBZ0N4QixvQkFBb0I7a0JBRDFCLFlBQVk7bUJBQUMsT0FBTztZQUtRLElBQUk7a0JBQWhDLFlBQVk7bUJBQUMsTUFBTTtZQUlVLEtBQUs7a0JBQWxDLFlBQVk7bUJBQUMsT0FBTztZQVVkLHFCQUFxQjtrQkFEM0IsWUFBWTttQkFBQyxnQkFBZ0I7WUFpQnZCLHdCQUF3QjtrQkFEOUIsWUFBWTttQkFBQyxrQkFBa0I7WUFhekIsbUJBQW1CO2tCQUR6QixZQUFZO21CQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0ZBMUt4QixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGaWx0ZXJCeVBpcGUgfSBmcm9tICcuL3BpcGVzL2ZpbHRlci1ieS5waXBlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY29tYm9ib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tYm9ib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21ib2JveC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbWJvYm94Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tYm9ib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgLyoqIHZhbHVlIG9mIHRoZSBkcm9wZG93biAqL1xuICBASW5wdXQoKSBwdWJsaWMgX3ZhbHVlOiBhbnk7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcmVxdWlyZWQgaW5wdXRzXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgb3B0aW9uczogYW55ID0gW107XG5cbiAgLyoqXG4gICAqIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAgKi9cbiAgQElucHV0KCkgcHVibGljIGNvbmZpZzogYW55ID0ge307XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgbXVsdGlwbGUgc2VsZWN0aW9uIG9yIHNpbmdsZSBzZWxlY3Rpb24gYWxsb3dlZFxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIG11bHRpcGxlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFZhbHVlXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIGNoYW5nZSBldmVudCB3aGVuIHZhbHVlIGNoYW5nZXMgdG8gcHJvdmlkZSB1c2VyIHRvIGhhbmRsZSB0aGluZ3MgaW4gY2hhbmdlIGV2ZW50XG4gICAqL1xuICBAT3V0cHV0KCkgcHVibGljIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRoZSBzZWFyY2ggdGV4dCBjaGFuZ2UgZXZlbnQgZW1pdHRlciBlbWl0dGVkIHdoZW4gdXNlciB0eXBlIGluIHRoZSBzZWFyY2ggaW5wdXRcbiAgICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VhcmNoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGRyb3Bkb3duIGlzIG9wZW4uXG4gICAqL1xuICBAT3V0cHV0KCkgcHVibGljIG9wZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gZHJvcGRvd24gaXMgb3Blbi5cbiAgICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBUb29nbGUgdGhlIGRyb3Bkb3duIGxpc3RcbiAgICovXG4gIHB1YmxpYyB0b2dnbGVEcm9wZG93biA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBdmFpbGFibGUgaXRlbXMgZm9yIHNlbGVjdGlvblxuICAgKi9cbiAgcHVibGljIGF2YWlsYWJsZUl0ZW1zOiBhbnkgPSBbXTtcblxuICAvKipcbiAgICogU2VsZWN0ZWQgSXRlbXNcbiAgICovXG4gIHB1YmxpYyBzZWxlY3RlZEl0ZW1zOiBhbnkgPSBbXTtcblxuICAvKipcbiAgICogU2VsZWN0aW9uIHRleHQgdG8gYmUgRGlzcGxheWVkXG4gICAqL1xuICBwdWJsaWMgc2VsZWN0ZWREaXNwbGF5VGV4dCA9ICctJztcblxuICAvKipcbiAgICogU2VhcmNoIHRleHRcbiAgICovXG4gIHB1YmxpYyBzZWFyY2hUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIHZhcmlhYmxlIHRvIHRyYWNrIGlmIGNsaWNrZWQgaW5zaWRlIG9yIG91dHNpZGUgb2YgY29tcG9uZW50XG4gICAqL1xuICBwdWJsaWMgY2xpY2tlZEluc2lkZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiB2YXJpYWJsZSB0byB0cmFjayBrZXlwcmVzcyBldmVudCBpbnNpZGUgYW5kIG91dHNpZCBvZiBjb21wb25lbnRcbiAgICovXG4gIHB1YmxpYyBpbnNpZGVLZXlQcmVzcyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiB2YXJpYWJsZSB0byB0cmFjayB0aGUgZm9jdXNlZCBpdGVtIHdoZW51c2VyIHVzZXMgYXJyb3cga2V5cyB0byBzZWxlY3QgaXRlbVxuICAgKi9cbiAgcHVibGljIGZvY3VzZWRJdGVtSW5kZXg6IG51bWJlciB8IG51bGw7XG5cbiAgLyoqXG4gICAqIGVsZW1lbnQgdG8gc2hvdyBub3QgZm91bmQgdGV4dCB3aGVuIG5vdCBpdG1lcyBtYXRjaCB0aGUgc2VhcmNoXG4gICAqL1xuXG4gIHB1YmxpYyBzaG93Tm90Rm91bmQgPSBmYWxzZTtcbiAgLyoqXG4gICAqIEhvbGQgdGhlIHJlZmVyZW5jZSB0byBhdmFpbGFibGUgaXRlbXMgaW4gdGhlIGxpc3QgdG8gZm9jdXMgb24gdGhlIGl0ZW0gd2hlbiBzY3JvbGxpbmdcbiAgICovXG4gIEBWaWV3Q2hpbGRyZW4oJ2F2YWlsYWJsZU9wdGlvbicpXG4gIHB1YmxpYyBhdmFpbGFibGVPcHRpb25zOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWwpO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5tdWx0aXBsZSA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIG9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7XG4gICAgLy8gZW1wdHlcbiAgfVxuICBwdWJsaWMgb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7XG4gICAgLy8gZW1wdHlcbiAgfVxuXG4gIC8qKlxuICAgKiBjbGljayBsaXN0ZW5lciBmb3IgaG9zdCBpbnNpZGUgdGhpcyBjb21wb25lbnQgaS5lXG4gICAqIGlmIG1hbnkgaW5zdGFuY2VzIGFyZSB0aGVyZSwgdGhpcyBkZXRlY3RzIGlmIGNsaWNrZWQgaW5zaWRlXG4gICAqIHRoaXMgaW5zdGFuY2VcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgcHVibGljIGNsaWNrSW5zaWRlQ29tcG9uZW50KCkge1xuICAgIHRoaXMuY2xpY2tlZEluc2lkZSA9IHRydWU7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJykgcHVibGljIGJsdXIoKSB7XG4gICAgdGhpcy50b2dnbGVEcm9wZG93biA9IGZhbHNlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBwdWJsaWMgZm9jdXMoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlU2VsZWN0RHJvcGRvd24oKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIGNsaWNrIGhhbmRsZXIgb24gZG9jdW1uZW50IHRvIGhpZGUgdGhlIG9wZW4gZHJvcGRvd24gaWYgY2xpY2tlZCBvdXRzaWRlXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycpXG4gIHB1YmxpYyBjbGlja091dHNpZGVDb21wb25lbnQoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoIXRoaXMuY2xpY2tlZEluc2lkZSkge1xuICAgICAgdGhpcy50b2dnbGVEcm9wZG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNldEFycm93S2V5QWN0aXZlRWxlbWVudCgpO1xuICAgICAgLy8gY2xlYXIgc2Vhcmggb24gY2xvc2VcbiAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xuICAgIH1cbiAgICB0aGlzLmNsaWNrZWRJbnNpZGUgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbGljayBoYW5kbGVyIG9uIGRvY3VtbmVudCB0byBoaWRlIHRoZSBvcGVuIGRyb3Bkb3duIGlmIGNsaWNrZWQgb3V0c2lkZVxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bicpXG4gIHB1YmxpYyBLZXlQcmVzc091dHNpZGVDb21wb25lbnQoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoIXRoaXMuaW5zaWRlS2V5UHJlc3MpIHtcbiAgICAgIHRoaXMudG9nZ2xlRHJvcGRvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzZXRBcnJvd0tleUFjdGl2ZUVsZW1lbnQoKTtcbiAgICB9XG4gICAgdGhpcy5pbnNpZGVLZXlQcmVzcyA9IGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGZvciBrZXkgdXAgYW5kIGRvd24gZXZlbnQgYW5kIGVudGVyIHByZXNzIGZvciBzZWxlY3RpbmcgZWxlbWVudFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBoYW5kbGVLZXlib2FyZEV2ZW50KCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMuaW5zaWRlS2V5UHJlc3MgPSB0cnVlO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKCRldmVudC5rZXlDb2RlID09PSAyNyB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnRvZ2dsZURyb3Bkb3duID0gZmFsc2U7XG4gICAgICB0aGlzLmluc2lkZUtleVByZXNzID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGF2YU9wdHMgPSB0aGlzLmF2YWlsYWJsZU9wdGlvbnMudG9BcnJheSgpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKCRldmVudC5rZXlDb2RlICE9PSA5ICYmIGF2YU9wdHMubGVuZ3RoID09PSAwICYmICF0aGlzLnRvZ2dsZURyb3Bkb3duKSB7XG4gICAgICB0aGlzLnRvZ2dsZURyb3Bkb3duID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gQXJyb3cgRG93blxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKCRldmVudC5rZXlDb2RlID09PSA0MCAmJiBhdmFPcHRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMub25BcnJvd0tleURvd24oKTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAodGhpcy5mb2N1c2VkSXRlbUluZGV4ISA+PSBhdmFPcHRzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgYXZhT3B0c1t0aGlzLmZvY3VzZWRJdGVtSW5kZXghXS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgLy8gQXJyb3cgVXBcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICgkZXZlbnQua2V5Q29kZSA9PT0gMzggJiYgYXZhT3B0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMub25BcnJvd0tleVVwKCk7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHRoaXMuZm9jdXNlZEl0ZW1JbmRleCEgPj0gYXZhT3B0cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4ID0gYXZhT3B0cy5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgICAgYXZhT3B0c1t0aGlzLmZvY3VzZWRJdGVtSW5kZXghXS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgLy8gRW50ZXJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICgkZXZlbnQua2V5Q29kZSA9PT0gMTMgJiYgdGhpcy5mb2N1c2VkSXRlbUluZGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gbmV3IEZpbHRlckJ5UGlwZSgpLnRyYW5zZm9ybShcbiAgICAgICAgdGhpcy5hdmFpbGFibGVJdGVtcyxcbiAgICAgICAgdGhpcy5zZWFyY2hUZXh0ISxcbiAgICAgICAgdGhpcy5jb25maWcuc2VhcmNoT25LZXlcbiAgICAgICk7XG4gICAgICB0aGlzLnNlbGVjdEl0ZW0oXG4gICAgICAgIGZpbHRlcmVkSXRlbXNbdGhpcy5mb2N1c2VkSXRlbUluZGV4XSxcbiAgICAgICAgdGhpcy5hdmFpbGFibGVJdGVtcy5pbmRleE9mKGZpbHRlcmVkSXRlbXNbdGhpcy5mb2N1c2VkSXRlbUluZGV4XSlcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICRldmVudC5rZXlcblxuICB9XG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBvbkluaXRcbiAgICovXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zICE9PSAndW5kZWZpbmVkJyAmJiBBcnJheS5pc0FycmF5KHRoaXMub3B0aW9ucykpIHtcbiAgICAgIGlmICghdGhpcy5jb25maWcuaXNOb3RTb3J0KSB0aGlzLmF2YWlsYWJsZUl0ZW1zID0gWy4uLnRoaXMub3B0aW9ucy5zb3J0KHRoaXMuY29uZmlnLmN1c3RvbUNvbXBhcmF0b3IpXTtcbiAgICAgIGVsc2UgdGhpcy5hdmFpbGFibGVJdGVtcyA9IFsuLi50aGlzLm9wdGlvbnNdO1xuICAgICAgdGhpcy5pbml0RHJvcGRvd25WYWx1ZXNBbmRPcHRpb25zKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFmdGVyIHZpZXcgaW5pdCB0byBzdWJzY3JpYmUgdG8gYXZhaWxhYmxlIG9wdGlvbiBjaGFuZ2VzXG4gICAqL1xuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuYXZhaWxhYmxlT3B0aW9ucy5jaGFuZ2VzLnN1YnNjcmliZSh0aGlzLnNldE5vdEZvdW5kU3RhdGUuYmluZCh0aGlzKSk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSwgaW50ZXJuYWw/OiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVswXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXREcm9wZG93blZhbHVlc0FuZE9wdGlvbnMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmICghaW50ZXJuYWwpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICghaW50ZXJuYWwpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5pc05vdFNvcnQpIHRoaXMuYXZhaWxhYmxlSXRlbXMgPSBbLi4udGhpcy5vcHRpb25zLnNvcnQodGhpcy5jb25maWcuY3VzdG9tQ29tcGFyYXRvcildO1xuICAgIGVsc2UgdGhpcy5hdmFpbGFibGVJdGVtcyA9IFsuLi50aGlzLm9wdGlvbnNdXG4gICAgdGhpcy5pbml0RHJvcGRvd25WYWx1ZXNBbmRPcHRpb25zKCk7XG4gIH1cbiAgLyoqXG4gICAqIGZ1bmN0aW9uIHNldHMgd2hldGhlciB0byBzaG93IGl0ZW1zIG5vdCBmb3VuZCB0ZXh0IG9yIG5vdFxuICAgKi9cbiAgcHVibGljIHNldE5vdEZvdW5kU3RhdGUoKSB7XG4gICAgaWYgKHRoaXMuYXZhaWxhYmxlT3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2hvd05vdEZvdW5kID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93Tm90Rm91bmQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5jZHJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgLyoqXG4gICAqIENvbXBvbmVudCBvbmNoYWdlIGkuZSB3aGVuIGFueSBvZiB0aGUgaW5wdXQgcHJvcGVydGllcyBjaGFuZ2VcbiAgICovXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgLy8gdGhpcy5zZWFyY2hUZXh0ID0gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwgW107XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoY2hhbmdlc1snb3B0aW9ucyddKSB7XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmlzTm90U29ydCkgdGhpcy5hdmFpbGFibGVJdGVtcyA9IFsuLi50aGlzLm9wdGlvbnMuc29ydCh0aGlzLmNvbmZpZy5jdXN0b21Db21wYXJhdG9yKV07XG4gICAgICBlbHNlIHRoaXMuYXZhaWxhYmxlSXRlbXMgPSBbLi4udGhpcy5vcHRpb25zXTtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoY2hhbmdlc1sndmFsdWUnXSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoY2hhbmdlc1sndmFsdWUnXS5jdXJyZW50VmFsdWUpID09PSBKU09OLnN0cmluZ2lmeShbXSkgfHxcbiAgICAgICAgY2hhbmdlc1sndmFsdWUnXS5jdXJyZW50VmFsdWUgPT09ICcnIHx8XG4gICAgICAgIGNoYW5nZXNbJ3ZhbHVlJ10uY3VycmVudFZhbHVlID09PSBudWxsXG4gICAgICApIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5pc05vdFNvcnQpIHRoaXMuYXZhaWxhYmxlSXRlbXMgPSBbLi4udGhpcy5vcHRpb25zLnNvcnQodGhpcy5jb25maWcuY3VzdG9tQ29tcGFyYXRvcildO1xuICAgICAgICBlbHNlIHRoaXMuYXZhaWxhYmxlSXRlbXMgPSBbLi4udGhpcy5vcHRpb25zXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pbml0RHJvcGRvd25WYWx1ZXNBbmRPcHRpb25zKCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzZWxjdCBhIHNlbGVjdGVkIGl0ZW1zXG4gICAqIEBwYXJhbSBpdGVtOiAgaXRlbSB0byBiZSBkZXNlbGVjdGVkXG4gICAqIEBwYXJhbSBpbmRleDogIGluZGV4IG9mIHRoZSBpdGVtXG4gICAqL1xuICBwdWJsaWMgZGVzZWxlY3RJdGVtKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKChlbGVtZW50OiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChpdGVtID09PSBlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IHNvcnRlZEl0ZW1zID0gWy4uLnRoaXMuYXZhaWxhYmxlSXRlbXNdO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKCF0aGlzLmF2YWlsYWJsZUl0ZW1zLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICB0aGlzLmF2YWlsYWJsZUl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmlzTm90U29ydCkgc29ydGVkSXRlbXMgPSB0aGlzLmF2YWlsYWJsZUl0ZW1zLnNvcnQodGhpcy5jb25maWcuY3VzdG9tQ29tcGFyYXRvcik7XG4gICAgICBlbHNlIHNvcnRlZEl0ZW1zID0gdGhpcy5hdmFpbGFibGVJdGVtcztcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gWy4uLnRoaXMuc2VsZWN0ZWRJdGVtc107XG4gICAgdGhpcy5hdmFpbGFibGVJdGVtcyA9IFsuLi5zb3J0ZWRJdGVtc107XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcuZGVmYXVsdFNvcnQpIHtcbiAgICAgIGNvbnN0IHNldDE6IFNldDxzdHJpbmc+ID0gbmV3IFNldCh0aGlzLnNlbGVjdGVkSXRlbXMpO1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gKHRoaXMuY29uZmlnLmRlZmF1bHRTb3J0IGFzIFtudW1iZXIsIHN0cmluZ11bXSkuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pLm1hcChlID0+IGVbMV0pLmZpbHRlcihlID0+IHNldDEuaGFzKGUpKVxuXG4gICAgICBjb25zdCBzZXQyOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQodGhpcy5hdmFpbGFibGVJdGVtcyk7XG4gICAgICB0aGlzLmF2YWlsYWJsZUl0ZW1zID0gKHRoaXMuY29uZmlnLmRlZmF1bHRTb3J0IGFzIFtudW1iZXIsIHN0cmluZ11bXSkuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pLm1hcChlID0+IGVbMV0pLmZpbHRlcihlID0+IHNldDIuaGFzKGUpKVxuICAgIH1cblxuICAgIHRoaXMudmFsdWVDaGFuZ2VkKCk7XG4gICAgdGhpcy5yZXNldEFycm93S2V5QWN0aXZlRWxlbWVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhbiBpdGVtXG4gICAqIEBwYXJhbSBpdGVtOiAgaXRlbSB0byBiZSBzZWxlY3RlZFxuICAgKiBAcGFyYW0gaW5kZXg6ICBpbmRleCBvZiB0aGUgaXRlbVxuICAgKi9cbiAgcHVibGljIHNlbGVjdEl0ZW0oaXRlbTogc3RyaW5nLCBpbmRleD86IG51bWJlcikge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuYXZhaWxhYmxlSXRlbXMucHVzaCh0aGlzLnNlbGVjdGVkSXRlbXNbMF0pO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgICB0aGlzLnRvZ2dsZURyb3Bkb3duID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5hdmFpbGFibGVJdGVtcy5mb3JFYWNoKChlbGVtZW50OiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChpdGVtID09PSBlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB0aGlzLmF2YWlsYWJsZUl0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHRoaXMuY29uZmlnLmNsZWFyT25TZWxlY3Rpb24pIHtcbiAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbLi4udGhpcy5zZWxlY3RlZEl0ZW1zXTtcbiAgICB0aGlzLmF2YWlsYWJsZUl0ZW1zID0gWy4uLnRoaXMuYXZhaWxhYmxlSXRlbXNdO1xuXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5pc05vdFNvcnQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zb3J0KHRoaXMuY29uZmlnLmN1c3RvbUNvbXBhcmF0b3IpO1xuICAgICAgdGhpcy5hdmFpbGFibGVJdGVtcy5zb3J0KHRoaXMuY29uZmlnLmN1c3RvbUNvbXBhcmF0b3IpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5kZWZhdWx0U29ydCkge1xuICAgICAgY29uc3Qgc2V0MTogU2V0PHN0cmluZz4gPSBuZXcgU2V0KHRoaXMuc2VsZWN0ZWRJdGVtcyk7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSAodGhpcy5jb25maWcuZGVmYXVsdFNvcnQgYXMgW251bWJlciwgc3RyaW5nXVtdKS5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSkubWFwKGUgPT4gZVsxXSkuZmlsdGVyKGUgPT4gc2V0MS5oYXMoZSkpXG5cbiAgICAgIGNvbnN0IHNldDI6IFNldDxzdHJpbmc+ID0gbmV3IFNldCh0aGlzLmF2YWlsYWJsZUl0ZW1zKTtcbiAgICAgIHRoaXMuYXZhaWxhYmxlSXRlbXMgPSAodGhpcy5jb25maWcuZGVmYXVsdFNvcnQgYXMgW251bWJlciwgc3RyaW5nXVtdKS5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSkubWFwKGUgPT4gZVsxXSkuZmlsdGVyKGUgPT4gc2V0Mi5oYXMoZSkpXG4gICAgfVxuXG4gICAgLy8gdGhpcy5zZWFyY2hUZXh0ID0gbnVsbDtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlZCgpO1xuICAgIHRoaXMucmVzZXRBcnJvd0tleUFjdGl2ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHNlbGVjdGVkIGl0ZW1zIGNoYW5nZXMgdHJpZ2dlciB0aGUgY2hhYW5nZSBiYWNrIHRvIHBhcmVudFxuICAgKi9cbiAgcHVibGljIHZhbHVlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW1zLCB0cnVlKTtcbiAgICAvLyB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh7IHZhbHVlOiB0aGlzLnZhbHVlIH0pO1xuICAgIHRoaXMuc2V0U2VsZWN0ZWREaXNwbGF5VGV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgZHJvcGRvd25saXN0IG9uL29mZlxuICAgKi9cbiAgcHVibGljIHRvZ2dsZVNlbGVjdERyb3Bkb3duKCkge1xuICAgIHRoaXMudG9nZ2xlRHJvcGRvd24gPSAhdGhpcy50b2dnbGVEcm9wZG93bjtcbiAgICBpZiAodGhpcy50b2dnbGVEcm9wZG93bikge1xuICAgICAgdGhpcy5vcGVuLmVtaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5jbG9zZS5lbWl0KCk7XG4gICAgfVxuICAgIHRoaXMucmVzZXRBcnJvd0tleUFjdGl2ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY2hhbmdlIGhhbmRsZXIgZm9yIHNlYXJjaCB0ZXh0XG4gICAqL1xuICBwdWJsaWMgc2VhcmNoVGV4dENoYW5nZWQoKSB7XG4gICAgdGhpcy5zZWFyY2hDaGFuZ2UuZW1pdCh0aGlzLnNlYXJjaFRleHQpO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVNlYXJjaFRleHQoJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogaW5pdGlhbGl6ZSB0aGUgY29uZmlnIGFuZCBvdGhlciBwcm9wZXJ0aWVzXG4gICAqL1xuICBwcml2YXRlIGluaXREcm9wZG93blZhbHVlc0FuZE9wdGlvbnMoKSB7XG4gICAgY29uc3QgY29uZmlnOiBhbnkgPSB7XG4gICAgICBkaXNwbGF5S2V5OiAnZGVzY3JpcHRpb24nLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBzZWFyY2g6IGZhbHNlLFxuICAgICAgcGxhY2Vob2xkZXI6ICctJyxcbiAgICAgIHNlYXJjaFBsYWNlaG9sZGVyOiAnUGVzcXVpc2FyICcsXG4gICAgICBsaW1pdFRvOiAwLFxuICAgICAgY3VzdG9tQ29tcGFyYXRvcjogdW5kZWZpbmVkLFxuICAgICAgbm9SZXN1bHRzRm91bmQ6ICdOYWRhIGVuY29udHJhZG8hJyxcbiAgICAgIG1vcmVUZXh0OiAnU2VsZWNpb25hZG9zJyxcbiAgICAgIHNlYXJjaE9uS2V5OiBudWxsLFxuICAgICAgY2xlYXJPblNlbGVjdGlvbjogZmFsc2UsXG4gICAgICBpbnB1dERpcmVjdGlvbjogJ2x0cicsXG4gICAgfTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0aGlzLmNvbmZpZyA9PT0gJ3VuZGVmaW5lZCcgfHwgT2JqZWN0LmtleXModGhpcy5jb25maWcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5jb25maWcgPSB7IC4uLmNvbmZpZyB9O1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhjb25maWcpKSB7XG4gICAgICB0aGlzLmNvbmZpZ1trZXldID0gdGhpcy5jb25maWdba2V5XSA/IHRoaXMuY29uZmlnW2tleV0gOiBjb25maWdba2V5XTtcbiAgICB9XG4gICAgdGhpcy5jb25maWcgPSB7IC4uLnRoaXMuY29uZmlnIH07XG4gICAgLy8gQWRkaW5nIHBsYWNlaG9sZGVyIGluIGNvbmZpZyBhcyBkZWZhdWx0IHBhcmFtXG4gICAgdGhpcy5zZWxlY3RlZERpc3BsYXlUZXh0ID0gdGhpcy5jb25maWdbJ3BsYWNlaG9sZGVyJ107XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gJycgJiYgdHlwZW9mIHRoaXMudmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSB0aGlzLnZhbHVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnZhbHVlICE9PSAnJyAmJiB0aGlzLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtc1swXSA9IHRoaXMudmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGluZCA9IHRoaXMuYXZhaWxhYmxlSXRlbXMuZmluZEluZGV4KFxuICAgICAgICAgIChhSXRlbTogYW55KSA9PiBKU09OLnN0cmluZ2lmeShpdGVtKSA9PT0gSlNPTi5zdHJpbmdpZnkoYUl0ZW0pXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpbmQgIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5hdmFpbGFibGVJdGVtcy5zcGxpY2UoaW5kLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U2VsZWN0ZWREaXNwbGF5VGV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCB0aGUgdGV4dCB0byBiZSBkaXNwbGF5ZWRcbiAgICovXG4gIHByaXZhdGUgc2V0U2VsZWN0ZWREaXNwbGF5VGV4dCgpIHtcbiAgICBsZXQgdGV4dDogc3RyaW5nID0gdGhpcy5zZWxlY3RlZEl0ZW1zWzBdO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGVkSXRlbXNbMF0gPT09ICdvYmplY3QnKSB7XG4gICAgICB0ZXh0ID0gdGhpcy5jb25maWcuZGlzcGxheUZuXG4gICAgICAgID8gdGhpcy5jb25maWcuZGlzcGxheUZuKHRoaXMuc2VsZWN0ZWRJdGVtc1swXSlcbiAgICAgICAgOiB0aGlzLnNlbGVjdGVkSXRlbXNbMF1bdGhpcy5jb25maWcuZGlzcGxheUtleV07XG4gICAgfVxuICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGlzcGxheVRleHQgPVxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAxXG4gICAgICAgICAgPyB0ZXh0XG4gICAgICAgICAgOiB0ZXh0ICtcbiAgICAgICAgICBgICsgJHt0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMX0gJHt0aGlzLmNvbmZpZy5tb3JlVGV4dH1gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGlzcGxheVRleHQgPVxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAwID8gdGhpcy5jb25maWcucGxhY2Vob2xkZXIgOiB0ZXh0O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGZvciBhcnJvdyBrZXkgdXAgZXZlbnQgdGhhdHMgZm9jdXNlcyBvbiBhIGl0ZW1cbiAgICovXG4gIHByaXZhdGUgb25BcnJvd0tleVVwKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHRoaXMuZm9jdXNlZEl0ZW1JbmRleCA9PT0gMCkge1xuICAgICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4ID0gdGhpcy5hdmFpbGFibGVJdGVtcy5sZW5ndGggLSAxO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0aGlzLm9uQXJyb3dLZXkoKSkge1xuICAgICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4ITtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgYXJyb3cga2V5IGRvd24gZXZlbnQgdGhhdHMgZm9jdXNlcyBvbiBhIGl0ZW1cbiAgICovXG4gIHByaXZhdGUgb25BcnJvd0tleURvd24oKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodGhpcy5mb2N1c2VkSXRlbUluZGV4ID09PSB0aGlzLmF2YWlsYWJsZUl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleCA9IDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHRoaXMub25BcnJvd0tleSgpKSB7XG4gICAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXghKys7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkFycm93S2V5KCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHRoaXMuZm9jdXNlZEl0ZW1JbmRleCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4ID0gMDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogd2lsbCByZXNldCB0aGUgZWxlbWVudCB0aGF0IGlzIG1hcmtlZCBhY3RpdmUgdXNpbmcgYXJyb3cga2V5c1xuICAgKi9cbiAgcHJpdmF0ZSByZXNldEFycm93S2V5QWN0aXZlRWxlbWVudCgpIHtcbiAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXggPSBudWxsO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibmd4LWRyb3Bkb3duLWNvbnRhaW5lclwiIHRhYmluZGV4PVwiMFwiPlxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0YWJpbmRleD1cIi0xXCIgY2xhc3M9XCJuZ3gtZHJvcGRvd24tYnV0dG9uXCIgW25nQ2xhc3NdPVwieyAnbmd4LWRpc2FibGVkJzogZGlzYWJsZWQgfVwiXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKGNsaWNrKT1cInRvZ2dsZVNlbGVjdERyb3Bkb3duKClcIj5cbiAgICA8c3BhbiBjbGFzcz1cImRpc3BsYXktdGV4dFwiPnt7IHNlbGVjdGVkRGlzcGxheVRleHQgfX0gPC9zcGFuPlxuICAgIDxhcHAtc3ZnLXN0b3JhZ2Ugc3ZnTmFtZT1cImNoZXZyb24tZG93blwiIHN2Z0NvbG9yPVwiIzM0M0E0MFwiIHN2Z1NpemU9XCJzbWFsbFwiLz5cbiAgPC9idXR0b24+XG4gIDxkaXYgY2xhc3M9XCJuZ3gtZHJvcGRvd24tbGlzdC1jb250YWluZXIgc2Nyb2xsLXlcIiAqbmdJZj1cInRvZ2dsZURyb3Bkb3duXCIgW3N0eWxlLm1heEhlaWdodF09XCJjb25maWcuaGVpZ2h0XCI+XG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaC1jb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgKm5nSWY9XCJjb25maWcuc2VhcmNoXCI+XG4gICAgICA8aW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VTZWFyY2hUZXh0KCRldmVudClcIiBbc3R5bGUuZGlyZWN0aW9uXT1cImNvbmZpZy5pbnB1dERpcmVjdGlvblwiIG5hbWU9XCJzZWFyY2gtdGV4dFwiXG4gICAgICAgIChpbnB1dCk9XCJzZWFyY2hUZXh0Q2hhbmdlZCgpXCIgWyhuZ01vZGVsKV09XCJzZWFyY2hUZXh0XCIgdGFiaW5kZXg9XCItMVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIC8+XG4gICAgICA8bGFiZWwgW25nQ2xhc3NdPVwieyBhY3RpdmU6IHNlYXJjaFRleHQgfVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5zZGljb24tc2VhcmNoXCI+PC9zcGFuPlxuICAgICAgICB7eyBjb25maWcuc2VhcmNoUGxhY2Vob2xkZXIgfX08L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDx1bCBjbGFzcz1cInNlbGVjdGVkLWl0ZW1zXCI+XG4gICAgICA8bGkgY2xhc3M9XCJkLWZsZXggZmxleC1yb3dcIiB0YWJpbmRleD1cIi0xXCIgKm5nRm9yPVwibGV0IHNlbGVjdGVkIG9mIHNlbGVjdGVkSXRlbXM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAoY2xpY2spPVwiZGVzZWxlY3RJdGVtKHNlbGVjdGVkLCBpKVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmb3JtLWNoZWNrIG5zZGljb24tY2xvc2UgbWUtMlwiIGNoZWNrZWQ9XCJ0cnVlXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOiAycHg7XCI+e3tcbiAgICAgICAgICBjb25maWcuZGlzcGxheUZuXG4gICAgICAgICAgPyBjb25maWcuZGlzcGxheUZuKHNlbGVjdGVkKVxuICAgICAgICAgIDogc2VsZWN0ZWRbY29uZmlnLmRpc3BsYXlLZXldIHx8IHNlbGVjdGVkXG4gICAgICAgICAgfX08L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8aHIgKm5nSWY9XCJzZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDAgJiYgYXZhaWxhYmxlSXRlbXMubGVuZ3RoID4gMFwiIC8+XG4gICAgPHVsIGNsYXNzPVwiYXZhaWxhYmxlLWl0ZW1zXCI+XG4gICAgICA8bGkgY2xhc3M9XCJkLWZsZXggZmxleC1yb3dcIiAjYXZhaWxhYmxlT3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGF2YWlsYWJsZUl0ZW1zIHwgZmlsdGVyQnk6IHNlYXJjaFRleHQ6IGNvbmZpZy5zZWFyY2hPbktleVxuXHRcdFx0fCBsaW1pdFRvOiBjb25maWcubGltaXRUbzsgbGV0IGkgPSBpbmRleFwiIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICBbbmdDbGFzc109XCJ7IGFjdGl2ZTogZm9jdXNlZEl0ZW1JbmRleCA9PSBpICYmICFpdGVtLmRpc2FibGVkLCBkaXNhYmxlZDogaXRlbS5kaXNhYmxlZCB9XCJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdEl0ZW0oaXRlbSwgaSlcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZm9ybS1jaGVjayBuc2RpY29uLWNsb3NlIG1lLTJcIj5cbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IDJweDtcIj5cbiAgICAgICAgICB7eyBjb25maWcuZGlzcGxheUZuID8gY29uZmlnLmRpc3BsYXlGbihpdGVtKSA6IGl0ZW1bY29uZmlnLmRpc3BsYXlLZXldIHx8IGl0ZW0gfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgICAgPGxpICpuZ0lmPVwic2hvd05vdEZvdW5kXCI+e3sgY29uZmlnLm5vUmVzdWx0c0ZvdW5kIH19PC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19
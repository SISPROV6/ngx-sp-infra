import { Component, Input, EventEmitter, Output, HostListener, ViewChildren, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FilterByPipe } from './pipes/filter-by.pipe';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../svg-storage/svg-storage.component";
import * as i4 from "./pipes/filter-by.pipe";
import * as i5 from "./pipes/limit-to.pipe";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: ComboboxComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.11", type: ComboboxComponent, selector: "app-combobox", inputs: { _value: "_value", options: "options", config: "config", multiple: "multiple", disabled: "disabled" }, outputs: { change: "change", searchChange: "searchChange", open: "open", close: "close" }, host: { listeners: { "click": "clickInsideComponent()", "blur": "blur()", "focus": "focus()", "document:click": "clickOutsideComponent()", "document:keydown": "KeyPressOutsideComponent()", "keydown": "handleKeyboardEvent($event)" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ComboboxComponent),
                multi: true,
            },
        ], viewQueries: [{ propertyName: "availableOptions", predicate: ["availableOption"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"ngx-dropdown-container\" tabindex=\"0\">\r\n  <button type=\"button\" tabindex=\"-1\" class=\"ngx-dropdown-button\" [ngClass]=\"{ 'ngx-disabled': disabled }\"\r\n    [disabled]=\"disabled\" (click)=\"toggleSelectDropdown()\">\r\n    <span class=\"display-text\">{{ selectedDisplayText }} </span>\r\n    <app-svg-storage svgName=\"chevron-down\" svgColor=\"#343A40\" svgSize=\"small\"/>\r\n  </button>\r\n  <div class=\"ngx-dropdown-list-container scroll-y\" *ngIf=\"toggleDropdown\" [style.maxHeight]=\"config.height\">\r\n    <div class=\"search-container d-flex justify-content-between\" *ngIf=\"config.search\">\r\n      <input (change)=\"changeSearchText($event)\" [style.direction]=\"config.inputDirection\" name=\"search-text\"\r\n        (input)=\"searchTextChanged()\" [(ngModel)]=\"searchText\" tabindex=\"-1\" autocomplete=\"off\" />\r\n      <label [ngClass]=\"{ active: searchText }\">\r\n        <span class=\"nsdicon-search\"></span>\r\n        {{ config.searchPlaceholder }}</label>\r\n    </div>\r\n    <ul class=\"selected-items\">\r\n      <li class=\"d-flex flex-row\" tabindex=\"-1\" *ngFor=\"let selected of selectedItems; let i = index\"\r\n        (click)=\"deselectItem(selected, i)\">\r\n        <input type=\"checkbox\" class=\"form-check nsdicon-close me-2\" checked=\"true\">\r\n        <div style=\"margin-top: 2px;\">{{\r\n          config.displayFn\r\n          ? config.displayFn(selected)\r\n          : selected[config.displayKey] || selected\r\n          }}</div>\r\n      </li>\r\n    </ul>\r\n    <hr *ngIf=\"selectedItems.length > 0 && availableItems.length > 0\" />\r\n    <ul class=\"available-items\">\r\n      <li class=\"d-flex flex-row\" #availableOption *ngFor=\"let item of availableItems | filterBy: searchText: config.searchOnKey\r\n\t\t\t| limitTo: config.limitTo; let i = index\" tabindex=\"-1\"\r\n        [ngClass]=\"{ active: focusedItemIndex == i && !item.disabled, disabled: item.disabled }\"\r\n        (click)=\"selectItem(item, i)\">\r\n        <input type=\"checkbox\" class=\"form-check nsdicon-close me-2\">\r\n        <div style=\"margin-top: 2px;\">\r\n          {{ config.displayFn ? config.displayFn(item) : item[config.displayKey] || item }}\r\n        </div>\r\n      </li>\r\n      <li *ngIf=\"showNotFound\">{{ config.noResultsFound }}</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n", styles: [".ngx-dropdown-container{width:100%;position:relative}.ngx-dropdown-container button{display:inline-block;margin-bottom:0;font-weight:400;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;user-select:none;border:1px solid #DEE2E6;border-radius:.375rem;line-height:1.5;color:#333;background-color:#fff;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;text-align:left}.ngx-dropdown-container button span{display:inline;vertical-align:middle}.ngx-dropdown-container button .nsdicon-angle-down{right:5px;position:relative;float:right}.ngx-dropdown-container button .nsdicon-angle-down:before{border-style:solid;border-width:.1em .1em 0 0;content:\"\";display:inline-block;height:10px;position:relative;vertical-align:text-top;width:10px;top:0;transform:rotate(135deg)}.ngx-dropdown-container .ngx-dropdown-button{width:100%;min-height:30px;padding:.375rem .75rem;background-color:#fff;font-size:1rem;display:flex;align-items:center;justify-content:space-between}.ngx-dropdown-container .ngx-dropdown-button .display-text{display:inline-block;width:calc(100% - 20px)}.ngx-dropdown-container .ngx-dropdown-list-container{box-sizing:border-box;border:1px solid rgba(0,0,0,.15);border-radius:4px;padding-left:10px;padding-right:10px;z-index:999999999;width:100%;background-clip:padding-box;background:#fff;position:absolute;-webkit-box-shadow:5px 5px 5px 0px rgba(0,0,0,.21);-moz-box-shadow:5px 5px 5px 0px rgba(0,0,0,.21);box-shadow:5px 5px 5px #00000036;overflow-y:auto}.ngx-dropdown-container .ngx-dropdown-list-container .search-container{position:relative;padding-top:10px;margin-top:5px}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:2rem;width:100%;font-size:13px;margin:0;padding:0;box-shadow:none;box-sizing:content-box;transition:all .3s}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus{border-bottom:1px solid #007bff}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus+label{transform:translateY(-2px) scale(.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label{color:#9e9e9e;position:absolute;top:0;left:0;height:100%;font-size:1rem;cursor:text;-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform-origin:0% 100%;transform-origin:0% 100%;text-align:initial;transform:translateY(12px);pointer-events:none}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label.active{transform:translateY(-2px) scale(.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container ul{margin-top:1rem;margin-bottom:1rem;list-style-type:none;padding-left:0}.ngx-dropdown-container .ngx-dropdown-list-container ul.selected-items li{margin-bottom:2px}.ngx-dropdown-container .ngx-dropdown-list-container ul.selected-items li .nsdicon-close{accent-color:#007bff;font-weight:700;font-size:large}.ngx-dropdown-container .ngx-dropdown-list-container ul.available-items li.active{background-color:#337ab7;color:#fff}.ngx-dropdown-container .ngx-dropdown-list-container ul li{font-size:inherit;cursor:pointer;display:block;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:normal}.ngx-dropdown-container .ngx-disabled{pointer-events:none;background-color:#e9ecef;opacity:1;cursor:no-drop}.scroll-y{max-width:300px;overflow-y:scroll;overflow-x:hidden}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.SvgStorageComponent, selector: "app-svg-storage", inputs: ["svgName", "svgColor", "svgFill", "svgSize", "svgStrokeWidth"] }, { kind: "pipe", type: i4.FilterByPipe, name: "filterBy" }, { kind: "pipe", type: i5.LimitToPipe, name: "limitTo" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: ComboboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-combobox', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ComboboxComponent),
                            multi: true,
                        },
                    ], template: "<div class=\"ngx-dropdown-container\" tabindex=\"0\">\r\n  <button type=\"button\" tabindex=\"-1\" class=\"ngx-dropdown-button\" [ngClass]=\"{ 'ngx-disabled': disabled }\"\r\n    [disabled]=\"disabled\" (click)=\"toggleSelectDropdown()\">\r\n    <span class=\"display-text\">{{ selectedDisplayText }} </span>\r\n    <app-svg-storage svgName=\"chevron-down\" svgColor=\"#343A40\" svgSize=\"small\"/>\r\n  </button>\r\n  <div class=\"ngx-dropdown-list-container scroll-y\" *ngIf=\"toggleDropdown\" [style.maxHeight]=\"config.height\">\r\n    <div class=\"search-container d-flex justify-content-between\" *ngIf=\"config.search\">\r\n      <input (change)=\"changeSearchText($event)\" [style.direction]=\"config.inputDirection\" name=\"search-text\"\r\n        (input)=\"searchTextChanged()\" [(ngModel)]=\"searchText\" tabindex=\"-1\" autocomplete=\"off\" />\r\n      <label [ngClass]=\"{ active: searchText }\">\r\n        <span class=\"nsdicon-search\"></span>\r\n        {{ config.searchPlaceholder }}</label>\r\n    </div>\r\n    <ul class=\"selected-items\">\r\n      <li class=\"d-flex flex-row\" tabindex=\"-1\" *ngFor=\"let selected of selectedItems; let i = index\"\r\n        (click)=\"deselectItem(selected, i)\">\r\n        <input type=\"checkbox\" class=\"form-check nsdicon-close me-2\" checked=\"true\">\r\n        <div style=\"margin-top: 2px;\">{{\r\n          config.displayFn\r\n          ? config.displayFn(selected)\r\n          : selected[config.displayKey] || selected\r\n          }}</div>\r\n      </li>\r\n    </ul>\r\n    <hr *ngIf=\"selectedItems.length > 0 && availableItems.length > 0\" />\r\n    <ul class=\"available-items\">\r\n      <li class=\"d-flex flex-row\" #availableOption *ngFor=\"let item of availableItems | filterBy: searchText: config.searchOnKey\r\n\t\t\t| limitTo: config.limitTo; let i = index\" tabindex=\"-1\"\r\n        [ngClass]=\"{ active: focusedItemIndex == i && !item.disabled, disabled: item.disabled }\"\r\n        (click)=\"selectItem(item, i)\">\r\n        <input type=\"checkbox\" class=\"form-check nsdicon-close me-2\">\r\n        <div style=\"margin-top: 2px;\">\r\n          {{ config.displayFn ? config.displayFn(item) : item[config.displayKey] || item }}\r\n        </div>\r\n      </li>\r\n      <li *ngIf=\"showNotFound\">{{ config.noResultsFound }}</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n", styles: [".ngx-dropdown-container{width:100%;position:relative}.ngx-dropdown-container button{display:inline-block;margin-bottom:0;font-weight:400;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;user-select:none;border:1px solid #DEE2E6;border-radius:.375rem;line-height:1.5;color:#333;background-color:#fff;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;text-align:left}.ngx-dropdown-container button span{display:inline;vertical-align:middle}.ngx-dropdown-container button .nsdicon-angle-down{right:5px;position:relative;float:right}.ngx-dropdown-container button .nsdicon-angle-down:before{border-style:solid;border-width:.1em .1em 0 0;content:\"\";display:inline-block;height:10px;position:relative;vertical-align:text-top;width:10px;top:0;transform:rotate(135deg)}.ngx-dropdown-container .ngx-dropdown-button{width:100%;min-height:30px;padding:.375rem .75rem;background-color:#fff;font-size:1rem;display:flex;align-items:center;justify-content:space-between}.ngx-dropdown-container .ngx-dropdown-button .display-text{display:inline-block;width:calc(100% - 20px)}.ngx-dropdown-container .ngx-dropdown-list-container{box-sizing:border-box;border:1px solid rgba(0,0,0,.15);border-radius:4px;padding-left:10px;padding-right:10px;z-index:999999999;width:100%;background-clip:padding-box;background:#fff;position:absolute;-webkit-box-shadow:5px 5px 5px 0px rgba(0,0,0,.21);-moz-box-shadow:5px 5px 5px 0px rgba(0,0,0,.21);box-shadow:5px 5px 5px #00000036;overflow-y:auto}.ngx-dropdown-container .ngx-dropdown-list-container .search-container{position:relative;padding-top:10px;margin-top:5px}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:2rem;width:100%;font-size:13px;margin:0;padding:0;box-shadow:none;box-sizing:content-box;transition:all .3s}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus{border-bottom:1px solid #007bff}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus+label{transform:translateY(-2px) scale(.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label{color:#9e9e9e;position:absolute;top:0;left:0;height:100%;font-size:1rem;cursor:text;-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform-origin:0% 100%;transform-origin:0% 100%;text-align:initial;transform:translateY(12px);pointer-events:none}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label.active{transform:translateY(-2px) scale(.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container ul{margin-top:1rem;margin-bottom:1rem;list-style-type:none;padding-left:0}.ngx-dropdown-container .ngx-dropdown-list-container ul.selected-items li{margin-bottom:2px}.ngx-dropdown-container .ngx-dropdown-list-container ul.selected-items li .nsdicon-close{accent-color:#007bff;font-weight:700;font-size:large}.ngx-dropdown-container .ngx-dropdown-list-container ul.available-items li.active{background-color:#337ab7;color:#fff}.ngx-dropdown-container .ngx-dropdown-list-container ul li{font-size:inherit;cursor:pointer;display:block;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:normal}.ngx-dropdown-container .ngx-disabled{pointer-events:none;background-color:#e9ecef;opacity:1;cursor:no-drop}.scroll-y{max-width:300px;overflow-y:scroll;overflow-x:hidden}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }], propDecorators: { _value: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm9ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvd2lkZ2V0cy9jb21ib2JveC9jb21ib2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2NvbWJvYm94L2NvbWJvYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQVUsS0FBSyxFQUN4QixZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksRUFHWixZQUFZLEVBS1osVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztBQWV0RCxNQUFNLE9BQU8saUJBQWlCO0lBZ0c1QixJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEdBQUc7UUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsWUFDVSxLQUF3QixFQUN6QixXQUF1QjtRQUR0QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQXRHaEM7O1dBRUc7UUFDYSxZQUFPLEdBQVEsRUFBRSxDQUFDO1FBRWxDOztXQUVHO1FBQ2EsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUVqQzs7V0FFRztRQUNhLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFPakM7O1dBRUc7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QUFDLGtCQUFrQjtnQkFhekIsbUJBQW1CO3NCQUR6QixZQUFZO3VCQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPdXRwdXQsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIGZvcndhcmRSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZpbHRlckJ5UGlwZSB9IGZyb20gJy4vcGlwZXMvZmlsdGVyLWJ5LnBpcGUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWNvbWJvYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tYm9ib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbWJvYm94LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDb21ib2JveENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21ib2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgLyoqIHZhbHVlIG9mIHRoZSBkcm9wZG93biAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBfdmFsdWU6IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSByZXF1aXJlZCBpbnB1dHNcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgb3B0aW9uczogYW55ID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjb25maWc6IGFueSA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBXaGV0aGVyIG11bHRpcGxlIHNlbGVjdGlvbiBvciBzaW5nbGUgc2VsZWN0aW9uIGFsbG93ZWRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbXVsdGlwbGUgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVmFsdWVcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIGNoYW5nZSBldmVudCB3aGVuIHZhbHVlIGNoYW5nZXMgdG8gcHJvdmlkZSB1c2VyIHRvIGhhbmRsZSB0aGluZ3MgaW4gY2hhbmdlIGV2ZW50XHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgc2VhcmNoIHRleHQgY2hhbmdlIGV2ZW50IGVtaXR0ZXIgZW1pdHRlZCB3aGVuIHVzZXIgdHlwZSBpbiB0aGUgc2VhcmNoIGlucHV0XHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBzZWFyY2hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gZHJvcGRvd24gaXMgb3Blbi5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgcHVibGljIG9wZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gZHJvcGRvd24gaXMgb3Blbi5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgcHVibGljIGNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVG9vZ2xlIHRoZSBkcm9wZG93biBsaXN0XHJcbiAgICovXHJcbiAgcHVibGljIHRvZ2dsZURyb3Bkb3duID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEF2YWlsYWJsZSBpdGVtcyBmb3Igc2VsZWN0aW9uXHJcbiAgICovXHJcbiAgcHVibGljIGF2YWlsYWJsZUl0ZW1zOiBhbnkgPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0ZWQgSXRlbXNcclxuICAgKi9cclxuICBwdWJsaWMgc2VsZWN0ZWRJdGVtczogYW55ID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdGlvbiB0ZXh0IHRvIGJlIERpc3BsYXllZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZWxlY3RlZERpc3BsYXlUZXh0ID0gJy0nO1xyXG5cclxuICAvKipcclxuICAgKiBTZWFyY2ggdGV4dFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZWFyY2hUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIHZhcmlhYmxlIHRvIHRyYWNrIGlmIGNsaWNrZWQgaW5zaWRlIG9yIG91dHNpZGUgb2YgY29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIGNsaWNrZWRJbnNpZGUgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogdmFyaWFibGUgdG8gdHJhY2sga2V5cHJlc3MgZXZlbnQgaW5zaWRlIGFuZCBvdXRzaWQgb2YgY29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIGluc2lkZUtleVByZXNzID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIHZhcmlhYmxlIHRvIHRyYWNrIHRoZSBmb2N1c2VkIGl0ZW0gd2hlbnVzZXIgdXNlcyBhcnJvdyBrZXlzIHRvIHNlbGVjdCBpdGVtXHJcbiAgICovXHJcbiAgcHVibGljIGZvY3VzZWRJdGVtSW5kZXg6IG51bWJlciB8IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIGVsZW1lbnQgdG8gc2hvdyBub3QgZm91bmQgdGV4dCB3aGVuIG5vdCBpdG1lcyBtYXRjaCB0aGUgc2VhcmNoXHJcbiAgICovXHJcblxyXG4gIHB1YmxpYyBzaG93Tm90Rm91bmQgPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBIb2xkIHRoZSByZWZlcmVuY2UgdG8gYXZhaWxhYmxlIGl0ZW1zIGluIHRoZSBsaXN0IHRvIGZvY3VzIG9uIHRoZSBpdGVtIHdoZW4gc2Nyb2xsaW5nXHJcbiAgICovXHJcbiAgQFZpZXdDaGlsZHJlbignYXZhaWxhYmxlT3B0aW9uJylcclxuICBwdWJsaWMgYXZhaWxhYmxlT3B0aW9uczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG4gIHNldCB2YWx1ZSh2YWwpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh2YWwpO1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWZcclxuICApIHtcclxuICAgIHRoaXMubXVsdGlwbGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNoYW5nZTogYW55ID0gKCkgPT4ge1xyXG4gICAgLy8gZW1wdHlcclxuICB9XHJcbiAgcHVibGljIG9uVG91Y2hlZDogYW55ID0gKCkgPT4ge1xyXG4gICAgLy8gZW1wdHlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNsaWNrIGxpc3RlbmVyIGZvciBob3N0IGluc2lkZSB0aGlzIGNvbXBvbmVudCBpLmVcclxuICAgKiBpZiBtYW55IGluc3RhbmNlcyBhcmUgdGhlcmUsIHRoaXMgZGV0ZWN0cyBpZiBjbGlja2VkIGluc2lkZVxyXG4gICAqIHRoaXMgaW5zdGFuY2VcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgcHVibGljIGNsaWNrSW5zaWRlQ29tcG9uZW50KCkge1xyXG4gICAgdGhpcy5jbGlja2VkSW5zaWRlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBwdWJsaWMgYmx1cigpIHtcclxuICAgIHRoaXMudG9nZ2xlRHJvcGRvd24gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgcHVibGljIGZvY3VzKCkge1xyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnRvZ2dsZVNlbGVjdERyb3Bkb3duKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGNsaWNrIGhhbmRsZXIgb24gZG9jdW1uZW50IHRvIGhpZGUgdGhlIG9wZW4gZHJvcGRvd24gaWYgY2xpY2tlZCBvdXRzaWRlXHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snKVxyXG4gIHB1YmxpYyBjbGlja091dHNpZGVDb21wb25lbnQoKSB7XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgaWYgKCF0aGlzLmNsaWNrZWRJbnNpZGUpIHtcclxuICAgICAgdGhpcy50b2dnbGVEcm9wZG93biA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJlc2V0QXJyb3dLZXlBY3RpdmVFbGVtZW50KCk7XHJcbiAgICAgIC8vIGNsZWFyIHNlYXJoIG9uIGNsb3NlXHJcbiAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5jbG9zZS5lbWl0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsaWNrZWRJbnNpZGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNsaWNrIGhhbmRsZXIgb24gZG9jdW1uZW50IHRvIGhpZGUgdGhlIG9wZW4gZHJvcGRvd24gaWYgY2xpY2tlZCBvdXRzaWRlXHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bicpXHJcbiAgcHVibGljIEtleVByZXNzT3V0c2lkZUNvbXBvbmVudCgpIHtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAoIXRoaXMuaW5zaWRlS2V5UHJlc3MpIHtcclxuICAgICAgdGhpcy50b2dnbGVEcm9wZG93biA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJlc2V0QXJyb3dLZXlBY3RpdmVFbGVtZW50KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluc2lkZUtleVByZXNzID0gZmFsc2U7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGtleSB1cCBhbmQgZG93biBldmVudCBhbmQgZW50ZXIgcHJlc3MgZm9yIHNlbGVjdGluZyBlbGVtZW50XHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIGhhbmRsZUtleWJvYXJkRXZlbnQoJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICB0aGlzLmluc2lkZUtleVByZXNzID0gdHJ1ZTtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAoJGV2ZW50LmtleUNvZGUgPT09IDI3IHx8IHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy50b2dnbGVEcm9wZG93biA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmluc2lkZUtleVByZXNzID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGF2YU9wdHMgPSB0aGlzLmF2YWlsYWJsZU9wdGlvbnMudG9BcnJheSgpO1xyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgIGlmICgkZXZlbnQua2V5Q29kZSAhPT0gOSAmJiBhdmFPcHRzLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy50b2dnbGVEcm9wZG93bikge1xyXG4gICAgICB0aGlzLnRvZ2dsZURyb3Bkb3duID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIEFycm93IERvd25cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAoJGV2ZW50LmtleUNvZGUgPT09IDQwICYmIGF2YU9wdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLm9uQXJyb3dLZXlEb3duKCk7XHJcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICAgIGlmICh0aGlzLmZvY3VzZWRJdGVtSW5kZXghID49IGF2YU9wdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4ID0gMDtcclxuICAgICAgfVxyXG4gICAgICBhdmFPcHRzW3RoaXMuZm9jdXNlZEl0ZW1JbmRleCFdLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICAvLyBBcnJvdyBVcFxyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgIGlmICgkZXZlbnQua2V5Q29kZSA9PT0gMzggJiYgYXZhT3B0cy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5vbkFycm93S2V5VXAoKTtcclxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgaWYgKHRoaXMuZm9jdXNlZEl0ZW1JbmRleCEgPj0gYXZhT3B0cy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXggPSBhdmFPcHRzLmxlbmd0aCAtIDE7XHJcbiAgICAgIH1cclxuICAgICAgYXZhT3B0c1t0aGlzLmZvY3VzZWRJdGVtSW5kZXghXS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgLy8gRW50ZXJcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAoJGV2ZW50LmtleUNvZGUgPT09IDEzICYmIHRoaXMuZm9jdXNlZEl0ZW1JbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gbmV3IEZpbHRlckJ5UGlwZSgpLnRyYW5zZm9ybShcclxuICAgICAgICB0aGlzLmF2YWlsYWJsZUl0ZW1zLFxyXG4gICAgICAgIHRoaXMuc2VhcmNoVGV4dCEsXHJcbiAgICAgICAgdGhpcy5jb25maWcuc2VhcmNoT25LZXlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZWxlY3RJdGVtKFxyXG4gICAgICAgIGZpbHRlcmVkSXRlbXNbdGhpcy5mb2N1c2VkSXRlbUluZGV4XSxcclxuICAgICAgICB0aGlzLmF2YWlsYWJsZUl0ZW1zLmluZGV4T2YoZmlsdGVyZWRJdGVtc1t0aGlzLmZvY3VzZWRJdGVtSW5kZXhdKVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICRldmVudC5rZXlcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb21wb25lbnQgb25Jbml0XHJcbiAgICovXHJcbiAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zICE9PSAndW5kZWZpbmVkJyAmJiBBcnJheS5pc0FycmF5KHRoaXMub3B0aW9ucykpIHtcclxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5pc05vdFNvcnQpIHRoaXMuYXZhaWxhYmxlSXRlbXMgPSBbLi4udGhpcy5vcHRpb25zLnNvcnQodGhpcy5jb25maWcuY3VzdG9tQ29tcGFyYXRvcildO1xyXG4gICAgICBlbHNlIHRoaXMuYXZhaWxhYmxlSXRlbXMgPSBbLi4udGhpcy5vcHRpb25zXTtcclxuICAgICAgdGhpcy5pbml0RHJvcGRvd25WYWx1ZXNBbmRPcHRpb25zKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhZnRlciB2aWV3IGluaXQgdG8gc3Vic2NyaWJlIHRvIGF2YWlsYWJsZSBvcHRpb24gY2hhbmdlc1xyXG4gICAqL1xyXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmF2YWlsYWJsZU9wdGlvbnMuY2hhbmdlcy5zdWJzY3JpYmUodGhpcy5zZXROb3RGb3VuZFN0YXRlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnksIGludGVybmFsPzogYm9vbGVhbikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0RHJvcGRvd25WYWx1ZXNBbmRPcHRpb25zKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBbXTtcclxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgaWYgKCFpbnRlcm5hbCkge1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgIGlmICghaW50ZXJuYWwpIHtcclxuICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XHJcbiAgICBpZiAoIXRoaXMuY29uZmlnLmlzTm90U29ydCkgdGhpcy5hdmFpbGFibGVJdGVtcyA9IFsuLi50aGlzLm9wdGlvbnMuc29ydCh0aGlzLmNvbmZpZy5jdXN0b21Db21wYXJhdG9yKV07XHJcbiAgICBlbHNlIHRoaXMuYXZhaWxhYmxlSXRlbXMgPSBbLi4udGhpcy5vcHRpb25zXVxyXG4gICAgdGhpcy5pbml0RHJvcGRvd25WYWx1ZXNBbmRPcHRpb25zKCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGZ1bmN0aW9uIHNldHMgd2hldGhlciB0byBzaG93IGl0ZW1zIG5vdCBmb3VuZCB0ZXh0IG9yIG5vdFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXROb3RGb3VuZFN0YXRlKCkge1xyXG4gICAgaWYgKHRoaXMuYXZhaWxhYmxlT3B0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5zaG93Tm90Rm91bmQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93Tm90Rm91bmQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBDb21wb25lbnQgb25jaGFnZSBpLmUgd2hlbiBhbnkgb2YgdGhlIGlucHV0IHByb3BlcnRpZXMgY2hhbmdlXHJcbiAgICovXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgLy8gdGhpcy5zZWFyY2hUZXh0ID0gbnVsbDtcclxuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCBbXTtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAoY2hhbmdlc1snb3B0aW9ucyddKSB7XHJcbiAgICAgIGlmICghdGhpcy5jb25maWcuaXNOb3RTb3J0KSB0aGlzLmF2YWlsYWJsZUl0ZW1zID0gWy4uLnRoaXMub3B0aW9ucy5zb3J0KHRoaXMuY29uZmlnLmN1c3RvbUNvbXBhcmF0b3IpXTtcclxuICAgICAgZWxzZSB0aGlzLmF2YWlsYWJsZUl0ZW1zID0gWy4uLnRoaXMub3B0aW9uc107XHJcbiAgICB9XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgaWYgKGNoYW5nZXNbJ3ZhbHVlJ10pIHtcclxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgaWYgKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGNoYW5nZXNbJ3ZhbHVlJ10uY3VycmVudFZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoW10pIHx8XHJcbiAgICAgICAgY2hhbmdlc1sndmFsdWUnXS5jdXJyZW50VmFsdWUgPT09ICcnIHx8XHJcbiAgICAgICAgY2hhbmdlc1sndmFsdWUnXS5jdXJyZW50VmFsdWUgPT09IG51bGxcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5pc05vdFNvcnQpIHRoaXMuYXZhaWxhYmxlSXRlbXMgPSBbLi4udGhpcy5vcHRpb25zLnNvcnQodGhpcy5jb25maWcuY3VzdG9tQ29tcGFyYXRvcildO1xyXG4gICAgICAgIGVsc2UgdGhpcy5hdmFpbGFibGVJdGVtcyA9IFsuLi50aGlzLm9wdGlvbnNdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmluaXREcm9wZG93blZhbHVlc0FuZE9wdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc2VsY3QgYSBzZWxlY3RlZCBpdGVtc1xyXG4gICAqIEBwYXJhbSBpdGVtOiAgaXRlbSB0byBiZSBkZXNlbGVjdGVkXHJcbiAgICogQHBhcmFtIGluZGV4OiAgaW5kZXggb2YgdGhlIGl0ZW1cclxuICAgKi9cclxuICBwdWJsaWMgZGVzZWxlY3RJdGVtKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmZvckVhY2goKGVsZW1lbnQ6IGFueSwgaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICAgIGlmIChpdGVtID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZShpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBsZXQgc29ydGVkSXRlbXMgPSBbLi4udGhpcy5hdmFpbGFibGVJdGVtc107XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgaWYgKCF0aGlzLmF2YWlsYWJsZUl0ZW1zLmluY2x1ZGVzKGl0ZW0pKSB7XHJcbiAgICAgIHRoaXMuYXZhaWxhYmxlSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5pc05vdFNvcnQpIHNvcnRlZEl0ZW1zID0gdGhpcy5hdmFpbGFibGVJdGVtcy5zb3J0KHRoaXMuY29uZmlnLmN1c3RvbUNvbXBhcmF0b3IpO1xyXG4gICAgICBlbHNlIHNvcnRlZEl0ZW1zID0gdGhpcy5hdmFpbGFibGVJdGVtcztcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFsuLi50aGlzLnNlbGVjdGVkSXRlbXNdO1xyXG4gICAgdGhpcy5hdmFpbGFibGVJdGVtcyA9IFsuLi5zb3J0ZWRJdGVtc107XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb25maWcuZGVmYXVsdFNvcnQpIHtcclxuICAgICAgY29uc3Qgc2V0MTogU2V0PHN0cmluZz4gPSBuZXcgU2V0KHRoaXMuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9ICh0aGlzLmNvbmZpZy5kZWZhdWx0U29ydCBhcyBbbnVtYmVyLCBzdHJpbmddW10pLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKS5tYXAoZSA9PiBlWzFdKS5maWx0ZXIoZSA9PiBzZXQxLmhhcyhlKSlcclxuXHJcbiAgICAgIGNvbnN0IHNldDI6IFNldDxzdHJpbmc+ID0gbmV3IFNldCh0aGlzLmF2YWlsYWJsZUl0ZW1zKTtcclxuICAgICAgdGhpcy5hdmFpbGFibGVJdGVtcyA9ICh0aGlzLmNvbmZpZy5kZWZhdWx0U29ydCBhcyBbbnVtYmVyLCBzdHJpbmddW10pLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKS5tYXAoZSA9PiBlWzFdKS5maWx0ZXIoZSA9PiBzZXQyLmhhcyhlKSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlZCgpO1xyXG4gICAgdGhpcy5yZXNldEFycm93S2V5QWN0aXZlRWxlbWVudCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0IGFuIGl0ZW1cclxuICAgKiBAcGFyYW0gaXRlbTogIGl0ZW0gdG8gYmUgc2VsZWN0ZWRcclxuICAgKiBAcGFyYW0gaW5kZXg6ICBpbmRleCBvZiB0aGUgaXRlbVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZWxlY3RJdGVtKGl0ZW06IHN0cmluZywgaW5kZXg/OiBudW1iZXIpIHtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5hdmFpbGFibGVJdGVtcy5wdXNoKHRoaXMuc2VsZWN0ZWRJdGVtc1swXSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XHJcbiAgICAgIHRoaXMudG9nZ2xlRHJvcGRvd24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF2YWlsYWJsZUl0ZW1zLmZvckVhY2goKGVsZW1lbnQ6IGFueSwgaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICAgIGlmIChpdGVtID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgdGhpcy5hdmFpbGFibGVJdGVtcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAodGhpcy5jb25maWcuY2xlYXJPblNlbGVjdGlvbikge1xyXG4gICAgICB0aGlzLnNlYXJjaFRleHQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gWy4uLnRoaXMuc2VsZWN0ZWRJdGVtc107XHJcbiAgICB0aGlzLmF2YWlsYWJsZUl0ZW1zID0gWy4uLnRoaXMuYXZhaWxhYmxlSXRlbXNdO1xyXG5cclxuICAgIGlmICghdGhpcy5jb25maWcuaXNOb3RTb3J0KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zb3J0KHRoaXMuY29uZmlnLmN1c3RvbUNvbXBhcmF0b3IpO1xyXG4gICAgICB0aGlzLmF2YWlsYWJsZUl0ZW1zLnNvcnQodGhpcy5jb25maWcuY3VzdG9tQ29tcGFyYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29uZmlnLmRlZmF1bHRTb3J0KSB7XHJcbiAgICAgIGNvbnN0IHNldDE6IFNldDxzdHJpbmc+ID0gbmV3IFNldCh0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSAodGhpcy5jb25maWcuZGVmYXVsdFNvcnQgYXMgW251bWJlciwgc3RyaW5nXVtdKS5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSkubWFwKGUgPT4gZVsxXSkuZmlsdGVyKGUgPT4gc2V0MS5oYXMoZSkpXHJcblxyXG4gICAgICBjb25zdCBzZXQyOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQodGhpcy5hdmFpbGFibGVJdGVtcyk7XHJcbiAgICAgIHRoaXMuYXZhaWxhYmxlSXRlbXMgPSAodGhpcy5jb25maWcuZGVmYXVsdFNvcnQgYXMgW251bWJlciwgc3RyaW5nXVtdKS5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSkubWFwKGUgPT4gZVsxXSkuZmlsdGVyKGUgPT4gc2V0Mi5oYXMoZSkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcy5zZWFyY2hUZXh0ID0gbnVsbDtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2VkKCk7XHJcbiAgICB0aGlzLnJlc2V0QXJyb3dLZXlBY3RpdmVFbGVtZW50KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaGVuIHNlbGVjdGVkIGl0ZW1zIGNoYW5nZXMgdHJpZ2dlciB0aGUgY2hhYW5nZSBiYWNrIHRvIHBhcmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyB2YWx1ZUNoYW5nZWQoKSB7XHJcbiAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW1zLCB0cnVlKTtcclxuICAgIC8vIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQoeyB2YWx1ZTogdGhpcy52YWx1ZSB9KTtcclxuICAgIHRoaXMuc2V0U2VsZWN0ZWREaXNwbGF5VGV4dCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVG9nZ2xlIHRoZSBkcm9wZG93bmxpc3Qgb24vb2ZmXHJcbiAgICovXHJcbiAgcHVibGljIHRvZ2dsZVNlbGVjdERyb3Bkb3duKCkge1xyXG4gICAgdGhpcy50b2dnbGVEcm9wZG93biA9ICF0aGlzLnRvZ2dsZURyb3Bkb3duO1xyXG4gICAgaWYgKHRoaXMudG9nZ2xlRHJvcGRvd24pIHtcclxuICAgICAgdGhpcy5vcGVuLmVtaXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5jbG9zZS5lbWl0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlc2V0QXJyb3dLZXlBY3RpdmVFbGVtZW50KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgY2hhbmdlIGhhbmRsZXIgZm9yIHNlYXJjaCB0ZXh0XHJcbiAgICovXHJcbiAgcHVibGljIHNlYXJjaFRleHRDaGFuZ2VkKCkge1xyXG4gICAgdGhpcy5zZWFyY2hDaGFuZ2UuZW1pdCh0aGlzLnNlYXJjaFRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYW5nZVNlYXJjaFRleHQoJGV2ZW50OiBhbnkpIHtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGluaXRpYWxpemUgdGhlIGNvbmZpZyBhbmQgb3RoZXIgcHJvcGVydGllc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgaW5pdERyb3Bkb3duVmFsdWVzQW5kT3B0aW9ucygpIHtcclxuICAgIGNvbnN0IGNvbmZpZzogYW55ID0ge1xyXG4gICAgICBkaXNwbGF5S2V5OiAnZGVzY3JpcHRpb24nLFxyXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgc2VhcmNoOiBmYWxzZSxcclxuICAgICAgcGxhY2Vob2xkZXI6ICctJyxcclxuICAgICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdQZXNxdWlzYXIgJyxcclxuICAgICAgbGltaXRUbzogMCxcclxuICAgICAgY3VzdG9tQ29tcGFyYXRvcjogdW5kZWZpbmVkLFxyXG4gICAgICBub1Jlc3VsdHNGb3VuZDogJ05hZGEgZW5jb250cmFkbyEnLFxyXG4gICAgICBtb3JlVGV4dDogJ1NlbGVjaW9uYWRvcycsXHJcbiAgICAgIHNlYXJjaE9uS2V5OiBudWxsLFxyXG4gICAgICBjbGVhck9uU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgaW5wdXREaXJlY3Rpb246ICdsdHInLFxyXG4gICAgfTtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAodGhpcy5jb25maWcgPT09ICd1bmRlZmluZWQnIHx8IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5jb25maWcgPSB7IC4uLmNvbmZpZyB9O1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoY29uZmlnKSkge1xyXG4gICAgICB0aGlzLmNvbmZpZ1trZXldID0gdGhpcy5jb25maWdba2V5XSA/IHRoaXMuY29uZmlnW2tleV0gOiBjb25maWdba2V5XTtcclxuICAgIH1cclxuICAgIHRoaXMuY29uZmlnID0geyAuLi50aGlzLmNvbmZpZyB9O1xyXG4gICAgLy8gQWRkaW5nIHBsYWNlaG9sZGVyIGluIGNvbmZpZyBhcyBkZWZhdWx0IHBhcmFtXHJcbiAgICB0aGlzLnNlbGVjdGVkRGlzcGxheVRleHQgPSB0aGlzLmNvbmZpZ1sncGxhY2Vob2xkZXInXTtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gJycgJiYgdHlwZW9mIHRoaXMudmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gdGhpcy52YWx1ZTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnZhbHVlICE9PSAnJyAmJiB0aGlzLnZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zWzBdID0gdGhpcy52YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gW107XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBpbmQgPSB0aGlzLmF2YWlsYWJsZUl0ZW1zLmZpbmRJbmRleChcclxuICAgICAgICAgIChhSXRlbTogYW55KSA9PiBKU09OLnN0cmluZ2lmeShpdGVtKSA9PT0gSlNPTi5zdHJpbmdpZnkoYUl0ZW0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoaW5kICE9PSAtMSkge1xyXG4gICAgICAgICAgdGhpcy5hdmFpbGFibGVJdGVtcy5zcGxpY2UoaW5kLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTZWxlY3RlZERpc3BsYXlUZXh0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzZXQgdGhlIHRleHQgdG8gYmUgZGlzcGxheWVkXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRTZWxlY3RlZERpc3BsYXlUZXh0KCkge1xyXG4gICAgbGV0IHRleHQ6IHN0cmluZyA9IHRoaXMuc2VsZWN0ZWRJdGVtc1swXTtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0ZWRJdGVtc1swXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgdGV4dCA9IHRoaXMuY29uZmlnLmRpc3BsYXlGblxyXG4gICAgICAgID8gdGhpcy5jb25maWcuZGlzcGxheUZuKHRoaXMuc2VsZWN0ZWRJdGVtc1swXSlcclxuICAgICAgICA6IHRoaXMuc2VsZWN0ZWRJdGVtc1swXVt0aGlzLmNvbmZpZy5kaXNwbGF5S2V5XTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWREaXNwbGF5VGV4dCA9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA9PT0gMVxyXG4gICAgICAgICAgPyB0ZXh0XHJcbiAgICAgICAgICA6IHRleHQgK1xyXG4gICAgICAgICAgYCArICR7dGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCAtIDF9ICR7dGhpcy5jb25maWcubW9yZVRleHR9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWREaXNwbGF5VGV4dCA9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA9PT0gMCA/IHRoaXMuY29uZmlnLnBsYWNlaG9sZGVyIDogdGV4dDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGFycm93IGtleSB1cCBldmVudCB0aGF0cyBmb2N1c2VzIG9uIGEgaXRlbVxyXG4gICAqL1xyXG4gIHByaXZhdGUgb25BcnJvd0tleVVwKCkge1xyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgIGlmICh0aGlzLmZvY3VzZWRJdGVtSW5kZXggPT09IDApIHtcclxuICAgICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4ID0gdGhpcy5hdmFpbGFibGVJdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgaWYgKHRoaXMub25BcnJvd0tleSgpKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleCE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBoYW5kbGVyIGZvciBhcnJvdyBrZXkgZG93biBldmVudCB0aGF0cyBmb2N1c2VzIG9uIGEgaXRlbVxyXG4gICAqL1xyXG4gIHByaXZhdGUgb25BcnJvd0tleURvd24oKSB7XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgaWYgKHRoaXMuZm9jdXNlZEl0ZW1JbmRleCA9PT0gdGhpcy5hdmFpbGFibGVJdGVtcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleCA9IDA7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAodGhpcy5vbkFycm93S2V5KCkpIHtcclxuICAgICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4ISsrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkFycm93S2V5KCkge1xyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgIGlmICh0aGlzLmZvY3VzZWRJdGVtSW5kZXggPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4ID0gMDtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB3aWxsIHJlc2V0IHRoZSBlbGVtZW50IHRoYXQgaXMgbWFya2VkIGFjdGl2ZSB1c2luZyBhcnJvdyBrZXlzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZXNldEFycm93S2V5QWN0aXZlRWxlbWVudCgpIHtcclxuICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleCA9IG51bGw7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJuZ3gtZHJvcGRvd24tY29udGFpbmVyXCIgdGFiaW5kZXg9XCIwXCI+XHJcbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCItMVwiIGNsYXNzPVwibmd4LWRyb3Bkb3duLWJ1dHRvblwiIFtuZ0NsYXNzXT1cInsgJ25neC1kaXNhYmxlZCc6IGRpc2FibGVkIH1cIlxyXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKGNsaWNrKT1cInRvZ2dsZVNlbGVjdERyb3Bkb3duKClcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiZGlzcGxheS10ZXh0XCI+e3sgc2VsZWN0ZWREaXNwbGF5VGV4dCB9fSA8L3NwYW4+XHJcbiAgICA8YXBwLXN2Zy1zdG9yYWdlIHN2Z05hbWU9XCJjaGV2cm9uLWRvd25cIiBzdmdDb2xvcj1cIiMzNDNBNDBcIiBzdmdTaXplPVwic21hbGxcIi8+XHJcbiAgPC9idXR0b24+XHJcbiAgPGRpdiBjbGFzcz1cIm5neC1kcm9wZG93bi1saXN0LWNvbnRhaW5lciBzY3JvbGwteVwiICpuZ0lmPVwidG9nZ2xlRHJvcGRvd25cIiBbc3R5bGUubWF4SGVpZ2h0XT1cImNvbmZpZy5oZWlnaHRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiICpuZ0lmPVwiY29uZmlnLnNlYXJjaFwiPlxyXG4gICAgICA8aW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VTZWFyY2hUZXh0KCRldmVudClcIiBbc3R5bGUuZGlyZWN0aW9uXT1cImNvbmZpZy5pbnB1dERpcmVjdGlvblwiIG5hbWU9XCJzZWFyY2gtdGV4dFwiXHJcbiAgICAgICAgKGlucHV0KT1cInNlYXJjaFRleHRDaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNlYXJjaFRleHRcIiB0YWJpbmRleD1cIi0xXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz5cclxuICAgICAgPGxhYmVsIFtuZ0NsYXNzXT1cInsgYWN0aXZlOiBzZWFyY2hUZXh0IH1cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5zZGljb24tc2VhcmNoXCI+PC9zcGFuPlxyXG4gICAgICAgIHt7IGNvbmZpZy5zZWFyY2hQbGFjZWhvbGRlciB9fTwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDx1bCBjbGFzcz1cInNlbGVjdGVkLWl0ZW1zXCI+XHJcbiAgICAgIDxsaSBjbGFzcz1cImQtZmxleCBmbGV4LXJvd1wiIHRhYmluZGV4PVwiLTFcIiAqbmdGb3I9XCJsZXQgc2VsZWN0ZWQgb2Ygc2VsZWN0ZWRJdGVtczsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgICAgKGNsaWNrKT1cImRlc2VsZWN0SXRlbShzZWxlY3RlZCwgaSlcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmb3JtLWNoZWNrIG5zZGljb24tY2xvc2UgbWUtMlwiIGNoZWNrZWQ9XCJ0cnVlXCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IDJweDtcIj57e1xyXG4gICAgICAgICAgY29uZmlnLmRpc3BsYXlGblxyXG4gICAgICAgICAgPyBjb25maWcuZGlzcGxheUZuKHNlbGVjdGVkKVxyXG4gICAgICAgICAgOiBzZWxlY3RlZFtjb25maWcuZGlzcGxheUtleV0gfHwgc2VsZWN0ZWRcclxuICAgICAgICAgIH19PC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPGhyICpuZ0lmPVwic2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwICYmIGF2YWlsYWJsZUl0ZW1zLmxlbmd0aCA+IDBcIiAvPlxyXG4gICAgPHVsIGNsYXNzPVwiYXZhaWxhYmxlLWl0ZW1zXCI+XHJcbiAgICAgIDxsaSBjbGFzcz1cImQtZmxleCBmbGV4LXJvd1wiICNhdmFpbGFibGVPcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgYXZhaWxhYmxlSXRlbXMgfCBmaWx0ZXJCeTogc2VhcmNoVGV4dDogY29uZmlnLnNlYXJjaE9uS2V5XHJcblx0XHRcdHwgbGltaXRUbzogY29uZmlnLmxpbWl0VG87IGxldCBpID0gaW5kZXhcIiB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICBbbmdDbGFzc109XCJ7IGFjdGl2ZTogZm9jdXNlZEl0ZW1JbmRleCA9PSBpICYmICFpdGVtLmRpc2FibGVkLCBkaXNhYmxlZDogaXRlbS5kaXNhYmxlZCB9XCJcclxuICAgICAgICAoY2xpY2spPVwic2VsZWN0SXRlbShpdGVtLCBpKVwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZvcm0tY2hlY2sgbnNkaWNvbi1jbG9zZSBtZS0yXCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IDJweDtcIj5cclxuICAgICAgICAgIHt7IGNvbmZpZy5kaXNwbGF5Rm4gPyBjb25maWcuZGlzcGxheUZuKGl0ZW0pIDogaXRlbVtjb25maWcuZGlzcGxheUtleV0gfHwgaXRlbSB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgKm5nSWY9XCJzaG93Tm90Rm91bmRcIj57eyBjb25maWcubm9SZXN1bHRzRm91bmQgfX08L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==
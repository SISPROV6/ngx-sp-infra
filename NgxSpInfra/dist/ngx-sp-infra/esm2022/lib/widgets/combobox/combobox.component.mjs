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
        ], viewQueries: [{ propertyName: "availableOptions", predicate: ["availableOption"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"ngx-dropdown-container\" tabindex=\"0\">\n  <button type=\"button\" tabindex=\"-1\" class=\"ngx-dropdown-button\" [ngClass]=\"{ 'ngx-disabled': disabled }\"\n    [disabled]=\"disabled\" (click)=\"toggleSelectDropdown()\">\n    <span class=\"display-text\">{{ selectedDisplayText }} </span>\n    <app-svg-storage svgName=\"chevron-down\" svgColor=\"#343A40\" svgSize=\"small\"/>\n  </button>\n  <div class=\"ngx-dropdown-list-container scroll-y\" *ngIf=\"toggleDropdown\" [style.maxHeight]=\"config.height\">\n    <div class=\"search-container d-flex justify-content-between\" *ngIf=\"config.search\">\n      <input (change)=\"changeSearchText($event)\" [style.direction]=\"config.inputDirection\" name=\"search-text\"\n        (input)=\"searchTextChanged()\" [(ngModel)]=\"searchText\" tabindex=\"-1\" autocomplete=\"off\" />\n      <label [ngClass]=\"{ active: searchText }\">\n        <span class=\"nsdicon-search\"></span>\n        {{ config.searchPlaceholder }}</label>\n    </div>\n    <ul class=\"selected-items\">\n      <li class=\"d-flex flex-row\" tabindex=\"-1\" *ngFor=\"let selected of selectedItems; let i = index\"\n        (click)=\"deselectItem(selected, i)\">\n        <input type=\"checkbox\" class=\"form-check nsdicon-close me-2\" checked=\"true\">\n        <div style=\"margin-top: 2px;\">{{\n          config.displayFn\n          ? config.displayFn(selected)\n          : selected[config.displayKey] || selected\n          }}</div>\n      </li>\n    </ul>\n    <hr *ngIf=\"selectedItems.length > 0 && availableItems.length > 0\" />\n    <ul class=\"available-items\">\n      <li class=\"d-flex flex-row\" #availableOption *ngFor=\"let item of availableItems | filterBy: searchText: config.searchOnKey\n\t\t\t| limitTo: config.limitTo; let i = index\" tabindex=\"-1\"\n        [ngClass]=\"{ active: focusedItemIndex == i && !item.disabled, disabled: item.disabled }\"\n        (click)=\"selectItem(item, i)\">\n        <input type=\"checkbox\" class=\"form-check nsdicon-close me-2\">\n        <div style=\"margin-top: 2px;\">\n          {{ config.displayFn ? config.displayFn(item) : item[config.displayKey] || item }}\n        </div>\n      </li>\n      <li *ngIf=\"showNotFound\">{{ config.noResultsFound }}</li>\n    </ul>\n  </div>\n</div>\n", styles: [".ngx-dropdown-container{width:100%;position:relative}.ngx-dropdown-container button{display:inline-block;margin-bottom:0;font-weight:400;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;user-select:none;border:1px solid #DEE2E6;border-radius:.375rem;line-height:1.5;color:#333;background-color:#fff;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;text-align:left}.ngx-dropdown-container button span{display:inline;vertical-align:middle}.ngx-dropdown-container button .nsdicon-angle-down{right:5px;position:relative;float:right}.ngx-dropdown-container button .nsdicon-angle-down:before{border-style:solid;border-width:.1em .1em 0 0;content:\"\";display:inline-block;height:10px;position:relative;vertical-align:text-top;width:10px;top:0;transform:rotate(135deg)}.ngx-dropdown-container .ngx-dropdown-button{width:100%;min-height:30px;padding:.375rem .75rem;background-color:#fff;font-size:1rem;display:flex;align-items:center;justify-content:space-between}.ngx-dropdown-container .ngx-dropdown-button .display-text{display:inline-block;width:calc(100% - 20px)}.ngx-dropdown-container .ngx-dropdown-list-container{box-sizing:border-box;border:1px solid rgba(0,0,0,.15);border-radius:4px;padding-left:10px;padding-right:10px;z-index:999999999;width:100%;background-clip:padding-box;background:#fff;position:absolute;-webkit-box-shadow:5px 5px 5px 0px rgba(0,0,0,.21);-moz-box-shadow:5px 5px 5px 0px rgba(0,0,0,.21);box-shadow:5px 5px 5px #00000036;overflow-y:auto}.ngx-dropdown-container .ngx-dropdown-list-container .search-container{position:relative;padding-top:10px;margin-top:5px}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:2rem;width:100%;font-size:13px;margin:0;padding:0;box-shadow:none;box-sizing:content-box;transition:all .3s}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus{border-bottom:1px solid #007bff}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus+label{transform:translateY(-2px) scale(.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label{color:#9e9e9e;position:absolute;top:0;left:0;height:100%;font-size:1rem;cursor:text;-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform-origin:0% 100%;transform-origin:0% 100%;text-align:initial;transform:translateY(12px);pointer-events:none}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label.active{transform:translateY(-2px) scale(.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container ul{margin-top:1rem;margin-bottom:1rem;list-style-type:none;padding-left:0}.ngx-dropdown-container .ngx-dropdown-list-container ul.selected-items li{margin-bottom:2px}.ngx-dropdown-container .ngx-dropdown-list-container ul.selected-items li .nsdicon-close{accent-color:#007bff;font-weight:700;font-size:large}.ngx-dropdown-container .ngx-dropdown-list-container ul.available-items li.active{background-color:#337ab7;color:#fff}.ngx-dropdown-container .ngx-dropdown-list-container ul li{font-size:inherit;cursor:pointer;display:block;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:normal}.ngx-dropdown-container .ngx-disabled{pointer-events:none;background-color:#e9ecef;opacity:1;cursor:no-drop}.scroll-y{max-width:300px;overflow-y:scroll;overflow-x:hidden}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.SvgStorageComponent, selector: "app-svg-storage", inputs: ["svgName", "svgColor", "svgFill", "svgSize", "svgStrokeWidth"] }, { kind: "pipe", type: i4.FilterByPipe, name: "filterBy" }, { kind: "pipe", type: i5.LimitToPipe, name: "limitTo" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: ComboboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-combobox', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ComboboxComponent),
                            multi: true,
                        },
                    ], template: "<div class=\"ngx-dropdown-container\" tabindex=\"0\">\n  <button type=\"button\" tabindex=\"-1\" class=\"ngx-dropdown-button\" [ngClass]=\"{ 'ngx-disabled': disabled }\"\n    [disabled]=\"disabled\" (click)=\"toggleSelectDropdown()\">\n    <span class=\"display-text\">{{ selectedDisplayText }} </span>\n    <app-svg-storage svgName=\"chevron-down\" svgColor=\"#343A40\" svgSize=\"small\"/>\n  </button>\n  <div class=\"ngx-dropdown-list-container scroll-y\" *ngIf=\"toggleDropdown\" [style.maxHeight]=\"config.height\">\n    <div class=\"search-container d-flex justify-content-between\" *ngIf=\"config.search\">\n      <input (change)=\"changeSearchText($event)\" [style.direction]=\"config.inputDirection\" name=\"search-text\"\n        (input)=\"searchTextChanged()\" [(ngModel)]=\"searchText\" tabindex=\"-1\" autocomplete=\"off\" />\n      <label [ngClass]=\"{ active: searchText }\">\n        <span class=\"nsdicon-search\"></span>\n        {{ config.searchPlaceholder }}</label>\n    </div>\n    <ul class=\"selected-items\">\n      <li class=\"d-flex flex-row\" tabindex=\"-1\" *ngFor=\"let selected of selectedItems; let i = index\"\n        (click)=\"deselectItem(selected, i)\">\n        <input type=\"checkbox\" class=\"form-check nsdicon-close me-2\" checked=\"true\">\n        <div style=\"margin-top: 2px;\">{{\n          config.displayFn\n          ? config.displayFn(selected)\n          : selected[config.displayKey] || selected\n          }}</div>\n      </li>\n    </ul>\n    <hr *ngIf=\"selectedItems.length > 0 && availableItems.length > 0\" />\n    <ul class=\"available-items\">\n      <li class=\"d-flex flex-row\" #availableOption *ngFor=\"let item of availableItems | filterBy: searchText: config.searchOnKey\n\t\t\t| limitTo: config.limitTo; let i = index\" tabindex=\"-1\"\n        [ngClass]=\"{ active: focusedItemIndex == i && !item.disabled, disabled: item.disabled }\"\n        (click)=\"selectItem(item, i)\">\n        <input type=\"checkbox\" class=\"form-check nsdicon-close me-2\">\n        <div style=\"margin-top: 2px;\">\n          {{ config.displayFn ? config.displayFn(item) : item[config.displayKey] || item }}\n        </div>\n      </li>\n      <li *ngIf=\"showNotFound\">{{ config.noResultsFound }}</li>\n    </ul>\n  </div>\n</div>\n", styles: [".ngx-dropdown-container{width:100%;position:relative}.ngx-dropdown-container button{display:inline-block;margin-bottom:0;font-weight:400;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;user-select:none;border:1px solid #DEE2E6;border-radius:.375rem;line-height:1.5;color:#333;background-color:#fff;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;text-align:left}.ngx-dropdown-container button span{display:inline;vertical-align:middle}.ngx-dropdown-container button .nsdicon-angle-down{right:5px;position:relative;float:right}.ngx-dropdown-container button .nsdicon-angle-down:before{border-style:solid;border-width:.1em .1em 0 0;content:\"\";display:inline-block;height:10px;position:relative;vertical-align:text-top;width:10px;top:0;transform:rotate(135deg)}.ngx-dropdown-container .ngx-dropdown-button{width:100%;min-height:30px;padding:.375rem .75rem;background-color:#fff;font-size:1rem;display:flex;align-items:center;justify-content:space-between}.ngx-dropdown-container .ngx-dropdown-button .display-text{display:inline-block;width:calc(100% - 20px)}.ngx-dropdown-container .ngx-dropdown-list-container{box-sizing:border-box;border:1px solid rgba(0,0,0,.15);border-radius:4px;padding-left:10px;padding-right:10px;z-index:999999999;width:100%;background-clip:padding-box;background:#fff;position:absolute;-webkit-box-shadow:5px 5px 5px 0px rgba(0,0,0,.21);-moz-box-shadow:5px 5px 5px 0px rgba(0,0,0,.21);box-shadow:5px 5px 5px #00000036;overflow-y:auto}.ngx-dropdown-container .ngx-dropdown-list-container .search-container{position:relative;padding-top:10px;margin-top:5px}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:2rem;width:100%;font-size:13px;margin:0;padding:0;box-shadow:none;box-sizing:content-box;transition:all .3s}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus{border-bottom:1px solid #007bff}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus+label{transform:translateY(-2px) scale(.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label{color:#9e9e9e;position:absolute;top:0;left:0;height:100%;font-size:1rem;cursor:text;-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform-origin:0% 100%;transform-origin:0% 100%;text-align:initial;transform:translateY(12px);pointer-events:none}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label.active{transform:translateY(-2px) scale(.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container ul{margin-top:1rem;margin-bottom:1rem;list-style-type:none;padding-left:0}.ngx-dropdown-container .ngx-dropdown-list-container ul.selected-items li{margin-bottom:2px}.ngx-dropdown-container .ngx-dropdown-list-container ul.selected-items li .nsdicon-close{accent-color:#007bff;font-weight:700;font-size:large}.ngx-dropdown-container .ngx-dropdown-list-container ul.available-items li.active{background-color:#337ab7;color:#fff}.ngx-dropdown-container .ngx-dropdown-list-container ul li{font-size:inherit;cursor:pointer;display:block;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:normal}.ngx-dropdown-container .ngx-disabled{pointer-events:none;background-color:#e9ecef;opacity:1;cursor:no-drop}.scroll-y{max-width:300px;overflow-y:scroll;overflow-x:hidden}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm9ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNwLWluZnJhL3NyYy9saWIvd2lkZ2V0cy9jb21ib2JveC9jb21ib2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi93aWRnZXRzL2NvbWJvYm94L2NvbWJvYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQVUsS0FBSyxFQUN4QixZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksRUFHWixZQUFZLEVBS1osVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztBQWV0RCxNQUFNLE9BQU8saUJBQWlCO0lBZ0c1QixJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEdBQUc7UUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsWUFDVSxLQUF3QixFQUN6QixXQUF1QjtRQUR0QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQXRHaEM7O1dBRUc7UUFDYSxZQUFPLEdBQVEsRUFBRSxDQUFDO1FBRWxDOztXQUVHO1FBQ2EsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUVqQzs7V0FFRztRQUNhLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFPakM7O1dBRUc7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QUFDLGtCQUFrQjtnQkFhekIsbUJBQW1CO3NCQUR6QixZQUFZO3VCQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIFF1ZXJ5TGlzdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZpbHRlckJ5UGlwZSB9IGZyb20gJy4vcGlwZXMvZmlsdGVyLWJ5LnBpcGUnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jb21ib2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21ib2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbWJvYm94LmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29tYm9ib3hDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb21ib2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcblxuICAvKiogdmFsdWUgb2YgdGhlIGRyb3Bkb3duICovXG4gIEBJbnB1dCgpIHB1YmxpYyBfdmFsdWU6IGFueTtcblxuICAvKipcbiAgICogR2V0IHRoZSByZXF1aXJlZCBpbnB1dHNcbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBvcHRpb25zOiBhbnkgPSBbXTtcblxuICAvKipcbiAgICogY29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgY29uZmlnOiBhbnkgPSB7fTtcblxuICAvKipcbiAgICogV2hldGhlciBtdWx0aXBsZSBzZWxlY3Rpb24gb3Igc2luZ2xlIHNlbGVjdGlvbiBhbGxvd2VkXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgbXVsdGlwbGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogVmFsdWVcbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogY2hhbmdlIGV2ZW50IHdoZW4gdmFsdWUgY2hhbmdlcyB0byBwcm92aWRlIHVzZXIgdG8gaGFuZGxlIHRoaW5ncyBpbiBjaGFuZ2UgZXZlbnRcbiAgICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogVGhlIHNlYXJjaCB0ZXh0IGNoYW5nZSBldmVudCBlbWl0dGVyIGVtaXR0ZWQgd2hlbiB1c2VyIHR5cGUgaW4gdGhlIHNlYXJjaCBpbnB1dFxuICAgKi9cbiAgQE91dHB1dCgpIHB1YmxpYyBzZWFyY2hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gZHJvcGRvd24gaXMgb3Blbi5cbiAgICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgb3BlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBkcm9wZG93biBpcyBvcGVuLlxuICAgKi9cbiAgQE91dHB1dCgpIHB1YmxpYyBjbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRvb2dsZSB0aGUgZHJvcGRvd24gbGlzdFxuICAgKi9cbiAgcHVibGljIHRvZ2dsZURyb3Bkb3duID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEF2YWlsYWJsZSBpdGVtcyBmb3Igc2VsZWN0aW9uXG4gICAqL1xuICBwdWJsaWMgYXZhaWxhYmxlSXRlbXM6IGFueSA9IFtdO1xuXG4gIC8qKlxuICAgKiBTZWxlY3RlZCBJdGVtc1xuICAgKi9cbiAgcHVibGljIHNlbGVjdGVkSXRlbXM6IGFueSA9IFtdO1xuXG4gIC8qKlxuICAgKiBTZWxlY3Rpb24gdGV4dCB0byBiZSBEaXNwbGF5ZWRcbiAgICovXG4gIHB1YmxpYyBzZWxlY3RlZERpc3BsYXlUZXh0ID0gJy0nO1xuXG4gIC8qKlxuICAgKiBTZWFyY2ggdGV4dFxuICAgKi9cbiAgcHVibGljIHNlYXJjaFRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogdmFyaWFibGUgdG8gdHJhY2sgaWYgY2xpY2tlZCBpbnNpZGUgb3Igb3V0c2lkZSBvZiBjb21wb25lbnRcbiAgICovXG4gIHB1YmxpYyBjbGlja2VkSW5zaWRlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIHZhcmlhYmxlIHRvIHRyYWNrIGtleXByZXNzIGV2ZW50IGluc2lkZSBhbmQgb3V0c2lkIG9mIGNvbXBvbmVudFxuICAgKi9cbiAgcHVibGljIGluc2lkZUtleVByZXNzID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIHZhcmlhYmxlIHRvIHRyYWNrIHRoZSBmb2N1c2VkIGl0ZW0gd2hlbnVzZXIgdXNlcyBhcnJvdyBrZXlzIHRvIHNlbGVjdCBpdGVtXG4gICAqL1xuICBwdWJsaWMgZm9jdXNlZEl0ZW1JbmRleDogbnVtYmVyIHwgbnVsbDtcblxuICAvKipcbiAgICogZWxlbWVudCB0byBzaG93IG5vdCBmb3VuZCB0ZXh0IHdoZW4gbm90IGl0bWVzIG1hdGNoIHRoZSBzZWFyY2hcbiAgICovXG5cbiAgcHVibGljIHNob3dOb3RGb3VuZCA9IGZhbHNlO1xuICAvKipcbiAgICogSG9sZCB0aGUgcmVmZXJlbmNlIHRvIGF2YWlsYWJsZSBpdGVtcyBpbiB0aGUgbGlzdCB0byBmb2N1cyBvbiB0aGUgaXRlbSB3aGVuIHNjcm9sbGluZ1xuICAgKi9cbiAgQFZpZXdDaGlsZHJlbignYXZhaWxhYmxlT3B0aW9uJylcbiAgcHVibGljIGF2YWlsYWJsZU9wdGlvbnM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbCk7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLm11bHRpcGxlID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgb25DaGFuZ2U6IGFueSA9ICgpID0+IHtcbiAgICAvLyBlbXB0eVxuICB9XG4gIHB1YmxpYyBvblRvdWNoZWQ6IGFueSA9ICgpID0+IHtcbiAgICAvLyBlbXB0eVxuICB9XG5cbiAgLyoqXG4gICAqIGNsaWNrIGxpc3RlbmVyIGZvciBob3N0IGluc2lkZSB0aGlzIGNvbXBvbmVudCBpLmVcbiAgICogaWYgbWFueSBpbnN0YW5jZXMgYXJlIHRoZXJlLCB0aGlzIGRldGVjdHMgaWYgY2xpY2tlZCBpbnNpZGVcbiAgICogdGhpcyBpbnN0YW5jZVxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBwdWJsaWMgY2xpY2tJbnNpZGVDb21wb25lbnQoKSB7XG4gICAgdGhpcy5jbGlja2VkSW5zaWRlID0gdHJ1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBwdWJsaWMgYmx1cigpIHtcbiAgICB0aGlzLnRvZ2dsZURyb3Bkb3duID0gZmFsc2U7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpIHB1YmxpYyBmb2N1cygpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy50b2dnbGVTZWxlY3REcm9wZG93bigpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogY2xpY2sgaGFuZGxlciBvbiBkb2N1bW5lbnQgdG8gaGlkZSB0aGUgb3BlbiBkcm9wZG93biBpZiBjbGlja2VkIG91dHNpZGVcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJylcbiAgcHVibGljIGNsaWNrT3V0c2lkZUNvbXBvbmVudCgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICghdGhpcy5jbGlja2VkSW5zaWRlKSB7XG4gICAgICB0aGlzLnRvZ2dsZURyb3Bkb3duID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc2V0QXJyb3dLZXlBY3RpdmVFbGVtZW50KCk7XG4gICAgICAvLyBjbGVhciBzZWFyaCBvbiBjbG9zZVxuICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5jbG9zZS5lbWl0KCk7XG4gICAgfVxuICAgIHRoaXMuY2xpY2tlZEluc2lkZSA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsaWNrIGhhbmRsZXIgb24gZG9jdW1uZW50IHRvIGhpZGUgdGhlIG9wZW4gZHJvcGRvd24gaWYgY2xpY2tlZCBvdXRzaWRlXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duJylcbiAgcHVibGljIEtleVByZXNzT3V0c2lkZUNvbXBvbmVudCgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICghdGhpcy5pbnNpZGVLZXlQcmVzcykge1xuICAgICAgdGhpcy50b2dnbGVEcm9wZG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXNldEFycm93S2V5QWN0aXZlRWxlbWVudCgpO1xuICAgIH1cbiAgICB0aGlzLmluc2lkZUtleVByZXNzID0gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGtleSB1cCBhbmQgZG93biBldmVudCBhbmQgZW50ZXIgcHJlc3MgZm9yIHNlbGVjdGluZyBlbGVtZW50XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGhhbmRsZUtleWJvYXJkRXZlbnQoJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5pbnNpZGVLZXlQcmVzcyA9IHRydWU7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoJGV2ZW50LmtleUNvZGUgPT09IDI3IHx8IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlRHJvcGRvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5zaWRlS2V5UHJlc3MgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYXZhT3B0cyA9IHRoaXMuYXZhaWxhYmxlT3B0aW9ucy50b0FycmF5KCk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoJGV2ZW50LmtleUNvZGUgIT09IDkgJiYgYXZhT3B0cy5sZW5ndGggPT09IDAgJiYgIXRoaXMudG9nZ2xlRHJvcGRvd24pIHtcbiAgICAgIHRoaXMudG9nZ2xlRHJvcGRvd24gPSB0cnVlO1xuICAgIH1cbiAgICAvLyBBcnJvdyBEb3duXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoJGV2ZW50LmtleUNvZGUgPT09IDQwICYmIGF2YU9wdHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5vbkFycm93S2V5RG93bigpO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmICh0aGlzLmZvY3VzZWRJdGVtSW5kZXghID49IGF2YU9wdHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleCA9IDA7XG4gICAgICB9XG4gICAgICBhdmFPcHRzW3RoaXMuZm9jdXNlZEl0ZW1JbmRleCFdLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICAvLyBBcnJvdyBVcFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKCRldmVudC5rZXlDb2RlID09PSAzOCAmJiBhdmFPcHRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5vbkFycm93S2V5VXAoKTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAodGhpcy5mb2N1c2VkSXRlbUluZGV4ISA+PSBhdmFPcHRzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXggPSBhdmFPcHRzLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgICBhdmFPcHRzW3RoaXMuZm9jdXNlZEl0ZW1JbmRleCFdLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICAvLyBFbnRlclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKCRldmVudC5rZXlDb2RlID09PSAxMyAmJiB0aGlzLmZvY3VzZWRJdGVtSW5kZXggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBuZXcgRmlsdGVyQnlQaXBlKCkudHJhbnNmb3JtKFxuICAgICAgICB0aGlzLmF2YWlsYWJsZUl0ZW1zLFxuICAgICAgICB0aGlzLnNlYXJjaFRleHQhLFxuICAgICAgICB0aGlzLmNvbmZpZy5zZWFyY2hPbktleVxuICAgICAgKTtcbiAgICAgIHRoaXMuc2VsZWN0SXRlbShcbiAgICAgICAgZmlsdGVyZWRJdGVtc1t0aGlzLmZvY3VzZWRJdGVtSW5kZXhdLFxuICAgICAgICB0aGlzLmF2YWlsYWJsZUl0ZW1zLmluZGV4T2YoZmlsdGVyZWRJdGVtc1t0aGlzLmZvY3VzZWRJdGVtSW5kZXhdKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gJGV2ZW50LmtleVxuXG4gIH1cblxuICAvKipcbiAgICogQ29tcG9uZW50IG9uSW5pdFxuICAgKi9cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMgIT09ICd1bmRlZmluZWQnICYmIEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zKSkge1xuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5pc05vdFNvcnQpIHRoaXMuYXZhaWxhYmxlSXRlbXMgPSBbLi4udGhpcy5vcHRpb25zLnNvcnQodGhpcy5jb25maWcuY3VzdG9tQ29tcGFyYXRvcildO1xuICAgICAgZWxzZSB0aGlzLmF2YWlsYWJsZUl0ZW1zID0gWy4uLnRoaXMub3B0aW9uc107XG4gICAgICB0aGlzLmluaXREcm9wZG93blZhbHVlc0FuZE9wdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYWZ0ZXIgdmlldyBpbml0IHRvIHN1YnNjcmliZSB0byBhdmFpbGFibGUgb3B0aW9uIGNoYW5nZXNcbiAgICovXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5hdmFpbGFibGVPcHRpb25zLmNoYW5nZXMuc3Vic2NyaWJlKHRoaXMuc2V0Tm90Rm91bmRTdGF0ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55LCBpbnRlcm5hbD86IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlWzBdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdERyb3Bkb3duVmFsdWVzQW5kT3B0aW9ucygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gW107XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmlzTm90U29ydCkgdGhpcy5hdmFpbGFibGVJdGVtcyA9IFsuLi50aGlzLm9wdGlvbnMuc29ydCh0aGlzLmNvbmZpZy5jdXN0b21Db21wYXJhdG9yKV07XG4gICAgZWxzZSB0aGlzLmF2YWlsYWJsZUl0ZW1zID0gWy4uLnRoaXMub3B0aW9uc11cbiAgICB0aGlzLmluaXREcm9wZG93blZhbHVlc0FuZE9wdGlvbnMoKTtcbiAgfVxuICAvKipcbiAgICogZnVuY3Rpb24gc2V0cyB3aGV0aGVyIHRvIHNob3cgaXRlbXMgbm90IGZvdW5kIHRleHQgb3Igbm90XG4gICAqL1xuICBwdWJsaWMgc2V0Tm90Rm91bmRTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5hdmFpbGFibGVPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zaG93Tm90Rm91bmQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dOb3RGb3VuZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmNkcmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICAvKipcbiAgICogQ29tcG9uZW50IG9uY2hhZ2UgaS5lIHdoZW4gYW55IG9mIHRoZSBpbnB1dCBwcm9wZXJ0aWVzIGNoYW5nZVxuICAgKi9cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICAvLyB0aGlzLnNlYXJjaFRleHQgPSBudWxsO1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCBbXTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChjaGFuZ2VzWydvcHRpb25zJ10pIHtcbiAgICAgIGlmICghdGhpcy5jb25maWcuaXNOb3RTb3J0KSB0aGlzLmF2YWlsYWJsZUl0ZW1zID0gWy4uLnRoaXMub3B0aW9ucy5zb3J0KHRoaXMuY29uZmlnLmN1c3RvbUNvbXBhcmF0b3IpXTtcbiAgICAgIGVsc2UgdGhpcy5hdmFpbGFibGVJdGVtcyA9IFsuLi50aGlzLm9wdGlvbnNdO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChjaGFuZ2VzWyd2YWx1ZSddKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKFxuICAgICAgICBKU09OLnN0cmluZ2lmeShjaGFuZ2VzWyd2YWx1ZSddLmN1cnJlbnRWYWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KFtdKSB8fFxuICAgICAgICBjaGFuZ2VzWyd2YWx1ZSddLmN1cnJlbnRWYWx1ZSA9PT0gJycgfHxcbiAgICAgICAgY2hhbmdlc1sndmFsdWUnXS5jdXJyZW50VmFsdWUgPT09IG51bGxcbiAgICAgICkge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmlzTm90U29ydCkgdGhpcy5hdmFpbGFibGVJdGVtcyA9IFsuLi50aGlzLm9wdGlvbnMuc29ydCh0aGlzLmNvbmZpZy5jdXN0b21Db21wYXJhdG9yKV07XG4gICAgICAgIGVsc2UgdGhpcy5hdmFpbGFibGVJdGVtcyA9IFsuLi50aGlzLm9wdGlvbnNdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmluaXREcm9wZG93blZhbHVlc0FuZE9wdGlvbnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlbGN0IGEgc2VsZWN0ZWQgaXRlbXNcbiAgICogQHBhcmFtIGl0ZW06ICBpdGVtIHRvIGJlIGRlc2VsZWN0ZWRcbiAgICogQHBhcmFtIGluZGV4OiAgaW5kZXggb2YgdGhlIGl0ZW1cbiAgICovXG4gIHB1YmxpYyBkZXNlbGVjdEl0ZW0oaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmZvckVhY2goKGVsZW1lbnQ6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKGl0ZW0gPT09IGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgc29ydGVkSXRlbXMgPSBbLi4udGhpcy5hdmFpbGFibGVJdGVtc107XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoIXRoaXMuYXZhaWxhYmxlSXRlbXMuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgIHRoaXMuYXZhaWxhYmxlSXRlbXMucHVzaChpdGVtKTtcbiAgICAgIGlmICghdGhpcy5jb25maWcuaXNOb3RTb3J0KSBzb3J0ZWRJdGVtcyA9IHRoaXMuYXZhaWxhYmxlSXRlbXMuc29ydCh0aGlzLmNvbmZpZy5jdXN0b21Db21wYXJhdG9yKTtcbiAgICAgIGVsc2Ugc29ydGVkSXRlbXMgPSB0aGlzLmF2YWlsYWJsZUl0ZW1zO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbLi4udGhpcy5zZWxlY3RlZEl0ZW1zXTtcbiAgICB0aGlzLmF2YWlsYWJsZUl0ZW1zID0gWy4uLnNvcnRlZEl0ZW1zXTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5kZWZhdWx0U29ydCkge1xuICAgICAgY29uc3Qgc2V0MTogU2V0PHN0cmluZz4gPSBuZXcgU2V0KHRoaXMuc2VsZWN0ZWRJdGVtcyk7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSAodGhpcy5jb25maWcuZGVmYXVsdFNvcnQgYXMgW251bWJlciwgc3RyaW5nXVtdKS5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSkubWFwKGUgPT4gZVsxXSkuZmlsdGVyKGUgPT4gc2V0MS5oYXMoZSkpXG5cbiAgICAgIGNvbnN0IHNldDI6IFNldDxzdHJpbmc+ID0gbmV3IFNldCh0aGlzLmF2YWlsYWJsZUl0ZW1zKTtcbiAgICAgIHRoaXMuYXZhaWxhYmxlSXRlbXMgPSAodGhpcy5jb25maWcuZGVmYXVsdFNvcnQgYXMgW251bWJlciwgc3RyaW5nXVtdKS5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSkubWFwKGUgPT4gZVsxXSkuZmlsdGVyKGUgPT4gc2V0Mi5oYXMoZSkpXG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZUNoYW5nZWQoKTtcbiAgICB0aGlzLnJlc2V0QXJyb3dLZXlBY3RpdmVFbGVtZW50KCk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IGFuIGl0ZW1cbiAgICogQHBhcmFtIGl0ZW06ICBpdGVtIHRvIGJlIHNlbGVjdGVkXG4gICAqIEBwYXJhbSBpbmRleDogIGluZGV4IG9mIHRoZSBpdGVtXG4gICAqL1xuICBwdWJsaWMgc2VsZWN0SXRlbShpdGVtOiBzdHJpbmcsIGluZGV4PzogbnVtYmVyKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5hdmFpbGFibGVJdGVtcy5wdXNoKHRoaXMuc2VsZWN0ZWRJdGVtc1swXSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgIHRoaXMudG9nZ2xlRHJvcGRvd24gPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmF2YWlsYWJsZUl0ZW1zLmZvckVhY2goKGVsZW1lbnQ6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKGl0ZW0gPT09IGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMuYXZhaWxhYmxlSXRlbXMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodGhpcy5jb25maWcuY2xlYXJPblNlbGVjdGlvbikge1xuICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFsuLi50aGlzLnNlbGVjdGVkSXRlbXNdO1xuICAgIHRoaXMuYXZhaWxhYmxlSXRlbXMgPSBbLi4udGhpcy5hdmFpbGFibGVJdGVtc107XG5cbiAgICBpZiAoIXRoaXMuY29uZmlnLmlzTm90U29ydCkge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNvcnQodGhpcy5jb25maWcuY3VzdG9tQ29tcGFyYXRvcik7XG4gICAgICB0aGlzLmF2YWlsYWJsZUl0ZW1zLnNvcnQodGhpcy5jb25maWcuY3VzdG9tQ29tcGFyYXRvcik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmRlZmF1bHRTb3J0KSB7XG4gICAgICBjb25zdCBzZXQxOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQodGhpcy5zZWxlY3RlZEl0ZW1zKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9ICh0aGlzLmNvbmZpZy5kZWZhdWx0U29ydCBhcyBbbnVtYmVyLCBzdHJpbmddW10pLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKS5tYXAoZSA9PiBlWzFdKS5maWx0ZXIoZSA9PiBzZXQxLmhhcyhlKSlcblxuICAgICAgY29uc3Qgc2V0MjogU2V0PHN0cmluZz4gPSBuZXcgU2V0KHRoaXMuYXZhaWxhYmxlSXRlbXMpO1xuICAgICAgdGhpcy5hdmFpbGFibGVJdGVtcyA9ICh0aGlzLmNvbmZpZy5kZWZhdWx0U29ydCBhcyBbbnVtYmVyLCBzdHJpbmddW10pLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKS5tYXAoZSA9PiBlWzFdKS5maWx0ZXIoZSA9PiBzZXQyLmhhcyhlKSlcbiAgICB9XG5cbiAgICAvLyB0aGlzLnNlYXJjaFRleHQgPSBudWxsO1xuICAgIHRoaXMudmFsdWVDaGFuZ2VkKCk7XG4gICAgdGhpcy5yZXNldEFycm93S2V5QWN0aXZlRWxlbWVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gc2VsZWN0ZWQgaXRlbXMgY2hhbmdlcyB0cmlnZ2VyIHRoZSBjaGFhbmdlIGJhY2sgdG8gcGFyZW50XG4gICAqL1xuICBwdWJsaWMgdmFsdWVDaGFuZ2VkKCkge1xuICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbXMsIHRydWUpO1xuICAgIC8vIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHsgdmFsdWU6IHRoaXMudmFsdWUgfSk7XG4gICAgdGhpcy5zZXRTZWxlY3RlZERpc3BsYXlUZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBkcm9wZG93bmxpc3Qgb24vb2ZmXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlU2VsZWN0RHJvcGRvd24oKSB7XG4gICAgdGhpcy50b2dnbGVEcm9wZG93biA9ICF0aGlzLnRvZ2dsZURyb3Bkb3duO1xuICAgIGlmICh0aGlzLnRvZ2dsZURyb3Bkb3duKSB7XG4gICAgICB0aGlzLm9wZW4uZW1pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlYXJjaFRleHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmNsb3NlLmVtaXQoKTtcbiAgICB9XG4gICAgdGhpcy5yZXNldEFycm93S2V5QWN0aXZlRWxlbWVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjaGFuZ2UgaGFuZGxlciBmb3Igc2VhcmNoIHRleHRcbiAgICovXG4gIHB1YmxpYyBzZWFyY2hUZXh0Q2hhbmdlZCgpIHtcbiAgICB0aGlzLnNlYXJjaENoYW5nZS5lbWl0KHRoaXMuc2VhcmNoVGV4dCk7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlU2VhcmNoVGV4dCgkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpbml0aWFsaXplIHRoZSBjb25maWcgYW5kIG90aGVyIHByb3BlcnRpZXNcbiAgICovXG4gIHByaXZhdGUgaW5pdERyb3Bkb3duVmFsdWVzQW5kT3B0aW9ucygpIHtcbiAgICBjb25zdCBjb25maWc6IGFueSA9IHtcbiAgICAgIGRpc3BsYXlLZXk6ICdkZXNjcmlwdGlvbicsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHNlYXJjaDogZmFsc2UsXG4gICAgICBwbGFjZWhvbGRlcjogJy0nLFxuICAgICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdQZXNxdWlzYXIgJyxcbiAgICAgIGxpbWl0VG86IDAsXG4gICAgICBjdXN0b21Db21wYXJhdG9yOiB1bmRlZmluZWQsXG4gICAgICBub1Jlc3VsdHNGb3VuZDogJ05hZGEgZW5jb250cmFkbyEnLFxuICAgICAgbW9yZVRleHQ6ICdTZWxlY2lvbmFkb3MnLFxuICAgICAgc2VhcmNoT25LZXk6IG51bGwsXG4gICAgICBjbGVhck9uU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgIGlucHV0RGlyZWN0aW9uOiAnbHRyJyxcbiAgICB9O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHRoaXMuY29uZmlnID09PSAndW5kZWZpbmVkJyB8fCBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZykubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHsgLi4uY29uZmlnIH07XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGNvbmZpZykpIHtcbiAgICAgIHRoaXMuY29uZmlnW2tleV0gPSB0aGlzLmNvbmZpZ1trZXldID8gdGhpcy5jb25maWdba2V5XSA6IGNvbmZpZ1trZXldO1xuICAgIH1cbiAgICB0aGlzLmNvbmZpZyA9IHsgLi4udGhpcy5jb25maWcgfTtcbiAgICAvLyBBZGRpbmcgcGxhY2Vob2xkZXIgaW4gY29uZmlnIGFzIGRlZmF1bHQgcGFyYW1cbiAgICB0aGlzLnNlbGVjdGVkRGlzcGxheVRleHQgPSB0aGlzLmNvbmZpZ1sncGxhY2Vob2xkZXInXTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSAnJyAmJiB0eXBlb2YgdGhpcy52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHRoaXMudmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudmFsdWUgIT09ICcnICYmIHRoaXMudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zWzBdID0gdGhpcy52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlID0gW107XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgaW5kID0gdGhpcy5hdmFpbGFibGVJdGVtcy5maW5kSW5kZXgoXG4gICAgICAgICAgKGFJdGVtOiBhbnkpID0+IEpTT04uc3RyaW5naWZ5KGl0ZW0pID09PSBKU09OLnN0cmluZ2lmeShhSXRlbSlcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGluZCAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmF2YWlsYWJsZUl0ZW1zLnNwbGljZShpbmQsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTZWxlY3RlZERpc3BsYXlUZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICogc2V0IHRoZSB0ZXh0IHRvIGJlIGRpc3BsYXllZFxuICAgKi9cbiAgcHJpdmF0ZSBzZXRTZWxlY3RlZERpc3BsYXlUZXh0KCkge1xuICAgIGxldCB0ZXh0OiBzdHJpbmcgPSB0aGlzLnNlbGVjdGVkSXRlbXNbMF07XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0ZWRJdGVtc1swXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRleHQgPSB0aGlzLmNvbmZpZy5kaXNwbGF5Rm5cbiAgICAgICAgPyB0aGlzLmNvbmZpZy5kaXNwbGF5Rm4odGhpcy5zZWxlY3RlZEl0ZW1zWzBdKVxuICAgICAgICA6IHRoaXMuc2VsZWN0ZWRJdGVtc1swXVt0aGlzLmNvbmZpZy5kaXNwbGF5S2V5XTtcbiAgICB9XG4gICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWREaXNwbGF5VGV4dCA9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDFcbiAgICAgICAgICA/IHRleHRcbiAgICAgICAgICA6IHRleHQgK1xuICAgICAgICAgIGAgKyAke3RoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxfSAke3RoaXMuY29uZmlnLm1vcmVUZXh0fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWREaXNwbGF5VGV4dCA9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDAgPyB0aGlzLmNvbmZpZy5wbGFjZWhvbGRlciA6IHRleHQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGFycm93IGtleSB1cCBldmVudCB0aGF0cyBmb2N1c2VzIG9uIGEgaXRlbVxuICAgKi9cbiAgcHJpdmF0ZSBvbkFycm93S2V5VXAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodGhpcy5mb2N1c2VkSXRlbUluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXggPSB0aGlzLmF2YWlsYWJsZUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHRoaXMub25BcnJvd0tleSgpKSB7XG4gICAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXghO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGZvciBhcnJvdyBrZXkgZG93biBldmVudCB0aGF0cyBmb2N1c2VzIG9uIGEgaXRlbVxuICAgKi9cbiAgcHJpdmF0ZSBvbkFycm93S2V5RG93bigpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0aGlzLmZvY3VzZWRJdGVtSW5kZXggPT09IHRoaXMuYXZhaWxhYmxlSXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4ID0gMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodGhpcy5vbkFycm93S2V5KCkpIHtcbiAgICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleCErKztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uQXJyb3dLZXkoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodGhpcy5mb2N1c2VkSXRlbUluZGV4ID09PSBudWxsKSB7XG4gICAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXggPSAwO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiB3aWxsIHJlc2V0IHRoZSBlbGVtZW50IHRoYXQgaXMgbWFya2VkIGFjdGl2ZSB1c2luZyBhcnJvdyBrZXlzXG4gICAqL1xuICBwcml2YXRlIHJlc2V0QXJyb3dLZXlBY3RpdmVFbGVtZW50KCkge1xuICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleCA9IG51bGw7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJuZ3gtZHJvcGRvd24tY29udGFpbmVyXCIgdGFiaW5kZXg9XCIwXCI+XG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiLTFcIiBjbGFzcz1cIm5neC1kcm9wZG93bi1idXR0b25cIiBbbmdDbGFzc109XCJ7ICduZ3gtZGlzYWJsZWQnOiBkaXNhYmxlZCB9XCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoY2xpY2spPVwidG9nZ2xlU2VsZWN0RHJvcGRvd24oKVwiPlxuICAgIDxzcGFuIGNsYXNzPVwiZGlzcGxheS10ZXh0XCI+e3sgc2VsZWN0ZWREaXNwbGF5VGV4dCB9fSA8L3NwYW4+XG4gICAgPGFwcC1zdmctc3RvcmFnZSBzdmdOYW1lPVwiY2hldnJvbi1kb3duXCIgc3ZnQ29sb3I9XCIjMzQzQTQwXCIgc3ZnU2l6ZT1cInNtYWxsXCIvPlxuICA8L2J1dHRvbj5cbiAgPGRpdiBjbGFzcz1cIm5neC1kcm9wZG93bi1saXN0LWNvbnRhaW5lciBzY3JvbGwteVwiICpuZ0lmPVwidG9nZ2xlRHJvcGRvd25cIiBbc3R5bGUubWF4SGVpZ2h0XT1cImNvbmZpZy5oZWlnaHRcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiAqbmdJZj1cImNvbmZpZy5zZWFyY2hcIj5cbiAgICAgIDxpbnB1dCAoY2hhbmdlKT1cImNoYW5nZVNlYXJjaFRleHQoJGV2ZW50KVwiIFtzdHlsZS5kaXJlY3Rpb25dPVwiY29uZmlnLmlucHV0RGlyZWN0aW9uXCIgbmFtZT1cInNlYXJjaC10ZXh0XCJcbiAgICAgICAgKGlucHV0KT1cInNlYXJjaFRleHRDaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNlYXJjaFRleHRcIiB0YWJpbmRleD1cIi0xXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz5cbiAgICAgIDxsYWJlbCBbbmdDbGFzc109XCJ7IGFjdGl2ZTogc2VhcmNoVGV4dCB9XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibnNkaWNvbi1zZWFyY2hcIj48L3NwYW4+XG4gICAgICAgIHt7IGNvbmZpZy5zZWFyY2hQbGFjZWhvbGRlciB9fTwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPHVsIGNsYXNzPVwic2VsZWN0ZWQtaXRlbXNcIj5cbiAgICAgIDxsaSBjbGFzcz1cImQtZmxleCBmbGV4LXJvd1wiIHRhYmluZGV4PVwiLTFcIiAqbmdGb3I9XCJsZXQgc2VsZWN0ZWQgb2Ygc2VsZWN0ZWRJdGVtczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgIChjbGljayk9XCJkZXNlbGVjdEl0ZW0oc2VsZWN0ZWQsIGkpXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZvcm0tY2hlY2sgbnNkaWNvbi1jbG9zZSBtZS0yXCIgY2hlY2tlZD1cInRydWVcIj5cbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IDJweDtcIj57e1xuICAgICAgICAgIGNvbmZpZy5kaXNwbGF5Rm5cbiAgICAgICAgICA/IGNvbmZpZy5kaXNwbGF5Rm4oc2VsZWN0ZWQpXG4gICAgICAgICAgOiBzZWxlY3RlZFtjb25maWcuZGlzcGxheUtleV0gfHwgc2VsZWN0ZWRcbiAgICAgICAgICB9fTwvZGl2PlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxociAqbmdJZj1cInNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCAmJiBhdmFpbGFibGVJdGVtcy5sZW5ndGggPiAwXCIgLz5cbiAgICA8dWwgY2xhc3M9XCJhdmFpbGFibGUtaXRlbXNcIj5cbiAgICAgIDxsaSBjbGFzcz1cImQtZmxleCBmbGV4LXJvd1wiICNhdmFpbGFibGVPcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgYXZhaWxhYmxlSXRlbXMgfCBmaWx0ZXJCeTogc2VhcmNoVGV4dDogY29uZmlnLnNlYXJjaE9uS2V5XG5cdFx0XHR8IGxpbWl0VG86IGNvbmZpZy5saW1pdFRvOyBsZXQgaSA9IGluZGV4XCIgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgYWN0aXZlOiBmb2N1c2VkSXRlbUluZGV4ID09IGkgJiYgIWl0ZW0uZGlzYWJsZWQsIGRpc2FibGVkOiBpdGVtLmRpc2FibGVkIH1cIlxuICAgICAgICAoY2xpY2spPVwic2VsZWN0SXRlbShpdGVtLCBpKVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmb3JtLWNoZWNrIG5zZGljb24tY2xvc2UgbWUtMlwiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMnB4O1wiPlxuICAgICAgICAgIHt7IGNvbmZpZy5kaXNwbGF5Rm4gPyBjb25maWcuZGlzcGxheUZuKGl0ZW0pIDogaXRlbVtjb25maWcuZGlzcGxheUtleV0gfHwgaXRlbSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgKm5nSWY9XCJzaG93Tm90Rm91bmRcIj57eyBjb25maWcubm9SZXN1bHRzRm91bmQgfX08L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=
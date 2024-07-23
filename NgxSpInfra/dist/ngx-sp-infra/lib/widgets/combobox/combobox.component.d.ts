import { OnInit, EventEmitter, OnChanges, SimpleChanges, ElementRef, QueryList, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ComboboxComponent implements OnInit, OnChanges, AfterViewInit {
    private cdref;
    _elementRef: ElementRef;
    /** value of the dropdown */
    _value: any;
    /**
     * Get the required inputs
     */
    options: any;
    /**
     * configuration options
     */
    config: any;
    /**
     * Whether multiple selection or single selection allowed
     */
    multiple: boolean;
    /**
     * Value
     */
    disabled: boolean;
    /**
     * change event when value changes to provide user to handle things in change event
     */
    change: EventEmitter<any>;
    /**
     * The search text change event emitter emitted when user type in the search input
     */
    searchChange: EventEmitter<any>;
    /**
     * Event emitted when dropdown is open.
     */
    open: EventEmitter<any>;
    /**
     * Event emitted when dropdown is open.
     */
    close: EventEmitter<any>;
    /**
     * Toogle the dropdown list
     */
    toggleDropdown: boolean;
    /**
     * Available items for selection
     */
    availableItems: any;
    /**
     * Selected Items
     */
    selectedItems: any;
    /**
     * Selection text to be Displayed
     */
    selectedDisplayText: string;
    /**
     * Search text
     */
    searchText: string | undefined;
    /**
     * variable to track if clicked inside or outside of component
     */
    clickedInside: boolean;
    /**
     * variable to track keypress event inside and outsid of component
     */
    insideKeyPress: boolean;
    /**
     * variable to track the focused item whenuser uses arrow keys to select item
     */
    focusedItemIndex: number | null;
    /**
     * element to show not found text when not itmes match the search
     */
    showNotFound: boolean;
    /**
     * Hold the reference to available items in the list to focus on the item when scrolling
     */
    availableOptions: QueryList<ElementRef>;
    get value(): any;
    set value(val: any);
    constructor(cdref: ChangeDetectorRef, _elementRef: ElementRef);
    onChange: any;
    onTouched: any;
    /**
     * click listener for host inside this component i.e
     * if many instances are there, this detects if clicked inside
     * this instance
     */
    clickInsideComponent(): void;
    blur(): void;
    focus(): void;
    /**
     * click handler on documnent to hide the open dropdown if clicked outside
     */
    clickOutsideComponent(): void;
    /**
     * click handler on documnent to hide the open dropdown if clicked outside
     */
    KeyPressOutsideComponent(): void;
    /**
     * Event handler for key up and down event and enter press for selecting element
     */
    handleKeyboardEvent($event: KeyboardEvent): string | false | undefined;
    /**
     * Component onInit
     */
    ngOnInit(): void;
    /**
     * after view init to subscribe to available option changes
     */
    ngAfterViewInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any, internal?: boolean): void;
    reset(): void;
    /**
     * function sets whether to show items not found text or not
     */
    setNotFoundState(): void;
    /**
     * Component onchage i.e when any of the input properties change
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Deselct a selected items
     * @param item:  item to be deselected
     * @param index:  index of the item
     */
    deselectItem(item: any, index: number): void;
    /**
     * Select an item
     * @param item:  item to be selected
     * @param index:  index of the item
     */
    selectItem(item: string, index?: number): void;
    /**
     * When selected items changes trigger the chaange back to parent
     */
    valueChanged(): void;
    /**
     * Toggle the dropdownlist on/off
     */
    toggleSelectDropdown(): void;
    /**
     * The change handler for search text
     */
    searchTextChanged(): void;
    changeSearchText($event: any): void;
    /**
     * initialize the config and other properties
     */
    private initDropdownValuesAndOptions;
    /**
     * set the text to be displayed
     */
    private setSelectedDisplayText;
    /**
     * Event handler for arrow key up event thats focuses on a item
     */
    private onArrowKeyUp;
    /**
     * Event handler for arrow key down event thats focuses on a item
     */
    private onArrowKeyDown;
    private onArrowKey;
    /**
     * will reset the element that is marked active using arrow keys
     */
    private resetArrowKeyActiveElement;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComboboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComboboxComponent, "app-combobox", never, { "_value": { "alias": "_value"; "required": false; }; "options": { "alias": "options"; "required": false; }; "config": { "alias": "config"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "change": "change"; "searchChange": "searchChange"; "open": "open"; "close": "close"; }, never, never, false, never>;
}

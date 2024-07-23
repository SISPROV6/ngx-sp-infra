import { Directive, EventEmitter, Inject, Input, Output, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
export class ClickOutsideDirective {
    constructor(_el, _ngZone, document) {
        this._el = _el;
        this._ngZone = _ngZone;
        this.document = document;
        this.clickOutsideEnabled = true;
        this.attachOutsideOnClick = false;
        this.delayClickOutsideInit = false;
        this.emitOnBlur = false;
        this.exclude = '';
        this.excludeBeforeClick = false;
        this.clickOutsideEvents = '';
        this.clickOutside = new EventEmitter();
        this._nodesExcluded = [];
        this._events = ['click'];
        this._initOnClickBody = this._initOnClickBody.bind(this);
        this._onClickBody = this._onClickBody.bind(this);
        this._onWindowBlur = this._onWindowBlur.bind(this);
    }
    ngOnInit() {
        this._init();
    }
    ngOnDestroy() {
        this._removeClickOutsideListener();
        this._removeAttachOutsideOnClickListener();
        this._removeWindowBlurListener();
    }
    ngOnChanges(changes) {
        if (changes['attachOutsideOnClick'] || changes['exclude'] || changes['emitOnBlur']) {
            this._init();
        }
    }
    _init() {
        if (this.clickOutsideEvents !== '') {
            this._events = this.clickOutsideEvents.split(',').map(e => e.trim());
        }
        this._excludeCheck();
        if (this.attachOutsideOnClick) {
            this._initAttachOutsideOnClickListener();
        }
        else {
            this._initOnClickBody();
        }
        if (this.emitOnBlur) {
            this._initWindowBlurListener();
        }
    }
    _initOnClickBody() {
        if (this.delayClickOutsideInit) {
            setTimeout(this._initClickOutsideListener.bind(this));
        }
        else {
            this._initClickOutsideListener();
        }
    }
    _excludeCheck() {
        if (this.exclude) {
            try {
                const nodes = Array.from(this.document.querySelectorAll(this.exclude));
                if (nodes) {
                    this._nodesExcluded = nodes;
                }
            }
            catch (err) {
                console.error('[ng-click-outside] Check your exclude selector syntax.', err);
            }
        }
    }
    _onClickBody(ev) {
        if (!this.clickOutsideEnabled) {
            return;
        }
        if (this.excludeBeforeClick) {
            this._excludeCheck();
        }
        if (!this._el.nativeElement.contains(ev.target) && !this._shouldExclude(ev.target)) {
            this._emit(ev);
            if (this.attachOutsideOnClick) {
                this._removeClickOutsideListener();
            }
        }
    }
    /**
     * Resolves problem with outside click on iframe
     * @see https://github.com/arkon/ng-click-outside/issues/32
     */
    _onWindowBlur(ev) {
        setTimeout(() => {
            if (!this.document.hidden) {
                this._emit(ev);
            }
        });
    }
    _emit(ev) {
        if (!this.clickOutsideEnabled) {
            return;
        }
        this._ngZone.run(() => this.clickOutside.emit(ev));
    }
    _shouldExclude(target) {
        for (let excludedNode of this._nodesExcluded) {
            if (excludedNode.contains(target)) {
                return true;
            }
        }
        return false;
    }
    _initClickOutsideListener() {
        this._ngZone.runOutsideAngular(() => {
            this._events.forEach(e => this.document.addEventListener(e, this._onClickBody));
        });
    }
    _removeClickOutsideListener() {
        this._ngZone.runOutsideAngular(() => {
            this._events.forEach(e => this.document.removeEventListener(e, this._onClickBody));
        });
    }
    _initAttachOutsideOnClickListener() {
        this._ngZone.runOutsideAngular(() => {
            this._events.forEach(e => this._el.nativeElement.addEventListener(e, this._initOnClickBody));
        });
    }
    _removeAttachOutsideOnClickListener() {
        this._ngZone.runOutsideAngular(() => {
            this._events.forEach(e => this._el.nativeElement.removeEventListener(e, this._initOnClickBody));
        });
    }
    _initWindowBlurListener() {
        this._ngZone.runOutsideAngular(() => {
            window.addEventListener('blur', this._onWindowBlur);
        });
    }
    _removeWindowBlurListener() {
        this._ngZone.runOutsideAngular(() => {
            window.removeEventListener('blur', this._onWindowBlur);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: ClickOutsideDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.11", type: ClickOutsideDirective, selector: "[clickOutside]", inputs: { clickOutsideEnabled: "clickOutsideEnabled", attachOutsideOnClick: "attachOutsideOnClick", delayClickOutsideInit: "delayClickOutsideInit", emitOnBlur: "emitOnBlur", exclude: "exclude", excludeBeforeClick: "excludeBeforeClick", clickOutsideEvents: "clickOutsideEvents" }, outputs: { clickOutside: "clickOutside" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: ClickOutsideDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[clickOutside]' }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }], propDecorators: { clickOutsideEnabled: [{
                type: Input
            }], attachOutsideOnClick: [{
                type: Input
            }], delayClickOutsideInit: [{
                type: Input
            }], emitOnBlur: [{
                type: Input
            }], exclude: [{
                type: Input
            }], excludeBeforeClick: [{
                type: Input
            }], clickOutsideEvents: [{
                type: Input
            }], clickOutside: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tvdXRzaWRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvY2xpY2stb3V0c2lkZS9jbGlja291dHNpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTixTQUFTLEVBRVQsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBS0wsTUFBTSxHQUVGLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHekMsTUFBTSxPQUFPLHFCQUFxQjtJQWtCckMsWUFDVSxHQUFlLEVBQ2YsT0FBZSxFQUNHLFFBQWtCO1FBRnBDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ0csYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQW5CckMsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBRTNCLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDOUIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBRTNCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUV2QixpQkFBWSxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBRWhFLG1CQUFjLEdBQXVCLEVBQUUsQ0FBQztRQUN4QyxZQUFPLEdBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFNekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztR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Q0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBcEtlLHFCQUFxQixrRUFxQjNCLFFBQVE7bUdBckJGLHFCQUFxQjs7NEZBQXJCLHFCQUFxQjtrQkFEakMsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBQzs7MEJBc0J2QyxNQUFNOzJCQUFDLFFBQVE7eUNBbkJULG1CQUFtQjtzQkFBM0IsS0FBSztnQkFFRyxvQkFBb0I7c0JBQTVCLEtBQUs7Z0JBQ0cscUJBQXFCO3NCQUE3QixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBRUcsT0FBTztzQkFBZixLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFFRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBRUksWUFBWTtzQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdERpcmVjdGl2ZSxcblx0RWxlbWVudFJlZixcblx0RXZlbnRFbWl0dGVyLFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHROZ1pvbmUsXG5cdE9uQ2hhbmdlcyxcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdE91dHB1dCxcblx0U2ltcGxlQ2hhbmdlcyxcbiAgICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICAgIGltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4gICAgXG4gICAgQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbY2xpY2tPdXRzaWRlXSd9KVxuICAgIGV4cG9ydCBjbGFzcyBDbGlja091dHNpZGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBcblx0QElucHV0KCkgY2xpY2tPdXRzaWRlRW5hYmxlZCA9IHRydWU7XG4gICAgXG5cdEBJbnB1dCgpIGF0dGFjaE91dHNpZGVPbkNsaWNrID0gZmFsc2U7XG5cdEBJbnB1dCgpIGRlbGF5Q2xpY2tPdXRzaWRlSW5pdCA9IGZhbHNlO1xuXHRASW5wdXQoKSBlbWl0T25CbHVyID0gZmFsc2U7XG4gICAgXG5cdEBJbnB1dCgpIGV4Y2x1ZGUgPSAnJztcblx0QElucHV0KCkgZXhjbHVkZUJlZm9yZUNsaWNrID0gZmFsc2U7XG4gICAgXG5cdEBJbnB1dCgpIGNsaWNrT3V0c2lkZUV2ZW50cyA9ICcnO1xuICAgIFxuXHRAT3V0cHV0KCkgY2xpY2tPdXRzaWRlOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgICBcblx0cHJpdmF0ZSBfbm9kZXNFeGNsdWRlZDogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gW107XG5cdHByaXZhdGUgX2V2ZW50czogQXJyYXk8c3RyaW5nPiA9IFsnY2xpY2snXTtcbiAgICBcblx0Y29uc3RydWN0b3IoXG5cdCAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG5cdCAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG5cdCAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQpIHtcblx0ICB0aGlzLl9pbml0T25DbGlja0JvZHkgPSB0aGlzLl9pbml0T25DbGlja0JvZHkuYmluZCh0aGlzKTtcblx0ICB0aGlzLl9vbkNsaWNrQm9keSA9IHRoaXMuX29uQ2xpY2tCb2R5LmJpbmQodGhpcyk7XG5cdCAgdGhpcy5fb25XaW5kb3dCbHVyID0gdGhpcy5fb25XaW5kb3dCbHVyLmJpbmQodGhpcyk7XG5cdH1cbiAgICBcblx0bmdPbkluaXQoKSB7XG5cdCAgdGhpcy5faW5pdCgpO1xuXHR9XG4gICAgXG5cdG5nT25EZXN0cm95KCkge1xuXHQgIHRoaXMuX3JlbW92ZUNsaWNrT3V0c2lkZUxpc3RlbmVyKCk7XG5cdCAgdGhpcy5fcmVtb3ZlQXR0YWNoT3V0c2lkZU9uQ2xpY2tMaXN0ZW5lcigpO1xuXHQgIHRoaXMuX3JlbW92ZVdpbmRvd0JsdXJMaXN0ZW5lcigpO1xuXHR9XG4gICAgXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0ICBpZiAoY2hhbmdlc1snYXR0YWNoT3V0c2lkZU9uQ2xpY2snXSB8fCBjaGFuZ2VzWydleGNsdWRlJ10gfHwgY2hhbmdlc1snZW1pdE9uQmx1ciddKSB7XG5cdCAgICB0aGlzLl9pbml0KCk7XG5cdCAgfVxuXHR9XG4gICAgXG5cdHByaXZhdGUgX2luaXQoKSB7XG5cdCAgaWYgKHRoaXMuY2xpY2tPdXRzaWRlRXZlbnRzICE9PSAnJykge1xuXHQgICAgdGhpcy5fZXZlbnRzID0gdGhpcy5jbGlja091dHNpZGVFdmVudHMuc3BsaXQoJywnKS5tYXAoZSA9PiBlLnRyaW0oKSk7XG5cdCAgfVxuICAgIFxuXHQgIHRoaXMuX2V4Y2x1ZGVDaGVjaygpO1xuICAgIFxuXHQgIGlmICh0aGlzLmF0dGFjaE91dHNpZGVPbkNsaWNrKSB7XG5cdCAgICB0aGlzLl9pbml0QXR0YWNoT3V0c2lkZU9uQ2xpY2tMaXN0ZW5lcigpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICB0aGlzLl9pbml0T25DbGlja0JvZHkoKTtcblx0ICB9XG4gICAgXG5cdCAgaWYgKHRoaXMuZW1pdE9uQmx1cikge1xuXHQgICAgdGhpcy5faW5pdFdpbmRvd0JsdXJMaXN0ZW5lcigpO1xuXHQgIH1cblx0fVxuICAgIFxuXHRwcml2YXRlIF9pbml0T25DbGlja0JvZHkoKSB7XG5cdCAgaWYgKHRoaXMuZGVsYXlDbGlja091dHNpZGVJbml0KSB7XG5cdCAgICBzZXRUaW1lb3V0KHRoaXMuX2luaXRDbGlja091dHNpZGVMaXN0ZW5lci5iaW5kKHRoaXMpKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgdGhpcy5faW5pdENsaWNrT3V0c2lkZUxpc3RlbmVyKCk7XG5cdCAgfVxuXHR9XG4gICAgXG5cdHByaXZhdGUgX2V4Y2x1ZGVDaGVjaygpIHtcblx0ICBpZiAodGhpcy5leGNsdWRlKSB7XG5cdCAgICB0cnkge1xuXHRcdGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbSh0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5leGNsdWRlKSkgYXMgQXJyYXk8SFRNTEVsZW1lbnQ+O1xuXHRcdGlmIChub2Rlcykge1xuXHRcdCAgdGhpcy5fbm9kZXNFeGNsdWRlZCA9IG5vZGVzO1xuXHRcdH1cblx0ICAgIH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tuZy1jbGljay1vdXRzaWRlXSBDaGVjayB5b3VyIGV4Y2x1ZGUgc2VsZWN0b3Igc3ludGF4LicsIGVycik7XG5cdCAgICB9XG5cdCAgfVxuXHR9XG4gICAgXG5cdHByaXZhdGUgX29uQ2xpY2tCb2R5KGV2OiBFdmVudCkge1xuXHQgIGlmICghdGhpcy5jbGlja091dHNpZGVFbmFibGVkKSB7XG5cdCAgICByZXR1cm47XG5cdCAgfVxuICAgIFxuXHQgIGlmICh0aGlzLmV4Y2x1ZGVCZWZvcmVDbGljaykge1xuXHQgICAgdGhpcy5fZXhjbHVkZUNoZWNrKCk7XG5cdCAgfVxuICAgIFxuXHQgIGlmICghdGhpcy5fZWwubmF0aXZlRWxlbWVudC5jb250YWlucyhldi50YXJnZXQpICYmICF0aGlzLl9zaG91bGRFeGNsdWRlKGV2LnRhcmdldCkpIHtcblx0ICAgIHRoaXMuX2VtaXQoZXYpO1xuICAgIFxuXHQgICAgaWYgKHRoaXMuYXR0YWNoT3V0c2lkZU9uQ2xpY2spIHtcblx0XHR0aGlzLl9yZW1vdmVDbGlja091dHNpZGVMaXN0ZW5lcigpO1xuXHQgICAgfVxuXHQgIH1cblx0fVxuICAgIFxuXHQvKipcblx0ICogUmVzb2x2ZXMgcHJvYmxlbSB3aXRoIG91dHNpZGUgY2xpY2sgb24gaWZyYW1lXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2Fya29uL25nLWNsaWNrLW91dHNpZGUvaXNzdWVzLzMyXG5cdCAqL1xuXHRwcml2YXRlIF9vbldpbmRvd0JsdXIoZXY6IEV2ZW50KSB7XG5cdCAgc2V0VGltZW91dCgoKSA9PiB7XG5cdCAgICBpZiAoIXRoaXMuZG9jdW1lbnQuaGlkZGVuKSB7XG5cdFx0dGhpcy5fZW1pdChldik7XG5cdCAgICB9XG5cdCAgfSk7XG5cdH1cbiAgICBcblx0cHJpdmF0ZSBfZW1pdChldjogRXZlbnQpIHtcblx0ICBpZiAoIXRoaXMuY2xpY2tPdXRzaWRlRW5hYmxlZCkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cbiAgICBcblx0ICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2xpY2tPdXRzaWRlLmVtaXQoZXYpKTtcblx0fVxuICAgIFxuXHRwcml2YXRlIF9zaG91bGRFeGNsdWRlKHRhcmdldDogYW55KTogYm9vbGVhbiB7XG5cdCAgZm9yIChsZXQgZXhjbHVkZWROb2RlIG9mIHRoaXMuX25vZGVzRXhjbHVkZWQpIHtcblx0ICAgIGlmIChleGNsdWRlZE5vZGUuY29udGFpbnModGFyZ2V0KSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHQgICAgfVxuXHQgIH1cbiAgICBcblx0ICByZXR1cm4gZmFsc2U7XG5cdH1cbiAgICBcblx0cHJpdmF0ZSBfaW5pdENsaWNrT3V0c2lkZUxpc3RlbmVyKCkge1xuXHQgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdCAgICB0aGlzLl9ldmVudHMuZm9yRWFjaChlID0+IHRoaXMuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihlLCB0aGlzLl9vbkNsaWNrQm9keSkpO1xuXHQgIH0pO1xuXHR9XG4gICAgXG5cdHByaXZhdGUgX3JlbW92ZUNsaWNrT3V0c2lkZUxpc3RlbmVyKCkge1xuXHQgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdCAgICB0aGlzLl9ldmVudHMuZm9yRWFjaChlID0+IHRoaXMuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCB0aGlzLl9vbkNsaWNrQm9keSkpO1xuXHQgIH0pO1xuXHR9XG4gICAgXG5cdHByaXZhdGUgX2luaXRBdHRhY2hPdXRzaWRlT25DbGlja0xpc3RlbmVyKCkge1xuXHQgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdCAgICB0aGlzLl9ldmVudHMuZm9yRWFjaChlID0+IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihlLCB0aGlzLl9pbml0T25DbGlja0JvZHkpKTtcblx0ICB9KTtcblx0fVxuICAgIFxuXHRwcml2YXRlIF9yZW1vdmVBdHRhY2hPdXRzaWRlT25DbGlja0xpc3RlbmVyKCkge1xuXHQgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdCAgICB0aGlzLl9ldmVudHMuZm9yRWFjaChlID0+IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCB0aGlzLl9pbml0T25DbGlja0JvZHkpKTtcblx0ICB9KTtcblx0fVxuICAgIFxuXHRwcml2YXRlIF9pbml0V2luZG93Qmx1ckxpc3RlbmVyKCkge1xuXHQgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdCAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uV2luZG93Qmx1cik7XG5cdCAgfSk7XG5cdH1cbiAgICBcblx0cHJpdmF0ZSBfcmVtb3ZlV2luZG93Qmx1ckxpc3RlbmVyKCkge1xuXHQgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdCAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uV2luZG93Qmx1cik7XG5cdCAgfSk7XG5cdH1cbiAgICBcbiAgICB9Il19
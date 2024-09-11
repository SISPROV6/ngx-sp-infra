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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ClickOutsideDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: ClickOutsideDirective, selector: "[clickOutside]", inputs: { clickOutsideEnabled: "clickOutsideEnabled", attachOutsideOnClick: "attachOutsideOnClick", delayClickOutsideInit: "delayClickOutsideInit", emitOnBlur: "emitOnBlur", exclude: "exclude", excludeBeforeClick: "excludeBeforeClick", clickOutsideEvents: "clickOutsideEvents" }, outputs: { clickOutside: "clickOutside" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ClickOutsideDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tvdXRzaWRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcC1pbmZyYS9zcmMvbGliL3dpZGdldHMvY2xpY2stb3V0c2lkZS9jbGlja291dHNpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTixTQUFTLEVBRVQsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBS0wsTUFBTSxHQUVGLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHekMsTUFBTSxPQUFPLHFCQUFxQjtJQWtCckMsWUFDVSxHQUFlLEVBQ2YsT0FBZSxFQUNHLFFBQWtCO1FBRnBDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ0csYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQW5CckMsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBRTNCLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDOUIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBRTNCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUV2QixpQkFBWSxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBRWhFLG1CQUFjLEdBQXVCLEVBQUUsQ0FBQztRQUN4QyxZQUFPLEdBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFNekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztR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Q0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBcEtlLHFCQUFxQixrRUFxQjNCLFFBQVE7bUdBckJGLHFCQUFxQjs7NEZBQXJCLHFCQUFxQjtrQkFEakMsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBQzs7MEJBc0J2QyxNQUFNOzJCQUFDLFFBQVE7eUNBbkJULG1CQUFtQjtzQkFBM0IsS0FBSztnQkFFRyxvQkFBb0I7c0JBQTVCLEtBQUs7Z0JBQ0cscUJBQXFCO3NCQUE3QixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBRUcsT0FBTztzQkFBZixLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFFRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBRUksWUFBWTtzQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0RGlyZWN0aXZlLFxyXG5cdEVsZW1lbnRSZWYsXHJcblx0RXZlbnRFbWl0dGVyLFxyXG5cdEluamVjdCxcclxuXHRJbnB1dCxcclxuXHROZ1pvbmUsXHJcblx0T25DaGFuZ2VzLFxyXG5cdE9uRGVzdHJveSxcclxuXHRPbkluaXQsXHJcblx0T3V0cHV0LFxyXG5cdFNpbXBsZUNoYW5nZXMsXHJcbiAgICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4gICAgaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuICAgIFxyXG4gICAgQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbY2xpY2tPdXRzaWRlXSd9KVxyXG4gICAgZXhwb3J0IGNsYXNzIENsaWNrT3V0c2lkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gICAgXHJcblx0QElucHV0KCkgY2xpY2tPdXRzaWRlRW5hYmxlZCA9IHRydWU7XHJcbiAgICBcclxuXHRASW5wdXQoKSBhdHRhY2hPdXRzaWRlT25DbGljayA9IGZhbHNlO1xyXG5cdEBJbnB1dCgpIGRlbGF5Q2xpY2tPdXRzaWRlSW5pdCA9IGZhbHNlO1xyXG5cdEBJbnB1dCgpIGVtaXRPbkJsdXIgPSBmYWxzZTtcclxuICAgIFxyXG5cdEBJbnB1dCgpIGV4Y2x1ZGUgPSAnJztcclxuXHRASW5wdXQoKSBleGNsdWRlQmVmb3JlQ2xpY2sgPSBmYWxzZTtcclxuICAgIFxyXG5cdEBJbnB1dCgpIGNsaWNrT3V0c2lkZUV2ZW50cyA9ICcnO1xyXG4gICAgXHJcblx0QE91dHB1dCgpIGNsaWNrT3V0c2lkZTogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcbiAgICBcclxuXHRwcml2YXRlIF9ub2Rlc0V4Y2x1ZGVkOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXTtcclxuXHRwcml2YXRlIF9ldmVudHM6IEFycmF5PHN0cmluZz4gPSBbJ2NsaWNrJ107XHJcbiAgICBcclxuXHRjb25zdHJ1Y3RvcihcclxuXHQgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxyXG5cdCAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXHJcblx0ICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCkge1xyXG5cdCAgdGhpcy5faW5pdE9uQ2xpY2tCb2R5ID0gdGhpcy5faW5pdE9uQ2xpY2tCb2R5LmJpbmQodGhpcyk7XHJcblx0ICB0aGlzLl9vbkNsaWNrQm9keSA9IHRoaXMuX29uQ2xpY2tCb2R5LmJpbmQodGhpcyk7XHJcblx0ICB0aGlzLl9vbldpbmRvd0JsdXIgPSB0aGlzLl9vbldpbmRvd0JsdXIuYmluZCh0aGlzKTtcclxuXHR9XHJcbiAgICBcclxuXHRuZ09uSW5pdCgpIHtcclxuXHQgIHRoaXMuX2luaXQoKTtcclxuXHR9XHJcbiAgICBcclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHQgIHRoaXMuX3JlbW92ZUNsaWNrT3V0c2lkZUxpc3RlbmVyKCk7XHJcblx0ICB0aGlzLl9yZW1vdmVBdHRhY2hPdXRzaWRlT25DbGlja0xpc3RlbmVyKCk7XHJcblx0ICB0aGlzLl9yZW1vdmVXaW5kb3dCbHVyTGlzdGVuZXIoKTtcclxuXHR9XHJcbiAgICBcclxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcblx0ICBpZiAoY2hhbmdlc1snYXR0YWNoT3V0c2lkZU9uQ2xpY2snXSB8fCBjaGFuZ2VzWydleGNsdWRlJ10gfHwgY2hhbmdlc1snZW1pdE9uQmx1ciddKSB7XHJcblx0ICAgIHRoaXMuX2luaXQoKTtcclxuXHQgIH1cclxuXHR9XHJcbiAgICBcclxuXHRwcml2YXRlIF9pbml0KCkge1xyXG5cdCAgaWYgKHRoaXMuY2xpY2tPdXRzaWRlRXZlbnRzICE9PSAnJykge1xyXG5cdCAgICB0aGlzLl9ldmVudHMgPSB0aGlzLmNsaWNrT3V0c2lkZUV2ZW50cy5zcGxpdCgnLCcpLm1hcChlID0+IGUudHJpbSgpKTtcclxuXHQgIH1cclxuICAgIFxyXG5cdCAgdGhpcy5fZXhjbHVkZUNoZWNrKCk7XHJcbiAgICBcclxuXHQgIGlmICh0aGlzLmF0dGFjaE91dHNpZGVPbkNsaWNrKSB7XHJcblx0ICAgIHRoaXMuX2luaXRBdHRhY2hPdXRzaWRlT25DbGlja0xpc3RlbmVyKCk7XHJcblx0ICB9IGVsc2Uge1xyXG5cdCAgICB0aGlzLl9pbml0T25DbGlja0JvZHkoKTtcclxuXHQgIH1cclxuICAgIFxyXG5cdCAgaWYgKHRoaXMuZW1pdE9uQmx1cikge1xyXG5cdCAgICB0aGlzLl9pbml0V2luZG93Qmx1ckxpc3RlbmVyKCk7XHJcblx0ICB9XHJcblx0fVxyXG4gICAgXHJcblx0cHJpdmF0ZSBfaW5pdE9uQ2xpY2tCb2R5KCkge1xyXG5cdCAgaWYgKHRoaXMuZGVsYXlDbGlja091dHNpZGVJbml0KSB7XHJcblx0ICAgIHNldFRpbWVvdXQodGhpcy5faW5pdENsaWNrT3V0c2lkZUxpc3RlbmVyLmJpbmQodGhpcykpO1xyXG5cdCAgfSBlbHNlIHtcclxuXHQgICAgdGhpcy5faW5pdENsaWNrT3V0c2lkZUxpc3RlbmVyKCk7XHJcblx0ICB9XHJcblx0fVxyXG4gICAgXHJcblx0cHJpdmF0ZSBfZXhjbHVkZUNoZWNrKCkge1xyXG5cdCAgaWYgKHRoaXMuZXhjbHVkZSkge1xyXG5cdCAgICB0cnkge1xyXG5cdFx0Y29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmV4Y2x1ZGUpKSBhcyBBcnJheTxIVE1MRWxlbWVudD47XHJcblx0XHRpZiAobm9kZXMpIHtcclxuXHRcdCAgdGhpcy5fbm9kZXNFeGNsdWRlZCA9IG5vZGVzO1xyXG5cdFx0fVxyXG5cdCAgICB9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ1tuZy1jbGljay1vdXRzaWRlXSBDaGVjayB5b3VyIGV4Y2x1ZGUgc2VsZWN0b3Igc3ludGF4LicsIGVycik7XHJcblx0ICAgIH1cclxuXHQgIH1cclxuXHR9XHJcbiAgICBcclxuXHRwcml2YXRlIF9vbkNsaWNrQm9keShldjogRXZlbnQpIHtcclxuXHQgIGlmICghdGhpcy5jbGlja091dHNpZGVFbmFibGVkKSB7XHJcblx0ICAgIHJldHVybjtcclxuXHQgIH1cclxuICAgIFxyXG5cdCAgaWYgKHRoaXMuZXhjbHVkZUJlZm9yZUNsaWNrKSB7XHJcblx0ICAgIHRoaXMuX2V4Y2x1ZGVDaGVjaygpO1xyXG5cdCAgfVxyXG4gICAgXHJcblx0ICBpZiAoIXRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXYudGFyZ2V0KSAmJiAhdGhpcy5fc2hvdWxkRXhjbHVkZShldi50YXJnZXQpKSB7XHJcblx0ICAgIHRoaXMuX2VtaXQoZXYpO1xyXG4gICAgXHJcblx0ICAgIGlmICh0aGlzLmF0dGFjaE91dHNpZGVPbkNsaWNrKSB7XHJcblx0XHR0aGlzLl9yZW1vdmVDbGlja091dHNpZGVMaXN0ZW5lcigpO1xyXG5cdCAgICB9XHJcblx0ICB9XHJcblx0fVxyXG4gICAgXHJcblx0LyoqXHJcblx0ICogUmVzb2x2ZXMgcHJvYmxlbSB3aXRoIG91dHNpZGUgY2xpY2sgb24gaWZyYW1lXHJcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYXJrb24vbmctY2xpY2stb3V0c2lkZS9pc3N1ZXMvMzJcclxuXHQgKi9cclxuXHRwcml2YXRlIF9vbldpbmRvd0JsdXIoZXY6IEV2ZW50KSB7XHJcblx0ICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHQgICAgaWYgKCF0aGlzLmRvY3VtZW50LmhpZGRlbikge1xyXG5cdFx0dGhpcy5fZW1pdChldik7XHJcblx0ICAgIH1cclxuXHQgIH0pO1xyXG5cdH1cclxuICAgIFxyXG5cdHByaXZhdGUgX2VtaXQoZXY6IEV2ZW50KSB7XHJcblx0ICBpZiAoIXRoaXMuY2xpY2tPdXRzaWRlRW5hYmxlZCkge1xyXG5cdCAgICByZXR1cm47XHJcblx0ICB9XHJcbiAgICBcclxuXHQgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gdGhpcy5jbGlja091dHNpZGUuZW1pdChldikpO1xyXG5cdH1cclxuICAgIFxyXG5cdHByaXZhdGUgX3Nob3VsZEV4Y2x1ZGUodGFyZ2V0OiBhbnkpOiBib29sZWFuIHtcclxuXHQgIGZvciAobGV0IGV4Y2x1ZGVkTm9kZSBvZiB0aGlzLl9ub2Rlc0V4Y2x1ZGVkKSB7XHJcblx0ICAgIGlmIChleGNsdWRlZE5vZGUuY29udGFpbnModGFyZ2V0KSkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0ICAgIH1cclxuXHQgIH1cclxuICAgIFxyXG5cdCAgcmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuICAgIFxyXG5cdHByaXZhdGUgX2luaXRDbGlja091dHNpZGVMaXN0ZW5lcigpIHtcclxuXHQgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0ICAgIHRoaXMuX2V2ZW50cy5mb3JFYWNoKGUgPT4gdGhpcy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGUsIHRoaXMuX29uQ2xpY2tCb2R5KSk7XHJcblx0ICB9KTtcclxuXHR9XHJcbiAgICBcclxuXHRwcml2YXRlIF9yZW1vdmVDbGlja091dHNpZGVMaXN0ZW5lcigpIHtcclxuXHQgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0ICAgIHRoaXMuX2V2ZW50cy5mb3JFYWNoKGUgPT4gdGhpcy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGUsIHRoaXMuX29uQ2xpY2tCb2R5KSk7XHJcblx0ICB9KTtcclxuXHR9XHJcbiAgICBcclxuXHRwcml2YXRlIF9pbml0QXR0YWNoT3V0c2lkZU9uQ2xpY2tMaXN0ZW5lcigpIHtcclxuXHQgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0ICAgIHRoaXMuX2V2ZW50cy5mb3JFYWNoKGUgPT4gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGUsIHRoaXMuX2luaXRPbkNsaWNrQm9keSkpO1xyXG5cdCAgfSk7XHJcblx0fVxyXG4gICAgXHJcblx0cHJpdmF0ZSBfcmVtb3ZlQXR0YWNoT3V0c2lkZU9uQ2xpY2tMaXN0ZW5lcigpIHtcclxuXHQgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0ICAgIHRoaXMuX2V2ZW50cy5mb3JFYWNoKGUgPT4gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGUsIHRoaXMuX2luaXRPbkNsaWNrQm9keSkpO1xyXG5cdCAgfSk7XHJcblx0fVxyXG4gICAgXHJcblx0cHJpdmF0ZSBfaW5pdFdpbmRvd0JsdXJMaXN0ZW5lcigpIHtcclxuXHQgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0ICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fb25XaW5kb3dCbHVyKTtcclxuXHQgIH0pO1xyXG5cdH1cclxuICAgIFxyXG5cdHByaXZhdGUgX3JlbW92ZVdpbmRvd0JsdXJMaXN0ZW5lcigpIHtcclxuXHQgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0ICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fb25XaW5kb3dCbHVyKTtcclxuXHQgIH0pO1xyXG5cdH1cclxuICAgIFxyXG4gICAgfSJdfQ==
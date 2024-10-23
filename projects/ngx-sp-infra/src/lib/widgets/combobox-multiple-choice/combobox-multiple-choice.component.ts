import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RecordCombobox } from '../../models/combobox/record-combobox';

@Component({
  selector: 'app-combobox-multiple-choice',
  templateUrl: './combobox-multiple-choice.component.html',
  styleUrls: ['./combobox-multiple-choice.component.scss']
})
export class ComboboxMultipleChoiceComponent {


  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  @Output('resetFilter') private readonly _EMIT_RESET_FILTER: EventEmitter<void> = new EventEmitter<void>();
  // #endregion PRIVATE

  // #region PROTECTED
  protected search: string = '';

  protected get selectedOptions(): RecordCombobox[] { return this.options.filter(e => e.IS_SELECTED); }
  protected get selectedLabels(): string { return this.selectedOptions.map(option => option.LABEL).join(', '); }

  @Output('change') protected readonly EMIT_CHANGE: EventEmitter<string | number> = new EventEmitter<string | number>();
  // #endregion PROTECTED

  // #region PUBLIC
  @Input({ required: true }) public options: RecordCombobox[];
  @Input() public placeholder: string = 'Selecione uma ou mais opções';
  @Input() public disabled: boolean = false;
  // REVISAR
  @Input() public showLimparBtn: boolean = true;
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> UTILITIES <==========
  protected resetFilter(): void {
    this.options.forEach(e => e.IS_SELECTED = false);
    this._EMIT_RESET_FILTER.emit();
    this.EMIT_CHANGE.emit();
  }
  // #endregion ==========> UTILITIES <==========



}

import { Component, input, output, SimpleChanges } from '@angular/core';
import { RecordCombobox } from '../../models/combobox/record-combobox';


@Component({
  selector: 'app-dropdown-options',
  templateUrl: './dropdown-options.component.html',
  styleUrl: './dropdown-options.component.scss'
})
export class DropdownOptionsComponent {
  options = input.required<RecordCombobox[]>();
  label = input.required();
  
  filterValue = input.required<string>();

  hideOptionId = input<string | null>();
  optionSelected = output<RecordCombobox>();
  
  filteredOptions: RecordCombobox[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['hideOptionId'] || changes['filterValue']) {
      this.filterOptions();
    }
  }

  filterOptions() {
    this.filteredOptions = this.options().filter(option => 
      (!this.hideOptionId() || option.ID !== this.hideOptionId()) &&
      (this.filterValue() === '' || option.LABEL.toLowerCase().includes(this.filterValue().toLowerCase()))
    );
  }

  handleOptionClick(option: any): void {
    this.optionSelected.emit(option);
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { RecordCombobox } from '../models/combobox/record-combobox';

@Pipe({
  name: 'textFilter',
  pure: false
})
export class TextFilterPipe implements PipeTransform {
  transform(options: RecordCombobox[], search: string): any[] {
    return options.filter(e => e.LABEL.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || e.ID.toLocaleString().toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }
}

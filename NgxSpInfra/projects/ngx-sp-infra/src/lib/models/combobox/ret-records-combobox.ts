import { RecordCombobox } from './record-combobox';

export class RetRecordsCombobox {
  Error: boolean;
  ErrorMessage: string;
  Records: RecordCombobox[] = [];
}

export class RetRecordCombobox {
  Error: boolean;
  ErrorMessage: string;
  Record: RecordCombobox = new RecordCombobox();
}

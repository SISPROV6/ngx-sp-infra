export declare class RecordCombobox implements IRecordsCombobox {
    ID: string | number;
    LABEL: string;
    AdditionalStringProperty1?: string;
    AdditionalStringProperty2?: string;
    AdditionalLongProperty1?: number;
    AdditionalLongProperty2?: number;
    AdditionalBooleanProperty1?: boolean;
    AdditionalBooleanProperty2?: boolean;
    IS_SELECTED?: boolean | null;
}
export interface IRecordsCombobox {
    ID: string | number;
    LABEL: string;
}

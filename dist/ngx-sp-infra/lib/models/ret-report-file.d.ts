import { IError } from "./ierror";
import { ReportFile } from "./report-file";
export declare class RetReportFile implements IError {
    Error: boolean;
    ErrorMessage: string;
    ReportFile: ReportFile;
}

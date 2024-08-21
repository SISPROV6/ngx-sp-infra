import { IError } from "./ierror";
import { ReportFile } from "./report-file";

export class RetReportFile implements IError {
    Error: boolean;
    ErrorMessage: string;
    ReportFile: ReportFile;
}

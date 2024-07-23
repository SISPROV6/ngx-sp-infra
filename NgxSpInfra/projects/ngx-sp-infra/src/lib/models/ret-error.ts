import { IError } from "./ierror";

export class RetError implements IError {
    Error: boolean;
    ErrorMessage: string;
}

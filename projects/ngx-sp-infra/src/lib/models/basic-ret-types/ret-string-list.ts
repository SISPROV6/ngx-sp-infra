import { IError } from '../ierror';

export class RetStringList implements IError {
  Error: boolean;
  ErrorMessage: string;
  StringList: string[];
}
import { IError } from '../ierror';

export class RetString implements IError {
  Error: boolean;
  ErrorMessage: string;
  String: string;
}
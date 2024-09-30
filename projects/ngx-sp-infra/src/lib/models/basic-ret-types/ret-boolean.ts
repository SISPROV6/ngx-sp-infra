import { IError } from '../ierror';

export class RetBoolean implements IError {
  Error: boolean;
  ErrorMessage: string;
  Boolean: boolean;
}
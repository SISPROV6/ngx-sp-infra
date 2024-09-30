import { IError } from '../ierror';

export class RetObjectList implements IError {
  Error: boolean;
  ErrorMessage: string;
  ObjectList: string[] | number[];
}
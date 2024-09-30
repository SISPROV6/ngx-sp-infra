import { IError } from '../ierror';

export class RetNumber implements IError {
  public Error: boolean;
  public ErrorMessage: string;
  public Number: number;
}

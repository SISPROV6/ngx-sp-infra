import { IError } from "ngx-sp-infra";
import { EstPessoaRecord } from "../7Db/est-pessoa.record";

export class RetPessoa implements IError {
   public Error: boolean;
   public ErrorMessage: string;
   public PessoaRecord: EstPessoaRecord = new EstPessoaRecord();
}
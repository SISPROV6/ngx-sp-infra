import { IError } from "ngx-sp-infra";
import { PessoasListModel } from "../3Rn/pessoas-list.model";
import { ContagemPessoasCards } from "../3Rn/contagemCardsPessoas.model";

export default class RetPessoasListModel implements IError {
   public Error: boolean;
   public ErrorMessage: string;
   public PessoasList: PessoasListModel[] = [];
   public contagemPessoasCards: ContagemPessoasCards = new ContagemPessoasCards();
}
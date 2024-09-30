import { IError } from "./ierror";
import { InfraEstabelecimentoFavoritoDefault } from "./infra-estabelecimento";

export class RetEstabelecimentosModal implements IError {
   Error: boolean;
   ErrorMessage: string;
   InfraEstabelecimentos: InfraEstabelecimentoFavoritoDefault[];
}
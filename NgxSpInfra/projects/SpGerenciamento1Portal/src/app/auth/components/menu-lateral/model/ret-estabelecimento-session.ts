import { IError } from 'ngx-sp-infra';

export class RetEstabelecimentoSession implements IError {
  public Error: boolean;
  public ErrorMessage: string;

  InfraEstabNome: string = "";
  InfraEmpresaId: string = "";
  InfraEmpresaNome: string = ""; 
}

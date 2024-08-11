import { IError } from "ngx-sp-infra";

export class RetLogin implements IError {
  Error: boolean;
  ErrorMessage: string;
  TenantId: number;
  EstabelecimentoId: string;
  NomeEstabelecimento: string;
  EmpresaId: string;
  NomeEmpresa: string;
  InfraUsuarioId: string;
  UserName: string;
  Token: string;
  Dominio: string;
  InitializePassword: boolean;
}

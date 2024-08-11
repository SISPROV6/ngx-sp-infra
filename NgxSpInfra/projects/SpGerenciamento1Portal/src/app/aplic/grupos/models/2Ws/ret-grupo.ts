import { IError } from "ngx-sp-infra";
import { Grupo } from "../7Db/grupo";

export class RetGrupo implements IError {
    Error: boolean;
    ErrorMessage: string;
    Grupo: Grupo;
}

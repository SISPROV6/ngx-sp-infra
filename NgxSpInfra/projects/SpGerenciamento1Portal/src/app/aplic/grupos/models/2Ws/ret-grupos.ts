import { IError } from "ngx-sp-infra";
import { Grupo } from "../7Db/grupo";

export class RetGrupos implements IError {
    Error: boolean;
    ErrorMessage: string;
    Grupos: Grupo[];
}

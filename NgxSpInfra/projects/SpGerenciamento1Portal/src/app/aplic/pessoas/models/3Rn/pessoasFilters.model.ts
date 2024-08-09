import { BasicFilters } from "src/app/project/models/basic-filters";

export class PessoasFilters implements BasicFilters {
   public TEXTO_PESQUISA: string = "";
   public IS_ATIVO: boolean = true;
   public PAPEL: string | null = "";
   public TIPO: string | null = "";
}
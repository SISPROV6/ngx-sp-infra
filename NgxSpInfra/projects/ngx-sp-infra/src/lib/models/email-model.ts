/**
 * Modelo de dados para envio de e-mails
 */
export class EmailModel {
  public tipoEmail: number = 0;
  public moduloID: number = 0;
  public moduloNome: string = "";
  public adressFrom: string = "";
  public remetenteNome: string = "";
  public adressTo: string = "";
  public adressesCC: string = "";
  public assuntoEmail: string = "";
  public tituloEmail: string = "";
  public corpoEmail: string = "";
  public htmlLinks: string | null = "";
  public anexosList: EmailAnexoRecord[] = [];
  public estabelecimentoID: string | null = "";
  public emailHomologacao: string | null = "";
}

/**
 * Modelo de dados para anexos de e-mail
 */
export class EmailAnexoRecord {
  /** Base64 do arquivo */
  public File: string = "";

  /** Nome do arquivo com sua extensão */
  public FileName: string = "";

  /** Tipo do conteúdo do arquivo */
  public ContentType: string = "";
}

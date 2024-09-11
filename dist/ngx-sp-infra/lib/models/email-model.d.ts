/**
 * Modelo de dados para envio de e-mails
 */
export declare class EmailModel {
    tipoEmail: number;
    moduloID: number;
    moduloNome: string;
    adressFrom: string;
    remetenteNome: string;
    adressTo: string;
    adressesCC: string;
    assuntoEmail: string;
    tituloEmail: string;
    corpoEmail: string;
    htmlLinks: string | null;
    anexosList: EmailAnexoRecord[];
    estabelecimentoID: string | null;
    emailHomologacao: string | null;
}
/**
 * Modelo de dados para anexos de e-mail
 */
export declare class EmailAnexoRecord {
    /** Base64 do arquivo */
    File: string;
    /** Nome do arquivo com sua extensão */
    FileName: string;
    /** Tipo do conteúdo do arquivo */
    ContentType: string;
}
//# sourceMappingURL=email-model.d.ts.map
export class EstPessoaRecord {
	public TENANT_ID: number = 0;
	public ID_PESSOA: string = "";
	public TX_NOMEPESSOA: string = "";
	public TIPOPESSOA_CD: string = "";
	public PAPEL_CD: string = "";
	public TX_DOCUMENTO: string = "";
	public DT_NASCIMENTO: Date = new Date();
	public DT_FUNDACAO: Date = new Date();
	public DT_INICIOVINCULO: Date = new Date();
	public DT_CRIACAO: string | Date = "";
	public DT_ULTIMAALTERACAO: string | Date = "";
	public IS_ACTIVE: boolean = true;
	public IS_ESTRANGEIRO: boolean = false;
}
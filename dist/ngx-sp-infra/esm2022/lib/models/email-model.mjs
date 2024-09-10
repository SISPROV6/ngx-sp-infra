/**
 * Modelo de dados para envio de e-mails
 */
export class EmailModel {
    constructor() {
        this.tipoEmail = 0;
        this.moduloID = 0;
        this.moduloNome = "";
        this.adressFrom = "";
        this.remetenteNome = "";
        this.adressTo = "";
        this.adressesCC = "";
        this.assuntoEmail = "";
        this.tituloEmail = "";
        this.corpoEmail = "";
        this.htmlLinks = "";
        this.anexosList = [];
        this.estabelecimentoID = "";
        this.emailHomologacao = "";
    }
}
/**
 * Modelo de dados para anexos de e-mail
 */
export class EmailAnexoRecord {
    constructor() {
        /** Base64 do arquivo */
        this.File = "";
        /** Nome do arquivo com sua extensão */
        this.FileName = "";
        /** Tipo do conteúdo do arquivo */
        this.ContentType = "";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi9tb2RlbHMvZW1haWwtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxNQUFNLE9BQU8sVUFBVTtJQUF2QjtRQUNTLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUF1QixFQUFFLENBQUM7UUFDcEMsc0JBQWlCLEdBQWtCLEVBQUUsQ0FBQztRQUN0QyxxQkFBZ0IsR0FBa0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7Q0FBQTtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGdCQUFnQjtJQUE3QjtRQUNFLHdCQUF3QjtRQUNqQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBRXpCLHVDQUF1QztRQUNoQyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRTdCLGtDQUFrQztRQUMzQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1vZGVsbyBkZSBkYWRvcyBwYXJhIGVudmlvIGRlIGUtbWFpbHNcbiAqL1xuZXhwb3J0IGNsYXNzIEVtYWlsTW9kZWwge1xuICBwdWJsaWMgdGlwb0VtYWlsOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgbW9kdWxvSUQ6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBtb2R1bG9Ob21lOiBzdHJpbmcgPSBcIlwiO1xuICBwdWJsaWMgYWRyZXNzRnJvbTogc3RyaW5nID0gXCJcIjtcbiAgcHVibGljIHJlbWV0ZW50ZU5vbWU6IHN0cmluZyA9IFwiXCI7XG4gIHB1YmxpYyBhZHJlc3NUbzogc3RyaW5nID0gXCJcIjtcbiAgcHVibGljIGFkcmVzc2VzQ0M6IHN0cmluZyA9IFwiXCI7XG4gIHB1YmxpYyBhc3N1bnRvRW1haWw6IHN0cmluZyA9IFwiXCI7XG4gIHB1YmxpYyB0aXR1bG9FbWFpbDogc3RyaW5nID0gXCJcIjtcbiAgcHVibGljIGNvcnBvRW1haWw6IHN0cmluZyA9IFwiXCI7XG4gIHB1YmxpYyBodG1sTGlua3M6IHN0cmluZyB8IG51bGwgPSBcIlwiO1xuICBwdWJsaWMgYW5leG9zTGlzdDogRW1haWxBbmV4b1JlY29yZFtdID0gW107XG4gIHB1YmxpYyBlc3RhYmVsZWNpbWVudG9JRDogc3RyaW5nIHwgbnVsbCA9IFwiXCI7XG4gIHB1YmxpYyBlbWFpbEhvbW9sb2dhY2FvOiBzdHJpbmcgfCBudWxsID0gXCJcIjtcbn1cblxuLyoqXG4gKiBNb2RlbG8gZGUgZGFkb3MgcGFyYSBhbmV4b3MgZGUgZS1tYWlsXG4gKi9cbmV4cG9ydCBjbGFzcyBFbWFpbEFuZXhvUmVjb3JkIHtcbiAgLyoqIEJhc2U2NCBkbyBhcnF1aXZvICovXG4gIHB1YmxpYyBGaWxlOiBzdHJpbmcgPSBcIlwiO1xuXG4gIC8qKiBOb21lIGRvIGFycXVpdm8gY29tIHN1YSBleHRlbnPDo28gKi9cbiAgcHVibGljIEZpbGVOYW1lOiBzdHJpbmcgPSBcIlwiO1xuXG4gIC8qKiBUaXBvIGRvIGNvbnRlw7pkbyBkbyBhcnF1aXZvICovXG4gIHB1YmxpYyBDb250ZW50VHlwZTogc3RyaW5nID0gXCJcIjtcbn1cbiJdfQ==
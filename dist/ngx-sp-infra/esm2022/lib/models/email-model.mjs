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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3AtaW5mcmEvc3JjL2xpYi9tb2RlbHMvZW1haWwtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxNQUFNLE9BQU8sVUFBVTtJQUF2QjtRQUNTLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUF1QixFQUFFLENBQUM7UUFDcEMsc0JBQWlCLEdBQWtCLEVBQUUsQ0FBQztRQUN0QyxxQkFBZ0IsR0FBa0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7Q0FBQTtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGdCQUFnQjtJQUE3QjtRQUNFLHdCQUF3QjtRQUNqQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBRXpCLHVDQUF1QztRQUNoQyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRTdCLGtDQUFrQztRQUMzQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogTW9kZWxvIGRlIGRhZG9zIHBhcmEgZW52aW8gZGUgZS1tYWlsc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVtYWlsTW9kZWwge1xyXG4gIHB1YmxpYyB0aXBvRW1haWw6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIG1vZHVsb0lEOiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBtb2R1bG9Ob21lOiBzdHJpbmcgPSBcIlwiO1xyXG4gIHB1YmxpYyBhZHJlc3NGcm9tOiBzdHJpbmcgPSBcIlwiO1xyXG4gIHB1YmxpYyByZW1ldGVudGVOb21lOiBzdHJpbmcgPSBcIlwiO1xyXG4gIHB1YmxpYyBhZHJlc3NUbzogc3RyaW5nID0gXCJcIjtcclxuICBwdWJsaWMgYWRyZXNzZXNDQzogc3RyaW5nID0gXCJcIjtcclxuICBwdWJsaWMgYXNzdW50b0VtYWlsOiBzdHJpbmcgPSBcIlwiO1xyXG4gIHB1YmxpYyB0aXR1bG9FbWFpbDogc3RyaW5nID0gXCJcIjtcclxuICBwdWJsaWMgY29ycG9FbWFpbDogc3RyaW5nID0gXCJcIjtcclxuICBwdWJsaWMgaHRtbExpbmtzOiBzdHJpbmcgfCBudWxsID0gXCJcIjtcclxuICBwdWJsaWMgYW5leG9zTGlzdDogRW1haWxBbmV4b1JlY29yZFtdID0gW107XHJcbiAgcHVibGljIGVzdGFiZWxlY2ltZW50b0lEOiBzdHJpbmcgfCBudWxsID0gXCJcIjtcclxuICBwdWJsaWMgZW1haWxIb21vbG9nYWNhbzogc3RyaW5nIHwgbnVsbCA9IFwiXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNb2RlbG8gZGUgZGFkb3MgcGFyYSBhbmV4b3MgZGUgZS1tYWlsXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW1haWxBbmV4b1JlY29yZCB7XHJcbiAgLyoqIEJhc2U2NCBkbyBhcnF1aXZvICovXHJcbiAgcHVibGljIEZpbGU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gIC8qKiBOb21lIGRvIGFycXVpdm8gY29tIHN1YSBleHRlbnPDo28gKi9cclxuICBwdWJsaWMgRmlsZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gIC8qKiBUaXBvIGRvIGNvbnRlw7pkbyBkbyBhcnF1aXZvICovXHJcbiAgcHVibGljIENvbnRlbnRUeXBlOiBzdHJpbmcgPSBcIlwiO1xyXG59XHJcbiJdfQ==
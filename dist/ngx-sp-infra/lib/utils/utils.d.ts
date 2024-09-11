export declare class Utils {
    static getHttpErrorMessage(error: any): string;
    static convertDateTimeToDateString(date: Date): string;
    static convertStringToDate(text: string): Date;
    /**
     * Verifica se um determinado ano é bissexto.
     * @param year Ano a ser verificado.
     * @returns Retorna true se o ano for bissexto e false se ele não for, ou se o ano informado for inválido.
     */
    static isLeapYear(year: number | string): boolean;
    /**
     * Verifica se uma determinada data é indeterminada.
     * @param dateTime Data a ser verificada.
     * @returns Retorna true se for indeterminada e false se não for.
     */
    static verifyDateIsIndeterminate(dateTime: Date): boolean;
    /**
     * Verifica se uma determinada data é nula (igual a '1900-01-01T00:00:00').
     * @param dateTime Data a ser verificada.
     * @returns Retorna true se for nula e false se não for.
     */
    static verifyDateIsNull(dateTime: Date): boolean;
    /**
     * Tenta realizar um parse de uma data com os seguintes valores: dd/MM/yyyy HH:mm
     *
     * @param value String que contém a data formatada em pt-br
     * @param dateSeparator Separador da data.
     * @returns
     */
    static parseDateTime(value: string, dateSeparator?: string): Date | undefined;
    static getDateLocalTime(date: Date): Date;
    static getDateLocalTimeISO(date: Date): string;
    static getDatePickerDate(str: String): Date;
    static AdicionaDias(data: Date, days: number): Date;
    static DiferencaDias(dataInicial: Date, dataFinal: Date): number;
    static DiferencaMeses(dataInicial: Date, dataFinal: Date): number;
    static getDateUTC(date: Date): Date;
    static getDateddMMyyy(date: Date): string;
    static getDateddMMyyyyHhmmss(date: Date): string;
    static UltimoDiaMes(data: Date): Date;
    static getDateTimeUTC(date: Date): Date;
    static compareEqualDates(date1: Date, date2: Date): boolean;
    static convertMMYYYYToDate(value: string): Date;
    static getNullDate(): Date;
    static getDateWebServiceFormat(value: Date): string;
    static getDateTimeWebServiceFormat(value: Date): string;
    static downloadFileBase64(fleName: string, file: string): void;
    /**
    * Abre o popup do navegador para baixar um arquivo que veio de um blob.
    *
    * @param blob Conteúdo do arquivo binário a ser baixado.
    * @param fileName Nome do arquivo a ser salvo.
    */
    static downloadFile(blob: Blob, fileName: string): void;
    static b64DecodeUnicode(str: string): string;
    static b64EncodeUnicode(str: string): string;
    static getIsMobile(): boolean;
}
//# sourceMappingURL=utils.d.ts.map
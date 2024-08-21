export class Utils {

  // Obtém a mensagem de erro de uma requisição http
  public static getHttpErrorMessage(error: any): string {

    let errorMessage: string = '';

    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {

      // Erro ocorreu no lado do servidor
      if (error.status) {

        if (error.status == 200) {

          if (error.error) {

            if (error.error.ErrorMessage) {
              errorMessage = `${error.error.ErrorMessage}`;
            }
            else {
              errorMessage = `${error.error.Message}`;
            }

          } else {
            errorMessage = error.message;
          }

        }
        else {

          if (error.error) {

            if (error.error.ErrorMessage) {
              errorMessage = `${error.error.ErrorMessage}<br><br>${error.status} - ${error.statusText}`;
            }
            else {
              errorMessage = `${error.error.Message}<br><br>${error.status} - ${error.statusText}`;
            }

          } else {
            errorMessage = error.message;
          }

        }

      } else {
        errorMessage = error.message;
      }

    }

    return errorMessage;
  };

  public static convertDateTimeToDateString(date: Date): string {
    const dateString: string[] = date.toString().split('T')[0].split('-');

    return `${dateString[0]}-${dateString[1]}-${dateString[2]}`;
  }

  public static convertStringToDate(text: string): Date {
    const dateString: string[] = text.split('-');

    return new Date(+dateString[0], (+dateString[1]) - 1, +dateString[2]);
  }

  /**
   * Verifica se um determinado ano é bissexto.
   * @param year Ano a ser verificado.
   * @returns Retorna true se o ano for bissexto e false se ele não for, ou se o ano informado for inválido.
   */
  public static isLeapYear(year: number | string): boolean {
    const YEAR_NUMBER: number = typeof year === 'string' ? parseInt(year) : year;

    if (!isNaN(YEAR_NUMBER)) {
      if ((YEAR_NUMBER % 4 === 0 && YEAR_NUMBER % 100 !== 0) || YEAR_NUMBER % 400 === 0) return true;
      else return false;
    }
    else return false;
  }

  /**
   * Verifica se uma determinada data é indeterminada.
   * @param dateTime Data a ser verificada.
   * @returns Retorna true se for indeterminada e false se não for.
   */
  public static verifyDateIsIndeterminate(dateTime: Date): boolean {
    return dateTime.toString().split('T')[0] === '2099-12-31';
  }

  /**
   * Verifica se uma determinada data é nula (igual a '1900-01-01T00:00:00').
   * @param dateTime Data a ser verificada.
   * @returns Retorna true se for nula e false se não for.
   */
  public static verifyDateIsNull(dateTime: Date): boolean {
    return dateTime.toString().split('T')[0] === '1900-01-01';
  }

  /**
   * Tenta realizar um parse de uma data com os seguintes valores: dd/MM/yyyy HH:mm
   * 
   * @param value String que contém a data formatada em pt-br
   * @param dateSeparator Separador da data.
   * @returns 
   */
  public static parseDateTime(value: string, dateSeparator: string = "/"): Date | undefined {
    let usDate = "";

    value = value.trim();

    let dateAndTime: string[] = value.split(" ");

    // Possui pelo menos 5 caracteres: 1/1/1
    if (value.length >= 5) {
      let dateSeparated: string[] = dateAndTime[0].split(dateSeparator);

      if (dateSeparated.length !== 3) {
        return;
      }

      if (dateSeparated[2].length > 2) {
        dateSeparated[2] = `${dateSeparated[2].charAt(0)}${dateSeparated[2].charAt(1)}`.trim();
      }

      usDate = `${dateSeparated[1]}/${dateSeparated[0]}/${dateSeparated[2]}`
    }

    if (dateAndTime.length === 2) {

      usDate += ` ${dateAndTime[1]}`;
    }

    let expectedDate: number = Date.parse(usDate);

    if (expectedDate !== null || expectedDate < 0) {
      return;
    }

    return new Date(expectedDate);
  }

  // Obtém a Data local
  public static getDateLocalTime(date: Date): Date {
    return (new Date(date.getTime() - date.getTimezoneOffset() * 60000));
  }

  // Obtém a Data local no Padrão Iso
  public static getDateLocalTimeISO(date: Date): string {
    return (this.getDateLocalTime(date).toISOString().replace('.000Z', ''));
  }

  public static getDatePickerDate(str: String): Date {
    const [dateComponents, timeComponents] = str.split('T')
    const [ano, mes, dia] = dateComponents.split('-');
    const [hora, minuto, segundo] = timeComponents.split(':');
    const date = new Date(Number(ano), Number(mes), Number(dia))

    return date
  }

  public static AdicionaDias(data: Date, days: number): Date {
    const find = new Date(Number(data))

    find.setDate(data.getDate() + days)

    return find
  }

  public static DiferencaDias(dataInicial: Date, dataFinal: Date): number {
    var Time = dataFinal.getTime() - dataInicial.getTime();

    return Time / (1000 * 3600 * 24);
  }

  public static DiferencaMeses(dataInicial: Date, dataFinal: Date): number {
    var meses = (dataFinal.getFullYear() - dataInicial.getFullYear()) * 12;
    meses -= dataInicial.getMonth();
    meses += dataFinal.getMonth();

    return meses <= 0 ? 0 : meses;
  }


  //Obtém a Data UTC com hora zerada
  public static getDateUTC(date: Date): Date {
    //codigo original
    //return new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
    let dataSaida: Date;

    try {
      dataSaida = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
    }
    catch (error) {
      //Quando date chega neste formato: 2022-06-20T00:00:00
      //tento pegar ano/mes/dia direto 
      //Date(DtIniFer.getUTCFullYear(), DtIniFer.getUTCMonth(), DtIniFer.getUTCDate(), 0 , 0 , 0);
      //e não funciona
      const dia: string = date.toString().substring(8, 10);
      const mes: string = date.toString().substring(5, 7);
      const ano: string = date.toString().substring(0, 4);
      dataSaida = new Date(Number(ano), Number(mes) - 1, Number(dia), 0, 0, 0);
    }

    return dataSaida;
  }

  //Obtém a Data UTC com hora zerada
  public static getDateddMMyyy(date: Date): string {
    //codigo original
    //return new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
    let dataSaida: Date;

    try {
      dataSaida = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
    }
    catch (error) {
      //Quando date chega neste formato: 2022-06-20T00:00:00
      //tento pegar ano/mes/dia direto 
      //Date(DtIniFer.getUTCFullYear(), DtIniFer.getUTCMonth(), DtIniFer.getUTCDate(), 0 , 0 , 0);
      //e não funciona
      const dia: string = date.toString().substring(8, 10);
      const mes: string = date.toString().substring(5, 7);
      const ano: string = date.toString().substring(0, 4);

      dataSaida = new Date(Number(ano), Number(mes) - 1, Number(dia), 0, 0, 0);
    }

    function pad(s: any) { return (s < 10) ? '0' + s : s; }

    return [pad(dataSaida.getUTCDate()), pad(dataSaida.getUTCMonth() + 1), pad(dataSaida.getUTCFullYear())].join('/');
  }

  //Obtém a Data UTC com a hora
  public static getDateddMMyyyyHhmmss(date: Date): string {
    let dataSaida: Date;

    try {
      dataSaida = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getHours(), date.getMinutes(), date.getSeconds());
    }
    catch (error) {
      //Quando date chega neste formato: 2022-06-20T00:00:00
      //tento pegar ano/mes/dia direto 
      //Date(DtIniFer.getUTCFullYear(), DtIniFer.getUTCMonth(), DtIniFer.getUTCDate(), 0 , 0 , 0);
      //e não funciona
      const dia: string = date.toString().substring(8, 10);
      const mes: string = date.toString().substring(5, 7);
      const ano: string = date.toString().substring(0, 4);
      const hora: string = date.toString().substring(11, 13);
      const minutos: string = date.toString().substring(14, 16);
      const segundos: string = date.toString().substring(17, 19);

      dataSaida = new Date(Number(ano), Number(mes) - 1, Number(dia), Number(hora), Number(minutos), Number(segundos));
    }

    function pad(s: any) { return (s < 10) ? '0' + s : s; }

    let dataFormatada: string = [pad(dataSaida.getDate()), pad(dataSaida.getUTCMonth() + 1), pad(dataSaida.getUTCFullYear())].join('/');

    dataFormatada += " ";
    dataFormatada += [pad(dataSaida.getHours()), pad(dataSaida.getMinutes()), pad(dataSaida.getSeconds())].join(':');

    return dataFormatada;
  }

  static UltimoDiaMes(data: Date): Date {
    let dataSaida: Date = this.getDateTimeUTC(data);
    // adiciona 1 mes
    dataSaida.setMonth(dataSaida.getUTCMonth() + 1);
    //Posiciona no dia 01 do mes adicionado
    dataSaida = new Date(dataSaida.getUTCFullYear(), dataSaida.getUTCMonth(), 1, 0, 0, 0);
    // subtrai 1 dia para ir para o ultimo dia do mes
    dataSaida.setDate(dataSaida.getDate() - 1);

    return dataSaida;
  }

  //Obtém a Data/hora UTC
  public static getDateTimeUTC(date: Date): Date {
    let dataSaida: Date;

    try {
      dataSaida = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getHours(), date.getMinutes(), date.getSeconds());
    }
    catch (error) {
      //Quando date chega neste formato: 2022-06-20T11:12:13
      const dia: string = date.toString().substring(8, 10);
      const mes: string = date.toString().substring(5, 7);
      const ano: string = date.toString().substring(0, 4);
      const hora: string = date.toString().substring(11, 13);
      const min: string = date.toString().substring(14, 16);
      const seg: string = date.toString().substring(17, 19);
      dataSaida = new Date(Number(ano), Number(mes) - 1, Number(dia), Number(hora), Number(min), Number(seg));
    }

    return dataSaida;
  }

  public static compareEqualDates(date1: Date, date2: Date): boolean {
    let strDate1: string = Utils.getDateddMMyyy(date1);
    let strDate2: string = Utils.getDateddMMyyy(date2);

    if (strDate1 === strDate2) {
      return true;
    } else {
      return false;
    }
  }

  public static convertMMYYYYToDate(value: string): Date {
    value = value.replace('/', '');

    let month: number = Number(value.substring(0, 2));
    let year: number = Number(value.substring(2, 6));

    //Diminui 1 pois no angular existe um índice do mês que não é igual ao mês.
    month = month - 1;

    return new Date(year, month, 1);
  }

  public static getNullDate(): Date {
    return new Date(1900, 0, 1, 0, 0, 0);
  }

  public static getDateWebServiceFormat(value: Date): string {

    if (value.toString() == '') {
      return '1900-01-01';
    }

    let data = Utils.getDateddMMyyy(value);

    return data.substring(6, 10) + '-' + data.substring(3, 5) + '-' + data.substring(0, 2);
  }

  public static getDateTimeWebServiceFormat(value: Date): string {
    if (value.toString() == '' || Utils.getDateddMMyyy(value) == Utils.getDateddMMyyy(this.getNullDate())) {
        return '1900-01-01T00:00:00';
    }
  
    const date = new Date(value);
  
    // Obtendo os componentes individuais da data
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds(); 
  
    const formattedDate = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    return formattedDate;
  }

  //Transforma a string Base64 num array de bytes e faz o download do arquivo.
  public static downloadFileBase64(fleName: string, file: string): void {
    const byteString = window.atob(file);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([int8Array]);

    const url = window.URL.createObjectURL(blob);

    //Abio
    //O window.open foi comentado porque no download dos arquivos digitais abria uma janela com o blob do arquivo. 
    //Comentar não afetou o download do contra-cheque.  
    //window.open(url);
    var a = document.createElement('a');

    a.href = url;
    a.target = '_blank';
    a.download = fleName;

    document.body.appendChild(a);

    a.click();
  }

  /**
  * Abre o popup do navegador para baixar um arquivo que veio de um blob.
  * 
  * @param blob Conteúdo do arquivo binário a ser baixado.
  * @param fileName Nome do arquivo a ser salvo.
  */
  public static downloadFile(blob: Blob, fileName: string): void {
    const anchor = window.document.createElement('a');

    anchor.href = window.URL.createObjectURL(blob);
    anchor.download = fileName;

    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(anchor.href);
  }

  public static b64DecodeUnicode(str: string): string {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  public static b64EncodeUnicode(str: string) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      (match, p1) => {
        return String.fromCharCode(("0x" + p1) as any);
      }));
  }

  //Largura a partir de onde remonta o ngx_datatable para mobile
  public static getIsMobile() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width < 768;
  }

}

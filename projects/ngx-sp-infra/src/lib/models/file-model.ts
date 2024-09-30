export class FileModel {
  public FileBase64: string = '';
  public FileBinary?: Uint8Array = new Uint8Array();
  public Filename: string = '';
  public HasFile: boolean = false;
}

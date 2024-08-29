import icons from '../icons/icons.json';

export class IconModel {
   public nome: string = "";
   public categoria: string = "";
   public svg?: string;
   public tags?: string[] = [];
}

export abstract class IconsList {
   public static get list(): IconModel[] { return icons.list; }
}
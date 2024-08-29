export declare class IconModel {
    nome: string;
    categoria: string;
    svg?: string;
    tags?: string[];
}
export declare abstract class IconsList {
    static get list(): IconModel[];
}

export interface IconModel {
    nome: string;
    categoria: string;
    svg?: string;
    tags?: string[];
}
export declare class IconsList {
    constructor(size: string | number);
    updateList(size: number): void;
    list: IconModel[];
    getIcon(name: string): IconModel | undefined;
}

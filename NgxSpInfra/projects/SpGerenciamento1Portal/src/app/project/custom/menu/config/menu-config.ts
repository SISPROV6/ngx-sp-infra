import { IMenuItemStructure } from "src/app/auth/components/menu-lateral/model/imenu-item-structure.model";

/** Classe responsável por configurar as opções do menu. */
export class MenuConfig {
   constructor(isStaticMenu: boolean) { this._isMenuStatic = isStaticMenu; }


   private _menuOptions: IMenuItemStructure[];

   /** Indica se o menu é estático ou dinâmico. */
   private _isMenuStatic: boolean = false;
   
   /** Obtém as opções do menu. */
   public get menuOptions(): IMenuItemStructure[] { return this._menuOptions; }
   public set menuOptions(value: IMenuItemStructure[]) { this._menuOptions = value; }

   /** Inicializa as opções do menu com base na rota atual e em uma lista personalizada (opcional).
    * @param currentRoute A rota atual da aplicação
    * @param customList Uma lista personalizada de opções de menu (opcional).
    * @returns As opções do menu inicializadas.
    */
   public initializeMenu(currentRoute: string, customList?: IMenuItemStructure[]): IMenuItemStructure[] {

      if (this._isMenuStatic) {
         const menuItems = [
            { id: 1, label: "Início", descricao: "Tela inicial", icon: "casa", route: "home", isSelected: currentRoute.includes("home"), isExpandable: false },
            { id: 2, label: "Painel de Pessoas", descricao: "Painel de Pessoas", icon: "usuario-quadro", route: "painel-pessoas", isSelected: false, isExpandable: false },
            { id: 3, label: "Painel de Produtos", descricao: "Painel de Produtos", icon: "caixa", route: "painel-produtos", isSelected: false, isExpandable: false },
            { id: 4, label: "Painel de Lançamentos", descricao: "Painel de Lançamentos", icon: "fluxo", route: "painel-lancamentos", isSelected: false, isExpandable: false },
            
            { id: 5, label: "Cadastros", descricao: "Produtos", icon: "engrenagem", route: "", isSelected: false, isExpandable: true, children: [
               { id: 501, label: "Categorias de Produtos", descricao: "Categorias de Produtos", icon: "", route: "categorias-produtos", isSelected: currentRoute.includes("produtos"), isExpandable: false }
            ] },
            { id: 6, label: "Auditoria", descricao: "Auditoria", icon: "auditoria", route: "auditoria", isSelected: false, isExpandable: false },
         ];

         this.updateRouteSelection(currentRoute, menuItems);
         return menuItems;
      }

      this.updateRouteSelection(currentRoute, customList ?? []);
      return customList ?? [];
   }

   public updateRouteSelection(currentRoute: string, currentList: IMenuItemStructure[]): IMenuItemStructure[] {
      currentList.forEach((item) => {
         if (item.children) { item.children.forEach(child => { child.isSelected = currentRoute.includes(child.route); }) }

         const anyChildSelected = item.children ? item.children.some(child => child.isSelected === true ) : false;
         item.isSelected = false;

         if (!item.children && currentRoute.includes(item.route)) { item.isSelected = true; }
         else if (item.children && anyChildSelected) { item.isSelected = true; }
      })

      return currentList;
   }
   
}

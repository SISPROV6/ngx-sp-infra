import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { IMenuItemStructure } from 'src/app/auth/components/menu-lateral/model/imenu-item-structure.model';
import { IMenu } from 'src/app/auth/components/menu-lateral/model/imenu.model';
import { MenuConfig } from './config/menu-config';
import { AuthStorageService } from 'src/app/auth/storage/auth-storage.service';

@Injectable(
  { providedIn: 'root' }
)
export class CustomMenuService {

  // #region Propriedade Customizadas do Menu
  
  public get menuDynamic(): boolean {
    return false;
  }
 
  public get moduleName(): string {
    return "Gestão de Estoque";
  }    

  public get moduleImg(): string {
    return "assets/icons/gestao-contratos.svg";
  }    

  public get moduleSvg(): string {
    return "";
  }     
  
  public get themeColor(): string {
    return "";
  }

  // #endregion Propriedade Customizadas do Menu

  // #region Propriedade do Menu

  private readonly _MENU_BASE_URL: string = `${environment.SpInfra2MenuWS}`; // SpInfra2MenuWS

  private currentURL: string = "";
  private _menuItems: IMenuItemStructure[];
  private menuList: IMenu[];
  private menuLateralUpdated: IMenuItemStructure[];
  public menuConfig: MenuConfig; 
 
  /** Obtém as opções do menu. */
  public get menuItems(): IMenuItemStructure[] 
  { 
    return this._menuItems;
  }

  public set menuItems(value: IMenuItemStructure[]) { 
    this._menuItems = value;
  }

 // Definição do BehaviorSubject: responsável principal da emissão do evento
 private empresaId: BehaviorSubject<{ estabelecimentoID: string, empresaID: string}> = new BehaviorSubject<{ estabelecimentoID: string, empresaID: string}>({ estabelecimentoID: "", empresaID: "" });
 public applyEmpresa$:  Observable<{ estabelecimentoID: string, empresaID: string}> = this.empresaId.asObservable();

 public setEmpresa(value: { estabelecimentoID: string, empresaID: string}) { this.empresaId.next(value) }
 // Definição do BehaviorSubject: responsável principal da emissão do evento

 // #endregion Propriedade do Menu

 constructor(
  private _authStorageService: AuthStorageService,
  private _router: Router
) {
    // inicializações do Menu Dinâmico
    this.currentURL = this._router.url;
}  

  // #region - Métodos Customizadas para o Menu dinâmico

  // Método executado no menu-lateral.component.ts - método: onInit ()
  // Utilizado para inicializações diversas
  public menuDynamicOnInit(): void
  {

  }

  // Método executado no menu-lateral.component.ts - método: onInit ()
  // Utilizado para inicializações diversas
  public menuStaticOnInit(): void
  {
 
  }

  // Método executado no menu-lateral.component.ts - método: openExpansibleMenu()
  // Utilizado para inicializações ao Exoandir a opção de Menu
  public menuopenExpansibleMenu(ref: HTMLDivElement): void
  {
 
  }

  /** Método que deve ser chamado na seleção de um novo estabelecimento, ele atualizará os valores do nosso BehaviorSubject para que possamos utilizá-lo em outras partes do sistema. */
  public emitEstabelecimentoEvent(): void {
    
    this.setEmpresa({
      estabelecimentoID: this._authStorageService.infraEstabId,
      empresaID: this._authStorageService.infraEmpresaId
    });

  }

  // #endregion - Métodos Customizadas para o Menu dinâmico

}

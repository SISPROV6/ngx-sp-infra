import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable(
  { providedIn: 'root' }
)
export class CustomLoginService {

  constructor() { } 
    
  // #region Propriedade Customizadas para o Componente login.component.ts
  
  public get loginTitle(): string {
    return "Organize, Controle, Cresça!";
  }
 
  public get loginSubtitle(): string {
    return "Transforme a gestão do seu estoque com eficiência e precisão,<br>impulsionando o sucesso do seu negócio.";
  }

  public get loginLogotipo(): string {
    return "assets/imgs/estoque-pronto.png";
  }

  public get loginAltLogotipo(): string {
    return "SISPRO | Estoque";
  }

  public get loginPageTitle(): string {
    return "SISPRO | Estoque";
  }

  public get loginDesenvDomain(): string {
    return "ESTAGIOANG12";
  }

  public get loginDesenvUser(): string {
    return "admin";
  }

  public get loginDesenvPassword(): string {
    return "admin";
  }

  // #endregion Propriedade Customizadas para o Componente login.component.ts

  // #region Métodos Customizadas para o Componente auth.service.ts
  
  // Método executado no auth.service.ts - método: login ()
  // Utilizado para inicializações diversas
  public authLogin(): void
  {

  }

  // Método executado no auth.service.ts - método: logout ()
  // Utilizado para inicializações diversas
  public authLogout(): void
  {

  }

  // Método executado no auth.service.ts - método: login ()
  // Utilizado para informar o redirecionamento para a tela inicial após o login ok
  public authNavigateToPage(router: Router): void
  {
    router.navigate(["/home"]);
  }

  // #endregion Métodos Customizadas para o Componente auth.service.ts

}

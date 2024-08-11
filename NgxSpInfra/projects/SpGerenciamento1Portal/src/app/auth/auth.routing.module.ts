import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { NovaSenhaComponent } from './components/nova-senha/nova-senhacomponent';

const routes: Routes = [
  { path: '', component: LoginComponent, data: {title: "SisproERP | Meu portal"} },
  { path: 'novaSenha/:param', component: NovaSenhaComponent, data: {title: "Nova Senha"} }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

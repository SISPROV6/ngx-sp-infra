import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GruposHomeComponent } from '../components/grupos-list/grupos-list.component';
import { AdicionarGrupoComponent } from '../components/adicionar-grupo/adicionar-grupo.component';

const routes: Routes = [
  { path: '', component: GruposHomeComponent, data: {title: 'Grupos'} },
  { path: "editar/:id", component: AdicionarGrupoComponent, data: {title: 'Adicionar Grupo'} },
];

@NgModule( {
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
} )
export class GruposRoutingModule { }

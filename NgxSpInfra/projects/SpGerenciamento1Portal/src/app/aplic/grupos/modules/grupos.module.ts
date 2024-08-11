import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjectModule } from 'src/app/project/project.module';

import { GruposRoutingModule } from './grupos.routing.module';

import { AdicionarGrupoComponent } from '../components/adicionar-grupo/adicionar-grupo.component';
import { GruposHomeComponent } from '../components/grupos-list/grupos-list.component';

@NgModule( {
	declarations: [
		AdicionarGrupoComponent,
		GruposHomeComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ProjectModule,
		GruposRoutingModule
	],
	exports: [
		AdicionarGrupoComponent,
		GruposHomeComponent
	]
})
export class GruposModule { }

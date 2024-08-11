import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PainelPessoasListComponent } from '../components/painel-pessoas-list/painel-pessoas-list.component';
import { FormularioPessoaComponent } from '../components/formulario-pessoa/formulario-pessoa.component';
import { ProjectModule } from 'src/app/project/project.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PainelPessoasListComponent,
    FormularioPessoaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectModule,
    PessoasRoutingModule
  ],
  exports: [
    PainelPessoasListComponent,
    FormularioPessoaComponent
  ]
})
export class PessoasModule { }

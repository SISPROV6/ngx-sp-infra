import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelPessoasListComponent } from '../components/painel-pessoas-list/painel-pessoas-list.component';
import { FormularioPessoaComponent } from '../components/formulario-pessoa/formulario-pessoa.component';

const routes: Routes = [
  { path: '', component: PainelPessoasListComponent, data: { title: 'Painel de Pessoas' } },
  { path: 'adicionar', component: FormularioPessoaComponent, data: { title: 'Adicionar Pessoa' } },
  { path: 'editar/:id', component: FormularioPessoaComponent, data: { title: 'Editar Pessoa' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }

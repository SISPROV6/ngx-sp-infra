import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/guards/auth-guard';
import { LoginGuard } from './auth/guards/login-guard';

import { Error404Component } from './project/components/error-404/error-404.component';
import { MenuLateralComponent } from './auth/components/menu-lateral/menu/menu-lateral.component';

const routes: Routes = [		
	{
		path: '',
		component: MenuLateralComponent,
		children: [
			{
				path: "home",
				loadChildren: () => 
					import('./aplic/home/modules/home.module' ).then( m => m.HomeModule),
				canActivate: [AuthGuard],
				canLoad: [AuthGuard]
			},
			{
				path: "grupos",
				loadChildren: () => 
					import('./aplic/grupos/modules/grupos.module').then( m => m.GruposModule),
				canActivate: [AuthGuard],
				canLoad: [AuthGuard]
			},
			{
				path: "painel-pessoas",
				loadChildren: () => 
					import('./aplic/pessoas/modules/pessoas.module').then( m => m.PessoasModule),
				canActivate: [AuthGuard],
				canLoad: [AuthGuard]
			},

			/*** Incluir novos grupos acima deste comentário ***/
			{
				path: 'page-not-authorized',
				loadChildren: () =>
				import('./project/project.module').then(m => m.ProjectModule),
			},
			{ 
				path: '', 
				redirectTo: "/home",
				pathMatch: 'full'
			},
		],
		canActivate: [AuthGuard],
		canLoad: [AuthGuard]
	},
	{
		path: "auth/login",
		loadChildren: () =>
			import('./auth/auth.module' ).then( ( m ) => m.AuthModule),
		canLoad: [LoginGuard]
	},
	{
		path: "error-404",
		component: Error404Component,
		data: { title: 'Página não encontrada' }
	},
	{ 
		path: '**', 
		component: Error404Component,
		data: {title: "Página não encontrada"}
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

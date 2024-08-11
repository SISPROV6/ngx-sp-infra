import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { FormUtils, MessageService } from 'ngx-sp-infra';
import { ProjectUtilservice } from 'src/app/project/utils/project-utils.service';
import { AuthService } from '../../auth.service';
import { ServerService } from '../../server/server.service';
import { AuthStorageService } from '../../storage/auth-storage.service';

@Component( {
	selector: 'app-nova-senha',
	templateUrl: './nova-senha.component.html',
	styleUrls: [ './nova-senha.component.scss' ],
	preserveWhitespaces: true,
} )
export class NovaSenhaComponent implements OnInit {

	constructor (
		private _formBuilder: FormBuilder,
		private _projectUtilservice: ProjectUtilservice,
		private _messageService: MessageService,
		private _serverService: ServerService,
		private _authService: AuthService,
		private _authStorageService: AuthStorageService,
		private _title: Title,
		private _router: Router,
		private _route: ActivatedRoute
		) { }

	ngOnInit (): void {

		this._title.setTitle("Nova Senha");

		this.createForm();

		this.getParmsFromRoute();		
	}

	// #region ==========> PROPERTIES <==========

	// #region PRIVATE
	private domain: string | null = "";
	private user: string | null = "";
	private createPassword: boolean = false;

	// #region PRIVATE

	// #region PUBLIC

	// #region ==========> FORM BUILDER <==========
	public form: FormGroup;

	//  Propriedade necessário para que a classe static FormUtils possa ser utilizada no Html
	public get FormUtils(): typeof FormUtils {
		return FormUtils;
	}

	public passwordLabel: string = "";

	// #region FORM DATA

	//  Variáveis específicas para funcionalidades padrões dos formulários
	public get code(): string | null {
		return this.form.get('code')?.value;
	}

	public get password(): string {
		return this.form.get('password')?.value;
	}

	public get confirmPassword(): string {
		return this.form.get('confirmPassword')?.value;
	}

	// #endregion FORM DATA

	// #region FORM VALIDATORS

	// #region PUBLIC

	//  Método para configuração dos campos de edição do formulário
	private createForm(): void {

		this.form = this._formBuilder.group({
			code: ['', [Validators.required, Validators.maxLength(6)]],
			password: ['', [Validators.required, Validators.maxLength(100)]],
			confirmPassword: ['', [Validators.required, Validators.maxLength(100)]]
		});

		this.form.get('code')?.setValue('');	
		this.form.get('password')?.setValue('');	
		this.form.get('confirmPassword')?.setValue('');	
	}

	// #endregion FORM VALIDATORS

	// #endregion ==========> FORM BUILDER <==========

	// #region ==========> SERVICE METHODS <==========
	

	// #region GET
	
	/**
	 * Puxa o nome do servidor salvo na configuração da máquina
	 */
	public getServer(): void {

		if (this.form.valid) {
			this._serverService.getServer().subscribe({
				next: response => {
				},
				error: (error) => {
					this._projectUtilservice.showHttpError(error);
				},
			})
		} else {
			FormUtils.validateFields(this.form);
		}
	}
	// #endregion GET

	// #region POST
	
	// Envia requisição para recuperar de senha
	public sendPassword(): void {

		if (this.form.valid) {
			this._serverService.getServer().subscribe({
				next: response => {
					this.updatePassword();
				},
				error: (error) => {
					this._projectUtilservice.showHttpError(error);
				},
			})

		} else {
			FormUtils.validateFields(this.form);
		}

	}

	// Recuperar senha
	public updatePassword(): void {

		if (this.createPassword) {
			this._authService.createPassword(this.domain!, this.user!, this.form.value).subscribe({
				next: (response) => {
					this._messageService.showAlertSuccess('Você definiu sua senha com sucesso. Preencha suas novas credenciais para acessar o sistema.');
					
					this.cancelar();
				},
				error: (error) => {
					this._projectUtilservice.showHttpError(error);
				},
			});

		} else {
			this._authService.recoverPassword(this.domain!, this.user!, this.form.value).subscribe({
				next: (response) => {
					this._messageService.showAlertSuccess('Você redefiniu sua senha com sucesso. Preencha suas novas credenciais para acessar o sistema.');
					
					this.cancelar();
				},
				error: (error) => {
					this._projectUtilservice.showHttpError(error);
				},
			});
		}

	}

	// #endregion POST

	// #region UTILIDADES
	private getParmsFromRoute(): void {
	
		if (this._route.snapshot.paramMap.get('param') != null) {
			let param: string = atob(this._route.snapshot.paramMap.get('param')!);

			var params = param.split('$');
          
			this.createPassword = (params[0] == 'true' ? true : false);
			this.domain = params[1];
			this.user = params[2];
			this.passwordLabel = (this.createPassword ? "Escolha sua nova senha" :  "Digite uma nova Senha");

			if (params[3] != null) {
				this.form.get('code')?.setValue(params[3]);			}

		} else {
			this.createPassword = false;
			this.domain = "";
			this.user = "";
		}

	}
 
	// Retorno para o login
	public cancelar(): void {
		this._authStorageService.logout();

		this._router.navigate(["/auth/login"]);
	}	

  // #endregion UTILIDADES

  // #endregion ==========> SERVICE METHODS <==========

// #endregion ==========> MODALS <==========

}

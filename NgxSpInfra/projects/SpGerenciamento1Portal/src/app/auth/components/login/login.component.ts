import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { environment } from 'src/environments/environment';
import { FormUtils, MessageService } from 'ngx-sp-infra';
import { ProjectUtilservice } from 'src/app/project/utils/project-utils.service';
import { AuthService } from '../../auth.service';
import { ServerService } from 'src/app/auth/server/server.service';
import { CustomLoginService } from 'src/app/project/custom/login/custom-login.service';
import { Title } from '@angular/platform-browser';

@Component( {
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ],
	preserveWhitespaces: true,
} )
export class LoginComponent implements OnInit {

	constructor (
		public _customLoginService: CustomLoginService, 
		private _bsModalService: BsModalService,
		private _formBuilder: FormBuilder,
		private _projectUtilservice: ProjectUtilservice,
		private _messageService: MessageService,
		private _authService: AuthService,
		private _serverService: ServerService,
		private _title: Title,
		private _router: Router
		) { }

	ngOnInit (): void {

		this._title.setTitle(this._customLoginService.loginPageTitle);

		if (this._customLoginService.loginTitle != "") {
			document.getElementById("title")!.innerHTML = this._customLoginService.loginTitle;
		}

		if (this._customLoginService.loginSubtitle != "") {
			document.getElementById("subtitle")!.innerHTML = this._customLoginService.loginSubtitle;
		}

		this.createForm();
	}

	// #region ==========> PROPERTIES <==========

	// #region PRIVATE
	private idFgtPsw: number = 1;
	// #endregion PRIVATE
	
	// #region PUBLIC
	public modalRef?: BsModalRef;

	//  Variáveis específicas para funcionalidades padrões dos formulários
	public currentTime: Date = new Date();
	public year: number = this.currentTime.getFullYear();

	public hostName: any = `https://${ window.location.hostname }`;
    public urlErpConfig: string = `${ this.hostName }/SisproErpCloud/ConfigERP/auth/login`;

	public isLoading: boolean = false;

	// #endregion ==========> PROPERTIES <==========

	// #region ==========> FORM BUILDER <==========
	public form: FormGroup;
	public formFgtPsw: FormGroup;

	//  Propriedade necessário para que a classe static FormUtils possa ser utilizada no Html
	public get FormUtils(): typeof FormUtils {
		return FormUtils;
	}

	// #region FORM DATA
	public get dominio(): string {
		return this.form.get('dominio')?.value;
	}

	public get usuario(): string {
		return this.form.get('usuario')?.value;
	}

	public get senha(): string {
		return this.form.get('senha')?.value;
	}

	//  Variáveis específicas para funcionalidades padrões dos formulários (RequestRecoverPassword)
	public get dominioFgtPsw(): string {
		return this.formFgtPsw.get('dominioFgtPsw')?.value;
	}

	public get usuarioFgtPsw(): string {
		return this.formFgtPsw.get('usuarioFgtPsw')?.value;
	}

	// #endregion FORM DATA

	// #region FORM VALIDATORS

	// #region PUBLIC

	//  Método para configuração dos campos de edição do formulário
	private createForm(): void {

		//  Dados originais de Login
		if (environment.production)
		{
			this.form = this._formBuilder.group({
				dominio: ['', [Validators.required, Validators.maxLength(50)]],
				usuario: ['', [Validators.required, Validators.maxLength(100)]],
				senha: ['', [Validators.required, Validators.maxLength(100)]]
			});
			}
		else
		{
			this.form = this._formBuilder.group({
				dominio: [this._customLoginService.loginDesenvDomain, [Validators.required, Validators.maxLength(50)]],
				usuario: [this._customLoginService.loginDesenvUser, [Validators.required, Validators.maxLength(100)]],
				senha: [this._customLoginService.loginDesenvPassword, [Validators.required, Validators.maxLength(100)]]
			});
		}

	}

	//  Método para configuração dos campos de edição do formulário (RequestRecoverPassword)
	private createFormForgottenPassword(): void {

		this.formFgtPsw = this._formBuilder.group({
			dominioFgtPsw: ['', [Validators.required, Validators.maxLength(50)]],
			usuarioFgtPsw: ['', [Validators.required, Validators.maxLength(100)]],
		});

		this.formFgtPsw.get('recoverCdominioFgtPswodeRecPsw')?.setValue('');	
		this.formFgtPsw.get('usuarioFgtPsw')?.setValue('');	
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
			this.isLoading = true;

			this._serverService.getServer().subscribe({
				next: response => {
					this.logOn();
				},
				error: (error) => {
					this.isLoading = false;

					this._projectUtilservice.showHttpError(error);
				},
			})
		} else {
			FormUtils.validateFields(this.form);
		}
	}
	// #endregion GET

	// #region POST
	
	//  Executa o Login
	public logOn(): void {
		this._authService.login(this.form.value).subscribe({
			next: (response) => {
				this.isLoading = false;

				if (response.InitializePassword) {
					let param: string = btoa(`true$${ this.dominio }$${ this.usuario }`);
	
					this._router.navigate([`auth/login/novaSenha/${ param }`]);
			
					this._messageService.showAlertSuccess('Verifique no seu e-mail o código de validação.');
				}

			},
			error: (error) => {
				this.isLoading = false;

				this._projectUtilservice.showHttpError(error);
			},
		});

	}

	// Envia requisição para esquecer senha
	public sendForgottenPassword(): void {

		if (this.formFgtPsw.valid) {
			this._serverService.getServer().subscribe({
				next: response => {
					this.forgottenPassword();
				},
				error: (error) => {
					this._projectUtilservice.showHttpError(error);
				},
			})

		} else {
			FormUtils.validateFields(this.formFgtPsw);
		}

	}

	// Requisição para esquecer senha
	public forgottenPassword(): void {

		this._authService.forgottenPassword(this.formFgtPsw.value).subscribe({
			next: (response) => {
				this.closeForgottenPasswordModal();

				let param: string = btoa(`false$${ this.dominio }$${ this.usuario }`);

				this._router.navigate([`auth/login/novaSenha/${ param }`]);

				this._messageService.showAlertSuccess('Verifique no seu e-mail o código de validação.');
			},
			error: (error) => {
				this._projectUtilservice.showHttpError(error);
			},
		});

	}

	// #endregion POST

	// #endregion ==========> SERVICE METHODS <==========

	// #region ==========> MODALS <==========
	
	// Executa esquecer senha
	public openForgottenPasswordModal(template: TemplateRef<any>): void {
		this.createFormForgottenPassword();

		this.modalRef = this._bsModalService.show( template, {
			class: 'modal-dialog-centered',
			ignoreBackdropClick: false,
			keyboard: false,
			id: this.idFgtPsw
		} );

	}

	// Encerra esquecer senha
	public closeForgottenPasswordModal(): void {
		this._bsModalService.hide(this.idFgtPsw);
	}
	
	// #endregion ==========> MODALS <==========

}

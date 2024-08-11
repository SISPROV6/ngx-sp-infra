import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService, FormUtils } from 'ngx-sp-infra';
import { ProjectUtilservice } from 'src/app/project/utils/project-utils.service';
import { AuthStorageService } from 'src/app/auth/storage/auth-storage.service';

import { GruposService } from '../../services/grupos.service';
import { Grupo } from '../../models/7Db/grupo';

@Component( {
	selector: 'app-adicionar-grupo',
	templateUrl: './adicionar-grupo.component.html',
	styleUrls: [ './adicionar-grupo.component.scss' ]
} )
export class AdicionarGrupoComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
		private messageService: MessageService,
    private projectUtilservice: ProjectUtilservice,
    private authStorageService: AuthStorageService,          
    private gruposService: GruposService
  ) { }

  // #region VARIABLES
  public editingMode: boolean = false;
  public titleEditDesc: string = '';
  private id: number = 0;
  
  public grupoData: Grupo = new Grupo();
  // #endregion VARIABLES

  // #region Form Builder
  public form: FormGroup;

  public get FormUtils(): typeof FormUtils {
     return FormUtils; 
  }
  // #endregion Form Builder

  // #region Form Data
  public get nome(): string {
    return this.form.get('nome')?.value;
  }
  
  public get descricao(): string {
    return this.form.get('descricao')?.value;
  }

  // #endregion Form Data

  ngOnInit(): void {
    this.createBaseForm();

    this.getParmsFromRoute();
    
    if (this.editingMode)
    {
      this.getGrupo(this.id);
    }

  }

  // #region Form Validators
  private createBaseForm() {

    this.form = this.formBuilder.group({
      nome: [ '', [Validators.required, Validators.maxLength(200)] ],
      descricao: [ '', Validators.required, [Validators.maxLength(1000)] ]
    })

  }
  // #endregion Form Validators

  // #region HTTP METHODS

  // #region getGrupo
  private getGrupo(id: number): void {

    this.gruposService.getGrupo(id).subscribe({
      next: response => {
        this.grupoData = response.Grupo;
        this.titleEditDesc = this.grupoData.NOME;
      },
      error: error => {
        this.projectUtilservice.showHttpError(error);
      }
    })
  
  }
  // #endregion getGrupo

  // #region createGrupo
  public createGrupo(): void {
    this.grupoData.ID = this.id;
    this.grupoData.TENANT_ID = this.authStorageService.tenantId;

    if (this.form.valid) {
      this.gruposService.createGrupo(this.grupoData).subscribe({
        next: response => {
          this.messageService.showAlertSuccess('Grupo criado com sucesso.');
  
          this.returnToList();;
        },
        error: error => {
           this.projectUtilservice.showHttpError(error);
        }
      })
    } else {
      FormUtils.validateFields(this.form);
    }

  }
  // #endregion createGrupo

  // #region updateGrupo
  public updateGrupo(): void {
    this.grupoData.ID = this.id;
    this.grupoData.TENANT_ID = this.authStorageService.tenantId;

    if (this.form.valid) {
      this.gruposService.updateGrupo(this.grupoData).subscribe({
        next: response => {
          this.getGrupo(this.grupoData.ID);
  
          this.messageService.showAlertSuccess('Grupo atualizado com sucesso!');
        },
        error: error => {
          this.projectUtilservice.showHttpError(error);
        }
      })
    } else {
      FormUtils.validateFields(this.form);
    }

  }
  // #region updateGrupo

  // #endregion HTTP METHODS

  // #region UTILIDADES
  private getParmsFromRoute(): void {
  
    if (this.route.snapshot.paramMap.get('id') == '0')
    {
      this.id = 0;
      this.editingMode = false;
    } else {
      const id: any = this.route.snapshot.paramMap.get('id');
      this.id = id;
      this.editingMode = true;
    }

  }
 
  public returnToList() {
    this.router.navigate(["/grupos"]);
  }
  // #endregion UTILIDADES

}

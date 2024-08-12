import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { FormUtils, MessageService, ModalUtilsService, Utils } from 'ngx-sp-infra';

import { AuthStorageService } from 'src/app/auth/storage/auth-storage.service';

import { ProjectUtilservice } from 'src/app/project/utils/project-utils.service';
import { RecordCombobox } from 'src/app/project/models/combobox/record-combobox';

import { PessoasService } from '../../services/pessoas.service';
import { EstPessoaRecord } from '../../models/7Db/est-pessoa.record';

@Component({
  selector: 'formulario-pessoa',
  templateUrl: './formulario-pessoa.component.html',
  styleUrl: './formulario-pessoa.component.scss'
})
export class FormularioPessoaComponent implements OnInit {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  public pessoaID: string;

  public $pessoaRecord: EstPessoaRecord;
  public $papeisCombobox: RecordCombobox[] = [];

  public editingMode: boolean = false;
  public customPageHeader: string = "Carregando...";
  public currentTab: "Dados básicos" | "Endereços" | "Contatos" = "Dados básicos";

  public selectedPapel: string;

  public customErrorMessage: string;

  public breadcrumbList: string[] = [ "Configurações", "Painel de Pessoas" ];
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> FORM BUILDER <==========

  // #region FORM BUILDER
  public dadosBasicosForm: FormGroup = new FormGroup({
    TX_NOMEPESSOA: new FormControl<string>("", [Validators.required]),
    TIPOPESSOA_CD: new FormControl<string>("FIS", [Validators.required]),
    PAPEL_CD: new FormControl<string>("", [Validators.required]),
    TX_DOCUMENTO: new FormControl<string>("", [Validators.required]),
    DT_NASCIMENTO: new FormControl<Date | string>(new Date()),
    DT_FUNDACAO: new FormControl<Date | string>(new Date()),
    DT_INICIOVINCULO: new FormControl<Date | string>(new Date()),
    IS_ACTIVE: new FormControl<boolean>(true),
    IS_ESTRANGEIRO: new FormControl<boolean>(false),
  });
  // #endregion FORM BUILDER

  // #region FORM FIELDS
  public get FormUtils(): typeof FormUtils { return FormUtils; }

  public get TX_NOMEPESSOA(): string { return this.dadosBasicosForm.get("TX_NOMEPESSOA")?.value; }
  public get TIPOPESSOA_CD(): string { return this.dadosBasicosForm.get("TIPOPESSOA_CD")?.value; }
  public get PAPEL_CD(): string { return this.dadosBasicosForm.get("PAPEL_CD")?.value; }
  public get TX_DOCUMENTO(): string { return this.dadosBasicosForm.get("TX_DOCUMENTO")?.value; }
  public get DT_NASCIMENTO(): Date | string { return this.dadosBasicosForm.get("DT_NASCIMENTO")?.value; }
  public get DT_FUNDACAO(): Date | string { return this.dadosBasicosForm.get("DT_FUNDACAO")?.value; }
  public get DT_INICIOVINCULO(): Date | string { return this.dadosBasicosForm.get("DT_INICIOVINCULO")?.value; }
  public get IS_ACTIVE(): boolean { return this.dadosBasicosForm.get("IS_ACTIVE")?.value; }
  public get IS_ESTRANGEIRO(): boolean { return this.dadosBasicosForm.get("IS_ESTRANGEIRO")?.value; }
  // #endregion FORM FIELDS

  // #endregion ==========> FORM BUILDER <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    private _authStorageService: AuthStorageService,
    private _bsModalService: BsModalService,
    private _formBuilder: FormBuilder,
    private _messageService: MessageService,
    private _pessoasService: PessoasService,
    private _projectUtilService: ProjectUtilservice,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,

    public modalUtils: ModalUtilsService
  ) {
    this.initializeView();
  }

  public ngOnInit(): void {
     this.getPapeisPessoaCombobox("");
  }

  public initializeView(): void {
    if (this._router.url.includes('editar')) {
      this.editingMode = true;
      this.pessoaID = this._activatedRoute.snapshot.paramMap.get("id")!;
      this.getPessoa();
    }
    else { this.editingMode = false }
  }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> SERVICE METHODS <==========

  // #region PREPARATION
  public getPapeisPessoaCombobox(pesquisa: string): void {
    this.$papeisCombobox = [
      { ID: "TESTE 1", LABEL: "TESTE 1" },
      { ID: "TESTE 2", LABEL: "TESTE 2" },
      { ID: "TESTE 3", LABEL: "TESTE 3" },
      { ID: "TESTE 4", LABEL: "TESTE 4" },
      { ID: "TESTE 5", LABEL: "TESTE 5" },
    ];

    // this._pessoasService.getPapeisPessoaCombobox(pesquisa).subscribe({
    //   next: response => {
    //   },
    //   error: error => { this._projectUtilService.showHttpError(error) }
    // });
  }
  // #endregion PREPARATION

  // #region GET
  public getPessoa(): void {
    this._pessoasService.getPessoa(this.pessoaID).subscribe({
      next: response => {
        this.$pessoaRecord = response.PessoaRecord;
        this.customPageHeader = response.PessoaRecord.TX_NOMEPESSOA;

        this.dadosBasicosForm.patchValue({
          ...this.dadosBasicosForm.value,
          ...response.PessoaRecord,

          DT_NASCIMENTO: Utils.convertDateTimeToDateString(this.$pessoaRecord.DT_NASCIMENTO) == '1900-01-01'? '': Utils.convertDateTimeToDateString(this.$pessoaRecord.DT_NASCIMENTO),
          DT_FUNDACAO: Utils.convertDateTimeToDateString(this.$pessoaRecord.DT_FUNDACAO) == '1900-01-01'? '': Utils.convertDateTimeToDateString(this.$pessoaRecord.DT_FUNDACAO),
          DT_INICIOVINCULO: Utils.convertDateTimeToDateString(this.$pessoaRecord.DT_INICIOVINCULO)
        });
      },
      error: error => { this._projectUtilService.showHttpError(error) }
    });
  }
  // #endregion GET

  // #region POST
  public createPessoa(): void {
    console.log("Form:");
    console.log(this.dadosBasicosForm);

    console.log("Record após mapeamento:");
    console.log(this.dadosBasicosForm.getRawValue() as EstPessoaRecord);
    
    this.$pessoaRecord = this.dadosBasicosForm.getRawValue() as EstPessoaRecord;
    console.log(this.$pessoaRecord);

    this.dadosBasicosForm.getRawValue() as EstPessoaRecord;   // Aqui apenas convertemos automaticamente os valores do formulário para o objeto, preferível a utilização em Create
    FormUtils.mapFormToModel(this.$pessoaRecord, this.dadosBasicosForm);  // Aqui podemos utilizar objetos que já têm propriedades preenchidas, modificando apenas o que temos no form
  }

  public updatePessoa(): void {
    console.log("Form:");
    console.log(this.dadosBasicosForm);

    console.log("Record após mapeamento:");
    console.log(this.dadosBasicosForm.getRawValue() as EstPessoaRecord);
  }
  // #endregion POST

  // #endregion ==========> SERVICE METHODS <==========


  // #region ==========> UTILS <==========
  public setError(): void {
    this.customErrorMessage = "Este campo não pode ser selecionado com outro campo";
    
    this.dadosBasicosForm.controls["TX_NOMEPESSOA"].setErrors({ invalid: this.customErrorMessage });
    this.dadosBasicosForm.controls["TX_NOMEPESSOA"].markAsTouched();
  }
  public clearErrors(): void {
    this.customErrorMessage = "";
    this.dadosBasicosForm.controls["TX_NOMEPESSOA"].setErrors(null);
  }


  public returnToList(): void { this._router.navigate(["/painel-pessoas"]); }
  // #endregion ==========> UTILS <==========

}

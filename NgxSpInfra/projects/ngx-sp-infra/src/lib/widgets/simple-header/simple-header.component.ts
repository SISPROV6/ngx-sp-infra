import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-header',
  templateUrl: './simple-header.component.html',
  styleUrl: './simple-header.component.scss'
})
export class SimpleHeaderComponent implements OnInit, OnChanges {
  constructor() { }
  
  ngOnInit(): void {  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // if (changes["pageTitle"] && changes["pageTitle"].currentValue) {  }
    
  }
  

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  @Input({ required: true }) public breadcrumbList: string[] = [];

  @Input() public pageTitle: string | undefined;


  /**
   * Modo em que o Header será inicializado
   * @default "list"
  */
  @Input() public mode: "add" | "edit" | "list" = "list";

  @Input() public titulo: string = "";

  /**
   * Define se o botão de Auditoria estará visível
   * @default false
  */
  @Input() public visibleAuditBtn: boolean = false;

  /**
   * Informa a opção de Menu selecionada para chegar à tela
   * @default ""
  */
  @Input() public menuGroup: string = "";

  /**
   * Opção que deve ser informada caso você deseje que um dos botões seja escondido
   * @default null
   */
  @Input() public buttonToOmit: "Todos" | "Cancelar" | "Salvar" | null = null;

  @Input() public useCustomPageTitle: boolean = false;

  @Input() public customPageTitle: string = "";

  @Input() public showSpinner: boolean = false;

  /** Deve ser informada para sobreescrever o título principal em situações de múltiplos títulos com base em condições */
  @Input() public pageTitleSecondary: string = "";

  @Input() public customBreadcrumbEnd: string = "";

  @Input() public customBreadcrumbMode: string = "";

  /** Emissor de evento para Retorno */
	@Output() public onReturn = new EventEmitter<void>();

  /** Emissor de evento para Criação */
  @Output() public onCreate = new EventEmitter<void>();

  /** Emissor de evento para Atualização */
  @Output() public onUpdate = new EventEmitter<void>();

  public pageAction: string = "";
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> UTILITIES <==========

  /** Emite um evento para retornar à página anterior */
  public return(): void {
    this.onReturn.emit();
  }

  /** Emite um evento para informar quando o botão de "Criar" foi clicado */
  public create(): void {
    this.onCreate.emit();
  }
  
  /** Emite um evento para informar quando o botão de "Atualizar" foi clicado */
  public update(): void {
    this.onUpdate.emit();
  }


  public redirectTextByMode(): string {
    if (this.mode == "list") return "Adicionar";
    else return "Salvar";

  }

  // #endregion ==========> UTILITIES <==========

}

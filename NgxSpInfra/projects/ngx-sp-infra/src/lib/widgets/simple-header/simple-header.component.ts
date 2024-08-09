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

  @Input() public pageTitle: string | undefined = "Carregando...";

  /** Modo em que o Header será inicializado
   * @default "list" */
  @Input() public mode: "add" | "edit" | "list" = "list";

  /** Deve ser informada caso você deseje que um dos botões seja escondido
   * @default null */
  @Input() public hideButton?: "Todos" | "Cancelar" | "Salvar";

  @Input() public showSpinner: boolean = false;

  /** Emissor de evento ao clicar no "Cancelar" */
	@Output() public onReturn = new EventEmitter<void>();

  /** Emissor de evento ao clicar no "Salvar" em modo de criação */
  @Output() public onCreate = new EventEmitter<void>();

  /** Emissor de evento ao clicar no "Salvar" em modo de edição */
  @Output() public onUpdate = new EventEmitter<void>();
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> UTILITIES <==========

  /** Emite um evento para retornar à página anterior */
  public return(): void { this.onReturn.emit() }

  /** Emite um evento quando o botão de "Salvar" em modo de criação foi clicado */
  public create(): void { this.onCreate.emit() }
  
  /** Emite um evento quando o botão de "Salvar" em modo de edição foi clicado */
  public update(): void { this.onUpdate.emit() }

  public setSaveText(): string {
    if (this.mode == "list") return "Adicionar";
    else return "Salvar";
  }
  // #endregion ==========> UTILITIES <==========

}

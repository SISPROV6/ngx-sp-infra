import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'lib-icon',
  templateUrl: './lib-icons.component.html',
  styleUrl: './lib-icons.component.scss'
})
export class LibIconsComponent implements OnChanges {
  constructor() { }

  public ngOnChanges(changes: SimpleChanges): void {
    switch (this.iconSize) {
      case "default": this.iconName == 'edit' ? this.size = 20 : this.size = 24; break;
      case "medium-small": this.iconName == 'edit' ? this.size = 16 : this.size = 20; break;
      case "small": this.iconName == 'edit' ? this.size = 12 : this.size = 16; break;
      default: this.size = this.iconSize; break;
    }

    this.color = this.iconColor;

    switch (this.iconColor) {
      case "white": this.color = "#FFFFFF"; break;
      case "blue": this.color = "#2847A0"; break;
      case "gray": this.color = "#6C757D"; break;
      case "lightgray": this.color = "#bfbfbf"; break;
      case "green": this.color = "#198754"; break;
      case "light-blue": this.color = "#0dcaf0"; break;
      case "yellow": this.color = "#ffc107"; break;
      case "red": this.color = "#dc3545"; break;
      case "currentColor": this.color = "currentColor"; break;
    }

    switch (this.iconStrokeWidth) {
      case "super-lighter": this.strokeWidth = 0.5; break;
      case "lighter": this.strokeWidth = 1; break;
      case "light": this.strokeWidth = 1.5; break;
      case "default": this.strokeWidth = 2; break;
      case "bold": this.strokeWidth = 2.5; break;
      case "bolder": this.strokeWidth = 3; break
    }
  }

  // #region PROPERTIES

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  @Input({ required: true }) public iconName: string
    | 'arrow-up' | 'arrow-down' | 'copy' | 'chevron-left' | 'cloud' | 'duplicate' | 'eye'
    | 'eye-off' | 'more-vertical' | 'plus' | 'save' | 'inativar' | 'trash' | 'edit' | 'ativar' | 'search' | 'cancel'
    | 'info' | 'rocket' | 'plus-circle' | 'menu' | 'building' | 'star' | 'star-outline' | 'file-download'
    | 'file-download-alt' | 'flag' | 'cancel-circle' | 'warning' | 'gavel' | 'chevron-right' | 'chevron-up'
    | 'chevron-down' | 'code' | 'square-pencil' | 'document' | 'document-sign' | 'timer-clock' | 'download-doc'
    | 'file-alt' | 'file-upload-alt' | 'file-upload' | 'file-blank' | 'refresh' | 'send' | 'arrow-left-right'
    | 'exclamation-circle' | 'camera' | 'user' | 'user-iconscout' | 'angry' | 'frown' | 'meh' | 'smile' | 'grin-tongue'
    | 'fases' | 'list-ul' | 'list-ol' | 'file-docx' | 'file-pdf' | 'table' | 'dash-circle' | 'file-slash'
    | 'file-info-alt' | 'signout' | 'calculator-alt' | 'prancheta-icon' | 'minus' | 'esfera-cheia'
    | 'folha' | 'folha-linhas' | 'folha-upload' | 'folha-lapis' | 'folha-mais' | 'folha-check' | 'folha-marcador'
    | 'prancheta' | 'folha-dupla' | 'folha-dupla-linhas' | 'seta-baixo' | 'seta-cima' | 'seta-esquerda' | 'seta-direita'
    | 'upload' | 'download' | 'login' | 'logout' | 'fechar' | 'mais' | 'check' | 'aspas' | 'cubo' | 'caixa'
    | 'engrenagem' | 'editar' | 'escrita-linha' | 'janelas' | 'atencao' | 'pare' | 'cronometro' | 'olho' | 'sino' | 'estrela'
    | 'lupa' | 'usuarios' | 'usuario-quadro' | 'adicionar-usuario' | 'foguete' | 'predio' | 'casa' | 'monitor'
    | 'monitor-painel' | 'calendario' | 'fluxo' | 'nuvem' | 'aviao-papel' | 'disquete' | 'lixeira' | 'atualizar'
    | 'menu-hamburguer' | 'menu-pontos' | 'linkedin' | 'facebook' | 'instagram' | 'auditoria' | 'cifrao' | 'moedas'
    | 'reajuste' | 'cimabaixo' | 'toggle-on' | 'toggle-off' | 'folha-pdf' | 'folha-docx' | 'download-docx'
    | 'download-pdf' | 'link' | 'iniciar' | 'timeline' | 'acessoexterno' | 'olho-fechado' | 'tabela-fixa'
    | 'eventos-tabela' | 'eventos-nao-periodicos' | 'eventos-periodicos' | 'eventos-saude' | 'eventos-de-fechamento'
    | 'evento-tabela' | 'testes' | 'log' | 'eventos-p' | 'eventos-np' | 'contraparte' | 'copiar' | 'logs'
    | 'ver-assinaturas' | 'configurar-assinaturas' | 'recalcular' | 'estornar' | 'solicitacao' | 'perguntas' | 'centraldeajuda'
    | 'sorriso' | 'lampada' | 'sol' | 'seta-grande-cima' | 'seta-grande-baixo' | 'historico' | 'verificado' | 'logo-contratos'
    | 'reverter-reajuste' | 'transporte-caminhao' | 'meia-lua' | 'retornar-workflow' | 'ger-nota-fiscal' | 'prod-financeiro-icone'
    | 'certificado' | 'relatorio' | 'relatorio-nucleo' | 'relatorio-contrato' | 'relatorio-condicao-pagamento' | 'relatorio-objeto'
    | 'relatorio-reajuste' | 'relatorio-vencido-vincendo' | 'alarme' | 'gestor' | 'consulta' | 'cadeado' | 'cadeado-outline' | 'cadeado-semiaberto-outline'
    | 'cadeado-aberto-outline' | 'chave' | 'notificacoes';

  @Input() public iconColor: 'white' | 'blue' | 'gray' | 'green' | 'light-blue' | 'yellow' | 'red' | 'currentColor' | string = 'currentColor';

  @Input() public iconFill: string = 'none';

  @Input() public iconSize: 'default' | 'medium-small' | 'small' | number = 'default';

  @Input() public iconStrokeWidth: 'super-lighter' | 'lighter' | 'light' | 'default' | 'bold' | 'bolder' = 'default';

  public size: number;
  public color: string;
  public strokeWidth: number;
  // #endregion PUBLIC

  // #endregion PROPERTIES

}

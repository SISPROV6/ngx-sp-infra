import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';

import * as icons from "../../models/icons/icons.json";
import { IconModel } from '../../models/icons/icon.model';

@Component({
  selector: 'lib-icon',
  templateUrl: './lib-icons.component.html',
  styleUrl: './lib-icons.component.scss'
})
export class LibIconsComponent implements OnInit, OnChanges {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private iconsList?: IconModel[];
  // #endregion PRIVATE

  // #region PUBLIC

  /** (obrigatório) Nome do ícone */
  @Input({ required: true }) public iconName: string 
      | 'atencao' | 'folha-dupla-linhas' | 'verificado-preenchido' | 'terno' | 'terno-outline' | 'obrigatorio' | 'puzzle'
      | 'movimentos' | 'caixa-2' | 'chart' | 'custom' | 'share' | 'ferramentas' | 'maozinha' | 'renovação-teste' 
      | 'renovação-teste-2' | 'patrimonio' | 'verificado' | 'p-folha-linha' | 'p-folha' | 'p-folha-dupla-linhas' 
      | 'p-folha-dupla' | 'p-folha-lapis' | 'p-folha-marcador' | 'p-folha-check' | 'p-folha-upload' | 'p-prancheta' 
      | 'p-seta-baixo' | 'p-seta-cima' | 'p-seta-esquerda' | 'p-seta-direita' | 'p-upload' | 'p-download' | 'p-login' 
      | 'p-logout' | 'p-atençao' | 'p-check' | 'p-aspas' | 'p-caixa' | 'p-box' | 'p-editar' | 'p-editar-linha' | 'p-fechar' 
      | 'p-mais' | 'p-pare' | 'p-cronometro' | 'p-olho' | 'p-sino' | 'p-estrela' | 'p-lupa' | 'p-usuarios' 
      | 'p-usuario-quadro' | 'p-adicionar-usuario' | 'p-foguete' | 'p-predio' | 'p-casa' | 'p-monitor' 
      | 'p-monitor-painel' | 'p-calendario' | 'p-fluxo' | 'p-nuvem' | 'p-aviao-papel' | 'p-disquete' 
      | 'p-menu-hamburguer' | 'p-menu-pontos' | 'p-olho-linha' | 'p-linkedin' | 'p-facebook' | 'p-instagram' 
      | 'p-janelas' | 'p-engrenagem' | 'p-cima' | 'p-baixo' | 'p-relogio' | 'p-auditoria' | 'p-cifrao' 
      | 'p-link' | 'p-acessoexterno' | 'p-escolha' | 'p-selecione2' | 'p-relatorio' | 'p-aviao-papel' | 'p-disquete' 
      | 'p-pare' | 'p-tabela-fixa' | 'p-anexo' | 'p-ordenacao' | 'p-lixeira' | 'arrow-up' | 'arrow-down' | 'copy' | 'chevron-left' | 'cloud' 
      | 'duplicate' | 'eye' | 'eye-off' | 'more-vertical' | 'plus' | 'save' | 'inativar' | 'trash' | 'edit' | 'ativar' | 'search' 
      | 'cancel' | 'info' | 'rocket' | 'plus-circle' | 'menu' | 'building' | 'star' | 'star-outline' | 'file-download' 
      | 'file-download-alt' | 'flag' | 'cancel-circle' | 'warning' | 'gavel' | 'chevron-right' | 'chevron-up' 
      | 'chevron-down' | 'code' | 'square-pencil' | 'document' | 'document-sign' | 'timer-clock' | 'download-doc' 
      | 'file-alt' | 'file-upload-alt' | 'file-upload' | 'file-blank' | 'refresh' | 'send' | 'arrow-left-right' 
      | 'exclamation-circle' | 'camera' | 'user' | 'user-iconscout' | 'angry' | 'frown' | 'meh' | 'smile' 
      | 'grin-tongue' | 'fases' | 'list-ul' | 'list-ol' | 'file-docx' | 'file-pdf' | 'table' | 'dash-circle' 
      | 'file-slash' | 'file-info-alt' | 'signout' | 'calculator-alt' | 'prancheta-icon' | 'minus' | 'esfera-cheia' 
      | 'folha' | 'folha-linhas' | 'folha-upload' | 'folha-lapis' | 'folha-mais' | 'folha-check' | 'folha-marcador' 
      | 'prancheta' | 'folha-dupla' | 'seta-baixo' | 'seta-cima' | 'seta-esquerda' | 'seta-direita' | 'upload' | 'download' 
      | 'login' | 'logout' | 'fechar' | 'mais' | 'check' | 'aspas' | 'cubo' | 'caixa' | 'engrenagem' | 'editar' 
      | 'escrita-linha' | 'janelas' | 'pare' | 'cronometro' | 'olho' | 'sino' | 'estrela' | 'lupa' | 'usuarios' 
      | 'usuario-quadro' | 'adicionar-usuario' | 'estabelecimento' | 'casa' | 'monitor' | 'monitor-painel' | 'calendario' 
      | 'fluxo' | 'nuvem' | 'aviao-papel' | 'disquete' | 'lixeira' | 'atualizar' | 'menu-hamburguer' | 'menu-pontos' 
      | 'linkedin' | 'facebook' | 'instagram' | 'auditoria' | 'cifrao' | 'moedas' | 'reajuste' | 'cimabaixo' | 'toggle-on' 
      | 'toggle-off' | 'folha-pdf' | 'folha-docx' | 'download-docx' | 'download-pdf' | 'link' | 'iniciar' | 'timeline' 
      | 'acessoexterno' | 'olho-fechado' | 'tabela-fixa' | 'eventos-tabela' | 'eventos-nao-periodicos' | 'eventos-periodicos' 
      | 'eventos-saude' | 'eventos-de-fechamento' | 'evento-tabela' | 'testes' | 'log' | 'eventos-p' | 'eventos-np' 
      | 'contraparte' | 'copiar' | 'logs' | 'ver-assinaturas' | 'configurar-assinaturas' | 'recalcular' | 'estornar' 
      | 'solicitacao' | 'perguntas' | 'centraldeajuda' | 'sorriso' | 'lampada' | 'logo-contratos' | 'historico' 
      | 'reverter-reajuste' | 'consulta' | 'cadeado' | 'cadeado-outline' | 'cadeado-semiaberto-outline' 
      | 'cadeado-aberto-outline' | 'chave' | 'notificacoes' | 'trans'
      | 'chat' | 'anexo' | 'paleta';

      /** Cor do ícone
       * Paleta de cores:
       * @argument 'white' - #FFFFFF
       * @argument 'blue' - #3767b2
       * @argument 'gray' - #6C757D
       * @argument 'light-gray' - #CED4DA
       * @argument 'green' - #0F5132
       * @argument 'light-blue' - #3767B2
       * @argument 'yellow' - #FFC107
       * @argument 'red' - #B23737
       * @argument 'currentColor' - currentColor
       * @argument string - HEX da cor específica
      */
    @Input()
    public get iconColor(): 'white' | 'blue' | 'gray' | 'light-gray' | 'green' | 'light-blue' | 'yellow' | 'red' | 'currentColor' | string { return this.color; }
    public set iconColor(value: 'white' | 'blue' | 'gray' | 'light-gray' | 'green' | 'light-blue' | 'yellow' | 'red' | 'currentColor' | string) {
      switch (value) {
        case "white": this.color = "#FFFFFF"; break;
        case "blue": this.color = "#3767b2"; break;
        case "gray": this.color = "#6C757D"; break;
        case "light-gray": this.color = "#CED4DA"; break;
        case "green": this.color = "#0F5132"; break;
        case "light-blue": this.color = "#3767B2"; break;
        case "yellow": this.color = "#FFC107"; break;
        case "red": this.color = "#B23737"; break;
        case "currentColor": this.color = "currentColor"; break;
      }
    }

    /** Tamanho do ícone
     * Tamanhos disponíveis:
     * @argument 'default' - 24px
     * @argument 'medium-small' - 20px | Será depreciado em breve!
     * @argument 'small' - 18px
     * @argument number - número em pixels | Preferencialmente não utilizar!
    */
    @Input()
    public get iconSize(): 'default' | 'medium-small' | 'small' | number { return this.size; }
    public set iconSize(value: 'default' | 'medium-small' | 'small' | number) {
      switch (value) {
        case "default": this.size = 24; break;
        case "medium-small": this.size = 20; break;
        case "small": this.size = 18; break;
        default: this.size = value as number; break;
      }
    }

    /** Cor do preenchimento do ícone (fill)
     * ! SERÁ DEPRECIADO EM BREVE ! */
    @Input() public iconFill: string = 'none';

    /** Largura do stroke do ícone
     * ! SERÁ DEPRECIADO EM BREVE ! */
    @Input() public iconStrokeWidth: 'super-lighter' | 'lighter' | 'light' | 'default' | 'bold' | 'bolder' = 'default';


    protected size: number = 24;
    protected color: string = "currentColor";
    protected strokeWidth: number;
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor() {
    this.iconsList = icons.list.sort((a, b) => {
      if (a.nome < b.nome) return -1;
      if (a.nome > b.nome) return 1;
      return 0;
    });
  }

  ngOnInit(): void {
    this.checkName();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['iconName']) this.checkName();

    this.color = this.iconColor;

    switch (this.iconColor) {
      case "white": this.color = "#212529"; break;
      case "blue": this.color = "#213B70"; break;
      case "gray": this.color = "#212529"; break;
      case "lightgray": this.color = "#CED4DA"; break;
      case "green": this.color = "#D1E7DD"; break;
      case "light-blue": this.color = "#3767B2"; break;
      case "yellow": this.color = "#664D03"; break;
      case "red": this.color = "#842029"; break;
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
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========

  /** Valida se o nome informado do ícone existe na lista, caso contrário estoura uma exceção (Error). */
  private checkName(): void {
    let hasIcon: boolean = this.iconsList?.some(icon => icon.nome === this.iconName) ?? false;
    if (this.iconsList && !hasIcon) { console.error(`O ícone informado "${this.iconName}" não existe, utilize outro!`); }
  }
  // #endregion ==========> UTILS <==========

}

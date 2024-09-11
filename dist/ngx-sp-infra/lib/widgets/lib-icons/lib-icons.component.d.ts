import { SimpleChanges, OnChanges, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LibIconsComponent implements OnInit, OnChanges {
    private iconsList?;
    /** (obrigatório) Nome do ícone */
    iconName: string | 'atencao' | 'folha-dupla-linhas' | 'verificado-preenchido' | 'terno' | 'terno-outline' | 'obrigatorio' | 'puzzle' | 'movimentos' | 'caixa-2' | 'chart' | 'custom' | 'share' | 'ferramentas' | 'maozinha' | 'renovação-teste' | 'renovação-teste-2' | 'patrimonio' | 'verificado' | 'p-folha-linha' | 'p-folha' | 'p-folha-dupla-linhas' | 'p-folha-dupla' | 'p-folha-lapis' | 'p-folha-marcador' | 'p-folha-check' | 'p-folha-upload' | 'p-prancheta' | 'p-seta-baixo' | 'p-seta-cima' | 'p-seta-esquerda' | 'p-seta-direita' | 'p-upload' | 'p-download' | 'p-login' | 'p-logout' | 'p-atençao' | 'p-check' | 'p-aspas' | 'p-caixa' | 'p-box' | 'p-editar' | 'p-editar-linha' | 'p-fechar' | 'p-mais' | 'p-pare' | 'p-cronometro' | 'p-olho' | 'p-sino' | 'p-estrela' | 'p-lupa' | 'p-usuarios' | 'p-usuario-quadro' | 'p-adicionar-usuario' | 'p-foguete' | 'p-predio' | 'p-casa' | 'p-monitor' | 'p-monitor-painel' | 'p-calendario' | 'p-fluxo' | 'p-nuvem' | 'p-aviao-papel' | 'p-disquete' | 'p-menu-hamburguer' | 'p-menu-pontos' | 'p-olho-linha' | 'p-linkedin' | 'p-facebook' | 'p-instagram' | 'p-janelas' | 'p-engrenagem' | 'p-cima' | 'p-baixo' | 'p-relogio' | 'p-auditoria' | 'p-cifrao' | 'p-link' | 'p-acessoexterno' | 'p-escolha' | 'p-selecione2' | 'p-relatorio' | 'p-aviao-papel' | 'p-disquete' | 'p-pare' | 'p-tabela-fixa' | 'p-anexo' | 'p-ordenacao' | 'p-lixeira' | 'arrow-up' | 'arrow-down' | 'copy' | 'chevron-left' | 'cloud' | 'duplicate' | 'eye' | 'eye-off' | 'more-vertical' | 'plus' | 'save' | 'inativar' | 'trash' | 'edit' | 'ativar' | 'search' | 'cancel' | 'info' | 'rocket' | 'plus-circle' | 'menu' | 'building' | 'star' | 'star-outline' | 'file-download' | 'file-download-alt' | 'flag' | 'cancel-circle' | 'warning' | 'gavel' | 'chevron-right' | 'chevron-up' | 'chevron-down' | 'code' | 'square-pencil' | 'document' | 'document-sign' | 'timer-clock' | 'download-doc' | 'file-alt' | 'file-upload-alt' | 'file-upload' | 'file-blank' | 'refresh' | 'send' | 'arrow-left-right' | 'exclamation-circle' | 'camera' | 'user' | 'user-iconscout' | 'angry' | 'frown' | 'meh' | 'smile' | 'grin-tongue' | 'fases' | 'list-ul' | 'list-ol' | 'file-docx' | 'file-pdf' | 'table' | 'dash-circle' | 'file-slash' | 'file-info-alt' | 'signout' | 'calculator-alt' | 'prancheta-icon' | 'minus' | 'esfera-cheia' | 'folha' | 'folha-linhas' | 'folha-upload' | 'folha-lapis' | 'folha-mais' | 'folha-check' | 'folha-marcador' | 'prancheta' | 'folha-dupla' | 'seta-baixo' | 'seta-cima' | 'seta-esquerda' | 'seta-direita' | 'upload' | 'download' | 'login' | 'logout' | 'fechar' | 'mais' | 'check' | 'aspas' | 'cubo' | 'caixa' | 'engrenagem' | 'editar' | 'escrita-linha' | 'janelas' | 'pare' | 'cronometro' | 'olho' | 'sino' | 'estrela' | 'lupa' | 'usuarios' | 'usuario-quadro' | 'adicionar-usuario' | 'estabelecimento' | 'casa' | 'monitor' | 'monitor-painel' | 'calendario' | 'fluxo' | 'nuvem' | 'aviao-papel' | 'disquete' | 'lixeira' | 'atualizar' | 'menu-hamburguer' | 'menu-pontos' | 'linkedin' | 'facebook' | 'instagram' | 'auditoria' | 'cifrao' | 'moedas' | 'reajuste' | 'cimabaixo' | 'toggle-on' | 'toggle-off' | 'folha-pdf' | 'folha-docx' | 'download-docx' | 'download-pdf' | 'link' | 'iniciar' | 'timeline' | 'acessoexterno' | 'olho-fechado' | 'tabela-fixa' | 'eventos-tabela' | 'eventos-nao-periodicos' | 'eventos-periodicos' | 'eventos-saude' | 'eventos-de-fechamento' | 'evento-tabela' | 'testes' | 'log' | 'eventos-p' | 'eventos-np' | 'contraparte' | 'copiar' | 'logs' | 'ver-assinaturas' | 'configurar-assinaturas' | 'recalcular' | 'estornar' | 'solicitacao' | 'perguntas' | 'centraldeajuda' | 'sorriso' | 'lampada' | 'logo-contratos' | 'historico' | 'reverter-reajuste' | 'consulta' | 'cadeado' | 'cadeado-outline' | 'cadeado-semiaberto-outline' | 'cadeado-aberto-outline' | 'chave' | 'notificacoes' | 'trans' | 'chat' | 'anexo' | 'paleta';
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
    get iconColor(): 'white' | 'blue' | 'gray' | 'light-gray' | 'green' | 'light-blue' | 'yellow' | 'red' | 'currentColor' | string;
    set iconColor(value: 'white' | 'blue' | 'gray' | 'light-gray' | 'green' | 'light-blue' | 'yellow' | 'red' | 'currentColor' | string);
    /** Tamanho do ícone
     * Tamanhos disponíveis:
     * @argument 'default' - 24px
     * @argument 'medium-small' - 20px | Será depreciado em breve!
     * @argument 'small' - 18px
     * @argument number - número em pixels | Preferencialmente não utilizar!
    */
    get iconSize(): 'default' | 'medium-small' | 'small' | number;
    set iconSize(value: 'default' | 'medium-small' | 'small' | number);
    /** Cor do preenchimento do ícone (fill)
     * ! SERÁ DEPRECIADO EM BREVE ! */
    iconFill: string;
    /** Largura do stroke do ícone
     * ! SERÁ DEPRECIADO EM BREVE ! */
    iconStrokeWidth: 'super-lighter' | 'lighter' | 'light' | 'default' | 'bold' | 'bolder';
    protected size: number;
    protected color: string;
    protected strokeWidth: number;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** Valida se o nome informado do ícone existe na lista, caso contrário mostra um erro no console */
    private checkName;
    static ɵfac: i0.ɵɵFactoryDeclaration<LibIconsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LibIconsComponent, "lib-icon", never, { "iconName": { "alias": "iconName"; "required": true; }; "iconColor": { "alias": "iconColor"; "required": false; }; "iconSize": { "alias": "iconSize"; "required": false; }; "iconFill": { "alias": "iconFill"; "required": false; }; "iconStrokeWidth": { "alias": "iconStrokeWidth"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=lib-icons.component.d.ts.map
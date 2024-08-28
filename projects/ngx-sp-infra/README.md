# NgxSpInfra - Biblioteca de funcionalidades e componentes 🚀
[![Deploy no NPM](https://github.com/SISPROV6/ngx-sp-infra/actions/workflows/main.yml/badge.svg)](https://github.com/SISPROV6/ngx-sp-infra/actions/workflows/main.yml)
[![versão mais recente](https://badge.fury.io/js/ngx-sp-infra.svg)](//npmjs.com/package/ngx-sp-infra)
![downloads](https://img.shields.io/npm/dm/ngx-sp-infra.svg)

## Índice

- [Introdução](#introdução)
- [Uso](#uso)
- [Publicação](#publicação)
  - [Manual](#manual)
  - [Automatizada](#automatizada)
- [Automatização de Publicação](#automatização-de-publicação)
- [Contribuição](#contribuição)

## Introdução
Este projeto engloba funcionalidades genéricas da nossa infraestrutura como código (infra-as-code) que podem ser reutilizadas em outros projetos.

## Uso
Para usar a biblioteca em um projeto Angular, siga estas etapas:
1. Instalar a biblioteca - utilizando o comando  ```npm install ngx-sp-infra@latest --force``` _(O uso do --force é necessário por enquanto)_
2. Importar módulo - deve ter o InfraModule/ProjectModule nos imports do módulo/componente que está utilizando
```typescript
// Em uma estrutura de uma tela de Usuários, por exemplo
// No arquivo usuarios.module.ts:
@NgModule( {
   declarations: [
      // ...outros componentes
      PainelUsuariosComponent,
      FormularioUsuarioComponent
   ],
   imports: [
      // ...outros imports
      ProjectModule,
      UsuariosRoutingModule
   ],
   exports: [
         // ...
   ]
})
export class UsuariosModule { }
```
> [!IMPORTANT]
> Nunca importe ambos os módulos ProjectModule e InfraModule juntos!
> O InfraModule já está incluído dentro do ProjectModule, portanto, em projetos de Produtos, use apenas o ProjectModule.

## Publicação
A publicação do pacote no NPM pode ser feita de forma manual ou automatizada.

#### Manual
Para a publicação manual (preferencialmente usando SVN ao invés de Git), siga estas etapas:
1. Editar a versão: Atualize o arquivo projects/ngx-sp-infra/package.json conforme o versionamento semântico.
2. Executar o comando de build: No terminal, rode um dos seguintes comandos:
  - Para uma versão oficial:
    - ```npm run build:patch``` _- incrementa uma versão PATCH (0.0.1) e faz o build_
    - ```npm run build:minor``` _- incrementa uma versão MINOR (0.1.0) e faz o build_
    - ```npm run build:major``` _- incrementa uma versão MAJOR (1.0.0) e faz o build_

  - Para uma versão de teste (com sufixo "-test"):
    - ```npm run build:patch:test``` _- incrementa uma versão PATCH (0.0.1-test) e faz o build_
    - ```npm run build:minor:test``` _- incrementa uma versão MINOR (0.1.0-test) e faz o build_
    - ```npm run build:major:test``` _- incrementa uma versão MAJOR (1.0.0-test) e faz o build_

3. Publicar no NPM:
  - `cd dist/ngx-sp-infra`
  - `npm adduser` OU `npm login` _- depende se você já possui conta no NPM ou não_
  - `npm publish --access public --tag latest`

#### Automatizada
Para publicação automatizada (apenas quando utilizar git) devem ser seguidas as etapas abaixo:
1. Atualizar a branch: Certifique-se de que está na branch desejada e execute: `git pull origin <branch>`
2. Executar o comando de build e commit: No terminal, rode um dos comandos abaixo:
  - Para uma versão de teste:
    - ```npm run build:patch:test:commit``` _- incrementa uma versão PATCH (0.0.1-test), faz o build e realiza um commit-push automático com a tag de versão e as alterações_
    - ```npm run build:minor:test:commit``` _- incrementa uma versão MINOR (0.1.0-test), faz o build e realiza um commit-push automático com a tag de versão e as alterações_
    - ```npm run build:major:test:commit``` _- incrementa uma versão MAJOR (1.0.0-test), faz o build e realiza um commit-push automático com a tag de versão e as alterações_

  - Para uma versão oficial:
    - ```npm run build:patch:commit <branch>``` _- incrementa uma versão PATCH (0.0.1), faz o build e realiza um commit-push automático com a tag de versão e as alterações_
    - ```npm run build:minor:commit <branch>``` _- incrementa uma versão MINOR (0.1.0), faz o build e realiza um commit-push automático com a tag de versão e as alterações_
    - ```npm run build:major:commit <branch>``` _- incrementa uma versão MAJOR (1.0.0), faz o build e realiza um commit-push automático com a tag de versão e as alterações_

> [!IMPORTANT]
> O deploy automático só será feito após commit nas branches `main` e `test`. Outras branches não realizarão o deploy para o NPM.

## Automatização de Publicação
A automatização da publicação é realizada utilizando GitHub Actions.

### Como funciona:
- Workflow: Um workflow específico é configurado para observar as branches main e test. Quando há um commit nessas branches, ele verifica as alterações e, caso o diretório dist tenha sido modificado, a ação de publicação no NPM é disparada automaticamente.
- Etapas: O workflow inclui etapas como a instalação de dependências, execução de builds, e a publicação no NPM. Tudo é gerenciado através de scripts e do token de autenticação NPM armazenado nos segredos do GitHub.
- Segurança: Apenas commits em branches específicas acionam a publicação, garantindo que somente código aprovado chegue ao NPM.

## Contribuição
Se você deseja contribuir para a biblioteca, siga estas etapas:

1. Faça um clone do repositório.
2. Crie uma branch para sua feature ou correção.
3. Faça suas alterações e teste-as.
4. Realize um `git stash`, faça checkout para a branch `test` e `git stash pop` para levar suas alterações para essa branch.
5. Siga as instruções para publicação acima

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

## Testes
Antes de publicar a biblioteca para o NPM é muito importante realizar testes robustos do funcionamento da nova feature ou correção que foi realizada. Para realizar testes locais segue-se o seguinte passo-a-passo:
1. Com o projeto NgxSpInfra aberto em uma IDE execute o comando `ng build --watch`
2. No projeto que será usado para teste modifique o arquivo angular.json e adicione a propriedade "preserveSymlinks" dentro de `build > options` como no exemplo abaixo:
  ```json
    {
      // ...
      "build": {
      "builder": "@angular-devkit/build-angular:browser",
      "options": {
        "preserveSymlinks": true,
        // ...
      },
      // ...
    },
    }
  ```
3. Por fim, execute os dois comandos abaixo:
  `npm uninstall ngx-sp-infra` (se necessário, utilize o `--force`)
  `npm i "file:C:/SisproCloud/INFRA/Fontes/Sp_106_Imports/NgxSpInfra/dist/ngx-sp-infra"` (se necessário, utilize o `--force`)

E pronto! Agora graças ao `ng build --watch` sempre que uma alteração for salva no projeto NgxSpInfra os arquivos na dist irão se atualizar também e a instalação no projeto de teste observavará exatamente estes arquivos.

## Publicação
A publicação do pacote no NPM pode ser feita de forma manual ou automatizada.

#### Manual
Para a publicação manual (preferencialmente usando SVN ao invés de Git), siga estas etapas:
1. Executar o comando de build: No terminal, rode um dos seguintes comandos:
  - ```npm run build:patch``` _- incrementa uma versão PATCH (0.0.1) e faz o build_
  - ```npm run build:minor``` _- incrementa uma versão MINOR (0.1.0) e faz o build_
  - ```npm run build:major``` _- incrementa uma versão MAJOR (1.0.0) e faz o build_

2. O sistema deve perguntar ao usuário se ele deseja adicionar um sufixo à versão:
  - Para uma versão de teste, digite "test" ou "-test" e aperte ENTER
  - Para uma versão oficial, não é necessário digitar nada, apenas aperte ENTER

3. Logo depois, o sistema deve perguntar ao usuário se ele deseja realizar o commit da tag de versão, digite "N"

4. Independete das respostas anteriores, será feito um build da aplicação e por fim, o sistema deve perguntar ao usuário se ele deseja fazer um commit no repositório do GitHub, digite "N"

5. Publicar no NPM:
  - `cd dist/ngx-sp-infra`
  - `npm adduser` OU `npm login` _- depende se você já possui conta no NPM ou não_
  - `npm publish --access public --tag latest`

#### Automatizada
Para publicação automatizada (apenas quando utilizar git) devem ser seguidas as etapas abaixo:
1. Executar o comando de build: No terminal, rode um dos seguintes comandos:
  - ```npm run build:patch``` _- incrementa uma versão PATCH (0.0.1) e faz o build_
  - ```npm run build:minor``` _- incrementa uma versão MINOR (0.1.0) e faz o build_
  - ```npm run build:major``` _- incrementa uma versão MAJOR (1.0.0) e faz o build_

2. O sistema deve perguntar ao usuário se ele deseja adicionar um sufixo à versão:
  - Para uma versão de teste, digite "test" ou "-test" e aperte ENTER
  - Para uma versão oficial, não é necessário digitar nada, apenas aperte ENTER

3. Logo depois, o sistema deve perguntar ao usuário se ele deseja realizar o commit da tag de versão, digite "S" e pressione ENTER

4. Independete das respostas anteriores, será feito um build da aplicação e o sistema deve perguntar ao usuário se ele deseja fazer um commit no repositório do GitHub, digite "S" e pressione ENTER

5. Por fim o sistema perguntará ao usuário em que branch ele fará o commit, informe a branch correta (geralmente a atual) e pressione ENTER

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
3. Faça suas alterações e teste-as localmente (verifique o tópico de Testes).
4. Faça um `git commit` e `git push` na sua branch.
5. Realize os seguintes comandos na ordem:
  `git stash`
  `git checkout test`
  `git pull origin main`
  `git stash pop` para levar suas alterações para essa branch.

6. Siga as instruções para Publicação acima

<!-- AVISO !! QUALQUER ALTERAÇÃO DO COMPONENTE DEVE SER INFORMADA NESTE ARQUIVO -->

# Breve descrição de utilização do Tree Component

# _1. (IMPORT) Para utilizar o Tree Component, você deve importar o InfraModule para o módulo de seu componente.

```ts  
import { InfraModule } from 'src/app/infra/infra.module';
```
## _2. (OPTIONS)

# [items]= TreeItem[] 
# [checkbox] = boolean (default = false)
# [filter] = boolean (default = false)

```html
<app-tree [items]="" [checkbox]="" [filter]=""></app-tree>
```

### _3. (MODEL) O modelo do de dados deve ser recebido via JSON e respeitar a classe TreeItem.ts

```ts
export class TreeItem {
  label: string;
  id: number;
  children: TreeItem[];
  expanded: boolean;
  has_children: boolean;
  is_selected: boolean;
  key: string;
  aplicClass: boolean = false;
}
```
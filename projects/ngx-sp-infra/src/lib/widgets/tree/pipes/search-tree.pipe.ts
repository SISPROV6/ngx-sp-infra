import { TreeItem } from '../models/tree-item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TreeFilter',
  pure: true,
})

export class SearchTreePipe implements PipeTransform {

  public transform(items: TreeItem[], search: string): TreeItem[] {
    return items.filter(node => node.label.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }

}

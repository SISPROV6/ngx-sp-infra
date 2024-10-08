export class TreeItem {
  id: number;
  label: string;
  children: TreeItem[];
  expanded: boolean;
  has_children: boolean;
  is_selected: boolean;
  key: string;
  aplicClass: boolean = false;
  level: number = 0;
}
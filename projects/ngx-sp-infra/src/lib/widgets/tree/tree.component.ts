import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TreeItem } from "./models/tree-item";

@Component({
  selector: "app-tree",
  templateUrl: "./tree.component.html",
  styleUrls: ["./tree.component.scss"]
})
export class TreeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private _openAll: boolean = false;
  private _items: TreeItem[] | any[] = [];
  // #endregino PRIVATE

  // #region PUBLIC
  @Input()
  public get items(): TreeItem[] | any[] { return this._items; }
  public set items(value: TreeItem[] | any[]) { this._items = value; }

  /** Responsável por abrir ou fechar todas as opções sendo exibidas na lista
   * @default false */
  @Input()
  public get openAll(): boolean { return this._openAll; }
  public set openAll(value: boolean) {
    this._openAll = value;

    this.items.forEach(elem => {
      elem.expanded = value;
      elem.aplicClass = value;
    });
  }

  @Input() public checkbox: boolean = false;
  @Input() public filter: boolean = false;


  @Output() public onSelect: EventEmitter<boolean> = new EventEmitter();
  @Output() public onEvent: EventEmitter<boolean> = new EventEmitter();


  public checked = (item: TreeItem) => item.is_selected == true;
  public search: string = "";
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========

  // #region ==========> PUBLIC METHODS <==========
  public onExpand(item: TreeItem): void {
    if (item.expanded) {
      item.expanded = !item.expanded;
      return;
    } else {
      if (item.children) {
        if (item.children.length > 0) {
          item.expanded = true;
        } else {
          item.expanded = false;
        }
      }
    }
  }

  public onCheck(items: TreeItem[], item: TreeItem): void {
    if (item.has_children) {
      item.children.forEach((firstNode) => {
        if (firstNode.is_selected != item.is_selected) {
          firstNode.is_selected = !firstNode.is_selected;
        }
        if (firstNode.has_children) {
          firstNode.children.forEach((secondNode) => {
            if (secondNode.is_selected != firstNode.is_selected) {
              secondNode.is_selected = !secondNode.is_selected;
            }
          });
        }
      });
    }
    if (this.indeterminateCheck(items)) {
      this.onSelect.emit(true);
    } else if (!this.indeterminateCheck(items)) {
      this.onSelect.emit(false);
    }
  }

  public onCheckEvent(items: TreeItem[]) {
    if (this.indeterminateCheck(items)) {
      this.onEvent.emit(true);
    } else {
      this.onEvent.emit(false);
    }
  }
  // #endregion ==========> PUBLIC METHODS <==========

  // #region ==========> PRIVATE METHODS <==========

  private indeterminateCheck(list: TreeItem[]): boolean {
    return list.some(this.checked);
  }

  // private allCheck(list: TreeItem[]): boolean {
  //   return list.every(this.checked);
  // }
  // #endregion ==========> PRIVATE METHODS <==========
}

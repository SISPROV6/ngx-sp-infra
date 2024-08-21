import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-container',
  templateUrl: './content-container.component.html',
  styleUrl: './content-container.component.scss'
})
export class ContentContainerComponent implements OnInit, OnChanges {
  // #region ==========> PROPERTIES <==========
  
  // #region PRIVATE
  private _currentTab: string;
  // #endregion PRIVATE
  
  // #region PUBLIC
  @Input('tabs') public navTabsList?: string[];
  @Input() public containerTitle?: string;

  @Output() public onChangeTab: EventEmitter<string> = new EventEmitter<string>();

  public currentContent: number;
  public get currentTab(): string { return this._currentTab; }
  public set currentTab(value: string) {
    this._currentTab = value;
    this.onChangeTab.emit(value);
  }
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor() {}

  ngOnInit(): void {
    if (this.navTabsList && this.navTabsList.length > 0) {
      this.currentTab = this.navTabsList[0];
      this.currentContent = 1;
    }
    
    console.log(this.currentTab);
    console.log(this.currentContent);
    console.log(this.navTabsList);
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========
  // [...]
  // #endregion ==========> UTILS <==========

}

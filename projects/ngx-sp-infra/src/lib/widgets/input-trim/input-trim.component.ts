import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'lib-input-trim',
  standalone: false,
  templateUrl: './input-trim.component.html',
  styleUrls: ['./input-trim.component.css']
})
export class InputTrimComponent implements OnInit {

  @Input('control') formControl: FormControl = new FormControl();
  @Input() placeholder: string = '';
  @Input() uppercase: boolean = false;

  ngOnInit(): void {
    if (this.formControl) {
      this.formControl.valueChanges.pipe(
        debounceTime(2000),
        distinctUntilChanged()
      ).subscribe(value => {
        this.formControl?.setValue(value.trim(), { emitEvent: false });
      });
    }
  }
}

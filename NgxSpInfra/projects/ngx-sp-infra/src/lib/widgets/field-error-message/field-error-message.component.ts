import { AbstractControl, FormControl } from '@angular/forms';
import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

import { FormUtils } from '../../utils/form-utils';

@Component({
  selector: 'app-field-error-message',
  templateUrl: './field-error-message.component.html',
  styleUrls: ['./field-error-message.component.css']
})
export class FieldErrorMessageComponent implements OnInit {
  @Input() control: AbstractControl | null;
  @Input() label: string;

  get errorMessage() {
    
    for (let propertyName in this.control?.errors) {

      if (this.control?.errors.hasOwnProperty(propertyName) &&
        (this.control?.dirty || this.control?.touched)) {
          return FormUtils.getErrorMessage(this.label, propertyName, this.control?.errors[propertyName]);
      }
      
    }

    return null;
  }
  
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', '100%');
  }

}

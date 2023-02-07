import { Component, EventEmitter, Input, Output } from '@angular/core';
import { createMask, InputmaskOptions } from "@ngneat/input-mask";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
   private _mask: string = ''
   get mask(): string {
     return this._mask;
   }
   @Input()
   set mask(value: string) {
     this._mask = value;
     let format = value.replaceAll('0', '9');
     this.inputMask = createMask(format);
     this.inputMask.autoUnmask = true;
     this.inputMask.placeholder = value;
   }
   inputMask: InputmaskOptions<string> = createMask({});
   @Input() label: string = '';
   @Input() state: 'valid' | 'errors' | 'none' = 'none';
   @Input('validation-text') validationText = '';

   @Input('input-value') inputValue: string = '';
   @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();

}

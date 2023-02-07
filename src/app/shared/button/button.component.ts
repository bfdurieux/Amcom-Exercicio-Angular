import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input('style-class') styleClass: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Output() click: EventEmitter<void> = new EventEmitter<void>();
}

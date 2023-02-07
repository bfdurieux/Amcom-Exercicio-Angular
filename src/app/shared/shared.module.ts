import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from "@angular/forms";
import { InputMaskModule } from "@ngneat/input-mask";
import { CheckboxComponent } from './checkbox/checkbox.component';
@NgModule({
  declarations: [
    ButtonComponent,
    StepperComponent,
    InputComponent,
    CardComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputMaskModule
  ],
  exports: [
    ButtonComponent,
    StepperComponent,
    InputComponent,
    CardComponent,
    CheckboxComponent
  ]
})
export class SharedModule { }

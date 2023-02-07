import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { LayoutModule } from "../../layout/layout.module";

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
      CommonModule,
      RouterModule.forChild([
          {
              path: '',
              redirectTo: '/admission/registration', pathMatch: 'full'
          },
          {
              path: 'registration',
              component: RegistrationComponent
          },
      ]),
      SharedModule,
      LayoutModule
  ]
})
export class AdmissionModule { }

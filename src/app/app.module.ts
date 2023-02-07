import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet, Routes } from "@angular/router";
import { AdmissionModule } from "./views/admission/admission.module";
import { InputMaskModule } from '@ngneat/input-mask';
import { LayoutModule } from "./layout/layout.module";

const routes: Routes = [
  { path: '', redirectTo: 'admission/registration', pathMatch: 'full' },
  { path: '**', redirectTo: 'admission/registration', pathMatch: 'full' },
  { path: 'admission', loadChildren: () => import('./views/admission/admission.module').then(m => m.AdmissionModule) }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      RouterModule.forRoot(routes),
      BrowserModule,
      RouterOutlet,
      AdmissionModule,
      InputMaskModule,
      LayoutModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoSidebarComponent } from "./info-sidebar/info-sidebar.component";
import { MenuSidebarComponent } from "./menu-sidebar/menu-sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [
    InfoSidebarComponent,
    MenuSidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfoSidebarComponent,
    MenuSidebarComponent,
    NavbarComponent
  ]
})
export class LayoutModule { }

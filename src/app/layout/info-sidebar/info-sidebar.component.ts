import { Component, Input, OnInit } from '@angular/core';
import { InfoSidebarService } from "./info-sidebar.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-info-sidebar',
  templateUrl: './info-sidebar.component.html',
  styleUrls: ['./info-sidebar.component.scss']
})
export class InfoSidebarComponent implements OnInit{
  openSidebar: Observable<boolean> = new Observable<boolean>();
  @Input() sidebarTemplateRef: any;

  constructor(private service: InfoSidebarService) {
  }

  ngOnInit() {
    this.openSidebar = this.service.getIsOpen();
  }

  onClose() {
    this.service.setIsOpen(false);
  }

  getSidebarStyle(showSidebar: boolean | null) {
    if(showSidebar == null)
      return;

    let sidebarStyle: any = {};

    sidebarStyle.transition = 'right' + ' ' + .5 + 's, visibility ' + .5 + 's';
    sidebarStyle.width = '40rem';
    sidebarStyle['right'] = (showSidebar ? 0 : (20 * -1)) + 'rem';

    return sidebarStyle;
  }
}

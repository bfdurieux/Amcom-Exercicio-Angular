import { Component } from '@angular/core';
import { Utils } from "../../../utils/utils";
import { InfoSidebarService } from "../../../layout/info-sidebar/info-sidebar.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registration: string = '';
  isValid: boolean = false;
  isChanged: boolean = false;

  constructor(public sidebarService: InfoSidebarService) {
  }

  findByRegistration(event: any) {
    event?.stopPropagation();
    this.isValid = Utils.validateRegistration(this.registration);
    this.isChanged = true;
  }
}

import { Component, Input, HostBinding } from '@angular/core';
import { Agency } from '../../model/agency.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'agency-logo',
  templateUrl: './agency-logo.component.html',
  styleUrls: ['./agency-logo.component.scss']
})
export class AgencyLogoComponent {
  @Input() logo: string;
  @HostBinding('attr.class') cssClass = 'ui small image';
}

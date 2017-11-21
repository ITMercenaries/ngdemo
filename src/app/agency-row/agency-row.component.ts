import { Component, Input, HostBinding} from '@angular/core';
import { Agency } from '../model/agency.model';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'agency-row',
  templateUrl: './agency-row.component.html',
  styleUrls: ['./agency-row.component.scss']
})
export class AgencyRowComponent  {
  @Input() agency: Agency;
  @HostBinding('attr.class') cssClass = 'item';
}

import { Component, Input } from '@angular/core';
import { Agency } from '../model/agency.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'agency-category',
  templateUrl: './agency-category.component.html',
  styleUrls: ['./agency-category.component.scss']
})
export class AgencyCategoryComponent {
  @Input() agency: Agency;
}

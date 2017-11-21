import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Agency } from '../model/agency.model';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies-list.component.html',
  styleUrls: ['./agencies-list.component.scss']
})
export class AgenciesListComponent implements OnInit {
  /**
   *  @input Agency List -- the array of agencies passed from parent component.
   */
  @Input() agencyList: Agency[];

  @Output() onAgencySelected: EventEmitter<Agency>;
  /**
   *  Currently selected agency
   */
  private currentAgency: Agency;

  constructor() {
    this.onAgencySelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(agency: Agency): void {
    this.currentAgency = agency;
    this.onAgencySelected.emit(agency);
  }

  isSelected(agency: Agency): boolean {
    if (!agency || !this.currentAgency) {
      return false;
    }
    return agency.id === this.currentAgency.id;
  }

}

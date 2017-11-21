import { Component, EventEmitter } from '@angular/core';
import { Agency } from './model/agency.model';

/*
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addAgency(title: HTMLInputElement, link: HTMLInputElement ): boolean {
    console.log(`Adding article title ${title.value} and link: ${link.value}`);
    return false;
  }
}
*/

@Component({
  selector: 'app-itm-root',
  templateUrl: './itm-app.component.html',
  styleUrls: ['./itm-app.component.scss']
})
export class AppComponent {
  agencies: Agency[];

  constructor() {
    this.agencies = [
      new Agency('AGENT001',
                'Procom',
                '101 Heaven Avenu',
                'https://www.procom.ca/assets/images/procom-logo.svg',
                ['IT', 'Consulting', 'General'],
                4),
      new Agency('AGENT002',
                'Bevertec',
                '103 Heaven Avenu',
                'https://www.bevertec.com/wp-content/themes/bevertec/images/logo-blue.svg',
                ['IT', 'Consulting', 'Development'],
                3),
      new Agency('AGENT003',
                'TalentNet',
                '200 Front Street',
                'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAaSAAAAJDYxOWRhNjdjLWYxZGYtNDBkMi05Y2QzLTUwNmRjMTU4NGFiZg.png',
                ['IT', 'Job Agency'],
                1)
    ];
  }
  // addAgency(title: HTMLInputElement, link: HTMLInputElement ): boolean {
  //   console.log(`Adding article title ${title.value} and link: ${link.value}`);
  //   return false;
  // }
  agencyWasSelected(agency: Agency): void {
    console.log('Agency clicked: ', agency);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'agency-rating',
  template: `
  <div class="agency-rating">Rating: {{rating}}</div>
  `,
  styleUrls: ['./agency-rating.component.scss']
})
export class AgencyRatingComponent {
  @Input() rating: number;
}

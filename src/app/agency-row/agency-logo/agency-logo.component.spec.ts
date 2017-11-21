import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyLogoComponent } from './agency-logo.component';

describe('AgencyLogoComponent', () => {
  let component: AgencyLogoComponent;
  let fixture: ComponentFixture<AgencyLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

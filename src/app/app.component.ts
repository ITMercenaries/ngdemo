import { Component, EventEmitter, ReflectiveInjector, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Agency } from './model/agency.model';
import { UserService } from './service/user.service';
import { DataService } from './service/data.service';
import { HttpClient } from '@angular/common/http';

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
  myForm: FormGroup;
  loading: boolean;
  data: Object;

  userName: string;
 // @ViewChild( MatMenuTrigger ) trigger: MatMenuTrigger;

  constructor(fb: FormBuilder,
              private userService: UserService,
              @Inject('API_URL') private apiURL: string,
              public dataService: DataService,
              public http: HttpClient) {

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

    this.myForm = fb.group({
      'agencyid': ['AGENCY006', Validators.compose([Validators.required, this.agencyIdValidator]) ]
    });

    // Injection
    // const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);
    // this.userService = injector.get(UserService);
  }
  // addAgency(title: HTMLInputElement, link: HTMLInputElement ): boolean {
  //   console.log(`Adding article title ${title.value} and link: ${link.value}`);
  //   return false;
  // }
  agencyWasSelected(agency: Agency): void {
    console.log('Agency clicked: ', agency);
  }

  onSubmit( form: string): void {
    console.log('You submitted value:', form);
  }

  agencyIdValidator(ctl: FormControl): { [s: string]: boolean } {
    if ( !ctl.value.match(/^AGE/)) {
      return { invalidAgencyID: true};
    }
  }

  signIn(): void {
    this.userService.setUser({name: 'Jane Doe'});
    this.loading = true ;
    this.userName = this.userService.getUser().name;
    console.log('User name is: ', this.userName );
    console.log('API url is: ', this.apiURL );

    this.http.get( 'https://reqres.in/api/users').subscribe( res => {
      this.data = res;
      this.loading = false;
    });
  }
}

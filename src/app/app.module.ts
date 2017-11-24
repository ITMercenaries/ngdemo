import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AgencyLogoComponent } from './agency-row/agency-logo/agency-logo.component';
import { AgencyRatingComponent } from './agency-row/agency-rating/agency-rating.component';
import { AgencyRowComponent } from './agency-row/agency-row.component';
import { AgenciesListComponent } from './agencies-list/agencies-list.component';
import { AgencyCategoryComponent } from './agency-row/agency-category/agency-category.component';

import { UserService } from './service/user.service';
import { DataService } from './service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    AgenciesListComponent,
    AgencyRowComponent,
    AgencyLogoComponent,
    AgencyRatingComponent,
    AgencyCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [
    { provide: UserService, useClass: UserService },
    { provide: DataService, useClass: DataService },
    { provide: 'API_URL', useValue: 'http://myapi.com/v1/api' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

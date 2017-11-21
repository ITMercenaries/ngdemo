import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { AgencyCategoryComponent } from './agency-category/agency-category.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ConnectionBackend, HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {ContactService} from "./contact/service/contact.service";
import {FlexLayoutModule} from '@angular/flex-layout';


import {AppComponent} from './app.component';
import {ContactListComponent} from './contact/contact-list/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item/contact-list-item.component';
import {ContactDialogComponent} from './contact/contact-dialog/contact-dialog.component';
import {EditContactDialogComponent} from './contact/edit-contact-dialog/edit-contact-dialog.component';
import {DialogService} from "./contact/service/dialog.service";
import {ContactMapDialogComponent} from './contact/contact-map-dialog/contact-map-dialog.component';
import {ContactAddressPipe} from './contact/pipes/contact-address.pipe';
import {Router, RouterModule} from "@angular/router";
import {ContactsComponent} from './contact/contacts/contacts.component';
import {LoginComponent} from "./user/login.component";
import {ContactApiService} from "./contact/service/contact-api.service";
import {ContactLocalStorageService} from "./contact/service/contact-localstorage.service";
import {VibrateDirective} from './utils/vibrate.directive';
import {HttpService} from "./contact/service/http.service";
import {AuthenticateService} from "./user/service/authenticate.service";
import {UserService} from "./user/service/user.service";

const routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  }

];

export function getHttp(backend: ConnectionBackend, options: RequestOptions, router: Router) {
  return new HttpService(backend, options, router);
}

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    EditContactDialogComponent,
    ContactMapDialogComponent,
    ContactAddressPipe,
    ContactsComponent,
    LoginComponent,
    VibrateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ContactService,
    DialogService,
    ContactLocalStorageService,
    ContactApiService,
    AuthenticateService,
    UserService,
    {
      provide: HttpService,
      useFactory: getHttp,
      deps: [XHRBackend, RequestOptions, Router]
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ContactDialogComponent, EditContactDialogComponent, ContactMapDialogComponent]
})
export class AppModule {
}

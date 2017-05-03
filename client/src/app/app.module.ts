import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {ContactService} from "./contact/service/contact.service";
import { FlexLayoutModule } from '@angular/flex-layout';



import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list/contact-list-item/contact-list-item.component';
import { ContactDialogComponent } from './contact/contact-dialog/contact-dialog.component';
import { EditContactDialogComponent } from './contact/edit-contact-dialog/edit-contact-dialog.component';
import {DialogService} from "./contact/service/dialog.service";
import { ContactMapDialogComponent } from './contact/contact-map-dialog/contact-map-dialog.component';
import { ContactAddressPipe } from './contact/pipes/contact-address.pipe';
import {RouterModule} from "@angular/router";
import { ContactsComponent } from './contact/contacts/contacts.component';
import {LoginComponent} from "./login/login.component";
import {ContactApiService} from "./contact/service/contact-api.service";
import {ContactLocalStorageService} from "./contact/service/contact-localstorage.service";
import { VibrateDirective } from './utils/vibrate.directive';

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
  providers: [ContactService, DialogService, ContactLocalStorageService,ContactApiService],
  bootstrap: [AppComponent],
  entryComponents: [ContactDialogComponent, EditContactDialogComponent, ContactMapDialogComponent]
})
export class AppModule {}

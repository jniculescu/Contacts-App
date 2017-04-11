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

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    EditContactDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [ContactService, DialogService],
  bootstrap: [AppComponent],
  entryComponents: [ContactDialogComponent, EditContactDialogComponent]
})
export class AppModule {}

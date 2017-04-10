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

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
  entryComponents: [ContactDialogComponent]
})
export class AppModule {}

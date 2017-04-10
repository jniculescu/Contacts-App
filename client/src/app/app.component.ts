import { Component } from '@angular/core';
import {Contact} from "./contact/contact";
import {MdDialog} from '@angular/material'
import {ContactService} from "./contact/service/contact.service";
import {ContactDialogComponent} from "./contact/contact-dialog/contact-dialog.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
  contacts: Contact[];
  //selectedContact: Contact;


  constructor(public dialog: MdDialog, contactService: ContactService)
  {
    this.contacts = contactService.findContacts();
  }

  addContact()
  {

    let dialogRef = this.dialog.open(ContactDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
    //contactService.saveContact();
  }

  /*contactSelected(contact: Contact)
  {
    this.selectedContact = contact;
  }*/
}

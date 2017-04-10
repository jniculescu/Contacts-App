import { Component } from '@angular/core';
import {Contact} from "./contact/contact";
import {MdDialog} from '@angular/material'
import {ContactService} from "./contact/service/contact.service";
import {ContactListItemComponent} from "./contact/contact-list/contact-list-item/contact-list-item.component";


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

  addContact(contactService: ContactService, $mdDialog)
  {


    //this.dialog.open(ContactListItemComponent);
    $mdDialog.show(
      $mdDialog.alert()
        .ok('ok')
        .openFrom({
        top: -50,
        width: 30,
        height: 80
      })
        .closeTo({
          left: 1500
        })
    )
    //contactService.saveContact();
  }

  /*contactSelected(contact: Contact)
  {
    this.selectedContact = contact;
  }*/
}

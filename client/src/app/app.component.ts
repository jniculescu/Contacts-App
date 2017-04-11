import {Component} from '@angular/core';
import {Contact} from "./contact/contact";
import {MdDialog} from '@angular/material'
import {ContactService} from "./contact/service/contact.service";
import {ContactDialogComponent} from "./contact/contact-dialog/contact-dialog.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  contacts: Contact[];


  constructor(public dialog: MdDialog, private contactService: ContactService) {
    this.contacts = contactService.findContacts();
  }

  addContact() {

    let dialogRef = this.dialog.open(ContactDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.contactService.saveContact(result)
      }
    });
  }

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact);
  }


}

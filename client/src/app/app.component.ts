import {Component} from '@angular/core';
import {Contact} from "./contact/contact";
import {MdDialog} from '@angular/material'
import {ContactService} from "./contact/service/contact.service";
import {ContactDialogComponent} from "./contact/contact-dialog/contact-dialog.component";
import {DialogService} from "./contact/service/dialog.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  contacts: Contact[];
  private dialogService: any;

  constructor(private contactService: ContactService, dialogService: DialogService) {
    this.contacts = contactService.findContacts();
    this.dialogService = dialogService;
  }

  addContact() {
    this.dialogService.contactDialog();
  }

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact);
  }

  editContact(contact: Contact){
    this.dialogService.editContactDialog(contact);
  }
  showContactMap(contact: Contact){
    this.dialogService.contactMapDialog(contact);
  }


}

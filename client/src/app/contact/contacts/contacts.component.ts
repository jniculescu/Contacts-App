import {Component} from '@angular/core';
import {Contact} from "../../contact/contact";
import {ContactService} from "../../contact/service/contact.service";
import {DialogService} from "../../contact/service/dialog.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
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

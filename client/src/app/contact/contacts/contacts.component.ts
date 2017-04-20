import {Component} from '@angular/core';
import {Contact} from "../../contact/contact";
import {ContactService} from "../../contact/service/contact.service";
import {DialogService} from "../../contact/service/dialog.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contacts: Contact[];
  private dialogService: any;

  constructor(public contactService: ContactService, dialogService: DialogService, private router: Router) {
    contactService.findContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
    this.dialogService = dialogService;
  }
  /*    contactService.findContacts().subscribe(contacts => {
   this.contacts = contacts;
   });*/
  addContact() {
    this.dialogService.contactDialog().subscribe(result => {
      if (result) {
        this.contactService.saveContact(result).subscribe(contacts => {
          this.contacts = contacts;
        });
        this.contacts = this.contactService.findContacts();
      }
    });
  }

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact);
    this.contacts = this.contactService.findContacts();
  }

  editContact(contact: Contact) {
    this.dialogService.editContactDialog(contact).subscribe(result => {
      if (result) {
        console.log(this.contacts);
        this.contactService.saveContactEdit(result);
        this.contacts = this.contactService.findContacts();
        console.log(this.contacts);
      }
    });
  }

  showContactMap(contact: Contact) {
    this.dialogService.contactMapDialog(contact);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }


}

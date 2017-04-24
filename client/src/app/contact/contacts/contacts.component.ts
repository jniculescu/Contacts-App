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

  addContact() {
    this.dialogService.contactDialog().subscribe(result => {
      if (result) {
        this.contactService.saveContact(result).subscribe(response => {
          this.contactService.findContacts().subscribe(contacts => {
            this.contacts = contacts;
          });
        });
      }
    });
  }

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact).subscribe(response => {
      this.contactService.findContacts().subscribe(contacts => {
        this.contacts = contacts;
      });
    });
  }

  editContact(contact: Contact) {
    this.dialogService.editContactDialog(contact).subscribe(result => {
      if (result) {
        this.contactService.saveContact(result).subscribe(response => {
          this.contactService.findContacts().subscribe(contacts => {
            this.contacts = contacts;
          });
        });
      }});
  }

  showContactMap(contact: Contact) {
    this.dialogService.contactMapDialog(contact);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }


}

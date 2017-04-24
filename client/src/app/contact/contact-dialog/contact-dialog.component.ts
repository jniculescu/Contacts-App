import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';

import {Contact} from "../contact";
import {ContactService} from "../service/contact.service";
import {isNullOrUndefined} from "util";


@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {

  contact: Contact;
  private contactService: any;


  constructor(public dialogRef: MdDialogRef<ContactDialogComponent>, contactService: ContactService) {
    this.contactService = contactService;
  }


  ngOnInit() {
    if (!this.contact) {
      this.contact = new Contact();
    }
  }

  saveContact() {
    this.dialogRef.close(this.contact);
  }

  cancelAdd() {
    this.dialogRef.close();
  }

}

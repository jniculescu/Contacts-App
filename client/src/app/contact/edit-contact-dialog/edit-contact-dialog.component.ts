import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {Contact} from "../contact";


@Component({
  selector: 'app-edit-contact-dialog',
  templateUrl: './edit-contact-dialog.component.html',
  styleUrls: ['./edit-contact-dialog.component.css']
})
export class EditContactDialogComponent implements OnInit {

  contact: Contact;

  constructor(public dialogRef: MdDialogRef<EditContactDialogComponent>) {

  }

  ngOnInit() {
  }

  saveEdit() {
    this.dialogRef.close(this.contact);
  }

  cancelEdit() {
    this.dialogRef.close();
  }
}

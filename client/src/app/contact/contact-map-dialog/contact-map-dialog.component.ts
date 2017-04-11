import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {Contact} from "../contact";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-contact-map-dialog',
  templateUrl: './contact-map-dialog.component.html',
  styleUrls: ['./contact-map-dialog.component.css']
})
export class ContactMapDialogComponent implements OnInit {

  contact: Contact;
  target: string;
  private apiKey: string = 'AIzaSyCZ8xGhnEJWGDm9IrVRvaVKr9TEE6xLMJw';

  constructor(public sanitizer: DomSanitizer, public dialogRef: MdDialogRef<ContactMapDialogComponent>) { }

  ngOnInit() {

  }

  public close(){
    this.dialogRef.close();
  }

  mapUrl(){
    this.target = this.contact.address + ',' + this.contact.city;
    return this.sanitizer.bypassSecurityTrustResourceUrl('http://www.google.com/maps/embed/v1/place?q=' + this.target + '&key=' + this.apiKey);
  }
}

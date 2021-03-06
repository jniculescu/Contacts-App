import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Contact} from "../../contact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[];
  @Output() editContact: EventEmitter<Contact>;
  @Output() deleteContact: EventEmitter<Contact>;
  @Output() showContactMap: EventEmitter<Contact>;

  constructor() {
    this.editContact = new EventEmitter();
    this.deleteContact = new EventEmitter();
    this.showContactMap = new EventEmitter();
  }

  ngOnInit() {
  }

}



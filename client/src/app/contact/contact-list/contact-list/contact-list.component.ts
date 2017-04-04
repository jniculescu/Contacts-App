import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Contact} from "../../contact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[];
  @Output() clicked: EventEmitter<Contact>;
  selectedContact: Contact;

  constructor()
  {
    this.clicked = new EventEmitter();
  }

  ngOnInit() {
  }

}

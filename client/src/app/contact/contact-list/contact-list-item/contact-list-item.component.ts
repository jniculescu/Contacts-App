import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {Contact} from "../../contact";


@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {


  @Input() contact: Contact;
  @Input() edit: EventEmitter<Contact>;
  @Input() delete: EventEmitter<Contact>;

  constructor()
  {

  }

  ngOnInit() {
  }


  deleteContact(){
    this.delete.emit(this.contact);
  }

  editContact(){
    this.edit.emit(this.contact);
  }
}

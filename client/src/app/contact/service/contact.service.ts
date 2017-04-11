import { Injectable } from '@angular/core';
import {Contact} from "../contact";

@Injectable()
export class ContactService {

  public localStorageContactsKey = 'ca-contacts';

  constructor() {

    if(!localStorage.getItem(this.localStorageContactsKey))
    {
      localStorage.setItem(this.localStorageContactsKey, JSON.stringify([]));
    }


  }

  public findContacts(): Contact[] {
    return this.readLocalStorageContacts();
  }

  public readLocalStorageContacts() {
    var data = localStorage.getItem(this.localStorageContactsKey);
    return JSON.parse(data);
  }

  public writeLocalStorageContacts(contacts) {
    contacts = JSON.stringify(contacts);
    return localStorage.setItem(this.localStorageContactsKey, contacts);
  }

  public saveContact(contact) {
    var contacts = this.readLocalStorageContacts();
    contacts.push(contact);
    this.writeLocalStorageContacts(contacts);
  }

  public saveContactEdit(contact) {
    var contacts1 = this.readLocalStorageContacts();
    let index = contacts1.findIndex(c => c.id == contact.id);
    contacts1[index] = contact;
    this.writeLocalStorageContacts(contacts1);
  }

  public deleteContact(contact){
    let contacts2 = this.readLocalStorageContacts();
    let index = contacts2.findIndex(c => c.id == contact.id);
    contacts2.splice(index, 1);
    this.writeLocalStorageContacts(contacts2);
  }

}

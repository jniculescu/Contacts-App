import { Injectable } from '@angular/core';
import {Contact} from "../contact";

@Injectable()
export class ContactService {

  public localStorageContactsKey = 'ca-contacts';

  private contacts: Contact[] = [];

  constructor() {

    if(!localStorage.getItem(this.localStorageContactsKey))
    {
      localStorage.setItem(this.localStorageContactsKey, JSON.stringify([]));
    }

    this.contacts = JSON.parse(localStorage.getItem((this.localStorageContactsKey)));

  }

  public findContacts(): Contact[] {
    return this.contacts;
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
    this.contacts.push(contact);
    this.writeLocalStorageContacts(this.contacts);
  }

  public saveContactEdit(contact) {
    let index = this.contacts.findIndex(c => c.id == contact.id);
    this.contacts[index] = contact;
    this.writeLocalStorageContacts(this.contacts);
  }

  public deleteContact(contact){
    let index = this.contacts.findIndex(c => c.id == contact.id);
    this.contacts.splice(index, 1);
    this.writeLocalStorageContacts(this.contacts);
  }

}

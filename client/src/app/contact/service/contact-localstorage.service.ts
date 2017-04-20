import { Injectable } from '@angular/core';
import {ContactStorage} from "./contact-storage";
import {Contact} from "../contact";
import {Observable} from "rxjs";

@Injectable()
export class ContactLocalStorageService implements ContactStorage {

  private contacts: Contact[] = [];

  public localStorageContactsKey = 'ca-contacts';

  constructor() {
    if(!localStorage.getItem(this.localStorageContactsKey))
    {
      localStorage.setItem(this.localStorageContactsKey, JSON.stringify([]));
    }

    this.contacts = JSON.parse(localStorage.getItem((this.localStorageContactsKey)));

  }

  public findContacts() {
    let contacts = this.readLocalStorageContacts();
    return Observable.of(this.contacts);
  }

  public readLocalStorageContacts() {
    var data = localStorage.getItem(this.localStorageContactsKey);
    return JSON.parse(data);
  }

  public writeLocalStorageContacts(contacts) {
    contacts = JSON.stringify(contacts);
    return localStorage.setItem(this.localStorageContactsKey, contacts);
  }

  public saveContact(contact: Contact) {
     this.contacts.push(contact);
     this.writeLocalStorageContacts(this.contacts);
  }

  public saveContactEdit(contact: Contact) {
    let index = this.contacts.findIndex(c => c.id == contact.id);
    this.contacts[index] = contact;
    this.writeLocalStorageContacts(this.contacts);
  }

  public deleteContact(contact: Contact){
     let index = this.contacts.findIndex(c => c.id == contact.id);
     this.contacts.splice(index, 1);
     this.writeLocalStorageContacts(this.contacts);
     return Observable.of(null);
  }

}

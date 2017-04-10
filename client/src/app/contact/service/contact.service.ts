import { Injectable } from '@angular/core';
import {Contact} from "../contact";

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {


    this.contacts = [
      new Contact(1, 'jani', 'niculescu', '0400535343', 'Piiluvankatu 27', 'Lappeenranta')
    ];


    var localStorageContactsKey = 'ca-contacts';
    if(!localStorage.getItem(localStorageContactsKey))
    {
      localStorage.setItem(localStorageContactsKey, JSON.stringify([]));
    }

    function readLocalStorageContacts() {
      var data = localStorage.getItem(localStorageContactsKey);
      return JSON.parse(data);
    }

    function writeLocalStorageContacts(contacts) {
      contacts = JSON.stringify(contacts);
      return localStorage.setItem(localStorageContactsKey, contacts);
    }

  function saveContact(contact)
    {
      var contacts1 = readLocalStorageContacts();
      contacts1.push(contact);
      writeLocalStorageContacts(contacts1);
    }

  }

  public findContacts(): Contact[] {
    return this.contacts;
  }



}

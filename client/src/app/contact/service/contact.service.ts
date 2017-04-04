import { Injectable } from '@angular/core';
import {Contact} from "../contact";

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {
    this.contacts =
      [
        new Contact(1, 'jani', 'niculescu'),
        new Contact(2, 'töttöröö', 'kukkuu'),
        new Contact(3, 'hörhelö', 'torvelo')
      ];
  }

  public findContacts(): Contact[] {
    console.log("mörö");
    return this.contacts;
  }
}

import { Injectable } from '@angular/core';
import {Contact} from "../contact";
import {ContactApiService} from "./contact-api.service";
import {ContactStorage} from "./contact-storage";
import {environment} from "../../../environments/environment";
import {ContactLocalStorageService} from "./contact-localstorage.service";

@Injectable()
export class ContactService {

  contactStorage: ContactStorage;


  constructor(private localStorage: ContactLocalStorageService, private contactApiService: ContactApiService) {

    this.contactStorage = environment.endpointUrl ? contactApiService : localStorage;
  }

  public findContacts() {
    return this.contactStorage.findContacts();
  }

  public saveContact(contact: Contact) {
    return this.contactStorage.saveContact(contact);
  }

  public deleteContact(contact: Contact){
    return this.contactStorage.deleteContact(contact);
  }

}

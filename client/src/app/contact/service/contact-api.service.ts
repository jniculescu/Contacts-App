import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Contact} from "../contact";
import {environment} from "../../../environments/environment";
import {ContactStorage} from "./contact-storage";
import {HttpService} from "./http.service";

@Injectable()
export class ContactApiService implements ContactStorage{

  url = environment.endpointUrl + 'contacts';

  constructor(private http: HttpService) { }

  findContacts(){
    return this.http.get(this.url).map(response => {return response.json() as Contact[];});
  }

  saveContact(contact: Contact){
    return contact.id ? this.updateContact(contact) : this.createContact(contact);
  }

  createContact(contact: Contact){
    return this.http.post(this.url,contact).map(response =>{return response.json() as Contact[];});
  }

  updateContact(contact: Contact){
    return this.http.put(this.url + '/' + contact.id,contact).map(response =>{return response.json() as Contact[];});
  }

  deleteContact(contact: Contact){
    return this.http.delete(this.url + '/' + contact.id,contact).map(response =>{return response.json() as Contact[];});
  }

}

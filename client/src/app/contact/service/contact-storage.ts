import {Contact} from "../contact";
import {Observable} from "rxjs";
export interface ContactStorage {

  saveContact(contact: Contact);
  findContacts(): Observable<any>;

}

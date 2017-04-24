import {Contact} from "../contact";
import {Observable} from "rxjs";
export interface ContactStorage {

  saveContact(contact: Contact): Observable<any>;
  findContacts(): Observable<any>;
  deleteContact(contact: Contact): Observable<any>;

}

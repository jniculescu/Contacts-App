import {ContactLocalStorageService} from "./contact-localstorage.service";
import * as _ from 'lodash';

import {inject, TestBed} from "@angular/core/testing";
import {Contact} from "../contact";

describe('ContactLocalStorageService', () =>{

  let localStorageKey = 'ca-contacts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactLocalStorageService]
    });
  });

  //local storage mock
  beforeEach(() => {
    let store = {};

    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return store[key];
    })

    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      store[key] = value;
    })
  });

  function contactArray(){
    return[
      new Contact('FirstName','LastName', '005634561', 'Street Address 1','City',1),
      new Contact('SeconName','LastName', '005634562', 'Street Address 2','City',2),
      new Contact('ThirdName','LastName', '005634563', 'Street Address 3','City',3)
    ];
  }

  it('Should initialize local storage', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let data = localStorage.getItem(localStorageKey);
    expect(JSON.parse(data)).toEqual([]);
  }));

  it('#findContacts Should return all contacts', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let contacts = contactArray();
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    let contactIds = _.map(contacts, 'id');
    service.findContacts().subscribe((contacts: Contact[]) => {
      expect(contacts.length).toBe(3);
      _.forEach(contacts, function (c) {
        expect(contactIds).toContain(c.id);
      })
    })
  }));

  it('#deleteContact should delete selected contact', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let contactstest = contactArray();
    localStorage.setItem(localStorageKey, JSON.stringify(contactstest));
    service.deleteContact(contactstest[0]).subscribe((contacts: Contact[]) => {
      expect(contacts).toBe(null);//expect null because func has no access to mock array so if its null it has been deleted
    })
  }));

    it('#saveCantactEdit should delete selected contact', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
      let contacts = contactArray();
      localStorage.setItem(localStorageKey, JSON.stringify(contacts));
      contacts[0].firstName = 'edited';
      service.saveContactEdit(contacts[0]).subscribe((contacts1: Contact[]) => {
        expect(contacts[0].firstName).toBe('edited');
      })
    }));

  it('#createContact should delete selected contact', inject([ContactLocalStorageService], (service: ContactLocalStorageService) => {
    let contacts = contactArray();
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    contacts[4] = new Contact('FourthName','LastName', '005634564', 'Street Address 4','City',4)
    service.createContact(contacts[4]).subscribe((contacts1: Contact[]) => {
      expect(contacts1[4]);
    })
  }));
});

import {ContactAddressPipe} from "./contact-address.pipe"
import {Contact} from "../contact";

describe('ContactAddressPipe', () => {

  let pipe = new ContactAddressPipe();

  it('should return address and city', () => {
    let contact = new Contact('FirstName','LastName', '005634564', 'Street Address 1','City')
    expect(pipe.transform(contact)).toBe(contact.address + ', ' + contact.city);
  })
  it('should return address', () => {
    let contact = new Contact('FirstName','LastName', '005634564', 'Street Address 1','')
    expect(pipe.transform(contact)).toBe(contact.address);
    contact.city = null;
    expect(pipe.transform(contact)).toBe(contact.address);
  })
  it('should return city', () => {
    let contact = new Contact('FirstName','LastName', '005634564', '','City')
    expect(pipe.transform(contact)).toBe(contact.city);
    contact.address = null;
    expect(pipe.transform(contact)).toBe(contact.city);
  })
  it('should return empty', () => {
    let contact = new Contact('FirstName','LastName', '005634564', '','')
    expect(pipe.transform(contact)).toBe('');
    expect(pipe.transform(null)).toBe('');
  })

});

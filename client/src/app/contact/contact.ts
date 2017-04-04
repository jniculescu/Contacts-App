export class Contact
{
  id: number;
  firstName: string;
  lastName: string;
  phone: number;
  address: string;

  constructor(id?: number, firstName?: string, lastName?: string, phone?: number, address?: string)
  {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.address = address;
  }
}

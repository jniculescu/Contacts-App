export class Contact
{
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  id: number;

  constructor(firstName?: string, lastName?: string, phone?: string, address?: string, city?: string, id?: number)
  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.address = address;
    this.city = city;
    this.id = id;
  }
}

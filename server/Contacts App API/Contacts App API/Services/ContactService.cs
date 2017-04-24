using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contacts_App_API.Model;

namespace Contacts_App_API.Services
{
	public class ContactService : IContactService
	{
		public List<Contact> _contacts;

		public ContactService()
		{
			_contacts = new List<Contact>();
		}

		public List<Contact> FindAllContacts()
		{
			return _contacts;
		}

		public Contact FindContactById(int id)
		{
			return _contacts.FirstOrDefault(contact => contact.Id == id);
		}

		private int GetId()
		{
			var lastSaved = _contacts.OrderByDescending(contact => contact.Id).FirstOrDefault();
			return lastSaved?.Id + 1 ?? 1;
		}

		public List<Contact> CreateContact(Contact contact)
		{
			_contacts.Add(new Contact(GetId(), contact.FirstName, contact.LastName, contact.PhoneNum, contact.Address, contact.City));
			return _contacts;
		}

		public List<Contact> UpdateContact(int id, Contact contact)
		{
			var index = _contacts.FindIndex(c => c.Id == id);
			_contacts[index] = contact;
			return _contacts;
		}

		public List<Contact> DeleteContact(int id)
		{
			_contacts.RemoveAll(c => c.Id == id);
			return _contacts;
		}

	}
}

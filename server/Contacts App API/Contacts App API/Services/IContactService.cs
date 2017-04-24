using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contacts_App_API.Model;

namespace Contacts_App_API.Services
{
    public interface IContactService
    {
		List<Contact> FindAllContacts();
		Contact FindContactById(int id);
		List<Contact> CreateContact(Contact contact);
		List<Contact> UpdateContact(int id, Contact contact);
		List<Contact> DeleteContact(int id);
	}
}

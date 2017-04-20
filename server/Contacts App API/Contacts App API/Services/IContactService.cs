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
		void CreateContact(Contact contact);
		void UpdateContact(int id, Contact contact);
		void DeleteContact(int id);
	}
}

using Contacts_App_API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contacts_App_API.Repository
{
    public interface IContactRepository
    {
	List<Contact> FindAll();
	Contact FindById(int id);
	void Create(Contact contact);
	void Update(Contact contact);
	void Delete(int id);
}
}

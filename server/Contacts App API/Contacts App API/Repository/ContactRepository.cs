using Contacts_App_API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contacts_App_API.Repository
{
    public class ContactRepository : IContactRepository
    {
		private readonly DatabaseContext _context;

		public ContactRepository(DatabaseContext context)
		{
			_context = context;
		}

		public List<Contact> FindAll() {
			var contacts = _context.Contacts.ToList();
			return contacts;
		}

		public Contact FindById(int id) {
			var contact = _context.Contacts.FirstOrDefault(c => c.Id == id);
			return contact;
		}

		public void Create(Contact contact) {
			_context.Contacts.Add(contact);
			_context.SaveChanges();
		}

		public void Update(Contact contact) {
			_context.Contacts.Update(contact);
			_context.SaveChanges();
		}

		public void Delete(int id) {
			//if ehto jos contact = null?...TBD

			var contact = _context.Contacts.FirstOrDefault(c => c.Id == id);
			_context.Contacts.Remove(contact);
			_context.SaveChanges();
		}

    }
}

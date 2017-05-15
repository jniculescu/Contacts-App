using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Contacts_App_API.Model
{
	public class User
	{
		[Key]
		public int Id { get; set; }
		public string Username { get; set; }
		public string Password { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Email { get; set; }

		public User() { }

		public User(int id, string username, string password, string firstname, string lastname, string email)
		{
			Id = id;
			Username = username;
			Password = password;
			FirstName = firstname;
			LastName = lastname;
			Email = email;
		}

		public User(string username, string password, string firstname, string lastname, string email) {
			Username = username;
			Password = password;
			FirstName = firstname;
			LastName = lastname;
			Email = email;
		}
	}


}

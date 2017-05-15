﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contacts_App_API.Model;

namespace Contacts_App_API.Repository
{
    public class UserRepository : IUserRepository
    {

		private readonly DatabaseContext _context;

		public UserRepository(DatabaseContext context)
		{
			_context = context;
			var user = new User("admin", "admin", "Admin", "Admin", "admin.admin@saimia.fi");
			if (FindByUsername(user.Username) == null)
			{
				_context.User.Add(user);
				_context.SaveChanges();
			}
		}

		public User FindByUsername(string username)
		{
			return _context.User.FirstOrDefault(u => u.Username == username);
		}

		public User FindByUsernameAndPassword(string username, string password)
		{
			return _context.User.FirstOrDefault(u => u.Username == username && u.Password == password);
		}

	}
}

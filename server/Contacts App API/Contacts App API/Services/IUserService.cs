using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contacts_App_API.Model;

namespace Contacts_App_API.Services
{
    public interface IUserService
    {
		User FindUserByUsername(string username);
		User FindUserByUsernameAndPassword(string username, string password);
	}
}

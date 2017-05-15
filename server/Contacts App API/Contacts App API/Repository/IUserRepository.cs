using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contacts_App_API.Model;

namespace Contacts_App_API.Repository
{
    public interface IUserRepository
    {
		User FindByUsername(string username);
		User FindByUsernameAndPassword(string username, string password);
    }
}

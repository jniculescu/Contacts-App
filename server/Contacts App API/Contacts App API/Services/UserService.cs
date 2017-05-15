using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contacts_App_API.Model;
using Contacts_App_API.Repository;

namespace Contacts_App_API.Services
{
    public class UserService : IUserService
    {
		private readonly IUserRepository _userRepository;

		public UserService(IUserRepository userRepository)
		{
			_userRepository = userRepository;
		}

		public User FindUserByUsername(string username)
		{
			return _userRepository.FindByUsername(username);
		}

		public User FindUserByUsernameAndPassword(string username, string password)
		{
			return _userRepository.FindByUsernameAndPassword(username, password);
		}

	}
}

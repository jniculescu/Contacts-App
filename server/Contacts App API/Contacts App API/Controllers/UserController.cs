using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Contacts_App_API.Services;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Contacts_App_API.Controllers
{

		[Route("api/user")]
		[Authorize("Bearer")]
		public class UserController : Controller
		{
			private readonly IUserService _userService;

			public UserController(IUserService userService)
			{
				_userService = userService;
			}

		[HttpPut]
		public IActionResult Login()
		{
				var user = _userService.FindUserByUsername(User.Identity.Name);
				return new JsonResult(user);
		}
	}
}


using Contacts_App_API.Services;
using Contacts_App_API.Controllers.Communication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Security.Principal;
using System.IdentityModel.Tokens.Jwt;
using Contacts_App_API.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using Contacts_App_API.Model;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Contacts_App_API.Controllers

{
    [Route("api/authenticate")]
    public class AuthController : Controller
    {
		private readonly IUserService _userService;

		public AuthController(IUserService userService) {
			_userService = userService;
		}

        // POST api/values
        [HttpPost]
        public IActionResult Authenticate([FromBody]AuthRequest authRequest)
        {
			var user = _userService.FindUserByUsernameAndPassword(authRequest.Username, authRequest.Password);
			if (user != null)
			{
				var requestAt = DateTime.Now;
				var expiresIn = requestAt + TokenAuthOption.ExpiresSpan;
				var token = GenerateToken(user, expiresIn);
				return new JsonResult(token);
			}
			else
			{
				return new UnauthorizedResult();
			}

        }

		private string GenerateToken(User user, DateTime expires)
		{
			var handler = new JwtSecurityTokenHandler();

			ClaimsIdentity identity = new ClaimsIdentity(
				new GenericIdentity(user.Username, "TokenAuth"),
				new[] {
					new Claim("ID", user.Id.ToString())
				}
			);

			var securityToken = handler.CreateToken(new SecurityTokenDescriptor
			{
				Issuer = TokenAuthOption.Issuer,
				Audience = TokenAuthOption.Audience,
				SigningCredentials = TokenAuthOption.SigningCredentials,
				Subject = identity,
				Expires = expires
			});
			return handler.WriteToken(securityToken);
		}

	}
}

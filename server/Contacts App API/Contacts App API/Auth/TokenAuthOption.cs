using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;
using Contacts_App_API.Model;


namespace Contacts_App_API.Auth
{
    public class TokenAuthOption
    {
		public static string Audience { get; } = "ekoodi";
		public static string Issuer { get; } = "ekoodi";
		public static RsaSecurityKey Key { get; } = new RsaSecurityKey(RSAKeyHelper.GenerateKey());
		public static SigningCredentials SigningCredentials { get; } = new SigningCredentials(Key, SecurityAlgorithms.RsaSha256Signature);
		public static TimeSpan ExpiresSpan { get; } = TimeSpan.FromMinutes(40);
		public static string TokenType { get; } = "Bearer";
	}
}

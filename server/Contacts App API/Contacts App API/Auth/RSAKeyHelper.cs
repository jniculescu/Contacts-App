﻿using System.Security.Cryptography;

namespace Contacts_App_API.Auth
{
	public class RSAKeyHelper
	{
		public static RSAParameters GenerateKey()
		{
			using (var key = new RSACryptoServiceProvider(2048))
			{
				return key.ExportParameters(true);
			}
		}
	}
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contacts_App_API.Model
{
    public class Contact
    {
		//apu jos on eri muuttujan nimi clientissä ja serverissä [JsonProperty("iid")] ekaks
		private int _id;
		private string _firstName;
		private string _lastName;
		private string _phoneNum;
		private string _address;
		private string _city;

		public Contact(int id, string firstName, string lastName, string phoneNum, string address, string city)
		{
			_id = id;
			_firstName = firstName;
			_lastName = lastName;
			_phoneNum = phoneNum;
			_address = address;
			_city = city;
		}

		public int Id
		{
			get { return _id; }
			set { _id = value; }
		}

		public string FirstName
		{
			get { return _firstName; }
			set { _firstName = value; }
		}
		public string LastName
		{
			get { return _lastName; }
			set { _lastName = value; }
		}

		public string PhoneNum
		{
			get { return _phoneNum; }
			set { _phoneNum = value; }
		}

		public string Address
		{
			get { return _address; }
			set { _address = value; }
		}

		public string City
		{
			get { return _city; }
			set { _city = value; }
		}
	}
}

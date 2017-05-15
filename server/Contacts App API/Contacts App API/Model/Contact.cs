using System.ComponentModel.DataAnnotations;

namespace Contacts_App_API.Model
{
    public class Contact
    {
		//apu jos on eri muuttujan nimi clientissä ja serverissä [JsonProperty("iid")] ekaks
		[Key]
		public int Id {get; set;}
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string PhoneNum { get; set; }
		public string Address { get; set; }
		public string City { get; set; }

		public Contact() { }

		public Contact(int id, string firstName, string lastName, string phoneNum, string address, string city)
		{
			Id = id;
			FirstName = firstName;
			LastName = lastName;
			PhoneNum = phoneNum;
			Address = address;
			City = city;
		}
	}
}

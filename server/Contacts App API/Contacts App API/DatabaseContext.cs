using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Contacts_App_API.Model;

namespace Contacts_App_API
{
	public class DatabaseContext : DbContext
	{
		public DatabaseContext(DbContextOptions<DatabaseContext> options)
			: base(options) { }

		public DbSet<Contact> Contacts { get; set; }
		public DbSet<User> User { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder) {
			modelBuilder.Entity<Contact>().ToTable("Contact");
			modelBuilder.Entity<User>().ToTable("User");
		}

	}
}

using System;
using Contacts_App_API.Repository;
using Contacts_App_API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Contacts_App_API.Auth;

namespace Contacts_App_API
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
        {
			services.AddDbContext<DatabaseContext>(options => {
				options.UseSqlServer(Configuration.GetConnectionString("DatabaseConnection"));
			});

			services.AddApplicationInsightsTelemetry(Configuration);

			services.AddAuthorization(auth =>
			{
				auth.AddPolicy("Bearer", new AuthorizationPolicyBuilder()
					.AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
					.RequireAuthenticatedUser()
					.Build());
			});

			services.AddScoped<IContactService, ContactService>();
			services.AddScoped<IContactRepository, ContactRepository>();
			services.AddScoped<IUserRepository, UserRepository>();
			services.AddScoped<IUserService, UserService>();
			services.AddCors(o => o.AddPolicy("DevPolicy", builder =>
			{
				builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
			}));

			// Add framework services.
			services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
			var context = app.ApplicationServices.GetService<DatabaseContext>();
			if (context.Database.EnsureCreated())
				context.Database.Migrate();

			loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
			app.UseCors("DevPolicy");

			app.UseJwtBearerAuthentication(new JwtBearerOptions()
			{
				TokenValidationParameters = new TokenValidationParameters()
				{
						IssuerSigningKey = TokenAuthOption.Key,
						ValidAudience = TokenAuthOption.Audience,
						ValidIssuer = TokenAuthOption.Issuer,
						ValidateIssuerSigningKey = true,
						ValidateLifetime = true,
						ClockSkew = TimeSpan.FromMinutes(0)
					}
			});

			app.UseMvc();
		}
    }
}

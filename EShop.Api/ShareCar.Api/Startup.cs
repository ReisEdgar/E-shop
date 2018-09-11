using System;
using System.Text;
using Autofac.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using EShop.Api.DI;
using EShop.Api.Middleware;
using EShop.Db;
using EShop.Db.Entities;
using EShop.Dto.Identity;
using AutoMapper;
using EShop.Logic;
using EShop.Dto.Identity.Facebook;

namespace Eshop.Api
{
    public class Startup
    {
        private readonly SymmetricSecurityKey _signingKey;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration.GetValue<string>("JwtSecretKey")));
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"))
            );

            services.AddCors(options => options.AddPolicy("CorsPolicy",
                builder =>
                {
                    builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials();
                }));

            ConfigureAuthentication(services);
            services.AddMvc();
            services.AddAutoMapper();

            var applicationContainer = Bootstrapper.AddRegistrationsToDIContainer(services);

            return new AutofacServiceProvider(applicationContainer);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Automatic migrations 
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                serviceScope.ServiceProvider.GetService<ApplicationDbContext>().Database.Migrate();
            }

            app.UseMiddleware<JwtInHeaderMiddleware>();
            app.UseCors("CorsPolicy");
            app.UseAuthentication();
            app.UseMvc();
        }

        private void ConfigureAuthentication(IServiceCollection services)
        {
            var jwtAppSettingOptions = ConfigureSettings(services);

            AddAuthentication(services, jwtAppSettingOptions);

            AddIdentity(services);
        }

        private IConfigurationSection ConfigureSettings(IServiceCollection services)
        {
            // Register the ConfigurationBuilder instance of FacebookAuthSettings
            services.Configure<FacebookAuthSettings>(Configuration.GetSection(nameof(FacebookAuthSettings)));

            // jwt wire up
            // Get options from app settings
            var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));

            // Configure JwtIssuerOptions
            services.Configure<JwtIssuerOptions>(options =>
            {
                options.Issuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
                options.RoleClaimName = jwtAppSettingOptions[nameof(JwtIssuerOptions.RoleClaimName)];
                options.RoleClaimValue = jwtAppSettingOptions[nameof(JwtIssuerOptions.RoleClaimValue)];
                options.IdClaimName = jwtAppSettingOptions[nameof(JwtIssuerOptions.IdClaimName)];
                options.Audience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)];
                options.SigningCredentials = new SigningCredentials(_signingKey, SecurityAlgorithms.HmacSha256);
            });

            services.Configure<IdentityOptions>(options =>
                options.ClaimsIdentity.UserIdClaimType = jwtAppSettingOptions[nameof(JwtIssuerOptions.IdClaimName)]
            );

            return jwtAppSettingOptions;
        }

        private static void AddIdentity(IServiceCollection services)
        {
            var builder = services.AddIdentityCore<User>(o =>
            {
                // configure identity options
                o.Password.RequireDigit = false;
                o.Password.RequireLowercase = false;
                o.Password.RequireUppercase = false;
                o.Password.RequireNonAlphanumeric = false;
                o.Password.RequiredLength = 6;
            });
            builder = new IdentityBuilder(builder.UserType, typeof(IdentityRole), builder.Services);
            builder.AddEntityFrameworkStores<ApplicationDbContext>().AddDefaultTokenProviders();
        }

        private void AddAuthentication(IServiceCollection services, IConfigurationSection jwtAppSettingOptions)
        {
            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)],

                ValidateAudience = true,
                ValidAudience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)],

                ValidateIssuerSigningKey = true,
                IssuerSigningKey = _signingKey,

                RequireExpirationTime = false,
                ValidateLifetime = false,
                ClockSkew = TimeSpan.Zero
            };

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(configureOptions =>
            {
                configureOptions.ClaimsIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
                configureOptions.TokenValidationParameters = tokenValidationParameters;
                configureOptions.SaveToken = true;
            });

            // api user claim policy
            services.AddAuthorization(options =>
            {
                options.AddPolicy("ApiUser",
                    policy => policy.RequireClaim(jwtAppSettingOptions[nameof(JwtIssuerOptions.RoleClaimName)],
                        jwtAppSettingOptions[nameof(JwtIssuerOptions.RoleClaimValue)]));
            });
        }
    }
}

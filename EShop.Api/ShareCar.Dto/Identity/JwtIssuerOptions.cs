using System;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;

namespace ShareCar.Dto.Identity
{
    public class JwtIssuerOptions
    {
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public DateTime Expiration => IssuedAt.Add(ValidFor);
        public DateTime NotBefore => DateTime.UtcNow;
        public DateTime IssuedAt => DateTime.UtcNow;
        public string RoleClaimName { get; set; }
        public string IdClaimName { get; set; }
        public string RoleClaimValue { get; set; }
        public TimeSpan ValidFor { get; set; } = TimeSpan.FromMinutes(120);
        public Func<Task<string>> JtiGenerator => () => Task.FromResult(Guid.NewGuid().ToString());
        public SigningCredentials SigningCredentials { get; set; }
    }
}
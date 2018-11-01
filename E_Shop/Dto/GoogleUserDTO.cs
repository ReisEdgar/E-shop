using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Dto
{
    public class GoogleUserDto
    {
        public string iss { get; set; }
        public string sub { get; set; }
        public string azp { get; set; }
        public string aud { get; set; }
        public string iat { get; set; }
        public string exp { get; set; }

        public string Email { get; set; }
        public bool Email_verified { get; set; }
        public string Name { get; set; }
        public string Picture { get; set; }
        public string Given_name { get; set; }
        public string Family_name { get; set; }
        public string Locale { get; set; }
    } 
}

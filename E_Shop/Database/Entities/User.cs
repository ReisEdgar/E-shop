using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Database.Entities
{
    public class User
    {
        public int Id { get; set; }
        public long GoogleId { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Picture { get; set; }
    }

    public enum UserRole
    {
        GUEST,
        USER,
        FORUM_ADMIN,
        ADMIN
    }
}

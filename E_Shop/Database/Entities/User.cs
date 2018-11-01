﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Database.Entities
{
    public class User
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string Picture { get; set; }
        public string FullName { get; set; }
        public string Nickname { get; set; }
        public UserRole Role { get; set; }
        public string Description { get; set; }
    }
    
    public enum UserRole
    {
        Guest,
        User,
        ForumAdmin,
        Admin
    }
}
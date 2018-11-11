using E_Shop.Database.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Database.Repositories.User_Repository
{
    interface IUserRepository
    {
        User GetUserById(int id);
    }
}

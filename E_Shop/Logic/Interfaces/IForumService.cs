using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Shop.Dto;

namespace E_Shop.Logic.Interfaces
{
    public interface IForumService
    {
        void AddForum(ForumDto forum);
        void DeleteForum(int id);
        ForumDto GetForumById(int id);
    }
}

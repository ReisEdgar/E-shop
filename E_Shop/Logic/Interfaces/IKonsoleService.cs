using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Shop.Dto;

namespace E_Shop.Logic.Interfaces
{
    public interface IKonsoleService
    {
        void AddKonsole(KonsoleDto konsole);
        void DeleteKonsole(int id);
        KonsoleDto GetKonsoleById(int id);
    }
}

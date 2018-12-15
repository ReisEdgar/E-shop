using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Shop.Dto;

namespace E_Shop.Logic.Interfaces
{
    public interface IZaidimaiService
    {
        void AddZaidimai(ZaidimaiDto zaidimai);
        void DeleteZaidimai(int id);
        ZaidimaiDto GetZaidimaiById(int id);
    }
}

using E_Shop.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Logic.Interfaces
{
    public interface IgamesService
    {
        void EditgamesItem(gamesDto gamesIteam);
        gamesDto GetgamesItemById(int id);
        List<gamesDto> Getgames();
        void Deletegames(int id);

    }
}

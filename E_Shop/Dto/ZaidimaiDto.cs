using System;
using E_Shop.Database.Entities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Dto
{
    public class ZaidimaiDto
    {
        public int Id { get; set; }
        public String name { get; set; }
        public String Text { get; set; }
        public String AuthorID { get; set; }
        public GameCategory category { get; set; }
    }

    public enum GameCategory
    {
        ACTION,
        Adventure,
        Role_playing,
        Simulation,
        Strategy,
        Sports
    }
}

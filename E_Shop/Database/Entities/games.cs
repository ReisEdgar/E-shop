using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Database.Entities
{
    public class games
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public double price { get; set; }
        public string location { get; set; }
        public GameCategory Gamecategory { get; set; }
        public string phonenumber { get; set; }
        public int quantity { get; set; }

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


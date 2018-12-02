using E_Shop.Database.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Dto
{
    public class gamesDto
    {
        public int? Id;
        public string name { get; set; }
        public string description { get; set; }
        public double price { get; set; }
        public string location { get; set; }
        public GameCategory Gamecategory { get; set; }
        public string phonenumber { get; set; }
        public int quantity { get; set; }

    }
}

using System;
using E_Shop.Database.Entities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Dto
{
    public class KonsoleDto
    {
        public int Id { get; set; }
        public String name { get; set; }
        public String Text { get; set; }
        public String AuthorID { get; set; }
        public String model { get; set; }
        public ConsoleMaker Category { get; set; }
    }

    public enum ConsoleMaker
    {
        Playstation,
        Microsoft,
        Nintendo
    }
}

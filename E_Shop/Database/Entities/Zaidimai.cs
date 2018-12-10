using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Database.Entities
{
    public class Zaidimai
    {
        public int Id { get; set; }
        public String name { get; set; }
        [Required]
        [StringLength(500)]
        public String Text { get; set; }
        public String AuthorID { get; set; }
        public GameCategory category { get; set; }

        [ForeignKey("AuthorID")]
        public virtual User Author { get; set; }
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


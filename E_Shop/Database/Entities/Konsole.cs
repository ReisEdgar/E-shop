﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Database.Entities
{
    public class Konsole
    {
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public String name { get; set; }
        [StringLength(500)]
        public String Text { get; set; }
        public String AuthorID { get; set; }
        public String model { get; set; }
        public ConsoleMaker Category { get; set; }

        [ForeignKey("AuthorID")]
        public virtual User Author { get; set; }
    }


    public enum ConsoleMaker
    {
        Playstation,
        Microsoft,
        Nintendo
    }
}


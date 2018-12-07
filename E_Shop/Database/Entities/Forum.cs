﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Database.Entities
{
    public class Forum
    {

        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public String Title { get; set; }
        [StringLength(50)]
        public String Text { get; set; }
        [Required]
        public String Link { get; set; }
        [Required]
        public int CategoryID { get; set; }

        public virtual ICollection<Post> Posts { get; set; }
    }
}

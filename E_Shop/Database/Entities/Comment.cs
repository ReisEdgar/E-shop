using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace E_Shop.Database.Entities
{
    public class Comment
    {
        public int ID { get; set; }
        [Required]
        [StringLength(500)]
        public String Text { get; set; }
        public DateTime Date { get; set; }

        [Required]
        [ForeignKey("PostID")]
        public virtual Post Post { get; set; }
        [ForeignKey("AuthorID")]
        public virtual User Author { get; set; }
    }
}

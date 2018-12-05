using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Shop.Database.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace E_Shop.Database.Entities
{
    public class Post
    {
        public int Id { get; set; }
        public PostCategory Category { get; set; }
        [Required]
        [StringLength(50)]
        public String Title { get; set; }
        [StringLength(500)]
        public String Text { get; set; }
        public DateTime PublishingDate { get; set; }
        public bool Edited { get; set; }
        public DateTime EditedDate { get; set; }

        [ForeignKey("AuthorID")]
        public virtual User Author { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }

        public enum PostCategory
        {
            PC_GAMES,
            CONSOLE_GAMES,
            TECH,
            OTHER
        }
    }

}

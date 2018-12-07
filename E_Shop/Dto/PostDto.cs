using System;
using E_Shop.Database.Entities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Dto
{
    public class PostDto
    {
        public int Id { get; set; }
        public PostCategory Category { get; set; }
        public String Title { get; set; }
        public String Text { get; set; }
        public String AuthorID { get; set; }
        public int ForumID { get; set; }
        public DateTime PublishingDate { get; set; }
        public bool Edited { get; set; }
        public DateTime EditedDate { get; set; }

        public enum PostCategory
        {
            PC_GAMES,
            CONSOLE_GAMES,
            TECH,
            OTHER
        }
    }
}

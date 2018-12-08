using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Dto
{
    public class CommentDto
    {
        public int ID { get; set; }
        public String Text { get; set; }
        public DateTime Date { get; set; }
        public String AuthorID { get; set; }
        public int PostID { get; set; }

    }
}

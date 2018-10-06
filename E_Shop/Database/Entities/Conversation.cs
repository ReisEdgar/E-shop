using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Database.Entities
{
    public class Conversation
    {
        public int Id { get; set; }
        public string Participant1 { get; set; }
        public string Participant2 { get; set; }

    }
}

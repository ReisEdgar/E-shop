using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Dto
{
    public class AdminMessageResponse
    {
        public MessageDto AdminMessage { get; set; }
        public int UserMessageId { get; set; }
    }
}

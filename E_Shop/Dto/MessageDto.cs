using E_Shop.Database.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Dto
{
    public class MessageDto
    {
        public int Id { get; set; }
        public MessageType MessageType { get; set; }
        public string Text { get; set; }
        public string SenderEmail { get; set; }
        public string SenderId { get; set; }
        public string ReceiverEmail { get; set; }
        public bool Seen { get; set; }
        public DateTime SendingDateTime { get; set; }

    }
    /*
    public enum MessageType
    {
        USER_TO_USER,
        USER_TO_ADMIN_STANDART,
        USER_TO_ADMIN_BROKEN_ITEM,
        ADMIN_TO_USER

    }*/
}


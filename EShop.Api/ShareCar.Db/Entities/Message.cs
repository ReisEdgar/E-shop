using ShareCar.Db.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace EShop.Db.Entities
{
    class Message
    {
        public MessageType MessageType { get; set; }
        public string Text;
        public User Sender;
        public User Receiver;
    }

    internal enum MessageType {
        USER_TO_USER,
        USER_TO_ADMIN_STANDART,
        USER_TO_ADMIN_BROKEN_ITEM,
        ADMIN_TO_USER

    }





















































































































































    }

}

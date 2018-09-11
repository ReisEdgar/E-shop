using EShop.Dto.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace EShop.Dto
{
    public class MessageDto
    {
        public MessageType MessageType { get; set; }
        public string Text;
        public UserDto Sender;
        public UserDto Receiver;
    }

    public enum MessageType
    {
        USER_TO_USER,
        USER_TO_ADMIN_STANDART,
        USER_TO_ADMIN_BROKEN_ITEM,
        ADMIN_TO_USER

    }
}

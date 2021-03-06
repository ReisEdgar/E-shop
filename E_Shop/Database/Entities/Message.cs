﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Database.Entities
{
    public class Message
    {
        public int Id { get; set; }
        public MessageType MessageType { get; set; }
        public string Text { get; set; }
        public string Sender { get; set; }
        public string Receiver { get; set; }
        public bool Seen { get; set; }
        }

        public enum MessageType
        {
            USER_TO_USER,
            USER_TO_ADMIN_STANDART,
            USER_TO_ADMIN_BROKEN_ITEM,
            ADMIN_TO_USER

        }
    }


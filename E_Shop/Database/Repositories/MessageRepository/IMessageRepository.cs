using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Database.Repositories.MessageRepository
{
    interface IMessageRepository
    {
         void AddMessage();
         void DeleteMessage();
         void GetMessagesByConversation(int conversationId);

    }
}

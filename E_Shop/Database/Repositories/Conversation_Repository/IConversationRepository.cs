using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Database.Repositories.ConversationRepository
{
    public interface IConversationRepository
    {
        void CreateConversation(string user1, string user2);
        bool CheckIfConversationExists(int conversationId);
        
        
        
        

        

    }
}

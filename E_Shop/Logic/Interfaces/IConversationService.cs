using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Logic.Interfaces
{
    public interface IConversationService
    {
        bool DoesUserBelongsToThisConversation(string userId);
        int GetConversationIdByParticipants(string participant1, string participant2);

    }
}

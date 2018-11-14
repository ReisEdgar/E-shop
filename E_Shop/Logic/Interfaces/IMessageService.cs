using E_Shop.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Logic.Interfaces
{
    public interface IMessageService
    {
        void AddMessage(MessageDto message);
        void AdminResponse(AdminMessageResponse response);
        void DeleteMessage(int id);
        MessageDto GetMessageById(int id);
        List<MessageDto> GetMessagesByConversation(string user1, string user2);
        List<MessageDto> GetAdminMessages();

    }
}

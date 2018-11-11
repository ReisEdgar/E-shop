using AutoMapper;
using E_Shop.Database;
using E_Shop.Database.Entities;
using E_Shop.Logic.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Logic
{
    public class ConversationService : IConversationService
    {
        private readonly DatabaseContext _context;
        private readonly IMapper _mapper;

        public ConversationService(IMapper mapper, DatabaseContext context)
        {
            _context = context;
            _mapper = mapper;
        }

        public bool DoesUserBelongsToThisConversation(string userId)
        {
            throw new NotImplementedException();
        }

        public int GetConversationIdByParticipants(string participant1, string participant2)
        {
            var result = _context.Conversations.FirstOrDefault(x => ((x.User1 == participant1 || x.User2 == participant1) && (x.User1 == participant2 || x.User2 == participant2)));
       if(result != null)
            {
                return result.Id;
            }
       else
            {
              var response =  _context.Add(new Conversation { User1 = participant1, User2 = participant2 });
                return response.Entity.Id;
            }
                }
    }
}

using AutoMapper;
using E_Shop.Database;
using E_Shop.Database.Entities;
using E_Shop.Dto;
using E_Shop.Logic.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Logic
{
    public class MessageService : IMessageService
    {
        private readonly DatabaseContext _context;
        private readonly IMapper _mapper;
        private readonly IConversationService _converstaionService;

        public MessageService(DatabaseContext context, IMapper mapper, IConversationService converstaionService)
        {
            _context = context;
            _mapper = mapper;
            _converstaionService = converstaionService;
        }

        public void AddMessage(MessageDto message)
        {
            var toAdd = _mapper.Map<MessageDto, Message>(message);

            toAdd.ConversationId = _converstaionService.GetConversationIdByParticipants(message.Sender, message.Receiver);

            _context.Messages.Add(toAdd);
            _context.SaveChanges();
        }

        public void DeleteMessage(int id)
        {
            var result = _context.Messages.FirstOrDefault(x => x.Id == id);
            _context.Messages.Remove(result);
            _context.SaveChanges();
        }

        public List<MessageDto> GetAdminMessages()
        {
            return _mapper.Map<List<Message>, List<MessageDto>>(_context.Messages.Where(x => (x.MessageType == Database.Entities.MessageType.USER_TO_ADMIN_BROKEN_ITEM || x.MessageType == Database.Entities.MessageType.USER_TO_ADMIN_STANDART)).OrderByDescending(x => x.SendingDateTime).ToList());
        }

        public MessageDto GetMessageById(int id)
        {
           return _mapper.Map<Message, MessageDto>(_context.Messages.FirstOrDefault(x => x.Id == id));
        }

        public List<MessageDto> GetMessagesByConversation(string user1, string user2)
        {
            int conversationId = _converstaionService.GetConversationIdByParticipants(user1, user2);

            return _mapper.Map<List<Message>, List<MessageDto>>(_context.Messages.Where(x => x.ConversationId == conversationId).OrderBy(x => x.SendingDateTime).ToList());
        }


    }
}

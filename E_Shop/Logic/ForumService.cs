using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using E_Shop.Database;
using E_Shop.Database.Entities;
using E_Shop.Dto;
using E_Shop.Logic.Interfaces;

namespace E_Shop.Logic
{
    public class ForumService : IForumService
    {
        private readonly DatabaseContext _context;
        private readonly IMapper _mapper;

        public ForumService(IMapper mapper, DatabaseContext context)
        {
            _context = context;
            _mapper = mapper;
        }

        public void AddForum(ForumDto forum)
        {
            var toAdd = _mapper.Map<ForumDto, Forum>(forum);
            /*if (toAdd.MessageType != MessageType.USER_TO_ADMIN_STANDART && toAdd.MessageType != MessageType.USER_TO_ADMIN_BROKEN_ITEM)
            {
                toAdd.ConversationId = _converstaionService.GetConversationIdByParticipants(message.SenderEmail, message.ReceiverEmail);
            }*/
            _context.Forums.Add(toAdd);
            _context.SaveChanges();
        }

        public void DeleteForum(int id)
        {
            var result = _context.Forums.FirstOrDefault(x => x.Id == id);
            _context.Forums.Remove(result);
            _context.SaveChanges();
        }

        public ForumDto GetForumById(int id)
        {
            return _mapper.Map<Forum, ForumDto>(_context.Forums.FirstOrDefault(x => x.Id == id));
        }

        public void CreateForum()
        {
            
        }
    }
}

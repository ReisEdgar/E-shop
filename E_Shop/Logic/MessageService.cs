using AutoMapper;
using E_Shop.Database;
using E_Shop.Database.Entities;
using E_Shop.Dto;
using E_Shop.Logic.Interfaces;
using Microsoft.EntityFrameworkCore;
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
            if (toAdd.MessageType != MessageType.USER_TO_ADMIN_STANDART && toAdd.MessageType != MessageType.USER_TO_ADMIN_BROKEN_ITEM)
            {
                toAdd.ConversationId = _converstaionService.GetConversationIdByParticipants(message.SenderEmail, message.ReceiverEmail);
            }
            toAdd.SendingDateTime = DateTime.Now;
            _context.Messages.Add(toAdd);
            _context.SaveChanges();
        }

        public void AdminResponse(AdminMessageResponse response)
        {
            var userMessage = _context.Messages.Include(x => x.Sender).FirstOrDefault(x => x.Id == response.UserMessageId);
            userMessage.MessageType = MessageType.USER_TO_USER;
            var toAdd = _mapper.Map<MessageDto, Message>(response.AdminMessage);
            toAdd.ConversationId = _converstaionService.GetConversationIdByParticipants(response.AdminMessage.SenderEmail, userMessage.Sender.Email);

            userMessage.ConversationId = toAdd.ConversationId;
            userMessage.SendingDateTime = DateTime.Now;
            toAdd.SendingDateTime = DateTime.Now;

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
            var resp = (_context.Messages.Include(x => x.Sender).Where(x => (x.MessageType == MessageType.USER_TO_ADMIN_BROKEN_ITEM || x.MessageType == MessageType.USER_TO_ADMIN_STANDART)).OrderByDescending(x => x.SendingDateTime).ToList());
            var dtoResp = _mapper.Map<List<Message>, List<MessageDto>>(resp);

            for(int i = 0; i < resp.Count; i++)
            {
                dtoResp[i].SenderEmail = resp[i].Sender.Email;
            }

            dtoResp = MergeSort(dtoResp);

            return dtoResp;
        }

        public MessageDto GetMessageById(int id)
        {
           return _mapper.Map<Message, MessageDto>(_context.Messages.FirstOrDefault(x => x.Id == id));
        }

        public List<MessageDto> GetMessagesByConversation(string user1, string user2)
        {
            int conversationId = _converstaionService.GetConversationIdByParticipants(user1, user2);

            return _mapper.Map<List<Message>, List<MessageDto>>(_context.Messages.Include(x => x.Sender).Where(x => x.ConversationId == conversationId).OrderBy(x => x.SendingDateTime).ToList());
        }

        private static List<MessageDto> MergeSort(List<MessageDto> unsorted)
        {
            if (unsorted.Count <= 1)
                return unsorted;

            List<MessageDto> left = new List<MessageDto>();
            List<MessageDto> right = new List<MessageDto>();

            int middle = unsorted.Count / 2;
            for (int i = 0; i < middle; i++)  //Dividing the unsorted list
            {
                left.Add(unsorted[i]);
            }
            for (int i = middle; i < unsorted.Count; i++)
            {
                right.Add(unsorted[i]);
            }

            left = MergeSort(left);
            right = MergeSort(right);
            return Merge(left, right);
        }

        private static List<MessageDto> Merge(List<MessageDto> left, List<MessageDto> right)
        {
            List<MessageDto> result = new List<MessageDto>();

            while (left.Count > 0 || right.Count > 0)
            {
                if (left.Count > 0 && right.Count > 0)
                {
                    if (left.First().SendingDateTime >= right.First().SendingDateTime)  //Comparing First two elements to see which is smaller
                    {
                        result.Add(left.First());
                        left.Remove(left.First());      //Rest of the list minus the first element
                    }
                    else
                    {
                        result.Add(right.First());
                        right.Remove(right.First());
                    }
                }
                else if (left.Count > 0)
                {
                    result.Add(left.First());
                    left.Remove(left.First());
                }
                else if (right.Count > 0)
                {
                    result.Add(right.First());

                    right.Remove(right.First());
                }
            }
            return result;
        }
    }

}

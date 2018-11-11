using AutoMapper;
using E_Shop.Dto;
using E_Shop.Database.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Logic
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Message, MessageDto>();
            CreateMap<MessageDto, Message>();

            CreateMap<Hardware, HardwareDto>();
            CreateMap<HardwareDto, Hardware>();

            CreateMap<Conversation, ConversationDto>();
            CreateMap<ConversationDto, Conversation>();

        }
    }
}

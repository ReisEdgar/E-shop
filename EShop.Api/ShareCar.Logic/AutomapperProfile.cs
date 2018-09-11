using AutoMapper;
using EShop.Db.Entities;
using EShop.Dto;

namespace EShop.Logic
{

        public class AutomapperProfile : Profile
        {
            public AutomapperProfile()
            {
                CreateMap<Message, MessageDto>();
                CreateMap<MessageDto, Message>();
            CreateMap<RepairingHardware, RepairingHardwareDto>();
            CreateMap<RepairingHardwareDto, RepairingHardware>();
        }
        }
    
}

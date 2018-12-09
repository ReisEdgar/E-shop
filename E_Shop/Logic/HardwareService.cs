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
    public class HardwareService : IHardwareService
    {
        private readonly IMapper _mapper;
        private readonly DatabaseContext _context;

        public HardwareService(IMapper mapper, DatabaseContext databaseContext)
        {
            _mapper = mapper;
            _context = databaseContext;
        }

        public void DeleteHardware(int id)
        {
            var result = _context.HardwareRecords.FirstOrDefault(x => x.Id == id);          
            _context.Remove(result);
            _context.SaveChanges();
        }

        public void EditHardwareItem(HardwareDto hardwareItem)
        {
            var stringParts = hardwareItem.StartDate.Split("-");

            if (hardwareItem.Id.HasValue)
            {
                var result = _context.HardwareRecords.FirstOrDefault(x => x.Id == hardwareItem.Id);
                result.Owner = hardwareItem.Owner;

                result.StartDate = new DateTime(int.Parse(stringParts[0]), int.Parse(stringParts[1]), int.Parse(stringParts[2]));
              
                //  result.EndDate = hardwareItem.EndDate;
                result.Category =hardwareItem.Category;
                result.Status = hardwareItem.Status;
                result.AdditionalMessage = hardwareItem.AdditionalMessage;
            }
            else
            {
                var entityHardware = _mapper.Map<HardwareDto, Hardware>(hardwareItem);
                entityHardware.StartDate = new DateTime(int.Parse(stringParts[0]), int.Parse(stringParts[1]), int.Parse(stringParts[2]));
                _context.Add(entityHardware);
            }
            _context.SaveChanges();
        }

        public List<HardwareDto> GetHardware()
        {
            var result = _context.HardwareRecords.Where(x => x.Status != Database.Entities.HardwareStatus.Sutaisyta);

            /* if(request.Owner != null)
             {
                 result = result.Where(x => x.Owner == request.Owner);
             }

             if(request.Statuses.Count > 0)
             {
                 List<Database.Entities.HardwareStatus> Statuses = _mapper.Map<List<Dto.HardwareStatus>, List<Database.Entities.HardwareStatus>>(request.Statuses);
                 result = result.Where(x => Statuses.Contains(x.HardwareStatus));
             }

             if (request.Categories.Count > 0)
             {
                 List<Database.Entities.HardwareCategory> Categories = _mapper.Map<List<Dto.HardwareCategory>, List<Database.Entities.HardwareCategory>>(request.Categories);
                 result = result.Where(x => Categories.Contains(x.HardwareCategory));
             }*/
            var entityList = result.ToList();
            var toReturn = _mapper.Map<List<Hardware>, List<HardwareDto>>(entityList);
            for(int i = 0; i < toReturn.Count; i++)
            {
                toReturn[i].StartDate = entityList[i].StartDate.ToShortDateString();
                    
            }
            return toReturn;
        }

        public List<HardwareDto> GetHardwareByUser(string owner)
        {
            var result = _context.HardwareRecords.Where(x => x.Owner == owner);

            /* if(request.Owner != null)
             {
                 result = result.Where(x => x.Owner == request.Owner);
             }

             if(request.Statuses.Count > 0)
             {
                 List<Database.Entities.HardwareStatus> Statuses = _mapper.Map<List<Dto.HardwareStatus>, List<Database.Entities.HardwareStatus>>(request.Statuses);
                 result = result.Where(x => Statuses.Contains(x.HardwareStatus));
             }

             if (request.Categories.Count > 0)
             {
                 List<Database.Entities.HardwareCategory> Categories = _mapper.Map<List<Dto.HardwareCategory>, List<Database.Entities.HardwareCategory>>(request.Categories);
                 result = result.Where(x => Categories.Contains(x.HardwareCategory));
             }*/
            var entityList = result.ToList();
            var toReturn = _mapper.Map<List<Hardware>, List<HardwareDto>>(entityList);
            for (int i = 0; i < toReturn.Count; i++)
            {
                toReturn[i].StartDate = entityList[i].StartDate.ToShortDateString();

            }
            return toReturn;
        }


        public HardwareDto GetHardwareItemById(int id)
        {
            return _mapper.Map<Hardware, HardwareDto>(_context.HardwareRecords.FirstOrDefault(x => x.Id == id));
        }
    }
}

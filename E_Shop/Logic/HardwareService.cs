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
            if (hardwareItem.Id.HasValue)
            {
                var result = _context.HardwareRecords.FirstOrDefault(x => x.Id == hardwareItem.Id);
                result.Owner = hardwareItem.Owner;
                result.StartDate = hardwareItem.StartDate;
                result.EndDate = hardwareItem.EndDate;
                result.HardwareCategory = _mapper.Map<Dto.HardwareCategory, Database.Entities.HardwareCategory>(hardwareItem.HardwareCategory);
                result.HardwareStatus = _mapper.Map<Dto.HardwareStatus, Database.Entities.HardwareStatus>(hardwareItem.HardwareStatus);
                result.AdditionalMessage = hardwareItem.AdditionalMessage;
            }
            else
            {
                _context.Add(_mapper.Map<HardwareDto, Hardware>(hardwareItem));
            }
            _context.SaveChanges();
        }

        public List<HardwareDto> GetHardware(HardwareRequestDto request)
        {
            var result = _context.HardwareRecords.AsQueryable();

            if(request.Owner != null)
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
            }
            return _mapper.Map<List<Hardware>, List<HardwareDto>>(result.ToList());
        }

        public HardwareDto GetHardwareItemById(int id)
        {
            return _mapper.Map<Hardware, HardwareDto>(_context.HardwareRecords.FirstOrDefault(x => x.Id == id));
        }
    }
}

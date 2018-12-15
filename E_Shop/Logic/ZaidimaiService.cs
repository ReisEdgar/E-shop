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
    public class ZaidimaiService : IZaidimaiService
    {
        private readonly DatabaseContext _context;
        private readonly IMapper _mapper;
        private readonly IZaidimaiService _zaidimaiService;

        public ZaidimaiService(DatabaseContext context, IMapper mapper, IZaidimaiService zaidimaiService)
        {
            _context = context;
            _mapper = mapper;
            _zaidimaiService = zaidimaiService;
        }

        public void AddZaidimai(ZaidimaiDto zaidimai)
        {
            var toAdd = _mapper.Map<ZaidimaiDto, Zaidimai>(zaidimai);

            _context.Zaidimai.Add(toAdd);
            _context.SaveChanges();
        }

        public void DeleteZaidimai(int id)
        {
            var result= _context.Zaidimai.FirstOrDefault(x => x.Id == id);

            _context.Zaidimai.Remove(result);
            _context.SaveChanges();
        }

        public ZaidimaiDto GetZaidimaiById(int id)
        {
            return _mapper.Map<Zaidimai, ZaidimaiDto>(_context.Zaidimai.FirstOrDefault(x => x.Id == id));
        }
    }
}

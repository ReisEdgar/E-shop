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
    public class KonsoleService : IKonsoleService
    {
        private readonly DatabaseContext _context;
        private readonly IMapper _mapper;
        private readonly IKonsoleService _konsoleService;

        public KonsoleService(DatabaseContext context, IMapper mapper, IKonsoleService konsoleService)
        {
            _context = context;
            _mapper = mapper;
            _konsoleService = konsoleService;
        }

        public void AddKonsole(KonsoleDto konsole)
        {
            var toAdd = _mapper.Map<KonsoleDto, Konsole>(konsole);

            _context.Konsole.Add(toAdd);
            _context.SaveChanges();
        }

        public void DeleteKonsole(int id)
        {
            var result = _context.Konsole.FirstOrDefault(x => x.Id == id);

            _context.Konsole.Remove(result);
            _context.SaveChanges();
        }

        public KonsoleDto GetKonsoleById(int id)
        {
            return _mapper.Map<Konsole, KonsoleDto>(_context.Konsole.FirstOrDefault(x => x.Id == id));
        }

    }
}

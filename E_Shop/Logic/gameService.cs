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
    public class gameService
    {
        private readonly IMapper _mapper;
        private readonly DatabaseContext _context;

        public gameService(IMapper mapper, DatabaseContext databaseContext)
        {
            _mapper = mapper;
            _context = databaseContext;
        }

        public void Deletegame(int id)
        {
            var result = _context.games.FirstOrDefault(x => x.id == id);
            _context.Remove(result);
            _context.SaveChanges();
        }

        public gamesDto GetGamesItemById(int id)           
        {
            return _mapper.Map<games, gamesDto>(_context.games.FirstOrDefault(x => x.id == id));
        }
    }
}

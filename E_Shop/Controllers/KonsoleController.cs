using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Shop.Database;
using E_Shop.Logic.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_Shop.Controllers
{
    [Produces("application/json")]
    [Route("api/Konsole")]
    public class KonsoleController : Controller
    {

        IKonsoleService _konsoleService;
        private readonly IAuthorizationService _authorizationService;
        private readonly DatabaseContext _context;

        public KonsoleController(DatabaseContext context, IAuthorizationService authorizationService)
        {
            _context = context;
            _authorizationService = authorizationService;
        }

       [HttpGet]
        public IEnumerable<Object> Get()
        {
            return _context.Konsole.Select(x => new
            {
                id = x.Id,
                x.name,
                x.Text,
                x.Author,
                x.model,
                x.Category
            }).ToList();
        }

        //Platforma
        [Route("{id:int}/Category")]
        [HttpGet("bycategory")]
        public IEnumerable<Object> GetCategory(int id)
        {
            return _context.Konsole
                .Where(p => (int)p.Category == id)
                .Select(x => new
                {
                    id = x.Id,
                    x.name,
                    x.Text,
                    x.Author,
                    x.model,
                    x.Category
                }).ToList();
        }

    }
}
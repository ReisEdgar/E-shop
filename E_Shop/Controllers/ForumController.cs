using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Shop.Database;
using E_Shop.Logic;
using E_Shop.Logic.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_Shop.Controllers
{
    [Produces("application/json")]
    [Route("api/Forum")]
    public class ForumController : Controller
    {
        private readonly DatabaseContext _context;

        public ForumController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Object> Get(int count = 4)
        {
            return _context.Forums
            .Select(x => new
            {
                id = x.Id,
                x.Title,
                x.Link
            })
            .Take(count);

        }
    }
}
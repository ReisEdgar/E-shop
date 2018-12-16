using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_Shop.Database;
using E_Shop.Database.Entities;
using E_Shop.Dto;
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

        [HttpPost("Add")]
        public async Task<IActionResult> AddKonsole([FromBody] KonsoleDto konsole)
        {
            var user = await _authorizationService.GetUserByTokenFromRequest(Request);

            Konsole kkKonsole = new Konsole();
            kkKonsole.name = konsole.name;
            kkKonsole.Text = konsole.Text;
            kkKonsole.AuthorID = user.Id;
            kkKonsole.model = konsole.model;
            kkKonsole.Category = konsole.Category;



            _context.Add(kkKonsole);
            _context.SaveChanges();
            return Ok("Added");
        }



        [HttpDelete("Delete")]
        public async Task<IActionResult> DeleteZaidimai([FromBody]KonsoleDto konsole)
        {
            var user = await _authorizationService.GetUserByTokenFromRequest(Request);

            /*if (user.Id != post.AuthorID)
            {
                return Unauthorized();
            }*/

            Konsole deleteKonsole = _context.Konsole.Where(x => x.Id == konsole.Id).FirstOrDefault();

            _context.Konsole.Remove(deleteKonsole);
            _context.SaveChanges();

            return Ok("deleted");
        }

    }
}
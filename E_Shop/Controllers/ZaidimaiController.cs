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
//using GameCategory = E_Shop.Dto.GameCategory;

namespace E_Shop.Controllers
{
    [Produces("application/json")]
    [Route("api/Zaidimai")]
    public class ZaidimaiController : Controller
    {
        IZaidimaiService _zaidimaiService;
        private readonly IAuthorizationService _authorizationService;
        private readonly DatabaseContext _context;

        public ZaidimaiController(DatabaseContext context, IAuthorizationService authorizationService)
        {
            _context = context;
            _authorizationService = authorizationService;
        }

        [HttpGet]
        public IEnumerable<Object> Get()
        {
            return _context.Zaidimai.Select(x => new
            {
                id = x.Id,
                x.name,
                x.Text,
                x.Author,
                x.category
            }).ToList();
        }

     // /api/Zaidimai/0/Category
        [Route("{id:int}/Category")]
        [HttpGet("bycategory")]
        public IEnumerable<Object> GetCategory(int id)
        {
            return _context.Zaidimai
                .Where(p => (int)p.category == id)
                .Select(x => new
            {
                id = x.Id,
                x.name,
                x.Text,
                x.Author,
                x.category
            }).ToList();
        }

        [HttpPost("Add")]
        public async Task<IActionResult> AddZaidimai([FromBody]ZaidimaiDto zaidimai)
        {
            
            var user = await _authorizationService.GetUserByTokenFromRequest(Request);
            /*
            if (user == null)
            {
                return Unauthorized();
            }
*/
            Zaidimai zzaidimai = new Zaidimai();

            
            zzaidimai.name = zaidimai.name;
            zzaidimai.Text = zaidimai.Text;
            zzaidimai.category = zaidimai.category;
            zzaidimai.AuthorID = user.Id;
            //   zzaidimai.category = (Database.Entities.GameCategory)zaidimai.category;



            _context.Add(zzaidimai);
            _context.SaveChanges();
            return Ok("Added");
        }

        
        [HttpDelete("Delete")]
        public async Task<IActionResult> DeleteZaidimai([FromBody]ZaidimaiDto zaidimai)
        {
            var user = await _authorizationService.GetUserByTokenFromRequest(Request);

         

            Zaidimai deleteZaidimai = _context.Zaidimai.Where(x => x.Id == zaidimai.Id).FirstOrDefault();

            _context.Zaidimai.Remove(deleteZaidimai);
            _context.SaveChanges();

            return Ok("deleted");
        }
     
      

    }
}
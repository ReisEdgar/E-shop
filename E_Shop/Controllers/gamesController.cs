using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using E_Shop.Dto;
using E_Shop.Logic.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_Shop.Controllers
{
    [Produces("application/json")]
    [Route("api/games")]
    public class gamesController : Controller
    {
        IgamesService _gamesService;
        private readonly Logic.Interfaces.IAuthorizationService _authorizationService;
        private static readonly HttpClient Client = new HttpClient();

        // GET: api/games
        [HttpGet]
        public async System.Threading.Tasks.Task<IActionResult> GetgamesAsync()
        {
            var user = await _authorizationService.GetUserByTokenFromRequest(Request);

            if (user == null)
            {
                return Unauthorized();
            }
            if (user.Role != Database.Entities.UserRole.Admin)
            {
                return Forbid();
            }
            var result = _gamesService.Getgames();
            if (result == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(result);
            }
        }

        // GET: api/games/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult GetgamesById(int id)
        {
            var result = _gamesService.GetgamesItemById(id);
            if (result == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(result);
            }
        }
        [HttpGet("Delete/{id}")]
        public async System.Threading.Tasks.Task<IActionResult> DeletegamesAsync(int id)
        {
            var user = await _authorizationService.GetUserByTokenFromRequest(Request);

            if (user == null)
            {
                return Unauthorized();
            }
            if (user.Role != Database.Entities.UserRole.Admin)
            {
                return Forbid();
            }
            _gamesService.Deletegames(id);
            return Ok();
        }
        // POST: api/Hardware
        [HttpPost]
        public async System.Threading.Tasks.Task<IActionResult> PostAsync([FromBody]gamesDto games)
        {
            var user = await _authorizationService.GetUserByTokenFromRequest(Request);

            if (user == null)
            {
                return Unauthorized();
            }

            if (user.Role != Database.Entities.UserRole.Admin)
            {
                return Forbid();
            }

            _gamesService.EditgamesItem(games);
            return Ok();
        }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using E_Shop.Database;
using E_Shop.Database.Entities;
using System.Net.Http;
using System.Net;
using Newtonsoft.Json;
using E_Shop.Dto;
using E_Shop.Logic;
using E_Shop.Logic.Interfaces;
using Microsoft.AspNetCore.Server.Kestrel.Core.Internal.Http;
using Microsoft.Extensions.Primitives;

namespace E_Shop.Controllers
{
    [Produces("application/json")]
    [Route("api/Users")]
    public class UsersController : Controller
    {
        private readonly DatabaseContext _context;
        private readonly IAuthorizationService _authorizationService;
        private static readonly HttpClient Client = new HttpClient();
        

        public UsersController(DatabaseContext context, IAuthorizationService authorizationService)
        {
            _context = context;
            _authorizationService = authorizationService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginUser([FromBody] GoogleResponseData data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var values = new Dictionary<string, string>{{ "id_token", data.token }};
            var content = new FormUrlEncodedContent(values);
            var response = await Client.PostAsync("https://www.googleapis.com/oauth2/v3/tokeninfo", content);
            if (response.StatusCode == HttpStatusCode.OK)
            {
                var contentAsString = await response.Content.ReadAsStringAsync();
                var googleUser = JsonConvert.DeserializeObject<GoogleUserDto>(contentAsString);
                var existingUser = await _context.User.SingleOrDefaultAsync(u => u.Id == googleUser.sub);
                if (existingUser == null)
                {
                    User newUser = new User
                    {
                        Id = googleUser.sub,
                        Email = googleUser.Email,
                        Picture = googleUser.Picture,
                        FullName = googleUser.Name,
                        Role = UserRole.User
                    };
                    _context.User.Add(newUser);
                    await _context.SaveChangesAsync();
                }
                return Json(data.token);
            }
            return Unauthorized();
        }
        
        [HttpGet("current")]
        public async Task<IActionResult> GetCurrentUser()
        {
            var userId = await _authorizationService.GetUserIdByTokenFromRequest(this.Request);
            return await GetUser(userId);
        }

        // GET: api/Users
        [HttpGet]
        public IEnumerable<User> GetUsers()
        {
            return _context.User;
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _context.User.SingleOrDefaultAsync(m => m.Id == id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser([FromRoute] string id, [FromBody] User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        [HttpPost]
        public async Task<IActionResult> PostUser([FromBody] User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.User.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _context.User.SingleOrDefaultAsync(m => m.Id == id);
            if (user == null)
            {
                return NotFound();
            }

            _context.User.Remove(user);
            await _context.SaveChangesAsync();

            return Ok(user);
        }

        private bool UserExists(string id)
        {
            return _context.User.Any(e => e.Id == id);
        }
    }

    public class GoogleResponseData
    {
        public string token { get; set; }
    }
}
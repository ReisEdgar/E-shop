using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using AutoMapper;
using E_Shop.Database.Entities;
using E_Shop.Dto;
using E_Shop.Logic.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_Shop.Controllers
{

    [Produces("application/json")]
    [Route("api/Post")]
    public class PostController : Controller
    {
        private readonly IMessageService _messageService;
        private readonly IAuthorizationService _authorizationService;
        private static readonly HttpClient Client = new HttpClient();
        /*
        // GET: api/Post
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Post/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        */
        // POST: api/Post
        /*[HttpPost]
        public async Task<IActionResult> PostAsync([FromBody]PostDto message)
        {
            var user = await _authorizationService.GetUserByTokenFromRequest(Request);

            if (user == null)
            {
                return Unauthorized();
            }
            message.SenderEmail = user.Email;
            message.SenderId = user.Id;

            _messageService.AddMessage(message);
            return Ok();

        }*/

        // PUT: api/Post/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

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
    [Route("api/Message")]
    public class MessageController : Controller
    {
        private readonly IMessageService _messageService;
        private readonly IAuthorizationService _authorizationService;
        private static readonly HttpClient Client = new HttpClient();

        public MessageController(IMessageService messageService, IAuthorizationService authorizationService)
        {
            _messageService = messageService;
            _authorizationService = authorizationService;
        }

        // GET: api/Message
        [HttpGet("{sender}")]
        public async Task<IActionResult> GetMessagesByConversationAsync(string receiver)
        {
            var user = await _authorizationService.GetUserByTokenFromRequest(Request);

            if (user == null)
            {
                return Unauthorized();
            }
            var messages = _messageService.GetMessagesByConversation(user.Email, receiver);
            return Ok(messages);
        }
        // GET: api/Message
        [HttpGet("{admin}")]
        public async Task<IActionResult> GetAdminMessagesAsync()
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
            var messages = _messageService.GetAdminMessages();
            return Ok(messages);
        }


        // POST: api/Message
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody]MessageDto message)
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

        }
        // POST: api/Message
        [HttpPost("adminresponse")]
        public async Task<IActionResult> AdminResponse([FromBody]AdminMessageResponse response)
        {
            var user = await _authorizationService.GetUserByTokenFromRequest(Request);

            if (user == null)
            {
                return Unauthorized();
            }
            response.AdminMessage.SenderEmail = user.Email;
            response.AdminMessage.SenderId = user.Id;

            _messageService.AdminResponse(response);//
            return Ok();

        }
        // PUT: api/Message/5
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

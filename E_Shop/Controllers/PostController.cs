using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using AutoMapper;
using E_Shop.Database;
using E_Shop.Database.Entities;
using E_Shop.Dto;
using E_Shop.Logic.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_Shop.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class PostController : Controller
    {
        private readonly IAuthorizationService _authorizationService;
        private readonly DatabaseContext _context;
        public PostController(DatabaseContext context, IAuthorizationService authorizationService)
        {
            _context = context;
            _authorizationService = authorizationService;
        }

        [HttpGet]
        public IEnumerable<Object> Get()
        {
            return _context.Posts
            .Select(x => new
            {
                id = x.Id,
                x.Author,
                x.Category,
                x.Edited,
                x.EditedDate,
                x.PublishingDate,
                x.Title,
                x.Text
            })
            .ToList();

        }

        [HttpGet("bycategory")]
        public IEnumerable<Object> Get(int id)
        {
            return _context.Posts
                .Where(p => (int)p.Category == id)
            .Select(x => new
            {
                id = x.Id,
                x.Author,
                x.Category,
                x.Edited,
                x.EditedDate,
                x.PublishingDate,
                x.Title,
                x.Text
            })
            .ToList();
        }

        [HttpGet("byid")]
        public IActionResult GetById(int id)
        {
            var post = _context.Posts
                .Where(p => (int)p.Id == id)
                .Select(x => new
                {
                    id = x.Id,
                    x.Author,
                    x.Category,
                    x.Edited,
                    x.EditedDate,
                    x.PublishingDate,
                    x.Title,
                    x.Text
                })
            .FirstOrDefault();
            return Ok(post);
        }
        [HttpPost("kurti")]
        public async Task<IActionResult> PostTopic([FromBody]PostDto post)
        {
            var user = await _authorizationService.GetUserByTokenFromRequest(Request);

            if (user == null)
            {
                return Unauthorized();
            }

            Post postt = new Post();
            postt.AuthorID = user.Id;
            postt.Category = (Post.PostCategory)post.Category;
            postt.Edited = false;
            postt.EditedDate = post.EditedDate;
            postt.PublishingDate = post.PublishingDate;
            postt.Text = post.Text;
            postt.Title = post.Title;
            int catId = (int)post.Category;
            postt.ForumID = _context.Forums.Where(x => x.CategoryID == catId).FirstOrDefault().Id;
            _context.Add(postt);
            _context.SaveChanges();
            return Ok("prideta");
        }

        [HttpPut("keisti")]
        public async Task<IActionResult> EditTopic([FromBody]PostDto post)
        {
            var user = await _authorizationService.GetUserByTokenFromRequest(Request);

            if (user == null)
            {
                return Unauthorized();
            }

            int catId = (int)post.Category;
            Post changedPost = _context.Posts.Where(x => x.Id == post.Id).FirstOrDefault();
            changedPost.Edited = true;
            changedPost.EditedDate = post.EditedDate;
            changedPost.Text = post.Text;
            changedPost.Title = post.Title;
            changedPost.Category = (Post.PostCategory)catId;
            changedPost.ForumID = _context.Forums.Where(x => x.CategoryID == catId).FirstOrDefault().Id;
            _context.SaveChanges();
            return Ok("edited");
        }
    }
}

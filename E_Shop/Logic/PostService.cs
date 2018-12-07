using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using E_Shop.Database;
using E_Shop.Database.Entities;
using E_Shop.Dto;
using E_Shop.Logic.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace E_Shop.Logic
{
    public class PostService : IPostService
    {
        private readonly DatabaseContext _context;
        private readonly IMapper _mapper;
        private readonly IPostService _postService;
        public PostService(DatabaseContext context, IMapper mapper, IPostService postService)
        {
            _context = context;
            _mapper = mapper;
            _postService = postService;
        }
        public void AddPost(PostDto post)
        {
            var toAdd = _mapper.Map<PostDto, Post>(post);

            _context.Posts.Add(toAdd);
            _context.SaveChanges();
        }

        public void DeletePost(int id)
        {
            var result = _context.Posts.FirstOrDefault(x => x.Id == id);
            _context.Posts.Remove(result);
            _context.SaveChanges();
        }
    }
}

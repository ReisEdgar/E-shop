using E_Shop.Database.Entities;
using E_Shop.Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Database
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
            ForumInitializer.ForumSeed(this);
        }


        public DbSet<Message> Messages { get; set; }
        public DbSet<Conversation> Conversations { get; set; }
        public DbSet<Hardware> HardwareRecords { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Forum> Forums { get; set; }
        public DbSet<games> games { get; set; } /*
            public DbSet<Konsole> Konsole { get; set; }
            */
    }
}

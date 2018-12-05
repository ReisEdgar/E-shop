using E_Shop.Database.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Shop.Database
{
    public class ForumInitializer
    {
        public ForumInitializer()
        {

        }
        public static void ForumSeed(DatabaseContext context)
        {
            if (context.Forums.Count() == 0)
            {
                var Forums = new List<Forum>
                {
                new Forum{Title="Konsolės žaidimai",Text="Konsolių žaidimų forumas"},
                new Forum{Title="PC žaidimai",Text="PC žaidimų forumas"},
                new Forum{Title="Įranga",Text="Žaidimų įrangos forumas"},
                new Forum{Title="Kita",Text="Forumas apie viską"},
                };

                Forums.ForEach(s => context.Forums.Add(s));
                context.SaveChanges();
            }
        }
    }
}

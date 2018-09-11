using Microsoft.AspNetCore.Identity;

namespace ShareCar.Db.Entities
{
    public class User : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool Admin { get; set; }
        public long? FacebookId { get; set; }
        public string PictureUrl { get; set; }
    }
}
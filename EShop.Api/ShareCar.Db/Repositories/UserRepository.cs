using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using ShareCar.Db.Entities;
using ShareCar.Dto.Identity;
using ShareCar.Dto.Identity.Facebook;

namespace ShareCar.Db.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly UserManager<User> _userManager;

        public UserRepository(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        public async Task CreateFacebookUser(FacebookUserDataDto userDto)
        {
            var appUser = new User
            {
                FirstName = userDto.FirstName,
                LastName = userDto.LastName,
                FacebookId = userDto.Id,
                Email = userDto.Email,
                UserName = userDto.Email,
                PictureUrl = userDto.Picture.Data.Url
            };

            var result = await _userManager.CreateAsync(appUser, Convert.ToBase64String(Guid.NewGuid().ToByteArray()).Substring(0, 8));

            if (!result.Succeeded)
                throw new ArgumentException("Failed to create local user account.");
        }

        public async Task<UserDto> GetLoggedInUser(ClaimsPrincipal principal)
        {
            var user = await _userManager.GetUserAsync(principal);

            var userDto = new UserDto
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                PictureUrl = user.PictureUrl
            };

            return userDto;
        }
    }
}
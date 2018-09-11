using System.Security.Claims;
using System.Threading.Tasks;
using EShop.Dto.Identity;
using EShop.Dto.Identity.Facebook;

namespace EShop.Db.Repositories
{
    public interface IUserRepository
    {
        Task CreateFacebookUser(FacebookUserDataDto userDto);
        Task<UserDto> GetLoggedInUser(ClaimsPrincipal principal);
    }
}
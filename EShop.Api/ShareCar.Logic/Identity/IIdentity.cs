using System.Threading.Tasks;
using EShop.Dto.Identity;

namespace EShop.Logic.Identity
{
    public interface IIdentity
    {
        Task<string> Login(AccessTokenDto facebookAccessToken);
    }
}
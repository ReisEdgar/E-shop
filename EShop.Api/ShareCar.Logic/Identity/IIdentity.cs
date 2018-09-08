using System.Threading.Tasks;
using ShareCar.Dto.Identity;

namespace ShareCar.Logic.Identity
{
    public interface IIdentity
    {
        Task<string> Login(AccessTokenDto facebookAccessToken);
    }
}
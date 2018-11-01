using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace E_Shop.Logic.Interfaces
{
    public interface IAuthorizationService
    {
        Task<string> GetUserIdByTokenFromRequest(HttpRequest request);
    }
}

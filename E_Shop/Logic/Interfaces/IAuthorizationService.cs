using System.Threading.Tasks;
using E_Shop.Database.Entities;
using Microsoft.AspNetCore.Http;

namespace E_Shop.Logic.Interfaces
{
    public interface IAuthorizationService
    {
        Task<User> GetUserByTokenFromRequest(HttpRequest request);
    }
}

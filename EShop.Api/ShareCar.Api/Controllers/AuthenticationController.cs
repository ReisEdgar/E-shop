using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShareCar.Dto.Identity;
using ShareCar.Logic.Identity;

namespace ShareCar.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AuthenticationController : Controller
    {
        private readonly IIdentity _facebookIdentity;
        
        public AuthenticationController(IIdentity facebookIdentity)
        {
            _facebookIdentity = facebookIdentity;
        }

        [HttpPost]
        public async Task<IActionResult> Facebook([FromBody] AccessTokenDto facebookAccessToken)
        {
            try
            {
                var jwt = await _facebookIdentity.Login(facebookAccessToken);
                AddJwtToCookie(jwt);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok();
        }

        [HttpPost]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("token");

            return Ok();
        }

        private void AddJwtToCookie(string jwt)
        {
            var options = new CookieOptions
            {
                HttpOnly = true
            };
            Response.Cookies.Append("token", jwt, options);
        }
    }
}
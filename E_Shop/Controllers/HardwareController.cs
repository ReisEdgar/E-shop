using E_Shop.Dto;
using E_Shop.Logic.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;

namespace E_Shop.Controllers
{
    [Produces("application/json")]
    [Route("api/Hardware")]

    public class HardwareController : Controller
    {
        IHardwareService _hardwareService;
        private readonly Logic.Interfaces.IAuthorizationService _authorizationService;
        private static readonly HttpClient Client = new HttpClient();

        public HardwareController(IHardwareService hardwareService, Logic.Interfaces.IAuthorizationService authorizationService)
        {
            _hardwareService = hardwareService;
            _authorizationService = authorizationService;
        }
        [HttpGet]
        public async System.Threading.Tasks.Task<IActionResult> GetHardwareAsync()
        {
            var user = await _authorizationService.GetUserByTokenFromRequest(Request);

            if (user == null)
            {
                return Unauthorized();
            }
            if (user.Role != Database.Entities.UserRole.Admin)
            {
                return Forbid();
            }
            var result = _hardwareService.GetHardware();
            if (result == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(result);
            }
        }
        // GET: api/Hardware/5
        [HttpGet("{id}")]
        public IActionResult GetHardwareById(int id)
        {

            var result = _hardwareService.GetHardwareItemById(id);
            if (result == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(result);
            }
        }
        [HttpGet("Delete/{id}")]
        public async System.Threading.Tasks.Task<IActionResult> DeleteAsync(int id)
        {
            var user = await _authorizationService.GetUserByTokenFromRequest(Request);

            if (user == null)
            {
                return Unauthorized();
            }
            if (user.Role != Database.Entities.UserRole.Admin)
            {
                return Forbid();
            }
            _hardwareService.DeleteHardware(id);
            return Ok();
        }
        // POST: api/Hardware
        [HttpPost]
        public async System.Threading.Tasks.Task<IActionResult> PostAsync([FromBody]HardwareDto hardware)
        {
            var user = await _authorizationService.GetUserByTokenFromRequest(Request);
         
            if(user == null)
            {
                return Unauthorized();
            }

            if(user.Role != Database.Entities.UserRole.Admin)
            {
                return Forbid();
            }

            _hardwareService.EditHardwareItem(hardware);
            return Ok();
        }

    }
}

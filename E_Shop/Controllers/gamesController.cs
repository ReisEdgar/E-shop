using E_Shop.Dto;
using E_Shop.Logic.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;


namespace E_Shop.Controllers
{
    [Produces("application/json")]
    [Route("api/games")]

    public class gamesController
    {
        IHardwareService gameService;
        private readonly Logic.Interfaces.IAuthorizationService _authorizationService;
        private static readonly HttpClient Client = new HttpClient();

        public gamesController(IHardwareService gameService,
            Logic.Interfaces.IAuthorizationService authorizationService)
        {
            gameService = gameService;
            _authorizationService = authorizationService;
        }

    }
}

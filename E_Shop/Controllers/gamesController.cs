using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using E_Shop.Logic.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_Shop.Controllers
{

    [Produces("application/json")]
    [Route("api/games")]

    public class gamesController : Controller
    {
        private IgamesService _gamesService;
        private readonly IAuthorizationService _authorizationService;
        private static readonly HttpClient Client = new HttpClient();

        public gamesController(IgamesService gameService, IAuthorizationService authorizationService)
        {
            _gamesService = gameService;
            _authorizationService = authorizationService;
        }

       
    }
}
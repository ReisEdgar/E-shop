using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using E_Shop.Dto;
using E_Shop.Logic.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;

namespace E_Shop.Logic
{
    public class AuthorizationService : IAuthorizationService
    {
        private static readonly HttpClient Client = new HttpClient();
        
        public async Task<string> GetUserIdByTokenFromRequest(HttpRequest request)
        {
            StringValues values = default(StringValues);
            var headers = request.Headers;
            headers.TryGetValue("Authorization", out values);
            string token = values.FirstOrDefault()?.Split(" ")[1];
            if (token != null)
            {
                var content = new FormUrlEncodedContent( new Dictionary<string, string>{{ "id_token", token }});
                var response = await Client.PostAsync("https://www.googleapis.com/oauth2/v3/tokeninfo", content);
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    var contentAsString = await response.Content.ReadAsStringAsync();
                    var googleUser = JsonConvert.DeserializeObject<GoogleUserDto>(contentAsString);
                    return googleUser.sub;
                }
            }

            return "";
        }
    }
}

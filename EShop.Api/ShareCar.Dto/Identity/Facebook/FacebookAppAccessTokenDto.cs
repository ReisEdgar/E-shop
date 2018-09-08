using Newtonsoft.Json;

namespace ShareCar.Dto.Identity.Facebook
{
    public class FacebookAppAccessTokenDto
    {
        [JsonProperty("token_type")]
        public string TokenType { get; set; }
        [JsonProperty("access_token")]
        public string AccessToken { get; set; }
    }
}
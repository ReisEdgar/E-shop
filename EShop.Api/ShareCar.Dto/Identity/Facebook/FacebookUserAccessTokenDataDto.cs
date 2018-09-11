using Newtonsoft.Json;

namespace EShop.Dto.Identity.Facebook
{
    public class FacebookUserAccessTokenDataDto
    {
        [JsonProperty("app_id")]
        public long AppId { get; set; }
        public string Type { get; set; }
        public string Application { get; set; }
        [JsonProperty("expires_at")]
        public long ExpiresAt { get; set; }
        [JsonProperty("is_valid")]
        public bool IsValid { get; set; }
        [JsonProperty("user_id")]
        public long UserId { get; set; }
    }

    public class FacebookUserAccessTokenValidation
    {
        public FacebookUserAccessTokenDataDto Data { get; set; }
    }
}
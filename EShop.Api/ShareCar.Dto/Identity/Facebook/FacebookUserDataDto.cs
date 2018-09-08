using Newtonsoft.Json;

namespace ShareCar.Dto.Identity.Facebook
{
    public class FacebookUserDataDto
    {
        public long Id { get; set; }
        public string Email { get; set; }
        [JsonProperty("first_name")]
        public string FirstName { get; set; }
        [JsonProperty("last_name")]
        public string LastName { get; set; }
        public FacebookPictureDataDto Picture { get; set; }
    }
}
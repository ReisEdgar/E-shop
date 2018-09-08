using Newtonsoft.Json;

namespace ShareCar.Dto.Identity.Facebook
{
    public class FacebookPictureDataDto
    {
        public FacebookPictureDto Data { get; set; }
    }

    public class FacebookPictureDto
    {
        public int Height { get; set; }
        public int Width { get; set; }
        [JsonProperty("is_silhouette")]
        public bool IsSilhouette { get; set; }
        public string Url { get; set; }
    }
}
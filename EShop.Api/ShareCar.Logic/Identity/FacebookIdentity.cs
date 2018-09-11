using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using EShop.Db.Entities;
using EShop.Db.Repositories;
using EShop.Dto.Identity;
using EShop.Dto.Identity.Facebook;

namespace EShop.Logic.Identity
{
    public class FacebookIdentity : IIdentity
    {
        private readonly UserManager<User> _userManager;
        private readonly FacebookAuthSettings _fbAuthSettings;
        private readonly IJwtFactory _jwtFactory;
        private readonly IUserRepository _userRepository;
        private static readonly HttpClient Client = new HttpClient();

        public FacebookIdentity(IOptions<FacebookAuthSettings> fbAuthSettings, UserManager<User> userManager, IJwtFactory jwtFactory, IUserRepository userRepository)
        {
            _fbAuthSettings = fbAuthSettings.Value;
            _userManager = userManager;
            _jwtFactory = jwtFactory;
            _userRepository = userRepository;
        }

        public async Task<string> Login(AccessTokenDto facebookAccessToken)
        {
            var userInfo = await GetUserFromFacebook(facebookAccessToken);

            // ready to create the local user account (if necessary) and jwt
            var user = await _userManager.FindByEmailAsync(userInfo.Email);

            if (user == null)
            {
                await _userRepository.CreateFacebookUser(userInfo);
            }

            // generate the jwt for the local user
            var localUser = await _userManager.FindByNameAsync(userInfo.Email);

            if (localUser == null)
            {
                throw new ArgumentException("Local user account could not be found.");
            }

            var jwt = await GenerateJwt(localUser);

            return jwt;
        }

        private async Task<FacebookUserDataDto> GetUserFromFacebook(AccessTokenDto facebookAccessToken)
        {
            // generate an app access token
            var appAccessTokenUrl = _fbAuthSettings.AppAccessTokenUrl
                .Replace("{AppId}", _fbAuthSettings.AppId)
                .Replace("{AppSecret}", _fbAuthSettings.AppSecret);
            var appAccessTokenResponse = await Client.GetStringAsync(appAccessTokenUrl);
            var appAccessToken = JsonConvert.DeserializeObject<FacebookAppAccessTokenDto>(appAccessTokenResponse);

            // validate the user access token
            await CheckIfAccessTokenIsValid(facebookAccessToken, appAccessToken);

            // we've got a valid token so we can request user data from facebook
            var userInfoUrl = _fbAuthSettings.UserInfoUrl.Replace("{FacebookAccessToken}", facebookAccessToken.AccessToken);
            var userInfoResponse = await Client.GetStringAsync(userInfoUrl);
            var userInfo = JsonConvert.DeserializeObject<FacebookUserDataDto>(userInfoResponse);

            return userInfo;
        }

        private async Task CheckIfAccessTokenIsValid(AccessTokenDto facebookAccessToken, FacebookAppAccessTokenDto appAccessToken)
        {
            var debugTokenUrl = _fbAuthSettings.DebugTokenUrl
                .Replace("{FacebookAccessToken}", facebookAccessToken.AccessToken)
                .Replace("{AccessToken}", appAccessToken.AccessToken);
            var userAccessTokenValidationResponse = await Client.GetStringAsync(debugTokenUrl);
            var userAccessTokenValidation =
                JsonConvert.DeserializeObject<FacebookUserAccessTokenValidation>(userAccessTokenValidationResponse);

            if (!userAccessTokenValidation.Data.IsValid)
            {
                throw new ArgumentException("Invalid facebook token.");
            }
        }

        private async Task<string> GenerateJwt(User localUser)
        {
            var jwtIdentity = _jwtFactory.GenerateClaimsIdentity(localUser.UserName, localUser.Id);
            var jwt = await _jwtFactory.GenerateEncodedToken(localUser.UserName, jwtIdentity);

            return jwt;
        }
    }
}
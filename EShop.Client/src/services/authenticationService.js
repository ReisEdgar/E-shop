import api from '../helpers/axiosHelper';

class AuthenticationService {

    loginWithFacebook = (accessToken, callback) => {
        api.post('authentication/facebook', {
            accessToken: accessToken
        })
        .then((response) => {
            if (response.status === 200)
                callback();
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    logout = (callback) => {
        api.post('authentication/logout')
        .then((response) => {
            if (response.status === 200)
                callback();
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default AuthenticationService;
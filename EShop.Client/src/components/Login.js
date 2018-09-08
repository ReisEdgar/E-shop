import React, { Component }  from 'react';
import FacebookLogin from 'react-facebook-login';
import history from '../helpers/history';
import AuthenticationService from '../services/authenticationService';

class Login extends Component {
    constructor() {
        super();

        this.authService = new AuthenticationService();
    }

    responseFacebook = (response) => {
        console.log(response);
    
        this.authService.loginWithFacebook(response.accessToken, this.userAuthenticated);
    }

    userAuthenticated = () => {
        history.push('/');
    }
      
    render() {
        return <div>
            <h1>Login</h1>
            <FacebookLogin
                appId="599580833757975"
                fields="name,email,picture"
                callback={this.responseFacebook} 
            />
        </div>;
    }
}

export default Login;
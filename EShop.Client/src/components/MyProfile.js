import React, { Component }  from 'react';
import UserService from '../services/userService';
import AuthenticationService from '../services/authenticationService';
import history from '../helpers/history';

class Login extends Component {
    constructor() {
        super();

        this.state = ({ loading: true, user: null });

        this.userService = new UserService();
        this.authService = new AuthenticationService();
    }

    componentDidMount() {
        this.userService.getLoggedInUser(this.updateLoggedInUser)
    }

    updateLoggedInUser = (user) => {
        this.setState({ loading: false, user: user });
    }

    logout = () => {
        this.authService.logout(this.userLoggedOut);
    }

    userLoggedOut = () => {
        history.push('/login');
    }

    render() {
        let content = this.state.loading ? 
        <p><em>Loading...</em></p> :
        <div>              
            <div>
                <img alt="Profile" src={ this.state.user.pictureUrl }/>
            </div>
            <div>
                { this.state.user.firstName } { this.state.user.lastName }
            </div>

            <div>
                <button type="button" onClick={this.logout}>Logout</button>
            </div>
        </div>
        
        return <div>
            <h1>My profile</h1>
            {content}
        </div>;
    }
}

export default Login;
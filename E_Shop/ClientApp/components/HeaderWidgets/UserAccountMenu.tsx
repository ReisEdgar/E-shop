import * as React from 'react';
import Fetcher from 'request';
import User from '../../Classes/User'
import {Link} from "react-router-dom";
import {GoogleLogin, GoogleLogout} from "react-google-login";
import {MessagesDropdown} from "./MessagesDropdown";
import {AlertsDropdown} from "./AlertsDropdown";
import {ShoppingBasketDropdown} from "./ShoppingBasketDropdown";


export class UserAccountMenu extends React.Component<any, any> {
   private readonly googleLogout: GoogleLogout;
    constructor(props){
        super(props);
        this.state = {
            currentUser: null
        };
        this.googleLogout = new GoogleLogout();
        this.responseGoogle = this.responseGoogle.bind(this);
        this.fetchCurrentUser = this.fetchCurrentUser.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        this.fetchCurrentUser();
    }
    
    public fetchCurrentUser() {
        Fetcher.get(window.location.origin + '/api/Users/current', {
            'auth': {
                'bearer': window.localStorage.accessToken || ''
            }
        }, (error, response, body) => {
            if (response.statusCode == 200) {
                this.setState({
                    currentUser: new User(body)
                })
            } else {
                try {
                    this.googleLogout.signOut()
                } catch (e) {}
                window.localStorage.accessToken = '';
            }
        })
    }

    public responseGoogle(response)  {
        var token = response.getAuthResponse().id_token;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', window.location.protocol + '/api/Users/login');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            console.log('Signed in as: ' + response.getBasicProfile().getName());
            window.localStorage.accessToken = token;
            this.fetchCurrentUser();
        };
        xhr.send(JSON.stringify({ token: token }));
    }

    public logout() {
        window.localStorage.accessToken = '';
        this.setState({
            currentUser: null
        });
    }

    public render() {

        return <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
                {this.state.currentUser != null ? [
                        (<MessagesDropdown key={"messages"}/>),
                        (<AlertsDropdown key={"alerts"}/>),
                        (<ShoppingBasketDropdown key={"shoppingBasket"}/>),
                        (<li className={this.props.listItemClass} key={"userMenu"}>
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                               aria-expanded="false">
                                <img src={this.state.currentUser.picture}
                                     className="user-image" alt="User Image"/>
                                <span className="hidden-xs">{this.state.currentUser.fullName}</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="user-header">
                                    <img src={this.state.currentUser.picture}
                                         className="img-circle" alt="User Image"/>
                                    <p>
                                        {this.state.currentUser.fullName}
                                        <small>Sveiki sugrįžę!</small>
                                    </p>
                                </li>
                                <li className="user-footer" onClick={() => {
                                    this.props.updateSelectedPage('Profilis')
                                }}>
                                    <div className="pull-left">
                                        <Link to="/profile"
                                              className="btn btn-default btn-flat">Mano profilis</Link>
                                    </div>
                                    <div className="pull-right">
                                        <GoogleLogout
                                            buttonText="Logout"
                                            render={renderProps => (
                                                <div className="btn btn-default btn-flat"
                                                     onClick={renderProps.onClick}>Atsijungti</div>
                                            )}
                                            onLogoutSuccess={this.logout}
                                        >
                                        </GoogleLogout>
                                    </div>
                                </li>
                            </ul>
                        </li>)] :
                    <li>
                        <GoogleLogin
                            clientId="1062350769792-0847ocfd04iiae2k2jqdqp69umbvjuul.apps.googleusercontent.com"
                            render={renderProps => (
                                <div className="g-signin2" onClick={renderProps.onClick}>Palaukite...</div>
                            )}
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                        />
                    </li>}
            </ul>
        </div>
    }
}
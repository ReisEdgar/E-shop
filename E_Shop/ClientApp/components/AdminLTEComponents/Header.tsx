import * as React from 'react';
import { Link } from "react-router-dom";
import {GoogleLogin} from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import Fetcher from 'request';
import User from '../../Classes/User'
import {MessagesDropdown} from "../HeaderWidgets/MessagesDropdown";
import {AlertsDropdown} from "../HeaderWidgets/AlertsDropdown";
import {ShoppingBasketDropdown} from "../HeaderWidgets/ShoppingBasketDropdown";
import {UserAccountMenu} from "../HeaderWidgets/UserAccountMenu";


interface HeaderState {
    selectedPage: string;
    currentUser: User;
}

export class Header extends React.Component<{}, HeaderState> {
    constructor(){
        super();
        this.state = {
            selectedPage: '',
            currentUser: null
        };
        this.responseGoogle = this.responseGoogle.bind(this);
        this.updateSelectedPage = this.updateSelectedPage.bind(this);
    }
    
    componentDidMount() {
        console.log(window.localStorage.accessToken);
        Fetcher.get(window.location.origin + '/api/Users/current', {
            'auth': {
                'bearer': window.localStorage.accessToken || ''
            }
        }, (error, response, body) => {
            if (response.statusCode == 200) {
                console.log(JSON.parse(body));
                this.setState({
                    currentUser: new User(body)
                })
            }
        })
    }

    public responseGoogle(response)  {
        console.log(response);
        var token = response.getAuthResponse().id_token;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', window.location.protocol + '/api/Users/login');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            console.log('Signed in as: ' + response.getBasicProfile().getName());
            window.localStorage.accessToken = token;
        };
        xhr.send(JSON.stringify({ token: token }));
    }

    public updateSelectedPage(page: string) {
        this.setState({
            selectedPage: page
        })
    }

    public render() {
        var width20 = {
            width: '20%',
        };
        return <header className="main-header">
            <nav className="navbar navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <a href="#" className="navbar-brand"><b>E</b>shop</a>
                        <button type="button" className="navbar-toggle collapsed"
                                data-toggle="collapse" data-target="#navbar-collapse">
                            <i className="fa fa-bars"></i>
                        </button>
                    </div>

                    {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
                    <div className="collapse navbar-collapse pull-left" id="navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                                   aria-expanded="false">Katalogas<span
                                    className="caret"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">One more separated link</a></li>
                                </ul>
                            </li>
                            <li
                                className={this.state.selectedPage == 'Forumas' ? 'active' : ''}
                                onClick={() => { this.updateSelectedPage('Forumas') }}>
                                <Link to="/forum">Forumas</Link>
                            </li>
                            <li
                                className={this.state.selectedPage == 'Pagalba' ? 'active' : ''}
                                onClick={() => { this.updateSelectedPage('Pagalba') }}>
                                <Link to="/help">Pagalba</Link>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-left" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control" id="navbar-search-input"
                                       placeholder="Ieškoti"/>
                            </div>
                        </form>
                    </div>
                    {/*<!-- /.navbar-collapse -->*/}
                    {/*<!-- Navbar Right Menu -->*/}
                    <div className="navbar-custom-menu">
                        {/*<div className="g-signin2" data-onsuccess="onSignIn"> </div>*/}
                       
                        <ul className="nav navbar-nav">
                            <MessagesDropdown/>
                            <AlertsDropdown/>
                            <ShoppingBasketDropdown/>
                            {this.state.currentUser != null ? 
                            <UserAccountMenu
                                listItemClass={this.state.selectedPage == 'Profilis' ? 'dropdown user user-menu active' : 'dropdown user user-menu'}
                                updateSelectedPage={this.updateSelectedPage}
                            /> :
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
                    {/*<!-- /.navbar-custom-menu -->*/}
                </div>
                {/*<!-- /.container-fluid -->*/}
            </nav>
        </header>
    }
}
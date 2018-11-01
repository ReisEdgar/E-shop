import * as React from 'react';
import Fetcher from 'request';
import User from '../../Classes/User'
import {Link} from "react-router-dom";
import {GoogleLogout} from "react-google-login";


export class UserAccountMenu extends React.Component<any, any> {
    constructor(props){
        super(props);
        this.state = {};
        this.logout = this.logout.bind(this);
    }

    public logout() {
        window.localStorage.accessToken = '';
        console.log('logout');
    }

    public render() {

        return <li className={this.props.listItemClass}>
            {/*<!-- Menu Toggle Button -->*/}
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"
               aria-expanded="false">
                {/*<!-- The user image in the navbar-->*/}
                <img src="../../dist/img/user2-160x160.jpg"
                     className="user-image" alt="User Image"/>
                {/*<!-- hidden-xs hides the username on small devices so only the image appears. -->*/}
                <span className="hidden-xs">Alexander Pierce</span>
            </a>
            <ul className="dropdown-menu">
                {/*<!-- The user image in the menu -->*/}
                <li className="user-header">
                    <img src="../../dist/img/user2-160x160.jpg"
                         className="img-circle" alt="User Image"/>

                    <p>
                        Alexander Pierce
                        <small>Sveiki sugrįžę!</small>
                    </p>
                </li>
                {/*<!-- Menu Footer-->*/}
                <li className="user-footer"  onClick={() => { this.props.updateSelectedPage('Profilis') }}>
                    <div className="pull-left">
                        <Link to="/profile"
                              className="btn btn-default btn-flat">Mano profilis</Link>
                    </div>
                    <div className="pull-right">
                        <GoogleLogout
                            buttonText="Logout"
                            render={renderProps => (
                                <div className="btn btn-default btn-flat" onClick={renderProps.onClick}>Atsijungti</div>
                            )}
                            onLogoutSuccess={this.logout}
                        >
                        </GoogleLogout>
                    </div>
                </li>
            </ul>
        </li>
    }
}
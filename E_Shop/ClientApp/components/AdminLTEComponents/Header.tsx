import * as React from 'react';
import { Link } from "react-router-dom";


interface HeaderState {
    selectedPage: string;
}

export class Header extends React.Component<{}, HeaderState> {
    constructor(){
        super();
        this.state = {
            selectedPage: ''
        }
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
                        <ul className="nav navbar-nav">
                            {/*<!-- Messages: style can be found in dropdown.less-->*/}
                            <li className="dropdown messages-menu">
                                {/*<!-- Menu toggle button -->*/}
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                                   aria-expanded="false">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="label label-success">4</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 4 messages</li>
                                    <li>
                                        {/*<!-- inner menu: contains the messages -->*/}
                                        <ul className="menu">
                                            <li>{/*<!-- start message -->*/}
                                                <a href="#">
                                                    <div className="pull-left">
                                                        {/*<!-- User Image -->*/}
                                                        <img src="../../dist/img/user2-160x160.jpg"
                                                             className="img-circle"
                                                             alt="User Image"/>
                                                    </div>
                                                    {/*<!-- Message title and timestamp -->*/}
                                                    <h4>
                                                        Support Team
                                                        <small><i className="fa fa-clock-o"></i> 5
                                                            mins
                                                        </small>
                                                    </h4>
                                                    {/*<!-- The message -->*/}
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                            {/*<!-- end message -->*/}
                                        </ul>
                                        {/*<!-- /.menu -->*/}
                                    </li>
                                    <li className="footer"><a href="#">See All Messages</a></li>
                                </ul>
                            </li>
                            {/*<!-- /.messages-menu -->*/}

                            {/*<!-- Notifications Menu -->*/}
                            <li className="dropdown notifications-menu">
                                {/*<!-- Menu toggle button -->*/}
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                                   aria-expanded="false">
                                    <i className="fa fa-bell-o"></i>
                                    <span className="label label-warning">10</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 10 notifications</li>
                                    <li>
                                        {/*<!-- Inner Menu: contains the notifications -->*/}
                                        <ul className="menu">
                                            <li>{/*<!-- start notification -->*/}
                                                <a href="#">
                                                    <i className="fa fa-users text-aqua"></i> 5 new
                                                    members joined today
                                                </a>
                                            </li>
                                            {/*<!-- end notification -->*/}
                                        </ul>
                                    </li>
                                    <li className="footer"><a href="#">View all</a></li>
                                </ul>
                            </li>
                            {/*<!-- Tasks Menu -->*/}
                            <li className="dropdown tasks-menu">
                                {/*<!-- Menu Toggle Button -->*/}
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                                   aria-expanded="false">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span className="label label-danger">9</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">Krepšelis</li>
                                    <li>
                                        {/*<!-- Inner menu: contains the tasks -->*/}
                                        <ul className="menu">
                                            <li>{/*<!-- Task item -->*/}
                                                <a href="#">
                                                    {/*<!-- Task title and progress text -->*/}
                                                    <h3>
                                                        Design some buttons
                                                        <small className="pull-right">20%</small>
                                                    </h3>
                                                    {/*<!-- The progress bar -->*/}
                                                    <div className="progress xs">
                                                        {/*<!-- Change the css width attribute to simulate progress -->*/}
                                                        <div
                                                            className="progress-bar progress-bar-aqua"
                                                            style={width20} role="progressbar"
                                                            aria-valuenow="20" aria-valuemin="0"
                                                            aria-valuemax="100">
                                                            <span
                                                                className="sr-only">20% Complete</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            {/*<!-- end task item -->*/}
                                        </ul>
                                    </li>
                                    <li className="footer">
                                        <a href="#">View all tasks</a>
                                    </li>
                                </ul>
                            </li>
                            {/*<!-- User Account Menu -->*/}
                            <li className="dropdown user user-menu">
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
                                            Alexander Pierce - Web Developer
                                            <small>Member since Nov. 2012</small>
                                        </p>
                                    </li>
                                    {/*<!-- Menu Body -->*/}
                                    <li className="user-body">
                                        <div className="row">
                                            <div className="col-xs-4 text-center">
                                                <a href="#">Followers</a>
                                            </div>
                                            <div className="col-xs-4 text-center">
                                                <a href="#">Sales</a>
                                            </div>
                                            <div className="col-xs-4 text-center">
                                                <a href="#">Friends</a>
                                            </div>
                                        </div>
                                        {/*<!-- /.row -->*/}
                                    </li>
                                    {/*<!-- Menu Footer-->*/}
                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <a href="#"
                                               className="btn btn-default btn-flat">Profile</a>
                                        </div>
                                        <div className="pull-right">
                                            <a href="#" className="btn btn-default btn-flat">Sign
                                                out</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/*<!-- /.navbar-custom-menu -->*/}
                </div>
                {/*<!-- /.container-fluid -->*/}
            </nav>
        </header>
    }
}
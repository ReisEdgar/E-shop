import * as React from 'react';
import { Link } from "react-router-dom";
import {UserAccountMenu} from "../HeaderWidgets/UserAccountMenu";


interface HeaderState {
    selectedPage: string;
}

export class Header extends React.Component<{}, HeaderState> {
    
    constructor(){
        super();
        this.state = {
            selectedPage: '',

        };
        this.updateSelectedPage = this.updateSelectedPage.bind(this);
    }
    
    public updateSelectedPage(page: string) {
        this.setState({
            selectedPage: page
        })
    }

    public render() {
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
                                    <li
                                        className={this.state.selectedPage == 'Konsoles' ? 'active' : ''}
                                        onClick={() => { this.updateSelectedPage('Konsoles') }}>
                                        <Link to="/console">Konsoles</Link>
                                    </li>
                                    <li
                                        className={this.state.selectedPage == 'Žaidimai' ? 'active' : ''}
                                        onClick={() => { this.updateSelectedPage('Žaidimai') }}>
                                        <Link to="/games">Žaidimai</Link>
                                    </li>
                                    <li className="divider"></li>
                                    <li
                                        className={this.state.selectedPage == 'Ikelti preke' ? 'active' : ''}
                                        onClick={() => { this.updateSelectedPage('Ikelti preke') }}>
                                        <Link to="/Newgood">Ikelti preke</Link>
                                    </li>
                                    <li
                                        className={this.state.selectedPage == 'Visos prekes' ? 'active' : ''}
                                        onClick={() => { this.updateSelectedPage('Visos prekes') }}>
                                        <Link to="/all">Visos prekes</Link>
                                    </li>
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
                    <UserAccountMenu
                        listItemClass={this.state.selectedPage == 'Profilis' ? 'dropdown user user-menu active' : 'dropdown user user-menu'}
                        updateSelectedPage={this.updateSelectedPage}
                    />
                    {/*<!-- /.navbar-custom-menu -->*/}
                </div>
                {/*<!-- /.container-fluid -->*/}
            </nav>
        </header>
    }
}
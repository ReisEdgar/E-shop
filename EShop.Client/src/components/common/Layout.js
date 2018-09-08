import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Layout.css';

class Layout extends Component {
    constructor() {
        super();

        this.state = { user: null };
    }

    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <h1 className="app-title">Welcome to React</h1>
                </header>

                <div className="content">
                    { this.props.children } 
                </div>
            </div>
        );
    }
}

export default Layout;

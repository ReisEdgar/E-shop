import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { Router } from 'react-router';

import history from './helpers/history';

import Layout from './components/common/Layout';
import Login from './components/Login';
import MyProfile from './components/MyProfile';

import './index.css';

ReactDOM.render(
    <Router history={history} >
        <Layout>
            <Route exact path='/' component={ MyProfile } />
            <Route path='/login' component={ Login } />
        </Layout>
    </Router>,
    document.getElementById('root')
);
import * as React from 'react';
import { Route } from 'react-router-dom';
import { AdminLTEroot } from './components/AdminLTEroot';
import { Catalog } from './components/Catalog';
import { Forum } from './components/Forum';
import { Help } from './components/Help';
import {Profile} from "./components/Profile";
import {EditProfile} from "./components/EditProfile";

export const routes = <AdminLTEroot>
    <Route exact path='/' component={Catalog} />
    <Route exact path='/catalog' component={Catalog} />
    <Route exact path='/forum' component={Forum} />
    <Route exact path='/help' component={Help} />
    <Route exact path='/profile' component={Profile} />
    <Route exact path='/edit-profile' component={EditProfile} />
</AdminLTEroot>;

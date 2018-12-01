import * as React from 'react';
import { Route } from 'react-router-dom';
import { AdminLTEroot } from './components/AdminLTEroot';
import { Catalog } from './components/Catalog';
import { Forum } from './components/Forum';
import { Help } from './components/Help';
import {Profile} from "./components/UserComponents/Profile";
import {EditProfile} from "./components/UserComponents/EditProfile";
import { UserList } from "./components/UserComponents/UserList";
import { console } from "./components/Console";
import { games } from "./components/Games";

export const routes = <AdminLTEroot>
    <Route exact path='/' component={Catalog} />
    <Route exact path='/catalog' component={Catalog} />
    <Route exact path='/forum' component={Forum} />
    <Route exact path='/help' component={Help} />
    <Route exact path='/profile' component={Profile} />
    <Route exact path='/edit-profile' component={EditProfile} />
    <Route exact path='/user-list' component={UserList} />
    <Route exact path='/console' component={console} />
    <Route exact path='/games' component={games} />

</AdminLTEroot>;

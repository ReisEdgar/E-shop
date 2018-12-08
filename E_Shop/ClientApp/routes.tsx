import * as React from 'react';
import { Route } from 'react-router-dom';
import { AdminLTEroot } from './components/AdminLTEroot';
import { Catalog } from './components/Catalog';
import { Forum } from './components/Forum';
import { Consoles } from './components/ForumComponents/Consoles';
import { Pc } from './components/ForumComponents/Pc';
import { Tech } from './components/ForumComponents/Tech';
import { Other } from './components/ForumComponents/Other';
import { Post } from './components/ForumComponents/Post';
import { NewPost } from './components/ForumComponents/NewPost';
import { EditPost } from './components/ForumComponents/EditPost';
import { EditComment } from './components/ForumComponents/EditComment';
import { Help } from './components/Help';
import Profile from "./components/UserComponents/Profile";
import {EditProfile} from "./components/UserComponents/EditProfile";
import { UserList } from "./components/UserComponents/UserList";
import { console } from "./components/Console";
import { games } from "./components/Games";
import { Newgame } from "./components/Newgame"; 
import { NewKonsole } from "./components/NewKonsole";

export const routes = <AdminLTEroot>
    <Route exact path='/' component={Catalog} />
    <Route exact path='/catalog' component={Catalog} />
    <Route exact path='/forum' component={Forum} />
    <Route exact path='/forum/konsoles' component={Consoles} />
    <Route exact path='/forum/pc' component={Pc} />
    <Route exact path='/forum/iranga' component={Tech} />
    <Route exact path='/forum/kita' component={Other} />
    <Route exact path='/kurti' component={NewPost} />
    <Route exact path='/tema/redaguoti/:id' component={EditPost} />
    <Route exact path='/komentaras/redaguoti:id' component={EditComment} />
    <Route exact path='/tema/:id' component={Post} />
    <Route exact path='/help' component={Help} />
    <Route exact path='/profile' component={Profile} />
    <Route exact path='/edit-profile' component={EditProfile} />
    <Route exact path='/user-list' component={UserList} />
    <Route exact path='/console' component={console} />
    <Route exact path='/games' component={games} />
    <Route exact path='/Newgame' component={Newgame} />
    <Route exact path='/NewKonsole' component={NewKonsole} />
                          

</AdminLTEroot>;

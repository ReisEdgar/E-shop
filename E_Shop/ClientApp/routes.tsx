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
import { console } from "./components/Katalog/Console";
import { games } from "./components/Katalog/Games";
import { Newgame } from "./components/Katalog/Newgame"; 
import { NewKonsole } from "./components/Katalog/NewKonsole";
import { AdminGames } from "./components/Katalog/Admin/AdminGames";
import { allGames } from "./components/Katalog/Admin/allGames";
import { AdminKonsoles } from "./components/Katalog/Admin/AdminKonsoles";
import { allkonsoles } from "./components/Katalog/Admin/allkonsoles";
import { PlaystationKonsoles } from "./components/Katalog/Konsoles/PlaystationKonsoles";
import { MicrosoftKonsoles } from "./components/Katalog/Konsoles/MicrosoftKonsoles";
import { NintendoKonsoles } from "./components/Katalog/Konsoles/NintendoKonsoles";
import { ActionGames } from "./components/Katalog/Zaidimai/ActionGames";
import { AdventureGames } from "./components/Katalog/Zaidimai/AdventureGames";
import { RolePlayingGames } from "./components/Katalog/Zaidimai/RolePlayingGames";
import { SimulationGames } from "./components/Katalog/Zaidimai/SimulationGames";
import { StrategyGames } from "./components/Katalog/Zaidimai/StrategyGames";
import { SportsGames } from "./components/Katalog/Zaidimai/SportsGames";

//Adminall
export const routes = <AdminLTEroot>
    <Route exact path='/' component={games} />
    <Route exact path='/catalog' component={games} />
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
    <Route exact path='/AdminGames' component={AdminGames} />
    <Route exact path='/allGames' component={allGames} />
    <Route exact path='/AdminKonsoles' component={AdminKonsoles} />
    <Route exact path='/allkonsoles' component={allkonsoles} />
    <Route exact path='/PlaystationKonsoles' component={PlaystationKonsoles} />
    <Route exact path='/MicrosoftKonsoles' component={MicrosoftKonsoles} />
    <Route exact path='/NintendoKonsoles' component={NintendoKonsoles} />
    <Route exact path='/ActionGames' component={ActionGames} />
    <Route exact path='/AdventureGames' component={AdventureGames} />
    <Route exact path='/RolePlayingGames' component={RolePlayingGames} />
    <Route exact path='/SimulationGames' component={SimulationGames} />
    <Route exact path='/StrategyGames' component={StrategyGames} />
    <Route exact path='/SportsGames' component={SportsGames} />
                          

                      </AdminLTEroot>;

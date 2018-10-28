import * as React from 'react';
import { Route } from 'react-router-dom';
import { AdminLTEroot } from './components/AdminLTEroot';
import { Catalog } from './components/Catalog';
import { Forum } from './components/Forum';
import { Help } from './components/Help';
export const routes = <AdminLTEroot>
    <Route exact path='/' component={Catalog} />
    <Route exact path='/catalog' component={Catalog} />
    <Route exact path='/forum' component={Forum} />
    <Route exact path='/help' component={Help} />
</AdminLTEroot>;

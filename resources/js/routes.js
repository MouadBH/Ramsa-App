import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Master from './components/Master';
import Main from './components/main/Main';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={Master} />
            <Route path="/h" component={Main} />
        </Switch>
    );
}

export default Routes;
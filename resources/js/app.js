
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import Master from './components/Master';
    import Main from './components/main/Main';
    import Header from './components/header/Header';
import Login from './components/login/Login';
import Client from './components/client/Client';
    import CreateClient from './components/client/Create';
    import EditClient from './components/client/Edit';
    import ShowClient from './components/client/show';
    
if (!localStorage.getItem('usertoken')) {
    browserHistory.push(`/login`);
}


if (document.getElementById('app')) {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route exact path="/" component={Master}>
                <IndexRoute exact component={Main}></IndexRoute>
                <Route path="h" component={Header}></Route>
                <Route exact path="client" component={Client}></Route>
                <Route exact path="/client/detail/:id" component={ShowClient}></Route>
                <Route exact path="/client/create" component={CreateClient}></Route>
                <Route exact path="client/edit/:id" component={EditClient}></Route>
            </Route>
            <Route path="login" component={Login} />
        </Router>
        , document.getElementById('app'));
}

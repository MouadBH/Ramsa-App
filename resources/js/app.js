
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
import Login from './components/login/Login';
import Client from './components/client/Client';
    import CreateClient from './components/client/Create';
    import EditClient from './components/client/Edit';
    import ShowClient from './components/client/show';
import Contrat from './components/contrat/Contrat';
    import ShowContrat from './components/contrat/Show';
    import CreateContrat from './components/contrat/Create';
    import EditContrat from './components/contrat/Edit';
import Equipe from './components/equipe/Equipe';
    import CreateEquipe from './components/equipe/Create';
    import EditEquipe from './components/equipe/Edit';
    import ShowEquipe from './components/equipe/Show';
import Reclamation from './components/reclamation/Reclamation';
    import ShowReclamation from './components/reclamation/Show';
import Employe from './components/employe/Employe';
    import EditEmploye from './components/employe/Edit';
    import CreateEmploye from './components/employe/Create';
import Profile from './components/profile/Profile';
import ReclamationEquipe from './components/profile/reclamation';

if (!localStorage.getItem('usertoken')) {
    browserHistory.push(`/login`);
}


if (document.getElementById('app')) {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="login" component={Login} />
            <Route exact path="/dashboard" component={Master}>
                <IndexRoute exact component={Profile}></IndexRoute>
                <Route exact path="/dashboard/reclamation/details/:id" component={ReclamationEquipe}></Route>
            </Route>
            <Route exact path="/" component={Master}>
                <IndexRoute exact component={Main}></IndexRoute>
                <Route exact path="client" component={Client}></Route>
                    <Route exact path="/client/detail/:id" component={ShowClient}></Route>
                    <Route exact path="/client/create" component={CreateClient}></Route>
                    <Route exact path="client/edit/:id" component={EditClient}></Route>
                <Route exact path="contrat" component={Contrat}></Route>
                    <Route exact path="/contrat/create" component={CreateContrat}></Route>
                    <Route exact path="/contrat/detail/:id" component={ShowContrat}></Route>
                    <Route exact path="/contrat/edit/:id" component={EditContrat}></Route>
                <Route exact path="equipe" component={Equipe}></Route>
                    <Route exact path="/equipe/create" component={CreateEquipe}></Route>
                    <Route exact path="/equipe/edit/:id" component={EditEquipe}></Route>
                    <Route exact path="/equipe/detail/:id" component={ShowEquipe}></Route>
                <Route exact path="reclamation" component={Reclamation}></Route>
                    <Route exact path="/reclamation/detail/:id" component={ShowReclamation}></Route>
                <Route exact path="employe" component={Employe}></Route>
                    <Route exact path="/employe/edit/:id" component={EditEmploye}></Route>
                    <Route exact path="/employe/create" component={CreateEmploye}></Route>
            </Route>


        </Router>
        , document.getElementById('app'));
}

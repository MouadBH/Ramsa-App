import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import $ from 'jquery';

export default class Master extends Component {
    constructor(){
        super();
        this.toggleSidebar = this.toggleSidebar.bind(this)
    }
    logOut(e){
        e.preventDefault();

        console.log('11')
        localStorage.removeItem('usertoken');
        localStorage.removeItem('user');
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_nom');
        localStorage.removeItem('user_prenom');
        localStorage.removeItem('user_type');
        if (localStorage.getItem('user_id_equipe')) {
          localStorage.removeItem('user_id_equipe');
        }

        browserHistory.push(`/login`);
    }
    componentDidMount(){
        this.toggleSidebar();
    }
    toggleSidebar(){

        // $("#page-wrapper").click(function(){
        //     alert("The paragraph was clicked.");
        //   });
    }
    renderSidebar(){
      if (localStorage.user_type === "admin") {
        return <ul className="sidebar-nav">
            <li>
                <IndexLink to="/" className=" active">
                    <i className="gi gi-stopwatch sidebar-nav-icon"></i>
                    <span className="sidebar-nav-mini-hide">Dashboard</span>
                </IndexLink>
            </li>
            <li>
                <a href="" className="sidebar-nav-menu">
                    <i className="fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide"></i>
                    <i className="gi gi-stopwatch sidebar-nav-icon"></i>
                    <span className="sidebar-nav-mini-hide">Client</span>
                </a>
                <ul>
                    <li>
                        <Link to="/client">All</Link>
                    </li>
                    <li>
                        <Link to="/client/create">Ajouter</Link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="" className="sidebar-nav-menu">
                    <i className="fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide"></i>
                    <i className="gi gi-stopwatch sidebar-nav-icon"></i>
                    <span className="sidebar-nav-mini-hide">Reclamation</span>
                </a>
                <ul>
                    <li>
                        <Link to="/reclamation">All</Link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" className="sidebar-nav-menu">
                    <i className="fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide"></i>
                    <i className="gi gi-stopwatch sidebar-nav-icon"></i>
                    <span className="sidebar-nav-mini-hide">Contrat</span>
                </a>
                <ul>
                    <li>
                        <Link to="/contrat">All</Link>
                    </li>
                    <li>
                        <Link to="/contrat/create">Ajouter</Link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" className="sidebar-nav-menu">
                    <i className="fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide"></i>
                    <i className="gi gi-stopwatch sidebar-nav-icon"></i>
                    <span className="sidebar-nav-mini-hide">Equipe</span>
                </a>
                <ul>
                    <li>
                        <Link to="/equipe">All</Link>
                    </li>
                    <li>
                        <Link to="/equipe/create">Ajouter</Link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" className="sidebar-nav-menu">
                    <i className="fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide"></i>
                    <i className="gi gi-cogwheel sidebar-nav-icon"></i>
                    <span className="sidebar-nav-mini-hide">Employes</span>
                </a>
                <ul>
                    <li>
                        <Link to="/employe">All</Link>
                    </li>
                    <li>
                        <Link to="/employe/create">Ajouter</Link>
                    </li>
                </ul>
            </li>
        </ul>
      }else if(localStorage.user_type === "emp"){
        return <ul className="sidebar-nav">
            <li>
                <IndexLink to="/dashboard" className=" active">
                    <i className="gi gi-stopwatch sidebar-nav-icon"></i>
                    <span className="sidebar-nav-mini-hide">Dashboard</span>
                </IndexLink>
            </li>
          </ul>;
      }
    }
    render() {
        return (
            <div id="page-wrapper">

                <div className="preloader themed-background">
                    <h1 className="push-top-bottom text-light text-center"><strong>Pro</strong>UI</h1>
                    <div className="inner">
                        <h3 className="text-light visible-lt-ie9 visible-lt-ie10"><strong>Loading..</strong></h3>
                        <div className="preloader-spinner hidden-lt-ie9 hidden-lt-ie10"></div>
                    </div>
                </div>

                <div id="page-container" className="sidebar-partial sidebar-visible-lg sidebar-no-animations">

                    <div id="sidebar" style={{position: "fixed"}}>
                        <div id="sidebar-scroll">
                            <div className="sidebar-content">
                                <Link to="h" className="sidebar-brand">
                                    <i className="gi gi-flash"></i><span className="sidebar-nav-mini-hide"><strong>Ramsa</strong>App</span>
                                </Link>

                                <div className="sidebar-section sidebar-user clearfix sidebar-nav-mini-hide">
                                    <div className="sidebar-user-avatar">
                                        <a href="index.html">
                                            <img src="https://elmashhad.com/themes/msh/assets/images/avatar.png" alt="avatar" />
                                        </a>
                                    </div>
                                    <div className="sidebar-user-name">{localStorage.user_nom}</div>
                                </div>
                                  {this.renderSidebar()}
                              </div>
                        </div>
                    </div>

                    <div id="main-container">
                        <header className="navbar navbar-default">
                        <ul className="nav navbar-nav-custom">
                            <li>
                                <a href="javascript:void(0)" onClick={this.toggleSidebar()}>
                                    <i className="fa fa-bars fa-fw"></i>
                                </a>
                            </li>
                        </ul>


                            <ul className="nav navbar-nav-custom pull-right">
                                <li className="dropdown">
                                    <a href="" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="https://elmashhad.com/themes/msh/assets/images/avatar.png" alt="avatar" /> <i className="fa fa-angle-down"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-custom dropdown-menu-right">
                                        <li>
                                            <a href="/" onClick={this.logOut.bind(this)}>
                                                <i className="fa fa-user fa-fw pull-right"></i>
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </header>
                        <div id="page-content">
                            {this.props.children}
                        </div>
                        <footer className="clearfix">
                            <div className="pull-right">
                                Projet fin d'etude
                            </div>
                            <div className="pull-left">

                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

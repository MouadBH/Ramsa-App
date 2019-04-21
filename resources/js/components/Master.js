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

                    <div id="sidebar">
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


                                <ul className="sidebar-nav">
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
                                                <a href="javascript:void(0)">All</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">Ajouter</a>
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
                                            <span className="sidebar-nav-mini-hide">Employeé</span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="javascript:void(0)">All</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">Ajouter</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="sidebar-nav-menu">
                                            <i className="fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide"></i>
                                            <i className="gi gi-cogwheel sidebar-nav-icon"></i>
                                            <span className="sidebar-nav-mini-hide">Dropdown</span>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="javascript:void(0)">Link #1</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">Link #2</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
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
                            <form action="index.html" method="post" className="navbar-form-custom">
                                <div className="form-group">
                                    <input type="text" id="top-search" name="top-search" className="form-control" placeholder="Search.." />
                                </div>
                            </form>

                            <ul className="nav navbar-nav-custom pull-right">
                                <li className="dropdown">
                                    <a href="" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="https://elmashhad.com/themes/msh/assets/images/avatar.png" alt="avatar" /> <i className="fa fa-angle-down"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-custom dropdown-menu-right">
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-clock-o fa-fw pull-right"></i>
                                                <span className="badge pull-right">10</span>
                                                Client
                                        </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-envelope-o fa-fw pull-right"></i>
                                                <span className="badge pull-right">5</span>
                                                Reclamation
                                        </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-magnet fa-fw pull-right"></i>
                                                <span className="badge pull-right">3</span>
                                                Contrat
                                        </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-question fa-fw pull-right"></i>
                                                <span className="badge pull-right">11</span>
                                                employeé
                                        </a>
                                        </li>
                                        <li className="divider"></li>
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
                                Crafted with <i className="fa fa-heart text-danger"></i> by <a href="http://goo.gl/vNS3I" target="_blank">pixelcave</a>
                            </div>
                            <div className="pull-left">
                                <span id="year-copy"></span> &copy; <a href="http://goo.gl/TDOSuC" target="_blank">ProUI</a>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}


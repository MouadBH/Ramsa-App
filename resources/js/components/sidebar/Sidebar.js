import React, {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router';
const Sidebar = () => {
    return(
                <div id="sidebar">
                    <div id="sidebar-scroll">
                        <div className="sidebar-content">
                            <a href="index.html" className="sidebar-brand">
                                <i className="gi gi-flash"></i><span className="sidebar-nav-mini-hide"><strong>Pro</strong>UI</span>
                            </a>

                            <div className="sidebar-section sidebar-user clearfix sidebar-nav-mini-hide">
                                <div className="sidebar-user-avatar">
                                    <a href="index.html">
                                        <img src="https://elmashhad.com/themes/msh/assets/images/avatar.png" alt="avatar" />
                                    </a>
                                </div>
                                <div className="sidebar-user-name">John Doe</div>
                                <div className="sidebar-user-links">
                                    <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Profile"><i className="gi gi-user"></i></a>
                                    <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Messages"><i className="gi gi-envelope"></i></a>
                                    <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Settings"><i className="gi gi-cogwheel"></i></a>
                                    <a href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="Logout"><i className="gi gi-exit"></i></a>
                                </div>
                            </div>


                            <ul className="sidebar-nav">
                                <li>
                                    <a href="index.html" className=" active"><i className="gi gi-stopwatch sidebar-nav-icon"></i><span className="sidebar-nav-mini-hide">Dashboard</span></a>
                                </li>
                                <li>
                                    <a href="#" className="sidebar-nav-menu"><i className="fa fa-angle-left sidebar-nav-indicator sidebar-nav-mini-hide"></i><i className="gi gi-cogwheel sidebar-nav-icon"></i><span className="sidebar-nav-mini-hide">Dropdown</span></a>
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
    );
}
export default Sidebar;
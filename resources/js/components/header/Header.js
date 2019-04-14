import React from 'react';

const Header = () => {
    return(
        <header className="navbar navbar-default">
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
                                            Link #1
                                        </a>
                                        <a href="javascript:void(0)">
                                            <i className="fa fa-envelope-o fa-fw pull-right"></i>
                                            <span className="badge pull-right">5</span>
                                            Link #2
                                        </a>
                                        <a href="javascript:void(0)">
                                            <i className="fa fa-magnet fa-fw pull-right"></i>
                                            <span className="badge pull-right">3</span>
                                            Link #3
                                        </a>
                                        <a href="javascript:void(0)">
                                            <i className="fa fa-question fa-fw pull-right"></i>
                                            <span className="badge pull-right">11</span>
                                            Link #4
                                        </a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="fa fa-user fa-fw pull-right"></i>
                                            Link #1
                                        </a>
                                        <a href="javascript:void(0)">
                                            <i className="fa fa-cog fa-fw pull-right"></i>
                                            Link #2
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </header>
    );
}

export default Header;
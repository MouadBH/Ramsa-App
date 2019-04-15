import React, {Component} from 'react';
import MiniCard from '../minicard/MiniCard';

class Main extends Component {
    render() {
        return (
            <div id="page-content">
                    <div className="content-header content-header-media">
                            <div className="header-section">
                                <div className="row">
                                    <div className="col-md-4 col-lg-6 hidden-xs hidden-sm">
                                        <h1>Welcome <strong>Admin</strong><br /><small>You Look Awesome!</small></h1>
                                    </div>

                                    <div className="col-md-8 col-lg-6">
                                        <div className="row text-center">
                                            <div className="col-xs-4 col-sm-3">
                                                <h2 className="animation-hatch">
                                                    $<strong>93.7k</strong><br />
                                                    <small><i className="fa fa-thumbs-o-up"></i> Great</small>
                                                </h2>
                                            </div>
                                            <div className="col-xs-4 col-sm-3">
                                                <h2 className="animation-hatch">
                                                    <strong>167k</strong><br />
                                                    <small><i className="fa fa-heart-o"></i> Likes</small>
                                                </h2>
                                            </div>
                                            <div className="col-xs-4 col-sm-3">
                                                <h2 className="animation-hatch">
                                                    <strong>101</strong><br />
                                                    <small><i className="fa fa-calendar-o"></i> Events</small>
                                                </h2>
                                            </div>
                                            <div className="col-sm-3 hidden-xs">
                                                <h2 className="animation-hatch">
                                                    <strong>27° C</strong><br />
                                                    <small><i className="fa fa-map-marker"></i> Sydney</small>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="/assets/img/placeholders/headers/dashboard_header.jpg" alt="header image" className="animation-pulseSlow" />
                        </div>

                        <div className="row">
                            <MiniCard name="Client" to="" icon="fa-users" />
                            <MiniCard name="Reclamation" to="" icon="fa-files-o" />
                            <MiniCard name="Contrat" to="" icon="fa-file-text" />
                            <MiniCard name="employe" to="" icon="fa-user-secret" />
                        </div>
                    </div>
        );
    };
}
export default Main;
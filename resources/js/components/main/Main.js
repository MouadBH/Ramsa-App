import React, {Component} from 'react'

class Main extends Component {
    render() {
        return (
            <div id="page-content">
                        <div className="content-header">
                            <div className="header-section">
                                <h1>
                                    <i className="gi gi-brush"></i>Page Title<br /><small>Subtitle</small>
                                </h1>
                            </div>
                        </div>
                        <ul className="breadcrumb breadcrumb-top">
                            <li>Category</li>
                            <li><a href="">Page</a></li>
                        </ul>

                        <div className="block">
                            <div className="block-title">
                                <div className="block-options pull-right">
                                    <a href="javascript:void(0)" className="btn btn-alt btn-sm btn-default" data-toggle="tooltip" title="Settings"><i className="fa fa-cog"></i></a>
                                    <div className="btn-group btn-group-sm">
                                        <a href="javascript:void(0)" className="btn btn-alt btn-sm btn-default dropdown-toggle enable-tooltip" data-toggle="dropdown" title="Options"><span className="caret"></span></a>
                                        <ul className="dropdown-menu dropdown-custom dropdown-menu-right">
                                            <li>
                                                <a href="javascript:void(0)"><i className="gi gi-cloud pull-right"></i>Simple Action</a>
                                                <a href="javascript:void(0)"><i className="gi gi-airplane pull-right"></i>Another Action</a>
                                            </li>
                                            <li className="divider"></li>
                                            <li>
                                                <a href="javascript:void(0)"><i className="fa fa-wrench fa-fw pull-right"></i>Separated Action</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <h2>Block</h2>
                            </div>

                            <p>...</p>
                        </div>
                    </div>
        );
    };
}
export default Main;
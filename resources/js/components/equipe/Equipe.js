import React, { Component } from "react";
import { Link, IndexLink, browserHistory } from 'react-router';
import { equipes } from '../actions/Actions';

class Equipe extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            equipes: []
        }
    }

    componentDidMount(){
        equipes().then((equipe) => this.setState({
                equipes: equipe
            })
        );
    }

    renderTable(){
        const { equipes } = this.state;
        return equipes && equipes.length ? equipes.map((equipe, index) => (
            <tr key={index}>
                <td className="text-center"><Link to={"/equipe/detail/"+equipe.id}>{equipe.id}</Link></td>
                <td className="text-center">{equipe.libelle	}</td>
                <td className="text-center">
                    <div className="btn-group btn-group-sm">
                        <Link to={"/equipe/edit/"+equipe.id} title="Modifier" className="btn btn-default">
                            <i className="fa fa-pencil"></i> Modifier
                        </Link>
                        <Link to={"/equipe/detail/"+equipe.id} title="Detail" className="btn btn-primary">
                            <i className="fa fa-plus-circle"></i> Detail
                        </Link>
                    </div>
                </td>
            </tr>
        )) : null;
    }
    
    render() {
        return (
            <div>
                <div className="content-header">
                    <div className="header-section">
                        <h1>
                            <i className="fa fa-user" />Equipes<br />
                        </h1>
                    </div>
                </div>
                <ul className="breadcrumb breadcrumb-top">
                    <li>Home</li>
                    <li><Link to='/equipe'>Equipe</Link></li>
                </ul>
                <div className="block full animation-fadeInQuick">
                    <div className="block-title">
                        <h2>Tableau des <strong>Equipes</strong> </h2>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-vcenter table-condensed table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">libelle</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Equipe;
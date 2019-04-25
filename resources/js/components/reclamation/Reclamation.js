import React, { Component } from "react";
import { Link, IndexLink, browserHistory } from 'react-router';
import { reclamations } from '../actions/Actions';

class Reclamation extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            reclamations: []
        }
    }

    componentDidMount(){
        reclamations().then((reclamation) => this.setState({
                reclamations: reclamation
            })
        );
    }

    renderTable(){
        const { reclamations } = this.state;
        return reclamations && reclamations.length ? reclamations.map((reclamation, index) => (
            <tr key={index}>
                <td className="text-center"><Link to={"/reclamation/detail/"+reclamation.id}>{reclamation.id}</Link></td>
                <td className="text-center">{reclamation.date}</td>
                <td className="text-center"><Link to={"/contrat/detail/"+reclamation.id_contrat}>{reclamation.id_contrat}</Link></td>
                <td className="text-center">{reclamation.type}</td>
                <td className="text-center">{ reclamation.affecte == 0 ? <span className="label label-warning">Pas encore</span> : <span className="label label-primary">OUI</span> }</td>
                <td className="text-center">
                    <div className="btn-group btn-group-sm">
                        <Link to={"/reclamation/detail/"+reclamation.id} title="Detail" className="btn btn-primary">
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
                            <i className="fa fa-user" />Reclamation<br />
                        </h1>
                    </div>
                </div>
                <ul className="breadcrumb breadcrumb-top">
                    <li>Home</li>
                    <li><Link to='/reclamation'>Reclamation</Link></li>
                </ul>
                <div className="block full animation-fadeInQuick">
                    <div className="block-title">
                        <h2>Tableau des <strong>Reclamation</strong> </h2>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-vcenter table-condensed table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Date</th>
                                    <th className="text-center">Police</th>
                                    <th className="text-center">Type</th>
                                    <th className="text-center">Affecte</th>
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

export default Reclamation;
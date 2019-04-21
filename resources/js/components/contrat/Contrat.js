import React, { Component } from "react";
import { Link, IndexLink, browserHistory } from 'react-router';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { contrats } from '../actions/Actions';


class Contrat extends Component {
    constructor() {
        super();
        this.state = {
            contrats: []
        }
    }
    componentDidMount() {
        contrats().then((contrat) => this.setState({
            contrats: contrat
        })
        );
    }

    renderTable() {
        const { contrats } = this.state;
        return contrats && contrats.length ? contrats.map((c, index) => (
            <tr key={index}>
                <td className="text-center"><Link to={"/client/contrat/"+c.id}>{c.id}</Link></td>
                <td className="text-center">{c.date_debut}</td>    
                <td className="text-center">{c.date_fin}</td>
                <td className="text-center">{c.id_client}</td>
                <td className="text-center">{c.adress_loc}</td>
                <td className="text-center">{c.compteur}</td>
                <td className="text-center">
                    <div className="btn-group btn-group-sm">
                        <Link to={"/contrat/edit/"+c.id} title="Modifier" className="btn btn-default">
                            <i className="fa fa-pencil"></i> Modifier
                        </Link>
                        <Link to={"/contrat/detail/"+c.id} title="Detail" className="btn btn-primary">
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
                            <i className="fa fa-user" />Contrat<br />
                        </h1>
                    </div>
                </div>
                <ul className="breadcrumb breadcrumb-top">
                    <li>Home</li>
                    <li><Link to='/contrat'>Contrat</Link></li>
                </ul>
                <div className="block full animation-fadeInQuick">
                    <div className="block-title">
                        <h2>Tableau des <strong>Contrats</strong> </h2>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-vcenter table-condensed table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Date Debut</th>
                                    <th className="text-center">Date Fin</th>
                                    <th className="text-center">Client</th>
                                    <th className="text-center">Addres</th>
                                    <th className="text-center">Compteur</th>
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

export default Contrat;
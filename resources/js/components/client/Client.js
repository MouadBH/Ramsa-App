import React, { Component } from "react";
import { Link, IndexLink, browserHistory } from 'react-router';
import { clients } from '../actions/Actions';


class Client extends Component {
    constructor() {
        super();
        this.state = {
            clients: []
        }
    }
    componentDidMount() {
        clients().then((client) => this.setState({
            clients: client
        })
        );
    }

    renderTable() {
        const { clients } = this.state;
        return clients && clients.length ? clients.map((c, index) => (
            <tr key={index}>
                <td className="text-center"><Link to={"/client/detail/"+c.id}>{c.id}</Link></td>
                <td className="text-center">{c.nom}</td>    
                <td className="text-center">{c.prenom}</td>
                <td className="text-center">{c.cin}</td>
                <td className="text-center">{c.adress_corp}</td>
                <td className="text-center">{c.tel}</td>
                <td className="text-center">{c.email}</td>
                <td className="text-center">
                    <div className="btn-group btn-group-sm">
                        <Link to={"/client/edit/"+c.id} title="Modifier" className="btn btn-default">
                            <i className="fa fa-pencil"></i> Modifier
                        </Link>
                        <Link to={"/client/detail/"+c.id} title="Detail" className="btn btn-primary">
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
                            <i className="fa fa-user" />Client<br />
                        </h1>
                    </div>
                </div>
                <ul className="breadcrumb breadcrumb-top">
                    <li>Home</li>
                    <li><Link to='/client'>Client</Link></li>
                </ul>
                <div className="block full animation-fadeInQuick">
                    <div className="block-title">
                        <h2>Tableau de <strong>Clients</strong> </h2>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-vcenter table-condensed table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Nom</th>
                                    <th className="text-center">Prenom</th>
                                    <th className="text-center">Cin</th>
                                    <th className="text-center">Addres</th>
                                    <th className="text-center">Telephone</th>
                                    <th className="text-center">Email</th>
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

export default Client;
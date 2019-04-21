import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { getContratById } from '../actions/Actions';
import { deleteClient } from '../actions/Actions';
import Map from '../map/Map';

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDelete: false,
            idContrat: this.props.params.id,
            date_debut: '',
            date_fin: '',
            id_client: '',
            adress_loc: '',
            id_loc: '',
            id_secteur: '',
            id_tournee: '',
            order: '',
            lat: 30.399267,
            long: -8.5217,
            compteur: '',
            errors: {}
        };

        this.deleteClient = this.deleteClient.bind(this);
    }

    componentDidMount() {
        getContratById(this.state.idContrat).then((c) => {
            this.setState({
                idContrat: this.props.params.id,
                date_debut: c.date_debut,
                date_fin: c.date_fin,
                id_client: c.id ,
                adress_loc: c.adress_loc,
                id_loc: c.id_loc,
                id_secteur: c.id_secteur,
                id_tournee: c.id_tournee,
                order: c.order,
                lat: c.lat,
                long: c.long,
                compteur: c.compteur
            });
        }
        );
        //document.title = "dfsdfsdfsd"

    }

    deleteClient() {
        //e.preventDefault();

        deleteClient(this.state.idContrat).then((res) => {
            console.log(res)
            browserHistory.push(`/client`);

            console.log(this.state)
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div className="content-header">
                    <div className="header-section">
                        <h1>
                            <i className="fa fa-user" />Information de Contrat<br />
                        </h1>
                    </div>
                </div>
                <ul className="breadcrumb breadcrumb-top">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contrat'>Contrat</Link></li>
                    <li>{this.state.idContrat}</li>
                </ul>
                <div className="row animation-fadeInQuick">
                    <div className="col-lg-4">
                        <div className="block">
                            <div className="block-title">
                                <h2><i className="fa fa-file-o"></i> <strong>Localization de Contrat</strong></h2>
                            </div>
                            <table className="table table-bordered table-striped table-vcenter">
                                <thead>
                                    <tr>
                                        <th className="text-center">Loc</th>
                                        <th className="text-center">Secteur</th>
                                        <th className="text-center">Tournée</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center" style={{ width: '100px' }}><a href="#"><strong>1</strong></a></td>
                                        <td className="hidden-xs" style={{ width: '15%' }}><a href="javascript:void(0)">5 Products</a></td>
                                        <td className="text-right hidden-xs" style={{ width: '10%' }}><strong>$585,00</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="block">
                            <div className="block-title">
                                <h2><i className="fa fa-file-o"></i> <strong>Contrat Info</strong></h2>
                            </div>
                            <table className="table table-bordered table-striped table-vcenter">
                                <thead>
                                    <tr>
                                        <th className="text-center">ID</th>
                                        <th className="text-center">Date Debut</th>
                                        <th className="text-center">Date Fin</th>
                                        <th className="text-center">Client</th>
                                        <th className="text-center">Addres</th>
                                        <th className="text-center">Compteur</th>
                                        <th className="text-center">Order</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center" style={{ width: '100px' }}><a href="#"><strong>{this.state.idContrat}</strong></a></td>
                                        <td className="text-center" style={{ width: '15%' }}>{this.state.date_debut}</td>
                                        <td className="text-right" style={{ width: '10%' }}>{this.state.date_fin}</td>
                                        <td className="text-center" style={{ width: '100px' }}><Link to={"/client/detail/"+this.state.id_client}><strong>{this.state.id_client}</strong></Link></td>
                                        <td className="text-center">{this.state.adress_loc}</td>
                                        <td className="text-center"><span className="label label-warning">{this.state.compteur}</span></td>
                                        <td className="text-center"><span className="label label-primary">{this.state.order}</span></td>
                                        <td className="text-center">{this.state.idContrat}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="block">
                                <div className="block-title">
                                    <h2><i className="fa fa-file-o"></i> <strong>Position de Contrat</strong></h2>
                                </div>
                                <Map
                                    isMarkerShown
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDebAMQ2oe6eiBRR5YWBJqKY5KyQxsSbKc&v=3.exp&libraries=geometry,drawing,places"
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `400px` }} id="gmap-markers"/>}
                                    mapElement={<div style={{ height: `100%` }} />}
                                    lat={this.state.lat}
                                    lng={this.state.long}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Show;
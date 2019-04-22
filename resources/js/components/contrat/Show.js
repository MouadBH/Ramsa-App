import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { getContratById } from '../actions/Actions';
import { getContratInfo } from '../actions/Actions';
import { deleteContrat } from '../actions/Actions';
import { Map } from '../map/Map';

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDelete: false,
            showMarker: false,
            idContrat: this.props.params.id,
            date_debut: '',
            date_fin: '',
            client: {},
            adress_loc: '',
            loc: {},
            secteur: {},
            tourne: {},
            order: '',
            lat: 30.399267,
            long: -9.5217,
            compteur: '',
            errors: {}
        };

        this.deleteContrat = this.deleteContrat.bind(this);
    }

    componentDidMount() {
        getContratById(this.state.idContrat).then((c) => {
            this.setState({
                idContrat: c.id,
                date_debut: c.date_debut,
                date_fin: c.date_fin,
                adress_loc: c.adress_loc,
                order: c.order,
                lat: c.lat,
                long: c.long,
                compteur: c.compteur,
                showMarker: true
            });
        }
        );
        getContratInfo(this.state.idContrat).then((c) => {
            this.setState({
                client: c[0].data,
                loc: c[1].data,
                secteur: c[2].data,
                tourne: c[3].data
            });
        }
        );
        //document.title = "dfsdfsdfsd"

    }

    deleteContrat() {
        console.log(this.state)
        deleteContrat(this.state.idContrat).then((res) => {
            console.log(res)
            browserHistory.push(`/contrat`);
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
                                        <td className="text-center" style={{ width: '100px' }}><a href="#"><strong>{this.state.loc.libelle}</strong></a></td>
                                        <td className="text-center" style={{ width: '15%' }}><a href="javascript:void(0)">{this.state.secteur.libelle}</a></td>
                                        <td className="text-center" style={{ width: '10%' }}><strong>{this.state.tourne.libelle}</strong></td>
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
                                        <td className="text-center" style={{ width: '100px' }}><Link to={"/client/detail/" + this.state.client.id}><strong>{this.state.client.nom} {this.state.client.prenom}</strong></Link></td>
                                        <td className="text-center">{this.state.adress_loc}</td>
                                        <td className="text-center"><span className="label label-warning">{this.state.compteur}</span></td>
                                        <td className="text-center"><span className="label label-primary">{this.state.order}</span></td>
                                        <td className="text-center">
                                            <div className="btn-group btn-group-sm">
                                                <Link to={"/contrat/edit/" + this.state.idContrat} title="Modifier" className="btn btn-default">
                                                    <i className="fa fa-pencil"></i> 
                                                </Link>
                                                <button onClick={() => this.setState({ isDelete: true })} title="Detail" className="btn btn-danger">
                                                    <i className="fa fa-trash"></i> 
                                                </button>
                                            </div>
                                        </td>
                                        <SweetAlert
                                                show={this.state.isDelete}
                                                title="Delete"
                                                text="Are you sure to delete this contrat?"
                                                type="error"
                                                showCancelButton
                                                confirmButtonText="Delete"
                                                confirmButtonColor="#f27474"
                                                showLoaderOnConfirm={true}
                                                onConfirm={() => {
                                                    this.deleteContrat();
                                                    this.setState({ isDelete: false });
                                                }}
                                                onCancel={() => this.setState({ isDelete: false })}
                                                onOutsideClick={() => this.setState({ isDelete: false })}

                                            />
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
                                    isMarkerShown={this.state.showMarker}
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDebAMQ2oe6eiBRR5YWBJqKY5KyQxsSbKc&v=3.exp&libraries=geometry,drawing,places"
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `400px` }} id="gmap-markers" />}
                                    mapElement={<div style={{ height: `100%` }} />}
                                    lat={this.state.lat}
                                    lng={this.state.long}
                                    zoom={15}
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
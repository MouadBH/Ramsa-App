import React, { Component } from "react";
import { Link, IndexLink, browserHistory } from 'react-router';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { Marker } from "react-google-maps"
import { contrats } from '../actions/Actions';
import { MapMuliMarker } from '../map/Map';


class Contrat extends Component {
    constructor() {
        super();
        this.state = {
            contrats: [],
            markers: []
        }
    }
    componentDidMount() {
        contrats().then((contrat) => this.setState({
            contrats: contrat
        })
        );
    }
    renderMarkers(){
        const { contrats } = this.state;
        return contrats && contrats.length ? contrats.map((m, index) => (
            <Marker key={index} position={{ lat: m.lat, lng: m.long }} />
        )) : null;
    }
    renderTable() {
        const { contrats } = this.state;
        return contrats && contrats.length ? contrats.map((c, index) => (
            <tr key={index}>
                <td className="text-center"><Link to={"/contrat/" + c.id}>{c.id}</Link></td>
                <td className="text-center">{c.date_debut}</td>
                <td className="text-center">{c.date_fin}</td>
                <td className="text-center">{c.id_client}</td>
                <td className="text-center">{c.adress_loc}</td>
                <td className="text-center">{c.compteur}</td>
                <td className="text-center">
                    <div className="btn-group btn-group-sm">
                        <Link to={"/contrat/edit/" + c.id} title="Modifier" className="btn btn-default">
                            <i className="fa fa-pencil"></i> Modifier
                        </Link>
                        <Link to={"/contrat/detail/" + c.id} title="Detail" className="btn btn-primary">
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
                        <h2>Localisation Sur Map Des <strong>Contrats</strong> </h2>
                    </div>
                    <MapMuliMarker
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDebAMQ2oe6eiBRR5YWBJqKY5KyQxsSbKc&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} id="gmap-markers" />}
                        mapElement={<div style={{ height: `100%` }} />}
                        zoom={12}
                        center={{ lat: 30.39, lng: -9.5528 }}
                        markers={this.renderMarkers()}
                    />
                </div>
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
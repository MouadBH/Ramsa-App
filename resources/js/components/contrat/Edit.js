import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import Select from 'react-select'
import DatePicker from "react-datepicker";
import isAfter from "date-fns/isAfter";
import "react-datepicker/dist/react-datepicker.css";
import { clients } from '../actions/Actions';
import { getLocal } from '../actions/Actions';
import { updateContrat } from '../actions/Actions';
import { getContratById } from '../actions/Actions';
import { getContratInfo } from '../actions/Actions';
import {Map} from '../map/Map';

class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAdding: false,
            isErr: false,
            idContrat: this.props.params.id,
            client: '',
            adress_loc: '',
            loc: '',
            secteur: '',
            tourne: '',
            order: '',
            compteur: '',
            lat: '',
            lng: '',
            clients: [{ value: "search for a client", label: "search for a client" }],
            locs: [],
            secteurs: [],
            tournes: [],
            showMarker: false,
            marker: [],
            startDate: new Date(),
            endDate: new Date(),
            errors: null
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleMapClick = this.handleMapClick.bind(this);
    }
    handleChange({ startDate, endDate }) {
        startDate = startDate || this.state.startDate;
        endDate = endDate || this.state.endDate;

        if (isAfter(startDate, endDate)) {
            endDate = startDate;
        }

        this.setState({ startDate, endDate });
    }

    handleChangeStart(startDate) { this.handleChange({ startDate }); }

    handleChangeEnd(endDate) { this.handleChange({ endDate }); }

    componentDidMount() {
        clients().then((client) => {
            client.map((c, i) => {
                this.state.clients.push({ value: c.id, label: c.cin })
                this.setState({
                    state: this.state
                })
            })
        }
        );

        getLocal().then((res) => {
           
            res[0].data.locs.map((c, i) => {
                this.state.locs.push({ value: c.id, label: c.libelle })
                this.setState({
                    state: this.state
                })
            })
            res[1].data.secteurs.map((c, i) => {
                this.state.secteurs.push({ value: c.id, label: c.libelle })
                this.setState({
                    state: this.state
                })
            })
            res[2].data.tournes.map((c, i) => {
                this.state.tournes.push({ value: c.id, label: c.libelle })
                this.setState({
                    state: this.state
                })
            })
        }
        );
        getContratById(this.state.idContrat).then((c) => {
            this.setState({
                idContrat: c.id,
                startDate: c.date_debut,
                endDate: c.date_fin,
                adress_loc: c.adress_loc,
                order: c.order,
                lat: c.lat,
                lng: c.long,
                compteur: c.compteur,
                client: c.id_client,
                showMarker: true
            });
        }
        );
        getContratInfo(this.state.idContrat).then((c) => {
            this.setState({
                client: c[0].data.id,
                loc: c[1].data.id,
                secteur: c[2].data.id,
                tourne: c[3].data.id
            });
        }
        );
        
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleMapClick(e){
        //console.log(e.latLng.lng())
        this.setState({ 
            showMarker: true,
            marker: {
                position: e.latLng
            },
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
         })
        //console.log(this.state)
    }
    handleSubmit(e) {
        e.preventDefault();
        const contrat = {
            idContrat: this.state.idContrat,
            id_client: this.state.client,
            date_debut: this.state.startDate,
            date_fin: this.state.endDate,
            adress_loc: this.state.adress_loc,
            id_loc: this.state.loc,
            id_secteur: this.state.secteur,
            id_tournee: this.state.tourne,
            order: this.state.order,
            compteur: this.state.compteur,
            lat: this.state.lat,
            long: this.state.lng
        }
        updateContrat(contrat).then(res => {
            console.log(res.data)
            if (res.data.contrat) {
                this.setState({ isAdding: true })
                this.setState({ isErr: false })
                this.setState({ errors: null })

                this.hundelReset()
            } else {
                this.setState({ isErr: true })
                this.setState({ errors: null })
                this.setState({ errors: res.data })
            }
            console.log(this.state.errors)            
        })
    }

    renderError() {
        if (this.state.errors) {
            const Err = JSON.parse(this.state.errors);
            const ren = <ul>
                {Err['id_client'] != undefined ? <li>{Err['id_client']['0']}</li> : null}
                {Err['date_debut'] != undefined ? <li>{Err['date_debut']['0']}</li> : null}
                {Err['date_fin'] != undefined ? <li>{Err['date_fin']['0']}</li> : null}
                {Err['adress_loc'] != undefined ? <li>{Err['adress_loc']['0']}</li> : null}
                {Err['id_loc'] != undefined ? <li>{Err['id_loc']['0']}</li> : null}
                {Err['id_secteur'] != undefined ? <li>{Err['id_secteur']['0']}</li> : null}
                {Err['id_tournee'] != undefined ? <li>{Err['id_tournee']['0']}</li> : null}
                {Err['order'] != undefined ? <li>{Err['order']['0']}</li> : null}
                {Err['compteur'] != undefined ? <li>{Err['compteur']['0']}</li> : null}
                {Err['lat'] != undefined ? <li>{Err['lat']['0']}</li> : null}
                {Err['long'] != undefined ? <li>{Err['long']['0']}</li> : null}
            </ul>
            console.log(Err)
            return ren
        }
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <div className="content-header">
                    <div className="header-section">
                        <h1>
                            <i className="fa fa-user" />Modifier Contrat<br />
                        </h1>
                    </div>
                </div>
                <ul className="breadcrumb breadcrumb-top">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contrat'>Contrat</Link></li>
                    <li>Modifier</li>
                </ul>
                {
                    this.renderError() ?
                        <div className="alert alert-danger alert-dismissable">
                            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                            <h4><i className="fa fa-times-circle" />Error</h4>
                            {this.renderError()}
                        </div>
                        : null
                }
                <div className="block full animation-fadeInQuick">
                    <div className="block-title">
                        <h2>Modifier de <strong>Contrat</strong> </h2>
                    </div>
                    <form onSubmit={this.handleSubmit} className="form-horizontal form-bordered">
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="nom">Client</label>
                            <div className="col-md-9">
                                <Select 
                                    options={this.state.clients} 
                                    onChange={(selected) => { this.setState({ client: selected.value }); console.log(this.state.client) }} 
                                    value={this.state.client.cin}
                                    defaultValue={this.state.clients[1]}
                                />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="prenom">Date Debut/Fin</label>
                            <div className="col-md-9 ">
                                <DatePicker
                                    dateFormat="yyyy-MM-dd"
                                    selected={new Date(this.state.startDate)}
                                    selectsStart
                                    startDate={new Date(this.state.startDate)}
                                    endDate={new Date(this.state.endDate)}
                                    onChange={this.handleChangeStart}
                                    minDate={new Date()}
                                    showDisabledMonthNavigation
                                    className="form-control col-md-6"
                                    withPortal
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                />
                                <DatePicker
                                    dateFormat="yyyy-MM-dd"
                                    selected={new Date(this.state.endDate)}
                                    selectsEnd
                                    startDate={new Date(this.state.startDate)}
                                    endDate={new Date(this.state.endDate)}
                                    onChange={this.handleChangeEnd}
                                    minDate={new Date()}
                                    showDisabledMonthNavigation
                                    className="form-control col-md-6"
                                    withPortal
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="cin">Adress Loc</label>
                            <div className="col-md-9">
                                <input type="text" name="adress_loc" onChange={this.onChange} value={this.state.adress_loc} className="form-control" placeholder="Adress de contrat" />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="email">Loc</label>
                            <div className="col-md-9">
                                <Select options={this.state.locs} onChange={(selected) => { this.setState({ loc: selected.value }); }} />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="adress">Secteur</label>
                            <div className="col-md-9">
                                <Select options={this.state.secteurs} onChange={(selected) => { this.setState({ secteur: selected.value }); }} />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="tele">Tourne</label>
                            <div className="col-md-9">
                                <Select options={this.state.tournes} onChange={(selected) => { this.setState({ tourne: selected.value }); }} />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="tele">Order</label>
                            <div className="col-md-9">
                                <input type="number" name="order" onChange={this.onChange} value={this.state.order} className="form-control" placeholder="Order de contrat" />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="tele">Compteur</label>
                            <div className="col-md-9">
                                <input type="number" name="compteur" onChange={this.onChange} value={this.state.compteur} className="form-control" placeholder="Co,pteur de contrat" />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <Map
                                isMarkerShown={this.state.showMarker}
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDebAMQ2oe6eiBRR5YWBJqKY5KyQxsSbKc&v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `400px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                lat={this.state.lat}
                                lng={this.state.lng}
                                handleMapClick={this.handleMapClick}
                                zoom={15}
                            />
                        </div>
                        <div className="form-group form-actions">
                            <div className="col-md-9 col-md-offset-3">
                                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-cogs"></i> Modifier</button>
                            </div>
                        </div>
                    </form>
                    <SweetAlert
                        show={this.state.isAdding}
                        title="Success"
                        text="A new Contrat has been added."
                        type="success"
                        confirmButtonText="Done"
                        confirmButtonColor="#a5dc86"
                        showLoaderOnConfirm={true}
                        onConfirm={() => this.setState({ isAdding: false })}
                        onOutsideClick={() => this.setState({ isAdding: false })}
                    />
                    <SweetAlert
                        show={this.state.isErr}
                        title="Error"
                        text="You have some errors :/"
                        type="error"
                        confirmButtonText="Done"
                        confirmButtonColor="#f27474"
                        showLoaderOnConfirm={true}
                        onConfirm={() => {
                            this.setState({ isErr: false })
                            //this.renderError()
                        }}
                        onOutsideClick={() => this.setState({ isErr: false })}
                    />
                </div>
            </div>
        );
    }
}

export default Create;
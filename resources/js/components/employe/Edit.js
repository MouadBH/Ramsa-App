import React, { Component } from "react";
import { Link, IndexLink, browserHistory } from 'react-router';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import Select from 'react-select'
import { createEmploye } from '../actions/Actions';
import { equipes } from '../actions/Actions';
import { employeUpdate } from '../actions/Actions';
import { getEmployeById } from '../actions/Actions';

class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAdding: false,
            isErr: false,
            idEmploye: this.props.params.id,
            nom: '',
            prenom: '',
            email: '',
            id_equipe: '',
            equipes: [],
            errors: null
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){

        equipes().then((res) => {
            res.map((c, i) => {
                this.state.equipes.push({ value: c.id, label: c.libelle })
                this.setState({
                    state: this.state
                })
            })
        }
        );

        getEmployeById(this.state.idEmploye).then((res) => {
            //console.log(res)
            this.setState({
                idEmploye: res.id,
                nom: res.nom,
                prenom: res.prenom,
                email: res.email,
                id_equipe: res.id_equipe
            })
        }
        );
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    hundelReset(){
        this.setState({
            isErr: false,
            nom: '',
            prenom: '',
            email: '',
            id_equipe: '',
            errors: null
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const employe = {
            id: this.state.idEmploye,
            nom: this.state.nom,
            prenom: this.state.prenom,
            email: this.state.email,
            id_equipe: this.state.id_equipe
        }
        employeUpdate(employe).then(res => {
            console.log(res)
            if (res.data.employe) {
                this.setState({ isAdding: true })
                this.setState({ isErr: false })
                this.setState({ errors: null})

              //  this.hundelReset()
            } else {
                this.setState({ isErr: true })
                this.setState({ errors: null })
                this.setState({ errors: res.data})
            }
            console.log(this.state)
        })
    }

    renderError(){
        console.log(this.state)
        if(this.state.errors){

            const Err = JSON.parse(this.state.errors);
            const ren = <ul>
                    {Err['nom'] != undefined ?<li>{ Err['nom']['0']}</li>: null}
                    {Err['prenom'] != undefined ?<li>{ Err['prenom']['0']}</li>: null}
                    {Err['email'] != undefined ?<li>{ Err['email']['0']}</li>: null}
                    {Err['id_equipe'] != undefined ?<li>{ Err['id_equipe']['0']}</li>: null}
                </ul>
            return ren
        }
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
                        <h2>Tableau des <strong>Equipes</strong> </h2>
                    </div>
                    <form onSubmit={this.handleSubmit} className="form-horizontal form-bordered">
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="nom">Nom</label>
                            <div className="col-md-9">
                                <input type="text" name="nom" onChange={this.onChange} value={this.state.nom} className="form-control" placeholder="Nom d'employe" />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="prenom">Prenom</label>
                            <div className="col-md-9">
                                <input type="text" name="prenom" onChange={this.onChange} value={this.state.prenom} className="form-control" placeholder="Prenom d'employe" />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="email">Email</label>
                            <div className="col-md-9">
                                <input type="email" name="email" onChange={this.onChange} value={this.state.email} className="form-control" placeholder="Email d'employe" />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="id_loc">Equipes</label>
                            <div className="col-md-9">
                                <Select options={this.state.equipes} onChange={(selected) => { this.setState({ id_equipe: selected.value }); }} />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group form-actions">
                            <div className="col-md-9 col-md-offset-3">
                                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-plus"></i> Modifier</button>
                            </div>
                        </div>
                    </form>
                    <SweetAlert
                        show={this.state.isAdding}
                        title="Success"
                        text="A new employe has been added."
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

export default Edit;

import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { creatClient } from '../actions/Actions';

class Create extends Component {
    constructor() {
        super();

        this.state = {
            isAdding: false,
            isErr: false,
            nom: '',
            prenom: '',
            cin: '',
            email: '',
            adress: '',
            tele: '',
            errors: null
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.renderError = this.renderError.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    hundelReset(){
        this.setState({
            isErr: false,
            nom: '',
            prenom: '',
            cin: '',
            email: '',
            adress: '',
            tele: '',
            errors: null
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const client = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            cin: this.state.cin,
            email: this.state.email,
            adress: this.state.adress,
            tele: this.state.tele
        }
        creatClient(client).then(res => {  
            console.log(res)          
            if (res.data.client) {
                this.setState({ isAdding: true })
                this.setState({ isErr: false })
                this.setState({ errors: null})

                this.hundelReset()
            } else {
                this.setState({ isErr: true })
                this.setState({ errors: null })
                this.setState({ errors: res.data})
            }
            console.log(this.state)
        })
    }

    renderError(){ 
        console.log(this.state.errors)
        if(this.state.errors){
            
            const Err = JSON.parse(this.state.errors);
            const ren = <ul>
                    {Err['nom'] != undefined ?<li>{ Err['nom']['0']}</li>: null}
                    {Err['prenom'] != undefined ?<li>{ Err['prenom']['0']}</li>: null}
                    {Err['cin'] != undefined ?<li>{ Err['cin']['0']}</li>: null}
                    {Err['email'] != undefined ?<li>{ Err['email']['0']}</li>: null}
                    {Err['adress'] != undefined ?<li>{ Err['adress']['0']}</li>: null}
                    {Err['tele'] != undefined ?<li>{ Err['tele']['0']}</li>: null}
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
                            <i className="fa fa-user" />Ajouter Client<br />
                        </h1>
                    </div>
                </div>
                <ul className="breadcrumb breadcrumb-top">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/client'>Client</Link></li>
                    <li>Ajoute</li>
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
                        <h2>Ajoute de <strong>Client</strong> </h2>
                    </div>
                    <form onSubmit={this.handleSubmit} className="form-horizontal form-bordered">
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="nom">Nom</label>
                            <div className="col-md-9">
                                <input type="text" name="nom" onChange={this.onChange} value={this.state.nom} className="form-control" placeholder="Nom de client" />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="prenom">Prenom</label>
                            <div className="col-md-9">
                                <input type="text" name="prenom" onChange={this.onChange} value={this.state.prenom} className="form-control" placeholder="Prenom de client" />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="cin">Cin</label>
                            <div className="col-md-9">
                                <input type="text" name="cin" onChange={this.onChange} value={this.state.cin} className="form-control" placeholder="Cin de client" />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="email">Email</label>
                            <div className="col-md-9">
                                <input type="email" name="email" onChange={this.onChange} value={this.state.email} className="form-control" placeholder="Email de client" />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="adress">Adress</label>
                            <div className="col-md-9">
                                <input type="text" name="adress" onChange={this.onChange} value={this.state.adress} className="form-control" placeholder="Addres coorp de client" />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="tele">Telephone</label>
                            <div className="col-md-9">
                                <input type="tel" name="tele" onChange={this.onChange} value={this.state.tele} className="form-control" placeholder="Telephone de client" />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group form-actions">
                            <div className="col-md-9 col-md-offset-3">
                                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-plus"></i> Ajouter</button>
                            </div>
                        </div>
                    </form>
                    <SweetAlert
                        show={this.state.isAdding}
                        title="Success"
                        text="A new client has been added."
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
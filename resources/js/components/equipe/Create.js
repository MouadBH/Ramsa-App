import React, { Component } from "react";
import { Link, IndexLink, browserHistory } from 'react-router';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import Select from 'react-select'
import { creatEquipe } from '../actions/Actions';
import { getLocal } from '../actions/Actions';

class Create extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isAdding: false,
            isErr: false,
            libelle: '',
            id_loc: '',
            locs: [],
            errors: null
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        getLocal().then((res) => {
            res[0].data.locs.map((c, i) => {
                this.state.locs.push({ value: c.id, label: c.libelle })
                this.setState({
                    state: this.state
                })
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
            libelle: '',
            id_loc: '',
            errors: null
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const equipe = {
            libelle: this.state.libelle,
            id_loc: this.state.id_loc
        }
        creatEquipe(equipe).then(res => {  
            console.log(res)          
            if (res.data.equipe) {
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
        console.log(this.state)
        if(this.state.errors){
            
            const Err = JSON.parse(this.state.errors);
            const ren = <ul>
                    {Err['libelle'] != undefined ?<li>{ Err['libelle']['0']}</li>: null}
                    {Err['id_loc'] != undefined ?<li>{ Err['id_loc']['0']}</li>: null}
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
                            <label className="col-md-3 control-label" htmlFor="libelle">Libelle</label>
                            <div className="col-md-9">
                                <input type="text" name="libelle" onChange={this.onChange} value={this.state.libelle} className="form-control" placeholder="Libelle de equipe" />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label" htmlFor="id_loc">Loc</label>
                            <div className="col-md-9">
                                <Select options={this.state.locs} onChange={(selected) => { this.setState({ id_loc: selected.value }); }} />
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
                        text="A new equipe has been added."
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
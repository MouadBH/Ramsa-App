import React, { Component } from "react";
import { Link, IndexLink, browserHistory } from 'react-router';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import Select from 'react-select'
import { getReclamationById } from '../actions/Actions';
import { getEquipeById } from '../actions/Actions';
import { equipes } from '../actions/Actions';
import { affecteEquipe } from '../actions/Actions';

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdding: false,
            isErr: false,
            idReclamation: this.props.params.id,
            date: '',
            description_client: '',
            description_equipe: '',
            id_contrat: '',
            type: '',
            affecte: '',
            id_equipe: '',
            equipe: [],
            equipes: [],
            date_affecte: '',
            traite: '',
            errors: null
        }
    }

    componentDidMount() {
        getReclamationById(this.state.idReclamation).then((res) => {
            //console.log(res)
            this.setState({
                idReclamation: this.props.params.id,
                date: res.date,
                description_client: res.description_client,
                description_equipe: res.description_equipe,
                id_contrat: res.id_contrat,
                type: res.type,
                affecte: res.affecte,
                id_equipe: res.id_equipe,
                date_affecte: res.date_affecte,
                traite: res.traite
            })
            if (this.state.id_equipe) {
                getEquipeById(this.state.id_equipe).then((res) => {
                    //console.log(res)
                    this.setState({
                        equipe: res
                    })
                }
                );
            }

            equipes().then((res) => {
                //console.log(res)
                res.map((c, i) => {
                    this.state.equipes.push({ value: c.id, label: c.libelle })
                    // this.setState({
                    //     state: this.state
                    // })
                })
            }
            );
        }
        );
        //console.log(this.state.id_equipe)

    }

    render() {
        //console.log(this.state)
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
                    <li>{this.state.idReclamation}</li>
                </ul>
                <div className="block full animation-fadeInQuick">
                    <div className="block-title">
                        <h2>Tableau de <strong>Reclamation</strong> </h2>
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
                                    <th className="text-center">Equipe</th>
                                    <th className="text-center">Date Affecte</th>
                                    <th className="text-center">Traite</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">{this.state.date}</th>
                                    <th className="text-center"><Link to={"/contrat/detail/" + this.state.id_contrat}>{this.state.id_contrat}</Link></th>
                                    <th className="text-center">{this.state.type}</th>
                                    <th className="text-center"> {this.state.affecte == 0 ? <span className="label label-warning">Pas encore</span> : <span className="label label-primary">OUI</span>}</th>
                                    <th className="text-center">
                                        {
                                            this.state.equipe.id ? <Link to={"/equipe/detail/" + this.state.equipe.id}>{this.state.equipe.libelle}</Link> : "Pas affecte " 
                                        }
                                    </th>
                                    <th className="text-center">{this.state.date_affecte}</th>
                                    <th className="text-center">{this.state.traite}</th>
                                    <th className="text-center">{this.state.traite}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block full animation-fadeInQuick">
                                    <div className="block-title">
                                        <h2>Description <strong>Client</strong> </h2>
                                    </div>
                                    <div className="well">{this.state.description_client ? this.state.description_client : "Pas encore."}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block full animation-fadeInQuick">
                                    <div className="block-title">
                                        <h2>Description <strong>Equipe</strong> </h2>
                                    </div>
                                    <div className="well">{this.state.description_equipe ? this.state.description_equipe : "Pas encore."}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="block full animation-fadeInQuick">
                            <div className="block-title">
                                <h2>Affecter un <strong>Equipe</strong> </h2>
                            </div>
                            <Select
                                options={this.state.equipes}
                                onChange={(selected) => {
                                    this.setState({
                                        id_equipe: selected.value,
                                        affecte: 1
                                    })

                                    const changeEquipe = {
                                        idReclamation: this.state.idReclamation,
                                        id_equipe: selected.value,
                                        affecte: 1
                                    }
                                    affecteEquipe(changeEquipe).then(res => {
                                        console.log(res)
                                        if (res.data.reclamation) {
                                            this.setState({ isAdding: true })
                                            this.setState({ isErr: false })
                                            this.setState({ errors: null })

                                        } else {
                                            this.setState({ isErr: true })
                                            this.setState({ errors: null })
                                            this.setState({ errors: res.data })
                                        }
                                        console.log(this.state)
                                    })

                                    this.state.equipe.libelle = selected.label
                                    this.state.equipe.id = selected.value
                                }}
                            />
                            <SweetAlert
                                show={this.state.isAdding}
                                title="Success"
                                text="Reclamation a affecter avec success"
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
                </div>

            </div>
        );
    }

}

export default Show;
import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { getEquipeById } from '../actions/Actions';
import { getLocById } from '../actions/Actions';
import { deleteEquipe } from '../actions/Actions';

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdding: false,
            isErr: false,
            idEquipe: this.props.params.id,
            libelle: '',
            id_loc: '',
            loc: '',
            locs: [],
            errors: null
        };
    }

    componentDidMount() {
        getEquipeById(this.state.idEquipe).then((res) => {
            //console.log(res)
            this.setState({
                isDelete: false,
                idEquipe: res.id,
                libelle: res.libelle,
                id_loc: res.id_loc
            })

            if (this.state.id_loc) {
                getLocById(this.state.id_loc).then((res) => {
                    //console.log(res)
                    this.setState({
                        loc: res.libelle
                    })
                }
                );
            }
        }
        );
        
    }
 
    deleteEquipe(){
        deleteEquipe(this.state.idEquipe).then((res) => {
            console.log(res)
            browserHistory.push(`/equipe`);
            
        })
    }
    render() {
        return (
            <div>
                <div className="content-header">
                    <div className="header-section">
                        <h1>
                            <i className="fa fa-user" />Information de Equipe<br />
                        </h1>
                    </div>
                </div>
                <ul className="breadcrumb breadcrumb-top">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/equipe'>Equipe</Link></li>
                    <li>{this.state.libelle}</li>
                </ul>
                <div className="row animation-fadeInQuick">
                    <div className="col-md-6">
                        <div className="block">
                            <div className="block-title">
                                <h2><i className="fa fa-file-o"></i> <strong>Tableau de Equipe</strong></h2>
                            </div>
                            <table className="table table-bordered table-striped table-vcenter">
                                <thead>
                                    <tr>
                                        <th className="text-center">ID</th>
                                        <th className="text-center">Libelle</th>
                                        <th className="text-center">Loc</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="text-center">{this.state.idEquipe}</th>
                                        <th className="text-center">{this.state.libelle}</th>
                                        <th className="text-center">{this.state.loc}</th>
                                        <th className="text-center">
                                            <div className="btn-group btn-group-sm">
                                                <Link to={"/equipe/edit/" + this.state.idEquipe} title="Modifier" className="btn btn-default">
                                                    <i className="fa fa-pencil"></i>
                                                </Link>
                                                <button onClick={() => this.setState({ isDelete: true })} title="Detail" className="btn btn-danger">
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                                <SweetAlert
                                                    show={this.state.isDelete}
                                                    title="Delete"
                                                    text="Are you sure to delete this equipe?"
                                                    type="error"
                                                    showCancelButton
                                                    confirmButtonText="Delete"
                                                    confirmButtonColor="#f27474"
                                                    showLoaderOnConfirm={true}
                                                    onConfirm={() => {
                                                        console.log('gg')
                                                        this.deleteEquipe();
                                                        this.setState({ isDelete: false });
                                                    }}
                                                    onCancel={() => this.setState({ isDelete: false })}
                                                    onOutsideClick={() => this.setState({ isDelete: false })}

                                                />
                                            </div>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="block">
                            <div className="block-title">
                                <h2><i className="fa fa-file-o"></i> <strong>Les employée</strong></h2>
                            </div>
                            <table className="table table-bordered table-striped table-vcenter">
                                <thead>
                                    <tr>
                                        <th className="text-center">ID</th>
                                        <th className="text-center">Nom</th>
                                        <th className="text-center">Prenom</th>
                                        <th className="text-center">Email</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="text-center">ID</th>
                                        <th className="text-center">Libelle</th>
                                        <th className="text-center">Loc</th>
                                        <th className="text-center">Loc</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Show;
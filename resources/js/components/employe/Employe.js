import React, { Component } from "react";
import { Link, IndexLink, browserHistory } from 'react-router';
import { employes } from '../actions/Actions';
import { deleteEmploye } from '../actions/Actions';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

class Employe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employes: []
        }
    }

    componentDidMount(){
        employes().then((employe) => this.setState({
                employes: employe
            })
        );
    }
    deleteEmploye(id,i){
      deleteEmploye(id).then((res) => {
        console.log(res)
        console.log(this.state);
        this.state.employes.splice(i,1);
        this.setState(this.state);
      }
      );
    }
    renderTable(){
        const { employes } = this.state;
        return employes && employes.length ? employes.map((employe, index) => (
            <tr key={index}>
                <td className="text-center">{employe.id}</td>
                <td className="text-center">{employe.nom}</td>
                <td className="text-center">{employe.prenom}</td>
                <td className="text-center"><Link to={"/equipe/detail/"+employe.id_equipe}>{employe.id_equipe}</Link></td>
                <td className="text-center">{employe.email}</td>
                <td className="text-center">
                    <div className="btn-group btn-group-sm">
                        <Link to={"/employe/edit/"+employe.id} title="Modifier" className="btn btn-default">
                            <i className="fa fa-pencil"></i> Modifier
                        </Link>
                        <button onClick={() => this.setState({ isDelete: true })} className="btn btn-danger">
                            <i className="fa fa-trash"></i> Delete
                        </button>
                    </div>
                </td>
                <SweetAlert
                    show={this.state.isDelete}
                    title="Delete"
                    text="Are you sure to delete this employe?"
                    type="error"
                    showCancelButton
                    confirmButtonText="Delete"
                    confirmButtonColor="#f27474"
                    showLoaderOnConfirm={true}
                    onConfirm={() => {
                        console.log('gg')
                        this.deleteEmploye(employe.id, index);
                        this.setState({ isDelete: false });
                    }}
                    onCancel={() => this.setState({ isDelete: false })}
                    onOutsideClick={() => this.setState({ isDelete: false })}

                />
            </tr>
        )) : null;
    }

    render() {
        return (
            <div>
                <div className="content-header">
                    <div className="header-section">
                        <h1>
                            <i className="fa fa-user" />Employes<br />
                        </h1>
                    </div>
                </div>
                <ul className="breadcrumb breadcrumb-top">
                    <li>Home</li>
                    <li><Link to='/employe'>Employes</Link></li>
                </ul>
                <div className="block full animation-fadeInQuick">
                    <div className="block-title">
                        <h2>Tableau des <strong>Employes</strong> </h2>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-vcenter table-condensed table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Nom</th>
                                    <th className="text-center">Prenom</th>
                                    <th className="text-center">Equipe</th>
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

export default Employe;

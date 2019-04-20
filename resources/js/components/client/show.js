import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { getClientById } from '../actions/Actions';
import { deleteClient } from '../actions/Actions';

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDelete: false,
            idClient: this.props.params.id,
            nom: '',
            prenom: '',
            cin: '',
            email: '',
            adress: '',
            tele: '',
            errors: {}
        };

        this.deleteClient = this.deleteClient.bind(this);
    }

    componentDidMount() {
        getClientById(this.state.idClient).then((c) => {
            this.setState({
                idClient: c.id,
                nom: c.nom,
                prenom: c.prenom,
                cin: c.cin,
                email: c.email,
                adress: c.adress_corp,
                tele: c.tel
            });
        }
        );
        //document.title = "dfsdfsdfsd"

    }

    deleteClient() {
        //e.preventDefault();
        
        deleteClient(this.state.idClient).then((res) => {
            console.log(res)
            browserHistory.push(`/client`);
            
            console.log(this.state)
        })
    }

    render() {
        return (
            <div>
                <div className="content-header">
                    <div className="header-section">
                        <h1>
                            <i className="fa fa-user" />Information de Client<br />
                        </h1>
                    </div>
                </div>
                <ul className="breadcrumb breadcrumb-top">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/client'>Client</Link></li>
                    <li>{this.state.nom} {this.state.prenom}</li>
                </ul>
                <div className="row animation-fadeInQuick">
                    <div className="col-lg-4">
                        <div className="block ">
                            <div className="block-title">
                                <h2><i className="fa fa-file-o"></i> <strong>Client</strong> Info</h2>
                            </div>

                            <div className="block-section text-center">
                                <h3>
                                    <strong>{this.state.nom} {this.state.prenom}</strong><br /><small></small>
                                </h3>
                            </div>
                            <table className="table table-borderless table-striped table-vcenter">
                                <tbody>
                                    <tr>
                                        <td className="text-right" ><strong>CIN</strong></td>
                                        <td>{this.state.cin}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-right"><strong>Adress</strong></td>
                                        <td>{this.state.adress}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-right"><strong>Email</strong></td>
                                        <td>{this.state.email}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-right"><strong>Telephone</strong></td>
                                        <td>{this.state.tele}</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="text-right">
                                            <Link to={"/client/edit/" + this.state.idClient} data-toggle="tooltip" className="btn btn-default" data-original-title="Modifier"><i className="fa fa-pencil" /></Link>
                                        </td>
                                        <td>
                                            <button onClick={() => this.setState({ isDelete: true })} data-toggle="modal" className="btn btn-danger"><i className="fa fa-times" /></button>
                                            <SweetAlert
                                                show={this.state.isDelete}
                                                title="Delete"
                                                text="Are you sure to delete this client?"
                                                type="error"
                                                showCancelButton
                                                confirmButtonText="Delete"
                                                confirmButtonColor="#f27474"
                                                showLoaderOnConfirm={true}
                                                onConfirm={() => {
                                                    console.log('gg')
                                                    this.deleteClient();
                                                    this.setState({ isDelete: false });
                                                }}
                                                onCancel={() => this.setState({ isDelete: false })}
                                                onOutsideClick={() => this.setState({ isDelete: false })}

                                            />
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="block">
                            <div className="block-title">
                                <h2><i className="fa fa-file-o"></i> <strong>Reclamation</strong></h2>
                            </div>
                            <table className="table table-bordered table-striped table-vcenter">
                                <thead>
                                    <tr>
                                        <th className="text-center">ID</th>
                                        <th className="text-center">Description</th>
                                        <th className="text-center">Date</th>
                                        <th className="text-center">Contrat</th>
                                        <th className="text-center">Type</th>
                                        <th className="text-center">Affecte</th>
                                        <th className="text-center">Traite</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center" style={{ width: '100px' }}><a href="#"><strong>1</strong></a></td>
                                        <td className="hidden-xs" style={{ width: '15%' }}><a href="javascript:void(0)">5 Products</a></td>
                                        <td className="text-right hidden-xs" style={{ width: '10%' }}><strong>$585,00</strong></td>
                                        <td className="text-center" style={{ width: '100px' }}><a href="#"><strong>1</strong></a></td>
                                        <td className="hidden-xs">Paypal</td>
                                        <td className="hidden-xs text-center">16/11/2014</td>
                                        <td><span className="label label-warning">Processing</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="block">
                            <div className="block-title">
                                <h2><i className="fa fa-file-o"></i> <strong>Consomation</strong></h2>
                            </div>
                            <table className="table table-bordered table-striped table-vcenter">
                                <thead>
                                    <tr>
                                        <th className="text-center">ID</th>
                                        <th className="text-center">Description</th>
                                        <th className="text-center">Date</th>
                                        <th className="text-center">Contrat</th>
                                        <th className="text-center">Type</th>
                                        <th className="text-center">Affecte</th>
                                        <th className="text-center">Traite</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center" style={{ width: '100px' }}><a href="#"><strong>1</strong></a></td>
                                        <td className="hidden-xs" style={{ width: '15%' }}><a href="javascript:void(0)">5 Products</a></td>
                                        <td className="text-right hidden-xs" style={{ width: '10%' }}><strong>$585,00</strong></td>
                                        <td className="text-center" style={{ width: '100px' }}><a href="#"><strong>1</strong></a></td>
                                        <td className="hidden-xs">Paypal</td>
                                        <td className="hidden-xs text-center">16/11/2014</td>
                                        <td><span className="label label-warning">Processing</span></td>
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
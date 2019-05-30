import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getClientById } from '../actions/Actions';
import { deleteClient } from '../actions/Actions';
import { getClientContrats } from '../actions/Actions';
import { getClientConsomations } from '../actions/Actions';

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
            contrats: [],
            consomations: [],
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
        getClientContrats(this.state.idClient).then((c) => {
          console.log(c);
            this.setState({
                contrats: c
            });
        }
        );

        getClientConsomations(this.state.idClient).then((consomation) => {

            let conso = [];
            consomation.forEach(function (c) {
              conso.push({ name: new Date(c.created_at), consomation: c.prix })
            })
            this.setState({
                consomations: conso
            })
        }
        );
        //document.title = "dfsdfsdfsd"

    }

    deleteClient() {
        deleteClient(this.state.idClient).then((res) => {
            console.log(res)
            browserHistory.push(`/client`);

            console.log(this.state)
        })
    }
    renderContratsTable() {
        const { contrats } = this.state;
        return contrats && contrats.length ? contrats.map((c, index) => (
            <tr key={index}>
                <td className="text-center"><Link to={"/contrat/" + c.id}>{c.id}</Link></td>
                <td className="text-center">{c.date_debut}</td>
                <td className="text-center">{c.date_fin}</td>
                <td className="text-center">{c.adress_loc}</td>
                <td className="text-center">{c.compteur}</td>
                <td className="text-center">{c.order}</td>
            </tr>
        )) : null;
    }
    renderChart(){
      let {consomations} = this.state;
      if (consomations && consomations.length) {
        return <LineChart width={600} height={300} data={consomations} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
             <XAxis dataKey="name"/>
             <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
             <Tooltip/>
             <Legend />
             <Line type="monotone" dataKey="consomation" stroke="#8884d8" activeDot={{r: 8}}/>
          </LineChart>
      }else{
        return <h1><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...</h1>
      }
    }
    render() {
      console.log(this.state);
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
                    <div className="col-md-4">
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
                    <div className="col-md-8">
                        <div className="block">
                            <div className="block-title">
                                <h2><i className="fa fa-file-o"></i> <strong>Reclamation</strong></h2>
                            </div>
                            <table className="table table-bordered table-striped table-vcenter">
                                <thead>
                                    <tr>
                                        <th className="text-center">ID</th>
                                        <th className="text-center">Date Debut</th>
                                        <th className="text-center">Date Fin</th>
                                        <th className="text-center">Addres</th>
                                        <th className="text-center">Compteur</th>
                                        <th className="text-center">Order</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderContratsTable()}
                                </tbody>
                            </table>
                        </div>
                        <div className="block">
                            <div className="block-title">
                                <h2><i className="fa fa-file-o"></i> <strong>Consomation</strong></h2>
                            </div>
                            {this.renderChart()}
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}

export default Show;

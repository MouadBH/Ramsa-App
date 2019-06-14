import React, {Component} from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import { getEquipeEmployes } from '../actions/Actions';
import { getEquipeReclamations } from '../actions/Actions';

class Profile extends Component {
    constructor(props){
      super(props);
      this.state = {
        employes: [],
        reclamations: []
      }
    }
    componentDidMount() {
      getEquipeEmployes(localStorage.getItem("user_id_equipe")).then((res) => {
        console.log(res);
        this.setState({ employes: res.data });
      });
      getEquipeReclamations(localStorage.getItem("user_id_equipe")).then((res) => {
        console.log(res);
        this.setState({ reclamations: res.data });
      });
        //document.title = "dfsdfsdfsd"

    }
    renderEquipe(){
      let {employes} = this.state;
      return employes && employes.length ? employes.map((employe, index) => (
        <div key={index} className="col-md-12">
          <a className="widget widget-hover-effect2 themed-background-muted-light">
            <div className="widget-simple">
              <h4 className="widget-content text-left">
                <strong>{employe.nom}</strong> {employe.prenom}
              </h4>
            </div>
          </a>
          </div>
      )) : null;
    }
    renderReclamation(){
      let {reclamations} = this.state;
      return reclamations && reclamations.length ? reclamations.map((reclamation, index) => (
        <tr key={index}>
          <td className="text-center" ><Link to={"/dashboard/reclamation/details/"+reclamation.id}><strong>{reclamation.id}</strong></Link></td>
          <td className="text-center">Date de Reclamation: {reclamation.date}</td>
          <td className="text-center">Date Affectation: {reclamation.date_affecte}</td>
          <td className="text-center">Plice {reclamation.id_contrat}</td>
          <td className="text-center"><span className={reclamation.traite ? "label label-success" : "label label-danger"}>{reclamation.traite ? "Traite" : "Pas Encore"}</span></td>
          <td className="text-center">
            <Link to={"/dashboard/reclamation/details/"+reclamation.id} className="btn btn-xs btn-primary" ><i className="fa fa-pencil" /> Detail</Link>
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
                        <i className="fa fa-user" />Dashboard<br />
                    </h1>
                </div>
            </div>
            <ul className="breadcrumb breadcrumb-top">
                <li><Link to='/dashboard'>Home</Link></li>
            </ul>

            <div className="row animation-fadeInQuick">
                <div className="col-lg-4">
                    <div className="block ">
                        <div className="block-title">
                            <h2><i className="fa fa-file-o"></i> Votre <strong>Equipe</strong></h2>
                        </div>
                        <div className="row">{this.renderEquipe()}</div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="block ">
                        <div className="block-title">
                            <h2><i className="fa fa-file-o"></i> <strong>Reclamations</strong></h2>
                        </div>
                        <table className="table table-bordered table-striped table-vcenter">
                          <tbody>
                            {this.renderReclamation()}
                          </tbody>
                        </table>

                    </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Profile;

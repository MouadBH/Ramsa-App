import React, {Component} from 'react';
import MiniCard from '../minicard/MiniCard';
import bg from './bg.jpg';

class Main extends Component {
    render() {
        return (
            <div>
                    <div className="content-header content-header-media">
                            <div className="header-section">
                                <div className="row">
                                    <div className="col-md-4 col-lg-6 hidden-xs hidden-sm">
                                        <h1>Bonjour <strong>{localStorage.user_nom}</strong><br /><small>Espace d'Administrateur</small></h1>
                                    </div>

                                </div>
                            </div>
                            <img src={bg} alt="header image" className="animation-pulseSlow" />
                        </div>

                        <div className="row">
                            <MiniCard name="Client" to="" icon="fa-users" />
                            <MiniCard name="Reclamation" to="" icon="fa-files-o" />
                            <MiniCard name="Contrat" to="" icon="fa-file-text" />
                            <MiniCard name="employe" to="" icon="fa-user-secret" />
                        </div>
                    </div>
        );
    };
}
export default Main;

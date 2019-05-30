import axios from 'axios';
import { defaultCoreCipherList } from 'constants';

export const login = user => {
    return axios
        .post('api/login', {
            cin: user.cin,
            password: user.password
        }, {
                headers: { 'Content-Type': 'application/json' }
            })
        .then(res => {
          if (res.data.error) {
            return res;
          }else {
            localStorage.setItem('usertoken', res.data.token);
            localStorage.setItem('user_id', res.data.user_id);
            localStorage.setItem('user_nom', res.data.user_nom);
            localStorage.setItem('user_prenom', res.data.user_prenom);
            localStorage.setItem('user_type', "admin");
          }
            console.log(res);
            return res;
        })
        .catch(err => {
            console.log(err);
        });
}

export const creatClient = client => {
    return axios
        .post('/api/client', {
            nom: client.nom,
            prenom: client.prenom,
            cin: client.cin,
            email: client.email,
            adress: client.adress,
            tele: client.tele
        }, {
            headers: { 'Content-Type': 'application/json' }
            })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
}

export const clients = () => {
    return axios
        .get('/api/clients')
        .then(res => {
            return res.data.clients;
        })
        .catch(err => {
            console.log(err);
        });
}

export const getClientById = id => {
    return axios
        .get('/api/client/'+id)
        .then(res => {
            return res.data.client;
        })
        .catch(err => {
            console.log(err);
        });
}

export const updateClient = client => {
    return axios
        .put('/api/client/update/'+client.idClient, {
            nom: client.nom,
            prenom: client.prenom,
            cin: client.cin,
            email: client.email,
            adress: client.adress,
            tele: client.tele
        }, {
            headers: { 'Content-Type': 'application/json' }
            })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err
        });
}

export const deleteClient = id => {
    return axios
        .delete('/api/client/delete/'+id)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
}

export const getClientContrats = id => {
    return axios
        .get('/api/client/'+id+'/contrats')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err);
        });
}

export const getClientConsomations = id => {
    return axios
        .get('/api/client/'+id+'/consomations')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err);
        });
}

export const contrats = () => {
    return axios
        .get('/api/contrats')
        .then(res => {
            return res.data.contrats;
        })
        .catch(err => {
            console.log(err);
        });
}

export const getContratById = id => {
    return axios
        .get('/api/contrat/'+id)
        .then(res => {
            return res.data.contrat;
        })
        .catch(err => {
            console.log(err);
        });
}

export const getContratInfo = id => {
    let linksArr = [
            '/api/contrat/'+id+'/client',
            '/api/contrat/'+id+'/loc',
            '/api/contrat/'+id+'/secteur',
            '/api/contrat/'+id+'/tourne'
        ];
    return axios
        .all(linksArr.map(l => axios.get(l)))
        .then(axios.spread(
            (...res) => {
                return res;
                console.log(res);
            }
        ))
        .catch(err => {
            console.log(err);
        });
}

export const getLocal = () => {
    let linksArr = [
            '/api/locs',
            '/api/secteurs',
            '/api/tournes'
        ];
    return axios
        .all(linksArr.map(l => axios.get(l)))
        .then(axios.spread(
            (...res) => {
                return res;
                console.log(res);
            }
        ))
        .catch(err => {
            console.log(err);
        });
}

export const creatContrat = contrat => {
    return axios
        .post('/api/contrat', {
            id_client: contrat.id_client,
            date_debut: contrat.date_debut,
            date_fin: contrat.date_fin,
            adress_loc: contrat.adress_loc,
            id_loc: contrat.id_loc,
            id_secteur: contrat.id_secteur,
            id_tournee: contrat.id_tournee,
            order: contrat.order,
            compteur: contrat.compteur,
            lat: contrat.lat,
            long: contrat.long
        }, {
            headers: { 'Content-Type': 'application/json' }
            })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
}

export const updateContrat = contrat => {
    console.log(contrat)
    return axios
        .put('/api/contrat/update/'+contrat.idContrat, {
            id_client: contrat.id_client,
            date_debut: contrat.date_debut,
            date_fin: contrat.date_fin,
            adress_loc: contrat.adress_loc,
            id_loc: contrat.id_loc,
            id_secteur: contrat.id_secteur,
            id_tournee: contrat.id_tournee,
            order: contrat.order,
            compteur: contrat.compteur,
            lat: contrat.lat,
            long: contrat.long
        }, {
            headers: { 'Content-Type': 'application/json' }
            })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
}

export const deleteContrat = id => {
    return axios
        .delete('/api/contrat/delete/'+id)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
}

export const equipes = () => {
    return axios
        .get('/api/equipes')
        .then(res => {
            return res.data.equipes;
        })
        .catch(err => {
            console.log(err);
        });
}

export const creatEquipe = equipe => {
    return axios
        .post('/api/equipe', {
            libelle: equipe.libelle,
            id_loc: equipe.id_loc
        }, {
            headers: { 'Content-Type': 'application/json' }
            })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
}

export const getEquipeById = id => {
    return axios
        .get('/api/equipe/'+id)
        .then(res => {
            return res.data.equipe;
        })
        .catch(err => {
            console.log(err);
        });
}

export const updateEquipe = equipe => {
    return axios
        .put('/api/equipe/update/'+equipe.idEquipe , {
            libelle: equipe.libelle,
            id_loc: equipe.id_loc
        }, {
            headers: { 'Content-Type': 'application/json' }
            })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
}

export const deleteEquipe = id => {
    return axios
        .delete('/api/equipe/delete/'+id)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
}

export const reclamations = () => {
    return axios
        .get('/api/reclamations')
        .then(res => {
            return res.data.reclamations;
        })
        .catch(err => {
            console.log(err);
        });
}

export const getReclamationById = id => {
    return axios
        .get('/api/reclamation/'+id)
        .then(res => {
            return res.data.reclamation;
        })
        .catch(err => {
            console.log(err);
        });
}

export const deleteReclamation = id => {
    return axios
        .delete('/api/reclamation/delete/'+id)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
}

export const affecteEquipe = reclamation => {
    return axios
        .put('/api/reclamation/affectequipe/'+reclamation.idReclamation , {
            id_equipe: reclamation.id_equipe,
            affecte: reclamation.affecte
        }, {
            headers: { 'Content-Type': 'application/json' }
            })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
}

export const employes = () => {
    return axios
        .get('/api/employes')
        .then(res => {
            return res.data.employes;
        })
        .catch(err => {
            console.log(err);
        });
}

export const createEmploye = employe => {
    return axios
        .post('/api/employe', {
            nom: employe.nom,
            prenom: employe.prenom,
            id_equipe: employe.id_equipe,
            email: employe.email
        }, {
            headers: { 'Content-Type': 'application/json' }
            })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
}

export const getEmployeById = id => {
    return axios
        .get('/api/employe/'+id)
        .then(res => {
            return res.data.employe;
        })
        .catch(err => {
            console.log(err);
        });
}

export const deleteEmploye = id => {
    return axios
        .delete('/api/employe/delete/'+id)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
}

export const getEquipeEmployes = id => {
    return axios
        .get('/api/equipe/'+id+'/employes')
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
}

/////////////
export const getLocById = id => {
    return axios
        .get('/api/loc/'+id)
        .then(res => {
            return res.data.loc;
        })
        .catch(err => {
            console.log(err);
        });
}

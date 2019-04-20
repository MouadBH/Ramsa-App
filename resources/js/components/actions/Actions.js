import axios from 'axios';

export const login = user => {
    return axios
        .post('api/login', {
            cin: user.cin,
            password: user.password
        }, {
                headers: { 'Content-Type': 'application/json' }
            })
        .then(res => {
            localStorage.setItem('usertoken', res.data.token);
            localStorage.setItem('user_id', res.data.user_id);
            localStorage.setItem('user_nom', res.data.user_nom);
            localStorage.setItem('user_prenom', res.data.user_prenom);
            console.log(res);
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
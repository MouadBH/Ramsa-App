import axios from 'axios';

export const login = user => {
    return axios
        .post('api/login', {
            cin: user.cin,
            password: user.password
        },{
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data.token);
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
}
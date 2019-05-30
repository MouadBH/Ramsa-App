import React, {Component} from "react";
import bg from './login_full_bg.jpg';
import { login } from "../actions/Actions";
import { loginEmp } from "../actions/Actions";
import { browserHistory } from 'react-router';


class Login extends Component {
    constructor(){
        super();

        if (localStorage.getItem('usertoken')) {
            browserHistory.push(`/`);
        }

        this.state = {
            cin: '',
            password: '',
            isErr: false,
            type: false,
            errors: []
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        if (this.state.cin === '') {
          this.state.errors.push({name: "Enter votre email."});
          this.setState({isErr: true})
        }else if (this.state.password === '') {
          this.state.errors.push({name: "Enter votre mote de passe."});
          this.setState({isErr: true})

        }

        if (this.state.type) {
          const user = {
              email: this.state.cin,
              password: this.state.password
          }

          loginEmp(user).then((res) => {
            console.log(res);
            if (res.data.error) {
              this.state.errors.push({name: res.data.error});
              this.setState({isErr: true})

            }else {
              browserHistory.push(`/`);
            }
          })
        } else {
          const user = {
              cin: this.state.cin,
              password: this.state.password
          }

          login(user).then((res) => {
            console.log(res);
            if (res.data.error) {
              this.state.errors.push({name: res.data.error});
              this.setState({isErr: true})

            }else {
              browserHistory.push(`/`);
            }
          })
        }

    }
    renderError(){
        console.log(this.state.errors)
        if(this.state.errors.length){
            const Err = this.state.errors;
            return this.state.errors.map((err,i) => (
              <li key={i}>{err.name}</li>
              ));
          //  return ren
        }
    }
    render(){
      console.log(this.state);
        return(
                    <div>
                      <img src={bg} alt="Login Full Background" className="full-bg animation-pulseSlow" />
                      <div id="login-container" className="animation-fadeIn">
                        <div className="login-title text-center">
                          <h1><i className="gi gi-flash" /> <strong>Ramsa App</strong></h1>
                        </div>
                        <div className="block push-bit">
                          {/* Login Form */}
                          {
                              this.renderError() && this.state.isErr ?
                                  <div className="alert alert-danger alert-dismissable">
                                  <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                                  <h4><i className="fa fa-times-circle" />Error</h4>
                                  <ul>
                                      {this.renderError()}
                                  </ul>
                                  </div>
                              : null
                          }
                          <form onSubmit={this.onSubmit} className="form-horizontal form-bordered form-control-borderless">
                            <div className="form-group">
                              <div className="col-xs-12">
                                <div className="input-group">
                                  <span className="input-group-addon"><i className="fa fa-credit-card-alt" /></span>
                                  <input type="text" name="cin" onChange={this.onChange} value={this.state.cin} className="form-control input-lg" placeholder={() => this.state.type ? "Email" : "CIN"} />
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="col-xs-12">
                                <div className="input-group">
                                  <span className="input-group-addon"><i className="gi gi-asterisk" /></span>
                                  <input type="password" name="password" onChange={this.onChange} value={this.state.password} className="form-control input-lg" placeholder="Password" />
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="col-xs-12">
                                <div className="input-group">
                                  <span className="input-group-addon">Employe</span>
                                  <label className="switch switch-primary">
                                    <input type="checkbox" name="type" onChange={() => this.setState({ type: !this.state.type})} />
                                    <span />
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="form-group form-actions">

                              <div className="col-xs-8 text-right">
                                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-angle-right" /> Login to Dashboard</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

        );
    }
}
export default Login;

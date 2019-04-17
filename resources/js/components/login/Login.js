import React, {Component} from "react";
import bg from './login_full_bg.jpg';
import { login } from "../actions/Actions";
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
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            cin: this.state.cin,
            password: this.state.password
        }

        login(user).then((res) => {
            browserHistory.push(`/`);
        })
    }

    render(){
        return(
                    <div>
                      <img src={bg} alt="Login Full Background" className="full-bg animation-pulseSlow" />
                      <div id="login-container" className="animation-fadeIn">
                        <div className="login-title text-center">
                          <h1><i className="gi gi-flash" /> <strong>Ramsa App</strong></h1>
                        </div>
                        <div className="block push-bit">
                          {/* Login Form */}
                          <form onSubmit={this.onSubmit} className="form-horizontal form-bordered form-control-borderless">
                            <div className="form-group">
                              <div className="col-xs-12">
                                <div className="input-group">
                                  <span className="input-group-addon"><i className="fa fa-credit-card-alt" /></span>
                                  <input type="text" name="cin" onChange={this.onChange} value={this.state.cin} className="form-control input-lg" placeholder="CIN" />
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
                            <div className="form-group form-actions">
                              <div className="col-xs-4">
                                <label className="switch switch-primary" data-toggle="tooltip" title="Remember Me?">
                                  <input type="checkbox" name="login-remember-me" defaultChecked />
                                  <span />
                                </label>
                              </div>
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
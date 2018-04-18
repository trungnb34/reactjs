import React, {Component} from "react";
import BaseAPI from "../service/BaseAPI";
import axios from "axios";
import {Link} from "react-router";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formValidate : {email: '', password: ''},
            error: ''
        }
        this.handerFiledInput = this.handerFiledInput.bind(this);
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
    }

    componentDidMount() {
        if(localStorage['access_token'] != undefined) {
            BaseAPI.get('get-user-infor').then(user => {
                if(user != null) {
                    window.location.href = "http://localhost:3000/"
                }
            })
        }
    }

    maHoaAccToken(token) {
        const length = token.length;
        var temp = "";
        for(var i = 0; i < length; i++) {
            temp += String.fromCharCode(token.charCodeAt(i) + 1);
        }
        return temp;
    }

    handerFiledInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.state.formValidate[name] = "";
        this.state.error = "";
        this.setState({[name]: value});
    }

    onSubmitLogin() {
        if(this.formValidate()) {
            const data = {
                client_id: 2,
                client_secret: "4e6kmkuZv5TxaVyS1g7MWRQdUEa4T0ceI7XsK99W",
                username: this.state.email,
                password: this.state.password,
                grant_type : "password"
            }
            axios.post('http://localhost:8000/oauth/token', data)
                .then(response => {
                    const responseData = response.data;
                    const accessToken = this.maHoaAccToken(responseData.access_token);
                    localStorage.setItem('access_token', accessToken);
                    localStorage.setItem('login', true);
                    window.location.href = 'http://localhost:3000/';
                          
                })
                .catch (response => {
                    this.setState({error: 'Ten tai khoan hoac mat khau khong chinh xac'});
                });
        }
    }

    formValidate() {
        this.state.formValidate.email = this.validateField('email', this.state.email);
        this.state.formValidate.password = this.validateField('password', this.state.password);
        this.setState(this.state);
        if(!this.state.formValidate.email && !this.state.formValidate.password) {
            return true;
        }
        return false;
    }

    validateField(name, value) {
        switch(name) {
            case 'email':
                if(value == "") {
                    return "Email is required !";
                } else if(!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    return "Email is valid !";
                }
                break;
            case 'password':
                if(value == "") {
                    return "Password is required !";
                }
                break;
        }
    }


    render() {
        return (
            <div className="login-box">
                <div className="login-logo">
                    <a href=""><b>Admin</b>LTE</a>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <strong>{this.state.error}</strong>
                    <form>
                        <div className="form-group has-feedback">
                            <input type="email" name="email" className="form-control" placeholder="Email" onChange={this.handerFiledInput}/>
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <strong>{this.state.formValidate.email}</strong>
                        <div className="form-group has-feedback">
                            <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handerFiledInput} />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <strong>{this.state.formValidate.password}</strong>
                        <div className="row">
                            <div className="col-xs-8">
                            <div className="checkbox icheck">
                                <label>
                                <input type="checkbox" /> Remember Me
                                </label>
                            </div>
                            </div>
                            <div className="col-xs-4">
                                <button type="button" onClick={this.onSubmitLogin} className="btn btn-primary btn-block btn-flat">Sign In</button>
                            </div>
                        </div>
                    </form>
                    <Link to={"/register"} className="text-center">Register a new membership</Link>
                </div>
            </div>
        )
    }
}

export default Login;
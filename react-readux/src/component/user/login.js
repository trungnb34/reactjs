import React, {Component} from "react";
import BaseAPI from "../service/BaseAPI";
import axios from "axios";
import {Link} from "react-router";
import Validator from 'ree-validate';
import classnames from 'classnames';
// import "./login.css";

class Login extends Component {
    constructor(props) {
        super(props);

        this.validator = new Validator(this.rulesValidator());

        this.state = {
            formData: {
                email: '',
                password: '',
            },
            errorFromServer: '',
            errors: this.validator.errors,
        }
        this.handerFiledInput = this.handerFiledInput.bind(this);
        this.validateAndSubmit = this.validateAndSubmit.bind(this);
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

    rulesValidator() {
        return {
            email: 'required|email',
            password: 'required|min:7',
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
        const { errors } = this.validator;
        this.state.formData[name] = value;
        this.state.errorFromServer = '';
        this.setState(this.state);
        errors.remove(name);
        this.validator.validate(name, value)
            .then(() => {
                this.setState({ errors })
        })
    }

    onSubmit() {
        const data = {
            client_id: 2,
            client_secret: "4e6kmkuZv5TxaVyS1g7MWRQdUEa4T0ceI7XsK99W",
            username: this.state.formData.email,
            password: this.state.formData.password,
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
                this.setState({errorFromServer: 'Ten tai khoan hoac mat khau khong chinh xac'});
            });
    }

    validateAndSubmit(e) {
        e.preventDefault();

        const {formData} = this.state;
        const {errors} = this.state;

        this.validator.validateAll(formData).then(
            success => {
                if (success) {
                    this.onSubmit();
                } else {
                    this.setState({ errors });
                }
            }
        )
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={this.validateAndSubmit} method="post">
                        <h1>Login</h1>
                        <strong>{this.state.errorFromServer}</strong>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={this.handerFiledInput}
                            />
                        { errors.has('email') &&
                            <label id="name-error" className="error" htmlFor="email">{ errors.first('email') }</label>
                        }
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handerFiledInput}
                            />
                        { errors.has('password') &&
                            <label id="name-error" className="error" htmlFor="email">{ errors.first('password') }</label>
                        }
                        <button type="submit">login</button>
                        <p className="message">Not registered? <Link to={'/register'}>Create an account</Link></p>
                    </form>
                </div>
            </div>
            // <div className="login-box">
            //     <div className="login-logo">
            //         <a href=""><b>Admin</b>LTE</a>
            //     </div>
            //     <div className="login-box-body">
            //         <p className="login-box-msg">Sign in to start your session</p>
            //         <strong>{this.state.errorFromServer}</strong>
            //         <form onSubmit={this.validateAndSubmit} method="post">
            //             <div className="form-group has-feedback">
            //                 <input 
            //                     type="text" 
            //                     name="email"
            //                     className="form-control" 
            //                     placeholder="Email" 
            //                     onChange={this.handerFiledInput}
            //                 />
            //                 <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            //             </div>
            //             { errors.has('email') &&
            //                 <label id="name-error" className="error" htmlFor="email">{ errors.first('email') }</label>
            //             }
            //             <div className="form-group has-feedback">
            //                 <input 
            //                     type="password" 
            //                     name="password"
            //                     className="form-control" 
            //                     placeholder="Password"
            //                     onChange={this.handerFiledInput} 
            //                     />
            //                 <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            //             </div>
            //             { errors.has('password') &&
            //                 <label id="name-error" className="error" htmlFor="email">{ errors.first('password') }</label>
            //             }
            //             <div className="row">
            //                 <div className="col-xs-8">
            //                 <div className="checkbox icheck">
            //                     <label>
            //                     <input type="checkbox" /> Remember Me
            //                     </label>
            //                 </div>
            //                 </div>
            //                 <div className="col-xs-4">
            //                     <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
            //                 </div>
            //             </div>
            //         </form>
            //         <Link to={"/register"} className="text-center">Register a new membership</Link>
            //     </div>
            // </div>
        )
    }
}

export default Login;
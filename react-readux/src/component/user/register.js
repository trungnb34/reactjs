import React, {Component} from "react";
import BaseAPI from "../service/BaseAPI";
import {Link} from "react-router";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', 
            password: '',
            name : '',
            confirmPass: '',
            formErrors : {email : '', password: '', name: '', confirmPass: ''},
            emailVaild : false,
            nameVaild: false,
            confirmPassVaild: false,
            passwordVaild: false,
            formVaild: false,
            registerSuccess: ''
        };
        this.handerUserInput = this.handerUserInput.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    handerUserInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.state.formErrors[name] = "";
        this.setState({[name]: value});
    }

    onSubmitForm() {
        if(this.validateForm()) {
            const formSubmit = {
                'email' : this.state.email,
                'name' : this.state.name,
                'password' : this.state.password,
                'confirmPass' : this.state.confirmPass
            }
            BaseAPI.post('api-register', formSubmit).then(res => {
                if(res.data.error) {
                    this.showErrorMessage(res.data.error);
                } else {
                    this.state.registerSuccess = "Ban dang ky thanh cong , vui long dang nhap";
                    this.setState(this.state);
                    window.location.href = "http://localhost:3000/login";
                }
            }).catch(error => {
                // console.log(error);
            })
        }
    }

    showErrorMessage(errors) {
        this.state.formErrors.email = errors.email;
        this.state.formErrors.name = errors.name;
        this.state.formErrors.password = errors.password;
        this.state.formErrors.confirmPass = errors.confirmPass;
        this.setState(this.state);
    }

    validateForm() {
        this.state.formErrors.email = this.validateFiled('email', this.state.email);
        this.state.formErrors.name = this.validateFiled('name', this.state.name);
        this.state.formErrors.password = this.validateFiled('password', this.state.password);
        this.state.formErrors.confirmPass = this.validateFiled('confirmPass', this.state.confirmPass);
        this.setState(this.state);
        if(this.state.emailVaild && 
            this.state.nameVaild && 
            this.state.confirmPassVaild && 
            this.state.passwordVaild) {
            return true;
        }
        return false;
    }
    validateFiled(name, value) {
        switch(name) {
            case 'email':
                if(value.length == "") {
                    return "Email is required !";
                } else if(!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    return "Email " + value + " is valid !";
                } 
                this.state.emailVaild = true;
                break;
            case 'name': 
                if(value == "") {
                    return "Nhap vao ten cua ban !";
                }
                this.state.nameVaild = true;
                break;
            case 'password':
                if(value == "") {
                    return "Password is required !";
                } else if(value.length < 8) {
                    return "password lon hon 8 ky tu !";
                }
                this.state.passwordVaild = true;
                break;
            case 'confirmPass': 
                if(value == "") {
                    return "Confirm password is required !";
                } else if(value != this.state.password) {
                    return "Confirm password is not same password !";
                }
                this.state.confirmPassVaild = true;
                break;
        }

        this.setState(this.state);
        return null;
    }

    render() {
        return (
            <div className="login-box">
                <div className="login-logo">
                    <a href=""><b>Admin</b>LTE</a>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Register</p>
                    <strong>{this.state.registerSuccess}</strong>
                    <form action="">
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" name="email" placeholder="Email" onChange={this.handerUserInput} />
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <strong>{this.state.formErrors.email}</strong>
                        <div className="form-group has-feedback">
                            <input type="text" className="form-control" name="name" placeholder="User name" onChange={this.handerUserInput}/>
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <strong>{this.state.formErrors.name}</strong>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.handerUserInput}/>
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <strong>{this.state.formErrors.password}</strong>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" name="confirmPass" placeholder="Confirm password" onChange={this.handerUserInput} />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <strong>{this.state.formErrors.confirmPass}</strong>
                        <div className="row">
                            <div className="col-xs-8">
                            </div>
                            <div className="col-xs-4">
                                <button type="button" onClick={this.onSubmitForm} className="btn btn-primary btn-block btn-flat">Sign up</button>
                            </div>
                        </div>
                    </form>
                    <Link to={"/login"} className="text-center">Login as membership</Link>
                </div>
            </div>
        )
    }
}

export default Register;
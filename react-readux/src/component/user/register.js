import React, {Component} from "react";
import BaseAPI from "../service/BaseAPI";
import {Link} from "react-router";
import Validator from "ree-validate";

class Register extends Component {
    constructor(props) {
        super(props);
        this.validator = new Validator(this.rulesValidator());
        this.state = {
            formData: {
                email: '',
                password: '',
                name : '',
                password_confirmed: '',
            },
            errorsFromServer : {
                email: '',
                password: '',
                name: '',
                password_confirmed: ''
            },
            errors: this.validator.errors,
            registerSuccess: ''
        };
        this.handerUserInput = this.handerUserInput.bind(this);
        this.validateAndSubmit = this.validateAndSubmit.bind(this);
    }

    handerUserInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        const { errors } = this.validator;
        this.state.formData[name] = value;

        errors.remove(name);

        this.setState(this.state);

        this.validator.validate(name, value).then(() => {
            this.setState({ errors });
        })
    }

    rulesValidator() {
        return {
            email : 'required|email',
            name: 'required',
            password: 'required|min:8',
            password_confirmed: 'required'
        }
    }
    showErrorMessage(errors) {
        if(errors.email) {
            this.state.errorsFromServer.email = errors.email;
        }
        if(errors.password) {
            this.state.errorsFromServer.password = errors.password;
        }
        if(errors.name) {
            this.state.errorsFromServer.name = errors.name;
        } 
        if(errors.password_confirmed) {
            this.state.errorsFromServer.password_confirmed = errors.password_confirmed;
        }
        this.setState(this.state);
    }

    onSubmitForm() {
        const formSubmit = {
            'email' : this.state.formData.email,
            'name' : this.state.formData.name,
            'password' : this.state.formData.password,
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
        })
    }
    validateAndSubmit(e) {
        e.preventDefault();
        const { formData } = this.state;
        const { errors } = this.state;
        this.validator.validateAll(formData)
            .then(success => {
            if (success) {
                this.onSubmitForm()
            } else {
                this.setState({ errors });
            }
        })
      
    }

    render() {
        const {errors} = this.state;
        const {errorsFromServer} = this.state;
        return (
            <div class="login-page">
                <div class="form">
                    <form class="login-form" onSubmit={this.validateAndSubmit} method="post">
                        <h1>Register</h1>
                        <input 
                            type="text" 
                            name="email"
                            onChange={this.handerUserInput}
                            placeholder="Email"
                            />
                        {
                            errors.has('email') &&
                            <label id="name-error" className="error" htmlFor="email">{ errors.first('email') }</label>
                        }
                        {
                            errorsFromServer.email !== '' &&
                            <label id="name-error" className="error" htmlFor="email">{ errorsFromServer.email }</label>
                        }
                        <input 
                            type="text" 
                            name="name"
                            onChange={this.handerUserInput}
                            placeholder="Name"
                            />
                        {
                            errors.has('name') &&
                            <label id="name-error" className="error" htmlFor="email">{ errors.first('name') }</label>
                        }
                        {
                            errorsFromServer.name !== '' &&
                            <label id="name-error" className="error" htmlFor="email">{ errorsFromServer.name }</label>
                        }
                        <input 
                            type="password"
                            name="password"
                            onChange={this.handerUserInput}
                            placeholder="Password"
                            />
                        {
                            errors.has('password') &&
                            <label id="name-error" className="error" htmlFor="email">{ errors.first('password') }</label>
                        }
                        {
                            errorsFromServer.password !== '' &&
                            <label id="name-error" className="error" htmlFor="email">{ errorsFromServer.password }</label>
                        }  
                        <input 
                            type="password" 
                            name="password_confirmed"
                            onChange={this.handerUserInput}
                            placeholder="Confirm password"
                            />
                        <button>register</button>
                        <p class="message">You already have account <Link to={'/login'}>login</Link></p>
                    </form>
                </div>
            </div>
            // <div className="login-box">
            //     <div className="login-logo">
            //         <a href=""><b>Admin</b>LTE</a>
            //     </div>
            //     <div className="login-box-body">
            //         <p className="login-box-msg">Register</p>
            //         <strong>{this.state.registerSuccess}</strong>
            //         <form onSubmit={this.validateAndSubmit} method="post">
            //             <div className="form-group has-feedback">
            //                 <input type="email" className="form-control" name="email" placeholder="Email" onChange={this.handerUserInput} />
            //                 <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            //             </div>
            //             {
            //                 errors.has('email') &&
            //                 <label id="name-error" className="error" htmlFor="email">{ errors.first('email') }</label>
            //             }
            //             {
            //                 errorsFromServer.email !== '' &&
            //                 <label id="name-error" className="error" htmlFor="email">{ errorsFromServer.email }</label>
            //             }
            //             {/* <label id="name-error" className="error" htmlFor="email">{ errorsFromServer.email }</label> */}
            //             <div className="form-group has-feedback">
            //                 <input type="text" className="form-control" name="name" placeholder="User name" onChange={this.handerUserInput}/>
            //                 <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            //             </div>
            //             {
            //                 errors.has('name') &&
            //                 <label id="name-error" className="error" htmlFor="email">{ errors.first('name') }</label>
            //             }
            //             {
            //                 errorsFromServer.name !== '' &&
            //                 <label id="name-error" className="error" htmlFor="email">{ errorsFromServer.name }</label>
            //             }
            //             <div className="form-group has-feedback">
            //                 <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.handerUserInput}/>
            //                 <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            //             </div>
            //             {
            //                 errors.has('password') &&
            //                 <label id="name-error" className="error" htmlFor="email">{ errors.first('password') }</label>
            //             }
            //             {
            //                 errorsFromServer.password !== '' &&
            //                 <label id="name-error" className="error" htmlFor="email">{ errorsFromServer.password }</label>
            //             }                        
            //             <div className="form-group has-feedback">
            //                 <input type="password" className="form-control" name="password_confirmed" placeholder="Confirm password" onChange={this.handerUserInput} />
            //                 <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            //             </div>
            //             {
            //                 errors.has('password_confirmed') &&
            //                 <label id="name-error" className="error" htmlFor="email">{ errors.first('password_confirmed') }</label>
            //             }
            //             {
            //                 errorsFromServer.password_confirmed !== '' &&
            //                 <label id="name-error" className="error" htmlFor="email">{ errorsFromServer.password_confirmed }</label>
            //             }
            //             <div className="row">
            //                 <div className="col-xs-8">
            //                 </div>
            //                 <div className="col-xs-4">
            //                     <button type="submit" className="btn btn-primary btn-block btn-flat">Sign up</button>
            //                 </div>
            //             </div>
            //         </form>
            //         <Link to={"/login"} className="text-center">Login as membership</Link>
            //     </div>
            // </div>
        )
    }
}

export default Register;
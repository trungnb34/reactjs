import React, {Component} from "react";
import Menu from "../layout/menu/menu";
import {Link} from "react-router";
import Validator from "ree-validate";
import BaseAPI from "../service/BaseAPI";

class UpdateProfile extends Component {
    constructor(props) {
        super(props);
        this.validator = new Validator(this.rulesValidator());
        this.validateAndSubmit = this.validateAndSubmit.bind(this);
        this.handerChange = this.handerChange.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.state = {
            formData: {
                email: '',
                name: '',
                full_name : '',
                phone_number: '',
                password: '',
                avatar: null,
                file_avatar: ''
            },
            userData: {},
            errors: this.validator.errors,
            errorsFromServer: {}
        }
    }

    rulesValidator() {
        return {
            password: 'min:8',
            phone_number: 'numeric',
            name: 'alpha_num',
            full_name: 'alpha_spaces',
            email: 'email'
        }
    }

    componentWillMount() {
        if(localStorage['access_token'] == undefined) {
            window.location.href = window.history.back();
        }
        function getUserData() {
            return new Promise((resolve, reject) => {
                BaseAPI.get('get-user-infor')
                .then(user => {
                    resolve(user.data.user);
                }).catch( err => {
                    reject('error roi ');
                })
            });
        }
        getUserData().then(user => {
            var fields = ['email', 'name', 'full_name', 'phone_number', 'avatar'];
            for(var i = 0; i < fields.length; i++) {
                this.state.formData[fields[i]] = user[fields[i]];
            }
            this.setState(this.state);
        }).catch(error => {
            console.log(error);
        })
    }

    handerChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.state.formData[name] = value;
        this.setState(this.state);
        const { errors } = this.state;

        errors.remove(name);
        this.validator.validate(name, value).then(() => {
            this.setState({ errors });
        })
    }
    deleteToken() {
        return new Promise((resolve, reject) => {
            while(localStorage['access_token'] || localStorage['token']) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('login');
            }
            resolve();
        })
    }
    onSubmit(formData) {
        BaseAPI.post('update-profile', formData).then(res => {
            console.log(formData);
            alert('Ban da update thong tin thanh cong');
        })
    }

    validateAndSubmit(e) {
        e.preventDefault();
        const {formData} = this.state;
        const {errors} = this.state;
        this.validator.validateAll(formData).then(
            success => {
                if(success && this.checkNullDataForm()) {
                    this.onSubmit(formData);
                } else {
                    this.setState({ errors });
                }
            }
        )
    }

    checkNullDataForm() {
        if(this.state.formData.email === '' && 
        this.state.formData.name === '' && 
        this.state.formData.full_name === '' && 
        this.state.formData.phone_number === '' && 
        this.state.formData.password === '' && 
        this.state.formData.password_confirmed === '' && 
        this.state.formData.avatar === null) {
            return false;
        }
        return true;
    }

    changeImage(e) {
        var formData = new FormData();
        formData.append('avatar', e.target.value, e.target.name);
        this.state.formData.avatar = formData;
        this.setState(this.state);
    }
    createImage(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.state.formData.avatar = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    render() {
        const {errors} = this.state;
        return(
            <div>
                <Menu />
                <form  encType="multipart/form-data" onSubmit={this.validateAndSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input name="email" onChange={this.handerChange} type="email" className="form-control" placeholder="Enter email" value={this.state.formData.email} />
                                </div>
                                {
                                    errors.has('email') && 
                                    <label id="name-error" className="error" htmlFor="email">{ errors.first('email') }</label>
                                }
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Name</label>
                                    <input name="name" onChange={this.handerChange}  type="text" className="form-control"  placeholder="Name" value={this.state.formData.name} />
                                </div>
                                {
                                    errors.has('name') && 
                                    <label id="name-error" className="error" htmlFor="email">{ errors.first('name') }</label>
                                }
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Full Name</label>
                                    <input name="full_name" onChange={this.handerChange}  type="text" className="form-control" placeholder="Full name" value={this.state.formData.full_name} />
                                </div>
                                {
                                    errors.has('full_name') && 
                                    <label id="name-error" className="error" htmlFor="email">{ errors.first('full_name') }</label>
                                }
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Phone number</label>
                                    <input name="phone_number" onChange={this.handerChange}  type="text" className="form-control" placeholder="Phone number" value={this.state.formData.phone_number} />
                                </div>
                                {
                                    errors.has('phone_number') && 
                                    <label id="name-error" className="error" htmlFor="email">{ errors.first('phone_number') }</label>
                                }
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">New password</label>
                                    <input name="password" onChange={this.handerChange}  type="password" className="form-control" placeholder="Password" />
                                </div>
                                {
                                    errors.has('password') && 
                                    <label id="name-error" className="error" htmlFor="email">{ errors.first('password') }</label>
                                }
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Confirm password</label>
                                    <input name="password_confirmed" type="password" className="form-control" placeholder="Confirm Password" />
                                </div>
                                {
                                    errors.has('password_confirmed') && 
                                    <label id="name-error" className="error" htmlFor="email">{ errors.first('password_confirmed') }</label>
                                }
                                <br/>
                                <button type="submit" className="btn btn-success">Update</button>
                            </div>
                            <div className="col-sm-3">
                                <img className="img_author alignright wp-image-70 size-full show-avatar" src={this.state.formData.avatar} alt="aboutpage" width="380" height="380" sizes="(max-width: 380px) 100vw, 380px" />
                                <div className="form-group">
                                    <label htmlFor="choose-file">Chon anh</label>
                                    <input type="file" className="form-control-file" onChange={this.changeImage} id="choose-file" aria-describedby="fileHelp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default UpdateProfile;
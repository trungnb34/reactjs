import React, {Component} from "react";
import {connect} from "react-redux";
import * as GetUserInfo from "../../../actions/user";
import {Link} from "react-router";

class ButtonLogin extends Component {

    componentDidMount() {
        this.props.GetUserInfo();
    }

    showUserInfo() {
        if(this.props.user.user.name != '') {
            return (
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-user icon-login" aria-hidden="true"></i>
                        {this.props.user.user.name}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item item" to={"/profile"}>Profile</Link>
                        <Link className="dropdown-item item" to={"/favorite"}>favorite</Link>
                    </div>
                </div>
            )
        } else {
            return (
                <Link to={"/login"}>
                    <i className="fa fa-user icon-login" aria-hidden="true"></i>
                    DANG NHAP
                </Link>
            )
        }
    }

    render() {
        return (
            <span className="dangNhap">
                { this.showUserInfo() }
            </span>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.UserInfo
    }
}

export default connect(mapStateToProps, GetUserInfo)(ButtonLogin);
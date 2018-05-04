import React, {Component} from "react";
import MenuItem from "./menuitem";
import {Link} from "react-router";
import Search from "./search";
import ButtonLogin from "./buttonLogin";
import { connect } from "react-redux";
import * as cateActions from "../../../actions/cate";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    }
    componentDidMount() {
        this.props.loadAllCate();
    }
    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('access_token');
        localStorage.removeItem('login');
        const url = window.location.href;
        window.location.href = url;
    }
    showLogout() {
        if(localStorage['login']) {
            return (
                <div className="login">
                    <div className="btn_login text">
                        <a href="" onClick={this.logOut}>
                            LOG OUT
                        </a>
                    </div>
                </div>
            )
        }
    }
    render() {
        return(
            <div id="top-bar">
                <div className="main_menu">
                    <div id="navigation-wrapper">
                        <ul id="menu-main-menu" className="menu">
                            <li id="menu-item-19" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children menu-item-19">
                                <a href="/">BEETBLOG</a>
                            </li>
                            {
                                this.props.cates.cates.map((cate, index) => {
                                    return (
                                        <MenuItem key={index} cate={cate}/>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    { this.showLogout() }
                    <div className="btn_login">
                        <ButtonLogin />
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        cates: state.ListCateReducer,
        user: state.UserInfo
    };
}

export default connect(mapStateToProps, cateActions)(Menu);
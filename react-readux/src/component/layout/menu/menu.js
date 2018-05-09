import React, {Component} from "react";
import ListCate from "./listCate";
import {Link} from "react-router";
// import Search from "./search";
import ButtonLogin from "./buttonLogin";
import { connect } from "react-redux";
import * as cateActions from "../../../actions/cate";

class Menu extends Component {
    constructor(props) {
        super(props);
        // this.logOut = this.logOut.bind(this);
    }
    componentDidMount() {
        // this.props.loadAllCate();
    }
    // logOut(e) {
    //     e.preventDefault();
    //     localStorage.removeItem('access_token');
    //     localStorage.removeItem('login');
    //     const url = window.location.href;
    //     window.location.href = url;
    // }
    // showLogout() {
    //     if(localStorage['login']) {
    //         return (
    //             <div className="login">
    //                 <div className="btn_login text">
    //                     <a href="" onClick={this.logOut}>
    //                         LOG OUT
    //                     </a>
    //                 </div>
    //             </div>
    //         )
    //     }
    // }
    render() {
        return (
            <header class="general-header header-layout-two">
                <div class="general-header-inner">
                    <div class="header-top-wrapper">
                        <div class="header-top-inner">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="search">
                                            <i class="fa fa-search" aria-hidden="true"></i>
                                            <input type="search" placeholder="Search .........." />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="social-networks">
                                            <ul class="social-links">
                                                <li><a href="#"><i class="fa fa-sign-in" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="navigation-layout-two-wrapper">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-8">
                                    <div class="site-info">
                                        <h1 class="site-title"><Link to={"/"}>BeetSoft blog</Link></h1>
                                    </div>
                                </div>
                                <ListCate />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Menu;
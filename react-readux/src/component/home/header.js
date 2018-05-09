import React, {Component} from "react";
import {connect} from "react-redux";
import * as UserInfo from "../../actions/user";
import {Link} from "react-router";

class Header extends Component {
    constructor(props) {
        super(props);
        // this.logOut = this.logOut.bind(this);
    }
    componentWillMount() {
        if(localStorage['access_token'] != undefined) {
            this.props.GetUserInfo();
        }
    }
    showUserInfo() {
        if(this.props.user.user.name) {
            return (
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    ĐĂNG NHẬP
                </Link>
            )
        }
    }
    render() {
        return (
            <header class="general-header header-layout-one">
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
                                                <li><a href="facebook.html"></a></li>
                                                <li><a href="twitter.html"></a></li>
                                                <li><a href="instagram.com"></a></li>
                                                <li><a href="youtube.com"></a></li>
                                                <li><a href="snapchat.html"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="site-info">
                            <h1 class="site-title">BeetSoft blog</h1>
                        </div>
                    </div>
                    <nav class="main-nav layout-one">
                        <div id="main-nav" class="stellarnav">
                            <ul>
                                <li><a href="#">Home Layout</a>
                                    <ul>
                                        <li>
                                            <li><a href="index.html">Home Layout One</a></li>
                                            <li><a href="index-two.html">Home Layout Two</a></li>
                                            <li><a href="index-three.html">Home Layout Three</a></li>
                                            <li><a href="index-four.html">Home Layout Four</a></li>
                                            <li><a href="index-four-full-width.html">Home Layout Four + Full Width</a></li>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="#">Single Page layout</a>
                                    <ul>
                                        <li><a href="single-page-layout-one.html">Single Page Layout One</a></li>
                                        <li><a href="single-page-layout-two.html">Single Page Layout Two + Image</a></li>
                                        <li><a href="single-page-layout-two-video.html">Single Page Layout Two + Video</a></li>
                                        <li><a href="single-page-layout-three.html">Single Page Layout Three</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Pages</a>
                                    <ul>
                                        <li>
                                            <li><a href="404.html">404 page</a></li>
                                            <li><a href="#">Single Page</a>
                                                <ul>
                                                    <li><a href="single-page-layout-one.html">Single Page Layout One</a></li>
                                                    <li><a href="single-page-layout-two.html">Single Page Layout Two + Image</a></li>
                                                    <li><a href="single-page-layout-two-video.html">Single Page Layout Two + Video</a></li>
                                                    <li><a href="single-page-layout-three.html">Single Page Layout Three</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="search.html">Search Page</a></li>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="#">Lifestyle</a></li>
                                <li><a href="#">Health</a></li>
                                <li><a href="#">Something</a></li>
                                
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.UserInfo
    }
}
export default connect(mapStateToProps, UserInfo)(Header);
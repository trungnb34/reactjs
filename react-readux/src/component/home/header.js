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

    // logOut(e) {
    //     e.preventDefault();
    //     localStorage.removeItem('access_token');
    //     localStorage.removeItem('login');
    //     const url = window.location.href;
    //     window.location.href = url;
    // }

    render() {
        return (
            <div className="header">
                {/* <div className="bgk_top">
                    <div className="logo text">
                        <a href="/">BEETBLOG</a>
                    </div>
                    <div className="login">
                        <div className="btn_login text">
                            <a href="#" onClick={this.logOut}>
                                LOG OUT
                            </a>
                        </div>
                    </div>
                    <div className="login">
                        <div className="btn_login text">
                            {this.showUserInfo()}
                        </div>
                    </div>
                </div> */}
                <div className="slogan">
                    <h1>Nơi chia sẻ và học tập kiến thức về lập trình miễn phí</h1>
                    <p>
                        iOS, Switft, Android, NodeJS, AngularJS, UI/UX, WebRTC, ...<br />
                        Rất nhiều các chủ đề, bài viết hữu ích. Hãy tham gia cộng đồng và cùng chia sẻ &amp; hoàn thiện mình!
                    </p>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.UserInfo
    }
}
export default connect(mapStateToProps, UserInfo)(Header);
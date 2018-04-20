import React, {Component} from "react";
import Menu from "../layout/menu/menu";
import {connect} from "react-redux";
import * as GetUserInfo from "../../actions/user";
import {Link} from "react-router";

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(localStorage['access_token'] == undefined) {
            window.location.href = window.history.back();
        }
        this.props.GetUserInfo();
    }

    render() {
        return(
            <div>
                <Menu />
                <div id="main" className="fullwidth container-fluid">
                    <article id="post-69" className="post-69 page type-page status-publish hentry">
                        <div className="post-header">
                            <h1>About Me</h1>
                        </div>
                        {
                            console.log(this.props.user.user)
                        }
                        <div className="post-entry">
                            <p><img className="img_author alignright wp-image-70 size-full" src={this.props.user.user.avatar} alt="aboutpage" width="380" height="380" sizes="(max-width: 380px) 100vw, 380px" /></p>
                            <div className="abount_text_left">
                                <p>Tên: {this.props.user.user.name}</p>
                                <p>Email: {this.props.user.user.email}</p>
                                <p>Quê Quán/ Địa chỉ: </p>
                                <p>Số Điện Thoại: </p>
                                <p>Skype: </p>
                                <p>Facebook: </p>
                                <p>Mô tả : </p>
                                <p>Skills: </p>
                            </div>
                        </div>
                    </article>
                    <Link to={"update-profile"}>Update Profile</Link>
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
export default connect(mapStateToProps, GetUserInfo)(Profile);
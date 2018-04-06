import React, {Component} from "react";
import MenuItem from "./menuitem";
import {Link} from "react-router";
import Search from "./search";
import { connect } from "react-redux";
// import { Link } from "react-router";
import * as cateActions from "../../../actions/cate";

class Menu extends Component {
    componentDidMount() {
        // if(this.props.cates == null) {
            this.props.loadAllCate();
        // }
    }
    render() {
        return(
            <div id="top-bar">
                <div className="main_menu">
                    <div id="navigation-wrapper">
                        <ul id="menu-main-menu" className="menu">
                            <li id="menu-item-19" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children menu-item-19">
                                <Link to={"/"}>BEETBLOG</Link>
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
                    <div className="btn_login">
                        <a href="localhost:8000/login">ĐĂNG NHẬP</a>
                    </div>
                    <Search />
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        cates: state.ListCateReducer
    };
}

export default connect(mapStateToProps, cateActions)(Menu);
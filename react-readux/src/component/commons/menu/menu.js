import React, {Component} from "react";
import MenuItem from "./menuitem";
class Menu extends Component {
    render() {
        return(
            <div id="top-bar">
                <div className="main_menu">
                    <div id="navigation-wrapper">
                        <ul id="menu-main-menu" className="menu">
                            <li id="menu-item-19" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children menu-item-19">
                                <a href="http://blog.beetsoft.com.vn/">BEETBLOG</a>
                            </li>
                            <MenuItem />
                            <MenuItem />
                            <MenuItem />
                        </ul>
                    </div>

                    <div className="btn_login">
                        <a href="#">ĐĂNG NHẬP</a>
                    </div>
                    <div className="search">
                        <form role="search" autocomplete="off" method="get" id="searchform" action="#">
                            <input type="text" placeholder="Tìm kiếm ..." name="title" id="s" className="input_search" />
                            <button className="button_search">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;
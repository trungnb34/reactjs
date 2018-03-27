import React, {Component} from "react";
import MenuItem from "./menuitem";
import Search from "./search";
class Menu extends Component {
    render() {
        return(
            <div id="top-bar">
                <div className="main_menu">
                    <div id="navigation-wrapper">
                        <ul id="menu-main-menu" className="menu">
                            <li id="menu-item-19" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children menu-item-19">
                                <a href="#">BEETBLOG</a>
                            </li>
                            <MenuItem />
                            <MenuItem />
                            <MenuItem />
                        </ul>
                    </div>
                    <div className="btn_login">
                        <a href="#">ĐĂNG NHẬP</a>
                    </div>
                    <Search />
                </div>
            </div>
        )
    }
}

export default Menu;
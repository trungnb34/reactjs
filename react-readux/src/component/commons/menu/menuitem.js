import React, {Component} from "react";

class MenuItem extends Component {
    render() {
        return (
            <li id="menu-item-21" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-21">
                <a href="#">BSER</a>
                <ul className="sub-menu">
                    <li id="menu-item-103" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-103">
                        <a href="#">CÂU CHUYỆN HAY</a>
                    </li>
                    <li id="menu-item-103" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-103">
                        <a href="#">GÓC CÔNG TY</a>
                    </li>
                    <li id="menu-item-94" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-94">
                        <a href="#">PHÒNG TRUYỀN THỐNG</a>
                    </li>
                </ul>
            </li>
        )
    }
}

export default MenuItem;
import React, {Component} from "react";
import {Link} from "react-router";

class MenuItem extends Component {
    onClick() {
        console.log("tring");
    }
    render() {
        return (
            <li id="menu-item-21" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-21">
                <Link to={"/category/" + this.props.cate.title[0].slug}>{this.props.cate.title[0].name}</Link>
                <ul className="sub-menu">
                    {
                        this.props.cate.value.map((cate, index) => {
                            return(
                                <li key={index} id="menu-item-103" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-103">
                                    <Link to={"/category/" + cate.slug} onClick={this.onClick.bind(this)}>{cate.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </li>
        )
    }
}

export default MenuItem;
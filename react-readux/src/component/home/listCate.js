import React, {Component} from "react";
import ItemCate from "./itemCate";

class ListCate extends Component {
    render() {
        return(
            <div className="white blue">
                <h2><a href="#">CÔNG NGHỆ</a></h2>
                <ul className="grid cs-style-3">
                    <ItemCate />
                    <ItemCate />
                    <ItemCate />
                </ul>
            </div>
        )
    }
}

export default ListCate;
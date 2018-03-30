import React, {Component} from "react";
import { Link } from "react-router";

class ItemCate extends Component {
    render() {
        return(
            <li>
                <Link to={"/category/" + this.props.subCate.slug}>
                    <figure>
                        <img src={this.props.subCate.avatar} alt="img04" className="img"/>
                        <figcaption>
                            <h3>{this.props.subCate.name}</h3>
                        </figcaption>
                    </figure>
                </Link>
            </li>
        )
    }
}

export default ItemCate;
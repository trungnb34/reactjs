import React, {Component} from "react";
import { Link } from "react-router";

class Cate extends Component {
    render() {
        return (
            <li className="has-sub"><Link to={"/category/" + this.props.cate.title[0].slug}>{this.props.cate.title[0].name}</Link>
                <ul>
                    <li>
                        {
                            this.props.cate.value.map((item, index) => {
                                return (
                                    <li key={index}><Link to={"/category/" + item.slug}>{item.name}</Link></li>
                                )
                            })
                        }
                    </li>
                </ul>
            </li>
        )
    }
}

export default Cate;
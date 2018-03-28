import React, {Component} from "react";

class ItemCate extends Component {
    componentDidMount() {
        // console.log("sub cate ", this.props.subCate);
    }
    render() {
        return(
            <li>
                <a href="#">
                    <figure>
                        <img src={this.props.subCate.avatar} alt="img04" className="img"/>
                        <figcaption>
                            <h3>{this.props.subCate.name}</h3>
                        </figcaption>
                    </figure>
                </a>
            </li>
        )
    }
}

export default ItemCate;
import React, {Component} from "react";
import {Link} from "react-router";

class TopPost extends Component {
    render() {
        return(
            <li>
                <div className="side-item">
                    <div className="side-image">
                        <Link to={"/post/" + this.props.post.slug} rel="bookmark">
                            <img width="500" height="380" src={this.props.post.avatar} alt="iOS Databases: SQLite vs. Core Data vs. Realm" />
                        </Link>
                    </div>
                    <div className="side-item-text">
                        <h4>
                            <Link to={"/post/" + this.props.post.slug} rel="bookmark" className="title">{this.props.post.title} </Link>
                        </h4>
                        <span className="side-item-meta"></span>
                    </div>
                </div>
            </li>
        )
    }
}
function mapStateToProps(state) {
    return {
        tags: state.TopPostReducer
    };
}
export default TopPost;
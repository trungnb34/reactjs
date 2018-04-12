import React, {Component} from "react";
import {Link} from "react-router";
class ItemRelatedPost extends Component {
    render() {
        return(
            <div className="item-related">
                <Link to={"/post/" + this.props.post.slug}>
                    <img width="500" height="380" src={this.props.post.avatar} className="attachment-misc-thumb size-misc-thumb wp-post-image" alt="naturetrip" />
                </Link>
                <h3>
                    <Link to={"/post/" + this.props.post.slug} className="title">{this.props.post.title}</Link>
                </h3>
                <span className="date">{this.props.post.created_at}</span>
            </div>
        )
    }
}

export default ItemRelatedPost;
import React, {Component} from "react";

class ItemRelatedPost extends Component {
    render() {
        return(
            <div className="item-related">
                <a href="#">
                    <img width="500" height="380" src={this.props.post.avatar} className="attachment-misc-thumb size-misc-thumb wp-post-image" alt="naturetrip" />
                </a>
                <h3>
                    <a href="" className="title">{this.props.post.title}</a>
                </h3>
                <span className="date">{this.props.post.created_at}</span>
            </div>
        )
    }
}

export default ItemRelatedPost;
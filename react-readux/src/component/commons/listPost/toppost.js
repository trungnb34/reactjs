import React, {Component} from "react";
import {Link} from "react-router";

class TopPost extends Component {
    render() {
        return(
            <div class="widget-posts">
                <div class="post-thumb">
                    <img src={this.props.post.avatar} alt="....."/>
                </div>
                <div class="post-title">
                    <h5><Link to={"/post/" + this.props.post.slug}>{this.props.post.title}</Link></h5>
                </div>
                <div class="post-view-count post-meta">
                    <p>865 <span>Views</span></p>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        tags: state.TopPostReducer
    };
}
export default TopPost;
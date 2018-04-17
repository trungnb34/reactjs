import React, {Component} from "react";
import {Link} from 'react-router';

class ItemPost extends Component {
    render() {
        return(
            <article id="post-6" className="list-item post-6 post type-post status-publish format-standard has-post-thumbnail hentry category-lifestyle">
                <div className="post-img">
                    <Link to={"/post/" + this.props.post.slug}>
                        <img width="500" height="380" src={this.props.post.avatar} alt={this.props.post.abstract} className="attachment-misc-thumb size-misc-thumb wp-post-image" />
                    </Link>
                </div>
                <div className="list-content">
                    <div className="post-header">
                        <div className="post_title">
                            <Link to={"/post/" + this.props.post.slug} className="title upercate">{this.props.post.title}</Link>
                            <i className="fa fa-heart-o heart" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="post-entry">
                        <p>{this.props.post.abstract}</p>
                    </div>
                    <div className="post-meta">
                        <span className="meta-info">
                                    {this.props.post.created_at + " đăng bởi "}
                            <a href="#" title="Posts by Super Administrator" rel="author">{this.props.post.userName}</a>
                        </span>
                    </div>
                    <div className="post-share">
                        <a target="_blank" href="#"><i className="fa fa-facebook"></i></a>
                        <a target="_blank" href="#"><i className="fa fa-twitter"></i></a>
                        <a target="_blank" href="#"><i className="fa fa-google-plus"></i></a>
                    </div>
                </div>
            </article>
        ) 
    }
}

export default ItemPost;
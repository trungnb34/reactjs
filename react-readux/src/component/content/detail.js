import React, {Component} from "react";
import RelatedPost from "./relatedPost";
import BaseAPI from "../../BaseAPI";
import * as detailPost from "../../actions/detail";
import {connect} from "react-redux";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    }
    componentWillMount() {
        BaseAPI.get('get-detail-post/' + this.props.param).then(post => {
            this.setState({post: post.data.post});
        })
        // this.props.loadDetailPost(this.props.param);
    }
    componentWillReceiveProps(newProps) {
        // if(this.props.param !== newProps.param) {
        //     this.props.loadDetailPost(newProps.param);
        // }
        BaseAPI.get('get-detail-post/' + newProps.param).then(post => {
            this.setState({post: post.data.post});
        })
    }
    render() {
        return(
            <div id="main">
                <article id="post-6" className="post-6 post type-post status-publish format-standard has-post-thumbnail hentry category-lifestyle">
                    <h1 className="title upercate">{this.state.post.title}</h1>
                    <div className="post-header">
                        <span className="cat title_post_detail">
                            <a href="#" rel="category tag">{this.state.post.cateName}</a>
                        </span>
                    </div>
                    <span className="meta-info">
                        <a href="#" title="Posts by Super Administrator" rel="author">{this.state.post.userName}</a>{ ' đăng ngày ' + this.state.post.created_at}
                    </span>
                    <div className="post-entry">
                        <p>
                            { this.state.post.content }
                        </p>
                    </div>
                    <div className="post-meta">                                                                                                      
                        <div className="post-share">
                            <p>Hãy chia sẻ bài viết đến bạn bè của bạn:</p>
                            <a target="_blank" href="#"><i className="fa fa-facebook"></i></a>
                            <a target="_blank" href="#"><i className="fa fa-twitter"></i></a>
                            <a target="_blank" href="#"><i className="fa fa-google-plus"></i></a>
                        </div>
                    </div>
                </article>
                <RelatedPost cate={this.state.post.cateId}/>
            </div>
        )
    }
}

function mapsStateToProps(state) {
    return {
        post: state.DetailPost
    }
}

export default connect(mapsStateToProps, detailPost)(Detail);
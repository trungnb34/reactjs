import React, {Component} from "react";
import RelatedPost from "./relatedPost";
import BaseAPI from "../service/BaseAPI";
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
            document.title = post.data.post.title;
            this.setState({post: post.data.post});
        })
    }
    componentWillReceiveProps(newProps) {
        BaseAPI.get('get-detail-post/' + newProps.param).then(post => {
            document.title = post.data.post.title;
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
                        <p dangerouslySetInnerHTML={{ __html: this.state.post.content }} >
                        </p>
                    </div>
                    <div className="post-meta">                                                                                                      
                        <div className="post-share">
                            <p>Hãy chia sẻ bài viết đến bạn bè của bạn:</p>
                            {/* <strong>123456</strong> */}
                            <a target="_blank" href="#">
                                <div className="fb-share-button" data-href="http://localhost:3000" data-layout="button" data-size="small" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"></a>
                                </div>
                            </a>
                            <a target="_blank" href="#">
                                <div class="g-plus" data-action="share"></div>
                            </a>
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
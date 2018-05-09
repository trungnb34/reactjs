import React, {Component} from "react";
import TopPost from "./toppost";
import ListTag from "./listtag";
import {connect} from "react-redux";
import * as TopPostAction from "../../../actions/topPost";


class ListPost extends Component {
    componentDidMount() {
        this.props.loadAddTopPost();
    }
    render() {
        console.log('top post => ', this.props.topPosts);
        return(
            <div class="widget widget-popular-post wow fadeInUp">
                <div class="widget-content">
                    <div class="widget-title">
                        <h2>Bài viết mới nhất</h2>
                    </div>
                    <div class="widget-extra-info-holder">
                        {
                            this.props.topPosts.posts.map((post, index) => {
                                return (
                                    <TopPost key={index} post={post}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        topPosts: state.TopPostReducer
    };
}
export default connect(mapStateToProps, TopPostAction)(ListPost);
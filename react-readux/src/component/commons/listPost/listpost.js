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
        return(
            <aside id="sidebar">
                <div id="solopine_latest_news_widget-2" className="widget solopine_latest_news_widget">
                    <h4 className="widget-heading">
                        <span>BÀI VIẾT MỚI NHẤT</span>
                    </h4>
                    <ul className="side-newsfeed">
                        {
                            this.props.topPosts.posts.map((post, index) => {
                                return (
                                    <TopPost key={index} post={post}/>
                                )
                            })
                        }
                    </ul>
                </div>
                <div id="tag_cloud-2" className="widget widget_tag_cloud">
                    <h4 className="widget-heading">
                        <span>THẺ TAG</span>
                    </h4>
                    <ListTag />
                </div>
            </aside>
        )
    }
}
function mapStateToProps(state) {
    return {
        topPosts: state.TopPostReducer
    };
}
export default connect(mapStateToProps, TopPostAction)(ListPost);
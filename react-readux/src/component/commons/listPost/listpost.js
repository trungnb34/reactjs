import React, {Component} from "react";
import TopPost from "./toppost";
import ListTag from "./listtag";

class ListPost extends Component {
    render() {
        return(
            <aside id="sidebar">
                <div id="solopine_latest_news_widget-2" className="widget solopine_latest_news_widget">
                    <h4 className="widget-heading">
                        <span>BÀI VIẾT MỚI NHẤT</span>
                    </h4>
                    <ul className="side-newsfeed">
                        <TopPost />
                    </ul>
                </div>
                <div id="tag_cloud-2" className="widget widget_tag_cloud">
                    <h4 className="widget-heading">
                        <span>THẺ TAG</span>
                    </h4>
                    <div className="tagcloud">
                        <ListTag />
                    </div>
                </div>
            </aside>
        )
    }
}

export default ListPost;
import React, {Component} from "react";
import ListPost from "../commons/listPost/listpost";
import ListTag from "../commons/listPost/listtag";
import Social from "../commons/listPost/social";
import Posts from "./posts";

class Content extends Component {
    render() {
        return (
            <div class="container">
                <div class="main-post-area-wrapper main-post-area-layout-one">
                    <div class="main-post-area-inner">
                        <div class="row">
                            <Posts />
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <aside class="sidebar">
                                    <div class="sidebar-inner">
                                        <ListPost />
                                        <ListTag />
                                        <Social />
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div class="pagination_holder">
                        <ul class="pagination">
                        <li class="disabled"><a href="#">«</a></li>
                        <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">»</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Content;
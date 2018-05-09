import React, {Component} from "react";
import Menu from "../layout/menu/menu";
import ListPost from "../commons/listPost/listpost";
import ListTag from "../commons/listPost/listtag";
import Social from "../commons/listPost/social";
import ItemPost from "./main-content";
import Footer from "../layout/footer/footer";
import Detail from "./detail";
import ItemRelatedPost from "./itemRelatedPost";
import MainContent from "./main-content";
import * as ListPostByCate from "../../actions/listPost";
import {connect} from "react-redux";
import BaseAPI from "../service/BaseAPI";
import Tag from "./tag";

class Content extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.getData();
    }
    componentDidUpdate() {
        this.getData();
    }

    getData() {
        let param = this.props.location.pathname.split('/');
        console.log(param);
        // let nav = param[1];
        // let value = param[2];
        // if(nav == 'category') {
        //     return (
        //         <MainContent param={value} />
        //     )
        // } else if(nav == 'post'){
        //     return (
        //         <Detail param={value} />
        //     )
        // } else {
        //     return (
        //         <Tag param={value} />
        //     )
        // }
    }

    render() {
        return (
            <div class="container">
                <Menu />
                <div class="main-post-area-wrapper main-post-area-layout-one">
                    <div class="main-post-area-inner">
                        <div class="row">
                            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <div class="main-post-area-holder">
                                    <article class="post-details-holder wow  fadeInUp">
                                        <div class="post-image">
                                            <img src="https://offshorethemes.com/html/optimistic-blog/demo/assets/dist/img/post-eight.jpeg" alt="...." />
                                        </div>
                                        <div class="post-title">
                                            <h2>That evening at bali beach was wounderful then any other evening</h2>
                                        </div>
                                        <div class="post-the-content clearfix layout-one-first-letter">
                                            <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                                            </p>
                                        </div>
                                        <div class="post-permalink">
                                            <a href="#">Continue Reading</a>
                                        </div>
                                        <div class="post-meta-and-share">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <div class="post-author">
                                                        <span class="post-author"><a href="#">Sparkle Themes</a></span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <div class="post-share">
                                                        <div class="share"></div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <div class="post-comment-count">
                                                        <span class="post-comment-count"><a href="#">0 Comment</a></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
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
        // return(
        //     <div className="wapper">
        //         <Menu />
        //         <div className="container wrapper_content">
        //             <div id="content">
        //                 {this.getData()}
        //                 <ListPost />
        //                 <Footer />
        //             </div>
        //         </div>
        //     </div>
        // )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.PostByCate
    };
}


export default connect(mapStateToProps, ListPostByCate)(Content);
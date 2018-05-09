import React, {Component} from "react";
// import ItemCate from "./itemCate";
import { connect } from "react-redux";
import {Link} from "react-router";
import * as cateActions from "../../actions/cate";

class ListCate extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadAllCate();
    }

    logData() {
        return this.props.cates.cates.map((cate, index) => {
            return (
                <div key={index}>
                    {/* <h2><Link to={"/category/" + cate.title[0].slug}>{cate.title[0].name}</Link></h2>
                    <ul className="grid cs-style-3">
                        {
                            cate.value.map((subCate, i) => {
                                return(
                                    <ItemCate subCate={subCate} key={i}/>
                                )
                            })
                        }
                    </ul> */}
                </div>
            )
        })
    }

    render() {
        var that = this;
        return(
            <aside class="sidebar container">
                <div class="sidebar-inner row">
                    <div class="widget widget-about-me wow fadeInUp col-sm-4">
                        <div class="widget-content">
                            <div class="widget-about-me-profile">
                                <img src="https://offshorethemes.com/html/optimistic-blog/demo/assets/dist/img/profile.jpeg" alt="..." />
                            </div>
                            <div class="widget-extra-info-holder">
                                <div class="widget-author-name">
                                    <h3>Anuj Subedi</h3>
                                    <a href="#"><span class="author-profession">Ghost Blogger</span></a>
                                </div>
                                <div class="widget-author-bio">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="widget widget-about-me wow fadeInUp col-sm-4">
                        <div class="widget-content">
                            <div class="widget-about-me-profile">
                                <img src="https://offshorethemes.com/html/optimistic-blog/demo/assets/dist/img/profile.jpeg" alt="..." />
                            </div>
                            <div class="widget-extra-info-holder">
                                <div class="widget-author-name">
                                    <h3>Anuj Subedi</h3>
                                    <a href="#"><span class="author-profession">Ghost Blogger</span></a>
                                </div>
                                <div class="widget-author-bio">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="widget widget-about-me wow fadeInUp col-sm-4">
                        <div class="widget-content">
                            <div class="widget-about-me-profile">
                                <img src="https://offshorethemes.com/html/optimistic-blog/demo/assets/dist/img/profile.jpeg" alt="..." />
                            </div>
                            <div class="widget-extra-info-holder">
                                <div class="widget-author-name">
                                    <h3>Anuj Subedi</h3>
                                    <a href="#"><span class="author-profession">Ghost Blogger</span></a>
                                </div>
                                <div class="widget-author-bio">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
}
function mapStateToProps(state) {
    return {
        cates: state.ListCateReducer
    };
}

export default connect(mapStateToProps, cateActions)(ListCate);
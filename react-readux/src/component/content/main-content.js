import React, {Component} from "react";
import ItemPost from "./itemPost";
import Pagination from "./pagination";
import {connect} from "react-redux";
import * as listPostByCate from "../../actions/listPost";
// import BaseAPI from "../service/BaseAPI";

class MainContent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.filterPostByCate(this.props.param, 1);
    }

    componentWillReceiveProps(newProps) {
        if(this.props.param !== newProps.param) {
            this.props.filterPostByCate(this.props.param, 1);
        }
    }

    render() {
        return(
            <div id="main" className="regular category_detail">
                <div>
                    <h1 className="find_with">
                        {this.props.posts.cates}
                    </h1>
                </div>
                <br />
                {
                    this.props.posts.posts.map((post, index) => {
                        return(
                            <ItemPost key={index} post={post} favorite={this.props.posts.favorites}/>
                        )
                    })
                }
                <Pagination cate_slug={this.props.param}/>
            </div>
        )
    }
}
function mapStateToProp(state) {
    return {
        posts: state.PostByCate
    }
}
export default connect(mapStateToProp, listPostByCate)(MainContent);
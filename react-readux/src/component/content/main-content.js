import React, {Component} from "react";
import ItemPost from "./itemPost";
import {connect} from "react-redux";
import * as listPostByCate from "../../actions/listPost";
import store from "../../reducers/store";
import BaseAPI from "../../BaseAPI";

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts: [],
            cateName: ''
        }
    }
    componentDidMount() {
        // BaseAPI.get('get-all-post-by-cate/' + this.props.param).then(posts => {
        //     this.state.cateName = posts.data.cateName;
        //     this.state.posts = posts.data.posts;
        //     this.setState(this.state);
        //     // console.log(posts);
        // })
    }
    componentDidUpdate() {
        // BaseAPI.get('get-all-post-by-cate/' + this.props.param).then(posts => {
        //     this.state.cateName = posts.data.cateName;
        //     this.state.posts = posts.data.posts;
        //     this.setState(this.state);
        //     // console.log(posts);
        // })
    }
    // showData () {
    //     BaseAPI.get('get-all-post-by-cate/' + this.props.param).then(posts => {
    //         // this.state.cateName = posts.data.cateName;
    //         // this.state.posts = posts.data.posts;
    //         // this.setState(this.state);
    //         console.log(posts);
    //     })
    // }

    render() {
        return(
            <div id="main" className="regular category_detail">
                <div>
                    <h1 className="find_with">{
                       this.state.cateName
                    }</h1>
                </div>
                <br />
                <ItemPost />
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
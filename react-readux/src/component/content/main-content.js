import React, {Component} from "react";
import ItemPost from "./itemPost";
import {connect} from "react-redux";
import * as listPostByCate from "../../actions/listPost";
// import store from "../../reducers/store";
import BaseAPI from "../../BaseAPI";

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cateName: '',
            posts: []
        }
    }
    componentDidMount() {
        // this.props.filterPostByCate(this.props.param);
        BaseAPI.get('get-all-post-by-cate/' + this.props.param).then(posts => {
            this.state.cateName = posts.data.cateName;
            this.state.posts = posts.data.posts;
            this.setState(this.state);
        })
    }

    componentWillReceiveProps(newProps) {
        // this.props.filterPostByCate(this.props.param);
        BaseAPI.get('get-all-post-by-cate/' + newProps.param).then(posts => {
            this.state.cateName = posts.data.cateName;
            this.state.posts = posts.data.posts;
            this.setState(this.state);
        })
    }
    render() {
        return(
            <div id="main" className="regular category_detail">
                <div>
                    <h1 className="find_with">{
                       this.state.cateName
                    }</h1>
                </div>
                <br />
                {
                    this.state.posts.map((post, index) => {
                        return(
                            <ItemPost key={index} post={post}/>
                        )
                    })
                }
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
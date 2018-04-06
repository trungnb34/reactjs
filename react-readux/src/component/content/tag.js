import React, {Component} from "react";
import ItemPost from "./itemPost";
import {connect} from "react-redux";
import * as listPostByCate from "../../actions/listPost";
// import store from "../../reducers/store";
import BaseAPI from "../../BaseAPI";

class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagName: '',
            posts: []
        }
    }
    componentDidMount() {
        BaseAPI.get('get-all-post-by-tag/' + this.props.param).then(posts => {
            this.state.tagName = posts.data.tagName;
            this.state.posts = posts.data.posts;
            this.setState(this.state);
        })
    }

    componentWillReceiveProps(newProps) {
        console.log(this.props.param);
        console.log(newProps.param);
        if(this.props.param !== newProps.param) {
            BaseAPI.get('get-all-post-by-tag/' + newProps.param).then(posts => {
                this.state.tagName = posts.data.tagName;
                this.state.posts = posts.data.posts;
                this.setState(this.state);
            })
        }
    }
    render() {
        return(
            <div id="main" className="regular category_detail">
                <div>
                    <h1 className="find_with">{
                       this.state.tagName
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
export default connect(mapStateToProp, listPostByCate)(Tag);
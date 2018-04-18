import React, {Component} from "react";
import ItemPost from "./itemPost";
import {connect} from "react-redux";
import * as listPostByCate from "../../actions/listPost";
import BaseAPI from "../service/BaseAPI";

class Tag extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tagName: '',
            posts: [],
            favorite: []
        }
    }

    componentDidMount() {
        this.getData(this.props.param);
    }

    getData(param) {
        BaseAPI.get('get-all-post-by-tag/' + param).then(posts => {
            this.state.tagName = posts.data.tagName;
            this.state.posts = posts.data.posts;
            this.state.favorite = posts.data.favorite
            this.setState(this.state);
        })
    }
    componentWillReceiveProps(newProps) {
        if(this.props.param !== newProps.param) {
            this.getData(newProps.param);
        }
    }
    render() {
        return (
            <div id="main" className="regular category_detail">
                <div>
                    <h1 className="find_with">
                        { this.state.tagName }
                    </h1>
                </div>
                <br />
                {
                    this.state.posts.map((post, index) => {
                        return (
                            <ItemPost key={index} post={post} favorite={this.state.favorite} />
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
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
        this.props.filterPostByCate(this.props.param);
    }

    componentWillReceiveProps(newProps) {
        if(this.props.param !== newProps.param) {
            this.props.filterPostByCate(this.props.param);
        }
    }

    render() {
        return(
            <div id="main" className="regular category_detail">
                <div>
                    <h1 className="find_with">{
                       this.props.posts.cates
                    }</h1>
                </div>
                <br />
                {
                    this.props.posts.posts.map((post, index) => {
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
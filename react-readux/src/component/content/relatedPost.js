import React, {Component} from "react";
import ItemRelatedPost from "./itemRelatedPost";
import BaseAPI from "../service/BaseAPI";
import * as relatePost from "../../actions/relatePost";
import {connect} from "react-redux";

class RelatedPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    
    componentWillReceiveProps(newProps) {
        BaseAPI.get('get-relate-post/' + newProps.cate).then(posts => {
            this.setState({posts: posts.data.posts});
        })
    }

    render() {
        return(
            <div className="post-related"><h4 className="block-heading">BÀI LIÊN QUAN</h4>
                {
                    this.state.posts.map((post, index) => {
                        return (
                            <ItemRelatedPost key={index} post={post}/>
                        )
                    })
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        posts: state.ReletePost
    }
}
export default connect(mapStateToProps, relatePost)(RelatedPost);
import React, {Component} from "react";
import ItemRelatedPost from "./itemRelatedPost";
import BaseAPI from "../../BaseAPI";

class RelatedPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidUpdate() {
        console.log(this.props.cate);
        // BaseAPI.get('get-relate-post/' + this.props.cate).then(posts => {
        //     console.log(posts.data);
        //     this.setState({posts: posts.data.relates});
        // })
    }
    render() {
        return(
            <div className="post-related"><h4 className="block-heading">BÀI LIÊN QUAN</h4>
                {
                    console.log(this.state.posts)
                    // this.props.posts.map((post, index) => {
                    //     return (
                    //         <ItemRelatedPost key={index}/>
                    //     )
                    // })
                }
            </div>
        )
    }
}

export default RelatedPost;
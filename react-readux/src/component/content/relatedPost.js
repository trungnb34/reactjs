import React, {Component} from "react";
import ItemRelatedPost from "./itemRelatedPost";

class RelatedPost extends Component {
    render() {
        return(
            <div class="post-related"><h4 class="block-heading">BÀI LIÊN QUAN</h4>
                <ItemRelatedPost />
            </div>
        )
    }
}
import React, {Component} from "react";
import ItemPost from "./itemPost";

class MainContent extends Component {
    render() {
        return(
            <div id="main" class="regular category_detail">
                <div>
                    <h1 class="find_with">TIẾNG NHẬT </h1>
                </div>
                <br />
                <ItemPost />
            </div>
        )
    }
}

export default MainContent;
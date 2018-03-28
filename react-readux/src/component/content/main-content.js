import React, {Component} from "react";
import ItemPost from "./itemPost";

class MainContent extends Component {
    render() {
        return(
            <div id="main" className="regular category_detail">
                <div>
                    <h1 className="find_with">TIẾNG NHẬT </h1>
                </div>
                <br />
                <ItemPost />
            </div>
        )
    }
}

export default MainContent;
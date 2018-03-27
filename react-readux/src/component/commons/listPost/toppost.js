import React, {Component} from "react";

class TopPost extends Component {
    render() {
        return(
            <li>
                <div class="side-item">
                    <div class="side-image">
                        <a href="#" rel="bookmark">
                            <img width="500" height="380" src="http://blog.beetsoft.com.vn/files/files/reaml.png" alt="iOS Databases: SQLite vs. Core Data vs. Realm" />
                        </a>
                    </div>
                    <div class="side-item-text">
                        <h4>
                            <a href="#" rel="bookmark" class="title">iOS Databases: SQLite vs. Core Data vs. Realm</a>
                        </h4>
                        <span class="side-item-meta"></span>
                    </div>
                </div>
            </li>
        )
    }
}
export default TopPost;
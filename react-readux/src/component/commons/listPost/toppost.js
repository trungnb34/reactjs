import React, {Component} from "react";

class TopPost extends Component {
    render() {
        return(
            <li>
                <div className="side-item">
                    <div className="side-image">
                        <a href="#" rel="bookmark">
                            <img width="500" height="380" src="http://blog.beetsoft.com.vn/files/files/reaml.png" alt="iOS Databases: SQLite vs. Core Data vs. Realm" />
                        </a>
                    </div>
                    <div className="side-item-text">
                        <h4>
                            <a href="#" rel="bookmark" className="title">iOS Databases: SQLite vs. Core Data vs. Realm</a>
                        </h4>
                        <span className="side-item-meta"></span>
                    </div>
                </div>
            </li>
        )
    }
}
export default TopPost;
import React, {Component} from "react";
import { Link } from "react-router";

const errorImg = window.location.origin + '/asset/images/error-img.png';

// console.log(window.location);

class PageNotFound extends Component {
    render() {
        return(
            <div className="body404">
                <div className="header">
                    <div className="logo">
                        {/* <h1 className="ohh"></h1> */}
                    </div>
                </div>
                <div className="content">
                    <img src={errorImg} title="error" />
                    <p><span><label>O</label>hh.....</span>You Requested the page that is no longer There.</p>
                    <Link to={""}>Back To Home</Link>
                    <div className="copy-right">
                        <p>&copy; Copyright © Beetsoft Co., Ltd</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default PageNotFound;
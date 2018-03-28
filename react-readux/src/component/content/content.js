import React, {Component} from "react";
import Menu from "../commons/menu/menu";
import ListPost from "../commons/listPost/listpost";
import ItemPost from "./main-content";
import Footer from "../commons/footer/footer";
import Detail from "./detail";
import ItemRelatedPost from "./itemRelatedPost";

class Content extends Component {
    render() {
        return(
            <div className="wapper">
                <Menu />
                <div className="container wrapper_content">
                    <div id="content">
                        <ItemPost />
                        <ListPost />
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;
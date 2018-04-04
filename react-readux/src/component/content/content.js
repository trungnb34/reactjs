import React, {Component} from "react";
import Menu from "../commons/menu/menu";
import ListPost from "../commons/listPost/listpost";
import ItemPost from "./main-content";
import Footer from "../commons/footer/footer";
import Detail from "./detail";
import ItemRelatedPost from "./itemRelatedPost";
import MainContent from "./main-content";
import * as ListPostByCate from "../../actions/listPost";
import {connect} from "react-redux";
import BaseAPI from "../../BaseAPI";

class Content extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.getData();
    }
    componentDidUpdate() {
        this.getData();
    }

    getData() {
        let param = this.props.location.pathname.split('/');
        let nav = param[1];
        let value = param[2];
        if(nav == 'category') {
            return (
                <MainContent param={value} />
            )
        } else {
            return (
                <Detail param={value} />
            )
        }
    }

    render() {
        return(
            <div className="wapper">
                <Menu />
                <div className="container wrapper_content">
                    <div id="content">
                        {this.getData()}
                        <ListPost />
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.PostByCate
    };
}


export default connect(mapStateToProps, ListPostByCate)(Content);
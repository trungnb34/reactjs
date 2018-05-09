import React, {Component} from "react";
import {Link} from "react-router";
import { connect } from "react-redux";
import Cate from "./cate";
import * as cateActions from "../../../actions/cate";

class ListCate extends Component {
    componentDidMount() {
        this.props.loadAllCate();
    }
    render() {
        return (
            <div class="col-lg-9 col-md-9 col-sm-6 col-xs-4 position_static">
                <nav class="main-nav layout-two">
                    <div id="main-nav" class="stellarnav">
                        <ul>
                            {
                                this.props.cates.cates.map((cate, index) => {
                                    return (
                                        <Cate key={index} cate={cate}/>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cates: state.ListCateReducer,
        user: state.UserInfo
    };
}


export default connect(mapStateToProps, cateActions)(ListCate);
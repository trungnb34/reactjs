import React, {Component} from "react";
import ItemCate from "./itemCate";
import { connect } from "react-redux";
import {Link} from "react-router";
import * as cateActions from "../../actions/cate";

class ListCate extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadAllCate();
    }

    logData() {
        return this.props.cates.cates.map((cate, index) => {
            return (
                <div key={index}>
                    <h2><Link to={"/category/" + cate.title[0].slug}>{cate.title[0].name}</Link></h2>
                    <ul className="grid cs-style-3">
                        {
                            cate.value.map((subCate, i) => {
                                return(
                                    <ItemCate subCate={subCate} key={i}/>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        })
    }

    render() {
        var that = this;
        return(
            <div className="white blue" >
                {
                    this.logData()
                }
        </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        cates: state.ListCateReducer
    };
}

export default connect(mapStateToProps, cateActions)(ListCate);
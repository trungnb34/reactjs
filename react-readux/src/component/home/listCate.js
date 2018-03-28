import React, {Component} from "react";
import ItemCate from "./itemCate";
import { connect } from "react-redux";
import {Link} from "react-router";

class ListCate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cates: [],
        }
        // const {dispatch} = this.props;
        // dispatch({type: 'GET_ALL'});
    }
    componentDidMount() {
        // const {dispatch} = this.props;
        // dispatch({type: 'GET_ALL'});
        console.log('data ', this.props.cates);

        this.props.cates.then(cates => {
            cates.map((cate, index) => {
                // console.log(cate);
                this.state.cates.push(cate);
                this.setState(this.state);
            })
        })
        // console.log('test => ', this.state);
    }
    render() {
        return(
            <div className="white blue" >
                {
                    this.state.cates.map((cate, index) => {
                        return(
                            <div key={index}>
                                <h2><Link to={"category/" + cate.title[0].slug}>{cate.title[0].name}</Link></h2>
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
        </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        cates: state.ListCateReducer
    };
}

export default connect(mapStateToProps)(ListCate);
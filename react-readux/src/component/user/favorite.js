import React, {Component} from "react";
import {connect} from "react-redux";
import ItemPost from "../content/itemPost";
import Menu from "../layout/menu/menu";
import ListPost from "../commons/listPost/listpost";
import Footer from "../layout/footer/footer";
import * as GetFavorite from "../../actions/getFavorite";

class Favorite extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getFavorite();
    }

    render() {
        return (
            <div className="wapper">
                <Menu />
                <div className="container wrapper_content">
                    <div id="content">
                        <div id="main" className="regular category_detail">
                            <div>
                                <h1 className="find_with">
                                    {
                                        this.props.posts.cates
                                    }
                                </h1>
                            </div>
                            <br />
                            {
                                this.props.posts.posts.map((post, index) => {
                                    return(
                                        <ItemPost key={index} post={post} favorite={this.props.posts.favorites}/>
                                    )
                                })
                            }
                        </div>
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
        posts: state.GetFavorite
    }
}

export default connect(mapStateToProps, GetFavorite)(Favorite);
import React, {Component} from "react";
import * as ListTagAction from "../../../actions/listTag";
import {connect} from "react-redux";
import {Link} from "react-router";

class ListTag extends Component {

    componentDidMount() {
        this.props.loadListTag();
    }
    render() {
        return(
            <div  className="tagcloud">
            {
                this.props.tags.tags.map((tag, index) => {
                    return (
                        <Link to={"/tag/" + tag.slug} key={index} className="tag-link-4 tag-link-position-1 css-style" title="1 topic">{tag.name} </Link>
                    )
                })
            }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        tags: state.ListTagReducer
    };
}
export default connect(mapStateToProps, ListTagAction)(ListTag);
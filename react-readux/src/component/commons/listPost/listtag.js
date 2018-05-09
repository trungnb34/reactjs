import React, {Component} from "react";
import * as ListTagAction from "../../../actions/listTag";
import {connect} from "react-redux";
import {Link} from "react-router";

class ListTag extends Component {

    componentDidMount() {
        this.props.loadListTag();
    }
    render() {
        console.log(this.props.tags);
        return(
            <div class="widget widget-category wow fadeInUp">
                <div class="widget-content">
                    <div class="widget-title">
                        <h2>Tag</h2>
                    </div>
                    <div class="widget-extra-info-holder">
                        {
                            this.props.tags.tags.map((tag, index) => {
                                return (
                                    <Link key={index} to={"/tag/" + tag.slug} class="btn btn-success item-tag">{tag.name}</Link>
                                )
                            })
                        }
                    </div>
                </div>
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
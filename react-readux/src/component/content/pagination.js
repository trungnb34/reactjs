import React, {Component} from "react";
import {connect} from "react-redux";
import * as GetCountPostByCate from "../../actions/getCountPost";

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: []
        }
        this.changePage = this.changePage.bind(this);
    }

    componentDidMount() {
        this.props.getCountPost(this.props.cate_slug);
    }

    changePage(index) {
        // console.log(e.target);
        this.props.filterPostByCate(this.props.cate_slug, index);
    }

    render() {
        return (
            <div className="container-fuld">
                <div className="col-xs-8 phan-trang">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            {
                                this.props.count.count.map((value, index) => {
                                    return (
                                        <li key={index} className="page-item index"><a className="page-link" onClick={() => {this.changePage(value)}}>{value}</a></li>
                                    );
                                })
                            }
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.GetCountPostByCate
    }
}

export default connect(mapStateToProps, GetCountPostByCate)(Pagination);
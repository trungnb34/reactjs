import React, {Component} from "react";

class Search extends Component {
    render() {
        return(
            <div className="search">
                <form role="search" autoComplete="off" method="get" id="searchform" action="#">
                    <input type="text" placeholder="Tìm kiếm ..." name="title" id="s" className="input_search" />
                    <button className="button_search">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </form>
            </div>
        )
    }
}

export default Search;
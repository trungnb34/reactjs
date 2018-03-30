import React, {Component} from "react";
import Menu from "../commons/menu/menu";
import ListPost from "../commons/listPost/listpost";
import ItemPost from "./main-content";
import Footer from "../commons/footer/footer";
import Detail from "./detail";
import ItemRelatedPost from "./itemRelatedPost";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param: '',
            value: ''
        }
    }
    componentDidMount () {
        // console.log(this.props);
        // this.getParam();

    }
    componentDidUpdate() {
        // console.log(this.props);
        // this.getParam();
    }

    getParam() {
        let param = this.props.location.pathname.split('/');
        this.setState({
            param: param[1],
            value: param[2]
        })
        // console.log(param[1]);
    }

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
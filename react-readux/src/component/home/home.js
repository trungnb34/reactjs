import React, {Component} from "react";
import Menu from "../layout/menu/menu";
import ListCate from "./listCate";
import Content from "./content";

class Home extends Component {
    render() {
        return (
            <div className="container-fluid landingPage">
                <Menu />
                <Content />
                <footer>
                    {/* <div id="footer-copyright">
                        <div className="container">
                            <a href="#" className="left copyright">Copyright © Beetsoft Co., Ltd</a>
                        </div>
                    </div> */}
                </footer>
            </div>
        )
    }
}
export default Home;
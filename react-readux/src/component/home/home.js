import React, {Component} from "react";
import Header from "./header";
import Menu from "../layout/menu/menu";
import ListCate from "./listCate";

class Home extends Component {
    render() {
        return (
            <div className="container-fluid landingPage">
                <Menu />
                <Header />
                <ListCate />
                <footer>
                    <div id="footer-copyright">
                        <div className="container">
                            <a href="#" className="left copyright">Copyright © Beetsoft Co., Ltd</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Home;
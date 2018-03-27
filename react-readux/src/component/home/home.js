import React, {Component} from "react";
import Header from "./header";
import ListCate from "./listCate";

class Home extends Component {
    render() {
        return (
            <div className="container-fluid landingPage">
                <Header />
                <ListCate />
                <ListCate />
                <ListCate />
                <footer>
                    <div id="footer-copyright">
                        <div className="container">
                            <a href="http://beetsoft.com.vn/" className="left copyright" target="_blank">Copyright © Beetsoft Co., Ltd</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Home;
import React, {Component} from "react";

class Footer extends Component {
    render() {
        return(
            <footer id="footer">
                <div className="wrap_footer">
                    <div className="copyright col-md-4 col-xs-4 col-sm-4 col-md-offset-2">
                        <ul>
                            <li><a href="#">Điều Khoản</a></li>
                            <li><a href="#">FanPage</a></li>
                        </ul>
                    </div>
                    <div className="copyright col-md-4 col-xs-4 col-sm-4 col-md-offset-2">
                        <a href="#" className="left">Copyright © Beetsoft Co., Ltd</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
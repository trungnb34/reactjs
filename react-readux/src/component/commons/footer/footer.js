import React, {Component} from "react";

class Footer extends Component {
    render() {
        return(
            <footer id="footer">
                <div class="wrap_footer">
                    <div class="copyright col-md-4 col-xs-4 col-sm-4 col-md-offset-2">
                        <ul>
                            <li><a href="http://blog.beetsoft.com.vn/library/TOS">Điều Khoản</a></li>
                            <li><a href="https://www.facebook.com/groups/257713851081977/?fref=ts" target="_blank">FanPage</a></li>
                        </ul>
                    </div>
                    <div class="copyright col-md-4 col-xs-4 col-sm-4 col-md-offset-2">
                        <a href="http://beetsoft.com.vn/" class="left" target="_blank">Copyright © Beetsoft Co., Ltd</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
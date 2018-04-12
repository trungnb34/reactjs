import React, {Component} from "react";
// import "../../../public/css-js/default.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="bgk_top">
                    <div className="logo text">
                        <a href="/">BEETBLOG</a>
                    </div>
                    <div className="login">
                        <div className="btn_login text">
                            <a href="http://localhost:8000/login">ĐĂNG NHẬP</a>
                        </div>
                    </div>
                </div>
                <div className="slogan">
                    <h1>Nơi chia sẻ và học tập kiến thức về lập trình miễn phí</h1>
                    <p>
                        iOS, Switft, Android, NodeJS, AngularJS, UI/UX, WebRTC, ...<br />
                        Rất nhiều các chủ đề, bài viết hữu ích. Hãy tham gia cộng đồng và cùng chia sẻ &amp; hoàn thiện mình!
                    </p>
                </div>
            </div>
        )
    }
}

export default Header;
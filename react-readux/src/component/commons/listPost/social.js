import React , {Component} from "react";

class Social extends Component {
    render() {
        return (
            <div class="widget widget-social-links wow fadeInUp">
                <div class="widget-content">
                    <div class="widget-title">
                        <h2>I'M social</h2>
                    </div>
                    <div class="widget-extra-info-holder">
                        <div class="widget-social-links">
                            <ul class="social-links-list">
                                <li class="facebook-link">
                                    <a href="http://facebook.com/" class="clearfix" target="_blank">
                                        Facebook                                
                                        <span class="social-icon">
                                        <i class="fa fa-facebook"></i>
                                        </span>                             
                                        </a>
                                </li>
                                <li class="twitter-link">
                                    <a href="http://twitter.com/" class="clearfix" target="_blank">
                                            Twitter                             
                                        <span class="social-icon">
                                                <i class="fa fa-twitter"></i>
                                        </span>
                                        </a>
                                </li>
                                <li class="googleplus-link">
                                    <a href="http://plus.google.com/" class="clearfix" target="_blank">
                                            Google Plus                             
                                            <span class="social-icon">
                                                <i class="fa fa-google-plus"></i>
                                            </span>
                                    </a>
                                </li>
                                <li class="instagram-link">
                                    <a href="http://instagram.com/" class="clearfix" target="_blank">
                                            Instagram                              
                                            <span class="social-icon">
                                                <i class="fa fa-instagram"></i>
                                                </span>
                                        </a>
                                </li>
                                <li class="linkedin-link">
                                    <a href="http://linkedin.com/" class="clearfix" target="_blank">
                                        Linked In                              
                                            <span class="social-icon">
                                            <i class="fa fa-linkedin"></i>
                                            </span>
                                    </a>
                                </li>
                                <li class="youtube-link">
                                    <a href="http://youtube.com/" class="clearfix" target="_blank">
                                        Youtube                             
                                        <span class="social-icon">
                                            <i class="fa fa-youtube"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Social;
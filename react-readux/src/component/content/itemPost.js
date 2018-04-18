import React, {Component} from "react";
import {Link} from 'react-router';
import {connect} from "react-redux";
import * as AddFavorite from "../../actions/addFavorite";

class ItemPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classHeart: '',
            checkFavorite: false
        }
        this.changeFavoritePost = this.changeFavoritePost.bind(this);
    }
    
    changeFavoritePost(id) {
        this.props.AddFavorite(id);
        const className = document.querySelector('.id' + id).getAttribute('class');
        var classSet = "";
        if(className === 'fa fa-heart heart id' + id) {
            classSet = 'fa fa-heart-o heart id' + id;
        } else {
            classSet = 'fa fa-heart heart id' + id;
        }
        document.querySelector('.id' + id).setAttribute('class', classSet);
    }

    showFavorite() {
        if(localStorage['login']) {
            var checkFavorite = false;
            if(this.props.favorite !== undefined) {
                this.props.favorite.map((post_id, index) => {
                    if(post_id.post_id == this.props.post.id) {
                        checkFavorite = true;
                    }
                })
            }
            if(checkFavorite) {
                return (
                    <i className={'fa fa-heart heart id' + this.props.post.id}
                        onClick={() => this.changeFavoritePost(this.props.post.id)} 
                        aria-hidden="true"
                    >
                    </i>
                )
            }
            return (
                <i className={'fa fa-heart-o heart id' + this.props.post.id} onClick={() => this.changeFavoritePost(this.props.post.id)} aria-hidden="true"></i>
            )
        }
    }
    render() {
        return(
            <article id="post-6" className="list-item post-6 post type-post status-publish format-standard has-post-thumbnail hentry category-lifestyle">
                <div className="post-img">
                    <Link to={"/post/" + this.props.post.slug}>
                        <img width="500" height="380" src={this.props.post.avatar} alt={this.props.post.abstract} className="attachment-misc-thumb size-misc-thumb wp-post-image" />
                    </Link>
                </div>
                <div className="list-content">
                    <div className="post-header">
                        <div className="post_title">
                            <Link to={"/post/" + this.props.post.slug} className="title upercate">{this.props.post.title}</Link>
                            { this.showFavorite() }
                        </div>
                    </div>
                    <div className="post-entry">
                        <p>{this.props.post.abstract}</p>
                    </div>
                    <div className="post-meta">
                        <span className="meta-info">
                                    {this.props.post.created_at + " đăng bởi "}
                            <a href="#" title="Posts by Super Administrator" rel="author">{this.props.post.userName}</a>
                        </span>
                    </div>
                    <div className="post-share">
                        <a target="_blank" href="#"><i className="fa fa-facebook"></i></a>
                        <a target="_blank" href="#"><i className="fa fa-twitter"></i></a>
                        <a target="_blank" href="#"><i className="fa fa-google-plus"></i></a>
                    </div>
                </div>
            </article>
        ) 
    }
}

function mapStateToProps(state) {
    return {
        action : state.AddFavorite
    }
}

export default connect(mapStateToProps, AddFavorite)(ItemPost);
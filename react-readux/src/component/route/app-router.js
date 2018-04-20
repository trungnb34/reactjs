import {Router, Route, IndexRoute, browserHistory} from "react-router";
import React, { Component } from 'react';
import Home from "../home/home";
import Login from "../user/login";
import Register from "../user/register";
import PageNotFound from "../commons/pagenotfound/PageNotFound";
import Content from "../content/content";
import Profile from "../user/profile";
import UpdateProfile from "../user/updateProfile";
import Favorite from "../user/favorite";

class AppRouter extends Component {
    render() {
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={Home} />
                <Route path={"category/:slug"} component={Content} />
                <Route path={"post/:slug"} component={Content}/>
                <Route path={"tag/:slug"} component={Content}/>
                <Route path={"login"} component={Login}/>
                <Route path={"register"} component={Register}/>
                <Route path={"profile"} component={Profile} />
                <Route path={"update-profile"} component={UpdateProfile} />
                <Route path={"favorite"} component={Favorite} />                
                <Route path={"*"} component={PageNotFound}/>
            </Router>
        )
    }
}

export default AppRouter;
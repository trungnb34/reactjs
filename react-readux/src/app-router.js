import {Router, Route, IndexRoute, browserHistory} from "react-router";
import React, { Component } from 'react';
import Home from "./component/home/home";
import Login from "./component/user/login";
import Register from "./component/user/register";
import PageNotFound from "./component/commons/pagenotfound/PageNotFound";
import Content from "./component/content/content";

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
                <Route path={"*"} component={PageNotFound}/>
            </Router>
        )
    }
}

export default AppRouter;
import ListCateReducer from "./listCate";
import TopPostReducer from "./topPost";
import ListTagReducer from "./listTag";
import PostByCate from "./postByCate";
import Router from "./router";
import RelatePost from "./relatePost";
import DetailPost from "./post";
import UserInfo from "./user";
import GetFavorite from "./getFavorite";
import UpdateProfile from "./updateProfile";
import GetCountPostByCate from "./getCoutPost";


import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
    ListCateReducer,
    TopPostReducer,
    ListTagReducer,
    PostByCate,
    Router,
    RelatePost,
    DetailPost,
    UserInfo,
    GetFavorite,
    UpdateProfile,
    GetCountPostByCate
});

const store = createStore(reducers, applyMiddleware(thunk));


export default store;
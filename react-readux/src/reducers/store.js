import ListCateReducer from "./listCate";
import TopPostReducer from "./topPost";
import ListTagReducer from "./listTag";
import PostByCate from "./postByCate";
import Router from "./router";
import RelatePost from "./relatePost";
import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
    ListCateReducer,
    TopPostReducer,
    ListTagReducer,
    PostByCate,
    Router,
    RelatePost
});

const store = createStore(reducers, applyMiddleware(thunk));


export default store;
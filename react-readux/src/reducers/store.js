import ListCateReducer from "./listCate";
import TopPostReducer from "./topPost";
import ListTagReducer from "./listTag";
import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
    ListCateReducer,
    TopPostReducer,
    ListTagReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
import ListCateReducer from "./listCate";
import {createStore, combineReducers, compose} from "redux";

const reducers = combineReducers({
    ListCateReducer
});

const store = createStore(reducers, compose(window.devToolsExtension?window.devToolsExtension() : f => f));

store.dispatch({type: 'GET_ALL'});

export default store;
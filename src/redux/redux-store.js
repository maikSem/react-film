import {
    applyMiddleware,
    combineReducers,
    createStore
} from "redux";
import movieReducer from './film-reducer';
import thunk from "redux-thunk";

let redusers = combineReducers({
    movieReducer: movieReducer
});

let store = createStore(redusers, applyMiddleware(thunk));

window.store = store;

export default store;
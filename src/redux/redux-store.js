import {
    applyMiddleware,
    combineReducers,
    createStore
} from "redux";
import movieReducer from './film-reducer';
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

let redusers = combineReducers({
    movieReducer: movieReducer,
    form: formReducer
});

let store = createStore(redusers, applyMiddleware(thunk));

window.store = store;

export default store;
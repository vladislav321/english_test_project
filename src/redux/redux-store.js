import {applyMiddleware ,createStore, combineReducers} from 'redux';
import listWordsReducer from './list-words-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    listWordsReducer : listWordsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
import {createStore, combineReducers} from 'redux';
import listWordsReducer from './list-words-reducer';

let reducers = combineReducers({
    listWordsReducer : listWordsReducer,
});

let store = createStore(reducers);

export default store;
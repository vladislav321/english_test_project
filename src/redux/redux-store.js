import {applyMiddleware ,createStore, combineReducers} from 'redux';
import listWordsReducer from './list-words-reducer';
import lessonsReducer from './lessons_reducer';
import thunkMiddleware from 'redux-thunk';
import translateWordsReducer from './translate_words_reducer';

let reducers = combineReducers({
    listWordsReducer : listWordsReducer,
    lessonsReducer : lessonsReducer,
    translateWordsReducer : translateWordsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
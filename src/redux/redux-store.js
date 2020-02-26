import {applyMiddleware ,createStore, combineReducers} from 'redux';
import listWordsReducer from './list-words-reducer';
import lessonsReducer from './lessons_reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    listWordsReducer : listWordsReducer,
    lessonsReducer : lessonsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
import { UserAPI } from "../api/api";
import { WordsRepository } from './../WordsRepository/listAllWords';

const CHOOSE_TOPIC = "CHOOSE_TOPIC";
const SET_LIST_WORDS = "SET_LIST_WORDS";
const GET_LIST_WORDS = "GET_LIST_WORDS";

let initState = {
    words: [],
};

const ListWordsReducer = (state = initState, action) => {

    switch(action.type)
    {
        case SET_LIST_WORDS:
            WordsRepository.setList(action.list);
            return {...state, words: action.list};

        case GET_LIST_WORDS:
            return {...state, words: WordsRepository.getList()}
        
        case CHOOSE_TOPIC:
            return {...state, words: WordsRepository.getListByLessons(action.lessons)}

        default: return state;
    }
}


export const setList = (list) => ({type: SET_LIST_WORDS, list});
export const getList = () => ({type: GET_LIST_WORDS});
export const chooseTopic = (lessons) => ({type: CHOOSE_TOPIC, lessons})

export const getListWords = () => (dispatch) => {

    if(WordsRepository.isListEmpty)
    {
        UserAPI.getWordsList().then(response => {
            dispatch( setList(response.data) );
        });
    }
    else
    {
            dispatch( getList() );
    }
}

export default ListWordsReducer;
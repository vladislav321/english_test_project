import { UserAPI } from "../api/api";
import WordsRepositorySingelton from './../WordsRepository/listAllWords';

const CHOOSE_TOPIC = "CHOOSE_TOPIC";
const SET_LIST_WORDS = "SET_LIST_WORDS";
const GET_LIST_WORDS = "GET_LIST_WORDS";
const GET_LIST_LESSONS = "GET_LIST_LESSONS";

let initState = {
    words: [],
};

const ListWordsReducer = (state = initState, action) => {

    switch(action.type)
    {
        case SET_LIST_WORDS:
            WordsRepositorySingelton.getInstance().setList(action.list);
            return {...state, words: action.list};

        case GET_LIST_WORDS:
            return {...state, words: WordsRepositorySingelton.getInstance().getList()}
        
        case CHOOSE_TOPIC:
            return {...state, words: WordsRepositorySingelton.getInstance().getListByLessons(action.lessons)}

        case GET_LIST_LESSONS:
            return {...state, words: WordsRepositorySingelton.getInstance().getListLessons()}
        
        default: return state;
    }
}


export const setList = (list) => ({type: SET_LIST_WORDS, list});
export const getList = () => ({type: GET_LIST_WORDS});
export const chooseTopic = (lessons) => ({type: CHOOSE_TOPIC, lessons});
export const getListLessons = () => ({type: GET_LIST_LESSONS});

export const getListWords = () => (dispatch) => {

    if(WordsRepositorySingelton.getInstance().isListEmpty())
    {
        UserAPI.getWordsList().then(response => {
            dispatch( setList(response.data) );
            console.log("----- Loading List Words --------");
        });
    }
    else
    {
            dispatch( getList() );
    }
}

export default ListWordsReducer;
import { UserAPI } from "../api/api";
import WordsRepositorySingelton from './../WordsRepository/WordsRepositorySingelton';

const SET_LIST_WORDS = "SET_LIST_WORDS";
const GET_LIST_WORDS = "GET_LIST_WORDS";
const CLEAR_LIST_REPO = "CLEAR_LIST_REPO";

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
            return {...state, words: WordsRepositorySingelton.getInstance().getList() };

        case CLEAR_LIST_REPO:
            WordsRepositorySingelton.getInstance().ClearRepo();    
            return state;
        
        default: return state;
    }
}


export const setList = (list) => ({type: SET_LIST_WORDS, list});
export const getList = () => ({type: GET_LIST_WORDS});
export const clearRepo = () => ({type: CLEAR_LIST_REPO});


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
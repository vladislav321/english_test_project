import { UserAPI } from "../api/api";
import WordsRepository from '../WordsRepositoryFunc/WordsRepository';
import {SET_LIST_WORDS, SetListActionType, 
        GET_LIST_WORDS, GetListActionType,
        CLEAR_LIST_REPO, ClearRepoActionType,
        InitStateType} from './TypesRedux/list-words-types';
import { WordsDTO } from "../Model/WordsDTO";




let initState : InitStateType = {
    words: Array<WordsDTO>()
}

const ListWordsReducer = (state : InitStateType = initState , action: any): InitStateType => {

    switch(action.type)
    {
        case SET_LIST_WORDS:
            WordsRepository.getInstance().setList(action.list);
            return {...state, words: action.list};

        case GET_LIST_WORDS:
            return {...state, words: WordsRepository.getInstance().getList() };

        case CLEAR_LIST_REPO:
            WordsRepository.getInstance().clearRepo();    
            return state;
        
        default: return state;
    }
}



export const setList = (list: Array<WordsDTO>): SetListActionType => ({type: SET_LIST_WORDS, list});
export const getList = (): GetListActionType => ({type: GET_LIST_WORDS});
export const clearRepo = (): ClearRepoActionType => ({type: CLEAR_LIST_REPO});

export const getListWords = () => async (dispatch: any) => {

    if(WordsRepository.getInstance().isNullOrEmptyListWords())
    {
        let list = await UserAPI.getWordsList();
        console.log(list);
        dispatch( setList(list) );
        console.log("----- Loading List Words --------");
     
    }
    else
    {
        dispatch( getList() );
    }
}

export default ListWordsReducer;
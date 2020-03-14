import { UserAPI } from "../api/api";

import {SET_LIST_WORDS, SetListActionType, 
        GET_LIST_WORDS, GetListActionType,
        CLEAR_LIST_REPO, ClearRepoActionType,
        InitStateType} from './TypesRedux/list-words-types';
import { WordsDTO } from "../Model/WordsDTO";
import WordsRepository from "../WordsRepositoryFunc/WordsRepository";




let initState : InitStateType = {
    words: Array<WordsDTO>()
}

const ListWordsReducer = (state : InitStateType = initState , action: ActionsType): InitStateType => {

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

type ActionsType = SetListActionType | GetListActionType | ClearRepoActionType;

export const setList = (list: Array<WordsDTO>): SetListActionType => ({type: SET_LIST_WORDS, list});
export const getList = (): GetListActionType => ({type: GET_LIST_WORDS});
export const clearRepo = (): ClearRepoActionType => ({type: CLEAR_LIST_REPO});

export const getListWords = () => async (dispatch: any) => {

    if(WordsRepository.getInstance().isNullOrEmptyListWords())
    {
        let list = await UserAPI.getWordsList();
        dispatch( setList(list) );
        console.log("----- Loading List Words --------");
    }
    else
    {
        dispatch( getList() );
    }
}

export default ListWordsReducer;
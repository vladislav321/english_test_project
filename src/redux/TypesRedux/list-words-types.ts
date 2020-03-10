import { WordsDTO } from "../../Model/WordsDTO";

export const SET_LIST_WORDS = "SET_LIST_WORDS";
export const GET_LIST_WORDS = "GET_LIST_WORDS";
export const CLEAR_LIST_REPO = "CLEAR_LIST_REPO";


export type SetListActionType = {
    type: typeof SET_LIST_WORDS,
    list: Array<WordsDTO>
}

export type GetListActionType = {
    type: typeof GET_LIST_WORDS
}

export type ClearRepoActionType = {
    type: typeof CLEAR_LIST_REPO
}

export type InitStateType = {
    words: Array<WordsDTO>
}
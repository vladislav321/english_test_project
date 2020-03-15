import { getWordFromLessonByNumber } from './../../redux/translate_words_reducer';
import { TypeCurrectList } from './../../Enum/TypeCurrectList';
import { WordsDTO } from "../../Model/WordsDTO";

export const GET_WORD_BY_NUMBER = "GET_WORD_BY_NUMBER";
export const NEXT_LESSON = "NEXT_LESSON";
export const PREVIUS_LESSON = "PREVIUS_LESSON";
export const GET_FIRST_MODEL = "GET_FIRST_MODEL";
export const SET_WRONG_WORDS = "SET_INCURRECT_WORDS";
export const SAVE_WRONG_WORDS = "SAVE_WRONG_WORDS";
export const UPDATE_CURRECT_LIST = "UPDATE_CURRECT_LIST";

export type InitStateType = {
    model: WordsDTO
}

export type GetWordFromLessonByNumberActionTypes = {
    type: typeof GET_WORD_BY_NUMBER,
    lessonId: number,
    number: number,
    model: WordsDTO
}

export type GetNextLessonActionTypes = {
    type: typeof NEXT_LESSON,
    lessonId: number
}

export type GetPreviusLessonActionTypes = {
    type: typeof PREVIUS_LESSON,
    lessonId: number
}

export type GetFirstModelActionType = {
    type: typeof GET_FIRST_MODEL,
    lessonId: number
}

export type SaveWrongWordsActionType = {
    type: typeof SAVE_WRONG_WORDS
}

export type UpdateCurrectListActionType = {
    type: typeof UPDATE_CURRECT_LIST
    typeList: TypeCurrectList
}

export type SetWrongWordsActionType = {
    type: typeof SET_WRONG_WORDS,
    model: WordsDTO
}

export type MapStatePropsType = {
    model: WordsDTO
}

export type MapDispatchPropsType = {
    getWordFromLessonByNumber: (lessonId: number, wordsCount: number, model: WordsDTO) => void
    getNextLesson: (lessonId: number) => void
    getPreviusLesson: (lessonId: number) => void
    setWrongWords: (model: WordsDTO) => void
}

export type OwnPropsType = {
    match: any
}

export type OwnDispatchPropsType = {
    getFirstModel: (lessonId: number) => void
    saveWrongWods: () => void
    updateCurrectList: (typeList: TypeCurrectList) => void
}
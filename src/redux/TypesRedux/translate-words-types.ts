import { type } from "os";
import { WordsDTO } from "../../Model/WordsDTO";

export const GET_WORD_BY_NUMBER = "GET_WORD_BY_NUMBER";
export const NEXT_LESSON = "NEXT_LESSON";
export const PREVIUS_LESSON = "PREVIUS_LESSON";

export type InitStateType = {
    model: WordsDTO
}

export type GetWordFromLessonByNumberActionTypes = {
    type: typeof GET_WORD_BY_NUMBER,
    lessonId: number,
    number: number
}

export type GetNextLessonActionTypes = {
    type: typeof NEXT_LESSON,
    lessonId: number
}

export type GetPreviusLessonActionTypes = {
    type: typeof PREVIUS_LESSON,
    lessonId: number
}
import { WordsDTO } from "../../Model/WordsDTO";

export const GET_LIST_LESSONS = "GET_LIST_LESSONS";

export type GetListLessonsActionType = {
    type: typeof GET_LIST_LESSONS
}

export type InitStateType = {
    sortListLessons: Array<WordsDTO>
}

export type MapDispatchPropsType = {
    getListLessons: () => void
}

export type MapStatePropsType = {
    sortListLessons: Array<WordsDTO>
}

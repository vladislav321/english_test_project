import { LessonPersent } from "../../Model/LessonPersent";

export const GET_LIST_LESSONS = "GET_LIST_LESSONS";

export type GetListLessonsActionType = {
    type: typeof GET_LIST_LESSONS
}

export type InitStateType = {
    sortListLessons: Array<LessonPersent>
}

export type MapDispatchPropsType = {
    getListLessons: () => void
}

export type MapStatePropsType = {
    sortListLessons: Array<LessonPersent>
}

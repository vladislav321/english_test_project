import { GET_LIST_LESSONS, InitStateType, GetListLessonsActionType } from "../Types/ListLessons/lessons-types";
import WordsRepository from "../WordsRepositoryFunc/WordsRepository";
import { LessonPersent } from "../Model/LessonPersent";
import { LessonsSorter } from "../WordsRepositoryFunc/LessonsSorter";
import { InCorectWords } from "../WordsRepositoryFunc/InCorectWords";
import { WrapperLocalStorage } from "../Model/WrapperLocalStorage/WrapperLocalStorage";


let initState: InitStateType = {
    sortListLessons: Array<LessonPersent>()
}

const LesssonsReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {

    switch(action.type)
    {
        case GET_LIST_LESSONS:
                let listWords = WordsRepository.getInstance().getList();
                let listInCorrectWords = new InCorectWords( new WrapperLocalStorage() ).getListWords();
               return {...state, sortListLessons: new LessonsSorter(listWords).getListLessonsWithPercet(listInCorrectWords) }

        default :
            return state  
    }

}

type ActionsType = GetListLessonsActionType;

export const getListLessons = (): GetListLessonsActionType => ({type: GET_LIST_LESSONS});

export default LesssonsReducer;
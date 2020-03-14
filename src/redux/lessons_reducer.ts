import { GET_LIST_LESSONS, InitStateType, GetListLessonsActionType } from "../Types/ListLessons/lessons-types";
import { WordsDTO } from "../Model/WordsDTO";
import  {WordsController}  from "../WordsRepositoryFunc/WordsController";
import WordsRepository from "../WordsRepositoryFunc/WordsRepository";


let initState: InitStateType = {
    sortListLessons: Array<WordsDTO>()
}

const LesssonsReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {

    switch(action.type)
    {
        case GET_LIST_LESSONS:
            return {...state, sortListLessons: new WordsController(WordsRepository.getInstance().getList()).getListLessons() }

        default :
            return state  
    }

}

type ActionsType = GetListLessonsActionType;

export const getListLessons = (): GetListLessonsActionType => ({type: GET_LIST_LESSONS});

export default LesssonsReducer;
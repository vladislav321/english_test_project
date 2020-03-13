
import { InitStateType , GET_WORD_BY_NUMBER,
        NEXT_LESSON, PREVIUS_LESSON, 
        GetWordFromLessonByNumberActionTypes,
        GetNextLessonActionTypes,
        GetPreviusLessonActionTypes } from '../Types/TranslateWords/translate-words-types';
import { WordsDTO } from '../Model/WordsDTO';
import { WordsController } from '../WordsRepositoryFunc/WordsController';


let initState : InitStateType = {
    model: new WordsDTO().setId("1").setLessonId(1).setWordsCount(1).setLesson("---").setEn("---").setRu("---")
}

const TranslateWordsReducer = (state: InitStateType = initState, action: any) : InitStateType => {

    switch(action.type)
    {
        case GET_WORD_BY_NUMBER:
            return {...state, model: new WordsController().getWordsFromLesson(action.lessonId,action.number ) };

        case NEXT_LESSON:
            return {...state, model: new WordsController().getNextLesson(action.lessonId)};
        
        case PREVIUS_LESSON:
            return {...state, model: new WordsController().getPreviusLesson(action.lessonId)};

        default :
            return {...state, model: new WordsController().getWordsFromLesson(1, 0) }    
    }
}

export const getWordFromLessonByNumber = (lessonId: number, number: number):GetWordFromLessonByNumberActionTypes  => ({type: GET_WORD_BY_NUMBER, lessonId, number})
export const getNextLesson = (lessonId: number): GetNextLessonActionTypes => ({type: NEXT_LESSON, lessonId});
export const getPreviusLesson = (lessonId: number): GetPreviusLessonActionTypes => ({type: PREVIUS_LESSON, lessonId});


export default TranslateWordsReducer;


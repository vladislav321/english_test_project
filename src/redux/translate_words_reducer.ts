
import {GET_WORD_BY_NUMBER,
        NEXT_LESSON, PREVIUS_LESSON, GET_FIRST_MODEL,
        SET_WRONG_WORDS, SAVE_WRONG_WORDS,
        InitStateType,
        GetWordFromLessonByNumberActionTypes, GetNextLessonActionTypes,
        GetPreviusLessonActionTypes , GetFirstModelActionType,
        SetWrongWordsActionType, SaveWrongWordsActionType} from '../Types/TranslateWords/translate-words-types';

import { WordsDTO } from '../Model/WordsDTO';
import  {WordsController} from '../WordsRepositoryFunc/WordsController';
import WordsRepository from './../WordsRepositoryFunc/WordsRepository';
import { NotKnowledgeOfWords } from '../WordsRepositoryFunc/NotKnowledgeOfWords';
import {NotKnowledgeOfWordsController} from '../WordsRepositoryFunc/NotKnowledgeOfWordsController';
import { WrapperLocalStorage } from '../Model/WrapperLocalStorage/WrapperLocalStorage';

// -- Init Object --
let wordsController: WordsController = new WordsController(WordsRepository.getInstance().getList());
let notKnowledgeOfWords: NotKnowledgeOfWords = new NotKnowledgeOfWords(new WrapperLocalStorage());

// -- Init Object --

let initState : InitStateType = {
    model: new WordsDTO().setId("1").setLessonId(1).setWordsCount(1).setLesson("---").setEn("---").setRu("---")
}

const TranslateWordsReducer = (state: InitStateType = initState, action: ActionsTypes) : InitStateType => {

    switch(action.type)
    {
        case GET_WORD_BY_NUMBER:
            return {...state, model: wordsController.getWordsFromLesson(action.lessonId, action.number ) };

        case NEXT_LESSON:
            return {...state, model: wordsController.getNextLesson(action.lessonId)};
        
        case PREVIUS_LESSON:
            return {...state, model: wordsController.getPreviusLesson(action.lessonId)};

        case GET_FIRST_MODEL:
            return {...state, model: wordsController.getLessonModel( action.lessonId, 0 )}    

        case SET_WRONG_WORDS:
            notKnowledgeOfWords.setModel(action.model);
            return state;    

        case SAVE_WRONG_WORDS:
            notKnowledgeOfWords.saveListInLocalStorage();
            return state;    
            
        default :
            return state;    
    }
}

type ActionsTypes = GetWordFromLessonByNumberActionTypes | GetNextLessonActionTypes | GetPreviusLessonActionTypes | 
GetFirstModelActionType | SetWrongWordsActionType | SaveWrongWordsActionType;

export const getWordFromLessonByNumber = (lessonId: number, number: number): GetWordFromLessonByNumberActionTypes  => ({type: GET_WORD_BY_NUMBER, lessonId, number})
export const getNextLesson = (lessonId: number): GetNextLessonActionTypes => ({type: NEXT_LESSON, lessonId});
export const getPreviusLesson = (lessonId: number): GetPreviusLessonActionTypes => ({type: PREVIUS_LESSON, lessonId});
export const getFirstModel = (lessonId: number): GetFirstModelActionType => ({type: GET_FIRST_MODEL, lessonId});
export const setWrongWords = (model: WordsDTO): SetWrongWordsActionType => ({type: SET_WRONG_WORDS, model});
export const saveWrongWods = (): SaveWrongWordsActionType => ({type: SAVE_WRONG_WORDS});

export default TranslateWordsReducer;


import { InCorrectWordsState } from './../WordsRepositoryFunc/WordsControllerState/InCorrectWordsState';
import { CorrectWordsState } from './../WordsRepositoryFunc/WordsControllerState/CorrectWordsState';
import { TypeCurrectList } from './../Enum/TypeCurrectList';

import {GET_WORD_BY_NUMBER,
        NEXT_LESSON, PREVIUS_LESSON, GET_FIRST_MODEL,
        SET_WRONG_WORDS, SAVE_WRONG_WORDS,UPDATE_CURRECT_LIST,
        InitStateType,
        GetWordFromLessonByNumberActionTypes, GetNextLessonActionTypes,
        GetPreviusLessonActionTypes , GetFirstModelActionType,
        SetWrongWordsActionType, SaveWrongWordsActionType, UpdateCurrectListActionType} from '../Types/TranslateWords/translate-words-types';

import { WordsDTO } from '../Model/WordsDTO';
import  {WordsController} from '../WordsRepositoryFunc/WordsController';
import WordsRepository from './../WordsRepositoryFunc/WordsRepository';
import { InCorectWords } from '../WordsRepositoryFunc/InCorectWords';
import { WrapperLocalStorage } from '../Model/WrapperLocalStorage/WrapperLocalStorage';
import { WordsControllerState } from '../WordsRepositoryFunc/WordsControllerState/WordsControllerState';

// -- Init Object --

//let wordsController: WordsController = new WordsController(WordsRepository.getInstance().getList());
let inCorectWords: InCorectWords = new InCorectWords(new WrapperLocalStorage());
let wordsControllerState: WordsControllerState = new CorrectWordsState(WordsRepository.getInstance().getList());

// -- Init Object --

let initState : InitStateType = {
    model: new WordsDTO().setId("1").setLessonId(1).setWordsCount(1).setLesson("---").setEn("---").setRu("---")
}

const TranslateWordsReducer = (state: InitStateType = initState, action: ActionsTypes) : InitStateType => {

    switch(action.type)
    {
        case GET_WORD_BY_NUMBER:
            inCorectWords.decrementSucssesCount(action.model);
            return {...state, model: wordsControllerState.getWordsFromLesson(action.lessonId, action.number ) };

        case NEXT_LESSON:
            return {...state, model: wordsControllerState.getNextLesson(action.lessonId)};
        
        case PREVIUS_LESSON:
            return {...state, model: wordsControllerState.getPreviusLesson(action.lessonId)};

        case GET_FIRST_MODEL:
            return {...state, model: wordsControllerState.getLessonModel( action.lessonId, 0 )}    

        case SET_WRONG_WORDS:
            inCorectWords.setModel(action.model);
            return state;    

        case SAVE_WRONG_WORDS:
            inCorectWords.saveListInLocalStorage();
            return state;  
            
        case UPDATE_CURRECT_LIST:
            if(action.typeList === TypeCurrectList.Currect){
                wordsControllerState = new CorrectWordsState(WordsRepository.getInstance().getList())
                //wordsController.updateListWords(WordsRepository.getInstance().getList());    
            }
            else{
                wordsControllerState = new InCorrectWordsState(inCorectWords.getListWords());
                //wordsController.updateListWords(inCorectWords.getListWords());
            }
               

            return state;

        default :
            return state;    
    }
}

type ActionsTypes = GetWordFromLessonByNumberActionTypes | GetNextLessonActionTypes | GetPreviusLessonActionTypes | 
GetFirstModelActionType | SetWrongWordsActionType | SaveWrongWordsActionType | UpdateCurrectListActionType;

export const getWordFromLessonByNumber = (lessonId: number, number: number, model: WordsDTO): GetWordFromLessonByNumberActionTypes  => ({type: GET_WORD_BY_NUMBER, lessonId, number, model})
export const getNextLesson = (lessonId: number): GetNextLessonActionTypes => ({type: NEXT_LESSON, lessonId});
export const getPreviusLesson = (lessonId: number): GetPreviusLessonActionTypes => ({type: PREVIUS_LESSON, lessonId});
export const getFirstModel = (lessonId: number): GetFirstModelActionType => ({type: GET_FIRST_MODEL, lessonId});
export const setWrongWords = (model: WordsDTO): SetWrongWordsActionType => ({type: SET_WRONG_WORDS, model});
export const saveWrongWods = (): SaveWrongWordsActionType => ({type: SAVE_WRONG_WORDS});
export const updateCurrectList = (typeList: TypeCurrectList): UpdateCurrectListActionType => ({type: UPDATE_CURRECT_LIST, typeList})

export default TranslateWordsReducer;

